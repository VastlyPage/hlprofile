import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import express from 'express'
import { createServer as createViteServer } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const isProduction = process.env.NODE_ENV === 'production'
const PORT = process.env.PORT || 3000

async function createServer() {
  const app = express()
  app.use(express.json())

  let vite
  if (!isProduction) {
    // Development mode: Create Vite server in middleware mode
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom'
    })
    app.use(vite.middlewares)
  } else {
    // Production mode: Serve static files
    app.use(express.static(path.resolve(__dirname, 'dist/client'), { index: false }))
  }

  // POST endpoint to render with custom data
  app.post('/', async (req, res, next) => {
    const url = '/'
    const data = req.body

    try {
      let template
      let render

      if (!isProduction) {
        // Development: Read and transform template
        template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8')
        template = await vite.transformIndexHtml(url, template)
        
        // Load the server entry
        const module = await vite.ssrLoadModule('/src/entry-server.jsx')
        render = module.render
      } else {
        // Production: Use pre-built files
        template = fs.readFileSync(path.resolve(__dirname, 'dist/client/index.html'), 'utf-8')
        const module = await import('./dist/server/entry-server.js')
        render = module.render
      }

      // Render the app HTML with data
      const { html: appHtml, dataScript } = await render(data)

      // Inject the app-rendered HTML and data script into the template
      const html = template
        .replace(`<!--ssr-outlet-->`, appHtml)
        .replace(`</body>`, `${dataScript}</body>`)

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {
      if (!isProduction && vite) {
        vite.ssrFixStacktrace(e)
      }
      console.error(e.stack)
      next(e)
    }
  })

  app.get('/', (req, res) => {
	res.end();
  });

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
    console.log(`Mode: ${isProduction ? 'production' : 'development'}`)
    console.log(`POST to / with JSON data to render template`)
  })
}

createServer()

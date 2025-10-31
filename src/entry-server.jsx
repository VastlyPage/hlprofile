import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './App'

export function render(data = {}) {
  // Inject data into global variable that App can access
  const dataScript = `<script>window.__PROFILE_DATA__ = ${JSON.stringify(data)};</script>`
  
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <App data={data} />
    </React.StrictMode>
  )
  
  return { html, dataScript }
}

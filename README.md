# hlprofile
Profile page for every Hyperliquid identity

## Features

- Built with Vite SSR, React, and SCSS
- Express server with Vite middleware for development
- Server-side rendering (SSR) with React
- POST endpoint accepts JSON data to render personalized profile pages
- Proper hydration for client-side interactivity

## Development

Consult the `package.json` file.

## Docker Image

```sh
docker build -t hl.place/hlprofile .
docker run -p 8080:3000 hl.place/hlprofile
```

## API Usage

The Express server exposes a POST endpoint at `/` that accepts JSON data and returns a fully rendered HTML page.

### POST `/`

**Request Body:**
```json
{
  "Avatar": "https://example.com/avatar.jpg",
  "Domain": "username.hl",
  "Bio": "Your custom bio text here",
  "Twitter": "https://twitter.com/username",
  "Discord": "https://discord.gg/server",
  "Telegram": "https://t.me/username",
  "Website": "https://yourwebsite.com"
}
```

**Response:**
- Returns: Complete HTML page with the provided data rendered

### Example Usage

```bash
# Using curl
curl -X POST http://localhost:3000/ \
  -H "Content-Type: application/json" \
  -d '{
    "Avatar": "https://via.placeholder.com/400",
    "Domain": "myprofile.hl",
    "Bio": "Custom bio text",
    "Twitter": "https://twitter.com/myhandle",
    "Discord": "https://discord.gg/myserver",
    "Telegram": "https://t.me/myusername",
    "Website": "https://mywebsite.com"
  }' > output.html
```

Or use the included test script:
```bash
./test-server.sh
```

## Workflow

1. **Build**: Run `pnpm build` to create the production build in the `dist/` folder
2. **Start**: Run `pnpm start` to start the Express server
3. **POST**: Send POST requests to `/` with JSON data to get rendered HTML pages

The server reads the built `dist/index.html` file and replaces template placeholders with your provided data

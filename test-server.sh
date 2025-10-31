#!/bin/bash

# Example: Test the Vite SSR server with sample data

echo "Testing POST request to / endpoint..."
echo ""

curl -X POST http://localhost:3000/ \
  -H "Content-Type: application/json" \
  -d '{
    "Avatar": "https://i.pravatar.cc/400",
    "Domain": "myprofile.hl",
    "Bio": "This is my custom bio text that will replace the default lorem ipsum. I am a developer and designer who loves creating beautiful web experiences.",
    "Twitter": "https://twitter.com/myhandle",
    "Discord": "https://discord.gg/myserver",
    "Telegram": "https://t.me/myusername",
    "Website": "https://mywebsite.com"
  }' \
  > output.html

echo ""
echo "✅ Response saved to output.html"
echo "Open output.html in your browser to see the server-rendered result!"

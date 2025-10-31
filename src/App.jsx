import React from 'react'
import './App.scss'

function App() {
  const socialLinks = [
    { name: 'Twitter', url: 'https://twitter.com/yourusername', variant: 'primary' },
    { name: 'Discord', url: 'https://discord.gg/yourserver', variant: 'secondary' },
    { name: 'Telegram', url: 'https://t.me/yourusername', variant: 'primary' },
    { name: 'Website', url: 'https://yourwebsite.com', variant: 'primary' },
    { name: '✨ My Wishlist', url: 'https://yourwishlist.com', variant: 'primary' },
    { name: 'Use my Hyperliquid ref link', url: 'https://hyperliquid.xyz', variant: 'primary' },
    { name: 'Invite to my secret project 👀', url: 'https://secretproject.com', variant: 'primary' },
    { name: 'Invite to my secret project 👀', url: 'https://secretproject.com', variant: 'primary' },
    { name: 'Invite to my secret project 👀', url: 'https://secretproject.com', variant: 'primary' },
    { name: 'Invite to my secret project 👀', url: 'https://secretproject.com', variant: 'primary' },
    { name: 'Invite to my secret project 👀', url: 'https://secretproject.com', variant: 'primary' },
    { name: 'Invite to my secret project 👀', url: 'https://secretproject.com', variant: 'primary' },
  ]

  return (
    <div className="app">
      <div className="container">
        <div className="profile-card">
          <div className="profile-left">
            <div className="avatar-container">
              <div className="avatar-placeholder">
                {/* Avatar image goes here */}
              </div>
            </div>
            <h1 className="username">testooor.hl</h1>
            <p className="bio">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            </p>
          </div>
          
          <div className="profile-right">
            <div className="links-container">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  className={`link-button ${link.variant}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
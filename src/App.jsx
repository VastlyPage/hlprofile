import React from 'react'
import './App.scss'

function App({ data = {} }) {
  // Use data from props (SSR) or from window (client hydration)
  const profileData = typeof window !== 'undefined' && window.__PROFILE_DATA__ 
    ? window.__PROFILE_DATA__ 
    : data

  const {
    Avatar = '',
    Domain = 'testooor.hl',
    Bio = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores',
    Twitter = '#',
    Discord = '#',
    Telegram = '#',
    Website = '#'
  } = profileData

  return (
    <div className="app">
      <div className="container">
        <div className="profile-card">
          <div className="profile-left">
            <div className="avatar-container">
              <div className="avatar-placeholder">
                {Avatar && <img src={Avatar} alt={Domain} />}
              </div>
            </div>
            <h1 className="username">{Domain}</h1>
            <p className="bio">{Bio}</p>
          </div>
          
          <div className="profile-right">
            <div className="links-container">
              <a 
                href={Twitter}
                className="link-button primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a 
                href={Discord}
                className="link-button primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discord
              </a>
              <a 
                href={Telegram}
                className="link-button primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Telegram
              </a>
              <a 
                href={Website}
                className="link-button primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
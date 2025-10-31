import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/main.scss'

ReactDOM.hydrateRoot(
  document.getElementById('app'),
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

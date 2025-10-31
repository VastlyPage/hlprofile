import React from 'react'
import './App.scss'

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>HL Profile</h1>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="main">
        <section id="about" className="section">
          <h2>About</h2>
          <p>Welcome to my minimal profile page built with React, SWC, and Vite.</p>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Project 1</h3>
              <p>Description of your first project.</p>
            </div>
            <div className="project-card">
              <h3>Project 2</h3>
              <p>Description of your second project.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>Get in touch with me.</p>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 HL Profile. Built with React + Vite + SWC.</p>
      </footer>
    </div>
  )
}

export default App
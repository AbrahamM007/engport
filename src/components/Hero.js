import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import './Hero.css';
import heroImage from './Abraham.png';

// Revolutionary Minimalist SVG Icons
const MinimalGithub = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

const MinimalLinkedin = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const MinimalMail = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container container">
        <div className="hero-content">
          <div className="hero-status">
            <span className="status-dot"></span>
            Available for new opportunities
          </div>

          <h1 className="hero-greeting">
            Abraham
          </h1>

          <h2 className="hero-tagline">
            Software Engineer & UI Designer
          </h2>

          <p className="hero-description">
            I create clean, functional interfaces and robust systems. 
            Focused on simplicity, performance, and user experience.
          </p>

          <div className="hero-actions">
            <a href="#artifacts" className="hero-cta">
              <span>View Work</span>
              <ArrowRight size={16} />
            </a>
            <a href="/resume.pdf" className="hero-secondary" target="_blank" rel="noopener noreferrer">
              <Download size={16} />
              <span>Resume</span>
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link interactive" aria-label="GitHub">
              <MinimalGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link interactive" aria-label="LinkedIn">
              <MinimalLinkedin />
            </a>
            <a href="mailto:abraham@example.com" className="social-link interactive" aria-label="Email">
              <MinimalMail />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-container interactive">
            <img src={heroImage} alt="Abraham" className="hero-image" />
            <div className="image-frame"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
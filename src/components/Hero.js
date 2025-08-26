import React from 'react';
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';
import './Hero.css';
import heroImage from './Abraham-image.png';

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
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="mailto:abraham@example.com" className="social-link" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-container">
            <img src={heroImage} alt="Abraham" className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
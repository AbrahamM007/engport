import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-status">
            <span className="status-dot"></span>
            Available for new opportunities
          </div>
          <h1 className="hero-greeting">
            Hey, I'm <span className="hero-name">Abraham</span>
          </h1>
          <h2 className="hero-tagline">
            A <span className="gradient-text">Digital Product Designer</span> and{' '}
            <span className="gradient-text">Engineer</span> crafting the future.
          </h2>
          <p className="hero-description">
            I specialize in creating innovative and user-centric solutions. This
            portfolio is a showcase of my journey, skills, and passion for
            engineering and design.
          </p>
          <div className="hero-actions">
            <button className="btn-primary">View My Work</button>
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link"><Github /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link"><Linkedin /></a>
              <a href="mailto:youremail@example.com" className="social-link"><Mail /></a>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="hero-image-placeholder">
            {/* You can place an <img /> tag here */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
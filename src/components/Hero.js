import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';
import './Hero.css';
import heroImage from './132838022.png';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.3
      }
    }
  };

  return (
    <section className="hero">
      <div className="hero-decoration hero-decoration-1"></div>
      <div className="hero-decoration hero-decoration-2"></div>
      
      <div className="hero-container container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-status" variants={itemVariants}>
            <span className="status-dot"></span>
            Available for new opportunities
          </motion.div>

          <motion.h1 className="hero-greeting" variants={itemVariants}>
            Hey, I'm <span className="hero-name">Abraham</span>
          </motion.h1>

          <motion.h2 className="hero-tagline" variants={itemVariants}>
            A <span className="gradient-text">Digital Product Designer</span> and{' '}
            <span className="gradient-text">Engineer</span> crafting the future.
          </motion.h2>

          <motion.p className="hero-description" variants={itemVariants}>
            I specialize in creating innovative and user-centric solutions that bridge 
            the gap between cutting-edge technology and exceptional user experience. 
            This portfolio showcases my journey, expertise, and passion for engineering excellence.
          </motion.p>

          <motion.div className="hero-actions" variants={itemVariants}>
            <a href="#artifacts" className="hero-cta">
              <span>View My Work</span>
              <ArrowRight size={20} />
            </a>
            <a href="/resume.pdf" className="hero-secondary" target="_blank" rel="noopener noreferrer">
              <Download size={18} />
              <span>Download Resume</span>
            </a>
          </motion.div>

          <motion.div className="social-links" variants={itemVariants}>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:abraham@example.com" 
              className="social-link"
              aria-label="Email Contact"
            >
              <Mail size={20} />
            </a>
          </motion.div>

          <motion.div className="hero-stats" variants={itemVariants}>
            <div className="hero-stat">
              <span className="hero-stat-number">4+</span>
              <span className="hero-stat-label">Years Experience</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">50+</span>
              <span className="hero-stat-label">Projects Completed</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">15+</span>
              <span className="hero-stat-label">Technologies Mastered</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-image-container">
            <img 
              src={heroImage} 
              alt="Abraham - Digital Product Designer and Engineer" 
              className="hero-image"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
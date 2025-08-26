import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <div className="about-container container">
        <div className="about-grid">
          <div className="about-content">
            <div className="about-header">
              <div className="section-marker"></div>
              <h1>About</h1>
            </div>
            
            <div className="about-text">
              <p className="lead">
                I'm a software engineer and UI designer focused on creating 
                clean, functional interfaces and robust systems.
              </p>
              
              <p>
                My approach centers on simplicity, performance, and exceptional 
                user experience. I believe the best solutions are often the most 
                elegant ones—removing complexity while maintaining functionality.
              </p>
              
              <p>
                Currently pursuing my passion for minimalist design and 
                engineering excellence through various projects and continuous learning.
              </p>
            </div>
            
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">4+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Technologies</span>
              </div>
            </div>
          </div>
          
          <div className="about-visual">
            <div className="philosophy-card">
              <h3>Design Philosophy</h3>
              <div className="philosophy-points">
                <div className="point">
                  <div className="point-marker"></div>
                  <span>Simplicity over complexity</span>
                </div>
                <div className="point">
                  <div className="point-marker"></div>
                  <span>Function drives form</span>
                </div>
                <div className="point">
                  <div className="point-marker"></div>
                  <span>Performance is paramount</span>
                </div>
                <div className="point">
                  <div className="point-marker"></div>
                  <span>Details matter</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
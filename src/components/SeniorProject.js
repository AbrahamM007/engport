import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Target, Award } from 'lucide-react';
import './SeniorProject.css';

const SeniorProject = () => {
  const milestones = [
    {
      phase: 'Research & Planning',
      date: 'September 2024',
      status: 'completed',
      description: 'Conducted market research and defined project scope'
    },
    {
      phase: 'Design & Prototyping',
      date: 'October 2024',
      status: 'completed',
      description: 'Created initial designs and built working prototype'
    },
    {
      phase: 'Development & Testing',
      date: 'November 2024',
      status: 'in-progress',
      description: 'Implementing final solution and conducting tests'
    },
    {
      phase: 'Final Presentation',
      date: 'December 2024',
      status: 'upcoming',
      description: 'Present final project to industry panel'
    }
  ];

  return (
    <section className="senior-project section">
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>
      
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="section-title gradient-text">Senior Capstone Project</h1>
          <p className="section-subtitle">
            Smart Environmental Monitoring System for Urban Agriculture
          </p>
        </motion.div>
        
        <div className="project-overview">
          <motion.div 
            className="project-hero glass-effect"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="project-image">
              <img src="/api/placeholder/600/400" alt="Senior Project" />
            </div>
            
            <div className="project-details">
              <h2>Project Overview</h2>
              <p>
                Developing an IoT-based environmental monitoring system that helps urban farmers 
                optimize growing conditions through real-time data collection and automated 
                responses. The system integrates sensors, microcontrollers, and a mobile app 
                to provide comprehensive agricultural insights.
              </p>
              
              <div className="project-stats">
                <div className="stat">
                  <Calendar className="stat-icon" />
                  <div>
                    <span className="stat-number">4</span>
                    <span className="stat-label">Months</span>
                  </div>
                </div>
                
                <div className="stat">
                  <Users className="stat-icon" />
                  <div>
                    <span className="stat-number">3</span>
                    <span className="stat-label">Team Members</span>
                  </div>
                </div>
                
                <div className="stat">
                  <Target className="stat-icon" />
                  <div>
                    <span className="stat-number">5</span>
                    <span className="stat-label">Key Features</span>
                  </div>
                </div>
                
                <div className="stat">
                  <Award className="stat-icon" />
                  <div>
                    <span className="stat-number">1st</span>
                    <span className="stat-label">Place Goal</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="project-timeline"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h3>Project Timeline</h3>
            <div className="timeline">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className={`timeline-item ${milestone.status}`}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                >
                  <div className="timeline-marker"></div>
                  <div className="timeline-content glass-effect">
                    <h4>{milestone.phase}</h4>
                    <span className="timeline-date">{milestone.date}</span>
                    <p>{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="project-features"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h3>Key Features & Technologies</h3>
          <div className="features-grid">
            {[
              {
                title: 'IoT Sensors',
                description: 'Temperature, humidity, soil moisture, and light sensors',
                tech: 'Arduino, ESP32'
              },
              {
                title: 'Data Analytics',
                description: 'Real-time data processing and predictive modeling',
                tech: 'Python, Machine Learning'
              },
              {
                title: 'Mobile App',
                description: 'User-friendly interface for monitoring and control',
                tech: 'React Native, Firebase'
              },
              {
                title: 'Automation',
                description: 'Automated irrigation and climate control systems',
                tech: 'Relay Modules, Actuators'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card glass-effect"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
                <span className="tech-tag">{feature.tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SeniorProject;
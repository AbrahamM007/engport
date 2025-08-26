import React from 'react';
import { Calendar, Users, Target, Award } from 'lucide-react';
import './SeniorProject.css';

const SeniorProject = () => {
  const milestones = [
    {
      phase: 'Research & Planning',
      date: 'Sep 2024',
      status: 'completed',
      description: 'Conducted market research and defined project scope'
    },
    {
      phase: 'Design & Prototyping',
      date: 'Oct 2024',
      status: 'completed',
      description: 'Created initial designs and built working prototype'
    },
    {
      phase: 'Development & Testing',
      date: 'Nov 2024',
      status: 'in-progress',
      description: 'Implementing final solution and conducting tests'
    },
    {
      phase: 'Final Presentation',
      date: 'Dec 2024',
      status: 'upcoming',
      description: 'Present final project to industry panel'
    }
  ];

  return (
    <section className="senior-project section">
      <div className="container">
        <div className="section-header">
          <h1>Senior Capstone Project</h1>
          <p>Smart Environmental Monitoring System for Urban Agriculture</p>
        </div>
        
        <div className="project-overview">
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
                <div className="stat-content">
                  <span className="stat-number">4</span>
                  <span className="stat-label">Months</span>
                </div>
              </div>
              
              <div className="stat">
                <Users className="stat-icon" />
                <div className="stat-content">
                  <span className="stat-number">3</span>
                  <span className="stat-label">Team Members</span>
                </div>
              </div>
              
              <div className="stat">
                <Target className="stat-icon" />
                <div className="stat-content">
                  <span className="stat-number">5</span>
                  <span className="stat-label">Key Features</span>
                </div>
              </div>
              
              <div className="stat">
                <Award className="stat-icon" />
                <div className="stat-content">
                  <span className="stat-number">1st</span>
                  <span className="stat-label">Place Goal</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="project-image">
            <div className="project-line-art">
              <svg width="100%" height="300" viewBox="0 0 400 300" className="project-diagram">
                {/* IoT System Diagram */}
                <rect x="50" y="50" width="80" height="60" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                <text x="90" y="85" textAnchor="middle" fontSize="10" fill="currentColor">Sensors</text>
                
                <rect x="160" y="50" width="80" height="60" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                <text x="200" y="85" textAnchor="middle" fontSize="10" fill="currentColor">MCU</text>
                
                <rect x="270" y="50" width="80" height="60" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                <text x="310" y="85" textAnchor="middle" fontSize="10" fill="currentColor">Cloud</text>
                
                <rect x="160" y="150" width="80" height="60" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                <text x="200" y="185" textAnchor="middle" fontSize="10" fill="currentColor">Mobile App</text>
                
                <rect x="50" y="230" width="80" height="40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                <text x="90" y="255" textAnchor="middle" fontSize="10" fill="currentColor">Irrigation</text>
                
                <rect x="270" y="230" width="80" height="40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                <text x="310" y="255" textAnchor="middle" fontSize="10" fill="currentColor">Analytics</text>
                
                {/* Connection Lines */}
                <line x1="130" y1="80" x2="160" y2="80" stroke="currentColor" strokeWidth="0.5"/>
                <line x1="240" y1="80" x2="270" y2="80" stroke="currentColor" strokeWidth="0.5"/>
                <line x1="200" y1="110" x2="200" y2="150" stroke="currentColor" strokeWidth="0.5"/>
                <line x1="160" y1="185" x2="130" y2="250" stroke="currentColor" strokeWidth="0.5"/>
                <line x1="240" y1="185" x2="270" y2="250" stroke="currentColor" strokeWidth="0.5"/>
                
                {/* Data Flow Arrows */}
                <polygon points="155,78 165,83 155,88" fill="currentColor" opacity="0.6"/>
                <polygon points="265,78 275,83 265,88" fill="currentColor" opacity="0.6"/>
                <polygon points="198,145 203,155 193,155" fill="currentColor" opacity="0.6"/>
              </svg>
            </div>
          </div>
        </div>
        
        <div className="project-timeline">
          <h3>Project Timeline</h3>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-date">{milestone.date}</div>
                <div className="timeline-content">
                  <h4>{milestone.phase}</h4>
                  <p>{milestone.description}</p>
                  <span className={`timeline-status ${milestone.status}`}>
                    {milestone.status.replace('-', ' ')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="project-features">
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
              <div key={index} className="feature-card">
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
                <span className="tech-tag">{feature.tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeniorProject;
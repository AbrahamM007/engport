import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Image, ExternalLink } from 'lucide-react';
import './Artifacts.css';

const Artifacts = () => {
  const [selectedGrade, setSelectedGrade] = useState('9th');
  
  const grades = ['9th', '10th', '11th', '12th'];
  
  const artifacts = {
    '9th': [
      {
        id: 1,
        title: 'Introduction to CAD Design',
        description: 'First project using AutoCAD to design basic mechanical parts',
        type: 'image',
        media: '/api/placeholder/400/300',
        skills: ['AutoCAD', 'Technical Drawing', 'Problem Solving']
      },
      {
        id: 2,
        title: 'Simple Circuit Design',
        description: 'Basic electrical circuit with LED and resistors',
        type: 'video',
        media: '/api/placeholder/400/300',
        skills: ['Electronics', 'Circuit Analysis', 'Breadboarding']
      }
    ],
    '10th': [
      {
        id: 3,
        title: 'Robotics Competition Entry',
        description: 'Designed and built a robot for school competition',
        type: 'video',
        media: '/api/placeholder/400/300',
        skills: ['Robotics', 'Programming', 'Teamwork']
      },
      {
        id: 4,
        title: '3D Printed Prototype',
        description: 'Created a functional prototype using 3D printing technology',
        type: 'image',
        media: '/api/placeholder/400/300',
        skills: ['3D Modeling', 'Prototyping', 'Manufacturing']
      }
    ],
    '11th': [
      {
        id: 5,
        title: 'Advanced Programming Project',
        description: 'Developed a mobile app for engineering calculations',
        type: 'video',
        media: '/api/placeholder/400/300',
        skills: ['Mobile Development', 'UI/UX', 'Mathematics']
      },
      {
        id: 6,
        title: 'Sustainable Design Challenge',
        description: 'Eco-friendly solution for waste management',
        type: 'image',
        media: '/api/placeholder/400/300',
        skills: ['Sustainability', 'Research', 'Innovation']
      }
    ],
    '12th': [
      {
        id: 7,
        title: 'Capstone Project Preview',
        description: 'Initial presentation of senior capstone project',
        type: 'video',
        media: '/api/placeholder/400/300',
        skills: ['Project Management', 'Presentation', 'Leadership']
      },
      {
        id: 8,
        title: 'Industry Collaboration',
        description: 'Real-world project with local engineering firm',
        type: 'image',
        media: '/api/placeholder/400/300',
        skills: ['Professional Skills', 'Industry Standards', 'Collaboration']
      }
    ]
  };

  return (
    <section className="artifacts section">
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
          <h1 className="section-title gradient-text">My Artifacts</h1>
          <p className="section-subtitle">
            A collection of projects showcasing my growth through each grade level
          </p>
        </motion.div>
        
        <motion.div 
          className="grade-selector"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {grades.map((grade) => (
            <button
              key={grade}
              className={`grade-btn ${selectedGrade === grade ? 'active' : ''}`}
              onClick={() => setSelectedGrade(grade)}
            >
              {grade} Grade
            </button>
          ))}
        </motion.div>
        
        <motion.div 
          className="artifacts-grid"
          key={selectedGrade}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {artifacts[selectedGrade].map((artifact, index) => (
            <motion.div
              key={artifact.id}
              className="artifact-card glass-effect"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="artifact-media">
                <img src={artifact.media} alt={artifact.title} />
                <div className="media-overlay">
                  {artifact.type === 'video' ? <Play /> : <Image />}
                </div>
              </div>
              
              <div className="artifact-content">
                <h3 className="artifact-title">{artifact.title}</h3>
                <p className="artifact-description">{artifact.description}</p>
                
                <div className="artifact-skills">
                  {artifact.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
                
                <button className="artifact-link">
                  <ExternalLink size={16} />
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Artifacts;
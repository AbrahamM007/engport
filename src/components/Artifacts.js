import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Image, ExternalLink, Code, Palette, Cpu, Zap } from 'lucide-react';
import './Artifacts.css';

const Artifacts = () => {
  const [selectedGrade, setSelectedGrade] = useState('9th');
  
  const grades = [
    { id: '9th', label: '9th Grade', year: '2021' },
    { id: '10th', label: '10th Grade', year: '2022' },
    { id: '11th', label: '11th Grade', year: '2023' },
    { id: '12th', label: '12th Grade', year: '2024' }
  ];
  
  const artifacts = {
    '9th': [
      {
        id: 1,
        title: 'Introduction to CAD Design',
        description: 'My first venture into computer-aided design, creating basic mechanical parts and learning the fundamentals of 3D modeling with precision and attention to detail.',
        type: 'image',
        media: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800',
        skills: ['AutoCAD', 'Technical Drawing', 'Problem Solving', '3D Modeling'],
        category: 'Engineering',
        icon: <Cpu />
      },
      {
        id: 2,
        title: 'Simple Circuit Design',
        description: 'Building foundational knowledge in electronics through hands-on circuit construction, exploring the relationship between voltage, current, and resistance.',
        type: 'video',
        media: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800',
        skills: ['Electronics', 'Circuit Analysis', 'Breadboarding', 'Multimeter Usage'],
        category: 'Electronics',
        icon: <Zap />
      }
    ],
    '10th': [
      {
        id: 3,
        title: 'Robotics Competition Entry',
        description: 'Led a team to design and build an autonomous robot for regional competition, integrating mechanical design with advanced programming concepts.',
        type: 'video',
        media: 'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=800',
        skills: ['Robotics', 'Python Programming', 'Teamwork', 'Project Management'],
        category: 'Robotics',
        icon: <Cpu />
      },
      {
        id: 4,
        title: '3D Printed Prototype',
        description: 'Designed and manufactured a functional prototype using additive manufacturing, bridging the gap between digital design and physical reality.',
        type: 'image',
        media: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800',
        skills: ['3D Modeling', 'Prototyping', 'Manufacturing', 'Design Thinking'],
        category: 'Manufacturing',
        icon: <Palette />
      }
    ],
    '11th': [
      {
        id: 5,
        title: 'Advanced Programming Project',
        description: 'Developed a comprehensive mobile application for engineering calculations, featuring an intuitive user interface and robust mathematical algorithms.',
        type: 'video',
        media: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
        skills: ['Mobile Development', 'UI/UX Design', 'Mathematics', 'React Native'],
        category: 'Software',
        icon: <Code />
      },
      {
        id: 6,
        title: 'Sustainable Design Challenge',
        description: 'Created an innovative eco-friendly solution for urban waste management, combining environmental consciousness with engineering excellence.',
        type: 'image',
        media: 'https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=800',
        skills: ['Sustainability', 'Research', 'Innovation', 'Environmental Engineering'],
        category: 'Environmental',
        icon: <Palette />
      }
    ],
    '12th': [
      {
        id: 7,
        title: 'Capstone Project Preview',
        description: 'Comprehensive presentation of my senior capstone project, demonstrating advanced technical skills and professional presentation capabilities.',
        type: 'video',
        media: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
        skills: ['Project Management', 'Presentation', 'Leadership', 'Technical Communication'],
        category: 'Leadership',
        icon: <Zap />
      },
      {
        id: 8,
        title: 'Industry Collaboration',
        description: 'Real-world engineering project completed in partnership with a local technology firm, applying classroom knowledge to industry challenges.',
        type: 'image',
        media: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
        skills: ['Professional Skills', 'Industry Standards', 'Collaboration', 'Quality Assurance'],
        category: 'Professional',
        icon: <Cpu />
      }
    ]
  };

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
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section className="artifacts">
      <div className="artifacts-container container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h1 className="section-title">My Artifacts</h1>
          <p className="section-subtitle">
            A curated collection of projects showcasing my evolution as an engineer, 
            from foundational concepts to advanced technical implementations.
          </p>
        </motion.div>
        
        <motion.div 
          className="grade-selector"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {grades.map((grade) => (
            <button
              key={grade.id}
              className={`grade-btn ${selectedGrade === grade.id ? 'active' : ''}`}
              onClick={() => setSelectedGrade(grade.id)}
              aria-label={`View ${grade.label} artifacts`}
            >
              <span>{grade.label}</span>
              <span style={{ fontSize: '0.75rem', opacity: 0.7 }}>({grade.year})</span>
            </button>
          ))}
        </motion.div>
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedGrade}
            className="artifacts-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {artifacts[selectedGrade].map((artifact, index) => (
              <motion.div
                key={artifact.id}
                className="artifact-card"
                variants={cardVariants}
                custom={index}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
                }}
                tabIndex={0}
                role="article"
                aria-label={`${artifact.title} artifact`}
              >
                <div className="artifact-media">
                  <img 
                    src={artifact.media} 
                    alt={artifact.title}
                    loading="lazy"
                  />
                  <div className="media-overlay">
                    {artifact.type === 'video' ? <Play size={24} /> : <Image size={24} />}
                  </div>
                  <div className="media-type-badge">
                    {artifact.type}
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
                  
                  <button 
                    className="artifact-link"
                    aria-label={`View details for ${artifact.title}`}
                  >
                    <ExternalLink size={16} />
                    <span>View Details</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Artifacts;
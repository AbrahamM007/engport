import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Target, Users, TrendingUp, Award, Clock } from 'lucide-react';
import './CareerReadiness.css';

const CareerReadiness = () => {
  const experiences = [
    {
      title: 'Engineering Intern',
      company: 'TechCorp Solutions',
      duration: 'Summer 2024',
      type: 'Internship',
      description: 'Worked on IoT device development and testing protocols',
      skills: ['Product Development', 'Testing', 'Documentation', 'Team Collaboration']
    },
    {
      title: 'Freelance CAD Designer',
      company: 'Self-Employed',
      duration: '2023 - Present',
      type: 'Freelance',
      description: 'Created 3D models and technical drawings for local businesses',
      skills: ['CAD Design', 'Client Communication', 'Project Management', 'Quality Assurance']
    },
    {
      title: 'Robotics Mentor',
      company: 'Local Middle School',
      duration: '2023 - 2024',
      type: 'Volunteer',
      description: 'Mentored students in robotics programming and design',
      skills: ['Leadership', 'Teaching', 'Problem Solving', 'Mentoring']
    }
  ];

  const skills = {
    technical: [
      { name: 'Python Programming', level: 90 },
      { name: 'CAD Design (SolidWorks)', level: 85 },
      { name: 'Project Management', level: 80 },
      { name: 'Data Analysis', level: 75 },
      { name: 'Circuit Design', level: 70 },
      { name: 'Web Development', level: 85 }
    ],
    professional: [
      { name: 'Communication', level: 88 },
      { name: 'Teamwork', level: 92 },
      { name: 'Problem Solving', level: 90 },
      { name: 'Time Management', level: 85 },
      { name: 'Leadership', level: 80 },
      { name: 'Adaptability', level: 87 }
    ]
  };

  const certifications = [
    {
      title: 'SolidWorks Certified Associate',
      issuer: 'Dassault Systèmes',
      date: '2024',
      icon: <Award />
    },
    {
      title: 'Python Programming Certificate',
      issuer: 'Codecademy',
      date: '2023',
      icon: <Target />
    },
    {
      title: 'Project Management Fundamentals',
      issuer: 'Google Career Certificates',
      date: '2024',
      icon: <Briefcase />
    },
    {
      title: 'OSHA 10-Hour Safety Training',
      issuer: 'OSHA',
      date: '2024',
      icon: <Users />
    }
  ];

  return (
    <section className="career-readiness section">
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="section-title gradient-text">Career Readiness</h1>
          <p className="section-subtitle">
            Building professional skills and gaining real-world experience
          </p>
        </motion.div>
        
        <motion.div 
          className="career-overview glass-effect"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="overview-stats">
            <motion.div 
              className="stat-card"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Briefcase className="stat-icon" />
              <div className="stat-content">
                <span className="stat-number">3</span>
                <span className="stat-label">Work Experiences</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="stat-card"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Award className="stat-icon" />
              <div className="stat-content">
                <span className="stat-number">4</span>
                <span className="stat-label">Certifications</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="stat-card"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Clock className="stat-icon" />
              <div className="stat-content">
                <span className="stat-number">500+</span>
                <span className="stat-label">Work Hours</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="stat-card"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <TrendingUp className="stat-icon" />
              <div className="stat-content">
                <span className="stat-number">95%</span>
                <span className="stat-label">Employer Rating</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        <div className="career-content">
          <motion.div 
            className="experiences-section"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h2>Professional Experience</h2>
            <div className="experiences-list">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="experience-card glass-effect"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                  whileHover={{ 
                    y: -10, 
                    boxShadow: "0 20px 40px rgba(99, 102, 241, 0.2)",
                    scale: 1.02
                  }}
                >
                  <div className="exp-header">
                    <div>
                      <h3>{exp.title}</h3>
                      <p className="company">{exp.company}</p>
                    </div>
                    <div className="exp-meta">
                      <span className={`exp-type ${exp.type.toLowerCase()}`}>{exp.type}</span>
                      <span className="duration">{exp.duration}</span>
                    </div>
                  </div>
                  
                  <p className="exp-description">{exp.description}</p>
                  
                  <div className="exp-skills">
                    {exp.skills.map((skill, skillIndex) => (
                      <motion.span 
                        key={skillIndex} 
                        className="skill-tag"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="skills-section"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h2>Skills Assessment</h2>
            
            <div className="skills-categories">
              <motion.div 
                className="skill-category glass-effect"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <h3>Technical Skills</h3>
                <div className="skills-list">
                  {skills.technical.map((skill, index) => (
                    <motion.div 
                      key={index} 
                      className="skill-item"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + index * 0.05, duration: 0.4 }}
                    >
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div 
                          className="skill-progress"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ delay: 1.2 + index * 0.05, duration: 0.8, ease: "easeOut" }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                className="skill-category glass-effect"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <h3>Professional Skills</h3>
                <div className="skills-list">
                  {skills.professional.map((skill, index) => (
                    <motion.div 
                      key={index} 
                      className="skill-item"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2 + index * 0.05, duration: 0.4 }}
                    >
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div 
                          className="skill-progress"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ delay: 1.4 + index * 0.05, duration: 0.8, ease: "easeOut" }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="certifications-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <h2>Certifications & Training</h2>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="certification-card glass-effect"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 10,
                  boxShadow: "0 15px 30px rgba(245, 158, 11, 0.2)"
                }}
              >
                <div className="cert-icon">{cert.icon}</div>
                <h4>{cert.title}</h4>
                <p className="cert-issuer">{cert.issuer}</p>
                <span className="cert-date">{cert.date}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="career-goals glass-effect"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <h2>Career Goals & Vision</h2>
          <div className="goals-grid">
            <div className="goal-item">
              <h3>Short-term Goals (1-2 years)</h3>
              <ul>
                <li>Complete engineering degree with honors</li>
                <li>Secure summer internship at top tech company</li>
                <li>Develop expertise in sustainable engineering</li>
                <li>Build professional network in industry</li>
              </ul>
            </div>
            
            <div className="goal-item">
              <h3>Long-term Vision (5-10 years)</h3>
              <ul>
                <li>Lead innovative engineering projects</li>
                <li>Contribute to environmental sustainability</li>
                <li>Mentor next generation of engineers</li>
                <li>Start own engineering consultancy</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CareerReadiness;
import React from 'react';
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
      <div className="container">
        <div className="section-header">
          <h1>Career Readiness</h1>
          <p>Building professional skills and gaining real-world experience</p>
        </div>
        
        <div className="career-overview">
          <div className="overview-stats">
            <div className="stat-card">
              <Briefcase className="stat-icon" />
              <div className="stat-content">
                <span className="stat-number">3</span>
                <span className="stat-label">Work Experiences</span>
              </div>
            </div>
            
            <div className="stat-card">
              <Award className="stat-icon" />
              <div className="stat-content">
                <span className="stat-number">4</span>
                <span className="stat-label">Certifications</span>
              </div>
            </div>
            
            <div className="stat-card">
              <Clock className="stat-icon" />
              <div className="stat-content">
                <span className="stat-number">500+</span>
                <span className="stat-label">Work Hours</span>
              </div>
            </div>
            
            <div className="stat-card">
              <TrendingUp className="stat-icon" />
              <div className="stat-content">
                <span className="stat-number">95%</span>
                <span className="stat-label">Employer Rating</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="career-content">
          <div className="experiences-section">
            <h2>Professional Experience</h2>
            <div className="experiences-list">
              {experiences.map((exp, index) => (
                <div key={index} className="experience-card">
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
                      <span key={skillIndex} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="skills-section">
            <h2>Skills Assessment</h2>
            
            <div className="skills-categories">
              <div className="skill-category">
                <h3>Technical Skills</h3>
                <div className="skills-list">
                  {skills.technical.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="skill-category">
                <h3>Professional Skills</h3>
                <div className="skills-list">
                  {skills.professional.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="certifications-section">
          <h2>Certifications & Training</h2>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-card">
                <div className="cert-icon">{cert.icon}</div>
                <h4>{cert.title}</h4>
                <p className="cert-issuer">{cert.issuer}</p>
                <span className="cert-date">{cert.date}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="career-goals">
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
        </div>
      </div>
    </section>
  );
};

export default CareerReadiness;
import React, { useState } from 'react';
import { ExternalLink, Github, Play, Image, Code, Palette, Cpu, Zap } from 'lucide-react';
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
        icon: <Code />
      },
      {
        id: 4,
        title: 'Web Development Portfolio',
        description: 'Created my first personal website using HTML, CSS, and JavaScript, focusing on responsive design and user experience principles.',
        type: 'link',
        media: 'https://example.com/portfolio',
        skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
        category: 'Web Development',
        icon: <Code />
      }
    ],
    '11th': [
      {
        id: 5,
        title: 'Advanced Programming Project',
        description: 'Developed a comprehensive data management system using object-oriented programming principles and database integration.',
        type: 'code',
        media: 'https://github.com/username/project',
        skills: ['Java', 'SQL', 'Object-Oriented Programming', 'Database Design'],
        category: 'Software Development',
        icon: <Code />
      },
      {
        id: 6,
        title: 'Engineering Design Challenge',
        description: 'Participated in a state-level engineering competition, designing sustainable solutions for real-world environmental challenges.',
        type: 'image',
        media: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800',
        skills: ['Sustainable Design', 'Research', 'Presentation', 'Innovation'],
        category: 'Engineering',
        icon: <Palette />
      }
    ],
    '12th': [
      {
        id: 7,
        title: 'Senior Capstone Project',
        description: 'Culminating project integrating four years of learning, featuring advanced engineering principles and real-world application.',
        type: 'video',
        media: 'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=800',
        skills: ['Project Management', 'Advanced Engineering', 'Research', 'Technical Writing'],
        category: 'Capstone',
        icon: <Cpu />
      },
      {
        id: 8,
        title: 'Industry Internship',
        description: 'Gained real-world experience working with professional engineers on cutting-edge technology projects.',
        type: 'image',
        media: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800',
        skills: ['Professional Development', 'Industry Standards', 'Collaboration', 'Technical Skills'],
        category: 'Professional Experience',
        icon: <Zap />
      }
    ]
  };

  return (
    <section className="artifacts">
      <div className="container">
        <div className="artifacts-header">
          <h2>Academic Artifacts</h2>
          <p>A curated collection of my engineering journey through high school</p>
        </div>
        
        <div className="grade-selector">
          {grades.map((grade) => (
            <button
              key={grade.id}
              onClick={() => setSelectedGrade(grade.id)}
              className={`grade-button ${selectedGrade === grade.id ? 'active' : ''}`}
            >
              <span className="grade-label">{grade.label}</span>
              <span className="grade-year">{grade.year}</span>
            </button>
          ))}
        </div>
        
        <div className="artifacts-grid">
          {artifacts[selectedGrade]?.map((artifact) => (
            <div key={artifact.id} className="artifact-card">
              <div className="artifact-header">
                <div className="artifact-icon">
                  {artifact.icon}
                </div>
                <div className="artifact-category">
                  {artifact.category}
                </div>
              </div>
              
              <div className="artifact-content">
                <h3>{artifact.title}</h3>
                <p>{artifact.description}</p>
                
                <div className="artifact-skills">
                  {artifact.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="artifact-footer">
                <div className="artifact-type">
                  {artifact.type === 'video' && <Play size={16} />}
                  {artifact.type === 'image' && <Image size={16} />}
                  {artifact.type === 'code' && <Code size={16} />}
                  {artifact.type === 'link' && <ExternalLink size={16} />}
                  <span>{artifact.type}</span>
                </div>
                
                <button className="view-button">
                  View
                  <ExternalLink size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Artifacts;
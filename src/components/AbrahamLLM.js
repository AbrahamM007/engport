import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, X } from 'lucide-react';
import './AbrahamLLM.css';

const AbrahamLLM = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', text: 'Hi there! I\'m Abraham\'s AI assistant. Ask me anything about Abraham!' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  // Knowledge base about Abraham
  const abrahamInfo = {
    name: 'Abraham Mora-Tadeo',
    title: 'Software Engineer & UI Designer',
    description: 'Creating exceptional digital experiences through innovative design and clean code architecture.',
    status: 'Available for opportunities',
    experience: '4+ years experience',
    projectsCompleted: '50+',
    technologies: '15+',
    location: 'Available Remotely',
    email: 'abraham.mora-tadeo@example.com',
    socialLinks: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'mailto:abraham@example.com'
    },
    about: [
      'I\'m a software engineer and UI designer focused on creating clean, functional interfaces and robust systems.',
      'My approach centers on simplicity, performance, and exceptional user experience. I believe the best solutions are often the most elegant ones—removing complexity while maintaining functionality.',
      'Currently pursuing my passion for minimalist design and engineering excellence through various projects and continuous learning.'
    ],
    designPhilosophy: [
      'Simplicity over complexity',
      'Function drives form',
      'Performance is paramount',
      'Details matter'
    ],
    education: {
      gpa: '3.8/4.0',
      apCourses: '6 completed (Advanced Placement in STEM subjects)',
      satScore: '1450 (Above national average)',
      honors: 'Honor Roll (All four years of high school)'
    },
    leadership: [
      'Engineering Club President (Led team of 25 students)',
      'Robotics Team Captain (Managed competition preparations)',
      'Peer Tutor (Mathematics and Physics)',
      'Community Service (150+ volunteer hours)'
    ],
    technicalSkills: {
      programming: ['Python Programming (90%)', 'Web Development (85%)', 'Java', 'SQL', 'C++', 'JavaScript'],
      design: ['CAD Design (SolidWorks) (85%)', 'AutoCAD', 'Fusion 360'],
      other: ['Project Management (80%)', 'Data Analysis (75%)', 'Circuit Design (70%)', 'Agile methodology', 'Scrum', 'Research Methods']
    },
    professionalSkills: [
      'Communication (88%)',
      'Teamwork (92%)',
      'Problem Solving (90%)',
      'Time Management (85%)',
      'Leadership (80%)',
      'Adaptability (87%)'
    ],
    awards: [
      'State Science Fair - 1st Place (Engineering category)',
      'National Merit Scholarship (Semifinalist recognition)',
      'Engineering Excellence Award (School district recognition)',
      'Dean\'s List Equivalent (Academic achievement)'
    ],
    workExperience: [
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
    ],
    projects: {
      seniorCapstone: {
        title: 'Smart Environmental Monitoring System for Urban Agriculture',
        duration: '4 Months',
        teamSize: '3 Team Members',
        features: '5 Key Features',
        goal: '1st Place Goal',
        description: 'Developing an IoT-based environmental monitoring system that helps urban farmers optimize growing conditions through real-time data collection and automated responses. The system integrates sensors, microcontrollers, and a mobile app to provide comprehensive agricultural insights.',
        technologies: ['IoT Sensors (Arduino, ESP32)', 'Data Analytics (Python, Machine Learning)', 'Mobile App (React Native, Firebase)', 'Automation (Relay Modules, Actuators)'],
        timeline: [
          { phase: 'Research & Planning', date: 'Sep 2024', status: 'completed', description: 'Conducted market research and defined project scope' },
          { phase: 'Design & Prototyping', date: 'Oct 2024', status: 'completed', description: 'Created initial designs and built working prototype' },
          { phase: 'Development & Testing', date: 'Nov 2024', status: 'in-progress', description: 'Implementing final solution and conducting tests' },
          { phase: 'Final Presentation', date: 'Dec 2024', status: 'upcoming', description: 'Present final project to industry panel' }
        ]
      },
      artifacts: {
        '9th': [
          { title: 'Introduction to Engineering', description: 'First exploration of engineering principles through a hands-on bridge building project using basic materials.', skills: ['Structural Design', 'Material Properties', 'Basic Physics', 'Problem Solving'] },
          { title: 'Computer-Aided Design Basics', description: 'Introduction to CAD software through the design of simple 3D objects and technical drawings.', skills: ['CAD Software', '3D Modeling', 'Technical Drawing', 'Spatial Reasoning'] }
        ],
        '10th': [
          { title: 'Robotics Competition', description: 'Led a team to design and build an autonomous robot for regional competition, integrating mechanical design with advanced programming concepts.', skills: ['Robotics', 'Python Programming', 'Teamwork', 'Project Management'] },
          { title: 'Web Development Portfolio', description: 'Created my first personal website using HTML, CSS, and JavaScript, focusing on responsive design and user experience principles.', skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'] }
        ],
        '11th': [
          { title: 'Advanced Programming Project', description: 'Developed a comprehensive data management system using object-oriented programming principles and database integration.', skills: ['Java', 'SQL', 'Object-Oriented Programming', 'Database Design'] },
          { title: 'Engineering Design Challenge', description: 'Participated in a state-level engineering competition, designing sustainable solutions for real-world environmental challenges.', skills: ['Sustainable Design', 'Research', 'Presentation', 'Innovation'] }
        ],
        '12th': [
          { title: 'Senior Capstone Project', description: 'Culminating project integrating four years of learning, featuring advanced engineering principles and real-world application.', skills: ['Project Management', 'Advanced Engineering', 'Research', 'Technical Writing'] },
          { title: 'Industry Internship', description: 'Gained real-world experience working with professional engineers on cutting-edge technology projects.', skills: ['Professional Development', 'Industry Standards', 'Collaboration', 'Technical Skills'] }
        ]
      }
    }
  };

  // Function to generate responses based on user input
  const generateResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    // Basic intent matching
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return `Hello! I'm an AI assistant for ${abrahamInfo.name}. How can I help you today?`;
    }
    
    if (input.includes('who') && (input.includes('you') || input.includes('abraham'))) {
      return `${abrahamInfo.name} is a ${abrahamInfo.title} with ${abrahamInfo.experience}. ${abrahamInfo.about[0]}`;
    }
    
    if (input.includes('about') || input.includes('background')) {
      return abrahamInfo.about.join(' ');
    }
    
    if (input.includes('contact') || input.includes('email') || input.includes('reach')) {
      return `You can contact Abraham at ${abrahamInfo.email} or find him on LinkedIn at ${abrahamInfo.socialLinks.linkedin}.`;
    }
    
    if (input.includes('experience') || input.includes('work history')) {
      const workExp = abrahamInfo.workExperience.map(job => 
        `${job.title} at ${job.company} (${job.duration}): ${job.description}`
      ).join('\n\n');
      return `Abraham has ${abrahamInfo.experience}. Here's his work history:\n\n${workExp}`;
    }
    
    if (input.includes('education') || input.includes('school') || input.includes('college')) {
      return `Abraham has a strong academic background with a GPA of ${abrahamInfo.education.gpa}, completed ${abrahamInfo.education.apCourses}, and achieved an SAT score of ${abrahamInfo.education.satScore}. ${abrahamInfo.education.honors}.`;
    }
    
    if (input.includes('skills') || input.includes('abilities')) {
      const techSkills = `Technical skills include: ${abrahamInfo.technicalSkills.programming.slice(0, 3).join(', ')}, and more.`;
      const profSkills = `Professional skills include: ${abrahamInfo.professionalSkills.slice(0, 3).join(', ')}, and more.`;
      return `${techSkills}\n\n${profSkills}`;
    }
    
    if (input.includes('project') || input.includes('portfolio')) {
      const seniorProject = `Senior Capstone Project: ${abrahamInfo.projects.seniorCapstone.title} - ${abrahamInfo.projects.seniorCapstone.description}`;
      return `Abraham has completed ${abrahamInfo.projectsCompleted} projects. His most significant project is:\n\n${seniorProject}`;
    }
    
    if (input.includes('design') || input.includes('philosophy')) {
      return `Abraham's design philosophy centers on: ${abrahamInfo.designPhilosophy.join(', ')}.`;
    }
    
    if (input.includes('award') || input.includes('recognition') || input.includes('achievement')) {
      return `Abraham has received several awards and recognitions, including: ${abrahamInfo.awards.join(', ')}.`;
    }
    
    if (input.includes('leadership') || input.includes('activities')) {
      return `Abraham has demonstrated leadership through: ${abrahamInfo.leadership.join(', ')}.`;
    }
    
    if (input.includes('resume')) {
      return `You can download Abraham's resume from the website by clicking the Resume button on the homepage.`;
    }
    
    // Default response if no specific intent is matched
    return `I'd be happy to tell you about Abraham. You can ask about his background, skills, projects, education, work experience, or contact information.`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    
    // Generate AI response
    setTimeout(() => {
      const aiResponse = { role: 'ai', text: generateResponse(input) };
      setMessages(prev => [...prev, aiResponse]);
    }, 500);
    
    setInput('');
  };

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className={`abraham-llm ${open ? 'open' : ''}`}>
      <button 
        className="llm-toggle" 
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close AI assistant" : "Open AI assistant"}
      >
        {open ? <X size={20} /> : <Bot size={20} />}
      </button>
      
      {open && (
        <div className="llm-container">
          <div className="llm-header">
            <Bot size={20} />
            <h3>Abraham AI Assistant (Simplified)</h3>
          </div>
          <div className="llm-messages">
            <div className="message ai">
              <p>This is a simplified version of the AI assistant.</p>
            </div>
          </div>
          <form className="llm-input">
            <input type="text" placeholder="Type something..." disabled />
            <button type="submit" disabled>Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

function AbrahamLLM() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', text: 'Hi there! I\'m Abraham\'s AI assistant. Ask me anything about Abraham!' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  // Knowledge base about Abraham
  const abrahamInfo = {
    name: 'Abraham Mora-Tadeo',
    title: 'Software Engineer & UI Designer',
    description: 'Creating exceptional digital experiences through innovative design and clean code architecture.',
    status: 'Available for opportunities',
    experience: '4+ years experience',
    projectsCompleted: '50+',
    technologies: '15+',
    location: 'Available Remotely',
    email: 'abraham.mora-tadeo@example.com',
    socialLinks: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'mailto:abraham@example.com'
    },
    about: [
      'I\'m a software engineer and UI designer focused on creating clean, functional interfaces and robust systems.',
      'My approach centers on simplicity, performance, and exceptional user experience. I believe the best solutions are often the most elegant ones—removing complexity while maintaining functionality.',
      'Currently pursuing my passion for minimalist design and engineering excellence through various projects and continuous learning.'
    ],
    designPhilosophy: [
      'Simplicity over complexity',
      'Function drives form',
      'Performance is paramount',
      'Details matter'
    ],
    education: {
      gpa: '3.8/4.0',
      apCourses: '6 completed (Advanced Placement in STEM subjects)',
      satScore: '1450 (Above national average)',
      honors: 'Honor Roll (All four years of high school)'
    },
    leadership: [
      'Engineering Club President (Led team of 25 students)',
      'Robotics Team Captain (Managed competition preparations)',
      'Peer Tutor (Mathematics and Physics)',
      'Community Service (150+ volunteer hours)'
    ],
    technicalSkills: {
      programming: ['Python Programming (90%)', 'Web Development (85%)', 'Java', 'SQL', 'C++', 'JavaScript'],
      design: ['CAD Design (SolidWorks) (85%)', 'AutoCAD', 'Fusion 360'],
      other: ['Project Management (80%)', 'Data Analysis (75%)', 'Circuit Design (70%)', 'Agile methodology', 'Scrum', 'Research Methods']
    },
    professionalSkills: [
      'Communication (88%)',
      'Teamwork (92%)',
      'Problem Solving (90%)',
      'Time Management (85%)',
      'Leadership (80%)',
      'Adaptability (87%)'
    ],
    awards: [
      'State Science Fair - 1st Place (Engineering category)',
      'National Merit Scholarship (Semifinalist recognition)',
      'Engineering Excellence Award (School district recognition)',
      'Dean\'s List Equivalent (Academic achievement)'
    ],
    workExperience: [
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
    ],
    projects: {
      seniorCapstone: {
        title: 'Smart Environmental Monitoring System for Urban Agriculture',
        duration: '4 Months',
        teamSize: '3 Team Members',
        features: '5 Key Features',
        goal: '1st Place Goal',
        description: 'Developing an IoT-based environmental monitoring system that helps urban farmers optimize growing conditions through real-time data collection and automated responses. The system integrates sensors, microcontrollers, and a mobile app to provide comprehensive agricultural insights.',
        technologies: ['IoT Sensors (Arduino, ESP32)', 'Data Analytics (Python, Machine Learning)', 'Mobile App (React Native, Firebase)', 'Automation (Relay Modules, Actuators)'],
        timeline: [
          { phase: 'Research & Planning', date: 'Sep 2024', status: 'completed', description: 'Conducted market research and defined project scope' },
          { phase: 'Design & Prototyping', date: 'Oct 2024', status: 'completed', description: 'Created initial designs and built working prototype' },
          { phase: 'Development & Testing', date: 'Nov 2024', status: 'in-progress', description: 'Implementing final solution and conducting tests' },
          { phase: 'Final Presentation', date: 'Dec 2024', status: 'upcoming', description: 'Present final project to industry panel' }
        ]
      },
      artifacts: {
        '9th': [
          { title: 'Introduction to Engineering', description: 'First exploration of engineering principles through a hands-on bridge building project using basic materials.', skills: ['Structural Design', 'Material Properties', 'Basic Physics', 'Problem Solving'] },
          { title: 'Computer-Aided Design Basics', description: 'Introduction to CAD software through the design of simple 3D objects and technical drawings.', skills: ['CAD Software', '3D Modeling', 'Technical Drawing', 'Spatial Reasoning'] }
        ],
        '10th': [
          { title: 'Robotics Competition', description: 'Led a team to design and build an autonomous robot for regional competition, integrating mechanical design with advanced programming concepts.', skills: ['Robotics', 'Python Programming', 'Teamwork', 'Project Management'] },
          { title: 'Web Development Portfolio', description: 'Created my first personal website using HTML, CSS, and JavaScript, focusing on responsive design and user experience principles.', skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'] }
        ],
        '11th': [
          { title: 'Advanced Programming Project', description: 'Developed a comprehensive data management system using object-oriented programming principles and database integration.', skills: ['Java', 'SQL', 'Object-Oriented Programming', 'Database Design'] },
          { title: 'Engineering Design Challenge', description: 'Participated in a state-level engineering competition, designing sustainable solutions for real-world environmental challenges.', skills: ['Sustainable Design', 'Research', 'Presentation', 'Innovation'] }
        ],
        '12th': [
          { title: 'Senior Capstone Project', description: 'Culminating project integrating four years of learning, featuring advanced engineering principles and real-world application.', skills: ['Project Management', 'Advanced Engineering', 'Research', 'Technical Writing'] },
          { title: 'Industry Internship', description: 'Gained real-world experience working with professional engineers on cutting-edge technology projects.', skills: ['Professional Development', 'Industry Standards', 'Collaboration', 'Technical Skills'] }
        ]
      }
    }
  };

  // Function to generate responses based on user input
  const generateResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    // Basic intent matching
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return `Hello! I'm an AI assistant for ${abrahamInfo.name}. How can I help you today?`;
    }
    
    if (input.includes('who') && (input.includes('you') || input.includes('abraham'))) {
      return `${abrahamInfo.name} is a ${abrahamInfo.title} with ${abrahamInfo.experience}. ${abrahamInfo.about[0]}`;
    }
    
    if (input.includes('about') || input.includes('background')) {
      return abrahamInfo.about.join(' ');
    }
    
    if (input.includes('contact') || input.includes('email') || input.includes('reach')) {
      return `You can contact Abraham at ${abrahamInfo.email} or find him on LinkedIn at ${abrahamInfo.socialLinks.linkedin}.`;
    }
    
    if (input.includes('experience') || input.includes('work history')) {
      const workExp = abrahamInfo.workExperience.map(job => 
        `${job.title} at ${job.company} (${job.duration}): ${job.description}`
      ).join('\n\n');
      return `Abraham has ${abrahamInfo.experience}. Here's his work history:\n\n${workExp}`;
    }
    
    if (input.includes('education') || input.includes('school') || input.includes('college')) {
      return `Abraham has a strong academic background with a GPA of ${abrahamInfo.education.gpa}, completed ${abrahamInfo.education.apCourses}, and achieved an SAT score of ${abrahamInfo.education.satScore}. ${abrahamInfo.education.honors}.`;
    }
    
    if (input.includes('skills') || input.includes('abilities')) {
      const techSkills = `Technical skills include: ${abrahamInfo.technicalSkills.programming.slice(0, 3).join(', ')}, and more.`;
      const profSkills = `Professional skills include: ${abrahamInfo.professionalSkills.slice(0, 3).join(', ')}, and more.`;
      return `${techSkills}\n\n${profSkills}`;
    }
    
    if (input.includes('project') || input.includes('portfolio')) {
      const seniorProject = `Senior Capstone Project: ${abrahamInfo.projects.seniorCapstone.title} - ${abrahamInfo.projects.seniorCapstone.description}`;
      return `Abraham has completed ${abrahamInfo.projectsCompleted} projects. His most significant project is:\n\n${seniorProject}`;
    }
    
    if (input.includes('design') || input.includes('philosophy')) {
      return `Abraham's design philosophy centers on: ${abrahamInfo.designPhilosophy.join(', ')}.`;
    }
    
    if (input.includes('award') || input.includes('recognition') || input.includes('achievement')) {
      return `Abraham has received several awards and recognitions, including: ${abrahamInfo.awards.join(', ')}.`;
    }
    
    if (input.includes('leadership') || input.includes('activities')) {
      return `Abraham has demonstrated leadership through: ${abrahamInfo.leadership.join(', ')}.`;
    }
    
    if (input.includes('resume')) {
      return `You can download Abraham's resume from the website by clicking the Resume button on the homepage.`;
    }
    
    // Default response if no specific intent is matched
    return `I'd be happy to tell you about Abraham. You can ask about his background, skills, projects, education, work experience, or contact information.`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    
    // Generate AI response
    setTimeout(() => {
      const aiResponse = { role: 'ai', text: generateResponse(input) };
      setMessages(prev => [...prev, aiResponse]);
    }, 500);
    
    setInput('');
  };

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className={`abraham-llm ${open ? 'open' : ''}`}>
      <button 
        className="llm-toggle" 
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close AI assistant" : "Open AI assistant"}
      >
        {open ? <X size={20} /> : <Bot size={20} />}
      </button>
      
      {open && (
        <div className="llm-container">
          <div className="llm-header">
            <Bot size={20} />
            <h3>Abraham AI Assistant (Simplified)</h3>
          </div>
          <div className="llm-messages">
            <div className="message ai">
              <p>This is a simplified version of the AI assistant.</p>
            </div>
          </div>
          <form className="llm-input">
            <input type="text" placeholder="Type something..." disabled />
            <button type="submit" disabled>Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AbrahamLLM;
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Users, TrendingUp } from 'lucide-react';
import './CollegeReadiness.css';

const CollegeReadiness = () => {
  const achievements = [
    {
      category: 'Academic Excellence',
      icon: <BookOpen />,
      items: [
        { title: 'GPA: 3.8/4.0', description: 'Consistent academic performance' },
        { title: 'AP Courses: 6 completed', description: 'Advanced Placement in STEM subjects' },
        { title: 'SAT Score: 1450', description: 'Above national average' },
        { title: 'Honor Roll', description: 'All four years of high school' }
      ]
    },
    {
      category: 'Leadership & Activities',
      icon: <Users />,
      items: [
        { title: 'Engineering Club President', description: 'Led team of 25 students' },
        { title: 'Robotics Team Captain', description: 'Managed competition preparations' },
        { title: 'Peer Tutor', description: 'Mathematics and Physics' },
        { title: 'Community Service', description: '150+ volunteer hours' }
      ]
    },
    {
      category: 'Technical Skills',
      icon: <TrendingUp />,
      items: [
        { title: 'Programming Languages', description: 'Python, Java, C++, JavaScript' },
        { title: 'CAD Software', description: 'SolidWorks, AutoCAD, Fusion 360' },
        { title: 'Project Management', description: 'Agile methodology, Scrum' },
        { title: 'Research Methods', description: 'Scientific methodology, data analysis' }
      ]
    },
    {
      category: 'Awards & Recognition',
      icon: <Award />,
      items: [
        { title: 'State Science Fair - 1st Place', description: 'Engineering category' },
        { title: 'National Merit Scholarship', description: 'Semifinalist recognition' },
        { title: 'Engineering Excellence Award', description: 'School district recognition' },
        { title: 'Dean\'s List Equivalent', description: 'Academic achievement' }
      ]
    }
  ];

  const collegePrep = [
    {
      title: 'College Applications',
      status: 'Completed',
      details: 'Applied to 8 top engineering programs',
      progress: 100
    },
    {
      title: 'Scholarship Applications',
      status: 'In Progress',
      details: 'Submitted 12 scholarship applications',
      progress: 75
    },
    {
      title: 'Financial Aid',
      status: 'Completed',
      details: 'FAFSA and CSS Profile submitted',
      progress: 100
    },
    {
      title: 'Housing Applications',
      status: 'Pending',
      details: 'Waiting for acceptance letters',
      progress: 25
    }
  ];

  return (
    <section className="college-readiness section">
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
          <h1 className="section-title gradient-text">College Readiness</h1>
          <p className="section-subtitle">
            Demonstrating academic excellence and preparation for higher education
          </p>
        </motion.div>
        
        <motion.div 
          className="readiness-overview glass-effect"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h2>College Application Status</h2>
          <div className="prep-grid">
            {collegePrep.map((item, index) => (
              <motion.div
                key={index}
                className="prep-item"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              >
                <div className="prep-header">
                  <h3>{item.title}</h3>
                  <span className={`status ${item.status.toLowerCase().replace(' ', '-')}`}>
                    {item.status}
                  </span>
                </div>
                <p>{item.details}</p>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <div className="achievements-grid">
          {achievements.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="achievement-category glass-effect"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + categoryIndex * 0.1, duration: 0.8 }}
            >
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3>{category.category}</h3>
              </div>
              
              <div className="achievement-list">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    className="achievement-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + categoryIndex * 0.1 + itemIndex * 0.05, duration: 0.6 }}
                    whileHover={{ x: 10 }}
                  >
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="college-goals glass-effect"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <h2>Future Goals</h2>
          <div className="goals-content">
            <div className="goal-item">
              <h3>Academic Goals</h3>
              <ul>
                <li>Pursue Bachelor's in Mechanical Engineering</li>
                <li>Maintain Dean's List status</li>
                <li>Participate in undergraduate research</li>
                <li>Complete engineering internships</li>
              </ul>
            </div>
            
            <div className="goal-item">
              <h3>Career Aspirations</h3>
              <ul>
                <li>Specialize in sustainable energy systems</li>
                <li>Work for innovative technology companies</li>
                <li>Contribute to environmental solutions</li>
                <li>Pursue graduate studies in the future</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CollegeReadiness;
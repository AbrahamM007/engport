import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, MapPin, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="contact">
      <div className="contact-container container">
        <div className="contact-header">
          <div className="section-marker"></div>
          <h1>Contact</h1>
          <p>Let's discuss your next project</p>
        </div>
        
        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-section">
              <h3>Get in Touch</h3>
              <p>
                I'm always interested in new opportunities and collaborations. 
                Whether you have a project in mind or just want to connect, 
                I'd love to hear from you.
              </p>
            </div>
            
            <div className="contact-methods">
              <a href="mailto:abraham@example.com" className="contact-method">
                <Mail size={20} />
                <div className="method-content">
                  <span className="method-label">Email</span>
                  <span className="method-value">abraham@example.com</span>
                </div>
              </a>
              
              <div className="contact-method">
                <MapPin size={20} />
                <div className="method-content">
                  <span className="method-label">Location</span>
                  <span className="method-value">Available Remotely</span>
                </div>
              </div>
              
              <div className="contact-method">
                <Clock size={20} />
                <div className="method-content">
                  <span className="method-label">Response Time</span>
                  <span className="method-value">Within 24 hours</span>
                </div>
              </div>
            </div>
            
            <div className="social-section">
              <h4>Connect</h4>
              <div className="social-links">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Github size={18} />
                  <span>GitHub</span>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-button">
                <span>Send Message</span>
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
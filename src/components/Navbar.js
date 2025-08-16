import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Mail } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/artifacts', label: 'Artifacts' },
    { to: '/senior-project', label: 'Senior Project' },
    { to: '/college-readiness', label: 'College' },
    { to: '/career-readiness', label: 'Career' }
  ];

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <NavLink to="/" className="nav-logo" onClick={closeMenu}>
          Abraham.
        </NavLink>

        <nav className={`nav-menu ${isOpen ? 'mobile active' : ''}`}>
          {navLinks.map((link, index) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="nav-link"
              onClick={closeMenu}
              style={{ animationDelay: `${0.1 + index * 0.05}s` }}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <a 
            href="mailto:abraham@example.com" 
            className="btn-contact"
            aria-label="Contact via email"
          >
            <Mail size={16} />
            <span>Contact</span>
          </a>
          
          <button 
            className={`nav-toggle ${isOpen ? 'active' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <span className="nav-toggle-line"></span>
            <span className="nav-toggle-line"></span>
            <span className="nav-toggle-line"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
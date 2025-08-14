import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <NavLink to="/" className="nav-logo">
          Abraham.
        </NavLink>
        <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <NavLink to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/artifacts" className="nav-link" onClick={() => setIsOpen(false)}>Artifacts</NavLink>
          <NavLink to="/senior-project" className="nav-link" onClick={() => setIsOpen(false)}>Senior Project</NavLink>
          <NavLink to="/college-readiness" className="nav-link" onClick={() => setIsOpen(false)}>College</NavLink>
          <NavLink to="/career-readiness" className="nav-link" onClick={() => setIsOpen(false)}>Career</NavLink>
        </nav>
        <div className="nav-actions">
            <button className="btn-contact">Contact</button>
            <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
            </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <div className="navbar-brand">
          <a href="/">Abraham</a>
        </div>

        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <a href="#about" className="navbar-link">About</a>
          <a href="#artifacts" className="navbar-link">Work</a>
          <a href="#contact" className="navbar-link">Contact</a>
        </div>

        <button 
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
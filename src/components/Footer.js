import React, { useEffect, useState } from 'react';
import './Footer.css';
import { Moon, Sun } from 'lucide-react';

export default function Footer() {
  const [time, setTime] = useState(new Date());
  const [isDark, setIsDark] = useState(false);
  
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  
  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };
  
  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [isDark]);

  return (
    <footer className="footer-hub">
      <div className="footer-left">Nexus System</div>
      <div className="footer-center">{time.toLocaleTimeString()}</div>
      <button className="footer-right interactive" onClick={toggleTheme} aria-label="Toggle theme">
        {isDark ? <Sun size={16} /> : <Moon size={16} />} 
        {isDark ? 'Light' : 'Dark'}
      </button>
    </footer>
  );
}
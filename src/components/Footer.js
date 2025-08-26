import React, { useEffect, useState } from 'react';
import './Footer.css';
import { Moon, Sun } from 'lucide-react';

export default function Footer() {
  const [time, setTime] = useState(new Date());
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const toggle = () => setDark(v => !v);
  useEffect(() => {
    document.documentElement.style.colorScheme = dark ? 'dark' : 'light';
  }, [dark]);

  return (
    <footer className="footer-hub">
      <div className="footer-left">Nexus System</div>
      <div className="footer-center">{time.toLocaleTimeString()}</div>
      <button className="footer-right interactive" onClick={toggle} aria-label="Toggle theme">
        {dark ? <Moon size={16} /> : <Sun size={16} />} Theme
      </button>
    </footer>
  );
}
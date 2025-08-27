import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import './Hero.css';
import AbrahamImage from './Abraham.png'; // Add this import
import { Link } from 'react-router-dom'; // Add this import
import resumePDF from './AbrahamMora_Resume.pdf'; // Add this import

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const heroRef = useRef(null);
  const liquidRef = useRef(null);
  const textRef = useRef(null);
  const portraitRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);
  const quantumBackdropRef = useRef(null);
  const neuralNodesRef = useRef([]);
  
  // Initialize the hero section
  useEffect(() => {
    setTimeout(() => setLoaded(true), 300);
    
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);
  
  // Liquid morphing background effect
  useEffect(() => {
    if (!liquidRef.current) return;
    
    const canvas = liquidRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Create liquid morphing effect
    const points = [];
    const numPoints = 10;
    const pointRadius = Math.max(canvas.width, canvas.height) / 4;
    
    // Initialize points
    for (let i = 0; i < numPoints; i++) {
      const angle = (i / numPoints) * Math.PI * 2;
      points.push({
        x: canvas.width / 2 + Math.cos(angle) * pointRadius,
        y: canvas.height / 2 + Math.sin(angle) * pointRadius,
        originX: canvas.width / 2 + Math.cos(angle) * pointRadius,
        originY: canvas.height / 2 + Math.sin(angle) * pointRadius,
        vx: 0,
        vy: 0
      });
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw liquid shape
      ctx.beginPath();
      
      // Move to first point
      ctx.moveTo(points[0].x, points[0].y);
      
      // Create smooth curve through all points
      for (let i = 0; i < points.length; i++) {
        const point = points[i];
        const nextPoint = points[(i + 1) % points.length];
        
        // Update point position with gentle movement
        point.vx += (Math.random() - 0.5) * 0.2;
        point.vy += (Math.random() - 0.5) * 0.2;
        
        // Apply friction
        point.vx *= 0.98;
        point.vy *= 0.98;
        
        // Apply spring force to return to origin
        point.vx += (point.originX - point.x) * 0.01;
        point.vy += (point.originY - point.y) * 0.01;
        
        // Update position
        point.x += point.vx;
        point.y += point.vy;
        
        // Create smooth curve to next point
        const controlX = (point.x + nextPoint.x) / 2;
        const controlY = (point.y + nextPoint.y) / 2;
        
        ctx.quadraticCurveTo(point.x, point.y, controlX, controlY);
      }
      
      ctx.closePath();
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fill();
      
      rafId.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);
  
  // Neural network grid animation
  useEffect(() => {
    const neuralGrid = document.querySelector('.neural-grid');
    if (!neuralGrid) return;
    
    // Create neural nodes
    for (let i = 0; i < 100; i++) {
      const node = document.createElement('div');
      node.className = 'neural-node';
      node.style.setProperty('--i', Math.random() * 10);
      node.style.left = `${Math.random() * 100}%`;
      node.style.top = `${Math.random() * 100}%`;
      neuralGrid.appendChild(node);
      neuralNodesRef.current.push(node);
    }
    
    return () => {
      neuralNodesRef.current.forEach(node => {
        if (node.parentNode) {
          node.parentNode.removeChild(node);
        }
      });
      neuralNodesRef.current = [];
    };
  }, []);
  
  // Quantum backdrop effect
  useEffect(() => {
    if (!quantumBackdropRef.current || !heroRef.current) return;
    
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      quantumBackdropRef.current.style.setProperty('--x', `${clientX}px`);
      quantumBackdropRef.current.style.setProperty('--y', `${clientY}px`);
      
      mousePos.current = { x: clientX, y: clientY };
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Parallax effect for portrait and elements
  useEffect(() => {
    if (!portraitRef.current || !heroRef.current) return;
    
    const parallaxElements = document.querySelectorAll('.parallax-element');
    
    const handleMouseMove = (e) => {
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      // Apply parallax to portrait
      portraitRef.current.style.transform = `
        perspective(1000px)
        rotateY(${x * 5}deg)
        rotateX(${y * -5}deg)
        translateZ(20px)
      `;
      
      // Apply parallax to other elements
      parallaxElements.forEach(element => {
        const speed = element.getAttribute('data-speed') || 1;
        const xOffset = x * 30 * speed;
        const yOffset = y * 30 * speed;
        element.style.transform = `translate3d(${xOffset}px, ${yOffset}px, 0)`;
      });
    };
    
    heroRef.current.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      if (heroRef.current) {
        heroRef.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);
  
  // Text reveal animation with quantum effect
  useEffect(() => {
    if (!textRef.current || !loaded) return;
    
    const text = textRef.current.innerText;
    textRef.current.innerText = '';
    
    const revealText = async () => {
      for (let i = 0; i < text.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 30));
        
        // Add quantum glitch effect randomly
        if (Math.random() > 0.8) {
          const glitchChar = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
          textRef.current.innerText = text.substring(0, i) + glitchChar;
          await new Promise(resolve => setTimeout(resolve, 50));
        }
        
        textRef.current.innerText = text.substring(0, i + 1);
      }
    };
    
    setTimeout(() => revealText(), 1000);
  }, [loaded]);

  return (
    <section ref={heroRef} className={`hero-section ${loaded ? 'loaded' : ''}`}>
      {/* SVG Definitions */}
      <svg className="svg-defs">
        <defs>
          <filter id="noise" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" />
          </filter>
          
          {/* Circle SVG */}
          <symbol id="geo-circle-svg" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="49" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
            <circle cx="50" cy="50" r="30" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" />
            <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" />
            <line x1="50" y1="0" x2="50" y2="100" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" />
          </symbol>
          
          {/* Square SVG */}
          <symbol id="geo-square-svg" viewBox="0 0 60 60">
            <rect x="1" y="1" width="58" height="58" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
            <rect x="15" y="15" width="30" height="30" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" />
            <line x1="1" y1="1" x2="59" y2="59" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" />
            <line x1="59" y1="1" x2="1" y2="59" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" />
          </symbol>
          
          {/* Triangle SVG */}
          <symbol id="geo-triangle-svg" viewBox="0 0 80 80">
            <polygon points="40,1 1,79 79,79" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
            <line x1="40" y1="1" x2="40" y2="79" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" />
            <line x1="1" y1="79" x2="79" y2="79" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" />
          </symbol>
          
          {/* Portrait SVG Placeholder - This would be a minimalist line art portrait */}
          <symbol id="portrait-svg" viewBox="0 0 450 550">
            <rect x="0" y="0" width="450" height="550" fill="white" />
            {/* We'll keep this as a fallback but won't use it */}
            <g fill="none" stroke="black" strokeWidth="1">
              {/* Minimalist face outline */}
              <path d="M225,150 C300,150 350,220 350,300 C350,400 300,450 225,450 C150,450 100,400 100,300 C100,220 150,150 225,150 Z" />
              {/* Eyes */}
              <ellipse cx="180" cy="250" rx="15" ry="10" />
              <ellipse cx="270" cy="250" rx="15" ry="10" />
              {/* Nose */}
              <path d="M225,270 C230,290 240,300 225,320" />
              {/* Mouth */}
              <path d="M180,350 C200,370 250,370 270,350" />
              {/* Hair */}
              <path d="M150,200 C150,150 300,150 300,200" />
              <path d="M100,250 C100,150 350,150 350,250" />
              {/* Neck */}
              <path d="M180,450 L180,500" />
              <path d="M270,450 L270,500" />
              {/* Shoulders */}
              <path d="M180,500 L100,520" />
              <path d="M270,500 L350,520" />
            </g>
          </symbol>
        </defs>
      </svg>
      
      {/* Liquid Morphing Background */}
      <canvas ref={liquidRef} className="liquid-background"></canvas>
      
      {/* Neural Network Grid */}
      <div className="neural-grid"></div>
      
      {/* Quantum Backdrop */}
      <div ref={quantumBackdropRef} className="quantum-backdrop"></div>
      
      {/* Quantum Noise Texture */}
      <div className="quantum-noise"></div>
      
      {/* Content Container */}
      <div className="hero-container">
        <div className="hero-content">
          <div className="status-indicator">
            <span className="status-dot"></span>
            <span className="status-text">Available for opportunities</span>
          </div>
          
          <h1 className="hero-title">
            <span className="name">ABRAHAM</span>
            <span className="surname">Mora-Tadeo</span>
          </h1>
          
          <p ref={textRef} className="hero-description">
            Software Engineer & UI Designer creating exceptional digital experiences through innovative design and clean code architecture.
          </p>
          
          <div className="hero-actions">
            <Link to="/work" className="primary-button magnetic-element">
              <span className="button-text">View Work</span>
              <ArrowRight className="button-icon" />
              <span className="button-backdrop"></span>
            </Link>
            
            <a href={resumePDF} download className="secondary-button magnetic-element">
              <Download className="button-icon" />
              <span className="button-text">Resume</span>
              <span className="button-backdrop"></span>
            </a>
          </div>
          
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link magnetic-element">
              <Github />
              <span className="link-backdrop"></span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link magnetic-element">
              <Linkedin />
              <span className="link-backdrop"></span>
            </a>
            <a href="mailto:abraham@example.com" className="social-link magnetic-element">
              <Mail />
              <span className="link-backdrop"></span>
            </a>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="portrait-container parallax-element" data-speed="1" ref={portraitRef}>
            {/* Replace SVG with actual image */}
            <img src={AbrahamImage} alt="Abraham Mora-Tadeo" className="portrait-img" />
            
            {/* Keep these effects layers */}
            <div className="portrait-frame"></div>
            <div className="portrait-scan-line"></div>
          </div>
          
          {/* Keep the geometric elements */}
          <div className="geometric-elements">
            <svg className="geo-circle parallax-element" data-speed="1.5" viewBox="0 0 100 100">
              <use href="#geo-circle-svg" />
            </svg>
            
            <svg className="geo-square parallax-element" data-speed="1.2" viewBox="0 0 60 60">
              <use href="#geo-square-svg" />
            </svg>
            
            <svg className="geo-triangle parallax-element" data-speed="1.8" viewBox="0 0 80 80">
              <use href="#geo-triangle-svg" />
            </svg>
            
            <div className="geo-line horizontal parallax-element" data-speed="0.8"></div>
            <div className="geo-line vertical parallax-element" data-speed="0.9"></div>
            <div className="geo-dot dot1 parallax-element" data-speed="2"></div>
            <div className="geo-dot dot2 parallax-element" data-speed="1.7"></div>
            <div className="geo-dot dot3 parallax-element" data-speed="1.3"></div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-line"></div>
        <span className="scroll-text">Scroll</span>
      </div>
      
      <div className="loading-indicator"></div>
      
      {/* Quantum Particles */}
      <div className="quantum-particles">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i} 
            className="quantum-particle parallax-element" 
            data-speed={Math.random() * 2 + 0.5}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              opacity: Math.random() * 0.3 + 0.1
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
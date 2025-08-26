import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import './Hero.css';

// Revolutionary Minimalist SVG Icons with Morphing Capabilities
const MinimalGithub = ({ isActive }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    <animateTransform
      attributeName="transform"
      type="rotate"
      values={isActive ? "0;360;0" : "0"}
      dur="2s"
      repeatCount="indefinite"
    />
  </svg>
);

const MinimalLinkedin = ({ isActive }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
    <animate
      attributeName="stroke-width"
      values={isActive ? "0.5;1;0.5" : "0.5"}
      dur="1.5s"
      repeatCount="indefinite"
    />
  </svg>
);

const MinimalMail = ({ isActive }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6">
      <animate
        attributeName="points"
        values={isActive ? "22,6 12,13 2,6;22,6 12,8 2,6;22,6 12,13 2,6" : "22,6 12,13 2,6"}
        dur="2s"
        repeatCount="indefinite"
      />
    </polyline>
  </svg>
);

// Revolutionary Line Art Portrait Component
const LineArtPortrait = () => (
  <svg width="250" height="250" viewBox="0 0 250 250" className="line-art-portrait">
    {/* Face outline */}
    <path d="M125 30 C160 30, 190 60, 190 100 C190 140, 180 170, 165 190 C150 210, 135 220, 125 220 C115 220, 100 210, 85 190 C70 170, 60 140, 60 100 C60 60, 90 30, 125 30 Z" 
          fill="none" stroke="currentColor" strokeWidth="0.5" className="face-outline"/>
    
    {/* Hair */}
    <path d="M125 30 C140 25, 160 30, 175 45 C185 35, 190 50, 185 65 C180 45, 165 35, 145 40 C135 35, 125 30, 125 30" 
          fill="none" stroke="currentColor" strokeWidth="0.5" className="hair"/>
    <path d="M125 30 C110 25, 90 30, 75 45 C65 35, 60 50, 65 65 C70 45, 85 35, 105 40 C115 35, 125 30, 125 30" 
          fill="none" stroke="currentColor" strokeWidth="0.5" className="hair"/>
    
    {/* Eyes */}
    <circle cx="105" cy="90" r="2" fill="none" stroke="currentColor" strokeWidth="0.5" className="eye"/>
    <circle cx="145" cy="90" r="2" fill="none" stroke="currentColor" strokeWidth="0.5" className="eye"/>
    <path d="M100 85 C105 82, 110 85, 110 85" fill="none" stroke="currentColor" strokeWidth="0.5" className="eyebrow"/>
    <path d="M140 85 C145 82, 150 85, 150 85" fill="none" stroke="currentColor" strokeWidth="0.5" className="eyebrow"/>
    
    {/* Nose */}
    <path d="M125 95 L125 110 M120 110 L130 110" fill="none" stroke="currentColor" strokeWidth="0.5" className="nose"/>
    
    {/* Mouth */}
    <path d="M115 130 C120 135, 130 135, 135 130" fill="none" stroke="currentColor" strokeWidth="0.5" className="mouth"/>
    
    {/* Neck and shoulders */}
    <path d="M115 220 L115 240 M135 220 L135 240" fill="none" stroke="currentColor" strokeWidth="0.5" className="neck"/>
    <path d="M90 240 C100 235, 115 240, 125 240 C135 240, 150 235, 160 240" fill="none" stroke="currentColor" strokeWidth="0.5" className="shoulders"/>
    
    {/* Subtle details */}
    <path d="M80 120 C85 115, 90 120, 95 115" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.6" className="detail"/>
    <path d="M155 115 C160 120, 165 115, 170 120" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.6" className="detail"/>
  </svg>
);

// Revolutionary Cursor Wake System
const CursorWakes = () => {
  const canvasRef = useRef(null);
  const wakesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const createWake = (x, y) => {
      wakesRef.current.push({
        x,
        y,
        radius: 0,
        maxRadius: Math.random() * 50 + 30,
        opacity: 0.8,
        speed: Math.random() * 0.5 + 0.3,
        life: 1
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      
      // Update and draw wakes
      wakesRef.current = wakesRef.current.filter(wake => {
        wake.radius += wake.speed;
        wake.life -= 0.008;
        wake.opacity = wake.life * 0.3;
        
        if (wake.life > 0) {
          // Draw outer circle (black)
          ctx.beginPath();
          ctx.arc(wake.x, wake.y, wake.radius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(0, 0, 0, ${wake.opacity})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
          
          // Draw inner circle (grey)
          if (wake.radius > 10) {
            ctx.beginPath();
            ctx.arc(wake.x, wake.y, wake.radius - 10, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(100, 100, 100, ${wake.opacity * 0.6})`;
            ctx.lineWidth = 0.3;
            ctx.stroke();
          }
          
          return true;
        }
        return false;
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Create wake every few pixels of movement
      const dx = x - mouseRef.current.x;
      const dy = y - mouseRef.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance > 15) {
        createWake(x, y);
        mouseRef.current = { x, y };
      }
    };

    resizeCanvas();
    animate();

    canvas.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', resizeCanvas);

    return () => {
      cancelAnimationFrame(animationRef.current);
      canvas.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="cursor-wakes" />;
};

// Revolutionary Morphing Text Component
const MorphingText = ({ text, className }) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className={`${className} ${isComplete ? 'complete' : ''}`}>
      {displayText}
      {!isComplete && <span className="cursor-blink">|</span>}
      }
    </span>
  );
};

// Revolutionary Glitch Text Effect
const GlitchText = ({ children, className }) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 150);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`${className} ${isGlitching ? 'glitch' : ''}`} data-text={children}>
      {children}
    </span>
  );
};

function Hero() {
  const [activeIcon, setActiveIcon] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={`hero ${isLoaded ? 'loaded' : ''}`} ref={heroRef}>
      <CursorWakes />
      
      <div className="hero-container container">
        <div className="hero-content">
          <div className="hero-status">
            <span className="status-dot quantum-pulse"></span>
            <MorphingText text="Available for new opportunities" className="status-text" />
          </div>

          <h1 className="hero-greeting">
            <GlitchText className="hero-name">Abraham</GlitchText>
          </h1>

          <h2 className="hero-tagline holographic-text">
            Software Engineer & UI Designer
          </h2>

          <p className="hero-description typewriter-text">
            I create clean, functional interfaces and robust systems. 
            Focused on simplicity, performance, and user experience.
          </p>

          <div className="hero-actions">
            <a href="/work" className="hero-cta magnetic-button">
              <span className="button-text">View Work</span>
              <ArrowRight size={16} className="button-icon" />
            </a>
            <a href="/resume.pdf" className="hero-secondary glass-button" target="_blank" rel="noopener noreferrer">
              <Download size={16} />
              <span>Resume</span>
            </a>
          </div>

          <div className="social-links">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link morphing-icon" 
              aria-label="GitHub"
              onMouseEnter={() => setActiveIcon('github')}
              onMouseLeave={() => setActiveIcon(null)}
            >
              <MinimalGithub isActive={activeIcon === 'github'} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link morphing-icon" 
              aria-label="LinkedIn"
              onMouseEnter={() => setActiveIcon('linkedin')}
              onMouseLeave={() => setActiveIcon(null)}
            >
              <MinimalLinkedin isActive={activeIcon === 'linkedin'} />
            </a>
            <a 
              href="mailto:abraham@example.com" 
              className="social-link morphing-icon" 
              aria-label="Email"
              onMouseEnter={() => setActiveIcon('mail')}
              onMouseLeave={() => setActiveIcon(null)}
            >
              <MinimalMail isActive={activeIcon === 'mail'} />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-container quantum-frame">
            <LineArtPortrait />
            <div className="image-frame"></div>
            <div className="quantum-border"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
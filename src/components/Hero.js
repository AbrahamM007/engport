import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import './Hero.css';
import heroImage from './Abraham.png';

// Revolutionary Minimalist SVG Icons with Morphing Capabilities
const MinimalGithub = ({ isActive }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
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
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
    <animate
      attributeName="stroke-width"
      values={isActive ? "1;2;1" : "1"}
      dur="1.5s"
      repeatCount="indefinite"
    />
  </svg>
);

const MinimalMail = ({ isActive }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
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
    }, 100);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className={`${className} ${isComplete ? 'complete' : ''}`}>
      {displayText}
      {!isComplete && <span className="cursor-blink">|</span>}
    </span>
  );
};

// Revolutionary Particle Field Component
const ParticleField = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const createParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < 50; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.offsetWidth,
          y: Math.random() * canvas.offsetHeight,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 1 + 0.5,
          opacity: Math.random() * 0.3 + 0.1
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      
      particlesRef.current.forEach((particle, index) => {
        // Mouse interaction
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const force = (100 - distance) / 100;
          particle.vx -= (dx / distance) * force * 0.01;
          particle.vy -= (dy / distance) * force * 0.01;
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Boundary check
        if (particle.x < 0 || particle.x > canvas.offsetWidth) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.offsetHeight) particle.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 0, 0, ${particle.opacity})`;
        ctx.fill();

        // Draw connections
        particlesRef.current.slice(index + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 80) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(0, 0, 0, ${0.1 * (1 - distance / 80)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    resizeCanvas();
    createParticles();
    animate();

    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-field" />;
};

// Revolutionary Glitch Text Effect
const GlitchText = ({ children, className }) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 5000);

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
    
    // Advanced intersection observer for scroll-triggered animations
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
      <ParticleField />
      
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
            <a href="#work" className="hero-cta magnetic-button">
              <span className="button-text">View Work</span>
              <ArrowRight size={16} className="button-icon" />
              <div className="button-ripple"></div>
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
            <img src={heroImage} alt="Abraham" className="hero-image" />
            <div className="image-frame"></div>
            <div className="quantum-border"></div>
            <div className="hologram-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
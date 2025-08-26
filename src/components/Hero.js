import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import './Hero.css';

// Revolutionary Magnetic Field Component inspired by SIZE
const MagneticField = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    // Initialize particles for TRAE-style background
    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < 40; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.offsetWidth,
          y: Math.random() * canvas.offsetHeight,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.3 + 0.1,
          originalOpacity: Math.random() * 0.3 + 0.1
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      
      particlesRef.current.forEach((particle, i) => {
        // Mouse interaction - SIZE style magnetic effect
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 200) {
          const force = (200 - distance) / 200;
          particle.vx -= (dx / distance) * force * 0.01;
          particle.vy -= (dy / distance) * force * 0.01;
          particle.opacity = particle.originalOpacity + force * 0.3;
        } else {
          particle.opacity = particle.originalOpacity;
        }
        
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Boundaries with bounce
        if (particle.x < 0 || particle.x > canvas.offsetWidth) particle.vx *= -0.9;
        if (particle.y < 0 || particle.y > canvas.offsetHeight) particle.vy *= -0.9;
        
        // Keep in bounds
        particle.x = Math.max(0, Math.min(canvas.offsetWidth, particle.x));
        particle.y = Math.max(0, Math.min(canvas.offsetHeight, particle.y));
        
        // Draw particle - minimalist dot
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 0, 0, ${particle.opacity})`;
        ctx.fill();
        
        // TRAE-style connections
        particlesRef.current.slice(i + 1).forEach(otherParticle => {
          const dx2 = particle.x - otherParticle.x;
          const dy2 = particle.y - otherParticle.y;
          const distance2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
          
          if (distance2 < 120) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(0, 0, 0, ${0.03 * (1 - distance2 / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    resizeCanvas();
    initParticles();
    animate();

    canvas.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', () => {
      resizeCanvas();
      initParticles();
    });

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      canvas.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="magnetic-field" />;
};

// Revolutionary Text Morphing inspired by TRAE
const MorphingText = ({ text, className, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(prev => prev + 1);
      }
    }, delay + currentIndex * 25);

    return () => clearTimeout(timer);
  }, [currentIndex, text, delay]);

  return <span className={className}>{displayText}</span>;
};

// SIZE-inspired Floating Elements
const FloatingElements = () => {
  return (
    <div className="floating-elements">
      <div className="floating-shape shape-1"></div>
      <div className="floating-shape shape-2"></div>
      <div className="floating-shape shape-3"></div>
      <div className="floating-line line-1"></div>
      <div className="floating-line line-2"></div>
      <div className="floating-dot dot-1"></div>
      <div className="floating-dot dot-2"></div>
    </div>
  );
};

// Revolutionary Glitch Effect for Name
const GlitchText = ({ text, className }) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`${className} ${isGlitching ? 'glitch' : ''}`}>
      {text}
      {isGlitching && (
        <>
          <span className="glitch-layer" data-text={text}>{text}</span>
          <span className="glitch-layer" data-text={text}>{text}</span>
        </>
      )}
    </span>
  );
};

function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
          y: ((e.clientY - rect.top) / rect.height - 0.5) * 20
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      clearTimeout(timer);
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section className={`hero ${isLoaded ? 'loaded' : ''}`} ref={heroRef}>
      <MagneticField />
      <FloatingElements />
      
      <div className="hero-container container">
        <div className="hero-content">
          {/* SIZE-inspired Status Indicator */}
          <div className="hero-status">
            <div className="status-indicator">
              <div className="status-dot"></div>
              <div className="status-ripple"></div>
            </div>
            <MorphingText 
              text="Available for opportunities" 
              className="status-text"
              delay={500}
            />
          </div>

          {/* Revolutionary Typography inspired by TRAE */}
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-line">
                <GlitchText text="Abraham" className="name-text" />
              </span>
              <span className="title-line">
                <MorphingText text="Mora-Tadeo" className="surname-text" delay={800} />
              </span>
            </h1>
            
            <div className="hero-subtitle">
              <MorphingText 
                text="Software Engineer & UI Designer" 
                className="subtitle-text"
                delay={1000}
              />
            </div>
            
            <div className="hero-description">
              <MorphingText 
                text="Creating exceptional digital experiences through innovative design and clean code architecture."
                className="description-text"
                delay={1200}
              />
            </div>
          </div>

          {/* SIZE-inspired Action Buttons */}
          <div className="hero-actions">
            <button className="primary-button magnetic-element">
              <span className="button-bg"></span>
              <span className="button-text">View Work</span>
              <ArrowRight size={16} className="button-arrow" />
            </button>
            
            <button className="secondary-button magnetic-element">
              <span className="button-bg"></span>
              <Download size={16} />
              <span>Resume</span>
            </button>
          </div>

          {/* TRAE-inspired Social Links */}
          <div className="hero-social">
            <a href="https://github.com" className="social-link magnetic-element">
              <span className="social-bg"></span>
              <Github size={18} />
            </a>
            <a href="https://linkedin.com" className="social-link magnetic-element">
              <span className="social-bg"></span>
              <Linkedin size={18} />
            </a>
            <a href="mailto:abraham@example.com" className="social-link magnetic-element">
              <span className="social-bg"></span>
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Revolutionary Image Section inspired by SIZE */}
        <div className="hero-visual">
          <div className="image-container">
            <div 
              className="image-wrapper"
              style={{
                transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px) rotateX(${mousePosition.y * 0.2}deg) rotateY(${mousePosition.x * 0.2}deg)`
              }}
            >
              <img 
                src="/Abraham.png" 
                alt="Abraham Hernandez"
                className="hero-image"
              />
              <div className="image-overlay"></div>
              <div className="image-border"></div>
            </div>
            
            {/* SIZE-inspired Geometric Elements */}
            <div className="geometric-elements">
              <div className="geo-circle"></div>
              <div className="geo-line-1"></div>
              <div className="geo-line-2"></div>
              <div className="geo-dot-1"></div>
              <div className="geo-dot-2"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* TRAE-inspired Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-line"></div>
        <div className="scroll-text">Scroll to explore</div>
      </div>
    </section>
  );
}

export default Hero;
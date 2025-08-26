import React, { useEffect, useRef } from 'react';
import './CursorFX.css';

export default function CursorFX() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const trailRef = useRef(null);
  const magneticRef = useRef(null);

  useEffect(() => {
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x, ry = y;
    let tx = x, ty = y;
    let mx = x, my = y;

    const onMove = (e) => { 
      x = e.clientX; 
      y = e.clientY; 
    };

    const onOver = (e) => {
      // Check for all interactive elements
      const interactive = e.target.closest(`
        a, button, input, textarea, select,
        .interactive, .magnetic-element, .social-link,
        .navbar-link, .navbar-brand a, .footer-right, 
        .pilot-fab, .pilot-close, .grade-button,
        .view-button, .submit-button, .contact-method,
        .skill-tag, .artifact-card, .feature-card,
        .certification-card, .achievement-item,
        .stat-card, .experience-card, .timeline-item,
        .primary-button, .secondary-button,
        [role="button"], [tabindex="0"]
      `);
      
      const text = e.target.matches('input[type="text"], input[type="email"], input[type="number"], textarea, [contenteditable="true"]');
      const image = e.target.matches('img, .hero-image, .quantum-frame, .image-wrapper');
      
      // Remove all cursor states first
      document.body.classList.remove('cursor-interactive', 'cursor-text', 'cursor-image', 'cursor-magnetic');
      
      if (text) {
        document.body.classList.add('cursor-text');
      } else if (image) {
        document.body.classList.add('cursor-image');
      } else if (interactive) {
        document.body.classList.add('cursor-interactive');
        
        // Special magnetic effect for certain elements
        if (interactive.classList.contains('magnetic-element') || 
            interactive.classList.contains('primary-button') ||
            interactive.classList.contains('secondary-button')) {
          document.body.classList.add('cursor-magnetic');
        }
      }
    };

    const onLeave = () => {
      document.body.classList.remove('cursor-interactive', 'cursor-text', 'cursor-image', 'cursor-magnetic');
    };

    // Use document instead of window for better coverage
    document.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver, { passive: true });
    document.addEventListener('mouseleave', onLeave, { passive: true });

    const loop = () => {
      // Different easing for each layer for smooth following effect
      rx += (x - rx) * 0.15;
      ry += (y - ry) * 0.15;
      tx += (rx - tx) * 0.08;
      ty += (ry - ty) * 0.08;
      mx += (tx - mx) * 0.04;
      my += (ty - my) * 0.04;
      
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      }
      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      }
      if (magneticRef.current) {
        magneticRef.current.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
      }
      
      requestAnimationFrame(loop);
    };
    loop();

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <>
      <div ref={magneticRef} className="cursor-magnetic-field" aria-hidden="true"></div>
      <div ref={trailRef} className="cursor-trail" aria-hidden="true"></div>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true"></div>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true"></div>
    </>
  );
}
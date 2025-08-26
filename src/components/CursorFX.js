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
      const interactive = e.target.closest('a, button, .interactive, [role="button"], .magnetic-button, .morphing-icon, .navbar-link, .navbar-brand a, .footer-right, .pilot-fab');
      const text = e.target.matches('input[type="text"], input[type="email"], textarea');
      const image = e.target.matches('img, .hero-image');
      
      document.body.classList.toggle('cursor-interactive', !!interactive);
      document.body.classList.toggle('cursor-text', text);
      document.body.classList.toggle('cursor-image', image);
      
      // Magnetic effect for special elements
      if (interactive && interactive.classList.contains('magnetic-button')) {
        document.body.classList.add('cursor-magnetic');
      } else {
        document.body.classList.remove('cursor-magnetic');
      }
    };

    const onLeave = () => {
      document.body.classList.remove('cursor-interactive', 'cursor-text', 'cursor-image', 'cursor-magnetic');
    };

    document.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseleave', onLeave);

    const loop = () => {
      // Different easing for each layer
      rx += (x - rx) * 0.2;
      ry += (y - ry) * 0.2;
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
import React, { useEffect, useRef } from 'react';
import './CursorFX.css';

export default function CursorFX() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const trailRef = useRef(null);

  useEffect(() => {
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x, ry = y;
    let tx = x, ty = y;

    const onMove = (e) => { x = e.clientX; y = e.clientY; };
    const onOver = (e) => {
      const t = e.target.closest('a, button, .interactive, [role="button"]');
      document.body.classList.toggle('cursor-interactive', !!t);
      
      // Add text cursor for text inputs
      const isText = e.target.matches('input[type="text"], input[type="email"], textarea');
      document.body.classList.toggle('cursor-text', isText);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver);

    const loop = () => {
      rx += (x - rx) * 0.15;
      ry += (y - ry) * 0.15;
      tx += (rx - tx) * 0.05;
      ty += (ry - ty) * 0.05;
      
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      if (trailRef.current) trailRef.current.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      requestAnimationFrame(loop);
    };
    loop();

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
    };
  }, []);

  return (
    <>
      <div ref={trailRef} className="cursor-trail" aria-hidden="true"></div>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true"></div>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true"></div>
    </>
  );
}
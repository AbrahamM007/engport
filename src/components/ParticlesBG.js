import React, { useEffect, useRef } from 'react';

export default function ParticlesBG() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d', { alpha: false });
    let w, h, dpr;
    let points = [];
    const COUNT = 120;

    const resize = () => {
      dpr = Math.max(1, window.devicePixelRatio || 1);
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const reset = () => {
      points = Array.from({ length: COUNT }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        r: Math.random() * 1.2 + 0.4
      }));
    };

    const draw = () => {
      ctx.fillStyle = '#0b0f19';
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = 'rgba(255,255,255,0.5)';
      points.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
      });
      requestAnimationFrame(draw);
    };

    resize(); reset(); draw();
    window.addEventListener('resize', () => { resize(); reset(); });
    return () => window.removeEventListener('resize', () => { resize(); reset(); });
  }, []);

  return (
    <canvas
      ref={ref}
      className="bg-canvas"
      style={{ position: 'fixed', inset: 0, zIndex: 0 }}
    />
  );
}
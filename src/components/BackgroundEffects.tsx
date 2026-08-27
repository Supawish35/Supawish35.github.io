import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export const BackgroundEffects: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Track mouse position
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 140,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    // Initialize Particles
    let particles: Particle[] = [];
    const initParticles = () => {
      particles = [];
      // Adjust density based on screen area
      const particleCount = Math.min(Math.floor((width * height) / 22000), 65);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: Math.random() * 1.5 + 1,
        });
      }
    };

    initParticles();

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.classList.contains('dark');
      const dotColor = isDark ? 'rgba(147, 197, 253, 0.4)' : 'rgba(37, 99, 235, 0.35)';
      const lineColor = isDark ? 'rgba(59, 130, 246, ' : 'rgba(37, 99, 235, ';
      const mouseLineColor = isDark ? 'rgba(96, 165, 250, ' : 'rgba(29, 78, 216, ';

      // Update & Draw Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce on edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = dotColor;
        ctx.fill();

        // Connect to nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < 110) {
            const alpha = (1 - dist / 110) * (isDark ? 0.18 : 0.12);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `${lineColor}${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Connect to mouse cursor if nearby
        const mouseDx = p.x - mouse.x;
        const mouseDy = p.y - mouse.y;
        const mouseDist = Math.hypot(mouseDx, mouseDy);

        if (mouseDist < mouse.radius) {
          const mouseAlpha = (1 - mouseDist / mouse.radius) * (isDark ? 0.35 : 0.25);
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `${mouseLineColor}${mouseAlpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* 1. Subtle Precision Dot Blueprint Layer */}
      <div
        className="absolute inset-0 bg-dot-pattern opacity-30 dark:opacity-20"
        style={{
          maskImage: 'radial-gradient(ellipse 90% 70% at 50% 30%, black 40%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 70% at 50% 30%, black 40%, transparent 95%)',
        }}
      />

      {/* 2. Interactive CS Constellation / Graph Network Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* 3. Gentle Monochrome Atmosphere Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-gradient-to-b from-brand-500/5 dark:from-brand-500/10 to-transparent blur-3xl pointer-events-none" />
    </div>
  );
};

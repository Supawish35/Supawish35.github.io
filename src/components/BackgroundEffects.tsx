import React, { useEffect, useRef } from 'react';

type RGB = [number, number, number];

interface Particle {
  x: number;
  y: number;
  /** y after scroll parallax, computed once per frame (avoids per-frame allocations). */
  sy: number;
  vx: number;
  vy: number;
  radius: number;
  /** 0.35 (far) to 1 (near): scales size, speed, brightness and scroll parallax. */
  depth: number;
  color: number;
  phase: number;
  twinkle: number;
}

// Accent mix: mostly teal, with amber and rose sparks so the field is not monochrome.
const PALETTE_LIGHT: RGB[] = [[13, 148, 136], [13, 148, 136], [217, 119, 6], [225, 29, 72]];
const PALETTE_DARK: RGB[] = [[45, 212, 191], [45, 212, 191], [251, 191, 36], [251, 113, 133]];

const BASE_SPEED = 0.38;
const MAX_SPEED = 1.5;
const LINK_DIST = 125;
const LINK_DIST_SQ = LINK_DIST * LINK_DIST;
const MOUSE_RADIUS = 190;
const BURST_RADIUS = 260;
const MAX_PARTICLES = 100;

export const BackgroundEffects: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // The full particle field runs on desktop. Phones and touch devices (lite mode, see index.html)
    // and reduced-motion users get the static glows instead, which costs nothing per frame.
    const skip =
      document.documentElement.classList.contains('lite') ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (skip) {
      canvas.style.display = 'none';
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frameId = 0;
    let lastTime = 0;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let scrollY = window.scrollY;
    let scrollEnergy = 0;
    let isDark = document.documentElement.classList.contains('dark');

    const mouse = { x: -9999, y: -9999, active: false };

    // Theme only changes on toggle, so observe the class instead of reading it every frame.
    const themeObserver = new MutationObserver(() => {
      isDark = document.documentElement.classList.contains('dark');
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const target = Math.min(Math.floor((width * height) / 15000), MAX_PARTICLES);
      particles = Array.from({ length: target }, () => {
        const depth = 0.35 + Math.random() * 0.65;
        const angle = Math.random() * Math.PI * 2;
        const speed = (0.4 + Math.random() * 0.6) * BASE_SPEED * depth;
        const y = Math.random() * height;
        return {
          x: Math.random() * width,
          y,
          sy: y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: (Math.random() * 1.6 + 1) * (0.7 + depth * 0.7),
          depth,
          color: Math.floor(Math.random() * PALETTE_LIGHT.length),
          phase: Math.random() * Math.PI * 2,
          twinkle: 0.7 + Math.random() * 1.3,
        };
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };
    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = mouse.y = -9999;
    };
    // Click shockwave: pushes nearby particles outward.
    const handlePointerDown = (e: PointerEvent) => {
      for (const p of particles) {
        const dx = p.x - e.clientX;
        const dy = p.sy - e.clientY;
        const dist = Math.hypot(dx, dy) || 1;
        if (dist < BURST_RADIUS) {
          const force = (1 - dist / BURST_RADIUS) * 4.5 * p.depth;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }
      }
    };
    // Scrolling injects a little energy and drives the parallax.
    const handleScroll = () => {
      const delta = window.scrollY - scrollY;
      scrollY = window.scrollY;
      scrollEnergy = Math.min(scrollEnergy + Math.abs(delta) * 0.006, 1.2);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    window.addEventListener('pointerdown', handlePointerDown, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    const render = (time: number) => {
      frameId = requestAnimationFrame(render);

      const elapsed = time - lastTime;
      lastTime = time;
      // Normalise movement to a 60 fps step so speed stays constant on 90/120 Hz displays.
      const step = Math.min(elapsed, 64) / 16.67;

      ctx.clearRect(0, 0, width, height);

      ctx.globalCompositeOperation = isDark ? 'lighter' : 'source-over';
      const palette = isDark ? PALETTE_DARK : PALETTE_LIGHT;
      const dotAlpha = isDark ? 0.75 : 0.6;
      const linkAlpha = isDark ? 0.34 : 0.26;

      const t = time / 1000;
      const energy = 1 + scrollEnergy;
      scrollEnergy *= 0.95;
      const parallax = scrollY * 0.12;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Cursor: soft attraction plus a sideways swirl.
        let flare = 0;
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.sy;
          const distSq = dx * dx + dy * dy;
          if (distSq < MOUSE_RADIUS * MOUSE_RADIUS && distSq > 1) {
            const dist = Math.sqrt(distSq);
            flare = 1 - dist / MOUSE_RADIUS;
            const pull = flare * 0.035 * p.depth * step;
            p.vx += (dx / dist) * pull - (dy / dist) * pull * 0.9;
            p.vy += (dy / dist) * pull + (dx / dist) * pull * 0.9;
          }
        }

        // Ease extra speed (bursts, scroll, cursor) back toward cruising speed.
        const speed = Math.hypot(p.vx, p.vy);
        const cruise = BASE_SPEED * p.depth * energy;
        const limit = Math.min(MAX_SPEED, cruise * 2 + 0.4);
        if (speed > limit) {
          p.vx *= 0.97;
          p.vy *= 0.97;
        } else if (speed < cruise * 0.55 && speed > 0.001) {
          p.vx *= 1.02;
          p.vy *= 1.02;
        }

        p.x += p.vx * energy * step;
        p.y += p.vy * energy * step;
        if (p.x < -20) p.x = width + 20;
        else if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        else if (p.y > height + 20) p.y = -20;

        // Near particles drift against the scroll further than far ones.
        p.sy = (((p.y - parallax * p.depth) % height) + height) % height;
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const [r, g, b] = palette[p.color];
        const flare = mouse.active
          ? Math.max(0, 1 - Math.hypot(mouse.x - p.x, mouse.y - p.sy) / MOUSE_RADIUS)
          : 0;
        const pulse = 0.65 + 0.35 * Math.sin(t * p.twinkle + p.phase);
        const alpha = Math.min(1, dotAlpha * p.depth * pulse + flare * 0.5);
        const radius = p.radius * (1 + flare * 0.9);

        // Soft halo
        ctx.beginPath();
        ctx.arc(p.x, p.sy, radius * 3.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${alpha * 0.14})`;
        ctx.fill();
        // Core
        ctx.beginPath();
        ctx.arc(p.x, p.sy, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
        ctx.fill();

        // Links to neighbours (squared distance: no sqrt until a pair is actually close)
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.sy - q.sy;
          const distSq = dx * dx + dy * dy;
          if (distSq < LINK_DIST_SQ) {
            const a = (1 - Math.sqrt(distSq) / LINK_DIST) * linkAlpha * Math.min(p.depth, q.depth + 0.2);
            ctx.beginPath();
            ctx.moveTo(p.x, p.sy);
            ctx.lineTo(q.x, q.sy);
            ctx.strokeStyle = `rgba(${r},${g},${b},${a})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }

        if (flare > 0) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.sy);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(${r},${g},${b},${flare * 0.55})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }
    };

    frameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frameId);
      themeObserver.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* 1. Subtle precision dot grid */}
      <div
        className="fx-extra absolute inset-0 bg-dot-pattern opacity-30 dark:opacity-20"
        style={{
          maskImage: 'radial-gradient(ellipse 90% 70% at 50% 30%, black 40%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 70% at 50% 30%, black 40%, transparent 95%)',
        }}
      />

      {/* 2. Interactive particle network (hidden in lite mode) */}
      <canvas ref={canvasRef} className="fx-canvas absolute inset-0 w-full h-full" />

      {/* 3. Ambient color glows that the glass panels refract. Radial gradients (no blur filter);
          in lite mode they stay static and the third one is hidden. */}
      <div className="absolute -top-48 -left-40 h-[680px] w-[680px] animate-blob fx-drift rounded-full bg-[radial-gradient(closest-side,rgb(20_184_166/0.32),transparent)] dark:bg-[radial-gradient(closest-side,rgb(20_184_166/0.2),transparent)]" />
      <div className="absolute top-1/3 -right-52 h-[600px] w-[600px] animate-blob-slow fx-drift rounded-full bg-[radial-gradient(closest-side,rgb(251_191_36/0.28),transparent)] dark:bg-[radial-gradient(closest-side,rgb(251_191_36/0.12),transparent)]" />
      <div className="fx-extra absolute -bottom-52 left-1/4 h-[640px] w-[640px] animate-blob fx-drift rounded-full bg-[radial-gradient(closest-side,rgb(251_113_133/0.22),transparent)] dark:bg-[radial-gradient(closest-side,rgb(251_113_133/0.12),transparent)]" />
    </div>
  );
};

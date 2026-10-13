import { useEffect } from 'react';
import type { CSSProperties } from 'react';

/** Stagger helper: `<div data-reveal style={revealDelay(i)} />`. */
export const revealDelay = (index: number, stepMs = 80): CSSProperties =>
  ({ '--reveal-delay': `${Math.min(index, 6) * stepMs}ms` }) as CSSProperties;

/**
 * Reveals every `[data-reveal]` element once it enters the viewport.
 * Hiding only starts after this hook runs (`data-reveal-ready` on <html>),
 * so content stays visible without JS, without IntersectionObserver, or with
 * reduced motion. Re-scans when `rescanKey` changes so remounted elements
 * (e.g. after a language switch) are never left hidden.
 */
export function useScrollReveal(rescanKey: string): void {
  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) return;

    root.setAttribute('data-reveal-ready', '');

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute('data-revealed', '');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    document
      .querySelectorAll('[data-reveal]:not([data-revealed])')
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [rescanKey]);
}

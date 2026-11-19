import { useEffect } from 'react';

/**
 * Progressively reveals `[data-reveal]` sections as they enter the viewport.
 * Falls back to immediate visibility when IntersectionObserver is unavailable
 * or when reduced motion is preferred.
 */
export function useScrollReveal(deps: unknown[] = []): void {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (nodes.length === 0) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced || typeof IntersectionObserver === 'undefined') {
      nodes.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const revealVisible = () => {
      const vh = window.innerHeight || 900;
      nodes.forEach((el) => {
        if (el.classList.contains('is-visible')) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= vh + 40) {
          el.classList.add('is-visible');
        }
      });
    };

    revealVisible();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: '0px 0px 60px 0px' }
    );

    nodes.forEach((el) => {
      if (!el.classList.contains('is-visible')) {
        observer.observe(el);
      }
    });

    window.addEventListener('scroll', revealVisible, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', revealVisible);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

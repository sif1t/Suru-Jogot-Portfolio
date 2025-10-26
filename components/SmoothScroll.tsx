'use client';

import { useEffect } from 'react';

// Lightweight global smooth-scrolling enhancer with sticky-header offset
// - Intercepts in-page anchor clicks (href starting with "#")
// - Uses smooth scrollTo with a configurable offset (defaults to 80px)
// - Honors existing CSS `scroll-behavior: smooth`
export default function SmoothScroll({ offset = 80 }: { offset?: number }) {
  useEffect(() => {
    const handler = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const link = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!link || link.getAttribute('href') === '#') return;

      const hash = link.getAttribute('href') || '';
      const id = decodeURIComponent(hash.replace('#', ''));
      const el = document.getElementById(id) || document.querySelector(hash);
      if (!el) return;

      e.preventDefault();
      const rect = (el as HTMLElement).getBoundingClientRect();
      const top = window.pageYOffset + rect.top - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      history.replaceState(null, '', hash);
    };

    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [offset]);

  // No UI; this just wires up listeners globally
  return null;
}

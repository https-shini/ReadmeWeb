/* ============================================================
   HERO.JS — Módulo Hero
   ============================================================ */
"use strict";

export function initHero() {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return;

  const glows = document.querySelectorAll(".hero__glow-1, .hero__glow-2");
  if (!glows.length) return;

  const onScroll = debounce(() => {
    const y = window.scrollY;
    glows.forEach((glow, i) => {
      const dir = i % 2 === 0 ? 1 : -1;
      glow.style.transform = `translateY(${y * 0.08 * dir}px)`;
    });
  }, 10);

  window.addEventListener("scroll", onScroll, { passive: true });
}

function debounce(fn, wait) {
  let t;
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), wait); };
}

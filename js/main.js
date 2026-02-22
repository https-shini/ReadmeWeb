/* ============================================================
   MAIN.JS — Orquestrador principal
   Inicializa todos os módulos; nenhuma lógica de negócio aqui.
   ============================================================ */

"use strict";

import { initHeader } from "./components/header.js";
import { initHero }   from "./components/hero.js";
import {
  initAbout,
  initSkills,
  initProjects,
  initJourney,
  initExperience,
  initGoals,
  initContact,
  initFooter,
} from "./components/modules.js";

// ─── REVEAL ANIMATIONS ──────────────────────────────────────
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReduced || !("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  els.forEach((el) => observer.observe(el));
}

// ─── SCROLL TOP ──────────────────────────────────────────────
function initScrollTop() {
  const btn = document.getElementById("scrollTop");
  if (!btn) return;

  const onScroll = debounce(() => {
    btn.classList.toggle("is-visible", window.scrollY > 400);
  }, 100);

  window.addEventListener("scroll", onScroll, { passive: true });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

// ─── SMOOTH SCROLL DOS LINKS ─────────────────────────────────
function initSmoothLinks() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      const offset = 64; // altura do header
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });
}

// ─── UTILS ───────────────────────────────────────────────────
function debounce(fn, wait) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), wait);
  };
}

// ─── BOOTSTRAP ───────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initHero();
  initAbout();
  initSkills();
  initProjects();
  initJourney();
  initExperience();
  initGoals();
  initContact();
  initFooter();
  initReveal();
  initScrollTop();
  initSmoothLinks();
});

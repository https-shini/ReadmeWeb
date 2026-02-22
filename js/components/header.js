/* ============================================================
   HEADER.JS — Módulo do cabeçalho
   Responsabilidades: scroll spy, mobile nav, theme toggle, scroll shadow
   ============================================================ */

"use strict";

export function initHeader() {
  const header       = document.querySelector(".header");
  const themeToggle  = document.getElementById("themeToggle");
  const menuToggle   = document.getElementById("menuToggle");
  const mobileNav    = document.getElementById("mobileNav");
  const overlay      = document.getElementById("overlay");
  const navLinks     = document.querySelectorAll(".header__nav-link");

  if (!header) return;

  // ─── SCROLL SHADOW ──────────────────────────────────────
  const onScroll = debounce(() => {
    header.classList.toggle("is-scrolled", window.scrollY > 20);
  }, 60);

  window.addEventListener("scroll", onScroll, { passive: true });

  // ─── SCROLL SPY ─────────────────────────────────────────
  if ("IntersectionObserver" in window && navLinks.length) {
    const sections = document.querySelectorAll("main section[id]");

    const setActiveLink = (id) => {
      navLinks.forEach((link) => {
        const isActive = link.getAttribute("href") === `#${id}`;
        link.classList.toggle("is-active", isActive);
        if (isActive) {
          link.setAttribute("aria-current", "page");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveLink(entry.target.id);
        });
      },
      { rootMargin: "-64px 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
  }

  // ─── MOBILE NAV ─────────────────────────────────────────
  const getFocusableEls = (container) =>
    [...container.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )].filter((el) => !el.hasAttribute("hidden"));

  const openNav = () => {
    mobileNav?.setAttribute("aria-hidden", "false");
    overlay?.classList.add("is-open");
    menuToggle?.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
    const first = getFocusableEls(mobileNav)[0];
    first?.focus();
  };

  const closeNav = () => {
    mobileNav?.setAttribute("aria-hidden", "true");
    overlay?.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
    menuToggle?.focus();
  };

  menuToggle?.addEventListener("click", openNav);
  overlay?.addEventListener("click", closeNav);

  document.addEventListener("keydown", (e) => {
    if (!mobileNav || mobileNav.getAttribute("aria-hidden") === "true") return;
    if (e.key === "Escape") { closeNav(); return; }
    if (e.key !== "Tab") return;

    const els = getFocusableEls(mobileNav);
    if (!els.length) return;
    const [first, last] = [els[0], els.at(-1)];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });

  mobileNav?.querySelectorAll(".header__mobile-nav-link")
    .forEach((link) => link.addEventListener("click", closeNav));

  // ─── THEME TOGGLE ────────────────────────────────────────
  const THEME_KEY = "portfolio-theme";
  const root = document.documentElement;

  const applyTheme = (theme) => {
    root.setAttribute("data-theme", theme);
    if (themeToggle) {
      themeToggle.setAttribute(
        "aria-label",
        theme === "dark" ? "Alternar para tema claro" : "Alternar para tema escuro"
      );
      themeToggle.textContent = theme === "dark" ? "☀" : "◐";
    }
  };

  const getSavedTheme = () => {
    try { return localStorage.getItem(THEME_KEY); } catch { return null; }
  };

  const saveTheme = (theme) => {
    try { localStorage.setItem(THEME_KEY, theme); } catch {}
  };

  const initTheme = () => {
    const saved = getSavedTheme();
    const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    applyTheme(saved || preferred);
  };

  const toggleTheme = () => {
    const current = root.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
    saveTheme(next);
  };

  initTheme();
  themeToggle?.addEventListener("click", toggleTheme);
}

// ─── UTILS LOCAL ─────────────────────────────────────────────
function debounce(fn, wait) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), wait);
  };
}

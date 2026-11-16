// =========================================================
// GL Dining — shared scripts (every page loads this file)
// =========================================================

// ---- Mobile navigation: open/close the menu ----
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

// ---- Light / dark mode toggle ----
// The page starts in the saved choice, or dark after 6 pm (see <head>).
const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");

function updateToggleLabel() {
  const dark = root.getAttribute("data-mode") === "dark";
  themeToggle?.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
}

themeToggle?.addEventListener("click", () => {
  const next = root.getAttribute("data-mode") === "dark" ? "light" : "dark";
  root.setAttribute("data-mode", next);
  try { localStorage.setItem("gl-mode", next); } catch (e) { /* storage blocked: still works for this page */ }
  updateToggleLabel();
});
updateToggleLabel();

// ---- Add a border under the header once the page scrolls ----
const header = document.querySelector(".site-header");
window.addEventListener("scroll", () => {
  if (header) header.classList.toggle("scrolled", window.scrollY > 10);
});

// ---- Hero slideshow (client asked for moving photos on every page) ----
document.querySelectorAll("[data-slideshow]").forEach((hero) => {
  const slides = hero.querySelectorAll(".slide");
  const dots = hero.querySelectorAll(".slide-dot");
  if (slides.length < 2) return;

  let current = 0;
  let timer;

  function show(index) {
    slides[current].classList.remove("is-active");
    dots[current]?.classList.remove("is-active");
    current = (index + slides.length) % slides.length;
    slides[current].classList.add("is-active");
    dots[current]?.classList.add("is-active");
  }

  function start() {
    timer = setInterval(() => show(current + 1), 5000);
  }

  dots.forEach((dot, i) =>
    dot.addEventListener("click", () => {
      clearInterval(timer);
      show(i);
      start();
    })
  );

  // Respect people who turn off motion in their device settings
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) start();
});

// ---- Footer year ----
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

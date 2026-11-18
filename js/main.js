// =========================================================
// The Library — shared scripts (every page loads this file)
// =========================================================

// ---- Opening hours (24-hour clock). Edit here and the
//      "Open now" stamp + "today" highlight update everywhere.
//      0 = Sunday ... 6 = Saturday. A close time smaller than the
//      open time means after midnight (2 = 2 am the next morning).
//      Source: TravelOK listing — confirm with the client.
const HOURS = {
  0: { open: 11, close: 2 },
  1: { open: 11, close: 2 },
  2: { open: 11, close: 2 },
  3: { open: 11, close: 2 },
  4: { open: 11, close: 2 },
  5: { open: 11, close: 2 },
  6: { open: 11, close: 2 }
};

// ---- Mobile navigation ----
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
navToggle?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});

// ---- Lamp toggle: light mode / "lamps low" dark mode ----
// The page starts in the saved choice, or dark after 6 pm (see <head>).
const root = document.documentElement;
const lamp = document.querySelector(".lamp");

function labelLamp() {
  const low = root.getAttribute("data-mode") === "dark";
  lamp?.setAttribute("aria-label", low ? "Brighten the lamps (light mode)" : "Dim the lamps (dark mode)");
  lamp?.setAttribute("title", low ? "Brighten the lamps" : "Dim the lamps");
}
lamp?.addEventListener("click", () => {
  const next = root.getAttribute("data-mode") === "dark" ? "light" : "dark";
  root.setAttribute("data-mode", next);
  try { localStorage.setItem("gl-mode", next); } catch (e) { /* storage blocked — still works on this page */ }
  labelLamp();
});
labelLamp();

// ---- Photo slideshow (client asked for moving photos on every page) ----
document.querySelectorAll("[data-slideshow]").forEach((box) => {
  const slides = box.querySelectorAll(".slide");
  const dots = box.querySelectorAll(".slide-dot");
  if (slides.length < 2) return;
  let current = 0;
  let timer;

  function show(i) {
    slides[current].classList.remove("is-active");
    dots[current]?.classList.remove("is-active");
    current = (i + slides.length) % slides.length;
    slides[current].classList.add("is-active");
    dots[current]?.classList.add("is-active");
  }
  const start = () => (timer = setInterval(() => show(current + 1), 5000));

  dots.forEach((dot, i) => dot.addEventListener("click", () => { clearInterval(timer); show(i); start(); }));
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) start();
});

// ---- Today's hours: highlight the row and set the rubber stamp ----
const now = new Date();
const day = now.getDay();
const hour = now.getHours() + now.getMinutes() / 60;
const today = HOURS[day];

document.querySelectorAll(`.due-row[data-day="${day}"]`).forEach((row) => row.classList.add("is-today"));

document.querySelectorAll(".stamp").forEach((stamp) => {
  const fmt = (h) => {
    const hh = Math.floor(h) % 12 || 12;
    const mm = h % 1 ? ":30" : "";
    return `${hh}${mm} ${h >= 12 && h < 24 ? "pm" : "am"}`;
  };
  // Still open from last night? (e.g. 1 am counts as yesterday's late hours)
  const yesterday = HOURS[(day + 6) % 7];
  const lateNight = yesterday && yesterday.close < yesterday.open && hour < yesterday.close;
  const overnight = today && today.close < today.open;
  const openToday = today && hour >= today.open && (overnight || hour < today.close);
  const isOpen = lateNight || openToday;
  const closesAt = lateNight ? yesterday.close : today?.close;

  stamp.classList.toggle("is-closed", !isOpen);
  stamp.innerHTML = isOpen
    ? `<span>Open now<small>until ${fmt(closesAt)}</small></span>`
    : `<span>Closed<small>opens at ${fmt(today?.open ?? 11)}</small></span>`;
});

// ---- "Join the reading list" email signup (footer, every page) ----
// TODO: connect to the client's email list service (e.g. Mailchimp) when available.
document.querySelectorAll(".signup").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = form.querySelector("input[type=email]");
    const msg = form.querySelector(".signup-msg");
    if (!input.value.trim() || !input.checkValidity()) {
      msg.textContent = "Please enter a valid email address.";
      input.focus();
      return;
    }
    msg.textContent = "You're on the reading list. Thanks!";
    form.reset();
  });
});

// ---- Footer year ----
const year = document.getElementById("year");
if (year) year.textContent = now.getFullYear();

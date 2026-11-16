// =========================================================
// Menu page — draws the menu from menu-data.js
// Restaurant switcher (Blu / Library) + tabs (Food / Bar)
// =========================================================

const page = document.querySelector("[data-menu-page]");
// Links like menu.html#library or menu.html#blu-bar open the right menu
const hash = window.location.hash.replace("#", "");

let restaurant = hash.startsWith("library") ? "library" : "blu";
let type = hash.endsWith("-bar") ? "bar" : "food";

const els = {
  eyebrow: document.getElementById("menu-eyebrow"),
  title: document.getElementById("menu-title"),
  chips: document.getElementById("menu-chips"),
  columns: document.getElementById("menu-columns"),
  restaurantBtns: document.querySelectorAll("[data-restaurant]"),
  typeBtns: document.querySelectorAll("[data-type]")
};

function slug(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function itemHTML(item) {
  return `
    <article class="menu-item">
      <div class="menu-item-head">
        <h3>${item.name}</h3>
        <span>${item.price}</span>
      </div>
      <p>${item.desc}</p>
      ${item.tags ? `<span class="tags">${item.tags}</span>` : ""}
    </article>`;
}

function categoryHTML(cat) {
  return `
    <section class="menu-cat">
      <h2 id="${slug(cat.category)}">${cat.category}</h2>
      ${cat.note ? `<p class="cat-note">${cat.note}</p>` : ""}
      ${cat.items.map(itemHTML).join("")}
    </section>`;
}

function render() {
  const data = MENUS[restaurant];
  const categories = data[type];

  // Colors follow the restaurant (Blu blue / Library red)
  page.classList.toggle("theme-blu", restaurant === "blu");
  page.classList.toggle("theme-lib", restaurant === "library");

  els.eyebrow.textContent = data.label;
  els.title.textContent = type === "food" ? "Food menu" : "Bar menu";

  els.restaurantBtns.forEach((btn) => {
    const active = btn.dataset.restaurant === restaurant;
    btn.className = active ? (restaurant === "blu" ? "is-blu" : "is-lib") : "";
    btn.setAttribute("aria-pressed", String(active));
  });

  els.typeBtns.forEach((btn) => {
    btn.setAttribute("aria-selected", String(btn.dataset.type === type));
  });

  // Category chips jump to each section
  els.chips.innerHTML = categories
    .map((c) => `<a class="chip" href="#${slug(c.category)}">${c.category}</a>`)
    .join("");

  if (categories.length === 0) {
    els.columns.innerHTML = `
      <p class="menu-empty">This menu is coming soon. Call the restaurant for today’s offerings.</p>`;
    return;
  }

  // Split categories into two columns
  const half = Math.ceil(categories.length / 2);
  const left = categories.slice(0, half);
  const right = categories.slice(half);

  els.columns.innerHTML = `
    <div class="menu-col">${left.map(categoryHTML).join("")}</div>
    <div class="col-divider" aria-hidden="true"></div>
    <div class="menu-col">${right.map(categoryHTML).join("")}</div>`;
}

els.restaurantBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    restaurant = btn.dataset.restaurant;
    render();
  })
);

els.typeBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    type = btn.dataset.type;
    render();
  })
);

render();

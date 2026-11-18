// =========================================================
// Menu page — draws the card catalog from menu-data.js
// Drawers switch between Food and Drinks.
//   Food   → index cards
//   Drinks → ledger lists (name ........ price)
// Link straight to drinks with menu.html#drinks
// =========================================================

const drawers = document.querySelectorAll(".drawer");
const tagsBox = document.getElementById("menu-tags");
const listBox = document.getElementById("menu-list");

let section = window.location.hash === "#drinks" ? "drinks" : "food";

const slug = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

function cardHTML(item) {
  return `
    <article class="index-card">
      <div class="index-card-head">
        <h3>${item.name}</h3>
        <span class="price">${item.price}</span>
      </div>
      ${item.desc ? `<p>${item.desc}</p>` : ""}
    </article>`;
}

function rowHTML(item) {
  return `
      <li class="ledger-row">
        <span class="name">${item.name}${item.size ? ` <small>${item.size}</small>` : ""}</span>
        ${item.price ? `<span class="dots" aria-hidden="true"></span><span class="price">${item.price}</span>` : ""}
      </li>`;
}

function categoryHTML(c) {
  const body = c.groups
    ? `<div class="ledgers">${c.groups.map((g) => `
        <div class="ledger${g.items.every((i) => !i.price) ? " ledger--list" : ""}">
          <h3>${g.name}</h3>
          <ul>${g.items.map(rowHTML).join("")}</ul>
        </div>`).join("")}</div>`
    : `<div class="cards">${c.items.map(cardHTML).join("")}</div>`;

  return `
    <section class="menu-cat" id="${slug(c.category)}">
      <div class="menu-cat-head">
        <h2>${c.category}</h2>
        ${c.note ? `<p>${c.note}</p>` : ""}
      </div>
      ${body}
    </section>`;
}

function render() {
  const categories = MENU[section];
  drawers.forEach((d) => d.setAttribute("aria-selected", String(d.dataset.section === section)));

  tagsBox.innerHTML = categories
    .map((c) => `<a class="tag-link" href="#${slug(c.category)}">${c.category}</a>`)
    .join("");

  listBox.innerHTML = categories.length
    ? categories.map(categoryHTML).join("")
    : `<p class="notice">This drawer is still being filled. Call us for today’s offerings.</p>`;
}

drawers.forEach((d) =>
  d.addEventListener("click", () => {
    section = d.dataset.section;
    render();
  })
);

// Re-check the link if only the #part changes (e.g. clicking "drinks" while already here)
window.addEventListener("hashchange", () => {
  if (window.location.hash === "#drinks" || window.location.hash === "#food") {
    section = window.location.hash.slice(1);
    render();
  }
});

render();

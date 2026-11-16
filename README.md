# GL Dining — Website Redesign

Website for **GL Dining**, the family behind two Norman, OK restaurants:
**Blu** (201 S Crawford Ave) and **Library** (607 W Boyd St).

Web Development 4013 · Team **Fully Stacked**: Ally Khrais, Chad Kim, Scott Li, Angelina Lang, Farsid Islam

Built with plain **HTML, CSS and JavaScript**. There's no framework and no build step: open a file in the browser and it works.

---

## Pages

| Page | File | What's on it |
|---|---|---|
| Home | `index.html` | Photo slideshow, Blu/Library cards, weekly special, map, both locations |
| Blu | `blu.html` | Hero, what we offer, hours & specials, gallery, house notes, directions |
| Library | `library.html` | Same layout as Blu, in Library's red |
| Menus | `menu.html` | Blu/Library switcher, Food/Bar tabs, category chips, dietary tags |
| Contact | `contact.html` | Both locations, map, catering, questions, house policies |
| Careers | `careers.html` | Application form with a clickable availability grid |

## Folder structure

```
├── index.html, blu.html, library.html, menu.html, contact.html, careers.html
├── css/
│   └── styles.css        ← design system (colors, fonts) + all styles
├── js/
│   ├── main.js           ← mobile nav, light/dark mode, slideshow (every page)
│   ├── menu-data.js      ← THE MENUS — edit this to change menu items
│   ├── menu.js           ← draws the menu page from menu-data.js
│   └── careers.js        ← availability grid + form checks
└── images/               ← photos (placeholders until we shoot real ones)
```

## Running it locally

1. Clone the repo (see GitHub workflow below).
2. Open the folder in **VS Code**.
3. Install the **Live Server** extension, right-click `index.html` and choose **Open with Live Server**.
   (Double-clicking `index.html` also works.)

## Design system

All colors live at the top of `css/styles.css`. Change one value and it updates everywhere.

| Token | Light | Used for |
|---|---|---|
| `--cream` | `#f4f0e7` | Page background |
| `--sand` | `#e8e0d3` | Tan section backgrounds |
| `--ink` | `#211e1a` | Text, dark buttons, footer |
| `--blu` | `#1d4e89` | Blu blue |
| `--lib` | `#8a2a2b` | Library red |

- **Fonts:** Cormorant Garamond (headings) and Inter (body), loaded from Google Fonts
- **Dark mode:** the `:root[data-mode="dark"]` block in `styles.css`. The site goes dark automatically after 6 pm, and the moon/sun button in the header switches it by hand.
- **Mobile:** layouts stack below 900px wide and the nav becomes a hamburger menu.

> The header and footer are copied into every page. If you change a nav link or the footer, update **all six** HTML files.

## Updating the menu

Open `js/menu-data.js`. Each item looks like this:

```js
{ name: "Margherita", desc: "Tomato, fresh mozzarella, basil, olive oil", price: "$17", tags: "V" }
```

`tags`: `"V"` = vegetarian, `"GF"` = gluten-free, `"V · GF"` = both, `""` = none.
Any menu left as `[]` shows a "coming soon" message.

Link to a specific menu with `menu.html#blu`, `menu.html#library`, `menu.html#blu-bar` or `menu.html#library-bar`.

---

## GitHub workflow (please read)

Each of us needs **our own commits** for grading, so don't send your work to someone else to upload.

```bash
git clone https://github.com/angelinalang/fullystacked.git
cd fullystacked

git pull                                  # always start with the latest code
git checkout -b blu-page                  # make a branch for your task
# ...make your changes...
git add .
git commit -m "Add Blu gallery and hours section"
git push -u origin blu-page               # then open a Pull Request on GitHub
```

**Good commit messages** describe the work, for example:
`Build menu category chips` · `Add mobile styling to careers form` · `Replace placeholder photos on Library page`

Avoid tiny commits made only to raise your commit count; the instructor checks for meaningful work.

## Hosting: GitHub Pages

1. On GitHub, open the repo, then **Settings → Pages**.
2. Under **Source**, choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
3. After a minute or two the site is live at **https://angelinalang.github.io/fullystacked/**.

Every push to `main` updates the live site automatically.

---

## Task assignments (proposed, so adjust as a team)

| Member | Owns | Next steps |
|---|---|---|
| **Angelina Lang** | Repo + Home page + hosting | Turn on GitHub Pages, review PRs, finish Home copy |
| **Chad Kim** | Blu & Library pages + photography | Shoot real photos with Ally, swap them into `images/` |
| **Ally Khrais** | Menu page + menu content | Get real Blu & Library menus from the client into `menu-data.js` |
| **Scott Li** | Contact page + maps | Real phone numbers, hours and parking notes; real map embed or image |
| **Farsid Islam** | Careers page + design system | Connect the form to Formspree so applications reach the client; dark-mode polish |

## Placeholder content to replace

These came from the Figma and are **not real client info yet**:

- [ ] Phone numbers `(850) 555–…` and `hello@gldining.com`
- [ ] Hours (`11:30 am – 10 pm`, etc.) on Blu, Library and Contact
- [ ] Blu food menu items and prices; Library menus and the Blu bar menu are empty
- [ ] The "½-off pizza with a drink" special (confirm with the client)
- [ ] All photos (AI-generated placeholders); Contact and Careers reuse other photos for now
- [ ] Instagram/Facebook links (currently `#`)
- [ ] Logos for GL Dining, Blu and Library (text wordmarks for now)

## Known issues / questions

- The **Careers form doesn't send anywhere yet**. It checks the fields and shows a thank-you message, but needs a form service (e.g. Formspree, free) to deliver applications.
- The **"Download PDF menu"** button has no PDF yet.
- The client said **no reservations** (call only) and **no online ordering/delivery**, so neither is on the site.
- Question for client: should Careers ask when applicants **can** work, **can't** work, or both? The form currently asks both.

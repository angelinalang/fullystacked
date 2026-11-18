# The Library — Website

Website for **The Library**, an English-style pub and kitchen at **607 W Boyd St, Norman, OK**, part of GL Dining (Good Life). It's in an old house across the street from OU, and *Esquire* named it one of America's 10 Best College Town Bars.
(Blu is closing, so this site now covers The Library only.)

Web Development 4013 · Team **Fully Stacked**: Ally Khrais, Chad Kim, Scott Li, Angelina Lang, Farsid Islam

Built with plain **HTML, CSS and JavaScript**. There's no framework and no build step: open a file in the browser and it works.

---

## The look: a cozy old library

The design takes after an old reading room: green shelving walls, warm wood, brass lamps, oxblood leather and aged paper.

| Idea | Where |
|---|---|
| Full-width photo slideshow with a row of book spines along the bottom | Top of every page |
| "Open now / Closed" rubber stamp | Home hero (uses the hours in `main.js`) |
| Date-due card for hours (today is highlighted) | Home and Visit |
| Card-catalog drawers: food on index cards, drinks as ledger lists | Menu |
| Book covers (Volume I: Kitchen, Volume II: Bar) | Home |
| Gold-framed photo wall | Home |
| Posted "Library Rules" notice | Home and Visit |
| Library-card application with stamp checkboxes | Careers |
| Lamp button: dims the lamps (dark mode) | Header; also turns on by itself after 6 pm |

**Fonts (sans-serif, client request):** Josefin Sans for headings and Nunito Sans for body text, loaded from Google Fonts.

## Pages

| Page | File | What's on it |
|---|---|---|
| Home | `index.html` | Story, hours, happy hour, private rooms, menu covers, photo wall, rules, directions |
| Menu | `menu.html` | Food/Drinks drawers, category shortcuts, index cards with V/GF tags |
| Visit | `contact.html` | Address, phone, email, hours, reading rooms, catering, rules |
| Careers | `careers.html` | Teammate application with a clickable availability grid |

## Folder structure

```
├── index.html, menu.html, contact.html, careers.html
├── css/
│   └── styles.css        ← design system (colors, fonts) + all styles
├── js/
│   ├── main.js           ← HOURS, nav, lamp/dark mode, slideshow, open stamp, email signup
│   ├── menu-data.js      ← THE MENU — edit this to change items and prices
│   ├── menu.js           ← draws the menu page from menu-data.js
│   └── careers.js        ← availability grid + form checks
└── images/               ← photos (placeholders until we shoot real ones)
```

## Running it locally

1. Clone the repo (see the GitHub workflow below).
2. Open the folder in **VS Code**.
3. Install the **Live Server** extension, right-click `index.html` and choose **Open with Live Server**.

## Design system

All colors are at the top of `css/styles.css`. Change one value and it updates everywhere.

| Token | Light | Used for |
|---|---|---|
| `--paper` | `#f4ecdb` | Page background (parchment) |
| `--green-deep` | `#1f3328` | Shelf-green wall: hero, footer |
| `--wood` / `--wood-deep` | `#6b4428` / `#3e2716` | Shelves, frames, visit band |
| `--red` | `#8a2a2b` | Oxblood: buttons, headings accents |
| `--mustard` / `--brass` | `#c9a24a` / `#b8893a` | Lamp-light accents, frames |

Dark mode ("lamps low") is the `:root[data-mode="dark"]` block.

> The header and footer are copied into every page. If you change a nav link or the footer, update **all four** HTML files.

## Updating content

- **Menu:** edit `js/menu-data.js` (already filled in from The Library's printed menu). Food items are `{ name, desc, price }`; drinks are grouped lists of `{ name, size, price }`.
- **Hours:** edit the `HOURS` list at the top of `js/main.js` (it drives the open/closed stamp and the "today" highlight; a close time like `2` means 2 am), **and** the hour text in the HTML files.

---

## GitHub workflow

Each of us needs **our own commits** for grading.

```bash
git clone https://github.com/angelinalang/fullystacked.git
cd fullystacked
git pull                         # always start with the latest
git checkout -b menu-content     # one branch per task
# ...make changes...
git add .
git commit -m "Add real Library menu items and prices"
git push -u origin menu-content  # then open a Pull Request on GitHub
```

## Hosting: GitHub Pages

**Settings → Pages → Deploy from a branch → main → / (root) → Save.**
The site will be live at **https://angelinalang.github.io/fullystacked/** (the repo must be public on a free account).

---

## Task assignments (proposed)

| Member | Owns | Next steps |
|---|---|---|
| **Angelina Lang** | Repo, hosting, Home page | Turn on GitHub Pages, review PRs, polish Home copy |
| **Chad Kim** | Photography + slideshows/gallery | Shoot real Library photos with Ally, swap into `images/` |
| **Ally Khrais** | Menu page | Double-check `menu-data.js` against the printed menu; ask about a PDF version |
| **Scott Li** | Visit page | Real phone, email, hours, parking notes; add a map embed |
| **Farsid Islam** | Careers + email signup | Connect the application and "reading list" forms to Formspree/Mailchimp |

## Placeholder content to replace

- [ ] Confirm hours with the client (site uses TravelOK's listing: 11 am – 2 am daily) and happy hour (3–6 pm, $2 off drafts, from the menu)
- [ ] Add a contact email if the client has one (none found online; phone (405) 366-7465 is from TravelOK)
- [ ] Founding year: removed until confirmed (the old sign says 1920, but the bar has changed owners)
- [ ] Photos: real photos are in; the bar-taps and dining-room shots are low-resolution, so reshoot if possible
- [ ] Instagram/Facebook links (currently `#`)
- [ ] Logo (a book icon + text for now)

## Known issues / questions

- The **Careers form** and **"Join the reading list"** signup don't send anywhere yet. They need a form service.
- The client said **no reservations** (call only) and **no online ordering/delivery**.
- Confirm with the client: the Library's real hours, whether the kitchen closes before the bar, and how many private rooms there are.

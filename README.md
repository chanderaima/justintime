# Just In Time Services — Docs Site

This repository is a Docusaurus site scaffolded and adapted into a **single-page marketing site** for Just In Time Services.

---

## Quick start ⚡

- Install

```bash
npm install
# or
# yarn
```

- Start development server

```bash
npm start
# or
# yarn start
```

- Build

```bash
npm run build
# or
# yarn build
```

Notes:
- The dev server will pick an available port if the default (3000) is taken. To force a port use `PORT=3001 npm start` (Windows PowerShell: `$env:PORT=3001; npm start`).

---

## Site organization (high level) 📁

- Homepage entry: `src/pages/index.tsx` — this composes the page header + the section components.
- Section components are located under `src/components/`.
  - `HomepageSections/` — main entry that pulls the individual blocks together
  - Individual blocks (each has an `index.tsx` and a `styles.module.css`):
    - `DeliveringExcellence/` (two-card layout)
    - `WhyChoose/` (3 icon cards)
    - `CoreServices/` (3 service cards)
    - `FleetStrength/` (fleet stat + image)
    - `TrustedBy/` (partner logos)
    - `ComplianceBlock/` (form-like compliance steps)
    - `ServiceCommitment/` (truck background + stats)
    - `PartnerCTA/` (partner CTA cards)

- Asset files (images, SVGs): `static/img/` — add or replace images here.
- Global CSS: `src/css/custom.css` — site-wide variables and theme overrides.
- Page-specific CSS: `src/pages/index.module.css` — hero banner and page-level styles.

---

## How the homepage is built 🧩

1. `src/pages/index.tsx` renders the hero (title, tagline, CTAs) and imports `HomepageSections`.
2. `src/components/HomepageSections/index.tsx` imports and renders each block in order. Each block is a self-contained component (JSX + CSS module + assets).
3. Navigation anchors in `docusaurus.config.ts` point to section IDs (for example `to: '/#services'`) to scroll to the right block.

---

## How to update each block ✏️

For any block you want to edit or replace:

1. Open the folder for that block, e.g. `src/components/DeliveringExcellence/`.
2. Edit `index.tsx` to change text, headings, markup, or to add new elements.
3. Edit `styles.module.css` to adjust layout, spacing and visual styling — CSS Modules keep styles scoped to the component.
4. Replace or add any image in `static/img/` and reference it with an absolute path like `/img/your-image.svg`.
5. If you add a new block, export or import it in `HomepageSections/index.tsx` and give it an `id` attribute (for example `<section id="features">`) so nav anchors can link to it.

Tip: Keep markup semantic (section, h2/h3, lists) for accessibility and SEO.

---

## Reordering homepage blocks 🔀

**Quick steps:**

1. Open `src/components/HomepageSections/index.tsx`.
2. Reorder the JSX component calls inside the `return` in the order you want them to appear.
   - Example: move `<WhyChoose />` above `<DeliveringExcellence />`.
3. Save — the development server will hot-reload and show the new order.

**Optional: make order data-driven**

To allow reordering without direct code edits to `index.tsx`, you can create a small configuration file and render components by key.

1. Create `src/config/sectionsOrder.ts` that exports an array of keys (e.g., `export default ['why', 'deliver', 'coreServices']`).
2. Update `src/components/HomepageSections/index.tsx` to import that array and map over it to render the component for each key.

Example (conceptual):

```tsx
// src/config/sectionsOrder.ts
export default ['why', 'deliver', 'coreServices', 'fleet', 'trusted'];

// src/components/HomepageSections/index.tsx
import order from '@site/src/config/sectionsOrder';

const componentsByKey = {
  why: <WhyChoose />,
  deliver: <DeliveringExcellence />,
  coreServices: <CoreServices />,
  fleet: <FleetStrength />,
  trusted: <TrustedBy />,
};

export default function HomepageSections() {
  return (
    <main>
      {order.map((k) => (
        <React.Fragment key={k}>{componentsByKey[k]}</React.Fragment>
      ))}
    </main>
  );
}
```

> Note: If you change section `id` values or keys, update the navbar anchors in `docusaurus.config.ts` so navigation continues to work.

---

## CSS patterns & theming 🎨

- Per-component styles use CSS Modules (`styles.module.css`) so class names are local to the component.
- Global theme variables (colors, primary, dark variants) are in `src/css/custom.css`. Change `--ifm-color-primary` to update the primary color across the site.
- The hero uses `src/pages/index.module.css` and currently applies a background image (`/img/hero.svg`) and a translucent overlay for legibility.
- Use media queries in component CSS for responsive behavior. Many components already use `@media (max-width: 900px)` to stack columns on mobile.

---

## Assets and logos 🖼️

- Add or update logos and photos in `static/img/`. Prefer simple SVGs for logos and small decorative images for best scaling.
- When you add a new asset, make sure to reference it with a leading slash: `/img/your-file.png`.
- The hero/banner image is `static/img/banner.jpg` — replace this file to update the homepage hero background, or change the path in `src/pages/index.module.css` if you prefer a different filename.

### Optimizing images

To generate optimized WebP and small JPG/WebP variants for faster loading, run:

```bash
npm run optimize-images
```

This script uses `sharp` (added as a `devDependency`) and will create `banner.webp`, `banner-small.jpg`, and `banner-small.webp` next to your source `banner.jpg` in `static/img/`.

---

## Contact form (Google Sheets via Apps Script)

This site includes a contact form in the homepage that posts to a Google Apps Script web app which appends submissions to a Google Sheet. Steps to set it up:

1. Create a Google Sheet and note its ID (the long string in the sheet URL).
2. In the Script Editor (Extensions → Apps Script), create a new script and paste the sample code below.
3. Replace `SHEET_ID` in the script with your sheet's ID and save.
4. Deploy the script as a **'Web app'**: "Deploy" → "New deployment" → Select "Web app"; set **Who has access** to **Anyone** (or Anyone, even anonymous). Copy the deployment URL.
5. Update `src/config/contact.ts` replacing `YOUR_DEPLOY_ID` with the deployed script ID/URL.
6. The form on the site posts to the Apps Script via a hidden iframe; submissions will append to the sheet.

Sample Apps Script code (paste into Apps Script):

```javascript
const SHEET_ID = 'YOUR_SHEET_ID';

function doPost(e) {
  try {
    const ss = SpreadsheetApp.openById(SHEET_ID);
    const sheet = ss.getSheetByName('Sheet1') || ss.getSheets()[0];

    // If the form sends as application/x-www-form-urlencoded, use e.parameter
    const params = e.postData && e.postData.type === 'application/json'
      ? JSON.parse(e.postData.contents)
      : e.parameter;

    // Ignore spam/honeypot
    if (params._gotcha) {
      return ContentService.createTextOutput(JSON.stringify({status:'spam'})).setMimeType(ContentService.MimeType.JSON);
    }

    sheet.appendRow([
      new Date(),
      params.name || '',
      params.company || '',
      params.phone || '',
      params.email || '',
      params.serviceType || '',
      params.partnershipLevel || '',
      params.areaLocation || '',
      params.serviceDestination || '',
      params.requirements || '',
    ]);

    return ContentService.createTextOutput(JSON.stringify({status:'ok'})).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({status:'error', message: err.message})).setMimeType(ContentService.MimeType.JSON);
  }
}
```

Security & Notes:
- The script must be deployed with access set to "Anyone, even anonymous" if you don't want to handle authentication from the site.
- The site posts via a hidden iframe to avoid CORS issues. The response isn't read by the site — the component shows a client-side success message after submit.
- Add server-side checks in Apps Script as needed (e.g., validate required fields, rate-limit by IP, or require a shared secret field).

---

## Navigation & config 🔧

- Navbar and footer: `docusaurus.config.ts` (update titles, items and anchors here).
- Sidebars and docs: `sidebars.ts` currently is unused for primary navigation because this is a single-page marketing layout. The `docs/` folder still exists and can be removed if you want a purely single-page site.

### Header / Navbar status

The site currently has a **slim top navbar enabled**. It is configured to display a single **Contact** CTA that links to the contact section (`/#contact`).

To edit the navbar:

- Update the `items` array in `docusaurus.config.ts` under the `navbar` property.
- The CTA styling is in `src/css/custom.css` (search for `.header-cta`) — modify padding, color, or remove the `className` to revert to a plain link.

---

## Free artwork resources (courier / logistics)

If you want images or illustrations for a courier/logistics theme, here are reliable sources of free assets:

- Unsplash — high-quality photos: https://unsplash.com/s/photos/delivery (free; attribution appreciated, not required)
- Pexels — free photos & videos: https://www.pexels.com/search/delivery/
- Pixabay — free photos & vector art: https://pixabay.com/images/search/delivery/
- unDraw — customizable SVG illustrations (great for clean hero/feature art): https://undraw.co/illustrations
- Heroicons / Feather Icons — free icon sets for UI icons: https://heroicons.com / https://feathericons.com
- Freepik — vectors and illustrations (many free assets; check license/attribution): https://www.freepik.com/search?query=logistics

Tip: Download images and place them in `static/img/` then reference with an absolute path like `/img/hero-photo.jpg` in the hero (background or <img>). SVGs are recommended for simple illustrations (smaller, scalable).

---

## Testing & local checks ✅

- Run `npm start` and open the URL printed by the dev server (e.g., `http://localhost:3004/`).
- Use browser devtools to emulate mobile widths and test accessibility (contrast, keyboard navigation).

---

## If you want me to continue…

Tell me which block to refine next (visual design, copy, icons, or replacing the hero with a photo). I can:

- Improve spacing, typography and responsive behavior
- Replace placeholder SVGs with real assets you provide
- Add animations or microinteractions for the cards

---

If anything is unclear or you want the README to include more developer details (linting, tests, CI), tell me which items to expand.

---

## Contact form (Google Sheets) 📬

This project includes a pre-built contact form that posts to a Google Apps Script web app which appends submissions to a Google Sheet.

1. Create a Google Sheet and copy its ID (the long string in the sheet URL).
2. In the sheet: Extensions → Apps Script → create a new script. Paste the sample script: `scripts/google-apps-script.js` and replace `SHEET_ID` with your sheet ID and `SHEET_NAME` if needed.
3. Deploy → New deployment → choose **Web app** and set **Who has access** to **Anyone**. Deploy and copy the Web App URL (it looks like `https://script.google.com/macros/s/DEPLOY_ID/exec`).
4. Update `src/config/contact.ts` and set `CONTACT_SCRIPT_URL` to your Web App URL.
5. On the site, the contact form will POST to that URL and records will be appended to your sheet.

Notes & troubleshooting:
- Apps Script will accept POSTs from the static site when deployed for "Anyone" access. If you need CORS headers or to return more complex responses, modify the Apps Script accordingly.
- The form includes a honeypot field named `company_url` to reduce spam — do not remove it unless you add other spam protections.
- You can test the form locally by running `npm start` and submitting the form; submissions will appear in the Sheet.

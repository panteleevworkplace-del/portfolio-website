# Artem Panteleev Portfolio Website

Personal portfolio website for Artem Panteleev, built with Vite, React, and TypeScript.

The main page contains:

- Header
- Hero
- Works
- JuicyGallery
- Clients
- Experience
- Contact
- Footer

## Tech Stack

- Vite
- React
- TypeScript
- CSS split by page sections
- Static assets from `public/images` and `public/icons`

## Run Locally

Install dependencies:

```bash
npm install
```

Start development server:

```bash
f x
```

Build production bundle:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Test On Phone Over Wi-Fi

Build and start preview on the local network:

```bash
npm run build
npm run preview -- --host 0.0.0.0
```

Then open the Network URL on a phone connected to the same Wi-Fi.

## Project Structure

- `src/main.tsx` — app entry point.
- `src/App.tsx` — page composition and shared SVG filters.
- `src/components/` — page sections/components.
- `src/data/portfolio.ts` — portfolio data and content.
- `src/styles.css` — CSS import-only aggregator.
- `src/styles/` — section-based CSS files.
- `public/images/` — project/site images.
- `public/icons/` — icons and decorative SVGs.

## CSS Structure

`src/styles.css` controls CSS import and cascade order.

Current CSS files:

- `src/styles/base.css`
- `src/styles/header-hero.css`
- `src/styles/works.css`
- `src/styles/juicy-gallery.css`
- `src/styles/clients.css`
- `src/styles/experience.css`
- `src/styles/contact-footer.css`

Notes:

- Mobile styles live inside the related section files.
- `base.css` is only for global foundation styles.
- Keep section-specific styles out of `base.css`.

## Responsive Rules

- Mobile/tablet styles: `max-width: 900px`.
- Desktop starts at `901px`.
- Always test both `900px` and `901px` after layout changes.

## Important Behavior Notes

- Mobile wavy borders are static/non-animated to avoid iPhone/Safari heating.
- Desktop wavy border animation remains active.
- JuicyGallery uses native horizontal scroll below `901px`.
- JuicyGallery uses sticky desktop behavior from `901px` to `2299px`.
- JuicyGallery switches to static mode at `2300px+`.
- Clients uses a desktop orbit layout and a mobile static constellation.
- Contact sticker/hearts are intentionally preserved.
- Footer hides `artem` on mobile and restores it on desktop.

## Development Checklist

Before pushing:

- Run `npm run build`.
- Test widths: `390px`, `900px`, `901px`, `1440px`, `2300px+`.
- Test on a real iPhone after performance-sensitive changes.
- Check that there is no horizontal page overflow.
- Do not commit `.DS_Store`.

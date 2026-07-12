# Artem Panteleev Portfolio Website

Personal static portfolio website for Artem Panteleev, built with Vite,
React, and TypeScript.

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

`node_modules/` is not committed. After cloning or downloading the project,
install dependencies first:

Install dependencies:

```bash
npm install
```

`npm install` reads `package.json` and `package-lock.json`, creates
`node_modules/`, and installs the exact dependency tree needed for the app.

Start development server:

```bash
npm run dev
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

Shared app files:

- `src/main.tsx` — app entry point.
- `src/App.tsx` — route-level page composition and shared SVG filters.
- `src/styles.css` — CSS import-only aggregator.
- `src/styles/base.css` — global foundation styles.
- `public/icons/` — shared icons and decorative SVGs.

Main page files:

- `src/components/` — main page sections/components.
- `src/data/portfolio.ts` — main page portfolio/work card data.
- `src/styles/header-hero.css` — header, hero, and main-page wavy border styles.
- `src/styles/works.css` — Works section.
- `src/styles/juicy-gallery.css` — JuicyGallery section.
- `src/styles/clients.css` — Clients section.
- `src/styles/experience.css` — Experience section.
- `src/styles/contact-footer.css` — Contact and Footer sections.
- `public/images/` — main page images.

Case page files:

- `src/pages/case-study-page.tsx` — reusable case page template.
- `src/pages/not-found-page.tsx` — fallback 404 page.
- `src/data/cases.ts` — case registry and next-case order.
- `src/data/cases/types.ts` — shared case/block types.
- `src/data/cases/` — individual case content files.
- `src/styles/case-study-page.css` — case page layout and typography.
- `src/styles/not-found-page.css` — 404 page styles.
- `public/cases/` — case page images, videos, and posters.

## Case Studies

Case pages use one reusable template. Each case controls its own content and
layout order through data, so most edits should happen in the case data file,
not in React components.

This section is only about inner case pages such as `/cases/mts-your-business`.
Main page work cards live separately in `src/data/portfolio.ts`.

Core files:

- `src/data/cases.ts` — imports cases and controls the next-case order.
- `src/data/cases/types.ts` — shared case/block types.
- `src/data/cases/case-slug.ts` — one editable content file per case.
- `public/cases/case-slug/` — images, videos, and posters for that case.

To add a new case:

1. Create `public/cases/case-slug/` and place all case assets there.
2. Create `src/data/cases/case-slug.ts`.
3. Export a `PortfolioCase` with `slug`, `title`, `intro`, and `blocks`.
4. Import the case in `src/data/cases.ts`.
5. Add it to the `cases` array. The array order controls the next-case link.

Keep asset paths grouped at the top of the case file:

```ts
const casePath = "/cases/case-slug";

const assets = {
  heroVideo: `${casePath}/hero-video.mp4`,
  heroVideoPoster: `${casePath}/hero-video-poster.jpg`,
  overviewImage: `${casePath}/overview.jpg`,
};
```

Block types:

- `text` — text section with optional heading.
- `image` — image/media block with optional mobile crop.
- `video` — video/media block with required poster.

Text block:

```ts
{
  type: "text",
  title: "approach",
  body: "Text goes here.",
  spacingBefore: "l",
  mobileSpacingBefore: "s",
}
```

Use `title` for section labels such as `approach` or `results`. Omit `title` for a plain paragraph.

Image block:

```ts
{
  type: "image",
  src: assets.overviewImage,
  mobileSrc: assets.overviewImageMobile,
  alt: "Short description of the image",
  width: 2700,
  height: 1600,
  spacingBefore: "m",
  mobileSpacingBefore: "s",
}
```

Use `mobileSrc` only when the mobile version needs a different crop or
composition. If `mobileSrc` is missing, the desktop image is used on every
viewport. Add `width` and `height` when possible to keep layout stable while
images load.

Video block:

```ts
{
  type: "video",
  src: assets.heroVideo,
  poster: assets.heroVideoPoster,
  priority: true,
  preload: "metadata",
  hasAudio: true,
  spacingBefore: "s",
  mobileSpacingBefore: "xs",
}
```

`poster` is required. It gives the browser a stable visual fallback if the video
starts slowly in production. Use a compressed JPG poster near the video file,
usually around `1600px` wide.

Video controls are intentionally explicit:

- `priority: true` — use only for the main first video that should start early.
- `preload: "metadata"` — load only basic video information first; this is the default recommendation.
- `preload: "none"` — do not load early; useful for lower videos.
- `hasAudio: true` — shows the sound/mute button.

Spacing:

- Available values: `"xs"`, `"s"`, `"m"`, `"l"`, `"xl"`.
- `spacingBefore` controls desktop/default spacing before a block.
- `mobileSpacingBefore` overrides spacing below `900px`.
- If `mobileSpacingBefore` is missing, mobile uses the desktop/default spacing.
- Prefer `xs`/`s` for tight media groups and mobile.
- Prefer `m` for normal rhythm between different blocks.
- Prefer `l`/`xl` for larger section breaks such as text-to-large-media or before results.

Editing notes inside case files should stay short. Put detailed reusable rules here in README.

## CSS Structure

`src/styles.css` controls CSS import and cascade order.

Shared CSS:

- `src/styles/base.css` — global foundation only.

Main page CSS:

- `src/styles/header-hero.css`
- `src/styles/works.css`
- `src/styles/juicy-gallery.css`
- `src/styles/clients.css`
- `src/styles/experience.css`
- `src/styles/contact-footer.css`

Case/secondary page CSS:

- `src/styles/case-study-page.css`
- `src/styles/not-found-page.css`

Notes:

- Main page styles and case page styles should stay separated.
- Mobile styles live inside the related section/page files.
- `base.css` is only for global foundation styles.
- Keep section-specific and page-specific styles out of `base.css`.

## Responsive Rules

- Mobile/tablet styles: `max-width: 900px`.
- Desktop starts at `901px`.
- Always test both `900px` and `901px` after layout changes.
- Main page changes should be tested with the homepage sections.
- Case page changes should be tested on at least one real case page.

## Browser Notes

Wavy border filters:

- Chrome/Firefox desktop use the default animated `#wavy-border-filter`.
- Safari desktop uses a lighter animated `#wavy-border-filter-safari` fallback.
- Safari desktop fallback keeps animation, but reduces the cost with
  `numOctaves="1"`, `scale="8"`, and a slower `dur="9s"` baseFrequency
  animation.
- Mobile uses `#wavy-border-filter-mobile-static` and keeps the static border behavior for performance.

## SEO

- Production canonical domain: `https://www.artyarty.com`.
- `public/robots.txt` allows crawling and points to `public/sitemap.xml`.
- The sitemap lists the homepage and every current case route. Add a new case URL
  when adding it to `src/data/cases.ts`.
- Homepage metadata lives in `index.html`. Case metadata is generated in
  `src/seo.ts` from the case `title`, `intro`, and first image/video poster.
  Add optional `seo.title`, `seo.description`, or `seo.image` to a case file
  only when its automatic values need an override.
- Google Search Console and Bing Webmaster Tools are configured manually outside
  this repository.

## Important Behavior Notes

Main page:

- Mobile wavy borders use `#wavy-border-filter-mobile-static` and stay static/non-animated to avoid iPhone/Safari heating.
- Chrome/Firefox desktop use the default animated `#wavy-border-filter`.
- Safari desktop uses the compromise animated `#wavy-border-filter-safari`:
  `numOctaves="1"`, `scale="8"`, and slower `dur="9s"` baseFrequency
  animation.
- JuicyGallery uses native horizontal scroll below `901px`.
- JuicyGallery uses sticky desktop behavior from `901px` to `2299px`.
- JuicyGallery switches to static mode at `2300px+`.
- Clients uses a desktop orbit layout and a mobile static constellation.
- Contact sticker/hearts are intentionally preserved.
- Footer hides `artem` on mobile and restores it on desktop.

Case pages:

- Case pages use one reusable template and data-driven blocks.
- Case media should stay linear and simple: no grids, sticky behavior, or horizontal scroll.
- Case videos are local MP4 files with required posters.
- Case mobile spacing can be adjusted per block with `mobileSpacingBefore`.

## Development Checklist

Before pushing:

- Run `npm run build`.
- Test widths: `390px`, `900px`, `901px`, `1440px`, `2300px+`.
- Test on a real iPhone after performance-sensitive changes.
- Check that there is no horizontal page overflow.
- Do not commit `.DS_Store`.

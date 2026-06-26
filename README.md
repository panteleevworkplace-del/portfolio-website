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
- `src/data/cases.ts` — case registry and next-case order.
- `src/data/cases/` — individual case content files and shared types.
- `src/styles.css` — CSS import-only aggregator.
- `src/styles/` — section-based CSS files.
- `public/images/` — project/site images.
- `public/icons/` — icons and decorative SVGs.

## Case Studies

Case pages use one reusable template. Each case controls its own content and layout order through data, so most edits should happen in the case data file, not in React components.

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

Use `mobileSrc` only when the mobile version needs a different crop or composition. If `mobileSrc` is missing, the desktop image is used on every viewport. Add `width` and `height` when possible to keep layout stable while images load.

Video block:

```ts
{
  type: "video",
  src: assets.heroVideo,
  poster: assets.heroVideoPoster,
  priority: true,
  preload: "auto",
  hasAudio: true,
  spacingBefore: "s",
  mobileSpacingBefore: "xs",
}
```

`poster` is required. It gives the browser a stable visual fallback if the video starts slowly in production. Use a compressed JPG poster near the video file, usually around `1600px` wide.

Video controls are intentionally explicit:

- `priority: true` — use only for the main first video that should start early.
- `preload: "auto"` — load immediately; usually paired with `priority: true`.
- `preload: "none"` — do not load early; good for lower videos.
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

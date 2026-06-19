# Portfolio Website — Project Instructions for Codex

Last updated: 2026-06-19

This file is the main project context for Codex. Read it before making any changes.

## Project

This is Artem Panteleev's portfolio website.

Repository / local project name:
Portfolio_website

Current work mode:

- Build and preview locally.
- Netlify live preview and GitHub may be outdated unless Artem says otherwise.
- Do not rely on deployed Netlify version as the source of truth.
- Use the local project state as the current source of truth.
- Do not touch Netlify unless Artem explicitly asks.

Tech stack:

- Vite
- React
- TypeScript
- CSS split into section files under `src/styles/`
- Assets in `public/images` and `public/icons`

## Current Status

The main page layout is considered finished for desktop and mobile.

- Only fix visual/layout issues when Artem explicitly requests it or when a regression is confirmed.
- Avoid broad refactors unless explicitly requested.
- Preserve the current visual concept: dark grid, bold compressed typography, green accents, large rounded media blocks, playful/kitschy art direction.
- Do not change content, links, asset paths, section order, or behavior unless asked.

## Important Files

- `src/App.tsx`
- `src/main.tsx`
- `src/styles.css`
- `src/styles/base.css`
- `src/styles/header-hero.css`
- `src/styles/works.css`
- `src/styles/juicy-gallery.css`
- `src/styles/clients.css`
- `src/styles/experience.css`
- `src/styles/contact-footer.css`
- `src/data/portfolio.ts`
- `src/components/Works.tsx`
- `src/components/JuicyGallery.tsx`
- `src/components/Clients.tsx`
- `src/components/Experience.tsx`
- `src/components/Contact.tsx`
- `src/vite-env.d.ts`
- `tsconfig.json`

## General Working Rules

1. Prefer small, focused patches.
2. Before editing, inspect the relevant files and explain what you plan to change.
3. Do not modify unrelated sections.
4. Do not rename classes unless absolutely necessary.
5. Do not move assets unless explicitly asked.
6. Do not delete existing code unless you understand why it is safe.
7. If a change affects layout, explain which breakpoints may be affected.
8. After editing, summarize exactly which files changed.
9. Do not merge `App.tsx` and `main.tsx`.
10. Do not add generic landing-page reveal animations.

## CSS Structure

`src/styles.css` is the CSS entry point and must stay as an import-only aggregator.

Current import order:

```css
@import "./styles/base.css";
@import "./styles/header-hero.css";
@import "./styles/works.css";
@import "./styles/juicy-gallery.css";
@import "./styles/clients.css";
@import "./styles/experience.css";
@import "./styles/contact-footer.css";
```

File ownership:

- `src/styles/base.css` — variables, reset, `html/body`, global background/grid, global layout basics.
- `src/styles/header-hero.css` — Header, Hero, shared wavy-border, shared blue-sticker.
- `src/styles/works.css` — Works and shared section-label pattern.
- `src/styles/juicy-gallery.css` — JuicyGallery desktop sticky, mobile native scroll, `2300px+` static mode.
- `src/styles/clients.css` — Clients desktop orbit and mobile constellation.
- `src/styles/experience.css` — Experience desktop/mobile.
- `src/styles/contact-footer.css` — Contact and Footer.

CSS rules:

- Preserve import order unless there is a clear reason.
- Keep mobile styles near the related section.
- Do not create a separate `mobile.css`.
- Do not move section-specific styles into `base.css`.
- Keep comments concise and practical; explain intent and fragile constraints, not obvious declarations.
- If doing a CSS organization refactor, verify it as a no-visual-change refactor.

## Breakpoints

- Mobile/tablet layout: `@media (max-width: 900px)`.
- Desktop layout restores at `901px+`.
- Always test both `900px` and `901px` after responsive changes.
- Super-wide checks matter at `2300px+`.

## Stable Spacing System

The site uses a 1440px design baseline and fluid spacing:

```css
--space-after-hero: clamp(120px, 12.5vw, 220px);
--space-section: clamp(100px, 10.4167vw, 190px);
--space-before-contact: clamp(120px, 12.5vw, 220px);
--space-footer: clamp(50px, 5.2083vw, 95px);
```

At `max-width: 900px`:

```css
--space-after-hero: clamp(70px, 12vw, 100px);
--space-section: clamp(70px, 11vw, 95px);
--space-before-contact: clamp(80px, 12vw, 110px);
--space-footer: 50px;
```

Do not replace these with arbitrary fixed values unless Artem explicitly asks.

## Wavy Border Performance

The green wavy border is shared by Hero and Contact.

- Desktop `901px+` keeps the animated wavy border behavior.
- Mobile `max-width: 900px` intentionally uses a static/non-animated wavy border to avoid iPhone/Safari heating.
- Do not casually re-enable continuous mobile wavy-border animation.
- If changing wavy-border code, test on a real iPhone using production preview.
- The mobile static filter is intentional, not temporary debug code.

## Hero

Current stable structure:

- `.hero-composition`
- `.hero-stage`
- `.hero-frame.wavy-border`
- `.hero-visual`
- `.hero-patch`
- `.hero-hearts`
- `.hero-role`

Important:

- There must be only one `.hero-stage`, `.hero-frame`, `.hero-visual`, `.hero-patch`, `.hero-hearts`, and `.hero-role` in `Hero.tsx`.
- `.hero-frame` owns the green wavy border.
- `.hero-visual` owns the image, sticker, and heart burst effect.
- `.hero-picture` clips the image; do not use `display: contents`.
- Do not return to the old fragile absolute-only Hero layout.
- Do not alter the sticker text structure, arrow placement, or heart logic without a specific request.

## Works

Works is stable.

- Green number badges use `.work-number`.
- `.work-number` horizontal position is stable with `left: 0`.
- Do not move individual badges manually unless explicitly asked.
- Works card mobile image support uses `mobileSrc` for every Works project.
- Case title should use "MTS your business", not "Mts your business".

## JuicyGallery

JuicyGallery is stable but sensitive.

Current behavior:

- Mobile below `901px` uses native horizontal scroll.
- Desktop `901px-2299px` uses sticky transform behavior.
- `2300px+` uses static layout.
- Safari smoothness was improved with minimal safe JS optimizations.

Important:

- Do not change sticky timing, scroll calculations, section height, viewport height, or transform logic unless the task is specifically about JuicyGallery.
- Do not remove the `2300px+` static mode.
- Do not reintroduce fixed magic `900px` as the main runtime scroll distance.
- Do not add heavy animation libraries.
- Do not casually add `contain` to `.juicy-track` or `.juicy-viewport`; it can break sticky/overflow behavior.
- `.juicy-card { contain: paint; }` is an approved safe optimization.
- Mobile `.juicy-track` should not keep unnecessary `will-change: transform`.
- Infinity symbol is an SVG icon at `/public/icons/infinity.svg`; do not replace it with text.

## Clients

Clients is stable.

- Desktop Clients uses orbit/labels/lines and the hand animation.
- Mobile Clients uses a static constellation layout.
- Mobile should have no continuous animation.
- Desktop positions, lines, gradient, observer timing, and hand animation should stay unchanged unless explicitly requested.
- Client thumbnail corners are rounded and should stay rounded.

Clients hand animation:

- Observe `.clients-title`, not `.clients-orbit`.
- Keep `rootMargin: "-42% 0px -42% 0px"`.
- Keep `.cursor-hand--animate` at `1.8s cubic-bezier(0.16, 1, 0.3, 1)`.

## Experience

Experience is stable.

- Keep `.employment-label` and `.experience-card` inside the same `.experience-inner`.
- Desktop uses a horizontal structure.
- Mobile stacks into the finished mobile card layout.
- The card should hug content so future jobs can be added naturally.
- The Yandex row is inactive by default and activates once via IntersectionObserver.
- Do not change the animation trigger unless Artem says it starts too early or too late.
- Power icons are SVG-based, not text symbols.
- Keep the image key `"RBC Media"`, not `"RBC"`.

## Contact

Contact is stable.

- Desktop uses a grid: title/subtitle upper left, sticker/smiley upper right, links lower left, email/tg lower right.
- Mobile uses the finished centered card composition.
- Contact blue sticker and heart behavior are fragile; do not structurally change them casually.
- The sticker intentionally mirrors the Hero sticker logic with explicit text lines and final arrow line.
- Do not rework the sticker with random width overrides.
- Address must stay inside the card and may wrap safely if needed.

Accepted limitation:

- Contact title may wrap into 3 lines at `360px`; this is accepted if it stays inside the border and the card remains usable.

Contact links:

- Behance: `https://www.behance.net/panteleevw21d9`
- Notion: `https://www.notion.so/artypanteleev/Artem-Panteleev-s-Portfolio-31cfe4610a324d21a8c03b7aeb47761d`
- LinkedIn: `https://www.linkedin.com/in/artem-panteleev/`
- Telegram: `https://t.me/uncle_artem`
- Email: `mailto:panteleevworkplace@gmail.com`

All external/contact links should open in a new tab using:

- `target="_blank"`
- `rel="noreferrer"`

## Footer

Footer is stable and remains separate from Contact.

- Desktop Footer uses the three-zone layout: left `artem`, center `© 2026`, right `based in the internet` + globe.
- Mobile Footer hides `artem`.
- Desktop `901px+` restores `artem`.
- Footer text is plain text / non-interactive unless Artem explicitly asks otherwise.
- No hover states should be added to Footer.
- The center item must remain centered on the page axis on desktop.

## Known Accepted Limitations

- Contact title may wrap into 3 lines at `360px`; accepted if it stays inside the border.
- `900px` mobile/tablet layout is large but functional; treat tablet refinement as optional future work.
- Minor Safari Responsive Mode quirks are acceptable if the real browser/production preview is stable.

## Animation Policy

Approved animations/interactions:

- Hero sticker heart burst.
- Contact sticker heart burst.
- JuicyGallery desktop sticky scroll.
- Clients desktop hand tap animation.
- Experience Yandex active row animation.
- Hover states for interactive links/buttons.

Avoid:

- generic section fade-up reveals;
- heavy scroll listeners;
- animation libraries unless explicitly approved;
- changing existing stable animation timing without a specific reason;
- continuous mobile wavy-border animation.

## Assets

Asset folders:

- `public/icons`
- `public/images/cases`
- `public/images/clients`
- `public/images/experience`
- `public/images/gallery`

Rules:

- Keep icons in `public/icons`.
- Keep client images in `public/images/clients`.
- Keep experience images in `public/images/experience`.
- Keep case images in `public/images/cases`.
- Do not move assets without updating all paths.
- Do not delete image assets unless you prove they are unused by search.

Large images should be optimized later.

Recommended source sizes:

- Hero image: around 2400-2800px wide.
- Large case images: around 2200-2600px wide.
- Client/experience thumbnails: around 300-600px.

Preferred formats:

- WebP for photos/case images.
- SVG for icons.
- PNG only when transparency is required.

## TypeScript / Vite Setup

`src/vite-env.d.ts` should exist and include Vite client types.

`tsconfig.json` should be in the project root next to:

- `package.json`
- `vite.config.ts`
- `index.html`
- `src/`
- `public/`

It should include `src`, so TypeScript can see `vite-env.d.ts`.

If VS Code shows an error on:

```ts
import "./styles.css";
```

first check:

1. `src/vite-env.d.ts` exists.
2. `tsconfig.json` exists in the root.
3. `tsconfig.json` includes `src`.
4. Restart TypeScript Server in VS Code.

## Testing Checklist

For normal code/CSS changes:

1. Run `npm run build`.
2. Preview production locally when visual or performance behavior matters:

```bash
npm run preview -- --host 0.0.0.0
```

3. Test widths:
   - `390px`
   - `900px`
   - `901px`
   - `1440px`
   - `2300px+`
4. Check no horizontal page overflow.
5. After performance-sensitive changes, test on a real iPhone using production preview.

## Git / Cleanup / Deploy Rules

Expected project root files:

- `AGENTS.md`
- `index.html`
- `package.json`
- `package-lock.json`
- `tsconfig.json`
- `vite.config.ts`
- `src/`
- `public/`
- `README.md`

Expected local-only / ignored:

- `node_modules`
- `dist`
- `.env`
- `.DS_Store`

Rules:

- Do not commit `.DS_Store` or other system files.
- Do not touch `.git` internals.
- Do not commit `node_modules`.
- Do not update Netlify unless explicitly requested.
- Pushing to GitHub should be separate from Netlify deployment if possible/desired.

Make sure `.gitignore` includes:

```gitignore
node_modules
dist
.env
.DS_Store
```

## Preferred Codex Workflow

When asked to work on this project:

1. Inspect the relevant files.
2. Explain the plan before editing.
3. Edit only the required files.
4. Keep changes minimal.
5. Do not refactor unrelated code.
6. Summarize changes after editing.
7. If the change is visual, tell Artem what to check in the browser.

If Artem asks for a visual/layout change:

- Do not guess broadly.
- Ask which screen width / device is the target if unclear.
- Prefer changing one variable/class at a time.
- Do not change multiple sections unless the task is explicitly system-wide.

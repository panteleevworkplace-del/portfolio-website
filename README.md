# Portfolio Website — optimized rebuild

This version replaces the huge Figma-generated import with a normal component structure.

## Structure

- `src/components` — sections
- `src/data/portfolio.ts` — project/gallery/client data
- `public/images` — clean image catalog
- `src/styles.css` — responsive layout and animations

## Run

```bash
npm install
npm run dev
```

## Deploy

Netlify settings:

```text
Build command: npm run build
Publish directory: dist
```

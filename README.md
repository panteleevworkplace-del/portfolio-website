# Portfolio Website — optimized rebuild patch 02

Patch 02 focuses on Hero tuning:

- header is now static, not fixed;
- `works` is centered against the page;
- hero label text is slightly smaller and pushed lower to avoid collision with the green border;
- blue sticker dimensions/position are closer to the 1440px reference;
- sticker text has correct 3-line composition;
- arrow is smaller and positioned like the Figma reference;
- CSS procedural noise added to the blue sticker.

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

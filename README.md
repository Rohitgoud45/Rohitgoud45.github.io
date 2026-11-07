# The Mind in Motion: Rohit Bandameedi

Personal storytelling portfolio. React + TypeScript + Tailwind v4 + Motion.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs dist/
```

## Edit content

All copy lives in `src/content.ts`.

- Any string starting with `TODO:` shows on the site as a dashed `[To add: …]` placeholder. Replace it with real text.
- Lines marked `// interpretation` are narrative readings of resume facts. Confirm or rewrite them in your own words.
- To update the resume, replace `public/Rohit-Bandameedi-Resume.pdf` and keep the same filename.

## Deploy

**Vercel:** import the repo. It detects Vite automatically (build `npm run build`, output `dist`).

**GitHub Pages:** `vite.config.ts` uses `base: './'`, so the build works under `/<repo>/`. Push `dist/` with any Pages action, or run:

```bash
npx gh-pages -d dist
```

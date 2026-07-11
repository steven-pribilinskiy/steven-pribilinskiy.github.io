# steven-pribilinskiy.github.io

Personal profile site — a single editorial page: hero with a terminal session window, stats ledger, about, experience timeline, expertise index, contact.

**Stack**: Astro + Tailwind CSS 4 + Biome. Static output, zero framework JS — the only scripts are the light/dark/system theme toggle and a years-since counter. Fonts (Fraunces, Inter, JetBrains Mono) self-hosted via Fontsource.

## Development

```bash
npm install
npm run dev        # dev server (port from astro.config.ts)
npm run build      # production build to dist/
npm run preview    # serve the production build
```

Quality gates — all must pass before pushing:

```bash
npm run check      # astro check (TypeScript)
npm run lint       # biome
npm run build
```

## Content

All copy lives in typed data modules under `src/data/` (`identity`, `hero`, `stats`, `about`, `experience`, `expertise`, `contact`) — components never contain prose. Design tokens live in `src/styles/global.css` (semantic oklch variables, flipped by the `.dark` class).

## Deploy

Pushes to `main` deploy to GitHub Pages via `.github/workflows/deploy.yml`.

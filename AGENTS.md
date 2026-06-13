# Repository Guidelines

## Project Structure & Module Organization

```
app/                  # Pages (App Router) — one page.tsx per route
  _components/        # Shared UI (SiteHeader, SiteFooter, PageShell, PageHero, CtaBand)
  rest/               # /rest route
  architecture/       # /architecture route
  tech/               # /tech route
  …                   # Other routes: /ai-era, /alps, /value, /business, /examples, /quick-start
  layout.tsx          # Root layout (metadata, <html>, <body>)
  page.tsx            # Home page (hero, feature sections)
  globals.css         # Tailwind v4 base styles
worker/               # Cloudflare Worker entry point (image optimization, fetch handler)
build/                # Custom Vite plugin (sites-vite-plugin.ts)
deploy/               # GitHub Actions workflow + integration package for bearsunday.github.io
  bearsunday.github.io/
    pages.yml         # The deploy workflow
db/                   # Database layer (D1)
drizzle/              # Drizzle ORM config + migrations
docs/                 # Project knowledge base (knowledge.md, journal.md)
public/               # Static assets (favicon.svg, bear-logo.png, etc.)
```

The site is **purely static content**. Pages contain no `headers()`, `cookies()`, `fetch`, `"use client"`, or `next/image`.

## Build, Test, and Development Commands

| Command | What it does |
|---------|--------------|
| `npm ci` | Install dependencies cleanly (Node >= 22.13.0 required) |
| `npm run dev` | Start dev server at `http://localhost:3000` |
| `npm run build` | Production build via vinext (Vite + RSC) |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint across the project (excludes `dist` and `.next`) |
| `npm run db:generate` | Generate Drizzle migration files for D1 schema changes |

No test framework is configured in this repository. New tests should use **Vitest** to align with the Vite-based toolchain.

## Coding Style & Naming Conventions

- **TypeScript strict mode** (`"strict": true` in `tsconfig.json`).
- **Indentation**: 2 spaces (Next.js/app-router default).
- **Component naming**: PascalCase (`SiteHeader`, `PageShell`); route files use `page.tsx` and `layout.tsx`.
- **Imports**: Use `@/*` path alias (maps to project root). Order: external libraries first, then internal `@/` imports.
- **Styling**: Tailwind CSS v4 utility classes only. No separate CSS modules or styled-components.
- **Formatting**: ESLint with `eslint-config-next` (`core-web-vitals` + `typescript`) is the sole lint tool. Run `npm run lint` before committing.

## Commit & Pull Request Guidelines

- **Commit messages**: imperative mood, present tense, English (`Add /alps page`, `Fix /rest copy`, `Rewrite README`). Keep summaries under 72 characters if possible.
- **Pull requests**: link related issues when applicable. For visual changes (layout, hero, new sections), include a screenshot in the description.
- **Branch naming**: no strict convention enforced. Follow the existing pattern of descriptive lowercase-hyphenated names where natural.

## Deploy

The site is published at `bearsunday.github.io/learn/` via a GitHub Actions workflow in the separate **`bearsunday.github.io`** repository. That workflow checks out this repository, runs `npm ci && npm run build`, and places the static output under `/learn/`. The ready-to-use workflow and integration files live in `deploy/bearsunday.github.io/`.

## Architecture Notes

- **vinext**: The build tool is [vinext](https://github.com/cloudflare/vinext) (Vite + Next.js-style App Router / RSC), not stock Next.js.
- **Cloudflare**: The `worker/` directory provides the Worker entry point. `wrangler` is available in devDependencies.
- **Database**: Drizzle ORM + Cloudflare D1. The D1 binding is configured in `vite.config.ts` via `@cloudflare/vite-plugin`. This is infrastructure scaffolding; the site's published pages do not use it at runtime.

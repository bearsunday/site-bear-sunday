# BEAR.Sunday — Learn site

The landing / "Learn" site for **BEAR.Sunday** — a resource-oriented PHP
framework that brings the principles of the Web (REST, hypermedia) into the
whole application.

This site is the **why / what / value** layer. It pairs with the official
**manual** (the *how-to* reference) under `bearsunday.github.io/manuals`. The
relationship is like a product site and its docs.

## What this site says (and what it avoids)

Following `docs/knowledge.md`:

- No competitor comparison, no GitHub-star / adoption marketing.
- Technical facts, and the value they create for **developers, users, and
  business**.
- Classic web ideas (URI, the uniform interface, hypermedia / HATEOAS) shown to
  *produce* modern capabilities — transparent parallel execution, AI-agent
  tools, generated documentation — because intent (*What*) is separated from
  execution (*How*).
- Copy that lets the reader discover the idea, rather than declaring it.

## Pages

| Path | Content |
|------|---------|
| `/` | Hero + the "why it all connects" spine (declare relationships → What/How split) |
| `/rest` | Web principles: URI, the uniform interface (4 constraints), hypermedia, browsable headless REST |
| `/architecture` | Design philosophy (取り込まず、つなぐ), Resource / DI / AOP / Context |
| `/tech` | Event-driven CDN cache, SQL as a first-class citizen, transparent parallel execution, hypermedia tests, context-agnostic DI, portable resources |
| `/ai-era` | Declarative / explicit / traceable, REST semantics as an AI safety model, BEAR.ToolUse, strict types |
| `/alps` | ALPS as a semantic SSOT — the "thin waist", projection, three doors (MCP / LSP / Hypermedia) |
| `/value` | How the design becomes value (mechanism → value), per audience |
| `/business` | The same value in plain business language (outcomes, cost, risk) |
| `/examples`, `/quick-start` | Minimal code and the shortest on-ramp |

## Tech

- [vinext](https://github.com/cloudflare/vinext) (Vite + Next-style App Router /
  RSC) and Tailwind CSS v4.
- The pages are **static content** — no `headers()` / `cookies()` / `fetch` /
  `next/image` / `"use client"` — so the site can be delivered as plain static
  HTML (see *Deploy* below).

## Develop

Node `>=22.13.0`.

```bash
npm ci
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

## Deploy — published at `bearsunday.github.io/learn/`

The site is published as a section of the official site, **on the same domain**:

- `/` — the jumbotron (official Jekyll site) with **[Learn]** → `/learn/` and
  **[Manual]** → `/manuals/`
- `/learn/` — this site (built to static and placed there by CI)
- `/manuals/` — the manual (Jekyll, unchanged)

The two codebases are **not merged**. The Learn site stays in this repository;
the official **`bearsunday.github.io`** repository runs a GitHub Actions workflow
that checks out this repository, builds it to static, and publishes it under
`/learn/` next to the Jekyll build. The ready-to-install workflow, the updated
jumbotron, and step-by-step instructions are in [`deploy/`](./deploy).

## Links

- Official site: https://bearsunday.github.io/
- Manual: https://bearsunday.github.io/manuals/1.0/en/
- GitHub: https://github.com/bearsunday/BEAR.Sunday

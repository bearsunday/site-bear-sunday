# Deploy: integrate the Learn site into `bearsunday.github.io`

These files publish this Learn site under **`bearsunday.github.io/learn/`** — on
the same domain as the manual — **without merging the two codebases**. The Learn
site stays in `bearsunday/site-bear-sunday`; the official site's CI checks it
out, builds it to static, and places it at `/learn/`.

## Files

- `bearsunday.github.io/pages.yml` — GitHub Actions workflow. Put it at
  `.github/workflows/pages.yml` in the **bearsunday.github.io** repo.
- `bearsunday.github.io/index.html` — the jumbotron with `[Learn]` → `/learn/`
  and `[Manual]` → `/manuals/`. Replaces the current root `index.html`.

## Steps (in the `bearsunday.github.io` repo)

1. Copy the two files in (workflow → `.github/workflows/pages.yml`,
   `index.html` → repo root). Commit on a branch and open a PR.
2. **Settings → Pages → Build and deployment → Source: GitHub Actions.**
   This turns off the default branch-based Jekyll build; the workflow now builds
   Jekyll itself (with the same `actions/jekyll-build-pages` Pages uses).
3. Merge. The workflow builds Jekyll (jumbotron + `/manuals`), builds this Learn
   site to static, places it at `_site/learn/`, and deploys to Pages.

## Confirm / adjust

- **Default branch** — the workflow triggers on `master`. Adjust
  `on.push.branches` and the Learn-checkout `ref` if yours differs.
- **Jekyll build** — `actions/jekyll-build-pages` reproduces the current default
  Pages build. If you build with a custom Gemfile/theme, swap that one step.
- **Learn logo link** — the Learn header logo currently links to the Learn home
  (`/learn/`). To make it return to the jumbotron instead, set the brand `href`
  to `/` in `app/_components/site-chrome.tsx`.
- **First run** may need one iteration on CI specifics — watch the Actions log.

## How it works

```text
push → Actions
  ├─ build Jekyll        → _site/         (/, /manuals/ …)
  ├─ checkout Learn repo → learn-src/
  │    npm ci && npm run build
  │    PORT=4399 npm run start &           (production server)
  │    wget crawl        → static HTML + assets (self-contained, relative links)
  ├─ copy snapshot       → _site/learn/    (/learn/ …)
  └─ deploy-pages        → https://bearsunday.github.io/
```

The crawl produces self-contained pages with **relative** asset/link references,
so the bundle works unchanged under the `/learn/` sub-path. The Learn pages use
no `next/image`, so there is no image-optimizer endpoint to host.

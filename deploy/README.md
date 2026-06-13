# Deploy: integrate the Learn site into `bearsunday.github.io`

These files publish this Learn site under **`bearsunday.github.io/learn/`** — on
the same domain as the manual — **without merging the two codebases**. The Learn
site stays in `bearsunday/site-bear-sunday`; the official site's CI checks it
out, builds it to static, and places it at `/learn/`.

## Files

- `bearsunday.github.io/pages.yml` — the **merged** GitHub Actions workflow. It is
  your existing **"Deploy Jekyll site to Pages"** workflow with two changes:
  1. the Jekyll build + artifact upload are **re-enabled** (they were commented out), and
  2. the Learn site is built to static and placed under `/learn/`.
  **Replace your existing Jekyll Pages workflow file with this one** (same
  `.github/workflows/` path).
- `bearsunday.github.io/index.html` — the jumbotron with `[Learn]` → `/learn/`
  and `[Manual]` → `/manuals/`. Replaces the current root `index.html`.

## Steps (in the `bearsunday.github.io` repo)

1. Replace your Jekyll Pages workflow with `pages.yml`, and replace root
   `index.html`. Commit on a branch and open a PR.
2. **Settings → Pages → Build and deployment → Source: GitHub Actions.**
3. Merge. One workflow now: runs your llms scripts, builds Jekyll
   (jumbotron + `/manuals` + `llms.txt`), builds this Learn site to static at
   `_site/learn/`, and deploys to Pages.

> **Run only ONE Pages-deploy workflow.** The merged `pages.yml` does everything.
> If a second workflow also deploys Pages, both race on the `pages` concurrency
> group / `github-pages` environment.

## What the merged workflow keeps from your existing one

Ruby `3.2.2` + `bundle install` (your Gemfile / pinned Rouge), `setup-php`, and
your generation scripts (`ruby bin/merge_md_files.rb`, `php bin/gen_llms.php`),
then `bundle exec jekyll build`. The Learn steps run **after** the Jekyll build,
so Jekyll never processes the Learn source.

## Notes

- **Default branch** — triggers on `master`; adjust `on.push.branches` and the
  Learn-checkout `ref` if yours differs.
- **Images under `/learn/`** — `wget -p` does not fetch assets referenced only
  from inline-style `url()` (e.g. `/bear-logo.png`). The workflow copies the
  Learn `public/` assets into the snapshot and rewrites absolute root asset refs
  (`/bear-logo.png`, `/favicon.svg`) to relative, so they resolve under `/learn/`.
- **`exit code 8` in the Learn build step** = `wget` hit an optional asset 404.
  Steps run under `set -e`, so the workflow tolerates it (`|| true`) and asserts
  the key pages (and `bear-logo.png`) exist instead.
- **First run** may need one iteration on CI specifics — watch the Actions log.

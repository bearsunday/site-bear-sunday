# BEAR.Sunday promotion site handoff

This repository contains the promotional site for BEAR.Sunday.

## Current URLs

- Local preview: `http://localhost:3000/`
- Published Sites URL: `https://bear-sunday-promotion.bengo4-com-4246.chatgpt-team.site/`
- GitHub repository: `https://github.com/bearsunday/site-bear-sunday.git`

The Sites project is `appgprj_6a239b8de30481919be7bf34cd063eaa`.
Access mode is `workspace_all`, so active users in the OpenAI workspace can view the published site.

## Git state

The local repository now uses the Sites internal history.

- Current branch: `main`
- GitHub remote: `github`
- Sites internal remote: `origin`
- Current pushed HEAD: `13a72ef1c9bc87a1eca66176d9fbe10f634d91a2`
- `main` and `master` on GitHub were pushed to the same commit before this docs handoff work.

The original full workspace backup made before applying Git history is:

`/Users/akihito/Documents/Codex/2026-06-05/sites-plugin-sites-openai-bundled-create.backup-before-git-20260606-1355`

## Local artifacts

These are ignored locally or by `.gitignore` and should not be committed unless there is a deliberate reason:

- `node_modules/`
- `dist/`
- `.wrangler/`
- `work/`
- `outputs/`

`work/` contains temporary notes, screenshots, and fetched reference material.

## Development commands

```bash
npm run lint
npm run build
npm run dev
```

The project is a vinext/Next-based Sites starter. `npm run build` produces `dist/`.

## Deployment workflow

Normal deployment flow used in this project:

1. Run `npm run lint`.
2. Run `npm run build`.
3. Commit source changes.
4. Push to GitHub.
5. Create a short-lived Sites source repository credential with the Sites connector.
6. Push the same commit to the Sites internal remote using the temporary authorization header.
7. Stage `dist/` into a tar archive.
8. Save a Sites version with the same Git commit SHA and the archive.
9. Deploy that saved version.

Do not store short-lived Sites tokens in Git config, files, commit messages, or docs.


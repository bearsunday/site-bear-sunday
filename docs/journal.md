# Journal

## 2026-06-06

### Built and deployed the BEAR.Sunday promotion site

The site was developed as a Sites/vinext project and deployed to:

`https://bear-sunday-promotion.bengo4-com-4246.chatgpt-team.site/`

Access mode was changed from `custom` to `workspace_all`.

### Git history recovered from Sites internal repository

The local workspace originally had no `.git` directory. Before applying Git history, a full copy was made:

`/Users/akihito/Documents/Codex/2026-06-05/sites-plugin-sites-openai-bundled-create.backup-before-git-20260606-1355`

Then the Sites internal source repository was cloned and its `.git` directory was applied to the local workspace.

Current history before this docs handoff:

```text
13a72ef Revert "Add view component resource note"
c2d01aa Add view component resource note
13d8b5a Clarify resource discipline
cd53548 Add long-term compatibility message
9ca5e4d Create BEAR.Sunday promotion site
```

### GitHub repository created/pushed

GitHub remote `github` was added:

`https://github.com/bearsunday/site-bear-sunday.git`

`main` was pushed first. Then `master` was created and pushed to the same commit.

### Important content decisions

#### Do not explain differences from Symfony/Laravel on the site

Symfony and Laravel sites mostly present adoption, ecosystem, and developer experience. They do not deeply argue technical differences. The BEAR.Sunday site should likewise avoid competitor comparison and instead show its own identity.

#### Resource-centered constraint is the real distinction

The key point is not a feature list. It is that controller/model/service freedom tends to leave the location of application meaning to team discipline. BEAR.Sunday puts that meaning in Resource.

#### Added long-term continuity copy

Added the longer business copy:

`2011年から続く、変えないための設計。`

Top-page long-term signal changed to:

`2011年から続く、1.xを壊さない進化`

#### Added Resource discipline section

Added `/architecture` section:

`Resourceは、何でも書ける場所ではない。`

Current cards:

- `意味はResourceに置く`
- `他者を操作せず、自分を律する`
- `表現に関心を持たない`
- `In / Outを制約で宣言する`

#### Reverted View component card

A card titled `Viewは横に並ばない` was added, then reverted at the user's request. Keep it out unless explicitly requested again.

### Validation performed repeatedly

The site was validated with:

```bash
npm run lint
npm run build
```

Browser checks were run against local pages when needed. Public Sites deployments were saved and deployed through the Sites connector.

## 2026-06-14

### Content deepening + English editorial pass (PR #8, merged)

A long collaborative session with the maintainer; shipped to `master` via PR #8.
The durable distillation lives in `docs/learn-site-guide.md` — this entry is the
narrative.

Highlights:

- Renamed `/examples` from "Examples / 実装例" to **Code / コード** — it is a
  gallery to take in the code's *character*, not a cookbook. Curated cards:
  CacheableResponse, DonutCache (🍩 = "do not" cache), Cli, SQL (MediaQuery BDR).
  Fixed `#[Cacheable]` → `#[Loggable]` on a POST sample.
- Home: a quiet closing tagline band —
  *古典が、まだ知らなかった現代を用意していた。*
- `/tech`: foregrounded the network cache as the apex of "design = performance" —
  *最も速いのは、計算しないこと。* with the historical note (REST/HTTP, 25+ years).
  Named **Data resource / Computed resource**. Return-type spectrum as a chip
  grid. DataLoader linked to the GraphQL pattern. Noted that parallel `#[Embed]`
  renders (not just fetches). Added a Stream section; corrected the
  StreamTransferInject renderer note.
- `/architecture`: added **Injection Point** (contextual injection) and
  **Matcher** concept cards to the Ray.Di section.
- `/business`: a "Speed, resilience, and cost" section — the cache architecture
  read as operating-cost reduction (ETag/304 keeps compute + network minimal).
  A win for user, operations, and business.
- Fixed `app/ja/quick-start` next-step links that were missing the `/ja/` prefix
  (would 404 under i18n + `trailingSlash`).
- **English full-text pass** across every `en` page: sharpened flat /
  non-idiomatic headlines and body copy; corrected a technical inaccuracy
  ("either safe or idempotent"); left well-written lines alone. JA untouched.

Every change was built (`npm run build`) and rendered (`vinext start`,
trailing-slash URLs) before pushing. CodeRabbit returned no actionable comments
(only the inapplicable Docstring Coverage warning).


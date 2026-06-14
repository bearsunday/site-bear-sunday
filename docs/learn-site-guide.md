# Learn site — editorial & technical guide

Companion to `knowledge.md` (what the site says) and `journal.md` (what happened).
This file is the *how to keep it right*: the voice, the through-line, the facts
that are easy to get subtly wrong, and the workflow. Written for the next
contributor — human or AI — so the site stays consistent.

## 1. Voice — restraint, and "ほ〜と眺める"

`knowledge.md` already states the no-competitor / reader-discovery stance. This is
the finer calibration that the copy is tuned to:

- **Quiet register.** Aim for a calm "ほ〜"(huh, I see) — a reader pausing to take
  something in — not a loud "wow!". Evocative is welcome; salesy is not.
- **Be honest about maturity.** Several things are *shown* but barely used in the
  wild yet: `#[Cli]`, `#[DonutCache]`, the Ray.MediaQuery BDR pattern; `BEAR.Async`
  is alpha. Of the cache attributes, `CacheableResponse` is the one in common use.
  Show the idea; don't imply adoption. No star counts, no "N companies use it."
- **No manifesto paragraphs.** Let a concrete thing carry the point; trust the
  reader to draw the conclusion.
- **One evocative line, earned.** The home closing band —
  *古典が、まだ知らなかった現代を用意していた。* /
  *The classics had already prepared a world they could not yet see.* — works
  *because* everything around it is restrained. Don't add a second such line per
  page.
- **`/examples` is titled "Code / コード", not "Examples / 実装例", on purpose.** It
  is a gallery to take in the *character* of the code (uniform, small
  declarations), not a cookbook to look things up. The same-shaped cards are the
  message: the sameness shows "it's all one small declaration." Keep captions
  quiet — e.g. the DonutCache caption surfaces the 🍩 = "do not cache" pun rather
  than documenting the API.

## 2. The through-line (the spine)

Everything the site argues hangs on a single move:

> **Declare the relationships (REST: URI, links, `#[Embed]`). That separates intent
> (What) from execution (How). The rest follows from the structure — not as
> bolt-on features.**

What follows "for free": transparent parallelism, resources becoming AI tools
as-is, multiple representations from one state, and long-term / backward
compatibility.

Two crystallized expressions of the spine, both load-bearing:

- **Performance.** *最も速いのは、計算しないこと。* / *The fastest computation is
  none.* The apex of "design = performance" is the network cache: an essentially
  static representation is served from the CDN with ETag/304, and the request
  never reaches PHP or the DB. Frame it historically — this was built into
  REST/HTTP **more than a quarter-century ago** (Fielding's REST, 2000; HTTP/1.1
  conditional requests / ETag, 1997–99). It rhymes with the home tagline: the
  classics already prepared today.
- **Static vs dynamic is named.** A **Data resource (データ型リソース)** changes
  only on events and is cacheable; a **Computed resource (計算型リソース)** is
  recomputed each request (personalization, dashboards, point-in-time info).
  "Computed" is exactly the kind you can't avoid; "Data" is the kind you don't.

The business page reads the same spine as **cost**: not computing = less compute +
network = lower running cost. Fast UX + resilience + lower cost, from one design.

## 3. Accuracy ledger — easy to get subtly wrong

Each of these was actually corrected during this work. Re-check them in any new
copy or code sample:

- **Uniform interface = four constraints**, *not* "the HTTP methods": resource
  identification; manipulation through representations; self-descriptive messages;
  HATEOAS. Don't equate it with GET/POST/….
- **Safe and idempotent are not mutually exclusive.** GET is both; PUT is
  idempotent but not safe; POST is neither. Never write "either safe or
  idempotent." Describe each method by *whether* it is safe and *whether* it is
  idempotent.
- **PUT** = "specify the state; idempotent — repeating yields the same result." It
  is method semantics on application state, not table CRUD ("replace the row").
- **`#[CacheableResponse]` ≠ `#[Cacheable]`.** `CacheableResponse` invalidates on
  event / dependency change; `Cacheable` is TTL-based. The
  dependency-invalidation story belongs to `CacheableResponse`.
- On an **`onPost`** example, cross-cutting concerns should be e.g.
  `#[Loggable]` / `#[Transactional]` — **not** `#[Cacheable]` (a POST is not
  cacheable).
- **`#[DonutCache]`** = cache the page, leave the "hole" (e.g. comments) uncached.
  The name is the pun: 🍩 **DO NUT** cache = "do not" cache the hole. (The manual
  reportedly mislabels the attribute; the site intentionally shows the
  donut-hole behaviour.)
- **Application import URI**: `app://blog/post` — the scheme stays `app`; the
  **host** is the imported app (`blog`), *not* `self`. You do not switch the
  scheme to `blog://`.
- **`StreamTransferInject`** installs its *own* dedicated `StreamRenderer`; it does
  not "coexist with the existing renderer." A body may mix stream pointers with
  ordinary values.
- **Parallel `#[Embed]`** parallelizes *rendering too*, not just data fetch — each
  embedded resource is rendered to its representation in parallel.
- **DataLoader** is the same **DataLoader pattern used in GraphQL**
  (<https://github.com/graphql/dataloader>); it batches per-child DB access
  (N+1 → one query).
- Ray.MediaQuery **return type = intent**: `User` / `array<User>` /
  `AffectedRows` / `InsertedRow` / `Pages<User>` (lazy) / `void`. The entity can
  hydrate itself; a separate `factory:` is not always required.

## 4. Bilingual workflow

- **`app/ja/*` is the source of truth and the voice.** It is authored.
  `app/en/*` was machine-drafted and then refined by hand.
- When polishing English, **do not touch the Japanese**, and **preserve meaning** —
  sharpen idiom and flow, fix inaccuracy, but keep the author's argument and
  register. Leave well-written lines alone ("no need to force changes").
- Keep `ja` and `en` structurally parallel (same sections, same cards). Add a
  section to one ⇒ add it to the other.
- The draft→refine division is deliberate and economical: a cheap draft plus a
  careful pass beats chasing a perfect one-shot translation, and it keeps
  terminology consistent.
- Watch for **fluent-but-wrong**: a smooth machine draft can hide errors a blank
  page wouldn't (the "either safe or idempotent" slip is the canonical example).
  Read for *meaning*, not just grammar.

## 5. Stack, build & how to verify

> Note: `docs/README.md` predates this setup (it describes the older Sites /
> `localhost:3000` flow). For the current Learn-site reality, use this section.

- **Framework**: vinext (Vite + a Next-style App Router with React Server
  Components, running on a Cloudflare Worker). Pages are **fully static content** —
  no `headers()` / `cookies()` / `fetch` / client components. Keep it that way so
  the static snapshot keeps working.
- **i18n**: `app/ja/*` and `app/en/*`; `trailingSlash` is on (so `/ja/tech`
  308-redirects to `/ja/tech/`). Shared chrome (header, footer, hero, CTA) lives
  in `app/_components/site-chrome.tsx`.
- **Deploy**: published as a **static snapshot** under
  `https://bearsunday.github.io/learn/` by GitHub Actions — build → `vinext start`
  → `wget` crawl → copy `public/` → rewrite absolute asset paths to relative. The
  deploy builds from **master**; PR-branch changes are not live until merge.
- **Build does not run ESLint.** `npm run build` passes even with
  `react/no-unescaped-entities` warnings (there is pre-existing such debt in
  `app/en/*`). In JSX *text* use `&apos; &lt; &gt;`; inside string literals
  (`title=`, data arrays) raw `' < >` are fine. Backslashes inside
  template-literal code samples must be doubled (`\\`).
- **Verifying a change** (the reliable recipe):

  ```bash
  npm run build
  PORT=4400 npm run start            # vinext start, respects PORT
  curl -s http://localhost:4400/ja/tech/ | grep -c '…'   # use the trailing slash
  ```

  - Use `vinext start`, not a stale `npm run dev` on `:3000`.
  - **A rendered string appears twice in the HTML** (`grep -c` → 2): once in the
    DOM, once in the RSC "flight" payload `<script>`. That is normal doubling, not
    a duplicate — confirm by counting a known-single element too.

## 6. Reviewer's checklist

- Voice: quiet; no competitor mention; no adoption / marketing claims; no
  manifesto; honest about maturity.
- `ja` and `en` both updated and structurally parallel; `ja` meaning preserved.
- Accuracy ledger (§3) re-checked for any REST / cache / DI / SQL claim or code
  sample.
- Built clean; rendered via `vinext start` on trailing-slash URLs; old phrasing
  gone, new phrasing present.
- Static-only (no dynamic Next APIs); asset paths survive the `/learn/` rewrite.
- At most one evocative line per page; everything else earns its place quietly.

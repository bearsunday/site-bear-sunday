# Project knowledge

## Core identity

This site should not explain BEAR.Sunday by comparing it against Symfony or Laravel. The stronger position is to show what BEAR.Sunday is.

The current identity is:

- Web principles inside the application.
- Resource as the unit of application meaning.
- DI, AOP, Context, Link, Embed, cache, schema, and documentation as constraints around Resource.
- Long-term continuity: 2011, 1.x compatibility, and resistance to framework-driven rewrites.
- AI-era value through explicitness, traceability, strict types, and local reasoning.

Useful existing phrases:

- `Webの原則を、アプリケーションの内側まで。`
- `2011年から続く、変えないための設計。`
- `制約が技術破産を遠ざける。`
- `速さは、最適化ではなく設計の帰結。`
- `リソースが、そのままAIの道具になる。`

## Writing preference

The user prefers copy that lets the reader pull the idea from their own experience. Avoid pushy declarations that merely explain the author's theory.

Good direction:

- Start from a real pain, such as too much freedom inside controllers or models.
- Let the reader recognize the problem.
- Then show BEAR.Sunday's constraint as the answer.

Avoid:

- Direct competitor attacks.
- Explaining Symfony/Laravel differences on the site.
- Abstract manifesto paragraphs that do not create reader discovery.
- Reintroducing the removed `Viewは横に並ばない` card unless explicitly requested.

## Symfony / Laravel discussion outcome

The key insight is not that Symfony and Laravel differ from each other. In daily application work, both are often experienced as controller-centered full-stack web frameworks with routing, ORM, templates, services, console commands, and surrounding tools.

The BEAR.Sunday contrast is stronger:

- Typical framework use leaves the placement of application meaning largely to developer discipline.
- BEAR.Sunday puts application meaning in Resource.
- HTML, API, CLI, Tool Use, documentation, cache, and logs are derived from or connected to Resource.

The site should not name competitors for this. It should make the Resource-centered structure self-evident.

## Current approved Resource discipline section

`/architecture` contains a `Resource discipline` section. It currently has:

- `意味はResourceに置く`
- `他者を操作せず、自分を律する`
- `表現に関心を持たない`
- `In / Outを制約で宣言する`

The `Viewは横に並ばない` card was added and then reverted. Do not bring it back as a card without a new explicit request.

## Business value

The business page frames BEAR.Sunday around:

- Sustainability
- Predictability
- Performance
- Flexibility
- Avoiding technical insolvency
- Stable 1.x continuity since 2011
- SQL and DB access quality before shipment
- Traceable `POST {URI}` logs
- Implementation-derived documentation and CI proof that implementation and IDL/docs do not drift

Tone should stay restrained. It may lightly warn about technical insolvency, but not become vulgar or fear-driven.

## Technical value

Important technical points already represented:

- CDN Read Model, not just cache.
- Event-driven content.
- Dependency invalidation across server cache, CDN, and ETag.
- Donut cache and donut-hole cache.
- Resource graph and DataLoader for N+1 batching.
- DI compiler.
- Root object cache.
- Parallel execution of embedded resources, including HTML and JSON representations.
- Resource to API / CLI / Homebrew / Tool Use / MCP / Thrift bridge direction.

Performance should be explained as a result of design, not as post-hoc optimization.

## AI-era value

The AI-era page should focus on:

- Explicitness over popularity of training corpus.
- Strict static analysis: PHPStan/Psalm highest levels, shaped arrays, domain arrays/types.
- Local reasoning through DI and resource boundaries.
- Generated docs and Tool Use from ResourceObject.
- BEAR.ToolUse: ResourceObject to AI tools.

Do not put general DB performance items in the AI section. Those belong to `/tech` or `/business`.


import type { Metadata } from "next";
import { CtaBand, PageHero, PageShell } from "../../_components/site-chrome";

export const metadata: Metadata = {
  title: "Technical Features | BEAR.Sunday",
  description:
    "A comprehensive introduction to BEAR.Sunday's event-driven content, dependency resolution, ETag, CDN-centric Read Model, and donut caching.",
};

const cacheLevels = [
  "Server-side resource cache",
  "CDN shared cache",
  "Client HTTP cache",
];

const dependencyGraph = [
  { name: "Article", depends: "Profile, Comments, Weather" },
  { name: "Comments", depends: "Comment items" },
  { name: "Weather", depends: "Forecast source" },
];

const contextAxes = [
  "prod: production constraints",
  "hal: representation",
  "api: application surface",
  "app: resource namespace",
];

const rayDiMechanics = [
  {
    title: "Key = type + qualifier",
    text: "The same interface is identified as distinct dependencies via Qualifier attributes. The meaning of a dependency is a typed Key, not a string-based runtime branch.",
  },
  {
    title: "Module as binding map",
    text: "Modules are collections of bindings, just like Guice. Install and override to recombine functional units and create graphs per context.",
  },
  {
    title: "Provider and scope",
    text: "Complex creation, lazy initialization, and singleton/prototype lifespans are confined to Providers and Scopes. Consumer objects don't know the creation details.",
  },
  {
    title: "Compiled factories",
    text: "ScriptInjector generates PHP factory code from the dependency graph. In production, startup doesn't interpret the container each time—it runs from the pre-built graph.",
  },
];

const portableResourceFlow = [
  "Pull into vendor as a Composer package",
  "Assemble the Resource client for the required context",
  "Call resources via app:// URIs",
  "Use ResourceObject representations from within the existing application",
];

const portableResourcePoints = [
  {
    title: "Crosses framework boundaries",
    text: "BEAR.Sunday resources aren't HTTP controller actions confined to one framework. If you can inject a Resource client, you can call them by URI from other PHP applications.",
  },
  {
    title: "Microservice without network",
    text: "Independent applications can be integrated—preserving isolation through packages, namespaces, and DI binding—without splitting them into separate processes or HTTP services.",
  },
  {
    title: "Usable for migration and coexistence",
    text: "Call new BEAR.Sunday resources from within existing applications and introduce only the needed features incrementally.",
  },
];

const bridgeDirectionPoints = [
  {
    title: "Don't duplicate API / CLI / Homebrew implementations",
    text: "Rather than adding separate implementations for API sites or CLI commands, transport existing ResourceObjects as APIs or commands. Even as a Homebrew-distributed command, the application's meaning stays in the same resource.",
  },
  {
    title: "Resource is the entry point for Tool / MCP too",
    text: "Rather than building separate function sets for AI, bridge resources to Tool Use. If a new entry point like MCP is needed, what you build is a bridge to resources, not separate business logic.",
  },
  {
    title: "Don't build controllers from IDL",
    text: "The direction isn't: place the IDL first and align controller implementations to it. Resources come first. HTTP, Tool Use, documentation, and schemas carry that meaning outward.",
  },
  {
    title: "Connect multiple languages through bridges",
    text: "BEAR.Thrift lets you use BEAR.Sunday resources from other languages or different PHP versions. Resource generality extends beyond HTTP.",
  },
];

const performancePoints = [
  {
    title: "Stop bad DB access before shipping",
    text: "Because SQL files and parameters are independent, execution plans, full table scans, and inefficient JOINs can be analyzed in CI. Catch DB access problems before they become production slowness.",
  },
  {
    title: "DataLoader batches N+1",
    text: "When linkCrawl constructs a resource graph, per-child-resource DB access is batched by DataLoader. Multiple resource requests are converted into a single efficient query.",
  },
  {
    title: "DI compiler curbs startup cost",
    text: "The dependency graph isn't something to explore at runtime each time. ScriptInjector generates PHP factory code so production starts from a pre-built object graph without interpreting the DI container.",
  },
  {
    title: "Root object cache",
    text: "Serialize and reuse the application root object assembled for a given context across requests. Avoid regenerating the DI container and AOP configuration each time—keep it out of normal request processing.",
  },
  {
    title: "Switch embed representation to parallel execution",
    text: "BEAR.Async lets you switch #[Embed] resources from sequential to parallel fetching without changing resource code. Whether HTML or JSON representation, embedded resources are fetched in parallel—execution strategy changes through Module swap alone.",
  },
];

const compositionPoints = [
  {
    title: "Don't read execution mode",
    text: "No branching on globals like APP_DEBUG or APP_MODE. Behavioral differences are injected as bindings to interfaces.",
  },
  {
    title: "Context only exists during assembly",
    text: "Context strings like prod-hal-api-app are used to generate the object graph. Once created, objects don't know which context they were built for.",
  },
  {
    title: "DIP and ADP applied throughout the framework",
    text: "Not just the application—the framework's package structure also maintains dependency direction. Outer concerns don't reference inner ones.",
  },
  {
    title: "Test the resource, not the representation",
    text: "Both HTML applications and API applications go through the same ResourceObject, so tests call resources by app:// URIs and check body, headers, and links. No need to parse rendered HTML and guess business results.",
  },
];

const sqlFirstClass = [
  {
    title: "Don't hide SQL—make it a first-class citizen",
    text: "In Ray.MediaQuery, SQL is an independent file in var/sql, and the entry point is a typed interface with #[DbQuery]. Not hidden behind an ORM, you can write JOINs, CTEs, window functions, and vendor-specific SQL directly.",
  },
  {
    title: "Contracts enable parallel, divided work",
    text: "The interface (signature, return type, SQL filename) becomes the contract. SQL and application developers proceed in parallel without waiting for each other; the app side can build use cases first with fakes even without a DB.",
  },
  {
    title: "SQL-specialized tools work as-is",
    text: "As independent .sql files, SQL-specialized IDEs like DataGrip can provide schema completion, execution, EXPLAIN, formatting, and refactoring directly. Examine execution plans and indexes decoupled from the PHP runtime.",
  },
  {
    title: "AI can read and write without hidden generation",
    text: "Without dynamic query generation hiding things, AI can directly read and write the interface contract and actual SQL. Human-specialized tools and AI access the same SQL assets the same way.",
  },
];

const flowTestPoints = [
  {
    title: "Tests follow links",
    text: "Rather than hardcoding URIs, follow _links and Location (=affordances) that responses offer. Same navigation as a client. HATEOAS made into executable tests.",
  },
  {
    title: "Aligned to spec (ALPS)",
    text: "Each step is bound to ALPS transitions like #[Alps('goCheckout')]. The test procedure directly becomes a traversal of semantic state transitions.",
  },
  {
    title: "Transport is swapped via DI",
    text: "Whether in-process resources or real HTTP, the resource is the same. Change newResource() to HttpResource and the same scenario runs over real HTTP/JSON.",
  },
  {
    title: "E2E narrows to its strengths",
    text: "'Does the API behave correctly?' is pushed down to the resource layer. Browser E2E shrinks to its proper domain: visual regression, real-browser JS, and auth flows.",
  },
];

export default function TechPage() {
  return (
    <PageShell lang="en">
      <PageHero
        eyebrow="Technology"
        lead="BEAR.Sunday's caching is not a mechanism for temporarily storing responses. It is an architecture that generates inherently static resource representations as Read Models and maintains identity and dependency relationships across the server, CDN, and client layers."
        title="The natural mechanisms of the static Web, brought to dynamic applications."
      />

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-[#1f7a5a]">
              Central idea
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Not caching—Read Model generation.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#3b463d]">
              Content like blog posts, product info, news articles, and profiles appears "dynamic" because
              each request passes through PHP and DB. But if the same resource state yields the same
              representation, it's inherently static. What changes isn't time—it's events.
            </p>
            <p className="mt-5 text-lg leading-8 text-[#3b463d]">
              BEAR.Sunday treats this property as architecture. ResourceObjects generate HTTP representations,
              retain dependency relationships as URI tags, and express identity through ETags. Generated
              representations are placed on server caches and CDNs and served as static content until
              a change event occurs.
            </p>
          </div>

          <div className="rounded-lg border border-black/10 bg-white p-6 shadow-[0_18px_60px_rgba(17,22,17,0.09)]">
            <div className="rounded-md bg-[#111611] p-5 text-white">
              <p className="font-mono text-xs uppercase text-white/54">
                Write model
              </p>
              <p className="mt-2 text-2xl font-black">Database + Commands</p>
            </div>
            <div className="mx-auto h-8 w-px bg-black/20" />
            <div className="rounded-md border border-black/10 bg-[#f4f7f3] p-5">
              <p className="font-mono text-xs uppercase text-[#667068]">
                Projection
              </p>
              <p className="mt-2 text-2xl font-black">
                ResourceObject creates representation
              </p>
            </div>
            <div className="mx-auto h-8 w-px bg-black/20" />
            <div className="grid grid-cols-1 gap-3">
              {cacheLevels.map((level) => (
                <div className="rounded-md border border-black/10 bg-white p-4" key={level}>
                  <p className="font-semibold">{level}</p>
                  <p className="mt-2 text-sm leading-6 text-[#465148]">
                    Cache body, dependency tags, and ETag identity.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#111611] px-5 py-20 text-white sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase text-[#9ee0bb]">
            Event-driven content
          </p>
          <div className="mt-4 grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <h2 className="text-4xl font-black sm:text-5xl">
                Static content with unpredictable timing.
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/76">
                Shorten the TTL and pray it's not stale yet. In many apps, that's what passes for a "caching strategy."
              </p>
              <p className="mt-5 text-lg leading-8 text-white/76">
                The key insight of event-driven content is not conflating unpredictable change timing with
                constantly shifting content. You don't know when an article will be edited. You don't know
                when a comment will be added. But between events, the representation is static.
              </p>
              <p className="mt-5 text-lg leading-8 text-white/76">
                Fastly classified this kind of content as static for an unknown duration, but potentially
                changeable. What's needed isn't a short TTL—it's immediate, programmable purge delivered
                to the CDN from change events the application already knows about.
              </p>
              <p className="mt-5 text-lg leading-8 text-white/76">
                So instead of shortening TTLs to ease anxiety, the application that knows about changes
                invalidates the dependent representations. Without changes, the CDN keeps serving the
                same representation; clients check identity via ETag and take 304 Not Modified when unchanged.
              </p>
            </div>
            <div className="rounded-lg border border-white/16 bg-white/[0.06] p-6">
              <p className="font-mono text-xs uppercase text-[#9ee0bb]">
                Classification
              </p>
              <div className="mt-6 grid grid-cols-1 gap-4">
                <div className="rounded-md border border-white/16 p-5">
                  <h3 className="text-2xl font-black">Inherently static</h3>
                  <p className="mt-3 leading-7 text-white/76">
                    As long as state doesn't change, the same URI yields the same representation. Changes only on events.
                  </p>
                </div>
                <div className="rounded-md border border-white/16 p-5">
                  <h3 className="text-2xl font-black">Inherently dynamic</h3>
                  <p className="mt-3 leading-7 text-white/76">
                    Meaning changes with each request. Personalization, random numbers, current time—the computation process itself is the representation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-lg border border-white/16 bg-white/[0.04] p-6 sm:p-8">
            <p className="font-mono text-xs uppercase text-[#9ee0bb]">
              An actual exchange
            </p>
            <pre className="mt-5 overflow-x-auto font-mono text-xs leading-7 text-white/85 sm:text-sm">
              <code>{`1  GET /article/42                          200  ETag:"a1"  Surrogate-Key: article-42 profile-7
   → CDN stores

2  GET /article/42                          CDN HIT          ← No PHP or DB activity

3  Author edits profile-7
   → PURGE  Surrogate-Key: profile-7        ← Cascading invalidation of dependent article-42

4  GET /article/42                          200  ETag:"b9"   ← Regenerated only this time

5  GET /article/42  If-None-Match:"b9"       304 Not Modified ← Body not sent`}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#f4f7f3] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-[#245c7a]">
              Dependency resolution
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Cascading invalidation reaches both content and ETags.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#3b463d]">
              If content A depends on B, and B depends on C, then a change in C doesn't stop at C's cache.
              B's and A's representations—and their ETags—all show stale identity and must be invalidated.
            </p>
            <p className="mt-5 text-lg leading-8 text-[#3b463d]">
              In BEAR.Sunday, #[Embed] resources and explicitly declared dependency URIs become tags.
              When AOP detects a change, server-side caches and ETags are cascading-invalidated, and
              where possible, the same dependency relationships propagate to CDN Surrogate-Keys.
              Dependency resolution doesn't stay confined inside the server.
            </p>
          </div>
          <div className="rounded-lg border border-black/10 bg-[#f4f7f3] p-6">
            <p className="font-mono text-xs uppercase text-[#667068]">
              Dependency graph
            </p>
            <div className="mt-6 grid grid-cols-1 gap-3">
              {dependencyGraph.map((node) => (
                <div className="rounded-md border border-black/10 bg-white p-5" key={node.name}>
                  <h3 className="text-2xl font-black">{node.name}</h3>
                  <p className="mt-2 font-mono text-sm text-[#667068]">
                    depends on: {node.depends}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-md bg-[#111611] p-5 text-white">
              <p className="font-semibold">
                When the forecast source changes, Weather and Article caches—and their respective ETags—are invalidated across both the server and CDN layers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#e8eef4] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-[#245c7a]">
              Partial read models
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Partial content also becomes part of the Read Model.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#36434c]">
              It's not a binary choice of whether the whole page can be cached. BEAR.Sunday has donut
              caching and donut hole caching, handling cacheable parts, non-cacheable parts, and parts
              that change on different cycles separately.
            </p>
            <p className="mt-5 text-lg leading-8 text-[#36434c]">
              What matters is that partial representation dependencies are also reflected in overall identity.
              When the hole's content changes, only the necessary scope is regenerated, and the overall
              ETag is also updated. The static Web's caching model is extended to the composition of partial representations.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <article className="rounded-lg border border-black/10 bg-white p-6">
              <h3 className="text-2xl font-black">Donut cache</h3>
              <p className="mt-4 leading-7 text-[#465148]">
                When the whole has non-cacheable holes, reuse the unchanging surrounding parts.
              </p>
            </article>
            <article className="rounded-lg border border-black/10 bg-white p-6">
              <h3 className="text-2xl font-black">Donut hole cache</h3>
              <p className="mt-4 leading-7 text-[#465148]">
                When the hole itself is also cacheable, partial resource changes propagate to the overall cache and ETag.
              </p>
            </article>
            <article className="rounded-lg border border-black/10 bg-white p-6">
              <h3 className="text-2xl font-black">Recursive composition</h3>
              <p className="mt-4 leading-7 text-[#465148]">
                Even when A contains B and B contains C, regenerate at minimal cost by reusing everything except the changed C.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase text-[#1f7a5a]">
              Performance and delivery quality
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Speed is a consequence of design, not optimization.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#3b463d]">
              BEAR.Sunday places performance extremely deep in the design. Not after-the-fact optimization
              to go faster—the very existence of SQL, resource graphs, DI graphs, and root objects as
              explicit structures leads to performance. That's why they can be inspected before shipping,
              and at runtime switched to batching, DI compilation, root object caching, and parallelization.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {performancePoints.map((item) => (
              <article className="rounded-lg border border-black/10 bg-white p-6" key={item.title}>
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-4 leading-8 text-[#465148]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#f4f7f3] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase text-[#245c7a]">
              SQL as a first-class citizen
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Don't hide SQL—make it a first-class citizen.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#3b463d]">
              BEAR.Sunday prefers standard technology and doesn't hide SQL behind an ORM. In Ray.MediaQuery,
              SQL is an independent file; the entry point is a typed interface. SQL being a first-class
              citizen changes not just performance inspection (EXPLAIN before shipping) but the very way
              development is done. Contracts enable parallel work; SQL-specialized IDEs and AI both
              access the same SQL assets directly.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {sqlFirstClass.map((item) => (
              <article className="rounded-lg border border-black/10 bg-white p-6" key={item.title}>
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-4 leading-8 text-[#465148]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#e8eef4] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase text-[#245c7a]">
            Transparent parallel execution
          </p>
          <div className="mt-4 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <h2 className="text-4xl font-black sm:text-5xl">
                Don't rewrite code for parallelization.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#36434c]">
                #[Embed] doesn't embed the result of a resource—it embeds the request to a resource,
                i.e., the relationship between resources themselves. So whether to fetch sequentially,
                in parallel via ext-parallel threads, or via Swoole coroutines is the Linker's job.
                The resource class doesn't know it was called in parallel.
              </p>
              <p className="mt-5 text-lg leading-8 text-[#36434c]">
                Because URIs represent intent (What) and execution method (How) is hidden in Modules,
                execution strategy can be swapped in later. A resource written ten years ago benefits
                from parallel execution just by adding a Module. Develop and debug with standard PHP;
                switch to parallel in production through configuration alone.
              </p>
              <p className="mt-5 text-lg leading-8 text-[#36434c]">
                The "function color" problem often discussed in async programming—where a function
                calling an async function must itself become async, propagating throughout the
                codebase—is severed at the resource boundary. The code is the same whether sequential
                or parallel. Only the execution strategy changes.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="rounded-lg border border-black/10 bg-[#101820] p-6 text-white shadow-[0_18px_60px_rgba(16,24,32,0.2)]">
                <p className="font-mono text-xs uppercase text-white/54">
                  sequential vs parallel
                </p>
                <pre className="mt-4 overflow-x-auto font-mono text-xs leading-6 text-[#d9f7e7] sm:text-sm">
                  <code>{`Sequential               Parallel
Request                  Request
 ├ Embed 1 ── 50ms        ├ Embed 1 ─┐
 ├ Embed 2 ── 50ms        ├ Embed 2 ─┤
 ├ Embed 3 ── 50ms        ├ Embed 3 ─┤
 └ Embed 4 ── 50ms        └ Embed 4 ─┘
Response 200ms           Response 50ms`}</code>
                </pre>
              </div>
              <div className="rounded-lg border border-black/10 bg-white p-6">
                <p className="font-mono text-xs uppercase text-[#667068]">
                  runtimes — application code unchanged
                </p>
                <div className="mt-4 grid grid-cols-1 gap-3">
                  <div className="rounded-md border border-black/10 bg-[#f4f7f3] p-4">
                    <p className="font-bold">ext-parallel</p>
                    <p className="mt-1 text-sm leading-6 text-[#465148]">
                      Thread pool. For PHP-FPM / Apache. Just add bin/async.php.
                    </p>
                  </div>
                  <div className="rounded-md border border-black/10 bg-[#f4f7f3] p-4">
                    <p className="font-bold">Swoole</p>
                    <p className="mt-1 text-sm leading-6 text-[#465148]">
                      Coroutines. High concurrency on a persistent server. Install AsyncSwooleModule.
                    </p>
                  </div>
                  <div className="rounded-md border border-black/10 bg-[#f4f7f3] p-4">
                    <p className="font-bold">mysqli</p>
                    <p className="mt-1 text-sm leading-6 text-[#465148]">
                      DB queries only, parallelized. Minimal configuration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <pre className="overflow-x-auto rounded-lg bg-[#101820] p-6 text-sm leading-7 text-[#d9f7e7] shadow-[0_20px_60px_rgba(16,24,32,0.2)]">
              <code>{`class Dashboard extends ResourceObject
{
    #[Embed(rel: 'user', src: '/user{?id}')]
    #[Embed(rel: 'notifications', src: '/notifications{?user_id}')]
    #[Embed(rel: 'stats', src: '/stats{?user_id}')]
    public function onGet(string $id): static
    {
        $this->body['id'] = $id;

        return $this;
    }
}`}</code>
            </pre>
            <div className="rounded-lg border border-black/10 bg-white p-6">
              <p className="leading-8 text-[#465148]">
                These embed declarations change not a single character between sequential and parallel.
                While MVC writes "how to execute" procedurally, BEAR.Sunday declares "relationships
                between resources." Because the declaration is independent of execution strategy,
                swapping strategies doesn't affect the code.
              </p>
              <p className="mt-4 text-sm leading-6 text-[#667068]">
                * BEAR.Async is currently Alpha. ext-parallel requires ZTS PHP and the ext-parallel extension; Swoole requires ext-swoole.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#111611] px-5 py-20 text-white sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase text-[#9ee0bb]">
              Tests that follow links
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              One story travels from resource to HTTP, through the same code.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/76">
              This is not a convenience feature. It's the Web principle (HATEOAS)—where clients follow
              links offered by resources rather than guessing the next operation—made into executable tests.
              Write user stories as link-following flows; swap transport via DI and the same scenario runs
              over real HTTP/JSON, continuing into HTML links/forms.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="font-mono text-xs uppercase text-[#9ee0bb]">
                in-process — follows the affordances
              </p>
              <pre className="mt-3 overflow-x-auto rounded-lg bg-[#101820] p-6 text-xs leading-7 text-[#d9f7e7] sm:text-sm">
                <code>{`class PurchaseFlowTest extends AbstractWorkflowTest
{
    #[Alps('goProduct')]
    public function testProduct(): ResourceObject
    {
        return $this->resource->get('page://self/product', ['id' => 1]);
    }

    #[Alps('doAddCartItem')]
    #[Depends('testProduct')]
    public function testAddToCart(ResourceObject $product): ResourceObject
    {
        // Follow offered links, not hardcoded URIs
        $cart = $this->resource->post(
            $this->linkHref($product, 'doAddCartItem'),
            ['qty' => 2],
        );
        $this->assertSame(Code::CREATED, $cart->code);

        return $cart;
    }

    #[Alps('goCheckout')]
    #[Depends('testAddToCart')]
    public function testCheckout(ResourceObject $cart): ResourceObject
    {
        return $this->follow($cart, 'goCheckout');
    }
}`}</code>
              </pre>
            </div>
            <div>
              <p className="font-mono text-xs uppercase text-[#9ee0bb]">
                real HTTP/JSON — swap newResource() only
              </p>
              <pre className="mt-3 overflow-x-auto rounded-lg bg-[#101820] p-6 text-xs leading-7 text-[#d9f7e7] sm:text-sm">
                <code>{`// Re-run the entire flow over real HTTP/JSON.
// Only newResource() changes. Scenario is inherited.
final class HttpPurchaseFlowTest extends PurchaseFlowTest
{
    protected function newResource(): ResourceInterface
    {
        return new HttpResource(
            '127.0.0.1:8080',
            __DIR__ . '/index.php',
        );
    }
}`}</code>
              </pre>
              <p className="mt-4 leading-7 text-white/70">
                The same test runs both as an in-process resource graph (milliseconds, no browser) and over real HTTP boundaries (including cookies and redirects).
              </p>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {flowTestPoints.map((item) => (
              <article className="rounded-lg border border-white/16 bg-white/[0.06] p-6" key={item.title}>
                <h3 className="text-xl font-black text-[#9ee0bb]">{item.title}</h3>
                <p className="mt-3 leading-7 text-white/76">{item.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-4xl text-sm leading-7 text-white/54">
            * Using the same mechanism, pairing Fake and SQL implementations as "twins" with the same assertions turns migration from a "prayer" into equivalence verification—one example of "everything is injected."
          </p>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-[#1f7a5a]">
              Context-agnostic DI
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Generated objects don't know their mode.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#3b463d]">
              BEAR.Sunday doesn't just use DI as an application convenience feature.
              Built on Ray.Di, which inherits Google Guice's concepts, the framework itself follows DIP and ADP.
              It avoids changing behavior by referencing global modes or configuration at runtime.
            </p>
            <p className="mt-5 text-lg leading-8 text-[#3b463d]">
              Context, like prod-hal-api-app, is a matrix combining environment, representation,
              I/O surface, and application type. But it's used only to assemble the object graph.
              Post-construction objects have no need—and no means—to reference whether they're
              production, HTML, or API.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="rounded-lg border border-black/10 bg-[#f4f7f3] p-6">
              <p className="font-mono text-xs uppercase text-[#667068]">
                context string
              </p>
              <p className="mt-3 text-3xl font-black">prod-hal-api-app</p>
              <div className="mt-5 grid grid-cols-1 gap-3">
                {contextAxes.map((item) => (
                  <div className="rounded-md border border-black/10 bg-white px-4 py-3" key={item}>
                    <p className="font-mono text-sm text-[#344036]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {rayDiMechanics.map((item) => (
                <article className="rounded-lg border border-black/10 bg-white p-5" key={item.title}>
                  <h3 className="text-xl font-black">{item.title}</h3>
                  <p className="mt-3 leading-7 text-[#465148]">{item.text}</p>
                </article>
              ))}
            </div>
            {compositionPoints.map((item) => (
              <article className="rounded-lg border border-black/10 bg-white p-6" key={item.title}>
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-4 leading-7 text-[#465148]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#e8eef4] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-[#245c7a]">
              Application composition
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Integrate multiple applications without erecting HTTP walls.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#36434c]">
              The same set of resources can run as both an HTML application and an API application
              because behavior is recombined through context modules and DI bindings. The resource
              code itself doesn't need to know which representation it's being called under.
            </p>
            <p className="mt-5 text-lg leading-8 text-[#36434c]">
              That means you don't need to build HTML sites and API sites as separate implementations.
              Both HTML and API representations emerge from the same resources, so even screen feature
              tests can check resource state, links, and headers the same way as APIs—without parsing
              HTML strings.
            </p>
            <p className="mt-5 text-lg leading-8 text-[#36434c]">
              Furthermore, you can pull another application in as a vendor package and integrate it
              while preserving independence through namespace and dependency relationships. Without creating
              service boundaries over HTTP for separation, you can assemble independent applications
              into a single object graph following DIP and ADP.
            </p>
            <p className="mt-5 text-lg leading-8 text-[#36434c]">
              This property also works for external calls. Pull BEAR.Sunday-built resources in as a
              package, inject a Resource client into an existing application, and you can call the
              same resources via app:// URIs from code in other PHP frameworks.
            </p>
          </div>
          <div className="rounded-lg border border-black/10 bg-white p-6 shadow-[0_18px_60px_rgba(17,22,17,0.08)]">
            <p className="font-mono text-xs uppercase text-[#667068]">
              same independence, no network
            </p>
            <pre className="mt-4 overflow-x-auto rounded-md bg-[#101820] p-5 font-mono text-xs leading-7 text-[#d9f7e7] sm:text-sm">
              <code>{`// Microservices: across the network
$post = $http->get('https://blog.internal/posts/42');
// → timeouts, retries, serialization, separate deploys

// BEAR.Sunday: pull into vendor, call by URI
composer require acme/blog
$post = $this->resource->get('app://blog/post', ['id' => 42]);
// → same process, no network`}</code>
            </pre>
            <div className="my-6 h-px bg-black/10" />
            <p className="font-mono text-xs uppercase text-[#667068]">
              without an HTTP wall
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4">
              {[
                "MyVendor\\Cms\\Resource",
                "MyVendor\\Blog\\Resource",
                "Acme\\Inventory\\Resource",
              ].map((item) => (
                <div className="rounded-md border border-black/10 bg-[#f4f7f3] p-4" key={item}>
                  <p className="font-mono text-sm font-bold">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-md bg-[#111611] p-5 text-white">
              <p className="leading-7">
                Compose independent applications through packages, namespaces, and DI bindings—not communication protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase text-[#245c7a]">
              Direction of technology
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Resources are the entry point—don't build separate entry points.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#3b463d]">
              In many frameworks, you build separate API controllers alongside HTML, and yet another
              implementation for CLI or AI. In BEAR.Sunday, the direction is reversed. Application
              meaning resides in ResourceObjects; HTTP, HTML, API, CLI, Homebrew commands, Tool Use,
              and multi-language integration become bridges that connect to those resources.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-4">
            {bridgeDirectionPoints.map((item) => (
              <article className="rounded-lg border border-black/10 bg-[#f4f7f3] p-6" key={item.title}>
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-4 leading-8 text-[#465148]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-[#1f7a5a]">
              Portable resources
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Callable as resources from other PHP applications.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#3b463d]">
              BEAR.Sunday ResourceObjects aren't controller actions tied to a specific web framework.
              They are application components identified by URI and called from a Resource client.
              That's why features built with BEAR.Sunday can be pulled into vendor and used from
              existing PHP applications.
            </p>
            <p className="mt-5 text-lg leading-8 text-[#3b463d]">
              This isn't merely a modular monolith. It's a design that achieves resource-level
              independence, reusability, and URI-based call boundaries without building network-spanning microservices.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="rounded-lg border border-black/10 bg-[#f4f7f3] p-6">
              <p className="font-mono text-xs uppercase text-[#667068]">
                call flow
              </p>
              <ol className="mt-5 grid grid-cols-1 gap-3">
                {portableResourceFlow.map((item, index) => (
                  <li className="flex gap-4 rounded-md border border-black/10 bg-white p-4" key={item}>
                    <span className="font-mono text-sm font-bold text-[#1f7a5a]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="leading-7 text-[#344036]">{item}</span>
                  </li>
                ))}
              </ol>
            </div>
            {portableResourcePoints.map((item) => (
              <article className="rounded-lg border border-black/10 bg-white p-6" key={item.title}>
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-4 leading-7 text-[#465148]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111611] px-5 py-20 text-white sm:px-8 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase text-[#9ee0bb]">
            Architecture
          </p>
          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            Caching is not an after-the-fact optimization.
          </h2>
          <p className="mt-6 text-xl leading-9 text-white/78">
            In BEAR.Sunday, caching is not an auxiliary feature to speed up responses.
            It generates inherently static HTTP representations from resources, indicates their identity
            with ETags, maintains their dependency relationships across server and CDN, and invalidates
            them on change events. This is a design that creates the application's Read Model as a
            mechanism of the Web itself.
          </p>
        </div>
      </section>

      <CtaBand lang="en" />
    </PageShell>
  );
}

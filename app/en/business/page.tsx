import type { Metadata } from "next";
import { CtaBand, PageHero, PageShell } from "../../_components/site-chrome";

export const metadata: Metadata = {
  title: "For Business | BEAR.Sunday",
  description:
    "The value BEAR.Sunday brings to business, explained in plain language for non-engineers.",
};

const outcomes = [
  {
    title: "Continuity",
    text: "Even as personnel, requirements, and organizations change, the meaning and dependency relationships of features remain. It preserves a state where you can keep improving, not just build once and stop.",
  },
  {
    title: "Predictability",
    text: "Trace the impact of changes through resources, dependencies, documentation, and operation logs. Estimates, reviews, and incident response become less ambiguous about where to look.",
  },
  {
    title: "High performance",
    text: "Deliver read-heavy information from locations close to users. When nothing changes, CDN and HTTP caching are leveraged to provide fast, congestion-resistant experiences.",
  },
  {
    title: "Flexibility",
    text: "The same features can be used from web screens, APIs, CLIs, and other PHP applications. Adapt to new channels and coexist with existing systems.",
  },
];

const businessReasons = [
  {
    title: "Don't let change costs become business risk",
    text: "Regulations, products, departments, and customer needs change. BEAR.Sunday assumes continuous change and preserves feature boundaries and dependency relationships.",
  },
  {
    title: "Keep options open with standard technology",
    text: "Rather than locking into a specific giant component, it rides on PHP and standard Web mechanisms. You can choose the libraries you need, making it easier to adopt configurations suited to your project and organization.",
  },
  {
    title: "Make data access predictable",
    text: "SQL has decades of proven track record, with accumulated knowledge around execution plans, indexing, and tuning. AI assists with the difficulty of writing; standard technology preserves operational clarity.",
  },
  {
    title: "Reduce performance issues before shipping",
    text: "Since SQL remains an independent asset, execution plan and index reviews can be incorporated into CI and code reviews. Reduce performance risk before discovering slow DB access in production.",
  },
  {
    title: "Make operation logs traceable",
    text: "Every action can be reduced to POST {URI}, allowing you to record who did what to which resource, when, in a consistent format. This becomes a foundation for auditing, incident investigation, and AI-driven analysis.",
  },
  {
    title: "Don't duplicate HTML and API as separate assets",
    text: "The same resource can be connected to both HTML screens and API representations, eliminating the need to implement the same functionality twice. Tests can also directly check feature state and links without parsing HTML strings.",
  },
  {
    title: "Generate documentation from implementation",
    text: "Rather than aligning implementation to an IDL, generate IDL and API documentation from implementation. Because the generated output can be verified in CI, you can prove there is no gap between specification and implementation.",
  },
  {
    title: "Get speed and maintainability from the same design",
    text: "Caching isn't an after-the-fact speed-up—it's built into the design. Deliver fast experiences to users while keeping a change-friendly structure for the development side.",
  },
];

const translations = [
  {
    label: "In technical terms",
    tech: "CDN-centric Read Model",
    plain: "A mechanism that safely delivers frequently-read information from locations close to users.",
  },
  {
    label: "In technical terms",
    tech: "Resource Oriented Architecture",
    plain: "An approach that divides features into understandable units and treats them with the same meaning across Web, API, and CLI.",
  },
  {
    label: "In technical terms",
    tech: "Dependency Injection",
    plain: "A design that avoids rigidly coupling components together, making it easier to change combinations later.",
  },
  {
    label: "In technical terms",
    tech: "SQL-centric data access",
    plain: "Using a standard technology with decades of proven results, enabling both AI assistance and operational tuning.",
  },
  {
    label: "In technical terms",
    tech: "SQL quality gate",
    plain: "A mechanism that inspects execution plans and index issues before they become production incidents, reducing performance risk before shipping.",
  },
  {
    label: "In technical terms",
    tech: "POST {URI} action log",
    plain: "A mechanism that records business operations in URI units, leaving logs usable for auditing, investigation, and improvement.",
  },
  {
    label: "In technical terms",
    tech: "Portable resources",
    plain: "A mechanism that allows built features to be called from other PHP applications, making coexistence with existing systems easier.",
  },
  {
    label: "In technical terms",
    tech: "Application as Documentation",
    plain: "A mechanism that generates IDL, API documentation, and AI-readable context from implementation and verifies in CI that specification and implementation are aligned.",
  },
];

const businessLevers = [
  "Provide web screens, APIs, and CLIs from the same features—avoid dual implementation for screens and APIs",
  "Apply the same tests to screen features as APIs without parsing HTML strings",
  "Incrementally call new BEAR.Sunday resources from within existing frameworks",
  "Deliver read-heavy information from CDN, improving display speed and availability",
  "Continuously tune data access using SQL execution plans and indexes",
  "Analyze SQL files in CI to catch slow DB access before shipping",
  "Record all operations as POST {URI}, leaving traceable audit logs",
  "Generate IDL and documentation from implementation, proving in CI that spec and implementation are aligned",
  "Leverage existing PHP assets while refining structure feature by feature",
  "Leave grounds for AI-driven development, review, and handover in the implementation",
];

const bankruptcySignals = [
  "Even small changes take time to confirm the scope of impact",
  "More budget goes to investigating and adjusting existing code than to adding features",
  "The number of people who can make decisions shrinks as personnel transfer or leave",
  "Inability to keep up with a framework's breaking changes, left stranded on an old version",
  "Wanting to start new channels or AI initiatives, but the existing system acts as a shackle",
];

export default function BusinessPage() {
  return (
    <PageShell lang="en" path="business">
      <PageHero
        eyebrow="For business"
        lead="BEAR.Sunday is not just a framework for engineers. It supports continuity, predictability, high performance, and flexibility as the design foundation for long-lived web applications. This page reads that value in the language of business—as outcomes, costs, and risks."
        title="Long-lasting web services: fast, robust, easy to change."
      />

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase text-[#1f7a5a]">
              Business outcomes
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              The four qualities management needs — by design.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#3b463d]">
              Framework selection isn't just a development team concern.
              Can it be sustained? Can changes be predicted? Is it fast enough? Can it adapt to business changes?
              These business qualities are supported from how the application is built.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-4">
            {outcomes.map((item) => (
              <article
                className="rounded-lg border border-black/10 bg-white p-6 shadow-[0_12px_36px_rgba(17,22,17,0.07)]"
                key={item.title}
              >
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-4 leading-8 text-[#465148]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#e8eef4] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase text-[#245c7a]">
              Speed, resilience, and cost
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Fast experience, resilience, and lower cost — from one design.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#36434c]">
              When nothing has changed, the representation is served from the CDN and the server does no work.
              Even when freshness must be checked every time, an ETag conditional request returns 304 — no
              recomputation, no resending of the body. Compute and network resources translate directly into
              running cost. So the cache design is not merely a speed trick: it lowers cost while raising speed and
              resilience at the same time — a gain for users, operations, and the business alike.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3">
            <article className="rounded-lg border border-black/10 bg-white p-6">
              <p className="font-mono text-xs uppercase text-[#667068]">user</p>
              <h3 className="mt-3 text-2xl font-black">Fast experience</h3>
              <p className="mt-4 leading-8 text-[#465148]">
                Delivered instantly from a CDN close to the user; on return visits, 304 keeps the wait to a minimum.
              </p>
            </article>
            <article className="rounded-lg border border-black/10 bg-white p-6">
              <p className="font-mono text-xs uppercase text-[#667068]">operations</p>
              <h3 className="mt-3 text-2xl font-black">Resilience</h3>
              <p className="mt-4 leading-8 text-[#465148]">
                Under traffic spikes, delivery without computation absorbs most of the load, making the service harder to knock over.
              </p>
            </article>
            <article className="rounded-lg border border-black/10 bg-white p-6">
              <p className="font-mono text-xs uppercase text-[#667068]">business</p>
              <h3 className="mt-3 text-2xl font-black">Lower cost</h3>
              <p className="mt-4 leading-8 text-[#465148]">
                A server that never runs is never billed. Cutting compute and network is, directly, cutting the cost of keeping the service alive.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#111611] px-5 py-20 text-white sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-[#9ee0bb]">
              Why it matters
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Resilience to change protects your profits.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/76">
              The longer a business runs, the more changes its software undergoes. Choosing based on short-term
              cheapness alone means refactoring, incident response, migration, and handover costs will later
              eat into profits. BEAR.Sunday preserves feature meaning and dependency relationships
              to support a continuously changing business.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {businessReasons.map((item) => (
              <article className="rounded-lg border border-white/16 bg-white/[0.06] p-6" key={item.title}>
                <h3 className="text-2xl font-black text-[#9ee0bb]">{item.title}</h3>
                <p className="mt-4 leading-8 text-white/76">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#f4f7f3] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-[#b3262d]">
              Avoid technical insolvency
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Constraints keep technical bankruptcy at bay.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#3b463d]">
              Technical debt can be reduced with a repayment plan. But when tight coupling advances too far,
              dependencies, code, operations, and knowledge become entangled, making it difficult to recover
              with normal improvement budgets. Furthermore, when you can't keep up with a framework's breaking
              changes and are left behind on an old version, it's not just aging—it's a situation close to
              technical bankruptcy that narrows the organization's options.
            </p>
            <p className="mt-5 text-lg leading-8 text-[#3b463d]">
              BEAR.Sunday separates features as resources, assembles dependencies externally, and preserves
              reasons for change in traceable form. It's a framework for maintaining a structure that resists
              breakdown through daily changes and continuous updates.
            </p>
            <div className="mt-8 border-l-4 border-[#b3262d] pl-5">
              <h3 className="text-2xl font-black">
                A design for not changing, ongoing since 2011.
              </h3>
              <p className="mt-4 text-lg leading-8 text-[#3b463d]">
                Rather than breaking its foundations to follow trends, BEAR.Sunday has evolved while preserving
                1.x compatibility. For long-running applications, not being forced to rebuild at the framework's
                convenience is immense value—both technically and commercially.
              </p>
            </div>
          </div>
          <div className="rounded-lg border border-black/10 bg-white p-6 shadow-[0_12px_36px_rgba(17,22,17,0.07)]">
            <p className="font-mono text-xs uppercase text-[#667068]">
              early warning signs
            </p>
            <ul className="mt-5 grid grid-cols-1 gap-3">
              {bankruptcySignals.map((item) => (
                <li className="flex gap-3 rounded-md border border-black/10 bg-[#f4f7f3] p-4" key={item}>
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#b3262d]" />
                  <span className="leading-7 text-[#344036]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase text-[#245c7a]">
            Business-critical technology
          </p>
          <h2 className="mt-4 max-w-4xl text-4xl font-black sm:text-5xl">
            Technology that ties directly to the business.
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-[#3b463d]">
            Technical features return to the business as speed, availability, refactoring costs, and ease of handover.
            BEAR.Sunday's design doesn't stay inside the development team—it directly connects to service continuity.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-2">
            {translations.map((item) => (
              <article className="rounded-lg border border-black/10 bg-[#f4f7f3] p-6" key={item.tech}>
                <p className="text-sm font-semibold uppercase text-[#b3262d]">
                  {item.label}
                </p>
                <h3 className="mt-3 text-2xl font-black">{item.tech}</h3>
                <p className="mt-4 text-lg leading-8 text-[#344036]">
                  {item.plain}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#e8eef4] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-[#245c7a]">
              Business leverage
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              One functional asset, many outcomes.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#36434c]">
              In BEAR.Sunday, features aren't confined to specific screens or controllers.
              A resource built once can be deployed with the same meaning to web screens, APIs, CLIs, operational tools, and documentation.
              This is not mere implementation convenience—it's reuse of development investment.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="rounded-md bg-[#245c7a] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#1c495f]"
                href="/en/value"
              >
                See value from mechanism
              </a>
              <a
                className="rounded-md border border-[#245c7a]/30 bg-white px-5 py-3 text-center text-sm font-semibold text-[#111611] transition hover:bg-[#f8fbfd]"
                href="/en/tech"
              >
                See technical details
              </a>
            </div>
          </div>
          <ul className="grid grid-cols-1 gap-3">
            {businessLevers.map((item) => (
              <li className="flex gap-3 rounded-lg border border-black/10 bg-white p-5" key={item}>
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#1f7a5a]" />
                <span className="leading-7 text-[#344036]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-[#1f7a5a]">
              Adoption message
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              The reason to adopt is continuity, not trends.
            </h2>
          </div>
          <div className="rounded-lg border border-black/10 bg-[#f4f7f3] p-6">
            <p className="text-lg leading-8 text-[#3b463d]">
              The reason to choose BEAR.Sunday isn't because it's technically rare.
              It delivers fast, stable experiences to users, preserves a change-friendly structure
              for the development team, and gives management options to curb future refactoring costs
              and migration risk. The technology for that is deeply embedded in the framework.
            </p>
          </div>
        </div>
      </section>

      <CtaBand lang="en" />
    </PageShell>
  );
}

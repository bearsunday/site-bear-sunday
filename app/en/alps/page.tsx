import type { Metadata } from "next";
import { CtaBand, PageHero, PageShell } from "../../_components/site-chrome";

export const metadata: Metadata = {
  title: "ALPS — Place Meaning in One Place | BEAR.Sunday",
  description:
    "ALPS (Application-Level Profile Semantics) as the SSOT of meaning, from which BEAR.Sunday projects implementation, documentation, and AI instruments.",
};

const alpsWrites = [
  {
    title: "Vocabulary",
    text: "What does 'cart' mean in this application? Business language (ubiquitous language), placed in a form readable by both humans and machines.",
  },
  {
    title: "States",
    text: "What states does the application have? Not screens—states as meaning.",
  },
  {
    title: "Transitions and their nature",
    text: "Transitions between states, and whether each is safe (observation only), idempotent (same result when repeated), or unsafe (irreversible change). REST semantics directly become the vocabulary.",
  },
  {
    title: "What it can't write = what it doesn't compete with",
    text: "It can't describe screen layouts, persistence methods, or performance requirements. Precisely because it can't, it competes with no artifact and becomes a shared conduit. The list of things it can't write is the design of ALPS.",
  },
];

const threeDoors = [
  {
    title: "Design — MCP",
    text: "AI agents query, verify, and edit. Rather than passing the entire document, ask 'What transitions are available from this state?' and receive only the 200 needed tokens. Don't read about the model—converse with it.",
  },
  {
    title: "Edit — LSP",
    text: "Humans touch the same intelligence. Broken references are warned on the spot; concept renames cascade to all references. From intent expression to meaning confirmation, syntax as an intermediary disappears.",
  },
  {
    title: "Execute — Hypermedia",
    text: "The running application itself carries semantically structured responses. Agents operating in production ground themselves in the same meaning model that designed the system.",
  },
];

export default function AlpsPage() {
  return (
    <PageShell lang="en" path="alps">
      <PageHero
        eyebrow="Semantic SSOT"
        lead="Code has become cheap. But meaning—'what should be built'—remains expensive. The same business fact gets copied into specs, code, tests, DB constraints, and FAQs—in separate dialects every time. ALPS is a small specification that writes only that meaning. BEAR.Sunday projects implementation, documentation, and AI instruments from here."
        title="Place meaning in one place."
      />

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase text-[#b3262d]">
              The thin waist
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              The wasp waist. Many entrances, many exits, connected at a single point.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#3b463d]">
              Naively connecting sources (stories, legacy code, domain) to artifacts (diagrams, schemas, code, instruments)
              yields N×M combinations. Pass through a single waist of pure meaning in between, and it collapses to N+M—all
              transformations converge at a single point. Same shape as IP for the Internet, LLVM IR for compilers.
              ALPS is the waist for "application meaning."
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-2xl">
            <div className="rounded-lg border border-black/10 bg-[#f4f7f3] p-5 text-center">
              <p className="font-mono text-xs uppercase text-[#667068]">N sources</p>
              <p className="mt-2 font-semibold leading-7">
                user stories ・ legacy code ・ domain ・ requirements
              </p>
            </div>
            <p className="py-2 text-center font-mono text-xs text-[#667068]">converge ↓</p>
            <div className="mx-auto max-w-sm rounded-lg border-2 border-[#b3262d] bg-[#111611] p-5 text-center text-white">
              <p className="font-mono text-xs uppercase text-[#9ee0bb]">
                ALPS — wasp waist / thin waist
              </p>
              <p className="mt-2 text-2xl font-black">SSOT of meaning</p>
              <p className="mt-2 text-sm leading-6 text-white/76">
                vocabulary ・ states ・ transitions (safe・idempotent・unsafe)
              </p>
            </div>
            <p className="py-2 text-center font-mono text-xs text-[#667068]">project ↓</p>
            <div className="rounded-lg border border-black/10 bg-[#f4f7f3] p-5 text-center">
              <p className="font-mono text-xs uppercase text-[#667068]">M projections</p>
              <p className="mt-2 font-semibold leading-7">
                Diagrams ・ OpenAPI ・ JSON Schema ・ llms.txt ・ Fakes ・ Tests ・ Code ・ MCP/Tool ・ Hypermedia
              </p>
            </div>
            <p className="mt-6 text-center text-sm leading-7 text-[#465148]">
              Naive connection:{" "}
              <span className="font-mono font-bold">N×M</span>. One waist:{" "}
              <span className="font-mono font-bold">N+M</span>.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#e8eef4] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-[#245c7a]">
              What ALPS writes (and won&apos;t)
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Only vocabulary, states, and transitions. Deliberately boring.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#36434c]">
              ALPS (Application-Level Profile Semantics) is a small specification born from the lineage of REST
              and hypermedia design, by Amundsen et al. It can write essentially three things. Intentionally boring,
              and that boredom is designed.
            </p>
            <pre className="mt-8 overflow-x-auto rounded-lg bg-[#101820] p-6 text-sm leading-7 text-[#d9f7e7] shadow-[0_20px_60px_rgba(16,24,32,0.2)]">
              <code>{`{ "id": "Cart", "type": "semantic", "title": "Shopping Cart",
  "tag": "flow-checkout",
  "descriptor": [{ "href": "#doAddItem" }] },

{ "id": "doAddItem", "type": "unsafe", "rt": "#Cart",
  "doc": "Add an item to the cart" }`}</code>
            </pre>
            <p className="mt-4 text-sm leading-6 text-[#465148]">
              Which table it's saved to, which screen it appears on—none of that is written. There's no place to write it.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {alpsWrites.map((item) => (
              <article className="rounded-lg border border-black/10 bg-white p-6" key={item.title}>
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-3 leading-8 text-[#465148]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase text-[#1f7a5a]">
              Projection &amp; tags
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              One model, three queries.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#3b463d]">
              Each descriptor can carry free tags. flow-checkout for checkout flows, actor-guest for guest-allowed operations,
              src-legacy for legacy-derived concepts. Then "a state transition diagram for checkout only" or
              "the system as seen by guests" aren't newly authored documents—they're projection queries against the same model.
            </p>
            <p className="mt-5 text-lg leading-8 text-[#3b463d]">
              The diagram for sales, the diagram for security review, the diagram for migration planning—these aren't three
              separate documents but three queries against one model. "One model, many views"—because only meaning goes into
              the model and the rest is left to projection, the model stays small and governable by humans.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#111611] px-5 py-20 text-white sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase text-[#9ee0bb]">
              Three doors
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              One model, three doors.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/76">
              If meaning resides in one place, how does each role access it? The answer: through different protocols
              for different phases.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3">
            {threeDoors.map((item) => (
              <article className="rounded-lg border border-white/16 bg-white/[0.06] p-6" key={item.title}>
                <h3 className="text-2xl font-black text-[#9ee0bb]">{item.title}</h3>
                <p className="mt-4 leading-8 text-white/76">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#f4f7f3] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-[#245c7a]">
              The reader arrived
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              The reader HATEOAS was waiting for has just arrived.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#3b463d]">
              When HATEOAS was formalized in 2000, it envisioned "machine clients" that could read meaning
              and autonomously choose the next transition. That reader didn't appear for over twenty years.
              Humans needed UIs; machines were too dumb.
            </p>
            <p className="mt-5 text-lg leading-8 text-[#3b463d]">
              That reader has now arrived—and through the very same technology that made code cheap. Large language
              models are both the force that turned meaning drift into a crisis, and simultaneously the reader that
              finally makes keeping meaning machine-readable a worthwhile investment. The crisis and the conditions
              for its solution arrived together, carried by the same technology.
            </p>
          </div>
          <aside className="rounded-lg border-l-4 border-[#b3262d] bg-white p-6">
            <p className="font-mono text-xs uppercase text-[#b3262d]">An honest caveat</p>
            <p className="mt-3 leading-8 text-[#3b463d]">
              Making a single source of truth is also a tradeoff. With distributed copies, drift is local, slow,
              and independent of each other. With a condensed original, drift is global, instantaneous, and correlated.
              In exchange, the surface you need to inspect becomes one.
            </p>
            <p className="mt-4 leading-8 text-[#3b463d]">
              The waist doesn't eliminate governance—it condenses governance to a single point. That's why you need
              to declare the vocabulary itself and have machine-checkable detectors. This is a tradeoff that
              accepts a single point of failure—not an unconditional improvement.
            </p>
          </aside>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-[#1f7a5a]">
              Where BEAR sits
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              BEAR.Sunday sits on the projection side of the waist.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#3b463d]">
              BEAR.Sunday's strength is the lower half—projection. From ResourceObjects come HAL and hypermedia (runtime),
              ApiDoc, OpenAPI, JSON Schema, llms.txt (documentation), and ToolUse/MCP (AI instruments).
              With ALPS as the SSOT, code, documentation, and tools are all projected from the same meaning—
              implementation and docs don't drift apart. You can even prove in CI that "there is no gap."
            </p>
            <p className="mt-5 text-lg leading-8 text-[#3b463d]">
              Rather than absorbing meaning and rebuilding it, you place it at the waist as an independent standard
              and connect to it. This is the culmination of "don't absorb—connect." The work of excavating meaning
              itself (the upper half) is the job of ALPS and its dedicated tools.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <a
              className="rounded-lg border border-black/10 bg-[#f4f7f3] p-6 transition hover:bg-white"
              href="https://www.app-state-diagram.com/"
            >
              <h3 className="text-2xl font-black">App State Diagram →</h3>
              <p className="mt-3 leading-7 text-[#465148]">
                A tool that draws state transition diagrams from ALPS, used to excavate and project meaning. Proof of "meaning as intermediate representation" lives here.
              </p>
            </a>
            <a
              className="rounded-lg border border-black/10 bg-[#f4f7f3] p-6 transition hover:bg-white"
              href="http://alps.io/"
            >
              <h3 className="text-2xl font-black">ALPS Spec →</h3>
              <p className="mt-3 leading-7 text-[#465148]">
                The official specification of Application-Level Profile Semantics. A minimal grammar of vocabulary, states, and transitions.
              </p>
            </a>
            <a
              className="rounded-lg border border-black/10 bg-[#f4f7f3] p-6 transition hover:bg-white"
              href="/en/ai-era"
            >
              <h3 className="text-2xl font-black">Back to AI Era value →</h3>
              <p className="mt-3 leading-7 text-[#465148]">
                How resources become AI instruments as-is, and REST semantics as a safety model.
              </p>
            </a>
          </div>
        </div>
      </section>

      <CtaBand lang="en" />
    </PageShell>
  );
}

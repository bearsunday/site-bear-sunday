import type { Metadata } from "next";
import { CtaBand, PageHero, PageShell } from "../../_components/site-chrome";

export const metadata: Metadata = {
  title: "Web Principles & REST | BEAR.Sunday",
  description:
    "URI, uniform interface, hypermedia. BEAR.Sunday takes REST—the architecture that has supported the Web for a quarter century—and applies it as a design constraint not just for external APIs but for the entire application.",
};

const methodRows = [
  {
    method: "GET",
    safe: "Safe",
    idempotent: "Idempotent",
    note: "Reads state. Does not change the resource.",
  },
  {
    method: "POST",
    safe: "—",
    idempotent: "—",
    note: "Changes state. Not idempotent; repeated execution may yield different results.",
  },
  {
    method: "PUT",
    safe: "—",
    idempotent: "Idempotent",
    note: "Places the entire representation at the URI (creates if absent). Same result every time.",
  },
  {
    method: "PATCH",
    safe: "—",
    idempotent: "—",
    note: "Applies a diff.",
  },
  {
    method: "DELETE",
    safe: "—",
    idempotent: "Idempotent",
    note: "Deletes. Idempotent like PUT.",
  },
  {
    method: "OPTIONS",
    safe: "Safe",
    idempotent: "Idempotent",
    note: "Inquires about required parameters and responses.",
  },
];

const classicPillars = [
  {
    title: "Resource identification",
    text: "Everything is identified by URI. app://self/user points to the intent 'I want user information,' while How (MySQL or Redis, how to fetch) is hidden from the application.",
  },
  {
    title: "Manipulation through representations",
    text: "Clients don't touch resources directly—they operate through representations. State is separated from representation; the same state can yield HTML, JSON, HAL, and CLI.",
  },
  {
    title: "Self-descriptive messages",
    text: "Method safety, idempotency, media types, and status codes carry meaning in the message itself. Recipients can interpret the message without guessing hidden context.",
  },
  {
    title: "Hypermedia (HATEOAS)",
    text: "Resources present what can be done next (affordances) as links. Clients navigate application state by following the offered links rather than guessing the next transition.",
  },
];

export default function RestPage() {
  return (
    <PageShell lang="en" path="rest">
      <PageHero
        eyebrow="Web principles"
        lead="URI, uniform interface, hypermedia. REST is a battle-tested design that has supported the Web for a quarter century. BEAR.Sunday makes it a constraint not just for external APIs but for the entire interior of your application. Not because it's new—but because its correctness endures."
        title="The most time-tested technology, as your design's backbone."
      />

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase text-[#1f7a5a]">
              Uniform interface
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              The Web was right from the start.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#3b463d]">
              REST is not a new technology. The concept of a collection of resources connected by links
              has been part of the Web since the 1990s. At its core, the uniform interface refers
              not to methods alone, but to four constraints. BEAR.Sunday applies these constraints
              consistently—not just to external APIs, but to the interior of the application as well.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
            {classicPillars.map((item) => (
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
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-[#245c7a]">
              Method semantics
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Six verbs, each carrying meaning.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#36434c]">
              At the heart of self-descriptive messages lies method semantics. REST methods are not CRUD
              on tables—they are operations on application state. Each method is defined by whether it is
              safe (it does not change state) and whether it is idempotent (repeating it yields the same result). These
              properties are not mere convention—they become the rationale that pays off later. GET is
              safe, so it can be freely cached and freely invoked by AI. State-changing operations are
              handled differently based on idempotency. The same semantics apply in both caching strategy
              and AI safety design.
            </p>
          </div>
          <div className="overflow-x-auto rounded-lg border border-black/10 bg-white p-2 shadow-[0_12px_36px_rgba(17,22,17,0.07)]">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-black/10 font-mono text-xs uppercase text-[#667068]">
                  <th className="px-3 py-3">Method</th>
                  <th className="px-3 py-3">Safe</th>
                  <th className="px-3 py-3">Idempotent</th>
                  <th className="px-3 py-3">Meaning</th>
                </tr>
              </thead>
              <tbody>
                {methodRows.map((row) => (
                  <tr className="border-b border-black/5 align-top" key={row.method}>
                    <td className="px-3 py-3 font-mono font-bold text-[#111611]">
                      {row.method}
                    </td>
                    <td className="px-3 py-3 font-semibold text-[#1f7a5a]">
                      {row.safe}
                    </td>
                    <td className="px-3 py-3 font-semibold text-[#245c7a]">
                      {row.idempotent}
                    </td>
                    <td className="px-3 py-3 leading-6 text-[#465148]">
                      {row.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-[#1f7a5a]">
              Hypermedia
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Clients follow links—they don't guess.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#3b463d]">
              In hypermedia, resources present not just state but also what operations are available next
              (affordances). In HAL, _links serves this role, with rel indicating the type of relationship.
              Clients follow the links that resources offer rather than guessing what they can do next.
            </p>
            <p className="mt-5 text-lg leading-8 text-[#3b463d]">
              #[Embed] goes further. It doesn't embed the result of a resource—it embeds the request to
              a resource, i.e., the relationship between resources itself. This distinction is what later
              enables parallel execution.
            </p>
          </div>
          <pre className="overflow-x-auto rounded-lg bg-[#101820] p-6 text-sm leading-7 text-[#d9f7e7] shadow-[0_20px_60px_rgba(16,24,32,0.25)]">
            <code>{`{
  "_links": {
    "self":   { "href": "/article/42" },
    "author": { "href": "/profile/7" },
    "next":   { "href": "/article/43" }
  },
  "_embedded": {
    "comments": { "_links": { "self": { "href": "/article/42/comments" } } }
  },
  "title": "Because Everything is a Resource"
}`}</code>
          </pre>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#f4f7f3] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase text-[#245c7a]">
              Browsable, headless REST
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              An explorable, self-describing application from the root.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#3b463d]">
              Resources written in HAL function as a headless REST application.
              Like navigating a website, you can reach every resource simply by following links from the root.
              The API describes itself; documentation can be discovered from the API itself.
              Humans, console curl commands, and AI agents all navigate the same way.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3">
            <article className="rounded-lg border border-black/10 bg-white p-6">
              <h3 className="text-2xl font-black">Self-descriptive</h3>
              <p className="mt-4 leading-8 text-[#465148]">
                Links, schemas, and documentation are derived from the resource itself. Prevents
                specification and implementation from existing separately and drifting apart.
              </p>
            </article>
            <article className="rounded-lg border border-black/10 bg-white p-6">
              <h3 className="text-2xl font-black">Explorable</h3>
              <p className="mt-4 leading-8 text-[#465148]">
                Follow links from the root to related resources. You don't need to load the whole picture
                at once—just trace the necessary relationships in order.
              </p>
            </article>
            <article className="rounded-lg border border-black/10 bg-white p-6">
              <h3 className="text-2xl font-black">Testable around state</h3>
              <p className="mt-4 leading-8 text-[#465148]">
                Because representation and state are separated, you can directly inspect body, headers,
                and links even for HTML representations. No need to parse rendered strings and guess results.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#111611] px-5 py-20 text-white sm:px-8 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase text-[#9ee0bb]">
            Why the classics still win
          </p>
          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            The classics had already prepared the modernity no one foresaw.
          </h2>
          <p className="mt-6 text-xl leading-9 text-white/80">
            Declaring relationships alone separates intent (What) from execution (How). That's why
            embedded resources can be fetched in parallel, resources become AI instruments as-is,
            multiple representations emerge from the same meaning, and evolution can continue with
            backward compatibility intact. These aren't bolt-on features—they are the result of
            accepting the Web's original nature as a design constraint.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              className="rounded-md bg-[#9ee0bb] px-5 py-3 text-center text-sm font-semibold text-[#111611] transition hover:bg-[#c0f0d3]"
              href="/en/tech"
            >
              See as parallelism
            </a>
            <a
              className="rounded-md border border-white/20 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
              href="/en/ai-era"
            >
              See as AI instruments
            </a>
          </div>
        </div>
      </section>

      <CtaBand lang="en" />
    </PageShell>
  );
}

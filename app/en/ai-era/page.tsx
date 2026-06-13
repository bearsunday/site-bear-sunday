import type { Metadata } from "next";
import { CtaBand, PageHero, PageShell } from "../../_components/site-chrome";

export const metadata: Metadata = {
  title: "AI Era | BEAR.Sunday",
  description:
    "The value of BEAR.Sunday's declarativity, explicitness, traceability, and Tool Use in the AI era.",
};

const values = [
  {
    title: "Declarative",
    text: "Attributes, JSON Schema, Links, Embeds, Cacheable, and more declare application meaning in code. AI can ground itself in declared meaning rather than guessing hidden conventions.",
  },
  {
    title: "Explicit",
    text: "onGet / onPost, constructor injection, DbQuery, and context modules make inputs, dependencies, and runtime configuration explicit. The scope of review extends beyond the inside of a single function.",
  },
  {
    title: "Traceable",
    text: "URIs, resources, links, schemas, and documentation all connect to the same model. Trace the impact of changes from implementation all the way to API docs and llms.txt.",
  },
  {
    title: "Strict types",
    text: "Built on high static analysis levels from PHPStan and Psalm, meaning is carried not as bare arrays but as shaped arrays, domain arrays, and domain types. Types themselves become AI context.",
  },
];

const aiReasoning = [
  {
    title: "Training volume is no substitute for context",
    text: "Popular frameworks have lots of public code. But that corpus mixes different versions, design philosophies, and quality levels. AI picking up average patterns doesn't guarantee the right judgment for your current application.",
  },
  {
    title: "From searchable knowledge to actionable context",
    text: "Stack Overflow-style collective wisdom had great value in an era of hunting for implementation fragments. In the AI era, what matters more than external fragments is whether the codebase in front of you provides enough grounding for AI to reason correctly.",
  },
  {
    title: "Explicitness aids clean code",
    text: "In BEAR.Sunday, interfaces, ResourceObjects, Modules, JSON Schema, API docs, and llms-full.txt become explicitly designed information for AI to read. Code can be assembled from implementation-connected evidence, not guesswork.",
  },
  {
    title: "Locality lowers reasoning cost",
    text: "DI makes dependencies visible in constructors and Modules. Responsibilities are divided among Resource, Query, and Interceptor. Without having to read a massive whole picture, it's easier to make judgments from the local context of what's being changed.",
  },
];

const architectureEssences = [
  {
    title: "The essence of Clean Architecture",
    text: "Dependency direction is controlled by interfaces and DI modules. The framework, DB, HTML, API, CLI, and caching are external details. AI can read what is application meaning and what are replaceable details as separate concerns.",
  },
  {
    title: "The essence of CQS / CQRS",
    text: "It extracts only the core: optimal models differ between reads and writes. SQL defines projections; PHP adds types and behavior to read models that are disposable. State changes and invariants can be reasoned about as the responsibility of the command/write path.",
  },
  {
    title: "The essence of DDD",
    text: "URIs, Resources, interfaces, domain types, and namespaces leave business vocabulary and boundaries in the code. Not a heavy ritual—ubiquitous language and bounded context clues become readable to both AI and humans.",
  },
];

const mediaQueryPoints = [
  {
    title: "Interface becomes the contract",
    text: "A DbQuery interface shows what the application is asking for. Callers can depend on the method signature and return type rather than how SQL is assembled.",
  },
  {
    title: "SQL becomes the projection",
    text: "JOINs, CTEs, window functions, aggregations, and screen-specific columns are explicit as SQL files, not hidden query generation. AI can read what actually executes.",
  },
  {
    title: "Return types signal intent",
    text: "Row lists, single rows, hydrated objects, void, AffectedRows, pagination, custom wrappers—the return type declares the intent: fetch, hydrate, wrap, or ignore.",
  },
  {
    title: "Read models can be tested in small units",
    text: "SQL, factories, domain objects, and application can be verified layer by layer. Application tests can fake interfaces with typed return values and focus on use cases.",
  },
  {
    title: "Embed / crawl declares information structure",
    text: "Related content structure is declared with Links, Embeds, crawl names, and app:// URIs. AI can trace the resource graph left in the implementation rather than guessing relationships by observing HTML.",
  },
];

const toolUsePoints = [
  {
    title: "Generate Tool definitions from ResourceObjects",
    text: "JSON Schema-based tool definitions can be generated from existing resource classes. Rather than building separate function sets for AI, the application's actual capabilities become instruments.",
  },
  {
    title: "Specify usable features by URI",
    text: "Select resources to expose by URI—app://self/user, page://self/search, etc. #[Tool] and #[Exclude] leave the scope of AI-accessible features in the code.",
  },
  {
    title: "Descriptions come from the implementation",
    text: "Parameter descriptions and constraints are assembled from JSON Schema, PHPDoc, and ALPS profiles. AI reads implementation-connected descriptions rather than guessing inputs.",
  },
  {
    title: "Confirmation gates for destructive operations",
    text: "Tools with confirm require human approval before execution. Streaming Agents return confirmation events and default to rejection if no response arrives—safe by default.",
  },
  {
    title: "Filter large results before passing",
    text: "Filters can summarize tool results before passing them to the LLM. Pass only the needed fields from large search results or lists, preserving token efficiency and information design.",
  },
  {
    title: "Auditable invocations",
    text: "ToolCallObserver can observe dispatches including successes, errors, exceptions, and unknown tools. Audit logs, metrics, and latency measurement can be implemented in the application's own context.",
  },
];

const strictTypePoints = [
  "Use shaped arrays and domain types instead of bare arrays to make representation shapes explicit",
  "Catch ambiguous value mixing early with PHPStan and Psalm at high static analysis levels",
  "Connect interfaces, PHPDoc, and JSON Schema to align vocabulary across implementation, tests, and documentation",
  "When AI completes code, types and shapes narrow the input, output, and scope of change",
];

const agentWorkflow = [
  "Discover target features from Resource URIs",
  "Read onGet / onPost inputs and outputs",
  "Check types and shapes via PHPStan / Psalm",
  "Check DbQuery interface and SQL file projections",
  "Trace resource graphs declared by Link / Embed / crawl",
  "Check tools and confirmation conditions exposed by BEAR.ToolUse",
  "Check representation contracts via JSON Schema",
  "Check runtime differences via DI modules",
  "Reflect change impact into tests and documentation",
];

const restAgentPoints = [
  {
    title: "Safe operations freely, dangerous ones with confirmation",
    text: "Let agents freely call safe, idempotent operations like GET, and gate state-changing operations with confirm. REST method classification directly becomes the tool permission model.",
  },
  {
    title: "ALPS turns meaning into filters",
    text: "From safe/idempotent transition information in ALPS profiles, you can narrow the tools passed at runtime. Read-only mode can be derived from resource semantics, not ad-hoc decisions.",
  },
  {
    title: "Agents traverse the resource graph",
    text: "In the same structure that hypermedia lets clients follow links, agents traverse URIs and links to investigate and operate. The resource graph directly becomes the agent's map.",
  },
  {
    title: "Delegate to specialized agents",
    text: "A coordinator can call specialized agents like ask_critic or ask_editor as tools. Different-role specialists—design review and copy editing—can be orchestrated.",
  },
  {
    title: "Persist context across invocations",
    text: "Maintain conversation history across multiple executions, allowing multi-stage workflows of investigation, review, and revision to proceed without rebuilding context each time.",
  },
  {
    title: "Per-execution policy variation",
    text: "Narrow the list of provided tools per execution. Apply read-only, cost caps, and safety policies without changing the agent itself.",
  },
];

export default function AiEraPage() {
  return (
    <PageShell lang="en" path="ai-era">
      <PageHero
        eyebrow="AI-ready architecture"
        lead="When AI agents read, modify, and explain code, meaning that remains in the code matters more than ambiguous conventions. BEAR.Sunday preserves application meaning as resources, attributes, schemas, and links."
        title="Toward applications AI doesn't have to guess about."
      />

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 lg:grid-cols-4">
          {values.map((value) => (
            <article
              className="rounded-lg border border-black/10 bg-white p-6 shadow-[0_12px_36px_rgba(17,22,17,0.07)]"
              key={value.title}
            >
              <h2 className="text-3xl font-black text-[#b3262d]">{value.title}</h2>
              <p className="mt-5 leading-8 text-[#465148]">{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#e8eef4] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase text-[#245c7a]">
              Design principles for AI
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Design principles become AI's decision material.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#36434c]">
              BEAR.Sunday is not a framework for brandishing names like Clean Architecture, CQS/CQRS, or DDD.
              But the dependency direction, read/write separation, and business vocabulary boundaries that
              those approaches have emphasized become powerful clues in an era where AI makes change decisions.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3">
            {architectureEssences.map((item) => (
              <article className="rounded-lg border border-black/10 bg-white p-6" key={item.title}>
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-4 leading-8 text-[#465148]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase text-[#1f7a5a]">
              Explicit contracts
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Contracts and information structures that AI can read.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#3b463d]">
              Ray.MediaQuery doesn't hide SQL behind object abstractions.
              Interfaces show the contract, SQL files show the projection, and return types show how results are handled.
              AI assistants don't have to reverse-engineer hidden query generation.
              Relationships between resources are also declared as Links, Embeds, crawls, and URIs, so
              information structure can be traced from the implementation.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3">
            {mediaQueryPoints.map((item) => (
              <article className="rounded-lg border border-black/10 bg-[#f4f7f3] p-6" key={item.title}>
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-4 leading-8 text-[#465148]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#111611] px-5 py-20 text-white sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase text-[#9ee0bb]">
              Tool-ready resources
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Resources become AI instruments as-is.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/76">
              BEAR.ToolUse generates Tool Use definitions for AI agents from BEAR.Sunday ResourceObjects.
              Meaning expressed through URIs, JSON Schema, ALPS, PHPDoc, and attributes becomes AI-executable instruments.
              It doesn't depend on any specific LLM—it composes the agent loop as an application-side interface.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {toolUsePoints.map((item) => (
              <article className="rounded-lg border border-white/16 bg-white/[0.06] p-6" key={item.title}>
                <h3 className="text-2xl font-black text-[#9ee0bb]">{item.title}</h3>
                <p className="mt-4 leading-8 text-white/76">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase text-[#b3262d]">
              REST semantics as a safety model
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              REST semantics directly become the AI safety model.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#3b463d]">
              Resources can become instruments not because new mechanisms were bolted on. It's because URIs,
              uniform interface, types, JSON Schema, and ALPS already have the shape of tool definitions. And REST's
              long-standing method semantics—safe and idempotent—provide the rationale for deciding what agents
              can freely call and what requires confirmation. BEAR.ToolUse expands from single tool invocations
              to a runtime that orchestrates specialized agents.
            </p>
            <aside className="mt-8 rounded-lg border-l-4 border-[#1f7a5a] bg-[#f4f7f3] p-6">
              <p className="font-mono text-xs uppercase text-[#1f7a5a]">What is ALPS?</p>
              <p className="mt-3 leading-8 text-[#3b463d]">
                ALPS (Application-Level Profile Semantics) is a small specification that describes only
                an application's vocabulary, states, transitions, and whether each transition is safe,
                idempotent, or unsafe. It can't describe screens, persistence methods, or performance
                requirements. Precisely because it can't, it becomes a "place for meaning" that competes
                with no implementation artifact, conveying the same meaning to both humans and AI.
              </p>
              <a
                className="mt-4 inline-flex text-sm font-semibold text-[#1f7a5a] underline"
                href="/en/alps"
              >
                Learn more about ALPS →
              </a>
            </aside>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {restAgentPoints.map((item) => (
              <article className="rounded-lg border border-black/10 bg-[#f4f7f3] p-6" key={item.title}>
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
            <p className="text-sm font-semibold uppercase text-[#1f7a5a]">
              Explicit context
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Explicit context over training volume.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#3b463d]">
              In the AI era, some say more popular frameworks have an advantage.
              But more public code doesn't directly mean more correct context.
              Extracting average shapes from a corpus that mixes different versions, quality levels,
              and design decisions doesn't necessarily lead to clean changes.
            </p>
            <p className="mt-5 text-lg leading-8 text-[#3b463d]">
              What BEAR.Sunday provides to AI is not ambiguous conventions but explicit context connected
              to the implementation. Interfaces, types, URIs, Links, Schemas, Modules, and generated
              documentation become the grounding AI needs for reasoning.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-4">
            {aiReasoning.map((item) => (
              <article className="rounded-lg border border-black/10 bg-white p-6" key={item.title}>
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-4 leading-8 text-[#465148]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#111611] px-5 py-20 text-white sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-[#9ee0bb]">
              Agent workflow
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Readable units enable delegating changes.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/76">
              What's hard for AI isn't the volume of code—it's meaning being scattered across multiple places.
              In BEAR.Sunday, you can trace related information starting from a resource, so the procedure
              for investigation and change remains stable.
            </p>
          </div>
          <ol className="grid grid-cols-1 gap-3">
            {agentWorkflow.map((item, index) => (
              <li
                className="flex gap-4 rounded-lg border border-white/16 bg-white/[0.06] p-5"
                key={item}
              >
                <span className="font-mono text-sm font-bold text-[#9ee0bb]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="leading-7 text-white/82">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-[#245c7a]">
              Strict types
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Strict types strengthen explicitness and locality.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#3b463d]">
              In code that AI modifies, ambiguous arrays and implicit structures become room for guesswork.
              BEAR.Sunday uses PHPStan and Psalm at high static analysis levels, giving even arrays
              meaning as shapes and domain types. Types are not just checks—they are specifications
              for AI to read.
            </p>
            <pre className="mt-8 overflow-x-auto rounded-lg bg-[#101820] p-6 text-sm leading-7 text-[#d9f7e7] shadow-[0_20px_60px_rgba(16,24,32,0.2)]">
              <code>{`/**
 * @phpstan-type UserRow array{id: positive-int, name: non-empty-string}
 * @psalm-type UserRow array{id: positive-int, name: non-empty-string}
 */
interface UserQuery
{
    /** @return UserRow */
    public function item(int $id): array;
}`}</code>
            </pre>
          </div>
          <ul className="grid grid-cols-1 gap-3">
            {strictTypePoints.map((item) => (
              <li className="flex gap-3 rounded-lg border border-black/10 bg-[#f4f7f3] p-5" key={item}>
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#245c7a]" />
                <span className="leading-7 text-[#344036]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-[#1f7a5a]">
              LLM documentation
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              llms.txt is the entry point for AI.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#3b463d]">
              API Doc, OpenAPI, JSON Schema, and llms-full.txt are connection points for making
              the application readable not just to humans but to AI. What matters is that
              documentation doesn't become isolated from the implementation.
            </p>
          </div>
          <pre className="overflow-x-auto rounded-lg bg-[#101820] p-6 text-sm leading-7 text-[#d9f7e7] shadow-[0_20px_60px_rgba(16,24,32,0.2)]">
            <code>{`#[JsonSchema(schema: 'user.json')]
#[Link(rel: 'orders', href: 'app://self/orders{?id}')]
public function onGet(int $id): static
{
    $this->body = $this->userQuery->item($id);

    return $this;
}`}</code>
          </pre>
        </div>
      </section>

      <CtaBand lang="en" />
    </PageShell>
  );
}

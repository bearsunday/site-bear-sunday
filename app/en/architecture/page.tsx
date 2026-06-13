import type { Metadata } from "next";
import { CtaBand, PageHero, PageShell } from "../../_components/site-chrome";

export const metadata: Metadata = {
  title: "Design | BEAR.Sunday",
  description:
    "Introducing BEAR.Sunday's Resource Oriented Architecture, DI, AOP, and Context.",
};

const pillars = [
  {
    title: "Resource Oriented Architecture",
    text: "Design application entry points as URI-identifiable resources, not pages or controllers. State, links, and representation boundaries align, allowing Web API, HTML, and CLI to share the same meaning.",
  },
  {
    title: "Dependency Injection",
    text: "Ray.Di, which evolves Google Guice concepts for PHP, resolves dependencies using types and Qualifiers as Keys. Modules declare bindings; the Injector generates the object graph.",
  },
  {
    title: "Aspect Oriented Programming",
    text: "Cross-cutting concerns like caching, transactions, logging, and authorization are separated as Interceptors. Resource classes can focus on application meaning.",
  },
  {
    title: "Context",
    text: "Context strings like prod-hal-api-app combine environment, representation, and application type. Environment branching is kept out of application code; differences are expressed in DI modules.",
  },
  {
    title: "Context Agnostic Objects",
    text: "Context is only used during object graph generation. Once created, objects don't know which context they were built for. References to execution modes like APP_DEBUG are structurally eliminated.",
  },
  {
    title: "ADP Package Structure",
    text: "Both framework packages and applications are structured to avoid circular dependencies. Multiple applications are integrated via namespace and DI binding instead of HTTP boundaries, and can be called as resources from other PHP applications.",
  },
];

const rayDiConcepts = [
  {
    title: "Key",
    text: "Dependencies are identified by type and Qualifier attributes. The same interface can have distinct implementations for payments, logging, and testing without confusion.",
  },
  {
    title: "Module",
    text: "A configuration unit that collects bindings. Combine Modules by feature, environment, and representation to create object graphs suited to each context.",
  },
  {
    title: "Provider",
    text: "Handles complex creation, lazy initialization, and mixed scopes. Consumers declare only what they need, without knowing how it's created.",
  },
  {
    title: "Scope",
    text: "Lifecycle control (prototype, singleton, etc.) is managed on the binding side. Objects themselves don't need to know their own lifespan.",
  },
  {
    title: "Interceptor",
    text: "AOP Alliance-style MethodInterceptors separate transactions, authorization, and caching from the main code.",
  },
  {
    title: "Compiler",
    text: "Generates PHP factory code from the dependency graph, reducing container initialization overhead in production. The generated output has a traceable structure.",
  },
];

const flow = [
  "Request: app://self/profile?id=1",
  "Resource: Profile::onGet(int $id)",
  "Body: holds state as an array or value object",
  "Links: declares navigability via HAL or attributes",
  "Renderer: converts representation to HTML, JSON, HAL, or CLI",
];

const resourceDiscipline = [
  {
    title: "Place meaning in the Resource",
    text: "Place the meaning of functionality in the Resource. Representation, dependencies, transitions, caching, and documentation unfold outward from there.",
  },
  {
    title: "Govern yourself, don't manipulate others",
    text: "Resource methods are not a place to manipulate external response objects. They decide their own state and return themselves.",
  },
  {
    title: "Have no concern for representation",
    text: "Resources hold values, state, and links. HTML, JSON, and CLI representation is the renderer's concern; the Resource doesn't know about representation.",
  },
  {
    title: "Declare In / Out through constraints",
    text: "Input is declared through method signatures, types, attributes, and schemas. Output is also left as body, headers, links, and schema—not buried in implicit display concerns.",
  },
];

const connectPhilosophy = [
  {
    title: "Don't subsume",
    text: "Authentication, validation, and ORM are not bundled in. The framework provides constraints; libraries remain choosable. The freedom to choose standards is preserved.",
  },
  {
    title: "Connect independently",
    text: "JSON Schema, HAL, OpenAPI, SQL, and PSR are used in forms that remain valid outside BEAR.Sunday. Your investment isn't locked into the framework.",
  },
  {
    title: "Follow standards for what matters",
    text: "Validation uses JSON Schema. Links use HAL. API descriptions use OpenAPI. The more critical the part, the more it's expressed in published standards rather than custom syntax. That's why it's documented, long-lasting, and directly usable by other tools and AI.",
  },
  {
    title: "Harmony, not tension",
    text: "SQL isn't made to pretend to be objects. Each does what it does best. Without forced abstractions, there's no friction at the seams.",
  },
];

export default function ArchitecturePage() {
  return (
    <PageShell lang="en" path="architecture">
      <PageHero
        eyebrow="Architecture"
        lead="BEAR.Sunday treats Web constraints as design principles for the interior of the application. Resource, DI, AOP, and Context divide responsibilities, making code meaning readable and producing a structure that withstands long-term operation."
        title="Don't hide the design behind the implementation."
      />

      <section className="border-b border-black/10 bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase text-[#1f7a5a]">
              Design philosophy
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Connect each thing, as itself.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#3b463d]">
              BEAR.Sunday doesn't absorb necessary technologies and rebuild them inside itself. SQL stays SQL.
              Validation stays JSON Schema. Links stay HAL. The more important the commitment, the more it
              follows published standards rather than framework-specific inventions. By letting each do its job,
              harmony—not tension—emerges.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {connectPhilosophy.map((item) => (
              <article className="rounded-lg border border-black/10 bg-[#f4f7f3] p-6" key={item.title}>
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-4 leading-8 text-[#465148]">{item.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 max-w-4xl text-lg leading-8 text-[#3b463d]">
            Give one job to the connection point, pass by type, hide the other side. That's why
            it's replaceable and long-lasting. This is not a feature—it's a design philosophy, an aesthetic.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              className="rounded-lg border border-black/10 bg-white p-6 shadow-[0_12px_36px_rgba(17,22,17,0.07)]"
              key={pillar.title}
            >
              <h2 className="text-2xl font-black">{pillar.title}</h2>
              <p className="mt-4 leading-8 text-[#465148]">{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-black/10 bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase text-[#1f7a5a]">
              Resource discipline
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              A Resource is not a place to write anything.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#3b463d]">
              BEAR.Sunday's resource orientation is not about creating URL-callable components.
              It's a constraint that determines where application meaning is placed, and from there
              unfolds representation and connections outward.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
            {resourceDiscipline.map((item) => (
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
              Ray.Di and Guice
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Dependency resolution is declared graph generation, not runtime lookup.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/76">
              At Ray.Di's center lies thinking derived from Google Guice. Application code doesn't go
              fetch dependencies—it declares what it needs in the constructor. Modules define bindings
              like "this Key → this Provider," and the Injector traces dependencies-of-dependencies
              to assemble the object graph before execution.
            </p>
            <p className="mt-5 text-lg leading-8 text-white/76">
              That's why BEAR.Sunday's DI is not convenient auto-wiring. It treats context, binding,
              scope, and interceptors as object graph composition, and eliminates the ability of
              post-construction objects to reference configuration information.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {rayDiConcepts.map((item) => (
              <article className="rounded-lg border border-white/16 bg-white/[0.06] p-6" key={item.title}>
                <h3 className="text-2xl font-black text-[#9ee0bb]">{item.title}</h3>
                <p className="mt-4 leading-7 text-white/76">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-[#1f7a5a]">
              Resource flow
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              From request to representation, carrying the same meaning.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#3b463d]">
              Rather than dividing by role names like MVC, state and links are gathered around the resource.
              Rendering and transport are separated outward, so the resource preserves what it is.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 font-mono text-sm">
            {flow.map((item, index) => (
              <div
                className="rounded-lg border border-black/10 bg-[#f4f7f3] p-5"
                key={item}
              >
                <p className="text-[#667068]">0{index + 1}</p>
                <p className="mt-2 text-base font-bold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e8eef4] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase text-[#245c7a]">
            Long-term structure
          </p>
          <h2 className="mt-4 max-w-4xl text-4xl font-black sm:text-5xl">
            Change goes to modules. Resource meaning is preserved.
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-3">
            {[
              "Express environment differences through context modules",
              "Post-construction objects don't know their context",
              "Swap representation formats via renderers",
              "Apply cross-cutting concerns via interceptors",
              "Integrate multiple apps without HTTP walls",
              "Call BEAR resources from other PHP apps",
            ].map((item) => (
              <div className="rounded-lg border border-black/10 bg-white p-6" key={item}>
                <p className="text-xl font-black">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand lang="en" />
    </PageShell>
  );
}

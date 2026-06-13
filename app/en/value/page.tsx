import type { Metadata } from "next";
import { CtaBand, PageHero, PageShell } from "../../_components/site-chrome";

export const metadata: Metadata = {
  title: "Value | BEAR.Sunday",
  description:
    "How BEAR.Sunday's technical features deliver value to developers, users, and business.",
};

const valueMechanisms = [
  {
    title: "Design constraints preserve meaning",
    text: "By separating responsibilities into Resource, Ray.Di, AOP, and Context, the meaning of your application doesn't scatter across controllers, config, and implicit conventions. Reading the code lets you trace what the input is, what it depends on, and what representation it outputs.",
  },
  {
    title: "Read Models run on Web infrastructure",
    text: "Generate inherently static resource representations and connect them to ETag, 304, dependency tags, and CDN purge. This is not mere caching—it's a design that creates the application's read model on top of Web infrastructure.",
  },
  {
    title: "Changes are swapped in from outside",
    text: "With Guice-derived Modules, Bindings, Providers, and AOP, environment differences, representation formats, and cross-cutting concerns are kept out of resources. Behavior changes are confined to bindings and Interceptors, preserving the shape of business logic.",
  },
];

const audienceValues = [
  {
    audience: "For developers",
    headline: "Focus on core logic.",
    text: "BEAR.Sunday doesn't bundle mountains of convenience parts—it provides constraints that don't change easily. ResourceObjects represent application meaning, dependencies enter via Ray.Di Keys and Providers, and representation and caching are handled externally. Developers don't need to chase APP_DEBUG-style execution mode branches or service locators—they can focus on the resource's responsibility.",
    points: [
      "Trace functional boundaries from URIs, onGet / onPost, Links, and Embeds",
      "Ray.Di and ROA keep test targets small",
      "The library-non-bundling policy lets you choose and swap standard components",
    ],
  },
  {
    audience: "For teams",
    headline: "Share structure while staying loosely coupled.",
    text: "Instead of growing code through individual styles, shared placement rules—Resource, Module, Interceptor, Renderer—are established. Multiple developers and AI agents can make changes on the same map, and reviews can concretely discuss 'where should this logic live?'",
    points: [
      "Dependency direction follows DIP and ADP, making change impact easier to localize",
      "Context modules consolidate environment differences, reducing conditional branches in implementation",
      "Documentation, schemas, and llms.txt all connect to the implementation's semantic model",
    ],
  },
  {
    audience: "For users",
    headline: "Fast, stable, reaching the same functionality.",
    text: "User value appears in experience, not in framework names. Inherently static content is served from CDN; unchanged content returns 304 via ETag. More requests reach neither origin nor DB, making responses faster and readable scope wider even during outages.",
    points: [
      "CDN-centric Read Models improve response speed and availability",
      "Dependency resolution prevents stale representations and stale ETags",
      "The same resource connects to Web, API, and CLI",
    ],
  },
  {
    audience: "For business",
    headline: "Lower ongoing costs and withstand change.",
    text: "Value lies not in short-term development speed alone, but in the ability to keep changing after launch. BEAR.Sunday prioritizes backward compatibility, connects to standard technologies, and weaves caching into the architecture. The ability to handle feature additions, representation changes, and application integration without HTTP walls—using namespace and DI binding instead—pays off as the organization grows.",
    points: [
      "The Eternal 1.x policy curbs migration costs and technological discontinuity",
      "CDN and 304 usage reduce infrastructure load and outage impact",
      "Multiple applications can be integrated without HTTP boundaries",
    ],
  },
];

const chain = [
  "Express meaning as a Resource",
  "Declare dependencies in Ray.Di Modules",
  "Injector generates the object graph",
  "AOP applies cross-cutting concerns",
  "Generate representation as a Read Model",
  "Connect to CDN, ETag, 304",
  "Returns as speed, maintainability, continuity",
];

export default function ValuePage() {
  return (
    <PageShell lang="en">
      <PageHero
        eyebrow="Value"
        lead="BEAR.Sunday's value can't be fully explained through generic terms like productivity, extensibility, or performance. The source of its value lies in how Resource, context-agnostic DI, AOP, and CDN-centric Read Models preserve the same meaning from design through to operation. This page traces the causality—how technology translates into value."
        title="Technical features into lasting value."
      />

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase text-[#1f7a5a]">
              From mechanism to value
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Value comes from the quality of constraints, not the quantity of features.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#3b463d]">
              Explaining a framework's value as a list of convenient features weakens the argument.
              In BEAR.Sunday, technical features shape the application's form, and that form directly impacts
              development, operations, and user experience. Constraints keep meaning in code and make
              the impact of changes traceable.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3">
            {valueMechanisms.map((item) => (
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

      <section className="border-y border-black/10 bg-[#111611] px-5 py-20 text-white sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-[#9ee0bb]">
              Value chain
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Design choices reach all the way to user experience.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/76">
              In BEAR.Sunday, internal design principles and external Web infrastructure are not disconnected.
              Resource meaning, dependency relationships, and representation identity are all connected,
              so ease of development and delivery quality sit on the same line.
            </p>
          </div>
          <ol className="grid grid-cols-1 gap-3">
            {chain.map((item, index) => (
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
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase text-[#245c7a]">
            Who benefits
          </p>
          <h2 className="mt-4 max-w-4xl text-4xl font-black sm:text-5xl">
            Value reaches developers, users, and business—not separately, but from the same structure.
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
            {audienceValues.map((value) => (
              <article
                className="rounded-lg border border-black/10 bg-[#f4f7f3] p-6"
                key={value.audience}
              >
                <p className="text-sm font-semibold uppercase text-[#b3262d]">
                  {value.audience}
                </p>
                <h3 className="mt-4 text-3xl font-black">{value.headline}</h3>
                <p className="mt-5 leading-8 text-[#465148]">{value.text}</p>
                <ul className="mt-6 grid grid-cols-1 gap-3">
                  {value.points.map((point) => (
                    <li
                      className="flex gap-3 rounded-md border border-black/10 bg-white px-4 py-3"
                      key={point}
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#1f7a5a]" />
                      <span className="leading-7 text-[#344036]">{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 bg-[#e8eef4] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-[#245c7a]">
              In one sentence
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              BEAR.Sunday is a framework for preserving the meaning of web applications over the long term.
            </h2>
            <a
              className="mt-8 inline-flex rounded-md bg-[#245c7a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1c495f]"
              href="/en/business"
            >
              Read in business terms
            </a>
          </div>
          <div className="rounded-lg border border-black/10 bg-white p-6">
            <p className="text-lg leading-8 text-[#3b463d]">
              For developers: a readable structure that's easy to change. For users: a fast, stable experience.
              For business: a foundation that enables growth while keeping migration and operational costs low.
              These three aren't separate features—they emerge from the same design: Resource, DI, AOP, and CDN-centric Read Models.
            </p>
          </div>
        </div>
      </section>

      <CtaBand lang="en" />
    </PageShell>
  );
}

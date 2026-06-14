import { SiteFooter, SiteHeader } from "../_components/site-chrome";

const principles = [
  {
    label: "Resource",
    title: "Everything is identified by URI",
    text: "Pages, APIs, and internal processes are all expressed as ResourceObjects. With a uniform interface of GET / POST / PUT / DELETE, you can trace what each piece of code handles directly from the code itself.",
  },
  {
    label: "DI",
    title: "Dependencies are injected from outside",
    text: "Ray.Di resolves dependencies at compile time, maintaining a structure free from runtime service locators and global state.",
  },
  {
    label: "AOP",
    title: "Cross-cutting concerns are separated",
    text: "Logging, caching, transactions, and more are separated using Ray.Aop. Business logic stays clean and well-defined.",
  },
];

const aiMerits = [
  {
    title: "Declarative",
    text: "Input, links, representations, and caching strategies are declared through attributes and schemas. AI can read declared meaning rather than inferring from implicit conventions.",
  },
  {
    title: "Explicit",
    text: "ResourceObject's onGet / onPost, constructor injection, and context module bindings make the actual boundaries of the application explicit.",
  },
  {
    title: "Traceable",
    text: "URIs, HAL links, JSON Schema, OpenAPI, and llms.txt all connect to the same semantic model, making it easy to trace the reasons for changes and their impact.",
  },
];

const boundaries = [
  "HTTP API",
  "HTML Page",
  "Console",
  "Composer package",
  "CLI / Homebrew",
  "AI-readable docs",
];

const longTerm = [
  "Predictable evolution without breaking backward compatibility",
  "Connection to standard technologies: HTTP, HAL, JSON Schema, PSR",
  "Environment differences injected via context strings",
  "Web-native cache design including CDN, ETag, and 304",
];

const technicalFeatures = [
  {
    title: "Context-agnostic DI",
    text: "Context is only used during assembly. Once created, objects do not reference APP_DEBUG or execution mode.",
  },
  {
    title: "Event-driven caching",
    text: "Rather than relying solely on TTL, change events cascade-invalidate dependent caches and ETags across server and CDN.",
  },
  {
    title: "CDN Read Model",
    text: "PHP generates HTTP representations that are materialized to CDN and served from there until a change event occurs.",
  },
  {
    title: "Integration without HTTP walls",
    text: "Multiple applications are integrated via namespace and DI binding, maintaining independence without creating communication boundaries.",
  },
  {
    title: "Portable resources",
    text: "Resources built with BEAR.Sunday can be packaged and called via URI from other PHP applications.",
  },
  {
    title: "Transparent parallel execution",
    text: "URIs represent What, while How is hidden in Modules. This allows switching to parallel execution of embedded resources without changing any resource code.",
  },
  {
    title: "Application as Documentation",
    text: "Connect to ApiDoc HTML, OpenAPI 3.1, JSON Schema, and llms.txt to generate documentation that can be read from the implementation itself.",
  },
];

const valueSignals = [
  {
    title: "Developers",
    text: "Resource, DI, AOP, and Context separate responsibilities, letting you focus on business logic without chasing execution mode branches or implicit dependencies.",
  },
  {
    title: "Users",
    text: "Inherently static Read Models connect to CDN, ETag, and 304, delivering fast, stable responses.",
  },
  {
    title: "Business",
    text: "Backward compatibility, standard technologies, and CDN-centric design reduce the ongoing costs of migration, maintenance, and operations.",
  },
];

export default function EnHome() {
  return (
    <main className="min-h-screen bg-[#f4f7f3] text-[#111611]">
      <SiteHeader lang="en" path="" />

      <section
        id="top"
        className="relative isolate flex min-h-[68svh] items-center overflow-hidden border-b border-black/10 px-5 pt-20 sm:min-h-[76svh] sm:px-8 sm:pt-24"
      >
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(17,22,17,0.06)_1px,transparent_1px),linear-gradient(0deg,rgba(17,22,17,0.06)_1px,transparent_1px)] bg-[size:42px_42px]" />
        <div
          aria-hidden="true"
          className="absolute right-0 top-24 -z-10 h-32 w-[92vw] bg-contain bg-right bg-no-repeat opacity-15 sm:right-[-12rem] sm:h-40 sm:w-[48rem] md:right-[-5rem] md:top-28 md:h-56 md:w-[58rem] md:opacity-20"
          style={{ backgroundImage: "url('/bear-logo.png')" }}
        />
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 pb-10 pt-8 sm:gap-12 sm:pb-20 sm:pt-12 lg:grid-cols-[1fr_28rem] lg:items-end">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-semibold uppercase text-[#b3262d]">
              Resource Oriented PHP Framework
            </p>
            <h1 className="break-words text-5xl font-black leading-none text-[#111611] sm:text-7xl lg:text-8xl">
              BEAR.Sunday
            </h1>
            <p className="mt-4 text-base font-semibold text-[#3c463e] sm:text-lg">
              Web principles, all the way inside your application.
            </p>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#283229] sm:text-2xl sm:leading-10">
              One ResourceObject becomes a Web API, HTML page, console tool, AI instrument, and documentation.
              Write it once. Don&apos;t rebuild for every output.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                className="rounded-md bg-[#111611] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#2f3a31]"
                href="/en/quick-start"
              >
                Quick Start
              </a>
              <a
                className="rounded-md border border-[#111611]/25 bg-white/70 px-5 py-3 text-center text-sm font-semibold text-[#111611] transition hover:bg-white"
                href="/en/business"
              >
                For Business
              </a>
            </div>
          </div>
          <div className="hidden border-l-4 border-[#b3262d] bg-white/75 p-5 shadow-[0_18px_60px_rgba(17,22,17,0.12)] backdrop-blur lg:block">
            <p className="font-mono text-xs uppercase text-[#667068]">
              Core idea
            </p>
            <p className="mt-4 text-3xl font-black leading-tight">
              Because Everything is a Resource.
            </p>
            <div className="mt-5 rounded-md border border-black/10 bg-white/80 p-4 font-mono text-sm">
              <p className="font-bold text-[#111611]">GET app://self/article?id=42</p>
              <p className="mt-2 text-[#3c463e]">
                → HTML ・ JSON(HAL) ・ CLI ・ Tool Use ・ OpenAPI
              </p>
            </div>
            <p className="mt-4 text-sm leading-7 text-[#3c463e]">
              Same URI, different representations.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white px-5 py-8 sm:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 text-sm font-semibold text-[#263028] sm:grid-cols-3 lg:grid-cols-6">
          {boundaries.map((item) => (
            <div key={item} className="rounded-md border border-black/10 px-4 py-3">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#111611] px-5 py-20 text-white sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-[#9ee0bb]">
              Why it all connects
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Declare the relationships. Everything else follows.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/76">
              BEAR.Sunday is a PHP framework that makes Web principles (REST) the design constraint for your entire application.
              When you declare relationships between resources through links and embeds, intent (What) and execution (How) are separated.
              As a result, the following emerge from the structure itself—not as bolt-on features.
            </p>
            <a
              className="mt-8 inline-flex rounded-md bg-[#9ee0bb] px-5 py-3 text-sm font-semibold text-[#111611] transition hover:bg-[#c0f0d3]"
              href="/en/rest"
            >
              See through Web principles
            </a>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="rounded-lg border border-white/16 bg-white/[0.06] p-5 font-mono text-sm">
              <p className="text-[#9ee0bb]">Declare relationships (URI, links, embeds)</p>
              <p className="mt-2 text-white/70">↓ Separate intent (What) from execution (How)</p>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                { t: "Transparent parallelism", d: "Embeds are relationship declarations. Execution strategy is swapped via Module." },
                { t: "AI instruments", d: "URIs, types, and schemas become tool definitions as-is." },
                { t: "Multiple representations", d: "Same state → HTML, JSON, CLI, documentation." },
                { t: "Long-term compatibility", d: "Meaning stays in resources; details change on the outside." },
              ].map((item) => (
                <div className="rounded-lg border border-white/16 bg-white/[0.06] p-5" key={item.t}>
                  <h3 className="text-lg font-black text-[#9ee0bb]">{item.t}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/76">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="architecture" className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-[#1f7a5a]">
              Architecture
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              REST, DI, and AOP as design constraints.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#3b463d]">
              BEAR.Sunday is not a full-stack convenience box. It is a framework that preserves the shape of your application.
              You choose the libraries. The constraints don&apos;t waver. That keeps meaning in your code for the long haul.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3">
            {principles.map((item) => (
              <article
                className="rounded-lg border border-black/10 bg-white p-6 shadow-[0_12px_36px_rgba(17,22,17,0.07)]"
                key={item.label}
              >
                <p className="font-mono text-sm font-bold text-[#b3262d]">
                  {item.label}
                </p>
                <h3 className="mt-5 text-2xl font-black">{item.title}</h3>
                <p className="mt-4 leading-7 text-[#465148]">{item.text}</p>
              </article>
            ))}
          </div>
          <a
            className="mt-8 inline-flex rounded-md bg-[#111611] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2f3a31]"
            href="/en/architecture"
          >
            Explore the design
          </a>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#e8eef4] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-[#245c7a]">
              Value
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Technical features into lasting value.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#36434c]">
              BEAR.Sunday&apos;s value lies not in the number of convenience features, but in how its design constraints
              remain effective over time. Resource, context-agnostic DI, AOP, and CDN-centric Read Models deliver value
              to development, user experience, and business continuity from the same structure.
            </p>
            <a
              className="mt-8 inline-flex rounded-md bg-[#245c7a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1c495f]"
              href="/en/value"
            >
              See the value
            </a>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {valueSignals.map((item) => (
              <article className="rounded-lg border border-black/10 bg-white p-6" key={item.title}>
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-4 leading-7 text-[#465148]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-[#245c7a]">
              Technical features
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Technical features that become design constraints.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#3b463d]">
              BEAR.Sunday is more than abstract design philosophy.
              From runtime performance, caching, and parallel execution to documentation generation,
              its technical features directly shape the application&apos;s structure.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {technicalFeatures.map((item) => (
              <article className="rounded-lg border border-black/10 bg-[#f4f7f3] p-6" key={item.title}>
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-4 leading-7 text-[#465148]">{item.text}</p>
              </article>
            ))}
          </div>
          <a
            className="mt-8 inline-flex rounded-md bg-[#245c7a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1c495f]"
            href="/en/tech"
          >
            Explore technical features
          </a>
        </div>
      </section>

      <section id="ai" className="border-y border-black/10 bg-[#111611] px-5 py-20 text-white sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-[#9ee0bb]">
              AI-ready architecture
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              In the AI era, code that doesn&apos;t require guessing wins.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/74">
              In an age where AI agents read, modify, and review code, declarativity, explicitness, and traceability
              are more valuable than implicit conventions. BEAR.Sunday has these built into the application structure.
            </p>
            <a
              className="mt-8 inline-flex rounded-md bg-[#9ee0bb] px-5 py-3 text-sm font-semibold text-[#111611] transition hover:bg-[#c0f0d3]"
              href="/en/ai-era"
            >
              Read about value in the AI era
            </a>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {aiMerits.map((item) => (
              <article className="rounded-lg border border-white/16 bg-white/[0.06] p-6" key={item.title}>
                <h3 className="text-2xl font-black text-[#9ee0bb]">{item.title}</h3>
                <p className="mt-3 leading-7 text-white/76">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-[#b3262d]">
              Traceable by design
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Trace the impact of changes, starting from the resource.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#3b463d]">
              URIs, links, embeds, schemas, and context modules. The meaning of your application
              is kept in traceable units rather than scattered across multiple places.
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-3">
              {longTerm.map((item) => (
                <li className="flex gap-3 rounded-md border border-black/10 px-4 py-3" key={item}>
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#1f7a5a]" />
                  <span className="leading-7 text-[#344036]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-3 font-mono text-sm">
            <div className="rounded-lg border border-black/10 bg-[#f4f7f3] p-5">
              <p className="text-[#667068]">request</p>
              <p className="mt-2 text-lg font-bold">GET app://self/user?id=1</p>
            </div>
            <div className="rounded-lg border border-black/10 bg-[#f4f7f3] p-5">
              <p className="text-[#667068]">resource</p>
              <p className="mt-2 text-lg font-bold">User::onGet(int $id): static</p>
            </div>
            <div className="rounded-lg border border-black/10 bg-[#f4f7f3] p-5">
              <p className="text-[#667068]">representation</p>
              <p className="mt-2 text-lg font-bold">HAL / HTML / JSON / CLI</p>
            </div>
            <div className="rounded-lg border border-black/10 bg-[#f4f7f3] p-5">
              <p className="text-[#667068]">documentation</p>
              <p className="mt-2 text-lg font-bold">OpenAPI 3.1 / JSON Schema / llms.txt</p>
            </div>
          </div>
        </div>
      </section>

      <section id="code" className="border-y border-black/10 bg-[#e8eef4] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-[#245c7a]">
              In code
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              A resource only decides its state.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#36434c]">
              Representation goes to the renderer, dependencies to DI, cross-cutting concerns to AOP.
              Keeping class responsibilities narrow makes testing, reviewing, and AI-assisted analysis straightforward.
            </p>
            <a
              className="mt-8 inline-flex rounded-md bg-[#245c7a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1c495f]"
              href="/en/examples"
            >
              See code examples
            </a>
          </div>
          <pre className="overflow-x-auto rounded-lg bg-[#101820] p-6 text-sm leading-7 text-[#d9f7e7] shadow-[0_20px_60px_rgba(16,24,32,0.25)]">
            <code>{`<?php

namespace MyVendor\\Project\\Resource\\Page;

use BEAR\\Resource\\Annotation\\Link;
use BEAR\\Resource\\ResourceObject;

final class Profile extends ResourceObject
{
    #[Link(rel: 'orders', href: 'app://self/orders?user_id={id}')]
    public function onGet(int $id): static
    {
        $this->body = [
            'id' => $id,
            'name' => 'BEAR.Sunday',
        ];

        return $this;
    }
}`}</code>
          </pre>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#111611] px-5 py-24 text-white sm:px-8 lg:py-36">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-3xl font-black leading-tight sm:text-5xl sm:leading-[1.15]">
            The classics had already prepared a world they could not yet see.
          </p>
        </div>
      </section>

      <section id="start" className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-[#1f7a5a]">
              Start small
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Start with a single resource.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#3b463d]">
              Create a skeleton with Composer and write your first Page Resource. From a small unit
              that holds the same meaning on the Web and the console, you can start building an application that grows for the long term.
            </p>
          </div>
          <div className="rounded-lg border border-black/10 bg-[#111611] p-6 text-white">
            <p className="font-mono text-xs uppercase text-white/54">
              Quick start
            </p>
            <pre className="mt-5 overflow-x-auto font-mono text-sm leading-7 text-[#9ee0bb]">
              <code>{`VENDOR=MyVendor PACKAGE=MyProject \\
composer create-project bear/skeleton my-project

cd my-project
php bin/page.php get /hello`}</code>
            </pre>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                className="rounded-md bg-[#9ee0bb] px-5 py-3 text-center text-sm font-semibold text-[#111611] transition hover:bg-[#c0f0d3]"
                href="/en/quick-start"
              >
                Quick Start
              </a>
              <a
                className="rounded-md border border-white/20 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
                href="https://bearsunday.github.io/llms-full.txt"
              >
                llms-full.txt
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter lang="en" />
    </main>
  );
}

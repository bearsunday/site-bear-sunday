import type { Metadata } from "next";
import { PageHero, PageShell } from "../../_components/site-chrome";

export const metadata: Metadata = {
  title: "Quick Start | BEAR.Sunday",
  description:
    "The shortest path to getting started with BEAR.Sunday and the resource-oriented mindset to begin with.",
};

const steps = [
  {
    title: "Create a project",
    text: "Create a skeleton with Composer and get your first application structure.",
    code: `VENDOR=MyVendor PACKAGE=MyProject \\
composer create-project bear/skeleton my-project`,
  },
  {
    title: "Call a resource",
    text: "Before setting up a web server, you can call Resources directly from page.php.",
    code: `cd my-project
php bin/page.php get /hello`,
  },
  {
    title: "Observe through tests",
    text: "Test with ResourceObject at the center—check URIs, methods, inputs, and outputs in small units.",
    code: `composer test
composer sa`,
  },
];

const nextReads = [
  {
    href: "/en/architecture",
    title: "Understand the design",
    text: "How Resource, DI, AOP, and Context divide responsibilities.",
  },
  {
    href: "/en/ai-era",
    title: "Value in the AI era",
    text: "Why declarativity, explicitness, and traceability matter.",
  },
  {
    href: "/en/examples",
    title: "See the code",
    text: "Implementation examples of resources, dependency injection, AOP, and Hypermedia.",
  },
];

export default function QuickStartPage() {
  return (
    <PageShell lang="en" path="quick-start">
      <PageHero
        eyebrow="Quick Start"
        lead="You don't need to learn a lot of configuration up front with BEAR.Sunday. Start by creating a single resource, calling it by URI, and testing it. That small unit expands to the Web, CLI, and documentation."
        title="Start with one resource."
      />

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 lg:grid-cols-3">
          {steps.map((step, index) => (
            <article className="rounded-lg border border-black/10 bg-white" key={step.title}>
              <div className="border-b border-black/10 p-6">
                <p className="font-mono text-sm font-bold text-[#b3262d]">
                  0{index + 1}
                </p>
                <h2 className="mt-3 text-2xl font-black">{step.title}</h2>
                <p className="mt-4 leading-7 text-[#465148]">{step.text}</p>
              </div>
              <pre className="overflow-x-auto bg-[#101820] p-6 text-sm leading-7 text-[#d9f7e7]">
                <code>{step.code}</code>
              </pre>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#111611] px-5 py-20 text-white sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-[#9ee0bb]">
              Official guide
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              See the official manual for details.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/76">
              This page is an entry point. For actual setup, environment configuration, and tutorials,
              proceed to the Quick Start and Tutorial in the official manual.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              className="rounded-md bg-[#9ee0bb] px-5 py-3 text-center text-sm font-semibold text-[#111611] transition hover:bg-[#c0f0d3]"
              href="https://bearsunday.github.io/manuals/1.0/en/quick-start.html"
            >
              Official Quick Start
            </a>
            <a
              className="rounded-md border border-white/20 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
              href="https://bearsunday.github.io/manuals/1.0/en/tutorial.html"
            >
              Tutorial
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase text-[#1f7a5a]">
            Next
          </p>
          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            What to read next.
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-3">
            {nextReads.map((item) => (
              <a
                className="rounded-lg border border-black/10 bg-[#f4f7f3] p-6 transition hover:bg-white"
                href={item.href}
                key={item.href}
              >
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-4 leading-7 text-[#465148]">{item.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

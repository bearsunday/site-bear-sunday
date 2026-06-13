import type { Metadata } from "next";
import { CtaBand, PageHero, PageShell } from "../../_components/site-chrome";

export const metadata: Metadata = {
  title: "Examples | BEAR.Sunday",
  description:
    "Code examples illustrating BEAR.Sunday's Resource, DI, AOP, and Hypermedia.",
};

const examples = [
  {
    title: "Resource",
    caption: "A resource corresponding to a URI decides its state and returns it.",
    code: `final class Profile extends ResourceObject
{
    public function onGet(int $id): static
    {
        $this->body = $this->profileQuery->item($id);

        return $this;
    }
}`,
  },
  {
    title: "Dependency Injection",
    caption: "Required dependencies are made explicit in the constructor.",
    code: `public function __construct(
    private readonly ProfileQuery $profileQuery,
    private readonly ClockInterface $clock,
) {
}`,
  },
  {
    title: "AOP",
    caption: "Cross-cutting concerns are offloaded to attributes and Interceptors.",
    code: `#[Transactional]
#[Cacheable(expirySecond: 30)]
public function onPost(string $name): static
{
    $this->body = $this->command->create($name);

    return $this;
}`,
  },
  {
    title: "Hypermedia",
    caption: "Declare the next reachable resources as links.",
    code: `#[Link(rel: 'orders', href: 'app://self/orders{?id}')]
#[Embed(rel: 'profile', src: 'app://self/profile{?id}')]
public function onGet(int $id): static
{
    return $this;
}`,
  },
];

const outcomes = [
  "Tests can be written per resource",
  "The same resource can be used as Web API, HTML, and CLI",
  "Caching and transactions are separated from business logic",
  "Links and schemas make API documentation easy to assemble",
];

export default function ExamplesPage() {
  return (
    <PageShell lang="en">
      <PageHero
        eyebrow="Examples"
        lead="BEAR.Sunday code is centered on resources. Inputs, dependencies, links, and cross-cutting concerns remain visible, allowing the reader to trace the meaning of the application."
        title="Small code that preserves design boundaries."
      />

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 lg:grid-cols-2">
          {examples.map((example) => (
            <article className="rounded-lg border border-black/10 bg-white" key={example.title}>
              <div className="border-b border-black/10 p-6">
                <p className="font-mono text-sm font-bold text-[#b3262d]">
                  {example.title}
                </p>
                <h2 className="mt-3 text-2xl font-black">{example.caption}</h2>
              </div>
              <pre className="overflow-x-auto bg-[#101820] p-6 text-sm leading-7 text-[#d9f7e7]">
                <code>{example.code}</code>
              </pre>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-black/10 bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-[#245c7a]">
              What this enables
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Code examples show boundaries, not just usage.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#3b463d]">
              Resources hold state; representation and transport are separated to the outside.
              Dependencies are injected; cross-cutting concerns go to AOP.
              This simple separation becomes the foundation for testing and extension.
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-3">
            {outcomes.map((item) => (
              <li className="flex gap-3 rounded-lg border border-black/10 bg-[#f4f7f3] p-5" key={item}>
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#1f7a5a]" />
                <span className="leading-7 text-[#344036]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand lang="en" />
    </PageShell>
  );
}

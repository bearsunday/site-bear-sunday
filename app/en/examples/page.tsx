import type { Metadata } from "next";
import { CtaBand, PageHero, PageShell } from "../../_components/site-chrome";

export const metadata: Metadata = {
  title: "Code | BEAR.Sunday",
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
#[Loggable]
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
  {
    title: "CacheableResponse",
    caption: "Cache is invalidated by a dependency change, not by elapsed time.",
    code: `use BEAR\\RepositoryModule\\Annotation\\CacheableResponse;

#[CacheableResponse]
public function onGet(string $id): static
{
    $this->body = $this->blog->entry($id);

    return $this;
}`,
  },
  {
    title: "DonutCache",
    caption: "Cache the page; do not cache the comment “hole” — fresh every request.",
    code: `#[DonutCache]
#[Embed(rel: 'comment', src: 'page://self/blog/comment')]
public function onGet(int $id): static
{
    $this->body += ['article' => '...'];

    return $this;
}`,
  },
  {
    title: "CLI",
    caption: "The same resource also becomes a CLI with one attribute.",
    code: `use BEAR\\Cli\\Attribute\\Cli;
use BEAR\\Cli\\Attribute\\Option;

#[Cli(name: 'greet', description: 'Greet in many languages', output: 'greeting')]
public function onGet(
    #[Option(shortName: 'n')] string $name,
    #[Option(shortName: 'l')] string $lang = 'en',
): static {
    // this onGet becomes a standalone 'greet' command
    // --help and --name/-n are generated from the declaration
    return $this;
}`,
  },
  {
    title: "SQL",
    caption: "SQL stays SQL — pass types, receive types; even the clock is injected.",
    code: `interface OrderRepositoryInterface
{
    // the return type is the intent: an immutable domain object
    #[DbQuery('order_item', factory: OrderFactory::class)]
    public function getOrder(string $id): Order;

    // typed argument; the clock is injected; return type = affected rows
    #[DbQuery('order_close')]
    public function close(string $id, DateTimeInterface $at): AffectedRows;
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
    <PageShell lang="en" path="examples">
      <PageHero
        eyebrow="Code"
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
              All just the same small declaration — which is why it stays readable.
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

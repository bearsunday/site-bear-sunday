import Link from "next/link";
import type { ReactNode } from "react";

const navItems = [
  { href: "/business", label: "ビジネス" },
  { href: "/value", label: "価値" },
  { href: "/rest", label: "Web原則" },
  { href: "/tech", label: "技術" },
  { href: "/architecture", label: "設計" },
  { href: "/ai-era", label: "AI時代" },
  { href: "/examples", label: "実装例" },
  { href: "/quick-start", label: "導入" },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-black/10 bg-[#f4f7f3]/92 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link className="text-sm font-semibold" href="/">
          BEAR.Sunday
        </Link>
        <div className="hidden items-center gap-6 text-sm font-medium text-[#344036] md:flex">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <a
          className="rounded-md bg-[#b3262d] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#8d1f25]"
          href="https://bearsunday.github.io/manuals/1.0/ja/"
        >
          Manual
        </a>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-[#f4f7f3] px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-[#465148] md:flex-row md:items-center md:justify-between">
        <p>BEAR.Sunday promotion concept site</p>
        <div className="flex flex-wrap gap-5 font-semibold text-[#111611]">
          <a href="https://bearsunday.github.io/">Official</a>
          <a href="https://bearsunday.github.io/manuals/1.0/ja/">Manual</a>
          <a href="https://github.com/bearsunday/BEAR.Sunday">GitHub</a>
        </div>
      </div>
    </footer>
  );
}

export function PageShell({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <main className="min-h-screen bg-[#f4f7f3] text-[#111611]">
      <SiteHeader />
      {children}
      <SiteFooter />
    </main>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
}: Readonly<{
  eyebrow: string;
  title: string;
  lead: string;
}>) {
  return (
    <section className="relative isolate overflow-hidden border-b border-black/10 px-5 pb-16 pt-32 sm:px-8 lg:pb-24 lg:pt-40">
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(17,22,17,0.06)_1px,transparent_1px),linear-gradient(0deg,rgba(17,22,17,0.06)_1px,transparent_1px)] bg-[size:42px_42px]" />
      <div
        aria-hidden="true"
        className="absolute right-0 top-24 -z-10 h-32 w-[92vw] bg-contain bg-right bg-no-repeat opacity-10 sm:right-[-12rem] sm:h-40 sm:w-[48rem] md:right-[-5rem] md:h-56 md:w-[58rem]"
        style={{ backgroundImage: "url('/bear-logo.png')" }}
      />
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase text-[#b3262d]">
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-5xl text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-[#344036] sm:text-xl sm:leading-9">
          {lead}
        </p>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="bg-[#111611] px-5 py-16 text-white sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase text-[#9ee0bb]">
            Start with one resource
          </p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            まずは小さく作り、構造を残す。
          </h2>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            className="rounded-md bg-[#9ee0bb] px-5 py-3 text-center text-sm font-semibold text-[#111611] transition hover:bg-[#c0f0d3]"
            href="/quick-start"
          >
            Quick Start
          </Link>
          <a
            className="rounded-md border border-white/20 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
            href="https://bearsunday.github.io/llms-full.txt"
          >
            llms-full.txt
          </a>
        </div>
      </div>
    </section>
  );
}

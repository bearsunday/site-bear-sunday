import Link from "next/link";
import type { ReactNode } from "react";

type Lang = "ja" | "en";

const t = {
  ja: {
    nav: [
      { href: "/ja/business", label: "ビジネス" },
      { href: "/ja/value", label: "価値" },
      { href: "/ja/rest", label: "Web原則" },
      { href: "/ja/tech", label: "技術" },
      { href: "/ja/architecture", label: "設計" },
      { href: "/ja/ai-era", label: "AI時代" },
      { href: "/ja/examples", label: "コード" },
      { href: "/ja/quick-start", label: "導入" },
    ],
    manualHref: "https://bearsunday.github.io/manuals/1.0/ja/",
    footerOfficial: "Official",
    footerManual: "Manual",
    footerGitHub: "GitHub",
    ctaEyebrow: "Start with one resource",
    ctaTitle: "まずは小さく作り、構造を残す。",
    ctaQuickStart: "Quick Start",
    ctaLlms: "llms-full.txt",
  },
  en: {
    nav: [
      { href: "/en/business", label: "Business" },
      { href: "/en/value", label: "Value" },
      { href: "/en/rest", label: "Web Principles" },
      { href: "/en/tech", label: "Tech" },
      { href: "/en/architecture", label: "Design" },
      { href: "/en/ai-era", label: "AI Era" },
      { href: "/en/examples", label: "Code" },
      { href: "/en/quick-start", label: "Quick Start" },
    ],
    manualHref: "https://bearsunday.github.io/manuals/1.0/en/",
    footerOfficial: "Official",
    footerManual: "Manual",
    footerGitHub: "GitHub",
    ctaEyebrow: "Start with one resource",
    ctaTitle: "Start small, keep the structure.",
    ctaQuickStart: "Quick Start",
    ctaLlms: "llms-full.txt",
  },
};

export function SiteHeader({ lang = "ja", path = "" }: { lang?: Lang; path?: string }) {
  const homeHref = lang === "en" ? "/en" : "/ja";
  const enHref = path ? `/en/${path}` : "/en";
  const jaHref = path ? `/ja/${path}` : "/ja";
  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-black/10 bg-[#f4f7f3]/92 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link className="text-sm font-semibold" href={homeHref}>
          BEAR.Sunday
        </Link>
        <div className="hidden items-center gap-6 text-sm font-medium text-[#344036] md:flex">
          {t[lang].nav.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="hidden items-center text-sm md:flex">
          <a
            className={lang === "en" ? "text-black/90 underline underline-offset-2" : "text-black/50 no-underline hover:text-black/90"}
            href={enHref}
          >
            En
          </a>
          <span className="mx-1.5 text-black/30">|</span>
          <a
            className={lang === "ja" ? "text-black/90 underline underline-offset-2" : "text-black/50 no-underline hover:text-black/90"}
            href={jaHref}
          >
            Ja
          </a>
          <span className="mx-1.5 text-black/30">|</span>
          <a
            className="text-black/50 no-underline hover:text-black/90"
            href="/en/llms-full.txt"
          >
            llms
          </a>
        </div>
      </nav>
    </header>
  );
}

export function SiteFooter({ lang = "ja" }: { lang?: Lang }) {
  const l = t[lang];
  return (
    <footer className="border-t border-black/10 bg-[#f4f7f3] px-5 py-10 sm:px-8">
      <div className="relative mx-auto flex max-w-7xl flex-col gap-5 text-sm text-[#465148] md:flex-row md:items-center md:justify-between">
        <p>© 2011-2026 BEAR.Sunday</p>
        <img
          alt=""
          className="absolute left-1/2 top-1/2 hidden h-6 w-6 -translate-x-1/2 -translate-y-1/2 opacity-10 lg:block"
          src="https://bearsunday.github.io/favicon.ico"
        />
        <div className="flex flex-wrap gap-5 font-semibold text-[#111611]">
          <a href="https://bearsunday.github.io/">{l.footerOfficial}</a>
          <a href={l.manualHref}>{l.footerManual}</a>
          <a href="https://github.com/bearsunday/BEAR.Sunday">{l.footerGitHub}</a>
        </div>
      </div>
    </footer>
  );
}

export function PageShell({ lang = "ja", path = "", children }: Readonly<{ lang?: Lang; path?: string; children: ReactNode }>) {
  return (
    <main className="min-h-screen bg-[#f4f7f3] text-[#111611]">
      <SiteHeader lang={lang} path={path} />
      {children}
      <SiteFooter lang={lang} />
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

export function CtaBand({ lang = "ja" }: { lang?: Lang }) {
  const l = t[lang];
  const quickStartHref = lang === "en" ? "/en/quick-start" : "/ja/quick-start";
  return (
    <section className="bg-[#111611] px-5 py-16 text-white sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase text-[#9ee0bb]">
            {l.ctaEyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            {l.ctaTitle}
          </h2>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            className="rounded-md bg-[#9ee0bb] px-5 py-3 text-center text-sm font-semibold text-[#111611] transition hover:bg-[#c0f0d3]"
            href={quickStartHref}
          >
            {l.ctaQuickStart}
          </Link>
          <a
            className="rounded-md border border-white/20 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
            href="https://bearsunday.github.io/llms-full.txt"
          >
            {l.ctaLlms}
          </a>
        </div>
      </div>
    </section>
  );
}

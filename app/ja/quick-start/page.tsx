import type { Metadata } from "next";
import { PageHero, PageShell } from "../../_components/site-chrome";

export const metadata: Metadata = {
  title: "Quick Start | BEAR.Sunday",
  description:
    "BEAR.Sundayを始めるための最短導線と、最初に見るべきリソース指向の考え方を紹介します。",
};

const steps = [
  {
    title: "プロジェクトを作る",
    text: "Composerでskeletonを作成し、最初のアプリケーション構造を得ます。",
    code: `VENDOR=MyVendor PACKAGE=MyProject \\
composer create-project bear/skeleton my-project`,
  },
  {
    title: "リソースを呼ぶ",
    text: "Webサーバーを立てる前に、page.phpからResourceを直接呼び出せます。",
    code: `cd my-project
php bin/page.php get /hello`,
  },
  {
    title: "テストで観察する",
    text: "ResourceObjectを中心にテストし、URI、メソッド、入力、出力を小さく確認します。",
    code: `composer test
composer sa`,
  },
];

const nextReads = [
  {
    href: "/architecture",
    title: "設計を理解する",
    text: "Resource、DI、AOP、Contextがどのように役割を分けるか。",
  },
  {
    href: "/ai-era",
    title: "AI時代の価値を見る",
    text: "宣言性、明示性、トレーサビリティがなぜ効くのか。",
  },
  {
    href: "/examples",
    title: "コードを見る",
    text: "リソース、依存注入、AOP、Hypermediaの実装イメージ。",
  },
];

export default function QuickStartPage() {
  return (
    <PageShell path="quick-start">
      <PageHero
        eyebrow="Quick Start"
        lead="BEAR.Sundayは、最初から大きな構成を覚える必要はありません。まず1つのリソースを作り、URIで呼び、テストする。その小さな単位がWeb、CLI、ドキュメントへ広がります。"
        title="1つのリソースから始める。"
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
              詳細は公式マニュアルへ。
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/76">
              このページは導入の入口です。実際のセットアップ、環境構築、チュートリアルは
              公式マニュアルのQuick StartとTutorialへ進んでください。
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              className="rounded-md bg-[#9ee0bb] px-5 py-3 text-center text-sm font-semibold text-[#111611] transition hover:bg-[#c0f0d3]"
              href="https://bearsunday.github.io/manuals/1.0/ja/quick-start.html"
            >
              公式Quick Start
            </a>
            <a
              className="rounded-md border border-white/20 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
              href="https://bearsunday.github.io/manuals/1.0/ja/tutorial.html"
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
            次に読むページ。
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

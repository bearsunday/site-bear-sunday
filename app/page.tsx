import { SiteFooter, SiteHeader } from "./_components/site-chrome";

const principles = [
  {
    label: "Resource",
    title: "すべてを URI で扱う",
    text: "ページ、API、内部処理を ResourceObject として表現。GET / POST / PUT / DELETE の統一インターフェイスで、何を扱っているのかがコードから追えます。",
  },
  {
    label: "DI",
    title: "依存は外から注入する",
    text: "Ray.Di によるコンパイル時の依存解決で、実行時のサービスロケータやグローバル状態に頼らない構造を保ちます。",
  },
  {
    label: "AOP",
    title: "横断的関心を分離する",
    text: "ログ、キャッシュ、トランザクションなどを Ray.Aop で分離。ビジネスロジックの輪郭を曖昧にしません。",
  },
];

const aiMerits = [
  {
    title: "宣言性",
    text: "入力、リンク、表現、キャッシュ方針を属性やスキーマで宣言。AI は暗黙の分岐を推測するより、宣言された意味を読み取れます。",
  },
  {
    title: "明示性",
    text: "ResourceObject の onGet / onPost、コンストラクタ注入、context module の束縛が、アプリケーションの実際の境界を明示します。",
  },
  {
    title: "トレーサビリティ",
    text: "URI、HAL リンク、JSON Schema、OpenAPI、llms.txt が同じ意味モデルにつながり、変更理由と影響範囲を追跡しやすくします。",
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
  "後方互換性を壊さない、予測可能な進化",
  "HTTP、HAL、JSON Schema、PSR など標準技術への接続",
  "context string による環境差分の注入",
  "CDN、ETag、304を含む Web本来のキャッシュ設計",
];

const technicalFeatures = [
  {
    title: "Context-agnostic DI",
    text: "contextは組み立て時だけ使われ、生成後のオブジェクトはAPP_DEBUGや実行モードを参照しません。",
  },
  {
    title: "イベントドリブンキャッシュ",
    text: "TTLだけに頼らず、変更イベントからサーバーとCDNの依存キャッシュ、ETagを連鎖的に無効化します。",
  },
  {
    title: "CDN Read Model",
    text: "PHPが生成したHTTP表現をCDNにmaterializeし、変更がない限りCDNから配信し続けます。",
  },
  {
    title: "HTTPの壁なしの統合",
    text: "複数アプリケーションをnamespaceとDI bindingで統合し、通信境界を作らずに独立性を保ちます。",
  },
  {
    title: "ポータブルリソース",
    text: "BEAR.Sundayで作ったリソースはpackageとして取り込み、他のPHPアプリケーションからURIで呼び出せます。",
  },
  {
    title: "透過的な並列実行",
    text: "URIがWhatを表し、HowをModuleへ隠蔽するため、埋め込みリソースの並列実行へコード変更なしで移行できます。",
  },
  {
    title: "Application as Documentation",
    text: "ApiDoc HTML、OpenAPI 3.1、JSON Schema、llms.txtへ接続し、実装から読めるドキュメントを生成できます。",
  },
];

const valueSignals = [
  {
    title: "開発者",
    text: "Resource、DI、AOP、Contextが責務を分け、実行モード分岐や暗黙の依存を追わずにビジネスロジックへ集中できます。",
  },
  {
    title: "ユーザー",
    text: "本質的に静的なRead ModelをCDN、ETag、304へ接続し、速く安定した応答を届けます。",
  },
  {
    title: "ビジネス",
    text: "後方互換性、標準技術、CDN中心設計により、移行、保守、運用の継続コストを下げます。",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f7f3] text-[#111611]">
      <SiteHeader />

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
              Webの原則を、アプリケーションの内側まで。
            </p>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#283229] sm:text-2xl sm:leading-10">
              一つの ResourceObject が、Web API・HTML・コンソール・AIの道具・ドキュメントになる。
              書く場所は一つ。出口ごとに、作り直さない。
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                className="rounded-md bg-[#111611] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#2f3a31]"
                href="/quick-start"
              >
                Quick Start
              </a>
              <a
                className="rounded-md border border-[#111611]/25 bg-white/70 px-5 py-3 text-center text-sm font-semibold text-[#111611] transition hover:bg-white"
                href="/business"
              >
                ビジネス向けに見る
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
              同じ URI から、表現だけが変わる。
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

      <section id="architecture" className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-[#1f7a5a]">
              Architecture
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              REST、DI、AOPを設計の制約にする。
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#3b463d]">
              BEAR.Sundayは、フルスタックの便利箱ではなく、アプリケーションの形を保つフレームワークです。
              ライブラリは選べる。制約は揺れない。その分、コードの意味が長く残ります。
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
            href="/architecture"
          >
            設計を詳しく見る
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
              技術的特徴を、持続する価値へ。
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#36434c]">
              BEAR.Sundayの価値は、便利機能の多さではなく、設計制約が長く効き続けることにあります。
              Resource、context-agnostic DI、AOP、CDN中心Read Modelが、開発、利用体験、ビジネス継続性へ
              同じ構造から価値を届けます。
            </p>
            <a
              className="mt-8 inline-flex rounded-md bg-[#245c7a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1c495f]"
              href="/value"
            >
              もたらす価値を見る
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
              技術的な特徴が、設計の制約になる。
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#3b463d]">
              BEAR.Sundayは、抽象的な設計思想だけのフレームワークではありません。
              実行時性能、キャッシュ、並列実行、ドキュメント生成まで、技術的な特徴がアプリケーションの構造に直結します。
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
            href="/tech"
          >
            技術的特徴を見る
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
              AI時代に強いのは、推測しなくていいコード。
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/74">
              AIエージェントが設計を読み、変更し、レビューする時代には、暗黙の規約よりも
              宣言性、明示性、トレーサビリティが価値になります。BEAR.Sundayはそれを
              アプリケーションの構造として持ちます。
            </p>
            <a
              className="mt-8 inline-flex rounded-md bg-[#9ee0bb] px-5 py-3 text-sm font-semibold text-[#111611] transition hover:bg-[#c0f0d3]"
              href="/ai-era"
            >
              AI時代の価値を読む
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
              変更の影響を、リソースからたどる。
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#3b463d]">
              URI、リンク、埋め込み、スキーマ、context module。アプリケーションの意味を
              複数の場所に散らさず、たどれる単位として保ちます。
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
              リソースは、状態を決めるだけ。
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#36434c]">
              表現はレンダラーへ、依存はDIへ、横断的関心はAOPへ。クラスの責務を狭く保つことで、
              テストもレビューもAIによる解析も素直になります。
            </p>
            <a
              className="mt-8 inline-flex rounded-md bg-[#245c7a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1c495f]"
              href="/examples"
            >
              実装例を見る
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

      <section id="start" className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-[#1f7a5a]">
              Start small
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              まずは1つのリソースから。
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#3b463d]">
              Composerで雛形を作り、最初の Page Resource を書く。Webでもコンソールでも同じ意味を持つ
              小さな単位から、長く育つアプリケーションを始められます。
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
                href="/quick-start"
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

      <SiteFooter />
    </main>
  );
}

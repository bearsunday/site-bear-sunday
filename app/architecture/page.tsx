import type { Metadata } from "next";
import { CtaBand, PageHero, PageShell } from "../_components/site-chrome";

export const metadata: Metadata = {
  title: "設計 | BEAR.Sunday",
  description:
    "BEAR.SundayのResource Oriented Architecture、DI、AOP、Contextを紹介します。",
};

const pillars = [
  {
    title: "Resource Oriented Architecture",
    text: "アプリケーションの入口をページやコントローラーではなく、URIで識別できるリソースとして設計します。状態、リンク、表現の境界が揃うため、Web API、HTML、CLIで同じ意味を共有できます。",
  },
  {
    title: "Dependency Injection",
    text: "Google GuiceのコンセプトをPHPへ発展させたRay.Diで、型とQualifierをKeyにして依存関係を解決します。Moduleが束縛を宣言し、Injectorがオブジェクトグラフを生成します。",
  },
  {
    title: "Aspect Oriented Programming",
    text: "キャッシュ、トランザクション、ログ、認可などの横断的関心をInterceptorとして分離します。リソースクラスはアプリケーションの意味に集中できます。",
  },
  {
    title: "Context",
    text: "prod-hal-api-app のようなcontext stringで環境・表現・アプリケーション種別を組み合わせます。環境分岐をアプリケーションコードに混ぜず、DI moduleで差分を表現します。",
  },
  {
    title: "Context Agnostic Objects",
    text: "contextはオブジェクトグラフ生成時だけ使われ、生成後のオブジェクトは自分がどのcontextで作られたかを知りません。APP_DEBUGのような実行モード参照を構造から排除します。",
  },
  {
    title: "ADP Package Structure",
    text: "フレームワークpackageもアプリケーションも、循環依存を避ける方向に構成されます。複数アプリケーションをHTTP境界ではなく、namespaceとDI bindingで統合し、他のPHPアプリケーションからもリソースとして呼び出せます。",
  },
];

const rayDiConcepts = [
  {
    title: "Key",
    text: "型とQualifier属性で依存を識別します。同じinterfaceでも、支払い用、ログ用、テスト用の実装を混同せずに扱えます。",
  },
  {
    title: "Module",
    text: "束縛を集める構成単位です。機能、環境、表現ごとのModuleを組み合わせ、contextに応じたobject graphを作ります。",
  },
  {
    title: "Provider",
    text: "生成が複雑な依存、遅延生成、scopeの混在を扱います。利用側は生成方法を知らず、必要な依存だけを宣言します。",
  },
  {
    title: "Scope",
    text: "prototype、singletonなどのライフサイクルを束縛側で制御します。オブジェクト自身が自分の寿命を知る必要はありません。",
  },
  {
    title: "Interceptor",
    text: "AOP Allianceに近いMethodInterceptorで、トランザクション、認可、キャッシュを本体コードから分離します。",
  },
  {
    title: "Compiler",
    text: "依存グラフからPHP factory codeを生成し、本番ではコンテナ初期化の負荷を抑えます。生成結果は追跡可能な構造になります。",
  },
];

const flow = [
  "Request: app://self/profile?id=1",
  "Resource: Profile::onGet(int $id)",
  "Body: 状態を配列または値オブジェクトとして保持",
  "Links: HALや属性で遷移可能性を宣言",
  "Renderer: HTML、JSON、HAL、CLIへ表現を変換",
];

export default function ArchitecturePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Architecture"
        lead="BEAR.Sundayは、Webの制約をアプリケーション内部の設計原則として扱います。Resource、DI、AOP、Contextが役割を分けるため、コードの意味が読みやすく、長期運用に耐える構造になります。"
        title="設計を、実装のあとに隠さない。"
      />

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

      <section className="border-y border-black/10 bg-[#111611] px-5 py-20 text-white sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase text-[#9ee0bb]">
              Ray.Di and Guice
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              依存解決は、実行時の探し物ではなく、宣言されたグラフの生成。
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/76">
              Ray.Diの中心には、Google Guice由来の考え方があります。アプリケーションコードは依存を取りに行かず、
              constructorで必要なものを宣言します。Moduleは「このKeyにはこのProvider」という束縛を定義し、
              Injectorは依存の依存までたどって、実行前にobject graphを組み立てます。
            </p>
            <p className="mt-5 text-lg leading-8 text-white/76">
              だからBEAR.SundayのDIは、便利な自動配線ではありません。context、binding、scope、interceptorを
              object graphの構成として扱い、生成後のオブジェクトから構成情報への参照可能性を消します。
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
              リクエストから表現まで、同じ意味を運ぶ。
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#3b463d]">
              MVCのように役割名で分けるのではなく、リソースを中心に状態とリンクをまとめます。
              レンダリングや転送は外側へ分離されるため、リソースは「何であるか」を保ちます。
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
            変化はmoduleへ。リソースの意味は保つ。
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-3">
            {[
              "環境差分はcontext moduleで表現する",
              "生成後のオブジェクトはcontextを知らない",
              "表現形式はrendererで切り替える",
              "横断的処理はinterceptorで付与する",
              "複数アプリをHTTPの壁なしに統合する",
              "他のPHPアプリからBEARリソースを呼び出せる",
            ].map((item) => (
              <div className="rounded-lg border border-black/10 bg-white p-6" key={item}>
                <p className="text-xl font-black">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </PageShell>
  );
}

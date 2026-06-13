import type { Metadata } from "next";
import { CtaBand, PageHero, PageShell } from "../../_components/site-chrome";

export const metadata: Metadata = {
  title: "もたらす価値 | BEAR.Sunday",
  description:
    "BEAR.Sundayの技術的特徴が、開発者、ユーザー、ビジネスにどのような価値をもたらすかを紹介します。",
};

const valueMechanisms = [
  {
    title: "設計制約が、意味を残す",
    text: "Resource、Ray.Di、AOP、Contextに責務を分けることで、アプリケーションの意味がコントローラー、設定、暗黙の規約へ散らばりません。コードを読めば、何が入力で、何に依存し、どの表現へ出るのかを追えます。",
  },
  {
    title: "Read Modelが、Webの仕組みに乗る",
    text: "本質的に静的なリソース表現を生成し、ETag、304、依存タグ、CDN purgeへ接続します。単なるキャッシュではなく、アプリケーションの読み取りモデルをWebインフラ上に創り出す設計です。",
  },
  {
    title: "変更は、外側から差し替える",
    text: "Guice由来のModule、Binding、ProviderとAOPにより、環境差分、表現形式、横断的関心をリソースの中へ混ぜません。振る舞いの変更は束縛やInterceptorへ寄せられ、ビジネスロジックの輪郭が残ります。",
  },
];

const audienceValues = [
  {
    audience: "開発者にとって",
    headline: "コアのロジックに集中できる。",
    text: "BEAR.Sundayは便利な部品を大量に抱えるのではなく、変わりにくい制約を提供します。ResourceObjectはアプリケーションの意味を表し、依存はRay.DiのKeyとProviderから入り、表現やキャッシュは外側で扱われます。開発者はAPP_DEBUGのような実行モード分岐やサービスロケータを追う必要がなく、リソースの責務に集中できます。",
    points: [
      "URI、onGet / onPost、Link、Embedから機能の境界を追える",
      "Ray.DiとROAにより、テスト対象を小さく保てる",
      "ライブラリ非同梱方針により、標準部品を選んで交換できる",
    ],
  },
  {
    audience: "チームにとって",
    headline: "疎結合のまま、構造を共有できる。",
    text: "個人の流儀でコードを増やすのではなく、Resource、Module、Interceptor、Rendererという共通の置き場所が決まります。複数の開発者やAIエージェントが同じ地図で変更でき、レビューでは「この処理はどこに置くべきか」を具体的に議論できます。",
    points: [
      "依存方向がDIPとADPで揃うため、変更の影響を局所化しやすい",
      "context moduleが環境差分を集約し、実装内の条件分岐を減らす",
      "ドキュメント、スキーマ、llms.txtが実装の意味モデルにつながる",
    ],
  },
  {
    audience: "ユーザーにとって",
    headline: "速く、安定して、同じ機能に届く。",
    text: "ユーザー価値は、フレームワーク名ではなく体験に現れます。本質的に静的なコンテンツはCDNから配信され、変更がなければETagで304になります。オリジンやDBに到達しないリクエストが増えるほど、レスポンスは速くなり、障害時にも読める範囲が広がります。",
    points: [
      "CDN中心のRead Modelにより、応答速度と可用性が上がる",
      "依存解決により、古い表現や古いETagを残しにくい",
      "同じリソースをWeb、API、CLIへ接続できる",
    ],
  },
  {
    audience: "ビジネスにとって",
    headline: "継続コストを下げ、変化に耐える。",
    text: "短期の開発速度だけでなく、運用後に変更し続けられることが価値になります。BEAR.Sundayは後方互換性を重視し、標準技術へ接続し、キャッシュをアーキテクチャに織り込みます。機能追加、表現変更、アプリ統合をHTTPの壁で分断せず、namespaceとDI bindingで扱えることは、組織の成長に効きます。",
    points: [
      "Eternal 1.xの方針が、移行コストと技術的断絶を抑える",
      "CDNと304の活用が、インフラ負荷と障害影響を下げる",
      "複数アプリケーションをHTTP境界なしに統合できる",
    ],
  },
];

const chain = [
  "Resourceとして意味を表す",
  "Ray.DiのModuleで依存を宣言する",
  "Injectorがobject graphを生成する",
  "AOPで横断的関心を付与する",
  "Read Modelとして表現を生成する",
  "CDN、ETag、304へ接続する",
  "速さ、保守性、継続性として返る",
];

export default function ValuePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Value"
        lead="BEAR.Sundayの価値は、生産性、拡張性、パフォーマンスといった一般語だけでは説明しきれません。価値の源泉は、Resource、context-agnostic DI、AOP、CDN中心のRead Modelが、設計から運用まで同じ意味を保つところにあります。このページは、技術がどう価値に変わるか、その因果をたどります。"
        title="技術的特徴を、持続する価値へ。"
      />

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase text-[#1f7a5a]">
              From mechanism to value
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              価値は、機能の数ではなく、制約の質から生まれる。
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#3b463d]">
              フレームワークの価値を、便利な機能一覧として説明すると弱くなります。
              BEAR.Sundayでは、技術的特徴がアプリケーションの形を決め、その形が開発、運用、利用体験に
              直接つながります。制約があるから、コードの意味が残り、変更の影響を追えます。
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
              設計上の選択が、利用者の体験まで届く。
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/76">
              BEAR.Sundayでは、内部の設計原則と外部のWebインフラが分断されません。
              リソースの意味、依存関係、表現の同一性がつながるため、開発しやすさと配信品質が同じ線上にあります。
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
            開発者、ユーザー、ビジネスに、別々ではなく同じ構造から価値が届く。
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
              BEAR.Sundayは、Webアプリケーションの意味を長く保つためのフレームワーク。
            </h2>
            <a
              className="mt-8 inline-flex rounded-md bg-[#245c7a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1c495f]"
              href="/ja/business"
            >
              事業の言葉で読む
            </a>
          </div>
          <div className="rounded-lg border border-black/10 bg-white p-6">
            <p className="text-lg leading-8 text-[#3b463d]">
              開発者には、変更しやすく読める構造を。ユーザーには、速く安定した体験を。
              ビジネスには、移行と運用のコストを抑えながら成長できる土台を。
              その3つは別々の機能ではなく、Resource、DI、AOP、CDN中心のRead Modelという同じ設計から生まれます。
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </PageShell>
  );
}

import type { Metadata } from "next";
import { CtaBand, PageHero, PageShell } from "../_components/site-chrome";

export const metadata: Metadata = {
  title: "技術的特徴 | BEAR.Sunday",
  description:
    "BEAR.Sundayのイベントドリブンコンテンツ、依存解決、ETag、CDN中心Read Model、ドーナツキャッシュを統合的に紹介します。",
};

const cacheLevels = [
  "Server-side resource cache",
  "CDN shared cache",
  "Client HTTP cache",
];

const dependencyGraph = [
  { name: "Article", depends: "Profile, Comments, Weather" },
  { name: "Comments", depends: "Comment items" },
  { name: "Weather", depends: "Forecast source" },
];

const contextAxes = [
  "prod: production constraints",
  "hal: representation",
  "api: application surface",
  "app: resource namespace",
];

const rayDiMechanics = [
  {
    title: "Key = type + qualifier",
    text: "同じinterfaceでもQualifier属性で別の依存として識別します。依存の意味は文字列の実行時分岐ではなく、型付きのKeyになります。",
  },
  {
    title: "Module as binding map",
    text: "ModuleはGuiceと同じく束縛の集合です。installとoverrideで機能単位の構成を組み替え、contextごとのgraphを作ります。",
  },
  {
    title: "Provider and scope",
    text: "複雑な生成、遅延生成、singletonやprototypeの寿命はProviderとScopeに閉じ込めます。利用側のオブジェクトは生成事情を知りません。",
  },
  {
    title: "Compiled factories",
    text: "ScriptInjectorは依存グラフからPHP factory codeを生成します。本番ではコンテナを毎回解釈せず、生成済みのgraphで起動できます。",
  },
];

const portableResourceFlow = [
  "Composer packageとしてvendor配下に取り込む",
  "必要なcontextでResource clientを組み立てる",
  "app:// URIでリソースを呼び出す",
  "ResourceObjectの表現を既存アプリケーション側で利用する",
];

const portableResourcePoints = [
  {
    title: "フレームワーク境界を越える",
    text: "BEAR.Sundayのリソースは、HTTP controllerに閉じた処理ではありません。Resource clientを注入できれば、他のPHPアプリケーションからもURIで呼び出せます。",
  },
  {
    title: "microservice without network",
    text: "独立したアプリケーションを別プロセスやHTTPサービスに分けなくても、package、namespace、DI bindingで独立性を保ったまま統合できます。",
  },
  {
    title: "移行と共存に使える",
    text: "既存アプリケーションの中からBEAR.Sundayの新しいリソースを呼び出し、必要な機能だけを段階的に導入できます。",
  },
];

const bridgeDirectionPoints = [
  {
    title: "API / CLI / Homebrewを別実装にしない",
    text: "APIサイトやCLIコマンドを追加実装するのではなく、既存のResourceObjectをAPIやコマンドとして転送します。Homebrewで配布するコマンドになっても、アプリケーションの意味は同じリソースに残ります。",
  },
  {
    title: "Tool / MCPもリソースを入口にする",
    text: "AI向けの関数群を別に作るのではなく、リソースをTool Useへブリッジします。MCPのような新しい入口が必要なら、作るべき中心は業務ロジックではなくリソースとのブリッジです。",
  },
  {
    title: "IDLからcontrollerを作らない",
    text: "先にIDLを置き、それに合わせてcontrollerを実装する向きではありません。リソースが先にあり、HTTP、Tool Use、ドキュメント、スキーマが、その意味を外へ運びます。",
  },
  {
    title: "多言語もブリッジでつなぐ",
    text: "BEAR.Thriftを使えば、BEAR.Sundayリソースを他言語や異なるPHPバージョンから利用できます。リソースの汎用性が、HTTPの外側にも伸びます。",
  },
];

const performancePoints = [
  {
    title: "質の悪いDBアクセスを出荷前に止める",
    text: "SQL fileとparameterが独立しているため、実行計画、フルテーブルスキャン、非効率なJOINをCIで解析できます。本番で遅さとして発見する前に、DBアクセスを品質ゲートにかけられます。",
  },
  {
    title: "DataLoaderがN+1をバッチ化する",
    text: "linkCrawlでリソースグラフを構成するとき、子リソースごとのDBアクセスはDataLoaderでまとめられます。複数のリソースリクエストを、1つの効率的なクエリへ変換できます。",
  },
  {
    title: "DIコンパイラで起動コストを抑える",
    text: "依存グラフは実行時に毎回探索する対象ではありません。ScriptInjectorでPHP factory codeへ生成し、本番ではDI containerを解釈せず、生成済みのobject graphで起動できます。",
  },
  {
    title: "ルートオブジェクトキャッシュ",
    text: "contextに応じて組み立てたアプリケーションのルートオブジェクトをシリアライズし、リクエスト間で再利用できます。DIコンテナとAOP構成を毎回生成せず、通常のリクエスト処理から外せます。",
  },
  {
    title: "Embed表現を並列実行へ切り替えられる",
    text: "BEAR.Asyncを使うと、逐次取得されていた#[Embed]リソースを、リソースコードを変えずに並列取得へ切り替えられます。HTML表現でもJSON表現でも、埋め込まれたリソースは並列に取得され、Moduleの差し替えだけで実行戦略を変えられます。",
  },
];

const compositionPoints = [
  {
    title: "実行モードを読まない",
    text: "APP_DEBUGやAPP_MODEのようなグローバル値で分岐しません。振る舞いの差はinterfaceへの束縛として注入されます。",
  },
  {
    title: "contextは組み立て時だけ存在する",
    text: "prod-hal-api-appのようなcontextはオブジェクトグラフ生成に使われ、生成後のオブジェクトは自分がどのcontextで作られたかを知りません。",
  },
  {
    title: "DIPとADPをフレームワークまで徹底",
    text: "アプリケーションだけでなくフレームワークのpackage構造も依存方向を保ちます。外側の都合を内側が参照しない設計です。",
  },
  {
    title: "表現ではなくリソースをテストする",
    text: "HTMLアプリケーションもAPIアプリケーションも同じResourceObjectを通るため、テストはapp:// URIでリソースを呼び、body、headers、linksを確認できます。レンダリング後のHTMLを解析して業務結果を推測する必要はありません。",
  },
];

export default function TechPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Technology"
        lead="BEAR.Sundayのキャッシュは、レスポンスを一時保存する仕組みではありません。本質的に静的なリソース表現をRead Modelとして創成し、サーバー、CDN、クライアントの各層で同一性と依存関係を維持するアーキテクチャです。"
        title="静的Webの自然な仕組みを、動的アプリケーションへ。"
      />

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-[#1f7a5a]">
              Central idea
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              キャッシュではなく、Read Modelの生成。
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#3b463d]">
              ブログ記事、商品情報、ニュース本文、プロフィールのようなコンテンツは、リクエストのたびに
              PHPとDBを通るため「動的」に見えます。しかし、同じリソース状態から同じ表現が返るなら、
              それは本質的には静的です。変わるのは時刻ではなくイベントです。
            </p>
            <p className="mt-5 text-lg leading-8 text-[#3b463d]">
              BEAR.Sundayはこの性質をアーキテクチャとして扱います。ResourceObjectがHTTP表現を生成し、
              依存関係をURIタグとして保持し、ETagで同一性を表します。生成された表現はサーバーキャッシュや
              CDNに配置され、変更イベントが起きるまで静的コンテンツとして配信されます。
            </p>
          </div>

          <div className="rounded-lg border border-black/10 bg-white p-6 shadow-[0_18px_60px_rgba(17,22,17,0.09)]">
            <div className="rounded-md bg-[#111611] p-5 text-white">
              <p className="font-mono text-xs uppercase text-white/54">
                Write model
              </p>
              <p className="mt-2 text-2xl font-black">Database + Commands</p>
            </div>
            <div className="mx-auto h-8 w-px bg-black/20" />
            <div className="rounded-md border border-black/10 bg-[#f4f7f3] p-5">
              <p className="font-mono text-xs uppercase text-[#667068]">
                Projection
              </p>
              <p className="mt-2 text-2xl font-black">
                ResourceObject creates representation
              </p>
            </div>
            <div className="mx-auto h-8 w-px bg-black/20" />
            <div className="grid grid-cols-1 gap-3">
              {cacheLevels.map((level) => (
                <div className="rounded-md border border-black/10 bg-white p-4" key={level}>
                  <p className="font-semibold">{level}</p>
                  <p className="mt-2 text-sm leading-6 text-[#465148]">
                    Cache body, dependency tags, and ETag identity.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#111611] px-5 py-20 text-white sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase text-[#9ee0bb]">
            Event-driven content
          </p>
          <div className="mt-4 grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <h2 className="text-4xl font-black sm:text-5xl">
                タイミングが読めない静的コンテンツ。
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/76">
                Event-driven contentの要点は、変化の時刻が予測できないことと、内容が常に揺らぐことを
                混同しないところにあります。記事はいつ編集されるか分かりません。コメントはいつ追加されるか
                分かりません。それでも、イベントが起きていない間、その表現は静的です。
              </p>
              <p className="mt-5 text-lg leading-8 text-white/76">
                Fastlyはこの種のコンテンツを、未知の期間だけ静的で、変わるかもしれないコンテンツとして整理しました。
                必要なのは短いTTLではなく、アプリケーションが知っている変更イベントから、CDNへ即時かつプログラム可能に
                purgeを届けることです。
              </p>
              <p className="mt-5 text-lg leading-8 text-white/76">
                だからTTLを短く刻んで不安を薄めるのではなく、変更を知っているアプリケーションが
                依存する表現を破棄します。変更がなければCDNは同じ表現を配信し続け、クライアントは
                ETagで同一性を確認し、同じなら304 Not Modifiedで済ませます。
              </p>
            </div>
            <div className="rounded-lg border border-white/16 bg-white/[0.06] p-6">
              <p className="font-mono text-xs uppercase text-[#9ee0bb]">
                Classification
              </p>
              <div className="mt-6 grid grid-cols-1 gap-4">
                <div className="rounded-md border border-white/16 p-5">
                  <h3 className="text-2xl font-black">本質的に静的</h3>
                  <p className="mt-3 leading-7 text-white/76">
                    状態が変わらない限り、同じURIは同じ表現になる。イベントでのみ変化する。
                  </p>
                </div>
                <div className="rounded-md border border-white/16 p-5">
                  <h3 className="text-2xl font-black">本質的に動的</h3>
                  <p className="mt-3 leading-7 text-white/76">
                    リクエストごとに意味が変わる。個人化、乱数、現在時刻、計算過程そのものが表現になる。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#f4f7f3] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-[#245c7a]">
              Dependency resolution
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              連鎖破壊は、コンテンツとETagの両方に届く。
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#3b463d]">
              コンテンツAがBに依存し、BがCに依存するなら、Cの変更はCのキャッシュだけで終わりません。
              BとAの表現も、BとAのETagも、古い同一性を示してしまうため破棄される必要があります。
            </p>
            <p className="mt-5 text-lg leading-8 text-[#3b463d]">
              BEAR.Sundayでは、`#[Embed]`されたリソースや明示された依存URIがタグになります。
              AOPが変更を検知すると、サーバーサイドのキャッシュとETagが連鎖的に無効化され、可能な場合は
              CDNのSurrogate-Keyにも同じ依存関係が伝播します。依存解決はサーバーの中だけで閉じません。
            </p>
          </div>
          <div className="rounded-lg border border-black/10 bg-[#f4f7f3] p-6">
            <p className="font-mono text-xs uppercase text-[#667068]">
              Dependency graph
            </p>
            <div className="mt-6 grid grid-cols-1 gap-3">
              {dependencyGraph.map((node) => (
                <div className="rounded-md border border-black/10 bg-white p-5" key={node.name}>
                  <h3 className="text-2xl font-black">{node.name}</h3>
                  <p className="mt-2 font-mono text-sm text-[#667068]">
                    depends on: {node.depends}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-md bg-[#111611] p-5 text-white">
              <p className="font-semibold">
                Forecast sourceが変わると、WeatherとArticleのキャッシュ、そしてそれぞれのETagがサーバー層とCDN層で無効化されます。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#e8eef4] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-[#245c7a]">
              Partial read models
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              部分コンテンツも、Read Modelの一部になる。
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#36434c]">
              ページ全体をキャッシュできるかどうか、という二択ではありません。BEAR.Sundayはドーナツキャッシュと
              ドーナツの穴キャッシュを持ち、キャッシュできる部分、できない部分、別の周期で変化する部分を分けて扱います。
            </p>
            <p className="mt-5 text-lg leading-8 text-[#36434c]">
              重要なのは、部分表現の依存も全体の同一性に反映されることです。穴の中身が変われば、必要な範囲だけを
              再生成し、全体のETagも更新されます。静的なWebのキャッシュモデルを、部分表現の合成にまで広げています。
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <article className="rounded-lg border border-black/10 bg-white p-6">
              <h3 className="text-2xl font-black">Donut cache</h3>
              <p className="mt-4 leading-7 text-[#465148]">
                全体の中にキャッシュできない穴がある場合、周辺の本質的に静的な部分を再利用します。
              </p>
            </article>
            <article className="rounded-lg border border-black/10 bg-white p-6">
              <h3 className="text-2xl font-black">Donut hole cache</h3>
              <p className="mt-4 leading-7 text-[#465148]">
                穴そのものもキャッシュ可能な場合、部分リソースの変更が全体のキャッシュとETagへ伝播します。
              </p>
            </article>
            <article className="rounded-lg border border-black/10 bg-white p-6">
              <h3 className="text-2xl font-black">Recursive composition</h3>
              <p className="mt-4 leading-7 text-[#465148]">
                AがBを含み、BがCを含む場合でも、変更されたC以外を再利用して最小コストで再生成します。
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase text-[#1f7a5a]">
              Performance and delivery quality
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              速さは、最適化ではなく設計の帰結。
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#3b463d]">
              BEAR.Sundayは、極端なほどパフォーマンスを設計の中に置きます。速くするための後付け最適化ではなく、
              SQL、リソースグラフ、DI graph、root objectが明示的な構造として存在すること自体が性能につながります。
              だから出荷前に検査でき、実行時にはバッチ化、DI compile、ルートオブジェクトキャッシュ、並列化へ切り替えられます。
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {performancePoints.map((item) => (
              <article className="rounded-lg border border-black/10 bg-white p-6" key={item.title}>
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-4 leading-8 text-[#465148]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-[#1f7a5a]">
              Context-agnostic DI
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              生成されたオブジェクトは、モードを知らない。
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#3b463d]">
              BEAR.SundayはDIをアプリケーションの便利機能として使うだけではありません。
              Google Guiceのコンセプトを継ぐRay.Diを基盤に、フレームワークそのものがDIPとADPに従います。
              実行時にグローバルなモードや設定を参照して振る舞いを変えることを避けます。
            </p>
            <p className="mt-5 text-lg leading-8 text-[#3b463d]">
              contextは `prod-hal-api-app` のように、環境、表現、入出力面、アプリケーション種別を
              組み合わせるマトリクスです。ただし、それはオブジェクトグラフを組み立てるためだけに使われます。
              生成後のオブジェクトは、自分がproductionなのか、HTMLなのか、APIなのかを参照する必要も、
              参照する手段も持ちません。
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="rounded-lg border border-black/10 bg-[#f4f7f3] p-6">
              <p className="font-mono text-xs uppercase text-[#667068]">
                context string
              </p>
              <p className="mt-3 text-3xl font-black">prod-hal-api-app</p>
              <div className="mt-5 grid grid-cols-1 gap-3">
                {contextAxes.map((item) => (
                  <div className="rounded-md border border-black/10 bg-white px-4 py-3" key={item}>
                    <p className="font-mono text-sm text-[#344036]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {rayDiMechanics.map((item) => (
                <article className="rounded-lg border border-black/10 bg-white p-5" key={item.title}>
                  <h3 className="text-xl font-black">{item.title}</h3>
                  <p className="mt-3 leading-7 text-[#465148]">{item.text}</p>
                </article>
              ))}
            </div>
            {compositionPoints.map((item) => (
              <article className="rounded-lg border border-black/10 bg-white p-6" key={item.title}>
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-4 leading-7 text-[#465148]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#e8eef4] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-[#245c7a]">
              Application composition
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              HTTPの壁を立てずに、複数アプリケーションを統合する。
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#36434c]">
              同じリソース群をHTMLアプリケーションとしてもAPIアプリケーションとしても実行できるのは、
              振る舞いがcontext moduleとDI bindingで組み替えられるからです。リソースのコード自身は、
              どの表現で呼ばれているかを知る必要がありません。
            </p>
            <p className="mt-5 text-lg leading-8 text-[#36434c]">
              つまり、HTMLサイトとAPIサイトを別々の実装として作る必要はありません。HTML表現もAPI表現も
              同じリソースから生まれるため、画面の機能テストでもHTML文字列を解析せず、APIと同じように
              リソースの状態、リンク、ヘッダーを確認できます。
            </p>
            <p className="mt-5 text-lg leading-8 text-[#36434c]">
              さらに、別のアプリケーションをvendor packageとして取り込み、名前空間と依存関係で独立性を保ったまま
              統合できます。HTTPでサービス境界を作って分割しなくても、DIPとADPに沿って独立したアプリケーションを
              1つのオブジェクトグラフに組み込めます。
            </p>
            <p className="mt-5 text-lg leading-8 text-[#36434c]">
              この性質は外部からの呼び出しにも効きます。BEAR.Sundayで作ったリソースをpackageとして取り込み、
              Resource clientを既存アプリケーションへ注入すれば、他のPHPフレームワーク上のコードからも
              app:// URIで同じリソースを呼び出せます。
            </p>
          </div>
          <div className="rounded-lg border border-black/10 bg-white p-6 shadow-[0_18px_60px_rgba(17,22,17,0.08)]">
            <p className="font-mono text-xs uppercase text-[#667068]">
              without an HTTP wall
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4">
              {[
                "MyVendor\\Cms\\Resource",
                "MyVendor\\Blog\\Resource",
                "Acme\\Inventory\\Resource",
              ].map((item) => (
                <div className="rounded-md border border-black/10 bg-[#f4f7f3] p-4" key={item}>
                  <p className="font-mono text-sm font-bold">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-md bg-[#111611] p-5 text-white">
              <p className="leading-7">
                独立したアプリケーションを、通信プロトコルではなくpackage、namespace、DI bindingで構成する。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase text-[#245c7a]">
              Direction of technology
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              入口を作るのではなく、リソースを入口にする。
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#3b463d]">
              多くのフレームワークでは、HTMLとは別にAPI controllerを作り、CLIやAI向けにはまた別の実装を作ります。
              BEAR.Sundayでは向きが逆です。アプリケーションの意味はResourceObjectにあり、HTTP、HTML、API、
              CLI、Homebrewコマンド、Tool Use、多言語連携は、そのリソースへ接続するブリッジになります。
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-4">
            {bridgeDirectionPoints.map((item) => (
              <article className="rounded-lg border border-black/10 bg-[#f4f7f3] p-6" key={item.title}>
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-4 leading-8 text-[#465148]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-[#1f7a5a]">
              Portable resources
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              他のPHPアプリケーションから、リソースとして呼べる。
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#3b463d]">
              BEAR.SundayのResourceObjectは、特定のWebフレームワークのcontroller actionではありません。
              URIで識別され、Resource clientから呼び出されるアプリケーション部品です。そのため、
              BEAR.Sundayで作った機能をvendor配下に取り込み、既存のPHPアプリケーションから利用できます。
            </p>
            <p className="mt-5 text-lg leading-8 text-[#3b463d]">
              これは単なるモジュラモノリスではありません。ネットワーク越しのマイクロサービスを作らずに、
              リソース単位の独立性、再利用性、URIによる呼び出し境界を得る設計です。
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="rounded-lg border border-black/10 bg-[#f4f7f3] p-6">
              <p className="font-mono text-xs uppercase text-[#667068]">
                call flow
              </p>
              <ol className="mt-5 grid grid-cols-1 gap-3">
                {portableResourceFlow.map((item, index) => (
                  <li className="flex gap-4 rounded-md border border-black/10 bg-white p-4" key={item}>
                    <span className="font-mono text-sm font-bold text-[#1f7a5a]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="leading-7 text-[#344036]">{item}</span>
                  </li>
                ))}
              </ol>
            </div>
            {portableResourcePoints.map((item) => (
              <article className="rounded-lg border border-black/10 bg-white p-6" key={item.title}>
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-4 leading-7 text-[#465148]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111611] px-5 py-20 text-white sm:px-8 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase text-[#9ee0bb]">
            Architecture
          </p>
          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            キャッシュは、後付けの最適化ではない。
          </h2>
          <p className="mt-6 text-xl leading-9 text-white/78">
            BEAR.Sundayにおけるキャッシュは、レスポンスを速くするための補助機能ではありません。
            リソースから本質的に静的なHTTP表現を生成し、その同一性をETagで示し、その依存関係をサーバーとCDNにまたがって
            維持し、変更イベントで破棄する。これは、アプリケーションのRead ModelをWebの仕組みとして創成する設計です。
          </p>
        </div>
      </section>

      <CtaBand />
    </PageShell>
  );
}

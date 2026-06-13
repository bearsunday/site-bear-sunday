import type { Metadata } from "next";
import { CtaBand, PageHero, PageShell } from "../../_components/site-chrome";

export const metadata: Metadata = {
  title: "Web原則とREST | BEAR.Sunday",
  description:
    "URI、統一インターフェース、ハイパーメディア。BEAR.Sundayは、四半世紀Webを支えてきたRESTを、外部APIだけでなくアプリケーション全体の設計制約にします。",
};

const methodRows = [
  {
    method: "GET",
    safe: "安全",
    idempotent: "冪等",
    note: "状態を読む。リソースを変えない。",
  },
  {
    method: "POST",
    safe: "—",
    idempotent: "—",
    note: "状態を変える操作。冪等でなく、連続実行で結果が変わりうる。",
  },
  {
    method: "PUT",
    safe: "—",
    idempotent: "冪等",
    note: "状態を指定する操作。冪等で、連続実行でも結果は同じ。",
  },
  {
    method: "PATCH",
    safe: "—",
    idempotent: "—",
    note: "差分を適用する。",
  },
  {
    method: "DELETE",
    safe: "—",
    idempotent: "冪等",
    note: "削除する。PUTと同じく冪等。",
  },
  {
    method: "OPTIONS",
    safe: "安全",
    idempotent: "冪等",
    note: "必要な引数と応答を問い合わせる。",
  },
];

const classicPillars = [
  {
    title: "リソースの識別",
    text: "すべてをURIで識別します。app://self/user は「ユーザー情報が欲しい」という意図を指し、MySQLかRedisか、どう取得するか(How)はアプリケーションから隠れています。",
  },
  {
    title: "表現を通じた操作",
    text: "クライアントはリソースを直接いじらず、表現(representation)を介して操作します。状態は表現と分離され、同じ状態からHTML・JSON・HAL・CLIが生まれます。",
  },
  {
    title: "自己記述メッセージ",
    text: "メソッドの安全性・冪等性、メディアタイプ、ステータスコードが、メッセージ自身に意味を載せます。受け手は隠れた文脈を推測せず、メッセージだけで解釈できます。",
  },
  {
    title: "ハイパーメディア(HATEOAS)",
    text: "リソースは次にできること(affordance)をリンクとして差し出します。クライアントは次の遷移を推測せず、差し出されたリンクをたどってアプリケーションの状態を進めます。",
  },
];

export default function RestPage() {
  return (
    <PageShell path="rest">
      <PageHero
        eyebrow="Web principles"
        lead="URI、統一インターフェース、ハイパーメディア。RESTは四半世紀にわたってWebを支えてきた、枯れた設計です。BEAR.Sundayはそれを外部APIだけでなく、アプリケーションの内側全体の制約にします。新しさではなく、正しさが残っているからです。"
        title="いちばん枯れた技術を、設計の背骨にする。"
      />

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase text-[#1f7a5a]">
              Uniform interface
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Webは、最初から正しかった。
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#3b463d]">
              RESTは新しい技術ではありません。リンクでつながるリソースの集合という考え方は、
              Webが1990年代から持っていたものです。その核にある統一インターフェース(uniform
              interface)は、メソッドのことではなく、次の4つの制約を指します。BEAR.Sundayは、
              この制約を外部APIに限らず、アプリケーションの内側にも一貫して適用します。
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
            {classicPillars.map((item) => (
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

      <section className="border-y border-black/10 bg-[#e8eef4] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-[#245c7a]">
              Method semantics
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              6つの動詞に、意味が宿っている。
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#36434c]">
              自己記述メッセージの中心が、メソッドの意味論です。RESTのメソッドは、テーブルのCRUDではなく、
              アプリケーションの状態に対する操作です。それぞれが「安全(状態を変えない)」か
              「冪等(何度実行しても同じ)」かという性質を持ちます。この性質は単なる作法ではなく、
              後で効く根拠になります。GETは安全だから自由にキャッシュでき、AIにも自由に呼ばせられる。
              状態を変える操作は、冪等性に応じて扱いを変える。同じ意味論が、キャッシュ戦略でもAIの安全設計でも使われます。
            </p>
          </div>
          <div className="overflow-x-auto rounded-lg border border-black/10 bg-white p-2 shadow-[0_12px_36px_rgba(17,22,17,0.07)]">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-black/10 font-mono text-xs uppercase text-[#667068]">
                  <th className="px-3 py-3">Method</th>
                  <th className="px-3 py-3">Safe</th>
                  <th className="px-3 py-3">Idempotent</th>
                  <th className="px-3 py-3">意味</th>
                </tr>
              </thead>
              <tbody>
                {methodRows.map((row) => (
                  <tr className="border-b border-black/5 align-top" key={row.method}>
                    <td className="px-3 py-3 font-mono font-bold text-[#111611]">
                      {row.method}
                    </td>
                    <td className="px-3 py-3 font-semibold text-[#1f7a5a]">
                      {row.safe}
                    </td>
                    <td className="px-3 py-3 font-semibold text-[#245c7a]">
                      {row.idempotent}
                    </td>
                    <td className="px-3 py-3 leading-6 text-[#465148]">
                      {row.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-[#1f7a5a]">
              Hypermedia
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              クライアントは、推測せずリンクをたどる。
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#3b463d]">
              ハイパーメディアでは、リソースは状態だけでなく、次にどんな操作ができるか(affordance)を
              自分で提示します。HAL では _links がそれにあたり、rel が関係の種類を示します。
              クライアントは次に何ができるかを推測せず、リソースが差し出すリンクをたどります。
            </p>
            <p className="mt-5 text-lg leading-8 text-[#3b463d]">
              #[Embed] はさらに踏み込みます。これはリソースの「結果」を埋め込むのではなく、
              リソースへの「リクエスト」、つまりリソース間の関係そのものを宣言します。
              この違いが、後で並列実行という形で効いてきます。
            </p>
          </div>
          <pre className="overflow-x-auto rounded-lg bg-[#101820] p-6 text-sm leading-7 text-[#d9f7e7] shadow-[0_20px_60px_rgba(16,24,32,0.25)]">
            <code>{`{
  "_links": {
    "self":   { "href": "/article/42" },
    "author": { "href": "/profile/7" },
    "next":   { "href": "/article/43" }
  },
  "_embedded": {
    "comments": { "_links": { "self": { "href": "/article/42/comments" } } }
  },
  "title": "Because Everything is a Resource"
}`}</code>
          </pre>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#f4f7f3] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase text-[#245c7a]">
              Browsable, headless REST
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              ルートから辿れる、説明可能なアプリケーション。
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#3b463d]">
              HALで書かれたリソース群は、ヘッドレスなREST アプリケーションとして機能します。
              Webサイトを巡るように、ルートからリンクをたどるだけで、すべてのリソースへ到達できます。
              APIが自分自身を説明し、ドキュメントをAPI自身から見つけられます。
              人間も、コンソールのcurlも、そしてAIエージェントも、同じ辿り方をします。
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3">
            <article className="rounded-lg border border-black/10 bg-white p-6">
              <h3 className="text-2xl font-black">自己記述的</h3>
              <p className="mt-4 leading-8 text-[#465148]">
                リンク、スキーマ、ドキュメントがリソース自身から導かれます。仕様と実装が別々に存在し、
                ずれていくことを防ぎます。
              </p>
            </article>
            <article className="rounded-lg border border-black/10 bg-white p-6">
              <h3 className="text-2xl font-black">探索可能</h3>
              <p className="mt-4 leading-8 text-[#465148]">
                ルートのリンクから関連リソースへ辿れます。全体像を一度に読み込ませなくても、
                必要な関係だけを順にたどれます。
              </p>
            </article>
            <article className="rounded-lg border border-black/10 bg-white p-6">
              <h3 className="text-2xl font-black">状態を中心にテストできる</h3>
              <p className="mt-4 leading-8 text-[#465148]">
                表現と状態が分かれているため、HTML表現でもbody、headers、linksを直接確認できます。
                レンダリング後の文字列を解析して結果を推測する必要がありません。
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#111611] px-5 py-20 text-white sm:px-8 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase text-[#9ee0bb]">
            Why the classic still wins
          </p>
          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            古典が、まだ知らなかった現代を用意していた。
          </h2>
          <p className="mt-6 text-xl leading-9 text-white/80">
            関係を宣言するという一点から、意図(What)と実行(How)が分かれます。だから、
            埋め込みリソースは並列に取得でき、リソースはそのままAIの道具になり、同じ意味から
            複数の表現が生まれ、後方互換を保ったまま進化できます。これらは後付けの機能ではなく、
            Webが最初から持っていた性質を、設計の制約として引き受けた結果です。
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              className="rounded-md bg-[#9ee0bb] px-5 py-3 text-center text-sm font-semibold text-[#111611] transition hover:bg-[#c0f0d3]"
              href="/ja/tech"
            >
              並列性として見る
            </a>
            <a
              className="rounded-md border border-white/20 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
              href="/ja/ai-era"
            >
              AIの道具として見る
            </a>
          </div>
        </div>
      </section>

      <CtaBand />
    </PageShell>
  );
}

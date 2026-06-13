import type { Metadata } from "next";
import { CtaBand, PageHero, PageShell } from "../../_components/site-chrome";

export const metadata: Metadata = {
  title: "ALPS — 意味を一箇所に置く | BEAR.Sunday",
  description:
    "ALPS(Application-Level Profile Semantics)を意味のSSOTにし、BEAR.Sundayが実装・ドキュメント・AIの道具を射影する。砂時計の腰=蜂の腰という設計を紹介します。",
};

const alpsWrites = [
  {
    title: "語彙",
    text: "このアプリケーションで cart とは何を指すのか。業務の言葉(ユビキタス言語)を、人にも機械にも読める形で置きます。",
  },
  {
    title: "状態",
    text: "アプリケーションにどんな状態があるのか。画面ではなく、意味としての状態です。",
  },
  {
    title: "遷移と、その性質",
    text: "状態から状態への遷移と、それが safe(観測するだけ)か idempotent(繰り返しても同じ)か unsafe(やり直せない変更)か。RESTの意味論がそのまま語彙になります。",
  },
  {
    title: "書けないこと=競合しないこと",
    text: "画面レイアウトも、永続化方式も、性能要件も書けません。書けないからこそ、どの成果物とも競合せず、共通の通り道になれます。書けないことの一覧こそが、ALPSの設計です。",
  },
];

const threeDoors = [
  {
    title: "設計 — MCP",
    text: "AIエージェントが照会・検証・編集する。全文を渡さず「この状態から出る遷移は?」と問い、必要な200トークンだけを受け取る。モデルについて読むのではなく、モデルと対話する。",
  },
  {
    title: "編集 — LSP",
    text: "人間が同じ知能に触れる。壊れた参照はその場で警告され、概念の改名はすべての参照へ波及する。意図の表明から意味の確定まで、構文という中間業者が消える。",
  },
  {
    title: "実行 — Hypermedia",
    text: "動くアプリケーション自身が、意味で構造化された応答を運ぶ。本番を操作するエージェントは、そのシステムを設計したのと同じ意味モデルに接地する。",
  },
];

export default function AlpsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Semantic SSOT"
        lead="コードは安くなりました。けれど「何を作るべきか」という意味は、いまも高いままです。同じ業務上の事実が、仕様書・コード・テスト・DB制約・FAQへ、別々の方言で何度も書き写される。ALPSは、その意味だけを書く小さな仕様です。BEAR.Sundayは、ここから実装・ドキュメント・AIの道具を射影します。"
        title="意味を、一箇所に置く。"
      />

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase text-[#b3262d]">
              The thin waist
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              蜂の腰。多くの入口と多くの出口を、一点で結ぶ。
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#3b463d]">
              源泉(物語・レガシーコード・ドメイン)を成果物(図・スキーマ・コード・道具)へ素朴につなぐと、
              組み合わせは N×M になります。あいだに意味だけの腰を一つ通せば、N+M に畳まれ、すべての変換が
              一点で合流します。インターネットの IP、コンパイラの LLVM IR と同じ形。ALPSは
              「アプリケーションの意味」の腰です。
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-2xl">
            <div className="rounded-lg border border-black/10 bg-[#f4f7f3] p-5 text-center">
              <p className="font-mono text-xs uppercase text-[#667068]">N個の源泉</p>
              <p className="mt-2 font-semibold leading-7">
                user stories ・ legacy code ・ domain ・ requirements
              </p>
            </div>
            <p className="py-2 text-center font-mono text-xs text-[#667068]">収束 ↓</p>
            <div className="mx-auto max-w-sm rounded-lg border-2 border-[#b3262d] bg-[#111611] p-5 text-center text-white">
              <p className="font-mono text-xs uppercase text-[#9ee0bb]">
                ALPS — 蜂の腰 / thin waist
              </p>
              <p className="mt-2 text-2xl font-black">意味のSSOT</p>
              <p className="mt-2 text-sm leading-6 text-white/76">
                語彙 ・ 状態 ・ 遷移(safe・idempotent・unsafe)
              </p>
            </div>
            <p className="py-2 text-center font-mono text-xs text-[#667068]">射影 ↓</p>
            <div className="rounded-lg border border-black/10 bg-[#f4f7f3] p-5 text-center">
              <p className="font-mono text-xs uppercase text-[#667068]">M個の射影</p>
              <p className="mt-2 font-semibold leading-7">
                図 ・ OpenAPI ・ JSON Schema ・ llms.txt ・ Fake ・ Tests ・ Code ・ MCP/Tool ・ Hypermedia
              </p>
            </div>
            <p className="mt-6 text-center text-sm leading-7 text-[#465148]">
              素朴に繋ぐと <span className="font-mono font-bold">N×M</span>。腰を一つ通せば{" "}
              <span className="font-mono font-bold">N+M</span>。
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#e8eef4] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-[#245c7a]">
              What ALPS writes (and won&apos;t)
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              語彙・状態・遷移だけ。あえて退屈に。
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#36434c]">
              ALPS(Application-Level Profile Semantics)は、RESTとハイパーメディア設計の系譜から生まれた、
              Amundsenらによる小さな仕様です。書けるのはほぼ三種類だけ。意図的に退屈で、その退屈さは
              設計されたものです。
            </p>
            <pre className="mt-8 overflow-x-auto rounded-lg bg-[#101820] p-6 text-sm leading-7 text-[#d9f7e7] shadow-[0_20px_60px_rgba(16,24,32,0.2)]">
              <code>{`{ "id": "Cart", "type": "semantic", "title": "買い物カゴ",
  "tag": "flow-checkout",
  "descriptor": [{ "href": "#doAddItem" }] },

{ "id": "doAddItem", "type": "unsafe", "rt": "#Cart",
  "doc": "商品をカゴに追加する" }`}</code>
            </pre>
            <p className="mt-4 text-sm leading-6 text-[#465148]">
              どのテーブルに保存されるかも、どの画面に出るかも書かれていません。書く場所がないからです。
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {alpsWrites.map((item) => (
              <article className="rounded-lg border border-black/10 bg-white p-6" key={item.title}>
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-3 leading-8 text-[#465148]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase text-[#1f7a5a]">
              Projection &amp; tags
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              一つのモデルへの、三つの問い。
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#3b463d]">
              各記述子には自由なタグを付けられます。チェックアウトのフローに flow-checkout、ゲストに許す操作に
              actor-guest、レガシー由来の概念に src-legacy。すると「チェックアウトだけの状態遷移図」や
              「ゲストから見えるシステム」は、新しく書き起こす文書ではなく、同じモデルへの射影クエリになります。
            </p>
            <p className="mt-5 text-lg leading-8 text-[#3b463d]">
              営業に見せる図、セキュリティレビューの図、移行計画の図は、三つの別文書ではなく、一つのモデルへの
              三つの問いです。「一つのモデル、多くのビュー」——意味だけをモデルに入れ、残りを射影に任せたから、
              モデルは小さいまま、人間が統治できます。
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#111611] px-5 py-20 text-white sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase text-[#9ee0bb]">
              Three doors
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              モデルは一つ、扉が三つ。
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/76">
              意味が一箇所に在るとして、誰がどう触れるのか。答えは、フェーズごとに違うプロトコルで、です。
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3">
            {threeDoors.map((item) => (
              <article className="rounded-lg border border-white/16 bg-white/[0.06] p-6" key={item.title}>
                <h3 className="text-2xl font-black text-[#9ee0bb]">{item.title}</h3>
                <p className="mt-4 leading-8 text-white/76">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#f4f7f3] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-[#245c7a]">
              The reader arrived
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              HATEOASが待っていた読み手は、いま来た。
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#3b463d]">
              2000年に定式化されたHATEOASが想定したのは、意味を読んで自律的に次の遷移を選ぶ「機械クライアント」
              でした。その読み手は二十年あまり現れなかった。人間にはUIが要り、機械は愚かすぎたからです。
            </p>
            <p className="mt-5 text-lg leading-8 text-[#3b463d]">
              その読み手が、いま到着しました。しかも、コードを安くしたのと同じ技術として。大規模言語モデルは、
              意味のドリフトを危機に変えた当のものであり、同時に、意味を機械可読にしておくことを、ついに報われる
              投資に変えた読み手でもあります。危機と、解決の条件が、同じ技術で同時に届いた。
            </p>
          </div>
          <aside className="rounded-lg border-l-4 border-[#b3262d] bg-white p-6">
            <p className="font-mono text-xs uppercase text-[#b3262d]">正直な但し書き</p>
            <p className="mt-3 leading-8 text-[#3b463d]">
              正本を一つにするのは、取引でもあります。分散した写本ではドリフトは局所的で、遅く、互いに独立。
              凝縮された正本では、ドリフトは全域的で、即時で、相関します。そのかわり、検査すべき場所が一つになる。
            </p>
            <p className="mt-4 leading-8 text-[#3b463d]">
              腰は統治を不要にしません。統治を一箇所に凝縮します。だから、語彙そのものを宣言し、機械が検査できる
              検出器が要ります。これは単一障害点を引き受ける取引であって、無条件の改善ではありません。
            </p>
          </aside>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-[#1f7a5a]">
              Where BEAR sits
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              BEAR.Sundayは、腰の射影側に乗る。
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#3b463d]">
              BEAR.Sundayが強いのは、腰の下半分——射影です。ResourceObjectから、HALやハイパーメディア(実行時)、
              ApiDoc・OpenAPI・JSON Schema・llms.txt(ドキュメント)、ToolUse/MCP(AIの道具)が生まれます。
              ALPSをSSOTに置けば、コードも文書も道具も、同じ意味から射影され、実装とドキュメントがずれません。
              CIで「ずれが無い」ことさえ証明できます。
            </p>
            <p className="mt-5 text-lg leading-8 text-[#3b463d]">
              意味を取り込んで作り直すのではなく、独立した標準として腰に置き、そこへ繋ぐ。これは
              「取り込まず、つなぐ」の到達点です。意味の発掘そのもの(上半分)は、ALPSと専用ツールの仕事です。
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <a
              className="rounded-lg border border-black/10 bg-[#f4f7f3] p-6 transition hover:bg-white"
              href="https://www.app-state-diagram.com/"
            >
              <h3 className="text-2xl font-black">App State Diagram →</h3>
              <p className="mt-3 leading-7 text-[#465148]">
                ALPSから状態遷移図を描き、意味を発掘・射影するツール。「意味の中間表現」の実証もここに。
              </p>
            </a>
            <a
              className="rounded-lg border border-black/10 bg-[#f4f7f3] p-6 transition hover:bg-white"
              href="http://alps.io/"
            >
              <h3 className="text-2xl font-black">ALPS 仕様 →</h3>
              <p className="mt-3 leading-7 text-[#465148]">
                Application-Level Profile Semantics の公式仕様。語彙・状態・遷移の最小の文法。
              </p>
            </a>
            <a
              className="rounded-lg border border-black/10 bg-[#f4f7f3] p-6 transition hover:bg-white"
              href="/ja/ai-era"
            >
              <h3 className="text-2xl font-black">AI時代の価値へ戻る →</h3>
              <p className="mt-3 leading-7 text-[#465148]">
                リソースがそのままAIの道具になる仕組みと、RESTの意味論=安全モデル。
              </p>
            </a>
          </div>
        </div>
      </section>

      <CtaBand />
    </PageShell>
  );
}

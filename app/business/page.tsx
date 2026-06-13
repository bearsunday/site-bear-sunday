import type { Metadata } from "next";
import { CtaBand, PageHero, PageShell } from "../_components/site-chrome";

export const metadata: Metadata = {
  title: "ビジネス向け | BEAR.Sunday",
  description:
    "BEAR.Sundayがビジネスにもたらす価値を、非技術者にも分かりやすい言葉で紹介します。",
};

const outcomes = [
  {
    title: "継続可能性",
    text: "担当者、要件、組織が変わっても、機能の意味と依存関係が残ります。作って終わりではなく、長く直し続けられる状態を保ちます。",
  },
  {
    title: "予見可能性",
    text: "変更の影響をリソース、依存、ドキュメント、操作ログから追えます。見積もり、レビュー、障害対応で、どこを見るべきかが曖昧になりにくくなります。",
  },
  {
    title: "高性能",
    text: "読まれる情報をユーザーに近い場所から届けます。変更がなければCDNやHTTPキャッシュを活かし、速く、混雑に強い体験を提供します。",
  },
  {
    title: "柔軟性",
    text: "同じ機能をWeb画面、API、CLI、他のPHPアプリケーションから利用できます。新しいチャネルや既存システムとの共存に対応しやすくなります。",
  },
];

const businessReasons = [
  {
    title: "変更コストを事業リスクにしない",
    text: "制度、商品、部署、顧客要望は変わります。BEAR.Sundayは、変更が続くことを前提に、機能の境界と依存関係を残します。",
  },
  {
    title: "標準技術で選択肢を残す",
    text: "特定の巨大な部品に囲い込むのではなく、PHPとWebの標準的な仕組みに乗ります。必要なライブラリを選べるため、プロジェクトや組織に合わせた構成を取りやすくなります。",
  },
  {
    title: "データアクセスを予見可能にする",
    text: "SQLは数十年単位の実績があり、実行計画、インデックス、チューニングの知見も蓄積されています。書く難しさはAIが補い、運用時の見通しやすさは標準技術として残ります。",
  },
  {
    title: "性能問題を出荷前に減らす",
    text: "SQLが独立した資産として残るため、実行計画やインデックスの検討をCIやレビューに組み込めます。遅いDBアクセスを本番で発見してから直すのではなく、出荷前に性能リスクを下げられます。",
  },
  {
    title: "操作ログを追跡可能にする",
    text: "すべてのアクションをPOST {URI}へ還元できるため、誰が、いつ、どのリソースへ何を行ったかを同じ形式で記録できます。監査、障害調査、AIによる分析の足場になります。",
  },
  {
    title: "HTMLとAPIを別資産にしない",
    text: "同じリソースをHTML画面とAPIの表現へ接続できるため、画面用とAPI用に同じ機能を二重実装する必要がありません。テストも機能の状態やリンクを直接確認でき、HTML文字列の解析に依存しません。",
  },
  {
    title: "ドキュメントを実装から生成する",
    text: "IDLから実装を合わせるのではなく、実装からIDLやAPIドキュメントを生成します。生成結果をCIで検証できるため、仕様と実装のズレが存在しないことを示せます。",
  },
  {
    title: "速度と保守性を同じ設計で得る",
    text: "キャッシュは後付けの高速化ではなく、設計の中に組み込まれています。ユーザーに速い体験を届けながら、開発側にも変更しやすい構造を残します。",
  },
];

const translations = [
  {
    label: "専門的には",
    tech: "CDN中心のRead Model",
    plain: "よく読まれる情報を、ユーザーに近い場所から安全に届ける仕組み",
  },
  {
    label: "専門的には",
    tech: "Resource Oriented Architecture",
    plain: "機能を分かりやすい単位に分け、Web、API、CLIで同じ意味として扱う考え方",
  },
  {
    label: "専門的には",
    tech: "依存性の注入",
    plain: "部品同士を直接固く結びつけず、組み合わせを後から変えやすくする設計",
  },
  {
    label: "専門的には",
    tech: "SQL中心のデータアクセス",
    plain: "数十年の実績がある標準技術を使い、AI支援と運用チューニングの両方を活かせる仕組み",
  },
  {
    label: "専門的には",
    tech: "SQL品質ゲート",
    plain: "実行計画やインデックスの問題を本番障害になる前に検査し、出荷前に性能リスクを下げる仕組み",
  },
  {
    label: "専門的には",
    tech: "POST {URI} action log",
    plain: "業務上の操作をURI単位で記録し、監査、調査、改善に使えるログを残す仕組み",
  },
  {
    label: "専門的には",
    tech: "ポータブルリソース",
    plain: "作った機能を別のPHPアプリケーションからも呼び出し、既存システムと共存しやすくする仕組み",
  },
  {
    label: "専門的には",
    tech: "Application as Documentation",
    plain: "実装からIDL、APIドキュメント、AI向け文脈を生成し、CIで仕様と実装のズレがないことを検証できる仕組み",
  },
];

const businessLevers = [
  "同じ機能からWeb画面、API、CLIを提供し、画面用とAPI用の二重実装を避けられる",
  "HTML文字列を解析せず、APIと同じ内容のテストを画面機能にも適用できる",
  "既存フレームワークの中から新しいBEAR.Sundayリソースを段階的に呼び出せる",
  "読まれる情報をCDNから届け、表示速度と可用性を上げられる",
  "SQLの実行計画やインデックスを使い、データアクセスを継続的にチューニングできる",
  "SQLファイルをCIで解析し、遅いDBアクセスを出荷前に発見しやすくできる",
  "すべての操作をPOST {URI}として記録し、追跡しやすい監査ログを残せる",
  "実装からIDLやドキュメントを生成し、CIで仕様と実装のズレが存在しないことを証明できる",
  "既存PHP資産を活かしながら、機能単位で構造を整えられる",
  "AIによる開発、レビュー、引き継ぎの根拠を実装に残せる",
];

const bankruptcySignals = [
  "小さな変更でも、影響範囲の確認に時間がかかる",
  "機能追加よりも、既存コードの調査と調整に予算が消える",
  "担当者の異動や退職で、判断できる人が限られていく",
  "フレームワークの破壊的変更に追従できず、古いバージョンのまま放置される",
  "新しいチャネルやAI活用を始めたくても、既存システムが足かせになる",
];

export default function BusinessPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="For business"
        lead="BEAR.Sundayは、技術者だけのためのフレームワークではありません。継続可能性、予見可能性、高性能、柔軟性を、長く使うWebアプリケーションの設計として支えます。このページは、その価値を事業の言葉で——成果、コスト、リスクとして読みます。"
        title="長く使えるWebサービスを、速く、強く、直しやすく。"
      />

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase text-[#1f7a5a]">
              Business outcomes
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              経営が求める4つの性質を、設計で支える。
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#3b463d]">
              フレームワーク選定は、開発チームだけの問題ではありません。
              継続できるか、変更を予見できるか、十分に速いか、事業の変化に合わせられるか。
              そうした事業上の性質を、アプリケーションの作り方から支えます。
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-4">
            {outcomes.map((item) => (
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
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-[#9ee0bb]">
              Why it matters
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              変更に強いことが、利益を守る。
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/76">
              事業が続くほど、ソフトウェアには変更が入ります。短期の安さだけで選ぶと、
              改修、障害対応、移行、引き継ぎのコストがあとから利益を削ります。
              BEAR.Sundayは、変わり続ける事業を支えるために、機能の意味と依存関係を残します。
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {businessReasons.map((item) => (
              <article className="rounded-lg border border-white/16 bg-white/[0.06] p-6" key={item.title}>
                <h3 className="text-2xl font-black text-[#9ee0bb]">{item.title}</h3>
                <p className="mt-4 leading-8 text-white/76">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#f4f7f3] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-[#b3262d]">
              Avoid technical insolvency
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              制約が技術破産を遠ざける。
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#3b463d]">
              技術負債は、返済計画を立てれば減らせます。しかし密結合が進みすぎると、
              依存、コード、運用、知識が絡み合い、通常の改善予算では戻しにくい状態になります。
              さらにフレームワークの破壊的変更に追従できず、古いバージョンへ取り残されると、
              それは単なる古さではなく、企業の選択肢を狭める技術破産に近い状況になります。
            </p>
            <p className="mt-5 text-lg leading-8 text-[#3b463d]">
              BEAR.Sundayは、機能をリソースとして分け、依存を外側で組み立て、変更理由を追える形で残します。
              日々の変更と継続的な更新で破綻しにくい構造を保つためのフレームワークです。
            </p>
            <div className="mt-8 border-l-4 border-[#b3262d] pl-5">
              <h3 className="text-2xl font-black">
                2011年から続く、変えないための設計。
              </h3>
              <p className="mt-4 text-lg leading-8 text-[#3b463d]">
                BEAR.Sundayは、流行に合わせて前提を壊すのではなく、1.xの互換性を守りながら進化してきました。
                長く運用されるアプリケーションにとって、フレームワークの都合で作り直しを迫られないことは、
                技術的にもビジネス的にも大きな価値です。
              </p>
            </div>
          </div>
          <div className="rounded-lg border border-black/10 bg-white p-6 shadow-[0_12px_36px_rgba(17,22,17,0.07)]">
            <p className="font-mono text-xs uppercase text-[#667068]">
              early warning signs
            </p>
            <ul className="mt-5 grid grid-cols-1 gap-3">
              {bankruptcySignals.map((item) => (
                <li className="flex gap-3 rounded-md border border-black/10 bg-[#f4f7f3] p-4" key={item}>
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#b3262d]" />
                  <span className="leading-7 text-[#344036]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase text-[#245c7a]">
            Business-critical technology
          </p>
          <h2 className="mt-4 max-w-4xl text-4xl font-black sm:text-5xl">
            ビジネスに直結する技術として見る。
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-[#3b463d]">
            技術的な特徴は、速度、可用性、改修費、引き継ぎやすさとして事業に返ってきます。
            BEAR.Sundayの設計は、開発チームの内部事情で終わらず、サービスの継続性に直結します。
          </p>
          <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-2">
            {translations.map((item) => (
              <article className="rounded-lg border border-black/10 bg-[#f4f7f3] p-6" key={item.tech}>
                <p className="text-sm font-semibold uppercase text-[#b3262d]">
                  {item.label}
                </p>
                <h3 className="mt-3 text-2xl font-black">{item.tech}</h3>
                <p className="mt-4 text-lg leading-8 text-[#344036]">
                  {item.plain}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#e8eef4] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-[#245c7a]">
              Business leverage
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              1つの機能資産を、複数の成果へ展開する。
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#36434c]">
              BEAR.Sundayでは、機能が特定の画面やcontrollerに閉じません。
              一度作ったリソースを、Web画面、API、CLI、運用ツール、ドキュメントへ同じ意味で展開できます。
              これは単なる実装上の便利さではなく、開発投資の再利用性です。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="rounded-md bg-[#245c7a] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#1c495f]"
                href="/value"
              >
                仕組みから価値を見る
              </a>
              <a
                className="rounded-md border border-[#245c7a]/30 bg-white px-5 py-3 text-center text-sm font-semibold text-[#111611] transition hover:bg-[#f8fbfd]"
                href="/tech"
              >
                技術的な裏側を見る
              </a>
            </div>
          </div>
          <ul className="grid grid-cols-1 gap-3">
            {businessLevers.map((item) => (
              <li className="flex gap-3 rounded-lg border border-black/10 bg-white p-5" key={item}>
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#1f7a5a]" />
                <span className="leading-7 text-[#344036]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-[#1f7a5a]">
              Adoption message
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              導入の理由は、流行ではなく継続性。
            </h2>
          </div>
          <div className="rounded-lg border border-black/10 bg-[#f4f7f3] p-6">
            <p className="text-lg leading-8 text-[#3b463d]">
              BEAR.Sundayを選ぶ理由は、技術的に珍しいからではありません。
              ユーザーには速く安定した体験を届け、開発チームには変更しやすい構造を残し、
              経営には将来の改修費と移行リスクを抑える選択肢を残す。
              そのための技術が、フレームワークの中に深く組み込まれています。
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </PageShell>
  );
}

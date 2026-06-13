import type { Metadata } from "next";
import { CtaBand, PageHero, PageShell } from "../../_components/site-chrome";

export const metadata: Metadata = {
  title: "AI時代 | BEAR.Sunday",
  description:
    "AI時代にBEAR.Sundayが持つ宣言性、明示性、トレーサビリティ、Tool Useの価値を紹介します。",
};

const values = [
  {
    title: "宣言性",
    text: "属性、JSON Schema、Link、Embed、Cacheableなどで、アプリケーションの意味をコード上に宣言します。AIは隠れた規約を推測するより、宣言された意味を根拠にできます。",
  },
  {
    title: "明示性",
    text: "onGet / onPost、コンストラクタ注入、DbQuery、context moduleにより、入力、依存、実行時構成が明示されます。レビュー対象が関数の中だけに閉じません。",
  },
  {
    title: "トレーサビリティ",
    text: "URI、リソース、リンク、スキーマ、ドキュメントが同じモデルに接続します。変更の影響を、実装からAPIドキュメント、llms.txtまでたどれます。",
  },
  {
    title: "厳格な型",
    text: "PHPStanとPsalmの高い静的解析レベルを前提に、単なるarrayではなくshaped array、domain array、domain typeとして意味を残します。型そのものがAIの文脈になります。",
  },
];

const aiReasoning = [
  {
    title: "学習量は、文脈の代わりにならない",
    text: "有名なフレームワークには公開コードが多くあります。しかし、その中には異なるバージョン、設計方針、品質のコードが混在します。AIが平均的なパターンを拾うだけでは、現在のアプリケーションにとって正しい判断とは限りません。",
  },
  {
    title: "検索できる知識から、確信できる文脈へ",
    text: "Stack Overflow的な集合知は、実装の断片を探す時代には大きな価値がありました。AI時代には、外部の断片よりも、目の前のコードベースがAIに正しく推論させるだけの根拠を持っているかが重要になります。",
  },
  {
    title: "明示性が、クリーンコードを助ける",
    text: "BEAR.Sundayでは、interface、ResourceObject、Module、JSON Schema、APIドキュメント、llms-full.txtが、AIに読ませるための明示された情報設計になります。推測ではなく、実装に接続した根拠からコードを組み立てられます。",
  },
  {
    title: "局所性が、推論コストを下げる",
    text: "DIにより依存はコンストラクタとModuleへ現れ、責任はResource、Query、Interceptorへ分かれます。巨大な全体像を読ませなくても、変更対象の局所的な文脈だけで判断しやすくなります。",
  },
];

const architectureEssences = [
  {
    title: "Clean Architectureのエッセンス",
    text: "依存方向はinterfaceとDI moduleで制御され、フレームワーク、DB、HTML、API、CLI、キャッシュは外側の詳細になります。AIは、何がアプリケーションの意味で、何が差し替え可能な詳細なのかを分けて読めます。",
  },
  {
    title: "CQS / CQRSのエッセンス",
    text: "読み取りと書き込みでは最適なモデルが違う、という中心だけを取り出します。SQLがprojectionを定義し、PHPが型と振る舞いを与えるread modelは破棄可能です。状態変更と不変条件はcommand/write pathの責任として分けて推論できます。",
  },
  {
    title: "DDDのエッセンス",
    text: "URI、Resource、interface、domain type、namespaceが、業務語彙と境界をコードに残します。重い儀式ではなく、ユビキタス言語と境界づけられた文脈の手がかりが、AIにも人間にも読める形になります。",
  },
];

const mediaQueryPoints = [
  {
    title: "Interfaceが契約になる",
    text: "DbQuery interfaceは、アプリケーションが何を求めているかを示します。呼び出し側はSQLの組み立て方ではなく、メソッドシグネチャと戻り値型に依存できます。",
  },
  {
    title: "SQLがprojectionになる",
    text: "JOIN、CTE、window function、集約、画面固有の列を、隠れたquery generationではなくSQL fileとして明示します。AIは実際に何が実行されるかを読めます。",
  },
  {
    title: "戻り値型が意図を示す",
    text: "行リスト、1行、hydrated object、void、AffectedRows、pagination、custom wrapperなど、戻り値がfetch、hydrate、wrap、ignoreの意図を宣言します。",
  },
  {
    title: "Read modelを小さくテストできる",
    text: "SQL、factory、domain object、applicationを層ごとに確認できます。Application testではtyped return valueを持つinterfaceをfakeでき、use caseに集中できます。",
  },
  {
    title: "Embed / crawlが情報構造を宣言する",
    text: "関連するコンテンツの構造を、Link、Embed、crawl名、app:// URIで宣言します。AIはHTMLを観察して関係を推測するのではなく、実装に残ったリソースグラフをたどれます。",
  },
];

const toolUsePoints = [
  {
    title: "ResourceObjectからTool定義を生成する",
    text: "既存のリソースクラスからJSON Schemaベースのtool definitionを生成できます。AI向けに別の関数群を作るのではなく、アプリケーションの機能そのものを道具にできます。",
  },
  {
    title: "URIで使わせる機能を指定する",
    text: "app://self/userやpage://self/searchのように、公開するリソースをURIで選べます。#[Tool]と#[Exclude]で、AIに渡す機能の範囲をコード上に残せます。",
  },
  {
    title: "説明は実装から集める",
    text: "JSON Schema、PHPDoc、ALPS profileからパラメータ説明や制約を組み立てます。AIが入力を推測するのではなく、実装に接続した説明を読めます。",
  },
  {
    title: "破壊的操作には確認を挟む",
    text: "confirm付きのtoolは、人間の承認を得てから実行できます。Streaming Agentでは確認イベントを返し、応答がなければ拒否する安全側の動作にできます。",
  },
  {
    title: "大きな結果は絞って渡す",
    text: "filterでtool resultをLLMへ渡す前に要約できます。検索結果や一覧の巨大なbodyから必要なフィールドだけを渡し、トークン効率と情報設計を保てます。",
  },
  {
    title: "呼び出しを監査できる",
    text: "ToolCallObserverで成功、エラー、例外、未知toolを含むdispatchを観察できます。監査ログ、メトリクス、レイテンシ計測をアプリケーション側の文脈で実装できます。",
  },
];

const strictTypePoints = [
  "bare arrayではなく、shaped arrayやdomain typeとして表現の形を明示する",
  "PHPStanとPsalmの高い静的解析レベルで、曖昧な値の混入を早く検出する",
  "interface、PHPDoc、JSON Schemaを接続し、実装、テスト、ドキュメントの語彙を揃える",
  "AIが補完するときも、型とshapeが入力、出力、変更範囲を狭める",
];

const agentWorkflow = [
  "Resource URIから対象機能を発見する",
  "onGet / onPost の入力と出力を読む",
  "PHPStan / Psalm の型とshapeを確認する",
  "DbQuery interfaceとSQL fileのprojectionを確認する",
  "Link / Embed / crawlで宣言されたリソースグラフをたどる",
  "BEAR.ToolUseで公開されたtoolと確認条件を確認する",
  "JSON Schemaで表現の契約を確認する",
  "DI moduleで実行時の差分を確認する",
  "テストとドキュメントへ変更の影響を反映する",
];

const restAgentPoints = [
  {
    title: "安全な操作は自由に、危険な操作は確認を",
    text: "GETのような安全・冪等な操作はエージェントに自由に呼ばせ、状態を変える操作にはconfirmを挟みます。RESTのメソッド分類が、そのまま道具の権限モデルになります。",
  },
  {
    title: "ALPSが、意味をフィルタに変える",
    text: "ALPSプロファイルのsafe / idempotentな遷移情報から、実行時に渡す道具を絞れます。読み取り専用モードを、思いつきではなくリソースの意味論から導けます。",
  },
  {
    title: "エージェントは、リソースグラフを辿る",
    text: "ハイパーメディアがクライアントにリンクをたどらせるのと同じ構造で、エージェントはURIとリンクをたどって調査し、操作します。リソースグラフが、そのままエージェントの地図になります。",
  },
  {
    title: "専門エージェントへ委譲する",
    text: "コーディネーターがask_criticやask_editorのように、専門エージェントを道具として呼べます。設計レビューと文章校正のように、役割の違う専門家を編成できます。",
  },
  {
    title: "文脈を継続する",
    text: "複数回の実行にわたって会話履歴を保ち、調査・レビュー・修正の多段ワークフローを、文脈を作り直さずに進められます。",
  },
  {
    title: "実行ごとにポリシーを変える",
    text: "渡す道具の一覧を実行単位で絞り、読み取り専用、コスト上限、安全方針を、エージェント本体を変えずに適用できます。",
  },
];

export default function AiEraPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="AI-ready architecture"
        lead="AIエージェントがコードを読み、変更し、説明するなら、曖昧な規約よりも、コード上に残る意味が重要です。BEAR.Sundayは、アプリケーションの意味をリソース、属性、スキーマ、リンクとして残します。"
        title="AIが推測しなくていいアプリケーションへ。"
      />

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 lg:grid-cols-4">
          {values.map((value) => (
            <article
              className="rounded-lg border border-black/10 bg-white p-6 shadow-[0_12px_36px_rgba(17,22,17,0.07)]"
              key={value.title}
            >
              <h2 className="text-3xl font-black text-[#b3262d]">{value.title}</h2>
              <p className="mt-5 leading-8 text-[#465148]">{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#e8eef4] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase text-[#245c7a]">
              Design principles for AI
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              設計原則が、AIの判断材料になる。
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#36434c]">
              BEAR.Sundayは、Clean Architecture、CQS/CQRS、DDDを名前として掲げるためのフレームワークではありません。
              しかし、それらが重視してきた依存方向、読み書きの分離、業務語彙の境界は、AIが変更を判断する時代に
              そのまま強い手がかりになります。
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3">
            {architectureEssences.map((item) => (
              <article className="rounded-lg border border-black/10 bg-white p-6" key={item.title}>
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-4 leading-8 text-[#465148]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase text-[#1f7a5a]">
              Explicit contracts
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              契約と情報構造が、AIに読める。
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#3b463d]">
              Ray.MediaQueryは、SQLをオブジェクト抽象の裏に隠しません。
              Interfaceが契約を示し、SQL fileがprojectionを示し、戻り値型が結果の扱いを示します。
              AI assistantは、隠れたquery generationを逆算する必要がありません。
              リソース間の関係も、Link、Embed、crawl、URIとして宣言されるため、情報構造を実装からたどれます。
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3">
            {mediaQueryPoints.map((item) => (
              <article className="rounded-lg border border-black/10 bg-[#f4f7f3] p-6" key={item.title}>
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-4 leading-8 text-[#465148]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#111611] px-5 py-20 text-white sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase text-[#9ee0bb]">
              Tool-ready resources
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              リソースが、そのままAIの道具になる。
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/76">
              BEAR.ToolUseは、BEAR.SundayのResourceObjectからAI agent向けのTool Use定義を生成します。
              URI、JSON Schema、ALPS、PHPDoc、属性で表現された意味が、AIの実行可能な道具になります。
              LLMそのものには依存せず、アプリケーション側のinterfaceとしてagent loopを構成できます。
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {toolUsePoints.map((item) => (
              <article className="rounded-lg border border-white/16 bg-white/[0.06] p-6" key={item.title}>
                <h3 className="text-2xl font-black text-[#9ee0bb]">{item.title}</h3>
                <p className="mt-4 leading-8 text-white/76">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase text-[#b3262d]">
              REST semantics as a safety model
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              RESTの意味論が、そのままAIの安全モデルになる。
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#3b463d]">
              リソースを道具にできるのは、新しい仕組みを足したからではありません。URI、統一インターフェース、
              型、JSON Schema、ALPSが、最初からツール定義の形をしているからです。そしてRESTが古くから持つ
              「安全」「冪等」というメソッドの意味論が、エージェントに何を自由に呼ばせ、何に確認を挟むかを
              決める根拠になります。BEAR.ToolUseは、単発のツール呼び出しから、専門エージェントを編成する
              ランタイムへと広がっています。
            </p>
            <aside className="mt-8 rounded-lg border-l-4 border-[#1f7a5a] bg-[#f4f7f3] p-6">
              <p className="font-mono text-xs uppercase text-[#1f7a5a]">ALPSとは</p>
              <p className="mt-3 leading-8 text-[#3b463d]">
                ALPS(Application-Level Profile Semantics)は、アプリケーションの語彙・状態・遷移と、
                その遷移が安全(safe)・冪等(idempotent)・破壊的(unsafe)のどれかだけを記述する小さな仕様です。
                画面も保存方法も性能も書けません。書けないからこそ、どの実装とも競合しない「意味の置き場所」になり、
                人間にもAIにも同じ意味を渡せます。
              </p>
              <a
                className="mt-4 inline-flex text-sm font-semibold text-[#1f7a5a] underline"
                href="/ja/alps"
              >
                ALPSをもっと知る →
              </a>
            </aside>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {restAgentPoints.map((item) => (
              <article className="rounded-lg border border-black/10 bg-[#f4f7f3] p-6" key={item.title}>
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-4 leading-8 text-[#465148]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#f4f7f3] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase text-[#1f7a5a]">
              Explicit context
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              学習量より、明示された文脈。
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#3b463d]">
              AI時代には、有名なフレームワークほど有利だと言われることがあります。
              しかし公開コードの多さは、そのまま正しい文脈の多さを意味しません。
              異なるバージョン、異なる品質、異なる設計判断が混ざったコーパスから平均的な形を取り出すだけでは、
              クリーンな変更になるとは限りません。
            </p>
            <p className="mt-5 text-lg leading-8 text-[#3b463d]">
              BEAR.SundayがAIに渡すのは、曖昧な慣習ではなく、実装に接続した明示的な文脈です。
              interface、型、URI、Link、Schema、Module、生成ドキュメントが、AIの推論に必要な根拠になります。
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-4">
            {aiReasoning.map((item) => (
              <article className="rounded-lg border border-black/10 bg-white p-6" key={item.title}>
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
              Agent workflow
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              読める単位があるから、変更を任せられる。
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/76">
              AIにとって難しいのは、コード量そのものではなく、意味の所在が散らばっていることです。
              BEAR.Sundayでは、リソースを起点に関連情報をたどれるため、調査と変更の手順が安定します。
            </p>
          </div>
          <ol className="grid grid-cols-1 gap-3">
            {agentWorkflow.map((item, index) => (
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
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-[#245c7a]">
              Strict types
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              厳格な型が、明示性と局所性を強くする。
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#3b463d]">
              AIが変更するコードでは、曖昧なarrayや暗黙の構造がそのまま推測の余地になります。
              BEAR.SundayではPHPStanとPsalmの高い静的解析レベルを前提に、配列もshapeやdomain typeとして意味を持たせます。
              型は単なる検査ではなく、AIが読むための仕様でもあります。
            </p>
            <pre className="mt-8 overflow-x-auto rounded-lg bg-[#101820] p-6 text-sm leading-7 text-[#d9f7e7] shadow-[0_20px_60px_rgba(16,24,32,0.2)]">
              <code>{`/**
 * @phpstan-type UserRow array{id: positive-int, name: non-empty-string}
 * @psalm-type UserRow array{id: positive-int, name: non-empty-string}
 */
interface UserQuery
{
    /** @return UserRow */
    public function item(int $id): array;
}`}</code>
            </pre>
          </div>
          <ul className="grid grid-cols-1 gap-3">
            {strictTypePoints.map((item) => (
              <li className="flex gap-3 rounded-lg border border-black/10 bg-[#f4f7f3] p-5" key={item}>
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#245c7a]" />
                <span className="leading-7 text-[#344036]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-[#1f7a5a]">
              LLM documentation
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              llms.txtは、AIの入口になる。
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#3b463d]">
              API Doc、OpenAPI、JSON Schema、llms-full.txtは、アプリケーションを人間だけでなく
              AIにも読ませるための接続点です。ドキュメントが実装の外側に孤立しないことが重要です。
            </p>
          </div>
          <pre className="overflow-x-auto rounded-lg bg-[#101820] p-6 text-sm leading-7 text-[#d9f7e7] shadow-[0_20px_60px_rgba(16,24,32,0.2)]">
            <code>{`#[JsonSchema(schema: 'user.json')]
#[Link(rel: 'orders', href: 'app://self/orders{?id}')]
public function onGet(int $id): static
{
    $this->body = $this->userQuery->item($id);

    return $this;
}`}</code>
          </pre>
        </div>
      </section>

      <CtaBand />
    </PageShell>
  );
}

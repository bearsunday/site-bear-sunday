import type { Metadata } from "next";
import { CtaBand, PageHero, PageShell } from "../../_components/site-chrome";

export const metadata: Metadata = {
  title: "実装例 | BEAR.Sunday",
  description:
    "BEAR.SundayのResource、DI、AOP、Hypermediaの実装イメージを紹介します。",
};

const examples = [
  {
    title: "Resource",
    caption: "URIに対応するリソースは、状態を決めて返す。",
    code: `final class Profile extends ResourceObject
{
    public function onGet(int $id): static
    {
        $this->body = $this->profileQuery->item($id);

        return $this;
    }
}`,
  },
  {
    title: "Dependency Injection",
    caption: "必要な依存はコンストラクタで明示する。",
    code: `public function __construct(
    private readonly ProfileQuery $profileQuery,
    private readonly ClockInterface $clock,
) {
}`,
  },
  {
    title: "AOP",
    caption: "横断的関心は属性とInterceptorへ逃がす。",
    code: `#[Transactional]
#[Loggable]
public function onPost(string $name): static
{
    $this->body = $this->command->create($name);

    return $this;
}`,
  },
  {
    title: "Hypermedia",
    caption: "次に遷移できるリソースをリンクとして宣言する。",
    code: `#[Link(rel: 'orders', href: 'app://self/orders{?id}')]
#[Embed(rel: 'profile', src: 'app://self/profile{?id}')]
public function onGet(int $id): static
{
    return $this;
}`,
  },
  {
    title: "CacheableResponse",
    caption: "キャッシュは時間ではなく、依存の変化で無効化される。",
    code: `use BEAR\\RepositoryModule\\Annotation\\CacheableResponse;

#[CacheableResponse]
public function onGet(string $id): static
{
    $this->body = $this->blog->entry($id);

    return $this;
}`,
  },
  {
    title: "DonutCache",
    caption: "ページはキャッシュ。コメントの“穴”は Do not キャッシュ。毎回新鮮。",
    code: `#[DonutCache]
#[Embed(rel: 'comment', src: 'page://self/blog/comment')]
public function onGet(int $id): static
{
    $this->body += ['article' => '...'];

    return $this;
}`,
  },
  {
    title: "CLI",
    caption: "同じリソースは、属性ひとつでCLIにもなる。",
    code: `use BEAR\\Cli\\Attribute\\Cli;
use BEAR\\Cli\\Attribute\\Option;

#[Cli(name: 'greet', description: '多言語で挨拶', output: 'greeting')]
public function onGet(
    #[Option(shortName: 'n')] string $name,
    #[Option(shortName: 'l')] string $lang = 'en',
): static {
    // この onGet が、独立した greet コマンドになる
    // --help も --name/-n も、宣言から自動で生成される
    return $this;
}`,
  },
  {
    title: "SQL",
    caption: "SQLはSQLのまま、型を渡し型で受け取る。現在時刻もDIが入れる。",
    code: `interface OrderRepositoryInterface
{
    // 戻り値の型が意図:不変ドメインオブジェクト
    #[DbQuery('order_item', factory: OrderFactory::class)]
    public function getOrder(string $id): Order;

    // 型のある引数。現在時刻はDIが束縛。戻り値の型 = 更新行数
    #[DbQuery('order_close')]
    public function close(string $id, DateTimeInterface $at): AffectedRows;
}`,
  },
];

const outcomes = [
  "リソース単位でテストを書ける",
  "同じリソースをWeb API、HTML、CLIで使える",
  "キャッシュやトランザクションを業務ロジックから分離できる",
  "リンクとスキーマからAPIドキュメントを組み立てやすい",
];

export default function ExamplesPage() {
  return (
    <PageShell path="examples">
      <PageHero
        eyebrow="Examples"
        lead="BEAR.Sundayのコードは、リソースが中心です。入力、依存、リンク、横断的処理が見える場所に残るため、読み手はアプリケーションの意味をたどれます。"
        title="小さなコードに、設計の境界を残す。"
      />

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 lg:grid-cols-2">
          {examples.map((example) => (
            <article className="rounded-lg border border-black/10 bg-white" key={example.title}>
              <div className="border-b border-black/10 p-6">
                <p className="font-mono text-sm font-bold text-[#b3262d]">
                  {example.title}
                </p>
                <h2 className="mt-3 text-2xl font-black">{example.caption}</h2>
              </div>
              <pre className="overflow-x-auto bg-[#101820] p-6 text-sm leading-7 text-[#d9f7e7]">
                <code>{example.code}</code>
              </pre>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-black/10 bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-[#245c7a]">
              What this enables
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              どれも同じ小さな宣言。だから長く読める。
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#3b463d]">
              リソースが状態を持ち、表現や転送は外側へ分かれる。依存は注入され、
              横断的関心はAOPへ分かれる。この単純な分離が、テストと拡張の土台になります。
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-3">
            {outcomes.map((item) => (
              <li className="flex gap-3 rounded-lg border border-black/10 bg-[#f4f7f3] p-5" key={item}>
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#1f7a5a]" />
                <span className="leading-7 text-[#344036]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </PageShell>
  );
}

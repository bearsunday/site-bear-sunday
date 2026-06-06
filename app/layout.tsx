import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BEAR.Sunday | Resource Oriented PHP Framework",
  description:
    "BEAR.Sundayの宣言性、明示性、トレーサビリティを伝えるプロモーションサイト。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}

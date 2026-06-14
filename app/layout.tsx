import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BEAR.Sunday | Resource Oriented PHP Framework",
  description:
    "A promotion site conveying the declarativity, explicitness, and traceability of BEAR.Sunday.",
  icons: {
    icon: "https://bearsunday.github.io/favicon.ico",
    shortcut: "https://bearsunday.github.io/favicon.ico",
    apple: "https://bearsunday.github.io/icon.png",
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

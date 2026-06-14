import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BEAR.Sunday | Resource Oriented PHP Framework",
  description:
    "A promotion site conveying the declarativity, explicitness, and traceability of BEAR.Sunday.",
  icons: {
    icon: "https://bearsunday.github.io/favicon.ico",
    shortcut: "https://bearsunday.github.io/favicon.ico",
  },
};

export default function EnLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

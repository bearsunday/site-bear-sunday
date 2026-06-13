"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const lang = navigator.language || "";
    const target = lang.startsWith("ja") ? "/ja" : "/en";
    router.replace(target);
  }, [router]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-[#f4f7f3] px-5 text-[#111611]">
      <h1 className="text-3xl font-black sm:text-4xl">BEAR.Sunday</h1>
      <p className="text-lg leading-8 text-[#3b463d]">
        Resource Oriented PHP Framework
      </p>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Link
          className="rounded-md bg-[#111611] px-8 py-4 text-center text-lg font-semibold text-white transition hover:bg-[#2f3a31]"
          href="/ja"
        >
          日本語
        </Link>
        <Link
          className="rounded-md border border-[#111611]/25 bg-white px-8 py-4 text-center text-lg font-semibold text-[#111611] transition hover:bg-[#f4f7f3]"
          href="/en"
        >
          English
        </Link>
      </div>
    </main>
  );
}

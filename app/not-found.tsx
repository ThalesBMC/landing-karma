import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-[60vh] items-center justify-center bg-white px-6 py-24">
        <div className="max-w-md text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-kalma-action">
            404
          </p>
          <h1 className="text-display mt-4 text-4xl font-bold text-kalma-deep">
            Page not found
          </h1>
          <p className="mt-4 text-lg text-kalma-muted">
            This page doesn&apos;t exist. Try the homepage or our anxiety
            guides.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="rounded-full bg-kalma-action px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Go home
            </Link>
            <Link
              href="/blog"
              className="rounded-full border border-kalma-border px-6 py-3 text-sm font-semibold text-kalma-deep transition-colors hover:border-kalma-action"
            >
              Read the blog
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

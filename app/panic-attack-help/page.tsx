import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/motion/Reveal";
import { WaitlistTrigger } from "@/components/WaitlistTrigger";
import {
  JsonLd,
  buildBreadcrumbJsonLd,
  buildWebPageJsonLd,
  defaultOgImage,
} from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { getPostBySlug } from "@/lib/blog/posts";

const pageDescription =
  "Kalma Panic Shield: one-tap offline grounding and breathing when a panic attack starts. Read our full step-by-step guide on the blog.";

export const metadata: Metadata = {
  title: "Panic Attack Help — Kalma Panic Shield",
  description: pageDescription,
  keywords: [
    "panic attack help",
    "panic attack app",
    "offline grounding",
    "panic shield",
  ],
  alternates: { canonical: "/panic-attack-help" },
  openGraph: {
    title: "Panic Attack Help — Kalma Panic Shield",
    description: pageDescription,
    url: "/panic-attack-help",
    siteName: siteConfig.name,
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    site: siteConfig.twitterHandle,
    creator: siteConfig.twitterHandle,
    title: "Panic Attack Help — Kalma Panic Shield",
    description: pageDescription,
    images: [defaultOgImage.url],
  },
};

const guidePost = getPostBySlug("what-to-do-during-a-panic-attack");

const relatedGuides = [
  guidePost,
  getPostBySlug("why-panic-attacks-feel-dangerous"),
  getPostBySlug("box-breathing-vs-4-7-8-for-anxiety"),
].filter(Boolean);

export default function PanicAttackHelpPage() {
  return (
    <>
      <JsonLd
        data={buildWebPageJsonLd({
          name: "Panic Attack Help — Kalma Panic Shield",
          description: pageDescription,
          path: "/panic-attack-help",
        })}
      />
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Panic Attack Help", path: "/panic-attack-help" },
        ])}
      />
      <Header />
      <main>
        <section className="relative overflow-hidden bg-white py-20 md:py-28">
          <div className="pointer-events-none absolute inset-0 mesh-aurora opacity-50" />
          <div className="relative mx-auto max-w-3xl px-6">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-kalma-action">
                Panic Shield
              </p>
              <h1 className="text-display mt-4 text-balance text-4xl font-bold text-kalma-deep sm:text-5xl">
                Instant panic attack help, offline
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-kalma-muted">
                When panic hits, you should not need Wi‑Fi, a login screen, or
                five minutes of onboarding. Kalma&apos;s Panic Shield opens in
                one tap with guided grounding and breathing — built for the
                moment decision-making disappears.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-kalma-surface py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-2xl font-bold text-kalma-deep">
              What Panic Shield does
            </h2>
            <p className="mt-4 leading-relaxed text-kalma-muted">
              This page is about how Kalma supports you during an attack — not a
              repeat of general coping steps. For the full evidence-based
              walkthrough (5-4-3-2-1 grounding, breathing, and what to do
              after), read our dedicated guide on the blog.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                {
                  title: "One tap, no account",
                  body: "Panic Shield works without signup or onboarding. Open the app and start grounding immediately.",
                },
                {
                  title: "Works offline",
                  body: "Subways, planes, and dead zones are when panic often strikes. Core tools are stored on your device.",
                },
                {
                  title: "Guided 5-4-3-2-1 + breathing",
                  body: "Step-by-step grounding and box, 4-7-8, or resonant breathing with a visual pacer — you follow along instead of counting under stress.",
                },
                {
                  title: "Daily practice, not just crisis",
                  body: "Journal moods and triggers between attacks so patterns become visible before the next spike.",
                },
              ].map((item, i) => (
                <Reveal key={item.title} delay={i * 0.05}>
                  <li className="list-none rounded-2xl border border-kalma-border/60 bg-white p-6">
                    <h3 className="text-lg font-semibold text-kalma-deep">
                      {item.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-kalma-muted">
                      {item.body}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ul>

            {guidePost && (
              <Reveal delay={0.2}>
                <div className="mt-10 rounded-2xl border border-kalma-action/30 bg-white p-6 md:p-8">
                  <h3 className="text-lg font-semibold text-kalma-deep">
                    Need the step-by-step guide?
                  </h3>
                  <p className="mt-2 text-kalma-muted">
                    Our blog article covers what to do during a panic attack in
                    detail — naming the experience, grounding, breathing, and
                    when to seek professional help.
                  </p>
                  <Link
                    href={`/blog/${guidePost.slug}`}
                    className="mt-4 inline-flex items-center gap-2 font-semibold text-kalma-action transition-colors hover:text-kalma-deep"
                  >
                    Read: {guidePost.title}
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </Reveal>
            )}
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-2xl font-bold text-kalma-deep">
              Join the waitlist
            </h2>
            <p className="mx-auto mt-4 max-w-lg leading-relaxed text-kalma-muted">
              Kalma launches on the App Store in Q1 2026. Be first to try Panic
              Shield, guided breathing, and mood tracking.
            </p>
            <WaitlistTrigger size="md" className="mt-8">
              Join the waitlist
            </WaitlistTrigger>
            <p className="mt-6 text-sm text-kalma-muted">
              <Link href="/about" className="font-medium text-kalma-action hover:underline">
                About Kalma
              </Link>
              {" · "}
              <Link href="/blog" className="font-medium text-kalma-action hover:underline">
                Blog
              </Link>
            </p>
          </div>
        </section>

        <section className="border-t border-kalma-border/40 bg-kalma-surface py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-2xl font-bold text-kalma-deep">
              Related guides
            </h2>
            <ul className="mt-6 space-y-4">
              {relatedGuides.map((post) =>
                post ? (
                  <li key={post.slug}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group block rounded-xl border border-kalma-border/60 bg-white p-5 transition-shadow hover:shadow-md"
                    >
                      <span className="font-semibold text-kalma-deep group-hover:text-kalma-action">
                        {post.title}
                      </span>
                      <p className="mt-1 text-sm text-kalma-muted">
                        {post.description}
                      </p>
                    </Link>
                  </li>
                ) : null,
              )}
            </ul>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}

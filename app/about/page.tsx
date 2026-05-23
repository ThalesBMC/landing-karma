import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/motion/Reveal";
import { WaitlistTrigger } from "@/components/WaitlistTrigger";
import {
  JsonLd,
  buildBreadcrumbJsonLd,
  buildWebPageJsonLd,
  defaultOgImage,
} from "@/lib/seo";
import { defaultBlogAuthor } from "@/lib/blog/types";
import { siteConfig } from "@/lib/site";

const pageDescription =
  "Kalma is a panic and anxiety relief app built in the EU. Learn why we built offline Panic Shield, who is behind the product, and how we approach mental health tools.";

export const metadata: Metadata = {
  title: "About Kalma",
  description: pageDescription,
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Kalma",
    description: pageDescription,
    url: "/about",
    siteName: siteConfig.name,
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    site: siteConfig.twitterHandle,
    creator: siteConfig.twitterHandle,
    title: "About Kalma",
    description: pageDescription,
    images: [defaultOgImage.url],
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={buildWebPageJsonLd({
          name: "About Kalma",
          description: pageDescription,
          path: "/about",
        })}
      />
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <Header />
      <main className="bg-white">
        <section className="relative overflow-hidden py-20 md:py-28">
          <div className="pointer-events-none absolute inset-0 mesh-aurora opacity-50" />
          <div className="relative mx-auto max-w-3xl px-6">
            <Reveal>
              <h1 className="text-display text-4xl font-bold text-kalma-deep sm:text-5xl">
                About Kalma
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-kalma-muted">
                Kalma is a panic and anxiety relief app for iOS. We built it
                because the moment you need help most is often the moment other
                apps fail you — no signal, slow load times, or a login wall
                between you and grounding exercises.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="border-t border-kalma-border/40 bg-kalma-surface py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <Reveal>
              <h2 className="text-2xl font-bold text-kalma-deep">
                Why Panic Shield works offline
              </h2>
              <p className="mt-4 leading-relaxed text-kalma-muted">
                Panic attacks do not wait for good connectivity. They happen in
                tunnels, on flights, in basements, and in crowded places where
                loading a web view feels impossible. Panic Shield stores guided
                5-4-3-2-1 grounding and breathing patterns on your device so
                one tap is enough — no account, no onboarding flow, no
                &ldquo;please verify your email&rdquo; while your heart races.
              </p>
              <p className="mt-4 leading-relaxed text-kalma-muted">
                That was a deliberate product choice, not a technical shortcut.
                We interviewed people who had deleted other mental health apps
                after failed attempts to use them mid-crisis. Offline-first
                panic support was the pattern that kept coming up.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <Reveal>
              <h2 className="text-2xl font-bold text-kalma-deep">
                Evidence-informed, not hype-driven
              </h2>
              <p className="mt-4 leading-relaxed text-kalma-muted">
                Kalma draws on techniques used in clinical settings — CBT
                psychoeducation, structured breathing, grounding, and mood
                monitoring — without claiming to replace therapy. Our blog
                articles cite sources like NIMH and APA where relevant, and we
                are transparent about what an app can and cannot do.
              </p>
              <p className="mt-4 leading-relaxed text-kalma-muted">
                We do not sell your data, show ads, or paywall crisis support.
                Kalma is built in the EU with privacy-first defaults and GDPR
                alignment. Read our{" "}
                <Link
                  href="/privacy"
                  className="font-medium text-kalma-action hover:underline"
                >
                  privacy policy
                </Link>{" "}
                for details.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="border-t border-kalma-border/40 bg-kalma-surface py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <Reveal>
              <h2 className="text-2xl font-bold text-kalma-deep">Who we are</h2>
              <div className="mt-8 flex flex-col gap-6 rounded-2xl border border-kalma-border/60 bg-white p-6 sm:flex-row sm:items-start sm:gap-8 md:p-8">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-kalma-soft text-xl font-bold text-kalma-action">
                  {defaultBlogAuthor.name.charAt(0)}
                </span>
                <div>
                  <p className="text-lg font-semibold text-kalma-deep">
                    {defaultBlogAuthor.name}
                  </p>
                  <p className="text-sm font-medium text-kalma-action">
                    {defaultBlogAuthor.role}
                  </p>
                  <p className="mt-3 leading-relaxed text-kalma-muted">
                    {defaultBlogAuthor.bio}
                  </p>
                </div>
              </div>
              <p className="mt-6 text-sm text-kalma-muted">
                Questions?{" "}
                <a
                  href={`mailto:${process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "thalesbrederodes@gmail.com"}`}
                  className="font-medium text-kalma-action hover:underline"
                >
                  Get in touch
                </a>
                . Blog articles are written by the Kalma team with clinical
                sources linked where applicable.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <Reveal>
              <h2 className="text-2xl font-bold text-kalma-deep">
                Launching Q1 2026
              </h2>
              <p className="mx-auto mt-4 max-w-lg leading-relaxed text-kalma-muted">
                Join the waitlist for early access to Panic Shield, guided
                breathing, mood journaling, and science-backed micro-lessons.
              </p>
              <WaitlistTrigger size="md" className="mt-8">
                Join the waitlist
              </WaitlistTrigger>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

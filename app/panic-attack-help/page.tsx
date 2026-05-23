import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/motion/Reveal";
import {
  JsonLd,
  buildBreadcrumbJsonLd,
  buildWebPageJsonLd,
  defaultOgImage,
} from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { getAllPosts } from "@/lib/blog/posts";

const pageDescription =
  "Complete guide to panic attack help: grounding techniques, breathing exercises, and why Kalma is built for instant offline relief.";

export const metadata: Metadata = {
  title: "Panic Attack Help — What to Do & Best Apps",
  description: pageDescription,
  keywords: [
    "panic attack help",
    "what to do during panic attack",
    "grounding techniques",
    "panic attack app",
    "5-4-3-2-1 grounding",
  ],
  alternates: { canonical: "/panic-attack-help" },
  openGraph: {
    title: "Panic Attack Help | Kalma",
    description:
      "Evidence-based panic attack help: grounding, breathing, and the Kalma app for instant offline support.",
    url: "/panic-attack-help",
    siteName: siteConfig.name,
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    site: siteConfig.twitterHandle,
    creator: siteConfig.twitterHandle,
    title: "Panic Attack Help | Kalma",
    description:
      "Evidence-based panic attack help: grounding, breathing, and instant offline support.",
    images: [defaultOgImage.url],
  },
};

const steps = [
  {
    title: "Name it",
    body: "Say aloud: \"This is a panic attack. It feels terrible, but it will pass.\" Naming reduces the fear-of-fear spiral.",
  },
  {
    title: "Ground with 5-4-3-2-1",
    body: "Notice 5 things you see, 4 you touch, 3 you hear, 2 you smell, 1 you taste. This pulls attention into the present.",
  },
  {
    title: "Slow your breath",
    body: "Try box breathing (4-4-4-4) or a longer exhale than inhale. Fast breathing feeds panic; slow breathing activates calm.",
  },
  {
    title: "Relax your body",
    body: "Unclench your jaw, drop your shoulders, loosen your grip. Scan for tension you didn't notice.",
  },
  {
    title: "Avoid the traps",
    body: "Don't Google symptoms, fight the sensations, or chug caffeine. Acceptance reduces a second layer of suffering.",
  },
];

export default function PanicAttackHelpPage() {
  const relatedPosts = getAllPosts()
    .filter((p) =>
      [
        "what-to-do-during-a-panic-attack",
        "why-panic-attacks-feel-dangerous",
        "box-breathing-vs-4-7-8-for-anxiety",
      ].includes(p.slug),
    )
    .slice(0, 3);

  return (
    <>
      <JsonLd
        data={buildWebPageJsonLd({
          name: "Panic Attack Help",
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
                Panic attack help
              </p>
              <h1 className="text-display mt-4 text-balance text-4xl font-bold text-kalma-deep sm:text-5xl">
                What to do during a panic attack
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-kalma-muted">
                Panic attacks peak within minutes and feel dangerous — but they
                are not life-threatening. This guide covers evidence-based steps
                you can use anywhere, plus how{" "}
                <strong className="font-semibold text-kalma-deep">Kalma</strong>{" "}
                delivers instant offline panic attack help on your phone.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-kalma-surface py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-2xl font-bold text-kalma-deep">
              Step-by-step panic attack relief
            </h2>
            <ol className="mt-8 space-y-6">
              {steps.map((step, i) => (
                <Reveal key={step.title} delay={i * 0.05}>
                  <li className="rounded-2xl border border-kalma-border/60 bg-white p-6">
                    <span className="text-sm font-bold text-kalma-action">
                      Step {i + 1}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold text-kalma-deep">
                      {step.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-kalma-muted">
                      {step.body}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-2xl font-bold text-kalma-deep">
              Why a panic attack app helps
            </h2>
            <p className="mt-4 leading-relaxed text-kalma-muted">
              During an attack, decision-making shuts down. A dedicated panic
              attack app like Kalma gives you one-tap access to grounding and
              breathing — no login, no onboarding, no internet required. Panic
              Shield is designed for the exact moment anxiety spikes.
            </p>
            <ul className="mt-6 space-y-3 text-kalma-muted">
              <li className="flex gap-2">
                <span className="text-kalma-action">✓</span>
                Offline grounding and 5-4-3-2-1 exercises
              </li>
              <li className="flex gap-2">
                <span className="text-kalma-action">✓</span>
                Guided box, 4-7-8, and resonant breathing
              </li>
              <li className="flex gap-2">
                <span className="text-kalma-action">✓</span>
                Mood journal to track triggers over time
              </li>
            </ul>
            <p className="mt-8">
              <Link
                href="/#waitlist"
                className="font-semibold text-kalma-action hover:underline"
              >
                Join the Kalma waitlist →
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
              {relatedPosts.map((post) => (
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
              ))}
            </ul>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}

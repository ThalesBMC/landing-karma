import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { buildWebPageJsonLd, defaultOgImage, JsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Kalma privacy policy — how we handle your data. Privacy-first, GDPR-aligned mental health app built in the EU.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Privacy Policy | Kalma",
    description:
      "How Kalma handles your data. Privacy-first design for panic and anxiety support.",
    url: "/privacy",
    siteName: siteConfig.name,
    images: [defaultOgImage],
  },
};

export default function PrivacyPage() {
  const lastUpdated = "May 24, 2026";

  return (
    <>
      <JsonLd
        data={buildWebPageJsonLd({
          name: "Kalma Privacy Policy",
          description:
            "Privacy policy for Kalma, a panic and anxiety relief app.",
          path: "/privacy",
        })}
      />
      <Header />
      <main className="bg-white">
        <article className="mx-auto max-w-3xl px-6 py-20 md:py-28">
          <h1 className="text-display text-4xl font-bold text-kalma-deep sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-kalma-muted">
            Last updated: {lastUpdated}
          </p>

          <div className="prose-kalma mt-10 space-y-8 text-kalma-muted">
            <section>
              <h2 className="text-xl font-semibold text-kalma-deep">
                Overview
              </h2>
              <p className="mt-3 leading-relaxed">
                Kalma (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a
                mental health app focused on panic attack and anxiety relief.
                We are built in the EU with privacy-first design. This policy
                explains what data we collect on kalma.cc and how we use it.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-kalma-deep">
                Waitlist data
              </h2>
              <p className="mt-3 leading-relaxed">
                When you join the waitlist, we collect your email address to
                notify you about Kalma&apos;s launch and early access. We use
                Resend to deliver emails and store addresses in a secure
                audience list. We do not sell your email to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-kalma-deep">
                Analytics
              </h2>
              <p className="mt-3 leading-relaxed">
                We may use privacy-friendly analytics to understand how
                visitors use kalma.cc (e.g. page views, referrers). We do not
                use invasive tracking or sell browsing data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-kalma-deep">
                Your rights (GDPR)
              </h2>
              <p className="mt-3 leading-relaxed">
                If you are in the EU/EEA, you have the right to access, correct,
                delete, or export your personal data, and to withdraw consent.
                Contact us at{" "}
                <a
                  href={`mailto:${process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "thalesbrederodes@gmail.com"}`}
                  className="text-kalma-action underline-offset-2 hover:underline"
                >
                  {process.env.NEXT_PUBLIC_SUPPORT_EMAIL ??
                    "thalesbrederodes@gmail.com"}
                </a>{" "}
                to exercise these rights.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-kalma-deep">
                App data (future)
              </h2>
              <p className="mt-3 leading-relaxed">
                When the Kalma iOS app launches, mood journals and health data
                will be handled according to a dedicated in-app privacy policy.
                Core panic support tools are designed to work with minimal data
                collection.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-kalma-deep">
                Contact
              </h2>
              <p className="mt-3 leading-relaxed">
                Questions about this policy? Email{" "}
                <a
                  href={`mailto:${process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "thalesbrederodes@gmail.com"}`}
                  className="text-kalma-action underline-offset-2 hover:underline"
                >
                  {process.env.NEXT_PUBLIC_SUPPORT_EMAIL ??
                    "thalesbrederodes@gmail.com"}
                </a>
                .
              </p>
            </section>
          </div>

          <p className="mt-12">
            <Link
              href="/"
              className="text-sm font-semibold text-kalma-action hover:underline"
            >
              ← Back to home
            </Link>
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}

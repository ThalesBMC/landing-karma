import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { HowItWorks } from "@/components/HowItWorks";
import { FeatureSection } from "@/components/FeatureSection";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { Mission } from "@/components/Mission";
import { BlogPreview } from "@/components/blog/BlogPreview";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { PhoneMockup } from "@/components/PhoneMockup";
import { Float } from "@/components/motion/Float";
import { PanicMockupContent } from "@/components/mockups/PanicMockupContent";
import { BreathingMockupContent } from "@/components/mockups/BreathingMockupContent";
import { LessonsMockupContent } from "@/components/mockups/LessonsMockupContent";
import {
  JsonLd,
  buildFaqPageJsonLd,
  buildSoftwareApplicationJsonLd,
} from "@/lib/seo";
import { faqItems } from "@/lib/faq";

export default function Home() {
  return (
    <>
      <JsonLd data={buildSoftwareApplicationJsonLd()} />
      <JsonLd data={buildFaqPageJsonLd(faqItems)} />
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <HowItWorks />

        <FeatureSection
          id="panic-shield"
          eyebrow="Panic shield"
          title="Offline panic attack support in seconds."
          description="Instant grounding exercises and calming tools the moment anxiety strikes. No signup, no friction, no judgement — built for panic attacks, not general meditation."
          accentColor="#F97316"
          theme="light"
          bullets={[
            "One-tap panic support, no login required",
            "Personalized to how you feel right now",
            "Always available, even offline",
          ]}
          blogLink={{
            href: "/blog/what-to-do-during-a-panic-attack",
            label: "Read our panic attack step-by-step guide",
          }}
          floatingCard={
            <div className="absolute -right-2 top-10 z-20 hidden sm:block">
              <Float amplitude={4} duration={5}>
                <div className="glass flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-kalma-deep">
                  <span className="h-2 w-2 animate-ping-dot rounded-full bg-orange-500" />
                  Help available now
                </div>
              </Float>
            </div>
          }
        >
          <Float amplitude={6} duration={5}>
            <PhoneMockup>
              <PanicMockupContent />
            </PhoneMockup>
          </Float>
        </FeatureSection>

        <FeatureSection
          eyebrow="Breath"
          title="Breathing app for anxiety, built in."
          description="Guided breathing exercises designed to calm your nervous system, anywhere and anytime. Box, 4-7-8, resonant, and more — science-backed patterns with visual pacing."
          accentColor="#219EBC"
          theme="soft"
          reverse
          bullets={[
            "Visual guidance with a calming pace",
            "Science-backed breath patterns",
            "Pairs with Apple Health & Watch",
          ]}
          blogLink={{
            href: "/blog/box-breathing-vs-4-7-8-for-anxiety",
            label: "Compare box breathing vs 4-7-8 for anxiety",
          }}
          floatingCard={
            <div className="absolute -left-2 bottom-16 z-20 hidden sm:block">
              <Float amplitude={5} duration={5.5} delay={0.4}>
                <div className="glass rounded-2xl px-4 py-3">
                  <p className="text-xs text-kalma-muted">Inhale</p>
                  <p className="font-display text-lg font-bold text-kalma-action">
                    4.0s
                  </p>
                </div>
              </Float>
            </div>
          }
        >
          <Float amplitude={6} duration={5.5} delay={0.3}>
            <PhoneMockup>
              <BreathingMockupContent />
            </PhoneMockup>
          </Float>
        </FeatureSection>

        <FeatureSection
          eyebrow="Learn & journal"
          title="Anxiety journal and trigger tracking."
          description="Track moods, write journals, and discover what triggers your anxiety with science-backed micro-lessons. Spot patterns and act on insights — not just cope in the moment."
          accentColor="#FFC20A"
          theme="light"
          bullets={[
            "Short, evidence-based lessons",
            "Mood & trigger tracking made simple",
            "Insights you actually act on",
          ]}
          blogLink={{
            href: "/blog/how-to-track-anxiety-triggers",
            label: "Learn how to track anxiety triggers",
          }}
          floatingCard={
            <div className="absolute -right-2 bottom-16 z-20 hidden sm:block">
              <Float amplitude={4} duration={5.5} delay={0.6}>
                <div className="glass flex items-center gap-2 rounded-2xl px-4 py-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-kalma-learn/20 text-kalma-learn">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M12 2v20M2 12h20" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs text-kalma-muted">New insight</p>
                    <p className="text-sm font-semibold text-kalma-deep">
                      Caffeine peak
                    </p>
                  </div>
                </div>
              </Float>
            </div>
          }
        >
          <Float amplitude={6} duration={5} delay={0.2}>
            <PhoneMockup>
              <LessonsMockupContent />
            </PhoneMockup>
          </Float>
        </FeatureSection>

        <FeaturesGrid />
        <Mission />
        <BlogPreview />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

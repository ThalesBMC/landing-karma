import { WaitlistForm } from "./WaitlistForm";
import { Reveal } from "./motion/Reveal";

export function CTASection() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <div className="mesh-aurora-dark noise relative overflow-hidden rounded-[2.5rem] px-6 py-20 sm:px-12 md:py-28">
          {/* glow accents */}
          <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-kalma-action/40 blur-[120px]" />
          <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-kalma-aurora/30 blur-[120px]" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              maskImage: "radial-gradient(ellipse at center, black 25%, transparent 70%)",
            }}
          />

          <div className="relative mx-auto max-w-2xl text-center text-white">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-kalma-primary backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-kalma-primary" />
                App Store · Q1 2026
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="text-display mt-6 text-balance text-4xl font-bold sm:text-5xl md:text-6xl">
                Your calmer mind{" "}
                <span className="bg-gradient-to-r from-kalma-primary via-white to-kalma-aurora bg-clip-text text-transparent">
                  starts here.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-5 text-balance text-lg leading-relaxed text-white/75">
                Be the first to feel the difference. Get early access, founding
                member perks, and the launch update straight to your inbox.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <WaitlistForm variant="cta" className="mt-10" />
            </Reveal>

            <Reveal delay={0.32}>
              <p className="mt-5 text-sm text-white/55">
                No spam · Unsubscribe anytime · We&apos;ll never share your email.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Reveal } from "./motion/Reveal";
import { Float } from "./motion/Float";
import { PhoneMockup } from "./PhoneMockup";
import { BreathingMockupContent } from "./mockups/BreathingMockupContent";

export function Mission() {
  return (
    <section
      id="mission"
      className="relative scroll-mt-24 overflow-hidden bg-white py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 mesh-aurora opacity-60" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* visual scene */}
          <Reveal x={-30} y={0}>
            <div className="relative mx-auto flex h-[460px] w-full max-w-md items-center justify-center">
              {/* halo */}
              <div className="absolute inset-x-4 top-1/2 h-72 -translate-y-1/2 rounded-[3rem] bg-gradient-to-br from-kalma-primary/40 via-kalma-soft to-kalma-aurora/35 blur-2xl" />

              {/* phone */}
              <Float amplitude={6} duration={5.5} className="relative z-10">
                <PhoneMockup>
                  <BreathingMockupContent />
                </PhoneMockup>
              </Float>

              {/* warrior badge */}
              <Reveal
                delay={0.35}
                x={20}
                y={0}
                className="absolute right-0 top-8 z-20"
              >
                <Float amplitude={5} duration={6} delay={0.6}>
                  <div className="glass flex items-center gap-2 rounded-full px-4 py-2">
                    <span
                      aria-hidden
                      className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-kalma-learn to-kalma-journal text-white"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3.5 w-3.5"
                      >
                        <path d="m12 2 2.39 4.84L20 8l-4 3.9.94 5.5L12 14.77 7.06 17.4 8 11.9 4 8l5.61-1.16L12 2z" />
                      </svg>
                    </span>
                    <span className="text-sm font-semibold text-kalma-deep">
                      Warrior +1
                    </span>
                  </div>
                </Float>
              </Reveal>

              {/* avg time card */}
              <Reveal
                delay={0.45}
                y={20}
                className="absolute -left-2 bottom-6 z-20"
              >
                <Float amplitude={4} duration={5} delay={0.9}>
                  <div className="glass rounded-2xl px-5 py-3">
                    <p className="text-xs text-kalma-muted">
                      Average time to calm
                    </p>
                    <p className="font-display mt-0.5 text-2xl font-bold gradient-text-deep">
                      12 min
                    </p>
                  </div>
                </Float>
              </Reveal>

              {/* streak card */}
              <Reveal
                delay={0.55}
                x={20}
                y={0}
                className="absolute -right-2 bottom-16 z-20 hidden sm:block"
              >
                <Float amplitude={4} duration={6.5} delay={1.2}>
                  <div className="glass flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-kalma-deep">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Streak 12 days
                  </div>
                </Float>
              </Reveal>
            </div>
          </Reveal>

          {/* copy */}
          <Reveal x={30} y={0} delay={0.1}>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-kalma-action">
                Our mission
              </p>
              <h2 className="text-display mt-4 text-balance text-4xl font-bold leading-tight text-kalma-deep sm:text-5xl">
                Built for calm,{" "}
                <span className="gradient-text">one breath at a time</span>.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-kalma-muted">
                Kalma was designed for anyone who has ever felt anxiety take
                over, in a meeting, on the train, or in the middle of the night.
                Relief should be instant, gentle, and always within reach.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-kalma-muted">
                Build your streak, earn warrior points, and conquer anxiety one
                gentle choice at a time.
              </p>

              <figure className="relative mt-10 rounded-2xl border border-kalma-border bg-white/70 p-6 backdrop-blur">
                <span
                  aria-hidden
                  className="absolute -top-4 left-5 font-display text-6xl leading-none text-kalma-action/30"
                >
                  &ldquo;
                </span>
                <blockquote className="relative font-display text-lg italic text-kalma-deep">
                  Slow breaths can turn a loud moment into a softer one.
                </blockquote>
                <figcaption className="mt-3 text-sm font-medium text-kalma-muted">
                  The Kalma manifesto
                </figcaption>
              </figure>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

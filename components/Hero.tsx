import { WaitlistForm } from "./WaitlistForm";
import { PhoneMockup } from "./PhoneMockup";
import { PanicMockupContent } from "./mockups/PanicMockupContent";
import { Reveal } from "./motion/Reveal";
import { Float } from "./motion/Float";

export function Hero() {
  return (
    <section className="relative isolate overflow-x-clip">
      {/* aurora mesh background */}
      <div className="mesh-aurora noise absolute inset-0 -z-10" />

      {/* extra colored blobs */}
      <div className="pointer-events-none absolute -right-32 -top-20 -z-10 h-[28rem] w-[28rem] rounded-full bg-kalma-primary/40 blur-[120px] animate-pulse-slow" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 -z-10 h-[24rem] w-[24rem] rounded-full bg-kalma-aurora/40 blur-[120px] animate-pulse-slow [animation-delay:2s]" />

      {/* grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #023047 1px, transparent 1px), linear-gradient(to bottom, #023047 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-12 pt-6 md:grid-cols-2 md:pb-32 md:pt-12 lg:gap-16">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-kalma-action/25 bg-white/80 px-4 py-1.5 text-sm font-semibold text-kalma-action shadow-sm backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping-dot rounded-full bg-emerald-400" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Coming soon · Q1 2026
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="text-display mt-6 text-balance text-5xl font-bold text-kalma-deep sm:text-6xl lg:text-[4.25rem]">
              The second panic starts,{" "}
              <span className="gradient-text">Kalma is there</span>.
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p
              role="doc-subtitle"
              className="mt-6 max-w-md text-balance text-lg leading-relaxed text-kalma-muted"
            >
              Kalma is a panic attack app with instant offline grounding, guided
              breathing, and mood journaling — no signup required.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8">
              <WaitlistForm variant="hero" />
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-kalma-muted">
              <div className="flex -space-x-2">
                {["#8ecae6", "#a8b5e8", "#f58fc2", "#ffc20a"].map((c) => (
                  <span
                    key={c}
                    className="h-6 w-6 rounded-full border-2 border-white shadow-sm"
                    style={{ background: c }}
                  />
                ))}
              </div>
              <span>
                <strong className="font-semibold text-kalma-deep">
                  1,200+
                </strong>{" "}
                on the waitlist
              </span>
              <span className="hidden h-1 w-1 rounded-full bg-kalma-muted/40 sm:block" />
              <span>No spam, ever</span>
            </div>
          </Reveal>
        </div>

        <div className="relative mx-auto flex min-h-[420px] w-full max-w-md items-center justify-center py-6 sm:min-h-[520px] md:min-h-[560px] md:py-8">
          {/* soft halo behind phone */}
          <div className="absolute inset-x-8 top-1/2 h-80 -translate-y-1/2 rounded-[3rem] bg-gradient-to-br from-kalma-primary/40 via-kalma-aurora/30 to-kalma-action/30 blur-3xl" />

          {/* phone */}
          <Float amplitude={6} duration={5} className="relative z-10">
            <PhoneMockup>
              <PanicMockupContent />
            </PhoneMockup>
          </Float>

          {/* floating UI card top-right */}
          <Reveal
            delay={0.5}
            x={20}
            y={0}
            className="absolute right-0 top-10 z-30 hidden sm:block"
          >
            <Float amplitude={4} duration={6} delay={0.4}>
              <div className="glass flex items-center gap-3 rounded-2xl px-4 py-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-kalma-primary to-kalma-action text-white">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-kalma-muted">Now</p>
                  <p className="text-sm font-semibold text-kalma-deep">
                    4-7-8 unlocked
                  </p>
                </div>
              </div>
            </Float>
          </Reveal>

          {/* floating UI card bottom-left — streak, tucked to phone */}
          <Reveal
            delay={0.65}
            x={-20}
            y={0}
            className="absolute left-6 bottom-32 z-30 hidden sm:left-10 sm:bottom-36 sm:block md:left-14 md:bottom-40"
          >
            <Float amplitude={5} duration={5.5} delay={0.8}>
              <div className="glass rounded-2xl px-4 py-3">
                <p className="text-xs text-kalma-muted">Streak</p>
                <p className="font-display text-lg font-bold text-kalma-deep">
                  12{" "}
                  <span className="text-sm font-medium text-kalma-action">
                    days
                  </span>
                </p>
              </div>
            </Float>
          </Reveal>

          {/* floating UI card right-bottom */}
          <Reveal
            delay={0.8}
            y={20}
            x={0}
            className="absolute -right-2 bottom-24 z-30 hidden lg:block"
          >
            <Float amplitude={4} duration={6.5} delay={1.2}>
              <div className="glass flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-kalma-deep">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Calmer in 2:34
              </div>
            </Float>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

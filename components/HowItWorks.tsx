"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "./motion/Reveal";

const steps = [
  {
    n: "01",
    title: "Feel it rising",
    desc: "The first signs of panic: racing heart, tight chest. You're not alone.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Open Kalma",
    desc: "One tap. No login, no setup, no questions. Just a calm space ready for you.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="3" />
        <path d="M12 18h.01" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Breathe through it",
    desc: "Guided breathing, grounding, and gentle support until the wave passes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
];

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 60%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="how-it-works" className="relative scroll-mt-24 overflow-hidden bg-white py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-96 -translate-y-1/2 bg-gradient-to-b from-kalma-soft/30 via-transparent to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-kalma-action">
              How it works
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-display mt-4 text-balance text-4xl font-bold text-kalma-deep sm:text-5xl">
              Panic attack relief in three steps.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-4 text-lg text-kalma-muted">
              No onboarding. No questionnaires. Kalma is built for the moment you
              need it most.
            </p>
          </Reveal>
        </div>

        <div ref={ref} className="relative mt-20">
          {/* connecting line */}
          <div className="pointer-events-none absolute left-12 right-12 top-10 hidden h-px bg-kalma-border md:block">
            <motion.div
              className="h-full origin-left bg-gradient-to-r from-kalma-primary via-kalma-action to-kalma-aurora"
              style={{ scaleX: reduce ? 1 : lineScale }}
            />
          </div>

          <ol className="grid gap-12 md:grid-cols-3 md:gap-8">
            {steps.map((step, i) => (
              <Reveal
                as="li"
                key={step.n}
                delay={0.1 * i}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl border border-kalma-border bg-white shadow-sm">
                  <span className="absolute -right-2 -top-2 rounded-full bg-kalma-deep px-2 py-0.5 text-[10px] font-bold tracking-wider text-white">
                    {step.n}
                  </span>
                  <span className="h-7 w-7 text-kalma-action">{step.icon}</span>
                </div>
                <h3 className="font-display mt-6 text-xl font-bold text-kalma-deep">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-xs text-balance text-base leading-relaxed text-kalma-muted">
                  {step.desc}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

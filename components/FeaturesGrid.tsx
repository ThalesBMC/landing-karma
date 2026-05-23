"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import { Reveal } from "./motion/Reveal";

type Feature = {
  name: string;
  description: string;
  color: string;
  tint: string;
  icon: ReactNode;
  span?: boolean;
};

const features: Feature[] = [
  {
    name: "Panic",
    description:
      "One tap to grounding exercises, guided breath, and reassurance when you need it most.",
    color: "#219EBC",
    tint: "rgba(33, 158, 188, 0.12)",
    span: true,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M12 8v4M12 16h.01" />
      </svg>
    ),
  },
  {
    name: "Breath",
    description: "Box, 4-7-8, and resonant breathing. Calm in minutes.",
    color: "#0D82B9",
    tint: "rgba(13, 130, 185, 0.12)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
      </svg>
    ),
  },
  {
    name: "Learn",
    description: "Science-backed lessons on anxiety, panic & nervous system.",
    color: "#FFC20A",
    tint: "rgba(255, 194, 10, 0.15)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    name: "Journal",
    description: "Track moods, spot triggers, understand your patterns.",
    color: "#FF710A",
    tint: "rgba(255, 113, 10, 0.12)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M9 13h6M9 17h4" />
      </svg>
    ),
  },
  {
    name: "Listen",
    description: "Guided meditations and visualizations to soften the mind.",
    color: "#F58FC2",
    tint: "rgba(245, 143, 194, 0.15)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 14a9 9 0 0 1 18 0v3a2 2 0 0 1-2 2h-1v-7M5 19h1v-7" />
      </svg>
    ),
  },
  {
    name: "Sleep",
    description: "Soothing soundscapes for restful nights.",
    color: "#0D82B9",
    tint: "rgba(13, 130, 185, 0.12)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    ),
  },
  {
    name: "Play",
    description: "Tiny playful tools to decompress and reset.",
    color: "#8B74F4",
    tint: "rgba(139, 116, 244, 0.15)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="m9 9 6 6M15 9l-6 6" />
      </svg>
    ),
  },
];

function FeatureCard({ feature }: { feature: Feature }) {
  const reduce = useReducedMotion();
  return (
    <motion.article
      whileHover={reduce ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={`gradient-border group relative flex flex-col overflow-hidden rounded-3xl bg-white p-7 shadow-sm transition-shadow hover:shadow-xl ${
        feature.span ? "sm:col-span-2" : ""
      }`}
      style={{
        boxShadow: `0 1px 0 rgba(255,255,255,0.6) inset`,
      }}
    >
      {/* tint background that grows on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-90"
        style={{ background: feature.tint, opacity: 0.6 }}
      />

      <div
        className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl"
        style={{ backgroundColor: feature.tint, color: feature.color }}
      >
        <span className="block h-6 w-6">{feature.icon}</span>
      </div>

      <h3 className="font-display relative z-10 mt-6 text-2xl font-bold text-kalma-deep">
        {feature.name}
      </h3>
      <p className="relative z-10 mt-2 text-base leading-relaxed text-kalma-muted">
        {feature.description}
      </p>

      {feature.span && (
        <div className="relative z-10 mt-6 inline-flex items-center gap-2 text-sm font-semibold text-kalma-action">
          <span>The heart of Kalma</span>
          <span className="h-px w-10 bg-gradient-to-r from-kalma-action to-transparent" />
        </div>
      )}
    </motion.article>
  );
}

export function FeaturesGrid() {
  return (
    <section
      id="features"
      className="relative scroll-mt-24 overflow-hidden bg-kalma-surface py-24 md:py-32"
    >
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-kalma-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-kalma-aurora/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-kalma-action">
              Toolkit
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-display mt-4 text-balance text-4xl font-bold text-kalma-deep sm:text-5xl">
              Everything you need for anxiety relief.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-4 text-lg text-kalma-muted">
              Seven gentle tools designed to support you through anxiety, panic,
              and everyday stress.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal
              key={feature.name}
              delay={i * 0.06}
              className={feature.span ? "sm:col-span-2" : ""}
            >
              <FeatureCard feature={feature} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

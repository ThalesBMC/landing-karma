import { ReactNode } from "react";
import Link from "next/link";
import { Reveal } from "./motion/Reveal";

type Theme = "light" | "soft" | "deep";

type FeatureSectionProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets?: string[];
  accentColor?: string;
  reverse?: boolean;
  theme?: Theme;
  floatingCard?: ReactNode;
  blogLink?: { href: string; label: string };
  children: ReactNode;
};

const themeStyles: Record<
  Theme,
  { bg: string; text: string; sub: string; bullet: string; eyebrow: string }
> = {
  light: {
    bg: "bg-white",
    text: "text-kalma-deep",
    sub: "text-kalma-muted",
    bullet: "text-kalma-deep",
    eyebrow: "text-kalma-action",
  },
  soft: {
    bg: "bg-kalma-surface",
    text: "text-kalma-deep",
    sub: "text-kalma-muted",
    bullet: "text-kalma-deep",
    eyebrow: "text-kalma-action",
  },
  deep: {
    bg: "mesh-aurora-dark text-white",
    text: "text-white",
    sub: "text-white/75",
    bullet: "text-white/90",
    eyebrow: "text-kalma-primary",
  },
};

export function FeatureSection({
  id,
  eyebrow,
  title,
  description,
  bullets,
  accentColor = "#219EBC",
  reverse = false,
  theme = "light",
  floatingCard,
  blogLink,
  children,
}: FeatureSectionProps) {
  const s = themeStyles[theme];

  return (
    <section
      id={id}
      className={`relative scroll-mt-24 overflow-hidden ${s.bg} py-24 md:py-32`}
    >
      {/* accent blob */}
      <div
        className="pointer-events-none absolute h-[28rem] w-[28rem] rounded-full opacity-25 blur-[120px]"
        style={{
          backgroundColor: accentColor,
          top: reverse ? "-6rem" : "auto",
          bottom: reverse ? "auto" : "-6rem",
          left: reverse ? "auto" : "-6rem",
          right: reverse ? "-6rem" : "auto",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div
          className={`grid items-center gap-14 lg:grid-cols-2 lg:gap-20 ${
            reverse
              ? "[&>*:first-child]:lg:order-2 [&>*:last-child]:lg:order-1"
              : ""
          }`}
        >
          <Reveal x={reverse ? 30 : -30} y={0}>
            <div>
              <p
                className={`text-xs font-bold uppercase tracking-[0.2em] ${s.eyebrow}`}
              >
                {eyebrow}
              </p>
              <div
                className="mt-3 h-1 w-12 rounded-full"
                style={{ backgroundColor: accentColor }}
              />
              <h2
                className={`text-display mt-5 text-balance text-4xl font-bold leading-tight sm:text-5xl ${s.text}`}
              >
                {title}
              </h2>
              <p className={`mt-5 max-w-lg text-lg leading-relaxed ${s.sub}`}>
                {description}
              </p>

              {bullets && bullets.length > 0 && (
                <ul className="mt-8 space-y-3">
                  {bullets.map((b) => (
                    <li
                      key={b}
                      className={`flex items-start gap-3 ${s.bullet}`}
                    >
                      <span
                        className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                        style={{ backgroundColor: `${accentColor}25` }}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke={accentColor}
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-3 w-3"
                        >
                          <path d="m5 12 5 5L20 7" />
                        </svg>
                      </span>
                      <span className="text-base">{b}</span>
                    </li>
                  ))}
                </ul>
              )}

              {blogLink && (
                <p className="mt-6">
                  <Link
                    href={blogLink.href}
                    className="text-sm font-semibold text-kalma-action underline-offset-2 hover:underline"
                  >
                    {blogLink.label} →
                  </Link>
                </p>
              )}
            </div>
          </Reveal>

          <Reveal x={reverse ? -30 : 30} y={0} delay={0.1}>
            <div className="relative mx-auto flex h-[520px] w-full max-w-sm items-center justify-center">
              {/* soft halo */}
              <div
                className="absolute inset-x-6 top-1/2 h-72 -translate-y-1/2 rounded-[3rem] opacity-50 blur-3xl"
                style={{ backgroundColor: accentColor }}
              />
              <div className="relative z-10">{children}</div>
              {floatingCard}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

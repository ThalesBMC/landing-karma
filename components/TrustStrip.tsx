import { Reveal } from "./motion/Reveal";

const items = [
  {
    label: "Privacy-first",
    sub: "No tracking, no ads",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    label: "Designed with therapists",
    sub: "Evidence-based methods",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
      </svg>
    ),
  },
  {
    label: "Made in EU",
    sub: "GDPR compliant",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    label: "Crafted by humans",
    sub: "Not just another AI app",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="m22 11-3 3-2-2" />
      </svg>
    ),
  },
];

export function TrustStrip() {
  return (
    <section className="border-y border-kalma-border/70 bg-white/50 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6 py-6">
        <Reveal>
          <ul className="grid grid-cols-2 gap-y-4 sm:grid-cols-4 sm:gap-0">
            {items.map((item, i) => (
              <li
                key={item.label}
                className={`flex items-center gap-3 px-4 ${
                  i > 0 ? "sm:border-l sm:border-kalma-border/70" : ""
                }`}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-kalma-soft text-kalma-action">
                  <span className="block h-4 w-4">{item.icon}</span>
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-kalma-deep">
                    {item.label}
                  </p>
                  <p className="truncate text-xs text-kalma-muted">{item.sub}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

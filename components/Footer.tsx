import Image from "next/image";
import { WaitlistLink } from "@/components/WaitlistLink";

export function Footer() {
  const year = new Date().getFullYear();
  const supportEmail =
    process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "thalesbrederodes@gmail.com";

  const columns = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "How it works", href: "#how-it-works" },
        { label: "Waitlist", href: "#waitlist" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Mission", href: "#mission" },
        { label: "Panic help", href: "/panic-attack-help" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: `mailto:${supportEmail}` },
        { label: "Privacy", href: "/privacy" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "Instagram", href: "#" },
        { label: "X / Twitter", href: "#" },
        { label: "Email us", href: `mailto:${supportEmail}` },
      ],
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-kalma-deep text-white">
      {/* top gradient hairline */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-kalma-primary/60 to-transparent" />
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-kalma-action/20 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-6 pb-10 pt-20">
        <div className="grid gap-12 md:grid-cols-12">
          {/* brand */}
          <div className="md:col-span-5">
            <Image
              src="/assets/KalmaLogoLight.png"
              alt="Kalma"
              width={840}
              height={392}
              className="h-10 w-auto"
            />
            <p className="mt-5 max-w-sm text-base leading-relaxed text-white/70">
              Panic &amp; anxiety relief in your pocket. Your companion for a
              calmer mind
            </p>
            <a
              href={`mailto:${supportEmail}`}
              className="mt-6 inline-flex items-center gap-2 text-sm text-kalma-primary transition-colors hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              {supportEmail}
            </a>
          </div>

          {/* link columns */}
          <div className="grid grid-cols-3 gap-8 md:col-span-7">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">
                  {col.title}
                </h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.href === "#waitlist" ? (
                        <WaitlistLink className="text-sm text-white/80 transition-colors hover:text-kalma-primary">
                          {link.label}
                        </WaitlistLink>
                      ) : (
                        <a
                          href={link.href}
                          className="text-sm text-white/80 transition-colors hover:text-kalma-primary"
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-sm text-white/55">
            &copy; {year} Kalma. Crafted with care for calmer minds.
          </p>
          <p className="text-xs uppercase tracking-[0.15em] text-white/40">
            Made in EU · Privacy-first
          </p>
        </div>
      </div>
    </footer>
  );
}

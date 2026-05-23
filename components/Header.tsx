"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { focusWaitlistInput } from "@/lib/focus-waitlist";
import { WaitlistTrigger } from "@/components/WaitlistTrigger";

const navLinks: { href: string; label: string; isRoute?: boolean }[] = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#mission", label: "Mission" },
  { href: "/blog", label: "Blog", isRoute: true },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-kalma-border/60 bg-white/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          aria-label="Kalma"
          className="group transition-transform hover:scale-[1.02]"
        >
          <Image
            src="/assets/KalmaLogo.png"
            alt="Kalma"
            width={840}
            height={392}
            priority
            className="h-9 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link
                key={link.href}
                href={link.href}
                className="group relative rounded-full px-4 py-2 text-sm font-semibold text-kalma-deep/80 transition-colors hover:text-kalma-action"
              >
                <span>{link.label}</span>
                <span className="pointer-events-none absolute inset-x-4 -bottom-px h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-kalma-action to-transparent transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="group relative rounded-full px-4 py-2 text-sm font-semibold text-kalma-deep/80 transition-colors hover:text-kalma-action"
              >
                <span>{link.label}</span>
                <span className="pointer-events-none absolute inset-x-4 -bottom-px h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-kalma-action to-transparent transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ),
          )}
        </nav>

        <WaitlistTrigger>Join Waitlist</WaitlistTrigger>
      </div>
    </header>
  );
}

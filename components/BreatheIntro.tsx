"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const CYCLE_MS = 6000;
const REDUCED_MS = 1_200;
const EXIT_MS = 900;
const LAST_VISIT_KEY = "kalma-last-visit";
const VISIT_COOLDOWN_MS = 60 * 60 * 1000;

export function BreatheIntro() {
  const [phase, setPhase] = useState<
    "pending" | "visible" | "exiting" | "done"
  >("pending");

  useEffect(() => {
    const now = Date.now();

    try {
      const lastVisit = localStorage.getItem(LAST_VISIT_KEY);
      const lastVisitTime = lastVisit ? Number.parseInt(lastVisit, 10) : 0;
      const shouldShow =
        !lastVisitTime || now - lastVisitTime >= VISIT_COOLDOWN_MS;

      localStorage.setItem(LAST_VISIT_KEY, String(now));
      setPhase(shouldShow ? "visible" : "done");
    } catch {
      setPhase("visible");
    }
  }, []);

  useEffect(() => {
    if (phase !== "visible") return;

    const root = document.documentElement;
    const prevOverflow = root.style.overflow;
    root.style.overflow = "hidden";

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reduce ? REDUCED_MS : CYCLE_MS;

    const exitTimer = window.setTimeout(() => setPhase("exiting"), duration);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setPhase("exiting");
      }
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.clearTimeout(exitTimer);
      window.removeEventListener("keydown", onKey);
      root.style.overflow = prevOverflow;
    };
  }, [phase]);

  useEffect(() => {
    if (phase !== "exiting") return;
    const t = window.setTimeout(() => setPhase("done"), EXIT_MS);
    return () => window.clearTimeout(t);
  }, [phase]);

  if (phase === "pending" || phase === "done") return null;

  const exiting = phase === "exiting";

  return (
    <div
      id="breathe-intro"
      role="dialog"
      aria-modal="true"
      aria-label="A moment to breathe"
      className={`mesh-aurora fixed inset-0 z-[100] flex items-center justify-center overflow-hidden px-4 pb-[env(safe-area-inset-bottom)] transition-opacity duration-700 ease-out ${
        exiting ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <button
        type="button"
        onClick={() => setPhase("exiting")}
        className="absolute right-[max(1rem,env(safe-area-inset-right))] top-[max(1rem,env(safe-area-inset-top))] flex min-h-11 min-w-11 items-center justify-center rounded-full border border-kalma-border/70 bg-white/75 px-5 py-2.5 text-sm font-medium tracking-wide text-kalma-muted shadow-sm backdrop-blur-sm transition hover:bg-white/90 hover:text-kalma-deep active:scale-[0.97] focus:outline-none focus-visible:ring-2 focus-visible:ring-kalma-action/40 sm:px-4 sm:py-2 sm:text-xs"
      >
        Skip
      </button>

      <div
        className="relative flex w-full max-w-sm flex-col items-center transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] sm:max-w-none"
        style={exiting ? { transform: "scale(6)" } : undefined}
      >
        <div className="relative size-[min(78vw,18rem)] sm:size-64">
          <div className="intro-circle absolute inset-0">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-kalma-primary via-kalma-action to-kalma-aurora opacity-80 blur-2xl" />
            <div className="absolute inset-[8%] rounded-full border border-white/60 bg-gradient-to-br from-white/80 via-kalma-soft/70 to-kalma-primary/50 shadow-[0_30px_80px_-20px_rgba(33,158,188,0.5)] backdrop-blur-xl" />
            <div className="absolute inset-[18%] rounded-full border border-white/40 bg-white/30 backdrop-blur-md" />
          </div>
        </div>

        <div
          aria-live="polite"
          className="relative mt-8 h-8 w-full text-center sm:mt-12 sm:h-7 sm:w-72"
        >
          <p className="intro-caption-in absolute inset-0 text-base font-medium uppercase tracking-[0.2em] text-kalma-deep sm:text-[0.95rem] sm:tracking-[0.18em]">
            Breathe in
          </p>
          <p className="intro-caption-out absolute inset-0 text-base font-medium uppercase tracking-[0.2em] text-kalma-deep sm:text-[0.95rem] sm:tracking-[0.18em]">
            Breathe out
          </p>
        </div>

        <Image
          src="/assets/KalmaLogo.png"
          alt="Kalma"
          width={840}
          height={392}
          priority
          className="mt-8 h-8 w-auto opacity-80 sm:mt-12 sm:h-7"
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-kalma-border/50">
        <div className="intro-progress-bar h-full bg-gradient-to-r from-kalma-primary via-kalma-action to-kalma-aurora" />
      </div>
    </div>
  );
}

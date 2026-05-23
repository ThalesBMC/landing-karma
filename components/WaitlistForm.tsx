"use client";

import { FormEvent, useState } from "react";
import { WaitlistButton } from "@/components/WaitlistButton";

type WaitlistFormProps = {
  variant?: "hero" | "cta";
  className?: string;
};

export function WaitlistForm({ variant = "hero", className = "" }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setMessage("You're on the list! We'll notify you when Kalma launches.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  const isHero = variant === "hero";
  const anchorId = isHero ? "waitlist" : undefined;
  const wrapperClass = `${isHero ? "scroll-mt-28 " : ""}${className}`.trim();

  if (status === "success") {
    return (
      <div
        id={anchorId}
        className={`flex items-center gap-3 rounded-2xl border px-5 py-4 ${
          isHero
            ? "border-kalma-action/30 bg-kalma-soft text-kalma-deep"
            : "border-white/20 bg-white/10 text-white backdrop-blur"
        } ${wrapperClass}`}
        role="status"
      >
        <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
          isHero ? "bg-kalma-action text-white" : "bg-white/20 text-white"
        }`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
            <path d="m5 12 5 5L20 7" />
          </svg>
        </span>
        <p className="text-sm font-medium">{message}</p>
      </div>
    );
  }

  const inputClass = isHero
    ? "w-full appearance-none rounded-full border border-kalma-border/80 bg-white px-5 text-base text-kalma-deep shadow-[0_1px_4px_rgba(2,48,71,0.06)] outline-none transition-colors placeholder:text-kalma-muted/75 focus:border-kalma-action focus:ring-2 focus:ring-kalma-action/20 disabled:opacity-60 sm:min-w-0 sm:flex-1 sm:shadow-none"
    : "w-full appearance-none rounded-full border border-white/0 bg-white px-5 text-base text-kalma-deep shadow-[0_4px_24px_-6px_rgba(0,0,0,0.35)] outline-none transition-colors placeholder:text-kalma-muted/75 focus:border-kalma-action focus:ring-2 focus:ring-kalma-action/25 disabled:opacity-60 sm:min-w-0 sm:flex-1";

  const fieldHeight = "h-14 sm:h-[52px]";

  return (
    <div id={anchorId} className={wrapperClass || undefined}>
      <form
        onSubmit={handleSubmit}
        className={`flex w-full max-w-md flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-2 ${
          isHero ? "sm:max-w-none" : "sm:mx-auto"
        }`}
      >
        <input
          type="email"
          name="email"
          id={isHero ? "waitlist-email" : "waitlist-email-cta"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          disabled={status === "loading"}
          className={`${inputClass} ${fieldHeight}`}
        />
        <WaitlistButton
          type="submit"
          size="md"
          variant={isHero ? "primary" : "on-dark"}
          disabled={status === "loading"}
          className={`w-full shrink-0 sm:w-auto ${fieldHeight}`}
        >
          {status === "loading" ? (
            <span className="inline-flex items-center gap-2">
              <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-current border-r-transparent" />
              Joining...
            </span>
          ) : (
            "Join the waitlist"
          )}
        </WaitlistButton>
      </form>
      {status === "error" && (
        <p className={`mt-2 text-sm ${isHero ? "text-red-500" : "text-red-300"}`} role="alert">
          {message}
        </p>
      )}
    </div>
  );
}

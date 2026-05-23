"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";

type WaitlistButtonProps = {
  variant?: "primary" | "on-dark";
  size?: "sm" | "md";
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const sizeClass = {
  sm: "h-10 px-5 text-sm",
  md: "h-14 px-7 text-base sm:h-[52px]",
} as const;

const variantClass = {
  primary: [
    "bg-kalma-action text-white",
    "shadow-[0_1px_0_rgba(255,255,255,0.2)_inset,0_8px_20px_-8px_rgba(33,158,188,0.45)]",
    "hover:bg-[#1d92ad]",
    "active:bg-[#178199]",
    "focus-visible:ring-4 focus-visible:ring-kalma-action/30",
  ].join(" "),
  "on-dark": [
    "bg-white text-kalma-deep",
    "shadow-[0_8px_20px_-8px_rgba(0,0,0,0.35)]",
    "hover:bg-white/95",
    "active:bg-white/90",
    "focus-visible:ring-4 focus-visible:ring-white/30",
  ].join(" "),
} as const;

export function WaitlistButton({
  variant = "primary",
  size = "sm",
  children,
  className = "",
  type = "button",
  ...props
}: WaitlistButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-[-0.01em] transition-colors duration-150 ease-out outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60 ${sizeClass[size]} ${variantClass[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

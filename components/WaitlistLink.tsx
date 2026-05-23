"use client";

import type { ReactNode } from "react";
import { focusWaitlistInput } from "@/lib/focus-waitlist";

type WaitlistLinkProps = {
  className?: string;
  children: ReactNode;
};

export function WaitlistLink({ className, children }: WaitlistLinkProps) {
  return (
    <button type="button" onClick={focusWaitlistInput} className={className}>
      {children}
    </button>
  );
}

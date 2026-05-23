"use client";

import { useEffect } from "react";
import { focusWaitlistInput } from "@/lib/focus-waitlist";

export function WaitlistHashHandler() {
  useEffect(() => {
    if (window.location.hash !== "#waitlist") return;

    window.setTimeout(() => focusWaitlistInput(), 100);
  }, []);

  return null;
}

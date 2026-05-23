"use client";

import { focusWaitlistInput } from "@/lib/focus-waitlist";
import { WaitlistButton } from "@/components/WaitlistButton";
import type { ComponentProps } from "react";

type WaitlistTriggerProps = Omit<ComponentProps<typeof WaitlistButton>, "onClick">;

export function WaitlistTrigger(props: WaitlistTriggerProps) {
  return <WaitlistButton type="button" onClick={focusWaitlistInput} {...props} />;
}

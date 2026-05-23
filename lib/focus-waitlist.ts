const FOCUS_DELAY_MS = 450;

function focusInput() {
  const input = document.getElementById("waitlist-email") as HTMLInputElement | null;
  input?.focus({ preventScroll: true });
}

export function focusWaitlistInput() {
  const title = document.getElementById("waitlist");
  const input = document.getElementById("waitlist-email");

  if (!title && !input) {
    window.location.assign("/#waitlist");
    return;
  }

  if (title) {
    title.scrollIntoView({ behavior: "smooth", block: "center" });
    window.setTimeout(focusInput, FOCUS_DELAY_MS);
    return;
  }

  input?.scrollIntoView({ behavior: "smooth", block: "center" });
  window.setTimeout(focusInput, FOCUS_DELAY_MS);
}

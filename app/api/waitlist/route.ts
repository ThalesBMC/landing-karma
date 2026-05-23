import { NextRequest, NextResponse } from "next/server";
import { getResend } from "@/lib/resend";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }

  entry.count += 1;
  return false;
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again in a minute." },
        { status: 429 },
      );
    }

    const body = await request.json();
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";

    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const resend = getResend();
    const segmentId = process.env.RESEND_AUDIENCE_ID;
    const fromEmail = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";
    const supportEmail = process.env.SUPPORT_EMAIL;

    if (segmentId) {
      try {
        await resend.contacts.create({
          email,
          unsubscribed: false,
          segments: [{ id: segmentId }],
        });
      } catch (contactError) {
        const message =
          contactError instanceof Error ? contactError.message.toLowerCase() : "";
        if (!message.includes("already") && !message.includes("duplicate")) {
          console.error("Failed to add contact to segment:", contactError);
        }
      }
    }

    if (supportEmail) {
      await resend.emails.send({
        from: `Kalma Waitlist <${fromEmail}>`,
        to: supportEmail,
        subject: "New Kalma waitlist signup",
        html: `
          <p>A new person joined the Kalma waitlist:</p>
          <p><strong>${email}</strong></p>
          <p><em>Submitted at ${new Date().toISOString()}</em></p>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Waitlist signup failed:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}

import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(120),
  email: z.email("Please enter a valid email address.").max(180),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  website: z.string().trim().max(200).optional().or(z.literal("")),
  channels: z.string().trim().max(200).optional().or(z.literal("")),
  stage: z.string().trim().max(120).optional().or(z.literal("")),
  budget: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().max(4000).optional().or(z.literal("")),
  intent: z.string().trim().max(60).optional(),
  companyName: z.string().max(0).optional().or(z.literal("")),
});

export async function POST(request) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const parsed = schema.safeParse(payload);
  if (!parsed.success) {
    const first = parsed.error.issues?.[0];
    return NextResponse.json(
      { error: first?.message || "Please check the form and try again." },
      { status: 422 }
    );
  }

  // Honeypot filled → silently accept without recording.
  if (parsed.data.companyName) {
    return NextResponse.json({ message: "Thank you." });
  }

  // Delivery integration (CRM / email) is configured per environment.
  // Until one is connected, the submission is recorded in the server log so
  // nothing is silently discarded.
  console.info("[bifidmedia] lead", {
    receivedAt: new Date().toISOString(),
    ...parsed.data,
    companyName: undefined,
  });

  return NextResponse.json({
    message:
      "We have your details. A BifidMedia specialist will be in touch within one business day.",
  });
}

import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(120),
  email: z.email("Please enter a valid email address.").max(180),
  company: z.string().max(0).optional().or(z.literal("")),
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

  if (parsed.data.company) {
    return NextResponse.json({ message: "Thank you." });
  }

  console.info("[bifidmedia] newsletter", {
    receivedAt: new Date().toISOString(),
    name: parsed.data.name,
    email: parsed.data.email,
  });

  return NextResponse.json({
    message: "You are subscribed. Look out for the next issue.",
  });
}

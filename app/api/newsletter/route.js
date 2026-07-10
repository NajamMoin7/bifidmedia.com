export async function POST(request) {
  const body = await request.json().catch(() => null);
  if (!body?.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    return Response.json({ error: "Invalid email" }, { status: 400 });
  }
  if (process.env.NEWSLETTER_WEBHOOK) {
    await fetch(process.env.NEWSLETTER_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: body.email, receivedAt: new Date().toISOString() }),
    }).catch(() => null);
  }
  return Response.json({ ok: true });
}

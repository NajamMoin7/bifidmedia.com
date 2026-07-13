import { siteConfig } from "@/data/siteConfig";

const hits = new Map();

export async function POST(request) {
  const ip = request.headers.get("x-forwarded-for") || "local";
  const now = Date.now();
  const recent = hits.get(ip) || [];
  const fresh = recent.filter((stamp) => now - stamp < 60000);
  if (fresh.length > 8) return Response.json({ error: "Rate limited" }, { status: 429 });
  hits.set(ip, [...fresh, now]);

  const body = await request.json().catch(() => null);
  if (!body || body.websiteField || !body.email || !body.name || !body.consent) {
    return Response.json({ error: "Invalid submission" }, { status: 400 });
  }

  const payload = {
    ...body,
    receivedAt: new Date().toISOString(),
    crmWebhookConfigured: Boolean(process.env.CRM_WEBHOOK),
    emailProviderConfigured: Boolean(process.env.EMAIL_PROVIDER),
    notificationRecipient: siteConfig.contactRecipientEmail,
  };

  if (process.env.CRM_WEBHOOK) {
    await fetch(process.env.CRM_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).catch(() => null);
  }

  return Response.json({ ok: true });
}

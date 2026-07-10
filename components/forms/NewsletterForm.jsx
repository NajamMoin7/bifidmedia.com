"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event) {
    event.preventDefault();
    setLoading(true);
    setStatus("");
    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    setLoading(false);
    if (res.ok) {
      setStatus("You are subscribed to BifidMedia insights.");
      setEmail("");
      window.dispatchEvent(new CustomEvent("newsletter_signup"));
      return;
    }
    setStatus("Please enter a valid email address.");
  }

  return (
    <form className="newsletter-form" onSubmit={submit}>
      <label>
        <span>Email address</span>
        <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" required placeholder="you@company.com" />
      </label>
      <Button className="newsletter-submit" type="submit" disabled={loading}>{loading ? "Joining..." : "Subscribe"}</Button>
      <p>By subscribing, you agree to receive marketplace insights. See our <a href="/privacy-policy">Privacy Policy</a>.</p>
      {status && <p role="status">{status}</p>}
    </form>
  );
}

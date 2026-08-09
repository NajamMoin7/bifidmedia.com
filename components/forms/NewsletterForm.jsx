"use client";

import { useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";

export function NewsletterForm({ tone = "light", className = "" }) {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const dark = tone === "dark";

  async function onSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    setStatus("loading");
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Something went wrong.");
      setStatus("success");
      setMessage(result.message);
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error.message);
    }
  }

  if (status === "success") {
    return (
      <p
        role="status"
        className={`flex items-start gap-2 text-[0.88rem] ${
          dark ? "text-white/80" : "text-muted"
        } ${className}`}
      >
        <Check size={17} aria-hidden="true" className="mt-0.5 shrink-0 text-accent" />
        {message}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className={`grid gap-2.5 ${className}`} noValidate>
      <label className="sr-only" htmlFor={`nl-name-${tone}`}>
        Your name
      </label>
      <input
        id={`nl-name-${tone}`}
        name="name"
        type="text"
        autoComplete="name"
        placeholder="Your name"
        required
        className={`w-full rounded-[var(--radius-pill)] px-4 py-3 text-[0.9rem] outline-none transition-colors duration-200 ${
          dark
            ? "border border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:border-white/50"
            : "border border-line bg-white text-ink placeholder:text-muted focus:border-brand"
        }`}
      />

      <label className="sr-only" htmlFor={`nl-email-${tone}`}>
        Email address
      </label>
      <input
        id={`nl-email-${tone}`}
        name="email"
        type="email"
        autoComplete="email"
        placeholder="Email address"
        required
        className={`w-full rounded-[var(--radius-pill)] px-4 py-3 text-[0.9rem] outline-none transition-colors duration-200 ${
          dark
            ? "border border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:border-white/50"
            : "border border-line bg-white text-ink placeholder:text-muted focus:border-brand"
        }`}
      />

      {/* Honeypot — hidden from users, catches naive bots. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className={`inline-flex items-center justify-center gap-2 rounded-[var(--radius-pill)] px-5 py-3 text-[0.9rem] font-semibold transition-all duration-300 disabled:opacity-70 ${
          dark
            ? "bg-white text-deep hover:-translate-y-0.5"
            : "gradient-brand text-white hover:-translate-y-0.5"
        }`}
      >
        {status === "loading" ? (
          <Loader2 size={16} aria-hidden="true" className="animate-spin" />
        ) : null}
        Subscribe
        {status !== "loading" ? <ArrowRight size={15} aria-hidden="true" /> : null}
      </button>

      {status === "error" ? (
        <p role="alert" className="text-[0.82rem] text-[#d64545]">
          {message}
        </p>
      ) : null}

      <p className={`text-[0.75rem] ${dark ? "text-white/50" : "text-muted"}`}>
        We never sell or share your address. Unsubscribe in one click.
      </p>
    </form>
  );
}

export default NewsletterForm;

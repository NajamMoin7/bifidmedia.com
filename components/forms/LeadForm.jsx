"use client";

import { useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { marketplaces } from "@/data/marketplaces";

const stages = [
  "Not started yet — exploring options",
  "Launching my first store",
  "Selling, but growth has stalled",
  "Established and scaling",
];

const budgets = [
  "Under $2,500 / month",
  "$2,500 – $5,000 / month",
  "$5,000 – $10,000 / month",
  "Over $10,000 / month",
  "Not sure yet",
];

const fieldClass =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-[0.92rem] text-ink outline-none transition-colors duration-200 placeholder:text-muted focus:border-brand";

export function LeadForm({
  intent = "general",
  heading = "Tell us about your store",
  text = "Share a few details and a BifidMedia specialist will come back within one business day with a straight answer about what we would do first.",
  submitLabel = "Send my details",
  className = "",
}) {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    data.channels = new FormData(form).getAll("channels").join(", ");

    setStatus("loading");
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, intent }),
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
      <div className={`card-surface p-8 text-center ${className}`} role="status">
        <span className="gradient-brand mx-auto flex h-12 w-12 items-center justify-center rounded-full text-white">
          <Check size={22} aria-hidden="true" />
        </span>
        <h3 className="mt-4 text-xl">Thank you — that is with us</h3>
        <p className="mx-auto mt-2 max-w-md text-[0.95rem] leading-relaxed text-muted">
          {message}
        </p>
      </div>
    );
  }

  return (
    <div className={`card-surface p-6 sm:p-8 ${className}`}>
      <h3 className="text-[1.35rem]">{heading}</h3>
      <p className="mt-2 text-[0.93rem] leading-relaxed text-muted">{text}</p>

      <form onSubmit={onSubmit} className="mt-6 grid gap-4" noValidate>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="lead-name" className="mb-1.5 block text-[0.82rem] font-semibold text-ink">
              Full name <span className="text-brand">*</span>
            </label>
            <input id="lead-name" name="name" type="text" autoComplete="name" required className={fieldClass} />
          </div>
          <div>
            <label htmlFor="lead-email" className="mb-1.5 block text-[0.82rem] font-semibold text-ink">
              Email <span className="text-brand">*</span>
            </label>
            <input id="lead-email" name="email" type="email" autoComplete="email" required className={fieldClass} />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="lead-phone" className="mb-1.5 block text-[0.82rem] font-semibold text-ink">
              Phone
            </label>
            <input id="lead-phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} />
          </div>
          <div>
            <label htmlFor="lead-website" className="mb-1.5 block text-[0.82rem] font-semibold text-ink">
              Store or website
            </label>
            <input id="lead-website" name="website" type="text" placeholder="https://" className={fieldClass} />
          </div>
        </div>

        <fieldset>
          <legend className="mb-2 text-[0.82rem] font-semibold text-ink">
            Which channels are you interested in?
          </legend>
          <div className="flex flex-wrap gap-2">
            {marketplaces.map((marketplace) => (
              <label
                key={marketplace.slug}
                className="cursor-pointer rounded-[var(--radius-pill)] border border-line px-3.5 py-2 text-[0.82rem] text-muted transition-colors duration-200 has-checked:border-brand has-checked:bg-sky has-checked:text-brand hover:border-brand"
              >
                <input
                  type="checkbox"
                  name="channels"
                  value={marketplace.shortName}
                  className="sr-only"
                />
                {marketplace.shortName}
              </label>
            ))}
          </div>
        </fieldset>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="lead-stage" className="mb-1.5 block text-[0.82rem] font-semibold text-ink">
              Where are you today?
            </label>
            <select id="lead-stage" name="stage" defaultValue="" className={fieldClass}>
              <option value="" disabled>
                Select an option
              </option>
              {stages.map((stage) => (
                <option key={stage} value={stage}>
                  {stage}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="lead-budget" className="mb-1.5 block text-[0.82rem] font-semibold text-ink">
              Monthly budget range
            </label>
            <select id="lead-budget" name="budget" defaultValue="" className={fieldClass}>
              <option value="" disabled>
                Select an option
              </option>
              {budgets.map((budget) => (
                <option key={budget} value={budget}>
                  {budget}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="lead-message" className="mb-1.5 block text-[0.82rem] font-semibold text-ink">
            What would you like help with?
          </label>
          <textarea id="lead-message" name="message" rows={4} className={fieldClass} />
        </div>

        {/* Honeypot */}
        <input
          type="text"
          name="companyName"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />

        <button
          type="submit"
          disabled={status === "loading"}
          className="gradient-brand inline-flex items-center justify-center gap-2 rounded-[var(--radius-pill)] px-6 py-3.5 text-[0.95rem] font-semibold text-white shadow-[0_10px_28px_rgba(22,93,255,0.28)] transition-transform duration-300 hover:-translate-y-0.5 disabled:opacity-70"
        >
          {status === "loading" ? (
            <Loader2 size={17} aria-hidden="true" className="animate-spin" />
          ) : null}
          {submitLabel}
        </button>

        {status === "error" ? (
          <p role="alert" className="text-[0.85rem] text-[#d64545]">
            {message}
          </p>
        ) : null}

        <p className="text-[0.76rem] leading-relaxed text-muted">
          By submitting this form you agree to be contacted about your enquiry.
          We do not sell your details. See our{" "}
          <a href="/privacy-policy" className="text-brand underline underline-offset-2">
            Privacy Policy
          </a>
          .
        </p>
      </form>
    </div>
  );
}

export default LeadForm;

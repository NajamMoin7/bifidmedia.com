"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";

const schema = z.object({
  name: z.string().min(2, "Enter your full name"),
  email: z.string().email("Enter a valid business email"),
  phone: z.string().min(6, "Enter a valid phone number"),
  country: z.string().optional(),
  company: z.string().optional(),
  website: z.string().optional(),
  service: z.string().min(2, "Select or enter a service"),
  stage: z.string().optional(),
  budget: z.string().optional(),
  contactMethod: z.string().optional(),
  message: z.string().optional(),
  consent: z.boolean().refine((value) => value === true, "Consent is required"),
  websiteField: z.string().max(0).optional(),
});

export function LeadForm({ type = "consultation", service = "", compact = false, popup = false, submitLabel = "Request Consultation" }) {
  const [status, setStatus] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { service, consent: false },
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"];
    keys.forEach((key) => {
      if (params.get(key)) localStorage.setItem(key, params.get(key));
    });
  }, []);

  async function onSubmit(values) {
    setStatus("");
    const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"];
    const params = new URLSearchParams(window.location.search);
    const utm = Object.fromEntries(keys.map((key) => [key, params.get(key) || localStorage.getItem(key) || ""]));
    const res = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...values, type, utm, source: window.location.pathname }),
    });
    if (!res.ok) {
      setStatus("We could not submit the form. Please try again or contact us directly.");
      return;
    }
    setStatus("Thanks. Your request was received and the BifidMedia team can follow up with next steps.");
    reset({ service, consent: false });
    window.dispatchEvent(new CustomEvent(`${type}_form_submit`));
  }

  const fields = popup
    ? ["name", "email", "phone", "service"]
    : compact
      ? ["name", "email", "phone", "service"]
      : ["name", "email", "phone", "country", "company", "website", "service", "stage", "budget", "contactMethod"];

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <input className="hidden-field" tabIndex="-1" autoComplete="off" {...register("websiteField")} aria-hidden="true" />
      <div className="form-grid">
        {fields.map((field) => (
          <label key={field}>
            <span>{labelFor(field)}</span>
            <input {...register(field)} placeholder={placeholderFor(field)} />
            {errors[field] && <small>{errors[field].message}</small>}
          </label>
        ))}
      </div>
      {(!compact || popup) && (
        <label>
          <span>Message</span>
          <textarea {...register("message")} placeholder="Tell us about your current store, goals, and timeline." />
        </label>
      )}
      <label className="checkbox">
        <input type="checkbox" {...register("consent")} />
        <span>I agree that BifidMedia may contact me about this request. I understand results are not guaranteed.</span>
      </label>
      {errors.consent && <small className="form-error">{errors.consent.message}</small>}
      <Button type="submit" disabled={isSubmitting}>{isSubmitting ? "Sending..." : submitLabel}</Button>
      {status && <p className="form-status" role="status">{status}</p>}
    </form>
  );
}

function labelFor(field) {
  return {
    name: "Full name",
    email: "Business email",
    phone: "Phone number",
    country: "Country",
    company: "Company name",
    website: "Website URL",
    service: "Service required",
    stage: "Current business stage",
    budget: "Estimated budget",
    contactMethod: "Preferred contact method",
  }[field];
}

function placeholderFor(field) {
  return {
    name: "Your name",
    email: "you@company.com",
    phone: "+1...",
    country: "United States",
    company: "Company or brand",
    website: "https://",
    service: "Amazon, Shopify, PPC...",
    stage: "Idea, launched, scaling...",
    budget: "$2k-$5k, $5k-$10k...",
    contactMethod: "Phone, email, WhatsApp",
  }[field];
}

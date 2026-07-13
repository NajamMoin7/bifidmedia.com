"use client";

import { CalendarDays, Phone } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function FloatingContact() {
  return (
    <div className="floating-contact">
      <a href={siteConfig.phoneHref} aria-label={siteConfig.callAriaLabel} onClick={() => window.dispatchEvent(new CustomEvent("call_click"))}>
        <Phone size={20} />
      </a>
      <a href="/book-consultation" aria-label="Book a consultation" onClick={() => window.dispatchEvent(new CustomEvent("book_consultation_click"))}>
        <CalendarDays size={20} />
      </a>
    </div>
  );
}

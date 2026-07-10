"use client";

import { MessageCircle, CalendarDays } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function FloatingContact() {
  return (
    <div className="floating-contact">
      <a href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`} aria-label="Contact BifidMedia on WhatsApp" onClick={() => window.dispatchEvent(new CustomEvent("whatsapp_click"))}>
        <MessageCircle size={20} />
      </a>
      <a href="/book-consultation" aria-label="Book a consultation" onClick={() => window.dispatchEvent(new CustomEvent("book_consultation_click"))}>
        <CalendarDays size={20} />
      </a>
    </div>
  );
}

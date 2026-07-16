"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import { LeadForm } from "@/components/forms/LeadForm";

export function ExitIntentPopup() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef(null);
  const previousFocus = useRef(null);

  useEffect(() => {
    if (sessionStorage.getItem("bmedia_popup_dismissed")) return;
    const show = () => {
      if (!document.querySelector(".cookie-banner, .cookie-modal-backdrop, .modal-backdrop")) {
        previousFocus.current = document.activeElement;
        setOpen(true);
      }
    };
    const timer = setTimeout(show, 20000);
    const mouse = (event) => {
      if (event.clientY < 8 && window.innerWidth > 900) show();
    };
    window.addEventListener("mouseout", mouse);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("mouseout", mouse);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (event) => {
      if (event.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function dismiss() {
    sessionStorage.setItem("bmedia_popup_dismissed", "1");
    setOpen(false);
    previousFocus.current?.focus?.();
  }

  if (!open) return null;
  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="exit-title" onKeyDown={(event) => {
      if (event.key !== "Tab") return;
      const focusable = event.currentTarget.querySelectorAll("button, a, input, textarea, select, [tabindex]:not([tabindex='-1'])");
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }}>
      <div className="modal consultation-modal">
        <button ref={closeRef} className="modal-close" onClick={dismiss} aria-label="Close popup"><X /></button>
        <div className="popup-visual">
          <Image className="popup-real-image" src="/images/contact/business-consultation-workspace.webp" alt="E-commerce consultation workspace with marketplace planning and reporting" width={760} height={680} />
          <h2 id="exit-title">Ready to Grow Your Online Business?</h2>
          <p>Tell us about your goals and our team will help you identify the right strategy for your marketplace, store, or digital business.</p>
          <div className="popup-benefits">
            <span>Personalized Growth Strategy</span>
            <span>Marketplace Expert Guidance</span>
            <span>No Obligation Consultation</span>
          </div>
        </div>
        <div className="popup-form">
          <h3>Request your free consultation</h3>
          <LeadForm type="popup" popup service="Free consultation" submitLabel="Request My Free Consultation" />
          <p>Your information is secure and will only be used to respond to your enquiry.</p>
        </div>
      </div>
    </div>
  );
}

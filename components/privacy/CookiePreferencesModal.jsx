"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { CookieCategoryToggle } from "@/components/privacy/CookieCategoryToggle";

const categories = [
  ["essential", "Essential Cookies", "Required for core website functions, security, consent records, and form behavior."],
  ["analytics", "Analytics Cookies", "Help BifidMedia understand traffic, content performance, and visitor journeys."],
  ["marketing", "Marketing Cookies", "Support ad measurement, campaign attribution, and relevant marketplace growth messaging."],
  ["preferences", "Preference Cookies", "Remember choices that improve the browsing experience across visits."],
];

export function CookiePreferencesModal({ prefs, setPrefs, onClose, onSave, onAcceptAll, onRejectOptional }) {
  const modalRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !modalRef.current) return;

      const focusable = [...modalRef.current.querySelectorAll("button, input, [href], select, textarea, [tabindex]:not([tabindex='-1'])")].filter((node) => !node.disabled);
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const updatePref = (key, value) => setPrefs((current) => ({ ...current, [key]: value }));

  return (
    <div className="cookie-modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section ref={modalRef} className="cookie-modal" role="dialog" aria-modal="true" aria-labelledby="cookie-modal-title" aria-describedby="cookie-modal-description">
        <button ref={closeRef} type="button" className="cookie-modal-close" aria-label="Close cookie preferences" onClick={onClose}>
          <X size={18} />
        </button>
        <div className="cookie-modal-heading">
          <p className="eyebrow">Cookie settings</p>
          <h2 id="cookie-modal-title">Customize Privacy Choices</h2>
          <p id="cookie-modal-description">Choose the optional cookies BifidMedia may use. Essential cookies stay active so the site can work properly.</p>
        </div>
        <div className="cookie-category-list">
          {categories.map(([key, title, description]) => (
            <CookieCategoryToggle
              key={key}
              id={`cookie-${key}`}
              title={title}
              description={description}
              checked={prefs[key]}
              disabled={key === "essential"}
              onChange={(value) => updatePref(key, value)}
            />
          ))}
        </div>
        <div className="cookie-modal-actions">
          <button type="button" className="cookie-action cookie-action-primary" onClick={() => onSave(prefs)}>Save Preferences</button>
          <button type="button" className="cookie-action cookie-action-soft" onClick={onAcceptAll}>Accept All</button>
          <button type="button" className="cookie-action cookie-action-outline" aria-label="Reject non-essential cookies" onClick={onRejectOptional}>Reject Optional</button>
        </div>
      </section>
    </div>
  );
}

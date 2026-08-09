"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";
import {
  consentCategories,
  defaultConsent,
  readConsent,
  writeConsent,
  OPEN_PREFERENCES_EVENT,
} from "./consent";

/**
 * Compact consent bar — a bottom horizontal bar on desktop and a compact card
 * on mobile. The oversized privacy modal used by the reference site is
 * deliberately not reproduced; detailed choices live in a small preferences
 * dialog opened from the bar or the footer link.
 */
export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [choices, setChoices] = useState(defaultConsent);

  // localStorage is an external store: read it after mount, inside a callback,
  // so the bar never flashes during hydration.
  useEffect(() => {
    const id = window.setTimeout(() => {
      const stored = readConsent();
      if (stored) setChoices(stored);
      else setVisible(true);
    }, 900);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    function onOpen() {
      setChoices(readConsent() || defaultConsent);
      setPreferencesOpen(true);
    }
    window.addEventListener(OPEN_PREFERENCES_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_PREFERENCES_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (!preferencesOpen) return;
    function onKey(event) {
      if (event.key === "Escape") setPreferencesOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [preferencesOpen]);

  const persist = useCallback((value) => {
    writeConsent(value);
    setChoices(value);
    setVisible(false);
    setPreferencesOpen(false);
  }, []);

  const acceptAll = () =>
    persist({ necessary: true, analytics: true, marketing: true });
  const rejectAll = () =>
    persist({ necessary: true, analytics: false, marketing: false });

  return (
    <>
      {visible ? (
        <div
          role="dialog"
          aria-label="Cookie consent"
          className="fixed inset-x-3 bottom-3 z-[110] sm:inset-x-4 sm:bottom-4"
        >
          <div className="mx-auto flex max-w-[1200px] flex-col gap-3 rounded-2xl border border-line bg-white/98 p-4 shadow-lift backdrop-blur sm:flex-row sm:items-center sm:gap-5 sm:px-5 sm:py-3.5">
            <span className="gradient-brand hidden h-9 w-9 shrink-0 items-center justify-center rounded-full text-white sm:flex">
              <Cookie size={17} aria-hidden="true" />
            </span>

            <p className="flex-1 text-[0.85rem] leading-relaxed text-muted">
              We use cookies to run the site and to understand which pages are
              useful. You can accept all, reject non-essential, or choose.{" "}
              <Link
                href="/cookie-policy"
                className="text-brand underline underline-offset-2"
              >
                Cookie policy
              </Link>
              .
            </p>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setPreferencesOpen(true)}
                className="rounded-[var(--radius-pill)] px-3.5 py-2 text-[0.82rem] font-semibold text-muted transition-colors duration-200 hover:text-brand"
              >
                Manage
              </button>
              <button
                type="button"
                onClick={rejectAll}
                className="rounded-[var(--radius-pill)] border border-line px-4 py-2 text-[0.82rem] font-semibold text-ink transition-colors duration-200 hover:border-brand hover:text-brand"
              >
                Reject non-essential
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="gradient-brand rounded-[var(--radius-pill)] px-4 py-2 text-[0.82rem] font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
              >
                Accept all
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {preferencesOpen ? (
        <div className="fixed inset-0 z-[115] flex items-end justify-center p-3 sm:items-center sm:p-6">
          <button
            type="button"
            aria-label="Close cookie preferences"
            onClick={() => setPreferencesOpen(false)}
            className="absolute inset-0 h-full w-full cursor-default bg-ink/45 backdrop-blur-sm"
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-preferences-title"
            className="relative w-full max-w-lg rounded-2xl border border-line bg-white p-6 shadow-menu"
          >
            <div className="flex items-start justify-between gap-4">
              <h2 id="cookie-preferences-title" className="text-xl">
                Cookie preferences
              </h2>
              <button
                type="button"
                onClick={() => setPreferencesOpen(false)}
                aria-label="Close"
                className="rounded-full border border-line p-1.5 text-muted transition-colors duration-200 hover:border-brand hover:text-brand"
              >
                <X size={16} aria-hidden="true" />
              </button>
            </div>

            <p className="mt-2 text-[0.87rem] leading-relaxed text-muted">
              BifidMedia does not sell personal information. Choose which
              optional cookies you are happy for us to use.
            </p>

            <ul className="mt-5 space-y-3">
              {consentCategories.map((category) => {
                const checked = category.locked ? true : choices[category.id];
                return (
                  <li
                    key={category.id}
                    className="rounded-xl border border-line p-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[0.92rem] font-semibold text-ink">
                          {category.label}
                        </p>
                        <p className="mt-1 text-[0.82rem] leading-relaxed text-muted">
                          {category.description}
                        </p>
                      </div>
                      <label className="relative mt-0.5 inline-flex shrink-0 cursor-pointer items-center">
                        <span className="sr-only">
                          {category.label} cookies
                        </span>
                        <input
                          type="checkbox"
                          className="peer sr-only"
                          checked={checked}
                          disabled={category.locked}
                          onChange={(event) =>
                            setChoices((prev) => ({
                              ...prev,
                              [category.id]: event.target.checked,
                            }))
                          }
                        />
                        <span className="h-6 w-11 rounded-full bg-line transition-colors duration-200 peer-checked:bg-brand peer-disabled:opacity-50" />
                        <span className="pointer-events-none absolute left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform duration-200 peer-checked:translate-x-5" />
                      </label>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => persist(choices)}
                className="gradient-brand rounded-[var(--radius-pill)] px-5 py-2.5 text-[0.85rem] font-semibold text-white"
              >
                Save preferences
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="rounded-[var(--radius-pill)] border border-line px-5 py-2.5 text-[0.85rem] font-semibold text-ink transition-colors duration-200 hover:border-brand hover:text-brand"
              >
                Accept all
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default CookieConsent;

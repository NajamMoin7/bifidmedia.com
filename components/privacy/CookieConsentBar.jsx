"use client";

import { useCallback, useEffect, useState } from "react";
import { Cookie, Settings2, X } from "lucide-react";
import { CookiePreferencesModal } from "@/components/privacy/CookiePreferencesModal";

const storageKey = "bifidmedia_cookie_consent";
const oldStorageKey = "bmedia_cookie_preferences";
const consentVersion = 1;
const defaults = { essential: true, analytics: false, marketing: false, preferences: false };
const allAccepted = { essential: true, analytics: true, marketing: true, preferences: true };

function readStoredConsent() {
  if (typeof window === "undefined") return null;

  const stored = localStorage.getItem(storageKey) || localStorage.getItem(oldStorageKey);
  if (!stored) return null;

  try {
    const parsed = JSON.parse(stored);
    return { ...defaults, ...parsed };
  } catch {
    return null;
  }
}

function consentPayload(next) {
  return {
    version: consentVersion,
    essential: true,
    analytics: Boolean(next.analytics),
    marketing: Boolean(next.marketing),
    preferences: Boolean(next.preferences),
    timestamp: new Date().toISOString(),
  };
}

export function CookieConsentBar() {
  const [mounted, setMounted] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(false);
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [prefs, setPrefs] = useState(defaults);

  const openPreferences = useCallback(() => {
    const stored = readStoredConsent();
    setPrefs(stored ? { ...defaults, ...stored, essential: true } : defaults);
    setBannerVisible(true);
    setPreferencesOpen(true);
  }, []);

  useEffect(() => {
    queueMicrotask(() => {
      const stored = readStoredConsent();
      setMounted(true);
      setBannerVisible(!stored);
      if (stored) setPrefs({ ...defaults, ...stored, essential: true });
    });

    const onClick = (event) => {
      if (event.target?.closest?.("[data-open-privacy]")) openPreferences();
    };

    const onOpen = () => openPreferences();

    document.addEventListener("click", onClick);
    window.addEventListener("open_cookie_preferences", onOpen);
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("open_cookie_preferences", onOpen);
    };
  }, [openPreferences]);

  useEffect(() => {
    document.body.classList.toggle("cookie-banner-visible", bannerVisible);
    return () => document.body.classList.remove("cookie-banner-visible");
  }, [bannerVisible]);

  const save = useCallback((next) => {
    const payload = consentPayload(next);
    localStorage.setItem(storageKey, JSON.stringify(payload));
    localStorage.removeItem(oldStorageKey);
    setPrefs(payload);
    setBannerVisible(false);
    setPreferencesOpen(false);
    window.dispatchEvent(new CustomEvent("cookie_preferences_saved", { detail: payload }));
  }, []);

  if (!mounted) return null;

  return (
    <>
      {bannerVisible && (
        <section className="cookie-banner" role="region" aria-labelledby="cookie-banner-title" aria-describedby="cookie-banner-description">
          <div className="cookie-banner-icon" aria-hidden="true">
            <Cookie size={22} />
          </div>
          <div className="cookie-banner-copy">
            <h2 id="cookie-banner-title" className="cookie-banner-title">Your Privacy Choices</h2>
            <p id="cookie-banner-description" className="cookie-banner-description">Choose which optional cookies BifidMedia may use for analytics, marketing, and preferences.</p>
          </div>
          <div className="cookie-banner-actions">
            <button type="button" className="cookie-action cookie-action-primary" onClick={() => save(allAccepted)}>Accept All</button>
            <button type="button" className="cookie-action cookie-action-outline" aria-label="Reject non-essential cookies" onClick={() => save(defaults)}>Reject Optional</button>
            <button type="button" className="cookie-action cookie-action-soft" onClick={() => setPreferencesOpen(true)}>
              <Settings2 size={16} />
              Customize
            </button>
          </div>
          <button type="button" className="cookie-banner-close" aria-label="Close cookie banner and keep essential cookies only" onClick={() => save(defaults)}>
            <X size={16} />
          </button>
        </section>
      )}
      {preferencesOpen && (
        <CookiePreferencesModal
          prefs={prefs}
          setPrefs={setPrefs}
          onClose={() => setPreferencesOpen(false)}
          onSave={save}
          onAcceptAll={() => save(allAccepted)}
          onRejectOptional={() => save(defaults)}
        />
      )}
    </>
  );
}

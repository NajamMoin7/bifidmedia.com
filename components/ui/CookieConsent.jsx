"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

const defaults = { essential: true, analytics: false, marketing: false, preferences: false };

export function CookieConsent() {
  const [visible, setVisible] = useState(() => typeof window !== "undefined" && !localStorage.getItem("bmedia_cookie_preferences"));
  const [customize, setCustomize] = useState(false);
  const [prefs, setPrefs] = useState(defaults);

  useEffect(() => {
    const open = () => {
      setVisible(true);
      setCustomize(true);
    };
    const onClick = (event) => {
      if (event.target?.matches?.("[data-open-privacy]")) open();
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  function save(next) {
    localStorage.setItem("bmedia_cookie_preferences", JSON.stringify(next));
    setVisible(false);
    window.dispatchEvent(new CustomEvent("cookie_preferences_saved", { detail: next }));
  }

  if (!visible) return null;
  return (
    <div className="cookie-panel" role="dialog" aria-modal="true" aria-label="Cookie preferences">
      <h2>Your Privacy Choices</h2>
      <p>Choose which non-essential cookies BifidMedia may use for analytics, marketing, and preferences.</p>
      {customize && (
        <div className="cookie-options">
          {Object.keys(defaults).map((key) => (
            <label key={key}>
              <input type="checkbox" checked={prefs[key]} disabled={key === "essential"} onChange={(event) => setPrefs({ ...prefs, [key]: event.target.checked })} />
              <span>{key}</span>
            </label>
          ))}
        </div>
      )}
      <div className="cookie-actions">
        <Button type="button" onClick={() => save({ essential: true, analytics: true, marketing: true, preferences: true })}>Accept all</Button>
        <Button type="button" variant="secondary" onClick={() => save(defaults)}>Reject non-essential</Button>
        {customize ? <Button type="button" variant="secondary" onClick={() => save(prefs)}>Save preferences</Button> : <Button type="button" variant="secondary" onClick={() => setCustomize(true)}>Customize</Button>}
      </div>
    </div>
  );
}

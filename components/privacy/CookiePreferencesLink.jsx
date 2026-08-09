"use client";

import { openCookiePreferences } from "./consent";

export function CookiePreferencesLink({ className = "", label = "Cookie preferences" }) {
  return (
    <button
      type="button"
      onClick={openCookiePreferences}
      className={`transition-colors duration-200 hover:text-white ${className}`}
    >
      {label}
    </button>
  );
}

export default CookiePreferencesLink;

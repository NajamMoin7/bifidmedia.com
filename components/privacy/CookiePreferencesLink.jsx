"use client";

import { openCookiePreferences } from "./consent";

export function CookiePreferencesLink({ className = "" }) {
  return (
    <button
      type="button"
      onClick={openCookiePreferences}
      className={`transition-colors duration-200 hover:text-white ${className}`}
    >
      Cookie preferences
    </button>
  );
}

export default CookiePreferencesLink;

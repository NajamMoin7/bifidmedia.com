export const CONSENT_KEY = "bifidmedia-consent";
export const OPEN_PREFERENCES_EVENT = "bifidmedia:open-cookie-preferences";

export const consentCategories = [
  {
    id: "necessary",
    label: "Strictly necessary",
    description:
      "Required for the site to work — page routing, security and remembering this choice. These cannot be switched off.",
    locked: true,
  },
  {
    id: "analytics",
    label: "Analytics",
    description:
      "Aggregated statistics about which pages are viewed, so we can improve the ones that are not working.",
  },
  {
    id: "marketing",
    label: "Marketing",
    description:
      "Used to measure campaign performance and to show BifidMedia content on other platforms.",
  },
];

export const defaultConsent = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export function readConsent() {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return { ...defaultConsent, ...parsed, necessary: true };
  } catch {
    return null;
  }
}

export function writeConsent(value) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(
      CONSENT_KEY,
      JSON.stringify({ ...value, necessary: true, updatedAt: Date.now() })
    );
  } catch {
    /* storage unavailable — consent simply is not persisted */
  }
}

export function openCookiePreferences() {
  window.dispatchEvent(new CustomEvent(OPEN_PREFERENCES_EVENT));
}

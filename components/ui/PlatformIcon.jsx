/**
 * Original marketplace glyphs.
 *
 * These are BifidMedia-drawn icons that use each platform's recognisable brand
 * colour without reproducing its trademarked logo artwork. They are the only
 * place on the site where non-blue brand colour is used at scale.
 */

const glyphs = {
  amazon: (
    <>
      <rect width="40" height="40" rx="11" fill="#232f3e" />
      <path
        d="M11 25.4c4.6 3 11.6 3.4 17.4.3"
        stroke="#ff9900"
        strokeWidth="2.6"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M27.2 23.2l3.4 1.1-1.6 3.2" stroke="#ff9900" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <rect x="12" y="11" width="5" height="8.5" rx="1.6" fill="#ff9900" />
      <rect x="19.5" y="13.5" width="5" height="6" rx="1.6" fill="#fff" opacity="0.85" />
    </>
  ),
  walmart: (
    <>
      <rect width="40" height="40" rx="11" fill="#0071dc" />
      <g stroke="#ffc220" strokeWidth="3" strokeLinecap="round">
        <path d="M20 8.5v6.6" />
        <path d="M20 24.9v6.6" />
        <path d="M11.9 13.2l3.3 5.7" />
        <path d="M24.8 21.1l3.3 5.7" />
        <path d="M28.1 13.2l-3.3 5.7" />
        <path d="M15.2 21.1l-3.3 5.7" />
      </g>
      <circle cx="20" cy="20" r="2.6" fill="#fff" />
    </>
  ),
  shopify: (
    <>
      <rect width="40" height="40" rx="11" fill="#5e8e3e" />
      <path
        d="M13 15.5h14l-1.3 13.2a1.6 1.6 0 01-1.6 1.4H15.9a1.6 1.6 0 01-1.6-1.4L13 15.5z"
        fill="#fff"
        opacity="0.92"
      />
      <path
        d="M16.6 15.5v-2.1a3.4 3.4 0 016.8 0v2.1"
        stroke="#fff"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
    </>
  ),
  tiktok: (
    <>
      <rect width="40" height="40" rx="11" fill="#111827" />
      <path
        d="M23.6 9.5c.6 3 2.5 4.9 5.4 5.3v4.1c-1.9.1-3.7-.4-5.3-1.4v6.9c0 4.3-3.2 7.1-7 7.1-3.6 0-6.6-2.7-6.6-6.4 0-3.9 3.2-6.7 7.4-6.2v4.2c-1.9-.5-3.5.5-3.5 2.2 0 1.4 1.1 2.4 2.5 2.4 1.5 0 2.7-1.1 2.7-2.9V9.5h4.4z"
        fill="#25f4ee"
      />
      <path
        d="M25.1 9.5c.6 3 2.5 4.9 5.4 5.3v4.1c-1.9.1-3.7-.4-5.3-1.4v6.9c0 4.3-3.2 7.1-7 7.1-1.5 0-2.9-.5-4-1.3 1.2 1.5 3 2.4 5.1 2.4 3.8 0 7-2.8 7-7.1v-6.9c1.6 1 3.4 1.5 5.3 1.4v-4.1c-2.9-.4-4.8-2.3-5.4-5.3h-1.1z"
        fill="#fe2c55"
      />
    </>
  ),
  etsy: (
    <>
      <rect width="40" height="40" rx="11" fill="#f1641e" />
      <path
        d="M16 11.5h10.6v3.2h-1.7c-.4-1.3-.9-1.8-2.1-1.8h-3.6v6h2.6c1 0 1.4-.4 1.7-1.7h1.4v5.4h-1.4c-.3-1.3-.7-1.7-1.7-1.7h-2.6v5.3c0 1.1.4 1.5 1.6 1.5h3c1.8 0 2.6-.7 3.4-3h1.4l-.7 4.8H16v-1.5h1.1c1.1 0 1.5-.4 1.5-1.4V14.4c0-1-.4-1.4-1.5-1.4H16v-1.5z"
        fill="#fff"
      />
    </>
  ),
  ebay: (
    <>
      <rect width="40" height="40" rx="11" fill="#fff" stroke="#dce5f5" />
      <circle cx="11.5" cy="20" r="4.6" fill="#e53238" />
      <circle cx="17.5" cy="20" r="4.6" fill="#0064d2" />
      <circle cx="23.5" cy="20" r="4.6" fill="#f5af02" />
      <circle cx="29" cy="20" r="4.6" fill="#86b817" />
    </>
  ),
  youtube: (
    <>
      <rect width="40" height="40" rx="11" fill="#ff0000" />
      <path d="M17 14.8l9.5 5.2-9.5 5.2V14.8z" fill="#fff" />
    </>
  ),
  // Business services carry the BifidMedia blue gradient rather than a
  // third-party platform colour.
  business: (
    <>
      <defs>
        <linearGradient id="bifid-business-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#165dff" />
          <stop offset="55%" stopColor="#3045f4" />
          <stop offset="100%" stopColor="#6840ff" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill="url(#bifid-business-gradient)" />
      <rect x="10.5" y="16.5" width="19" height="12.5" rx="2.4" fill="#fff" opacity="0.94" />
      <path
        d="M16 16.5v-2.2a2 2 0 012-2h4a2 2 0 012 2v2.2"
        stroke="#fff"
        strokeWidth="2.1"
        strokeLinecap="round"
        fill="none"
      />
      <rect x="18.4" y="20.6" width="3.2" height="3.2" rx="0.8" fill="#3045f4" />
    </>
  ),
};

export function PlatformIcon({ platform, size = 40, className = "", title }) {
  const glyph = glyphs[platform];
  if (!glyph) return null;

  return (
    <svg
      viewBox="0 0 40 40"
      width={size}
      height={size}
      className={className}
      role={title ? "img" : "presentation"}
      aria-label={title || undefined}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      {glyph}
    </svg>
  );
}

export default PlatformIcon;

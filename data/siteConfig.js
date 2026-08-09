export const siteConfig = {
  name: "BifidMedia",
  legalName: "BifidMedia",
  tagline: "Automate · Scale · Grow",
  description:
    "BifidMedia builds, manages and scales e-commerce stores across Amazon, Walmart, Shopify, TikTok Shop, Etsy and eBay so founders can grow without running day-to-day operations.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://bifidmedia.com",

  phoneDisplay: "+1 (512) 410-5874",
  phoneHref: "tel:+15124105874",
  phoneSchema: "+1-512-410-5874",

  email: "info@bifidmedia.com",
  emailHref: "mailto:info@bifidmedia.com",

  addressLine: "9310 Metric Blvd, Austin, TX 78586",
  addressLines: ["9310 Metric Blvd", "Austin, TX 78586"],
  postalAddress: {
    streetAddress: "9310 Metric Blvd",
    addressLocality: "Austin",
    addressRegion: "TX",
    postalCode: "78586",
    addressCountry: "US",
  },
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=9310+Metric+Blvd,+Austin,+TX+78586",

  hours: [
    { days: "Monday – Friday", time: "8:00 a.m. – 7:00 p.m. (CT)" },
    { days: "Saturday", time: "9:00 a.m. – 3:00 p.m. (CT)" },
  ],

  founded: 2019,
  copyrightYear: 2026,

  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/bifidmedia" },
    { label: "Facebook", href: "https://www.facebook.com/bifidmedia" },
    { label: "Instagram", href: "https://www.instagram.com/bifidmedia" },
    { label: "YouTube", href: "https://www.youtube.com/@bifidmedia" },
  ],

  routes: {
    getStarted: "/get-started",
    consultation: "/book-consultation",
    audit: "/free-audit",
    partner: "/become-a-partner",
    contact: "/contact",
  },

  analytics: {
    ga4: process.env.NEXT_PUBLIC_GA4_ID || "",
    gtm: process.env.NEXT_PUBLIC_GTM_ID || "",
  },
};

export default siteConfig;

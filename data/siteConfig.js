export const siteConfig = {
  brandName: "BifidMedia",
  brand: "BifidMedia",
  legalName: "[LEGAL_COMPANY_NAME]",
  tagline: "E-commerce systems for marketplace growth",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://bifidmedia.com",
  phone: "[CLIENT_PHONE]",
  whatsapp: "[CLIENT_WHATSAPP]",
  email: "[CLIENT_EMAIL]",
  address: "[CLIENT_ADDRESS]",
  hours: "Monday-Friday, 9:00 AM-6:00 PM",
  bookingUrl: "/book-consultation",
  consultationUrl: "/book-consultation",
  copyrightYear: 2026,
  socials: {
    linkedin: "#",
    instagram: "#",
    facebook: "#",
    x: "#",
  },
  stats: [
    { label: "Stores Supported", value: "[CLIENT_STAT_STORES]", note: "Editable placeholder" },
    { label: "Campaigns Managed", value: "[CLIENT_STAT_CAMPAIGNS]", note: "Editable placeholder" },
    { label: "Marketplace Specialists", value: "[CLIENT_STAT_SPECIALISTS]", note: "Editable placeholder" },
    { label: "Client Satisfaction", value: "[CLIENT_STAT_SATISFACTION]", note: "Editable placeholder" },
  ],
  analytics: {
    ga4: process.env.NEXT_PUBLIC_GA4_ID,
    gtm: process.env.NEXT_PUBLIC_GTM_ID,
    googleAds: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID,
    metaPixel: process.env.NEXT_PUBLIC_META_PIXEL_ID,
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID,
    clarity: process.env.NEXT_PUBLIC_CLARITY_ID,
  },
};

export const platforms = ["Amazon", "Walmart", "Shopify", "TikTok Shop", "Etsy", "eBay", "YouTube", "Meta", "Google Ads", "WooCommerce"];

export const navGroups = [
  {
    label: "E-commerce Services",
    items: [
      ["Amazon Store Services", "/services/amazon-store"],
      ["Walmart Marketplace Services", "/services/walmart-marketplace"],
      ["Shopify Store Services", "/services/shopify-store"],
      ["TikTok Shop Services", "/services/tiktok-shop"],
      ["Etsy Shop Services", "/services/etsy-shop"],
      ["eBay Store Services", "/services/ebay-store"],
    ],
  },
  {
    label: "Business Growth",
    items: [
      ["YouTube Automation", "/services/youtube-automation"],
      ["Personal Branding", "/services/personal-branding"],
      ["Marketing Agency Setup", "/services/marketing-agency-setup"],
      ["E-commerce Brand Launch", "/services/ecommerce-brand-launch"],
      ["Social Media Marketing", "/services/social-media-marketing"],
      ["Mobile App Development", "/services/mobile-app-development"],
      ["Business Formation", "/services/business-formation"],
      ["Business Automation Consulting", "/services/business-automation-consulting"],
    ],
  },
  {
    label: "Company",
    items: [
      ["About Us", "/about"],
      ["Contact Us", "/contact"],
      ["FAQs", "/faq"],
      ["Become a Partner", "/become-a-partner"],
      ["Blog", "/blog"],
    ],
  },
];

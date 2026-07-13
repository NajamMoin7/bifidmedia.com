export const siteConfig = {
  brandName: "BifidMedia",
  brand: "BifidMedia",
  legalName: "BifidMedia",
  tagline: "E-commerce systems for marketplace growth",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://bifidmedia.com",
  phoneDisplay: "+1 (512) 410-5874",
  phoneLink: "+15124105874",
  phoneSchema: "+1-512-410-5874",
  email: "info@bifidmedia.com",
  address: "9310 Metric Blvd, Austin, TX 78586",
  addressLines: ["9310 Metric Blvd", "Austin, TX 78586"],
  mapUrl: "https://www.google.com/maps/search/?api=1&query=9310%20Metric%20Blvd%2C%20Austin%2C%20TX%2078586",
  schemaAddress: {
    streetAddress: "9310 Metric Blvd",
    addressLocality: "Austin",
    addressRegion: "TX",
    postalCode: "78586",
    addressCountry: "US",
  },
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
    { label: "Stores Supported", value: "Multi-channel", note: "Amazon, Walmart, Shopify, TikTok Shop, Etsy, and eBay" },
    { label: "Campaigns Managed", value: "Full-funnel", note: "Marketplace, search, and social advertising support" },
    { label: "Marketplace Specialists", value: "Dedicated", note: "Strategy, setup, optimization, and reporting guidance" },
    { label: "Client Satisfaction", value: "Priority", note: "Clear communication and practical next steps" },
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

siteConfig.phone = siteConfig.phoneDisplay;
siteConfig.whatsapp = siteConfig.phoneLink;
siteConfig.emailHref = "mailto:info@bifidmedia.com";
siteConfig.phoneHref = "tel:+15124105874";
siteConfig.callAriaLabel = "Call BifidMedia at +1 512 410 5874";
siteConfig.contactRecipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || siteConfig.email;

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

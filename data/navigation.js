import { serviceCategories, marketplaceCategories } from "./serviceCategories";

/**
 * Header navigation.
 *
 * "Services" opens a compact dropdown of the marketplace categories only.
 * Individual services are never listed in the header — those live on the
 * category pages, which the dropdown links straight to.
 */
export const primaryNav = [
  { label: "Services", href: "/services", isServices: true },
  { label: "Start Amazon Store", href: "/amazon", variant: "outline" },
  { label: "Business Formation", href: "/business/business-formation" },
];

/** The six marketplace categories shown in the Services dropdown. */
export const servicesDropdown = marketplaceCategories.map((category) => ({
  id: category.id,
  label: category.navLabel,
  description: category.menuDescription,
  href: category.href,
  icon: category.icon,
  color: category.color,
}));

/** Kept for the marketplace hub links elsewhere in the header/footer. */
export const primaryLinks = primaryNav.filter((link) => !link.isServices);

/** Overlay menu: short and scannable, no service lists. */
export const overlayMenu = {
  main: [
    { label: "Services", href: "/services" },
    { label: "Start Amazon Store", href: "/amazon" },
    { label: "Business Formation", href: "/business/business-formation" },
    { label: "Become a Partner", href: "/become-a-partner" },
    { label: "Contact", href: "/contact" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "FAQs", href: "/faq" },
    { label: "Free Store Audit", href: "/free-audit" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
  ],
};

export const footerNav = [
  {
    title: "Services",
    links: [
      // The desktop Services trigger opens the dropdown rather than
      // navigating, so the landing page is linked here.
      { label: "All services", href: "/services" },
      ...serviceCategories.map((category, index) => ({
        label: `${category.shortLabel} services`,
        href: category.href,
        badge: index === 0 ? "Popular" : null,
      })),
    ],
  },
  {
    title: "Popular Services",
    links: [
      { label: "Business Formation", href: "/business/business-formation", badge: "Hot" },
      { label: "Amazon PPC Advertising", href: "/amazon/ppc-advertising" },
      { label: "Amazon Account Management", href: "/amazon/account-management" },
      { label: "Shopify Store Design", href: "/shopify/store-design" },
      { label: "TikTok Shop Management", href: "/tiktok-shop/management" },
      { label: "Personal Branding", href: "/business/personal-branding" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About BifidMedia", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "/blog" },
      { label: "FAQs", href: "/faq" },
      { label: "Become a Partner", href: "/become-a-partner" },
      { label: "Book a Consultation", href: "/book-consultation" },
      { label: "Free Store Audit", href: "/free-audit" },
    ],
  },
];

export const legalNav = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Disclaimer", href: "/disclaimer" },
];

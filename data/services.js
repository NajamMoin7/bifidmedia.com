const makeService = (slug, title, keyword, category, summary, includes, benefits) => ({
  slug,
  title,
  category,
  keyword,
  path: `/services/${slug}`,
  h1: `${title} for Growth-Focused Digital Businesses`,
  description: summary,
  includes,
  benefits,
  deliverables: [
    "Discovery audit and channel-fit assessment",
    "Positioning, offer, and operational roadmap",
    "Setup, optimization, and documentation support",
    "Reporting rhythm with next-step recommendations",
  ],
  process: ["Discovery and Audit", "Strategy and Planning", "Setup and Implementation", "Management and Optimization", "Reporting and Scaling"],
});

export const services = [
  makeService(
    "amazon-store",
    "Amazon Store Services",
    "Amazon store management services",
    "E-commerce Services",
    "Plan, launch, manage, and optimize Amazon stores with structured support across catalog, account health, marketplace SEO, advertising, and operations.",
    ["Seller Central setup guidance", "Listing creation and optimization", "PPC and SEO planning", "Inventory and account-health workflows"],
    ["Cleaner Amazon operating model", "Better listing quality", "More informed advertising decisions", "Reduced daily marketplace friction"],
  ),
  makeService("walmart-marketplace", "Walmart Marketplace Services", "Walmart marketplace management", "E-commerce Services", "Build a Walmart Marketplace presence with onboarding support, catalog hygiene, listing optimization, advertising guidance, and performance reporting.", ["Marketplace onboarding", "Catalog and listing support", "Advertising recommendations", "Operational reporting"], ["Stronger marketplace readiness", "Cleaner product data", "Improved visibility foundations", "Scalable marketplace routines"]),
  makeService("shopify-store", "Shopify Store Services", "Shopify store development agency", "E-commerce Services", "Design, build, and improve Shopify storefronts with conversion-focused UX, app planning, product architecture, and lifecycle marketing foundations.", ["Theme and UX planning", "Product page structure", "App stack guidance", "Email and SMS foundations"], ["Better shopping experience", "Cleaner conversion paths", "Flexible commerce architecture", "Marketing-ready storefront"]),
  makeService("tiktok-shop", "TikTok Shop Services", "TikTok Shop management agency", "E-commerce Services", "Launch and manage TikTok Shop workflows across setup, catalog, creator coordination, content signals, paid media, and fulfillment alignment.", ["Shop setup", "Catalog readiness", "Creator workflow planning", "Ad and content testing"], ["Social commerce readiness", "Shorter launch path", "Better creator collaboration", "Actionable campaign reporting"]),
  makeService("etsy-shop", "Etsy Shop Services", "Etsy shop management", "E-commerce Services", "Improve Etsy shop setup, product positioning, listing SEO, photography direction, and operations for niche products and creative sellers.", ["Shop setup", "Listing SEO", "Product positioning", "Review and operations workflow"], ["More searchable listings", "Clearer brand presentation", "Better product organization", "Repeatable shop management"]),
  makeService("ebay-store", "eBay Store Services", "eBay store management", "E-commerce Services", "Organize eBay catalog, seller standards, listing quality, inventory workflows, and marketplace reporting for sellers that need tighter control.", ["Store setup", "Listing optimization", "Inventory coordination", "Seller performance checks"], ["Cleaner catalog operations", "Improved listing clarity", "Fewer manual handoffs", "More stable marketplace routines"]),
  makeService("youtube-automation", "YouTube Automation Services", "YouTube automation services", "Business Growth", "Create repeatable YouTube channel systems for research, scripting, production workflow, publishing, analytics, and brand-safe growth planning.", ["Channel positioning", "Content system design", "Publishing workflow", "Analytics review"], ["Consistent production rhythm", "Clearer content strategy", "Better operational handoffs", "Reduced creator bottlenecks"]),
  makeService("personal-branding", "Personal Branding", "personal branding agency", "Business Growth", "Shape a founder or expert brand with positioning, content pillars, authority assets, profile optimization, and trust-building campaigns.", ["Brand positioning", "Content pillars", "Profile optimization", "Thought-leadership calendar"], ["Sharper market presence", "More consistent messaging", "Reusable content system", "Improved audience trust"]),
  makeService("marketing-agency-setup", "Marketing Agency Setup", "marketing agency startup consulting", "Business Growth", "Plan a marketing agency model with offer design, fulfillment workflows, client onboarding, reporting, and acquisition foundations.", ["Offer architecture", "Client workflow planning", "Delivery documentation", "Reporting templates"], ["Clearer service packaging", "Smoother onboarding", "Repeatable fulfillment", "Better operational visibility"]),
  makeService("ecommerce-brand-launch", "E-commerce Brand Launch", "ecommerce brand launch services", "Business Growth", "Move from idea to commerce-ready brand with positioning, channel strategy, storefront planning, marketplace setup, and launch campaign structure.", ["Brand and offer strategy", "Storefront planning", "Marketplace roadmap", "Launch campaign plan"], ["Clearer go-to-market path", "Better channel choices", "Launch-ready assets", "Structured execution plan"]),
  makeService("social-media-marketing", "Social Media Marketing", "social media marketing agency", "Business Growth", "Plan and run social campaigns with content calendars, creative testing, paid social guidance, reporting, and community workflows.", ["Content planning", "Creative testing", "Paid social structure", "Reporting dashboards"], ["More consistent publishing", "Better campaign learning", "Clearer creative direction", "Improved audience engagement"]),
  makeService("mobile-app-development", "Mobile App Development", "mobile app development services", "Business Growth", "Scope and build mobile app experiences for commerce, service delivery, automation, and customer engagement with practical MVP planning.", ["MVP scoping", "UX architecture", "Development roadmap", "Integration planning"], ["Sharper product scope", "Cleaner user flows", "Reduced build risk", "Scalable feature planning"]),
  makeService("business-formation", "Business Formation", "business formation services", "Business Growth", "Coordinate business formation workflows for digital entrepreneurs with clear documentation, compliance handoffs, and legal-review disclaimers.", ["Entity workflow guidance", "Documentation checklist", "Marketplace-readiness planning", "Professional referral prompts"], ["Clearer setup sequence", "Better documentation hygiene", "Marketplace-ready foundations", "Reduced admin confusion"]),
  makeService("business-automation-consulting", "Business Automation Consulting", "business automation consulting", "Business Growth", "Audit and redesign manual workflows using CRM, reporting, task management, and automation tools that reduce repetitive operations.", ["Workflow audit", "Tool stack recommendations", "Automation map", "Reporting design"], ["Less manual busywork", "Cleaner team handoffs", "Better visibility", "More scalable operations"]),
];

export const getService = (slug) => services.find((service) => service.slug === slug);

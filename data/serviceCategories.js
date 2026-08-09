/**
 * The single source of truth for the Services information architecture.
 *
 * Everything derives from this list: the /services landing page, the seven
 * category pages, related-category blocks, the footer and the sitemap.
 * The catalogue is deliberately kept out of the header navigation.
 *
 * Hierarchy:
 *   Services → <Category> → /services/<category> → /<pathPrefix>/<service-slug>
 *
 * `color` is the platform's own recognisable brand colour and is used only for
 * icons, badges and accent rules. Page surfaces stay BifidMedia blue + white.
 */

export const serviceCategories = [
  {
    id: "amazon",
    /** key into servicesByCategory / the marketplace registry */
    source: "amazon",
    label: "Amazon",
    shortLabel: "Amazon",
    navLabel: "Amazon",
    menuDescription: "Explore Amazon Services",
    href: "/services/amazon",
    pathPrefix: "/amazon",
    hubHref: "/amazon",
    hubLabel: "Start an Amazon store",
    icon: "amazon",
    color: "#ff9900",
    accent: "#232f3e",
    tint: "#fff6e8",
    tagline: "Full-service Amazon agency",
    heading: "Complete Amazon Services for Growing E-Commerce Brands",
    intro:
      "Every part of an Amazon business, delivered by specialists who work in Seller Central every day — entity formation, listings, advertising, logistics, compliance, brand protection and reporting.",
    valueLine:
      "Buy one service track or hand over the whole account. The same team runs both.",
    metaTitle: "Amazon Services | Amazon Marketplace Solutions",
    cardDescription:
      "Amazon marketplace strategy, store management, advertising, SEO, listings, account support and growth services.",
    metaDescription:
      "Every BifidMedia Amazon service in one place — LLC formation, account setup, listing optimization, PPC, SEO, inventory, reinstatement and brand management.",
    introHeading: "What an Amazon engagement with BifidMedia covers",
    introBody: [
      "Amazon rewards operators who get the unglamorous work right: complete structured data, disciplined bidding, accurate stock cover and an account that never drifts into enforcement.",
      "We group our Amazon work into thirteen capability areas so you can start with the one that is actually holding the account back, then expand once it is working.",
    ],
  },
  {
    id: "walmart",
    source: "walmart",
    label: "Walmart Marketplace",
    shortLabel: "Walmart",
    navLabel: "Walmart Marketplace",
    menuDescription: "Explore Walmart Services",
    href: "/services/walmart",
    pathPrefix: "/walmart",
    hubHref: "/walmart",
    hubLabel: "Start a Walmart store",
    icon: "walmart",
    color: "#0071dc",
    accent: "#ffc220",
    tint: "#eaf3ff",
    tagline: "Walmart Marketplace agency",
    heading: "Complete Walmart Marketplace Services for Multi-Channel Sellers",
    intro:
      "Walmart rewards clean catalogue data, competitive pricing and reliable fulfilment. BifidMedia handles onboarding, item setup, search visibility, paid media and the operational load behind them.",
    valueLine:
      "A second high-intent marketplace, set up properly and managed to a target return.",
    metaTitle: "Walmart Marketplace Services | Seller Solutions",
    cardDescription:
      "Walmart seller onboarding, item setup, listing quality, Walmart Connect advertising, marketing and channel automation.",
    metaDescription:
      "Every BifidMedia Walmart Marketplace service — item setup, listing quality, Walmart SEO, Walmart Connect advertising, marketing and channel automation.",
    introHeading: "What a Walmart engagement with BifidMedia covers",
    introBody: [
      "Most Walmart visibility problems are catalogue data problems wearing an advertising costume. We fix the data first, then put budget behind items that can actually convert.",
      "Walmart is managed alongside your other channels rather than in a silo, so pricing, stock and creative stay consistent everywhere you sell.",
    ],
  },
  {
    id: "shopify",
    source: "shopify",
    label: "Shopify",
    shortLabel: "Shopify",
    navLabel: "Shopify Store",
    menuDescription: "Explore Shopify Services",
    href: "/services/shopify",
    pathPrefix: "/shopify",
    hubHref: "/shopify",
    hubLabel: "Start a Shopify store",
    icon: "shopify",
    color: "#5e8e3e",
    accent: "#004c3f",
    tint: "#eef7e9",
    tagline: "Shopify agency",
    heading: "Complete Shopify Services for Stores That Need to Convert",
    intro:
      "Your Shopify store is the one channel you fully own. We design it, build it, instrument it and grow it — theme development, conversion testing, SEO, paid media and lifecycle automation.",
    valueLine:
      "A store you own outright, built to convert and supported by demand you control.",
    metaTitle: "Shopify Services | Store Design, Development & Growth",
    cardDescription:
      "Shopify store design, theme development, conversion optimization, SEO, paid media, lifecycle email and store automation.",
    metaDescription:
      "Every BifidMedia Shopify service — store design, theme development, conversion optimization, SEO, paid media, email and SMS lifecycle, dropshipping and automation.",
    introHeading: "What a Shopify engagement with BifidMedia covers",
    introBody: [
      "A storefront is a revenue system, not a brochure. We instrument the funnel before we change it, so every design decision is judged on conversion rather than opinion.",
      "The build is handed over documented and maintainable — you are never locked to one developer to change a page.",
    ],
  },
  {
    id: "tiktok-shop",
    source: "tiktok-shop",
    label: "TikTok Shop",
    shortLabel: "TikTok Shop",
    navLabel: "TikTok Shop",
    menuDescription: "Explore TikTok Shop Services",
    href: "/services/tiktok-shop",
    pathPrefix: "/tiktok-shop",
    hubHref: "/tiktok-shop",
    hubLabel: "Start a TikTok Shop",
    icon: "tiktok",
    color: "#fe2c55",
    accent: "#25f4ee",
    tint: "#fff0f3",
    tagline: "TikTok Shop agency",
    heading: "Complete TikTok Shop Services for Content-Led Commerce",
    intro:
      "TikTok Shop turns attention into orders in the same session. We run shop setup, product onboarding, creator partnerships, live commerce and paid amplification as one operation.",
    valueLine:
      "Creator-led demand, a properly configured shop and campaigns judged on orders.",
    metaTitle: "TikTok Shop Services | Social Commerce Solutions",
    cardDescription:
      "TikTok Shop setup and management, creator and affiliate campaigns, live commerce, paid advertising and content operations.",
    metaDescription:
      "Every BifidMedia TikTok Shop service — shop management, affiliate and creator marketing, Video Shopping Ads, live commerce and content production systems.",
    introHeading: "What a TikTok Shop engagement with BifidMedia covers",
    introBody: [
      "Demand on TikTok is created by content, not captured from search. That makes a repeatable content and creator pipeline the operating requirement, not an optional extra.",
      "Views are a leading indicator. We report creator, content and campaign performance on orders and contribution margin.",
    ],
  },
  {
    id: "etsy",
    source: "etsy",
    label: "Etsy",
    shortLabel: "Etsy",
    navLabel: "Etsy Shop",
    menuDescription: "Explore Etsy Services",
    href: "/services/etsy",
    pathPrefix: "/etsy",
    hubHref: "/etsy",
    hubLabel: "Start an Etsy shop",
    icon: "etsy",
    color: "#f1641e",
    accent: "#c2410c",
    tint: "#fff2ea",
    tagline: "Etsy shop agency",
    heading: "Complete Etsy Services for Handmade, Digital and POD Sellers",
    intro:
      "Etsy buyers search with intent and buy on presentation. We build the keyword architecture, direct the imagery, manage Etsy Ads and bring in demand from outside the platform.",
    valueLine:
      "A shop that ranks for the searches that matter and converts the traffic it earns.",
    metaTitle: "Etsy Services | Shop SEO, Ads & Marketing",
    cardDescription:
      "Etsy shop setup, listing and tag SEO, Etsy Ads management, off-platform marketing and shop operations automation.",
    metaDescription:
      "Every BifidMedia Etsy service — Etsy SEO and tag strategy, Etsy Ads management, off-platform marketing and shop operations automation.",
    introHeading: "What an Etsy engagement with BifidMedia covers",
    introBody: [
      "Etsy visibility begins and ends with the keyword architecture behind your listings, and conversion is decided almost entirely by the photography.",
      "We work on both, then concentrate ad budget on the listings that already convert instead of spreading it across the catalogue.",
    ],
  },
  {
    id: "ebay",
    source: "ebay",
    label: "eBay",
    shortLabel: "eBay",
    navLabel: "eBay Store",
    menuDescription: "Explore eBay Services",
    href: "/services/ebay",
    pathPrefix: "/ebay",
    hubHref: "/ebay",
    hubLabel: "Start an eBay store",
    icon: "ebay",
    color: "#0064d2",
    accent: "#e53238",
    tint: "#eaf2ff",
    tagline: "eBay store agency",
    heading: "Complete eBay Services for Volume Sellers",
    intro:
      "eBay still moves serious volume for sellers who get item specifics, pricing and service metrics right. We manage the store, rebuild listings for Cassini and protect account health.",
    valueLine:
      "Listings built for eBay search, service metrics kept green and volume that holds.",
    metaTitle: "eBay Services | Listings, SEO & Store Management",
    cardDescription:
      "eBay store and listing creation, item specifics and Cassini SEO, account health, feedback resolution and store automation.",
    metaDescription:
      "Every BifidMedia eBay service — listing creation, eBay SEO, account management, feedback removal, automation and account reinstatement.",
    introHeading: "What an eBay engagement with BifidMedia covers",
    introBody: [
      "Item specifics are the single biggest controllable ranking factor on eBay, and most sellers leave that value on the table entirely.",
      "Volume is worthless if the account gets restricted, so service metrics and case response windows come before we scale listing counts.",
    ],
  },
  {
    id: "business",
    source: "business",
    label: "Business Services",
    shortLabel: "Business",
    navLabel: "Business Services",
    menuDescription: "Explore Business Services",
    href: "/services/business",
    pathPrefix: "/business",
    hubHref: "/services/business",
    hubLabel: "Explore business services",
    icon: "business",
    color: "#165dff",
    accent: "#6840ff",
    tint: "#eef4ff",
    tagline: "Business growth services",
    heading: "Business Services That Support the Store You Are Building",
    intro:
      "The work around the storefront: entity formation and compliance, brand and positioning, content and personal brand, and the second revenue line you have been considering.",
    valueLine:
      "A formed, compliant business with a brand and a route to market behind it.",
    metaTitle: "Business Services | Formation, Branding & Growth",
    cardDescription:
      "LLC formation and compliance, personal branding, social media, YouTube automation, agency launch and e-commerce brand building.",
    metaDescription:
      "Every BifidMedia business service — LLC formation and compliance, personal branding, social media, YouTube automation, agency launch and e-commerce brand building.",
    introHeading: "What a business engagement with BifidMedia covers",
    introBody: [
      "Every marketplace, bank and payment processor asks for the same set of documents. Getting the entity and the paperwork right first removes most of the friction later.",
      "Beyond formation, we help founders build the brand, the content engine and the second revenue stream that makes the whole thing durable.",
    ],
  },
];

export const categoryById = Object.fromEntries(
  serviceCategories.map((category) => [category.id, category])
);

export const categoryIds = serviceCategories.map((category) => category.id);

export const marketplaceCategories = serviceCategories.filter(
  (category) => category.id !== "business"
);

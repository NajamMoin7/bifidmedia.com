/**
 * Marketplace hubs.
 *
 * Each hub owns the shared scaffolding that every one of its service pages
 * reuses (process, audiences, tools, trust points, statistics). Individual
 * service pages supply their own hero copy, offerings and FAQs.
 *
 * `color` / `accent` are the platform's own recognisable brand colours and are
 * used ONLY for icons, badges, small accent rules and hover glows. Page
 * surfaces stay BifidMedia blue + white.
 */

export const marketplaces = [
  {
    slug: "amazon",
    key: "amazon",
    name: "Amazon Store",
    shortName: "Amazon",
    navLabel: "Amazon Store",
    href: "/amazon",
    color: "#ff9900",
    accent: "#232f3e",
    tint: "#fff6e8",
    badge: "Most requested",
    tagline: "Full-service Amazon agency",
    heading: "Full-Service Amazon Agency to Launch and Scale Your Store",
    intro:
      "BifidMedia builds compliant Amazon businesses and runs them end to end — entity setup, listings, advertising, inventory, compliance and reporting — so your catalogue keeps selling without you managing it hour by hour.",
    valueLine:
      "One accountable team for your Amazon account, your listings, your ad spend and your growth plan.",
    metaTitle: "Amazon Agency Services | Store Setup, PPC & Management",
    metaDescription:
      "BifidMedia is a full-service Amazon agency covering account setup, listing optimization, PPC, inventory, compliance and brand management for growing sellers.",
    image: "/images/amazon/amazon-analytics-dashboard.webp",
    imageAlt: "Analytics dashboard used to track Amazon store performance",
    models: [
      {
        title: "Amazon FBA Wholesale",
        text: "Source established brands at wholesale, ship into Amazon fulfilment centres and let Amazon handle pick, pack and delivery.",
      },
      {
        title: "Amazon FBM Wholesale",
        text: "Keep control of stock and fulfilment in your own warehouse or through a 3PL while selling on the Amazon marketplace.",
      },
      {
        title: "Amazon Private Label",
        text: "Build your own registered brand, own the listing outright and grow margin instead of competing on the buy box.",
      },
    ],
    audiences: [
      {
        title: "First-time Amazon sellers",
        text: "You want a compliant account, a clean catalogue and a launch plan without learning Seller Central the hard way.",
      },
      {
        title: "Established brand owners",
        text: "You already sell, but listings, ads and inventory need a dedicated team to move from steady to scaling.",
      },
      {
        title: "Brands expanding internationally",
        text: "You are opening new Amazon marketplaces and need localisation, compliance and market-specific advertising.",
      },
    ],
    process: [
      { title: "Account and catalogue audit", text: "We review your account health, listings, advertising and inventory position before touching anything." },
      { title: "Strategy and forecast", text: "You get a written plan with priorities, timelines, budget ranges and the numbers we are steering toward." },
      { title: "Build and fix", text: "Listings, imagery, backend data, brand assets and campaign structure are rebuilt to the plan." },
      { title: "Launch and test", text: "New campaigns and listings go live in controlled stages so we can attribute what actually moved." },
      { title: "Optimise weekly", text: "Bids, keywords, pricing, stock cover and content are reviewed on a fixed weekly cadence." },
      { title: "Report and expand", text: "You get a monthly performance report, then we decide together where the next increment of growth comes from." },
    ],
    tools: [
      { name: "Amazon Seller Central", text: "Catalogue, inventory, cases, performance notifications and account health, managed daily." },
      { name: "Amazon Advertising Console", text: "Sponsored Products, Sponsored Brands and Sponsored Display structure, bidding and reporting." },
      { name: "Amazon Brand Registry", text: "Brand protection, A+ Content, Brand Story and storefront publishing." },
      { name: "Keyword and market research suites", text: "Demand, competitor and search-term research feeding both listings and campaigns." },
      { name: "Inventory planning", text: "Restock forecasting, cover-days tracking and storage-fee modelling." },
      { name: "BifidMedia reporting", text: "A single dashboard tying spend, organic rank, sell-through and contribution margin together." },
    ],
    trust: [
      { title: "Marketplace specialists only", text: "Your account is handled by people who work on Amazon every day, not a generalist rota." },
      { title: "Transparent reporting", text: "Every number we report can be traced back to a Seller Central or Advertising Console export." },
      { title: "A named account manager", text: "One point of contact who knows your catalogue, your margins and your constraints." },
    ],
    stats: [
      { value: "6", label: "Marketplaces covered", text: "Amazon, Walmart, Shopify, TikTok Shop, Etsy and eBay under one roof." },
      { value: "45+", label: "Amazon service tracks", text: "From entity formation to DSP advertising and account reinstatement." },
      { value: "Weekly", label: "Optimisation cadence", text: "Bids, listings, stock cover and account health reviewed every week." },
    ],
  },

  {
    slug: "walmart",
    key: "walmart",
    name: "Walmart Marketplace",
    shortName: "Walmart",
    navLabel: "Walmart Marketplace",
    href: "/walmart",
    color: "#0071dc",
    accent: "#ffc220",
    tint: "#eaf3ff",
    badge: "Fast growing",
    tagline: "Walmart Marketplace agency",
    heading: "Walmart Marketplace Agency for Sellers Who Want the Second Channel",
    intro:
      "Walmart Marketplace rewards sellers who arrive with clean data, competitive pricing and reliable fulfilment. BifidMedia handles onboarding, item setup, search visibility and paid media so the channel contributes instead of sitting idle.",
    valueLine:
      "A second high-intent marketplace, set up properly and managed to a target return.",
    metaTitle: "Walmart Marketplace Agency | Setup, SEO & Advertising",
    metaDescription:
      "BifidMedia manages Walmart Marketplace seller accounts end to end — onboarding, item setup, search optimization, advertising and automation.",
    image: "/images/walmart/marketplace-management-team.webp",
    imageAlt: "Team reviewing Walmart Marketplace listing performance",
    models: [
      { title: "Walmart Fulfillment Services", text: "Store inventory in Walmart's network and qualify for faster delivery promises and better placement." },
      { title: "Seller-fulfilled", text: "Ship from your own warehouse or 3PL while meeting Walmart's on-time delivery standards." },
      { title: "Multi-channel expansion", text: "Mirror a proven Amazon or Shopify catalogue onto Walmart without duplicating the operational load." },
    ],
    audiences: [
      { title: "Amazon sellers diversifying", text: "You want a second channel that does not depend on a single platform's policy decisions." },
      { title: "Brands new to Walmart", text: "You need approval, item setup and content standards handled correctly the first time." },
      { title: "Sellers with stalled listings", text: "Your items are live but invisible, and the catalogue data needs rebuilding." },
    ],
    process: [
      { title: "Eligibility and onboarding", text: "We prepare the application, tax and business documents and get the account approved." },
      { title: "Catalogue mapping", text: "Product data is mapped to Walmart's taxonomy, attributes and content requirements." },
      { title: "Listing build", text: "Titles, key features, descriptions, imagery and rich media are produced to spec." },
      { title: "Pricing and fulfilment setup", text: "Repricing rules, shipping templates and delivery promises are configured." },
      { title: "Advertising launch", text: "Sponsored Products campaigns launch against researched, category-relevant terms." },
      { title: "Scale and review", text: "Listing quality score, buy box share and ad efficiency are reviewed on a weekly cycle." },
    ],
    tools: [
      { name: "Walmart Seller Center", text: "Item setup, order management, performance metrics and case handling." },
      { name: "Walmart Connect", text: "Sponsored Products campaign structure, bidding and placement reporting." },
      { name: "Listing Quality Dashboard", text: "Content, ratings, offer and post-purchase scores tracked item by item." },
      { name: "Repricing rules", text: "Buy box competitiveness managed within margin floors you approve." },
      { name: "Feed management", text: "Bulk catalogue updates and error resolution across large item counts." },
      { name: "BifidMedia reporting", text: "Channel-level contribution reported next to your other marketplaces." },
    ],
    trust: [
      { title: "Catalogue data done right", text: "Most Walmart visibility problems are data problems. We fix them at the source." },
      { title: "Margin-aware pricing", text: "We never chase the buy box below the floor you set." },
      { title: "One team, every channel", text: "Walmart is managed alongside your other marketplaces, not in a silo." },
    ],
    stats: [
      { value: "2nd", label: "Channel by design", text: "Built to reduce single-marketplace dependency." },
      { value: "4", label: "Walmart service tracks", text: "Setup and automation, SEO, marketing and paid advertising." },
      { value: "Weekly", label: "Performance review", text: "Listing quality, buy box share and ad efficiency." },
    ],
  },

  {
    slug: "shopify",
    key: "shopify",
    name: "Shopify Store",
    shortName: "Shopify",
    navLabel: "Shopify Store",
    href: "/shopify",
    color: "#5e8e3e",
    accent: "#004c3f",
    tint: "#eef7e9",
    badge: "Own your channel",
    tagline: "Shopify agency",
    heading: "Shopify Agency for Stores That Need to Convert, Not Just Launch",
    intro:
      "A Shopify store is the one channel you fully own. BifidMedia designs, builds and grows it — theme development, conversion work, SEO, paid media, email and lifecycle automation — with the storefront treated as a revenue system rather than a brochure.",
    valueLine:
      "A store you own outright, built to convert and supported by demand you control.",
    metaTitle: "Shopify Agency | Store Design, Development, CRO & SEO",
    metaDescription:
      "BifidMedia designs, develops and grows Shopify stores with conversion optimization, SEO, advertising, email automation and ongoing management.",
    image: "/images/shopify/shopify-store-development.webp",
    imageAlt: "Designer reviewing a Shopify storefront layout",
    models: [
      { title: "Direct-to-consumer brand", text: "Own the customer relationship, the data and the margin on every order." },
      { title: "Shopify dropshipping", text: "Test demand with supplier-fulfilled products before committing capital to inventory." },
      { title: "Wholesale and B2B", text: "Serve trade customers with gated pricing, quantity breaks and account-based checkout." },
    ],
    audiences: [
      { title: "Marketplace sellers going direct", text: "You want a branded channel that is not subject to another platform's fee changes." },
      { title: "Stores that get traffic but few orders", text: "The problem is conversion, not awareness, and it needs structured testing." },
      { title: "Brands replatforming", text: "You are moving from another platform and cannot afford to lose rankings or data." },
    ],
    process: [
      { title: "Discovery and benchmark", text: "We audit the current store, analytics, funnel and competitive set before proposing work." },
      { title: "Information architecture", text: "Navigation, collections, templates and content plan are defined up front." },
      { title: "Design and build", text: "Theme development, custom sections, apps and integrations, all tested on real devices." },
      { title: "Conversion instrumentation", text: "Analytics, events and attribution are configured so tests can be judged honestly." },
      { title: "Traffic and lifecycle", text: "SEO, paid media, email and SMS flows are launched against the new store." },
      { title: "Iterate monthly", text: "A prioritised test backlog runs continuously against conversion rate and average order value." },
    ],
    tools: [
      { name: "Shopify and Shopify Plus", text: "Themes, custom sections, metafields, markets and checkout configuration." },
      { name: "Analytics and event tracking", text: "GA4, server-side events and funnel instrumentation set up correctly." },
      { name: "Klaviyo / Omnisend", text: "Email and SMS flows, segmentation, campaigns and deliverability." },
      { name: "CRO testing", text: "A/B testing on templates, offers, PDP layout and checkout flow." },
      { name: "Technical SEO tooling", text: "Crawl, index, schema, Core Web Vitals and content-gap analysis." },
      { name: "Ad platforms", text: "Meta, Google, TikTok and Pinterest campaign build and management." },
    ],
    trust: [
      { title: "Built to be maintained", text: "Clean theme code and documented components, so you are never locked to one developer." },
      { title: "Tests, not opinions", text: "Design changes are validated against conversion data before they become permanent." },
      { title: "Owned data", text: "Your customer list, analytics and pixels stay yours from day one." },
    ],
    stats: [
      { value: "100%", label: "Store ownership", text: "You own the theme, the data, the domain and the customer list." },
      { value: "8", label: "Shopify service tracks", text: "Design, development, CRO, SEO, ads, marketing, dropshipping and automation." },
      { value: "Monthly", label: "Test cadence", text: "A prioritised CRO backlog that never runs dry." },
    ],
  },

  {
    slug: "tiktok-shop",
    key: "tiktok",
    name: "TikTok Shop",
    shortName: "TikTok Shop",
    navLabel: "TikTok Shop",
    href: "/tiktok-shop",
    color: "#fe2c55",
    accent: "#25f4ee",
    tint: "#fff0f3",
    badge: "Social commerce",
    tagline: "TikTok Shop agency",
    heading: "TikTok Shop Agency for Brands That Want Content to Sell",
    intro:
      "TikTok Shop turns attention into orders in the same session. BifidMedia handles shop setup, product onboarding, creator partnerships, live and video commerce, and paid amplification so content is measured on revenue, not views.",
    valueLine:
      "Creator-led demand, a properly configured shop and campaigns judged on orders.",
    metaTitle: "TikTok Shop Agency | Setup, Management & Creator Marketing",
    metaDescription:
      "BifidMedia manages TikTok Shop end to end — shop setup, product onboarding, affiliate and creator campaigns, live commerce and paid advertising.",
    image: "/images/home/hero-ecommerce-growth.png",
    imageAlt: "Marketer reviewing social commerce performance",
    models: [
      { title: "Shop-managed", text: "You hold inventory and fulfil orders while we run the shop, content and campaigns." },
      { title: "Creator affiliate", text: "A managed creator programme with commission structures that stay inside your margin." },
      { title: "Live commerce", text: "Scheduled live selling with scripted offers, moderation and post-stream follow-up." },
    ],
    audiences: [
      { title: "Brands new to social commerce", text: "You have products that demo well but no repeatable content or creator engine." },
      { title: "Sellers with a stalled shop", text: "The shop exists, but products, content and affiliates were never properly connected." },
      { title: "Scaling DTC brands", text: "You need a second acquisition channel that does not compete for the same auction as your Meta spend." },
    ],
    process: [
      { title: "Shop setup and compliance", text: "Seller verification, category approval, shipping templates and returns policy." },
      { title: "Catalogue and content plan", text: "Products onboarded with commerce-ready imagery, copy and a monthly content calendar." },
      { title: "Creator recruitment", text: "Affiliate targets are shortlisted, briefed and sampled against commission structures you approve." },
      { title: "Content production", text: "Short-form video, live scripts and offer mechanics produced in weekly batches." },
      { title: "Paid amplification", text: "Winning organic content is promoted through Video Shopping Ads and GMV Max." },
      { title: "Measure and reallocate", text: "Creator, content and ad performance are reported on orders and contribution margin." },
    ],
    tools: [
      { name: "TikTok Seller Center", text: "Product onboarding, orders, violations, shipping and shop health." },
      { name: "TikTok Shop Affiliate", text: "Open and targeted collaborations, sample management and commission rules." },
      { name: "TikTok Ads Manager", text: "Video Shopping Ads, LIVE ads, product cards and catalogue campaigns." },
      { name: "Creative production", text: "Hook-first short-form video, UGC-style formats and live selling scripts." },
      { name: "Live selling toolkit", text: "Run-of-show planning, overlays, moderation and post-stream retargeting." },
      { name: "BifidMedia reporting", text: "Creator-level, content-level and ad-level revenue in one view." },
    ],
    trust: [
      { title: "Content measured on orders", text: "Views are a leading indicator. We report on GMV and contribution." },
      { title: "Creator relationships managed", text: "Briefing, sampling, compliance and payouts are handled for you." },
      { title: "Margin-safe commissions", text: "Affiliate rates are modelled against landed cost before they go live." },
    ],
    stats: [
      { value: "In-feed", label: "Discovery to checkout", text: "Shoppers buy without leaving the app." },
      { value: "4", label: "TikTok Shop service tracks", text: "Management, automation, influencer marketing and paid advertising." },
      { value: "Weekly", label: "Content batches", text: "A steady publishing rhythm rather than one-off bursts." },
    ],
  },

  {
    slug: "etsy",
    key: "etsy",
    name: "Etsy Shop",
    shortName: "Etsy",
    navLabel: "Etsy Shop",
    href: "/etsy",
    color: "#f1641e",
    accent: "#c2410c",
    tint: "#fff2ea",
    badge: "Handmade & niche",
    tagline: "Etsy shop agency",
    heading: "Etsy Shop Agency for Handmade, Digital and Print-on-Demand Sellers",
    intro:
      "Etsy buyers search with intent and buy on presentation. BifidMedia builds and manages Etsy shops — listing SEO, photography direction, pricing, Etsy Ads and off-site marketing — so your shop is found by the people already looking for what you make.",
    valueLine:
      "A shop that ranks for the searches that matter and converts the traffic it earns.",
    metaTitle: "Etsy Shop Agency | Etsy SEO, Ads & Shop Management",
    metaDescription:
      "BifidMedia manages Etsy shops with listing SEO, Etsy Ads management, marketing and automation for handmade, digital and print-on-demand sellers.",
    image: "/images/business/ecommerce-consultation-team.webp",
    imageAlt: "Team planning an Etsy shop launch",
    models: [
      { title: "Handmade and vintage", text: "Original pieces presented with the photography, copy and pricing they deserve." },
      { title: "Digital downloads", text: "High-margin digital products with instant delivery and near-zero fulfilment overhead." },
      { title: "Print on demand", text: "Supplier-fulfilled designs, tested at low risk before you scale a catalogue." },
    ],
    audiences: [
      { title: "New Etsy sellers", text: "You have products but no keyword strategy, no listing structure and no ad plan." },
      { title: "Shops that plateaued", text: "Views are flat and the listing set needs a systematic SEO and photography rebuild." },
      { title: "Multi-channel makers", text: "You sell on your own site too and want Etsy managed as a proper acquisition channel." },
    ],
    process: [
      { title: "Shop and niche audit", text: "Current listings, tags, photography, reviews and competition are reviewed." },
      { title: "Keyword architecture", text: "Titles, tags, attributes and categories are mapped to real Etsy search demand." },
      { title: "Listing rebuild", text: "Copy, imagery direction, variations and pricing are reworked listing by listing." },
      { title: "Etsy Ads launch", text: "Budget is concentrated on listings that already convert, not spread evenly." },
      { title: "Off-site demand", text: "Social, email and Pinterest support the listings that carry the most margin." },
      { title: "Refresh and expand", text: "Seasonal refreshes and new listings are added on a planned calendar." },
    ],
    tools: [
      { name: "Etsy Shop Manager", text: "Listings, variations, shipping profiles, policies and stats." },
      { name: "Etsy Ads", text: "Budget allocation, listing selection and performance reporting." },
      { name: "Etsy search research", text: "Search-term demand, competition and seasonality analysis." },
      { name: "Photography direction", text: "Shot lists, styling notes and image-order guidance for every listing." },
      { name: "Print-on-demand integrations", text: "Supplier connections, mockups and fulfilment routing." },
      { name: "BifidMedia reporting", text: "Views, favourites, conversion and ad return per listing." },
    ],
    trust: [
      { title: "Search-led, not guesswork", text: "Every title and tag is chosen against measured Etsy demand." },
      { title: "Presentation matters", text: "We direct the imagery because on Etsy it is the conversion lever." },
      { title: "Budget where it converts", text: "Etsy Ads spend is concentrated, not sprinkled across the catalogue." },
    ],
    stats: [
      { value: "Search", label: "First, always", text: "Etsy visibility begins with the keyword architecture." },
      { value: "4", label: "Etsy service tracks", text: "SEO, advertising, marketing and shop automation." },
      { value: "Seasonal", label: "Refresh cycle", text: "Listings updated ahead of demand peaks, not after them." },
    ],
  },

  {
    slug: "ebay",
    key: "ebay",
    name: "eBay Store",
    shortName: "eBay",
    navLabel: "eBay Store",
    href: "/ebay",
    color: "#0064d2",
    accent: "#e53238",
    tint: "#eaf2ff",
    badge: "Global reach",
    tagline: "eBay store agency",
    heading: "eBay Store Agency for Sellers Who Want Volume and Account Safety",
    intro:
      "eBay still moves serious volume for sellers who get listing data, pricing and service metrics right. BifidMedia manages the store, rebuilds listings for Cassini, protects account health and recovers accounts when things go wrong.",
    valueLine:
      "Listings built for eBay search, service metrics kept green and volume that holds.",
    metaTitle: "eBay Store Agency | Listing, SEO & Account Management",
    metaDescription:
      "BifidMedia manages eBay stores with listing creation, eBay SEO, account health protection, feedback resolution, automation and reinstatement support.",
    image: "/images/contact/business-consultation-workspace.webp",
    imageAlt: "Seller reviewing eBay store performance metrics",
    models: [
      { title: "Fixed price at volume", text: "Multi-quantity listings with structured item specifics and disciplined pricing." },
      { title: "International selling", text: "Reach overseas buyers through eBay's global programmes and shipping options." },
      { title: "Refurbished and open box", text: "Condition-graded inventory sold within eBay's category requirements." },
    ],
    audiences: [
      { title: "High-volume sellers", text: "You need listing operations and service metrics handled at scale." },
      { title: "Sellers with restricted accounts", text: "Selling limits, defects or suspension are capping what you can move." },
      { title: "Brands adding a clearance channel", text: "You want a controlled outlet for overstock without damaging your main channel." },
    ],
    process: [
      { title: "Account health review", text: "Defect rate, late shipment rate, cases and selling limits are assessed first." },
      { title: "Listing data rebuild", text: "Titles, item specifics, categories and photos are rebuilt for eBay search." },
      { title: "Pricing and shipping", text: "Competitive pricing, handling times and postage policies are configured." },
      { title: "Promoted Listings", text: "Ad rates are set by category and margin, then tuned against sold-through data." },
      { title: "Service protection", text: "Messages, returns and cases are handled inside eBay's response windows." },
      { title: "Grow the catalogue", text: "Proven categories are expanded once metrics are stable." },
    ],
    tools: [
      { name: "eBay Seller Hub", text: "Listings, orders, performance, disputes and selling limits." },
      { name: "Promoted Listings", text: "Standard and Advanced campaigns with category-level ad-rate control." },
      { name: "Terapeak research", text: "Sold-price, sell-through and demand research before listing." },
      { name: "Bulk listing tools", text: "Large-catalogue creation, revision and scheduling." },
      { name: "Feedback and case workflow", text: "Structured resolution templates that protect service metrics." },
      { name: "BifidMedia reporting", text: "Sell-through, ad take-rate and account health in one report." },
    ],
    trust: [
      { title: "Account health first", text: "Volume is worthless if the account gets restricted. Metrics come first." },
      { title: "Item specifics done properly", text: "Cassini rewards complete structured data. We fill it in, every field." },
      { title: "Response windows respected", text: "Cases and messages are handled inside eBay's timeframes, every time." },
    ],
    stats: [
      { value: "Global", label: "Buyer reach", text: "International programmes opened once metrics support it." },
      { value: "6", label: "eBay service tracks", text: "Listing, SEO, account management, feedback, automation and reinstatement." },
      { value: "Daily", label: "Case handling", text: "Messages, returns and disputes handled inside eBay's windows." },
    ],
  },
];

export const marketplaceBySlug = Object.fromEntries(
  marketplaces.map((m) => [m.slug, m])
);

export const marketplaceSlugs = marketplaces.map((m) => m.slug);

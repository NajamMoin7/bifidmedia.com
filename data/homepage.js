import { marketplaces } from "./marketplaces";

export const hero = {
  eyebrow: "Multi-channel e-commerce agency",
  h1: "Start, Automate and Scale Your E-Commerce Store",
  lead: "BifidMedia builds, manages and grows online stores across the marketplaces that matter — so you can own a real e-commerce business without running its day-to-day operations yourself.",
  platformLinks: [
    { key: "amazon", label: "Amazon Store", href: "/amazon" },
    { key: "walmart", label: "Walmart Marketplace", href: "/walmart" },
    { key: "shopify", label: "Shopify Store", href: "/shopify" },
    { key: "tiktok", label: "TikTok Shop", href: "/tiktok-shop" },
  ],
  note: {
    text: "Not sure which service fits your goals? Get a written recommendation before you spend anything.",
    ctaLabel: "Schedule a free call",
    ctaHref: "/book-consultation",
  },
  image: "/images/home/hero-ecommerce-growth.png",
  imageAlt:
    "E-commerce operator reviewing marketplace sales, advertising and inventory dashboards",
  floatingCards: [
    { label: "Marketplaces managed", value: "6" },
    { label: "Service tracks", value: "80+" },
  ],
};

export const capabilityBand = {
  heading: "Our specialists work alongside you at every stage",
  text: "Starting an e-commerce business is straightforward. Keeping it running, compliant and growing is the hard part — and it is the part BifidMedia takes on with you.",
  ctaLabel: "Take the first step",
  ctaHref: "/get-started",
  points: [
    "Written strategy before execution",
    "One team across every channel",
    "You own the account, brand and data",
  ],
};

export const trustBar = {
  heading: "Built for the platforms and tools your business already runs on",
  items: [
    "Amazon Seller Central",
    "Walmart Seller Center",
    "Shopify & Shopify Plus",
    "TikTok Seller Center",
    "Etsy Shop Manager",
    "eBay Seller Hub",
    "Klaviyo",
    "Google Ads",
    "Meta Ads",
    "Helium 10",
  ],
};

export const solutions = {
  heading: "Our Solutions for Your Business Growth",
  text: "Pick the channel you want to launch or fix. Every one of them is run by the same team, to the same standard.",
  tiles: [
    ...marketplaces.map((m) => ({
      key: m.key,
      label: m.name,
      href: m.href,
      color: m.color,
    })),
    {
      key: "youtube",
      label: "YouTube Automation",
      href: "/business/youtube-automation",
      color: "#ff0000",
    },
  ],
};

export const stats = [
  {
    value: "6",
    label: "Marketplaces under one team",
    text: "Amazon, Walmart, Shopify, TikTok Shop, Etsy and eBay managed together rather than in silos.",
  },
  {
    value: "80+",
    label: "Documented service tracks",
    text: "From entity formation and listing creation through to DSP advertising and account reinstatement.",
  },
  {
    value: "Weekly",
    label: "Optimisation cadence",
    text: "Bids, listings, stock cover and account health are reviewed every week, not when something breaks.",
  },
];

export const problemSolution = {
  heading: "Struggling to Start or Scale Your Online Store?",
  text: "You are not alone. Whether you are launching your first store or trying to grow one that has plateaued, e-commerce gets complicated quickly without someone owning the detail.",
  problems: [
    {
      title: "You do not know where to begin",
      text: "Entity, account, product, listings, advertising, logistics — the order matters, and getting it wrong is expensive to unwind.",
    },
    {
      title: "Your store has stopped growing",
      text: "You are running ads, handling orders and answering customers, but the numbers have flattened and you cannot see why.",
    },
    {
      title: "You are doing everything yourself",
      text: "The business only moves when you are working on it, which caps how large it can ever get.",
    },
  ],
  solution: {
    title: "BifidMedia runs it with you",
    text: "We build and manage your store across Amazon, Walmart, Shopify, TikTok Shop, eBay and Etsy — setup, listings, advertising, inventory, compliance and reporting.",
    subText:
      "You keep ownership and the decisions that matter. We take the operational load and report on what actually changed.",
    ctaLabel: "Get started",
    ctaHref: "/get-started",
  },
};

export const platformShowcase = {
  heading: "We Build and Manage Stores on These E-Commerce Platforms",
  text: "BifidMedia helps you launch and grow on the platforms where your customers already shop. Whether you are starting fresh or improving an existing store, the same team handles the build, the management and the growth.",
};

export const process = {
  heading: "Here's How Your E-Commerce Journey Starts With Us",
  text: "Whether you are launching or scaling on Amazon, Shopify, TikTok Shop, Etsy or elsewhere, the sequence is the same — and you always know which step you are on.",
  steps: [
    {
      title: "Discovery and strategy",
      text: "We start with your goals, capital and timeline, then write the plan and the numbers we are steering toward.",
    },
    {
      title: "Store setup and branding",
      text: "Entity, accounts, brand assets and storefront are built on the platform that actually suits your model.",
    },
    {
      title: "Full store management",
      text: "Product research, listings, advertising, inventory and customer operations are run by your named team.",
    },
    {
      title: "Scaling and optimisation",
      text: "Once the store is live, we test and improve it weekly against traffic, conversion and contribution margin.",
    },
    {
      title: "Reporting and expansion",
      text: "You get a monthly report and a decision on where the next increment of growth is coming from.",
    },
  ],
  cta: {
    title: "Your e-commerce business starts here.",
    ctaLabel: "Get started",
    ctaHref: "/get-started",
  },
};

export const capabilities = {
  heading: "How BifidMedia Builds and Grows Your Store",
  text: "Building a store is the first step. Everything after it — getting orders out, keeping customers happy, and improving the numbers month over month — is where the work actually is.",
  tabs: [
    {
      id: "llc",
      label: "Business Formation",
      title: "A legal foundation you can build on",
      body: [
        "We set up the entity, obtain your EIN, arrange a registered agent and assemble the documentation every marketplace, bank and payment processor will eventually ask for.",
        "That means account verification passes the first time, and you are not scrambling for paperwork the week you want to launch.",
      ],
      href: "/business/business-formation",
      image: "/images/business/ecommerce-consultation-team.webp",
      imageAlt: "Team working through a business formation checklist",
    },
    {
      id: "store",
      label: "Store Setup & Development",
      title: "A storefront built to convert, not just to exist",
      body: [
        "We build your Shopify storefront with mobile-first templates, clean theme code and a disciplined app stack, so pages load fast and your team can edit them without a developer.",
        "Payment, shipping, tax and analytics are configured properly at launch — the parts that are painful to retrofit later.",
      ],
      href: "/shopify/store-development",
      image: "/images/shopify/shopify-store-development.webp",
      imageAlt: "Designer reviewing a Shopify storefront layout",
    },
    {
      id: "marketplace",
      label: "Marketplace Setup",
      title: "Seller accounts opened and listed correctly",
      body: [
        "We handle seller registration, verification, category approvals and storefront build across Amazon, Walmart, TikTok Shop, Etsy and eBay.",
        "Listings are created to each platform's own requirements rather than copied between them, because the ranking signals are genuinely different.",
      ],
      href: "/amazon/account-setup",
      image: "/images/walmart/marketplace-management-team.webp",
      imageAlt: "Team reviewing marketplace listing performance",
    },
    {
      id: "research",
      label: "Product Research & Sourcing",
      title: "Know the numbers before you buy the stock",
      body: [
        "Demand, competition, seasonality and landed cost are modelled for every candidate product, including freight, duty, platform fees and returns.",
        "Then suppliers are vetted, negotiated with and sampled, so your first purchase order is a decision rather than a gamble.",
      ],
      href: "/amazon/product-research",
      image: "/images/amazon/amazon-analytics-dashboard.webp",
      imageAlt: "Analytics dashboard used for product and market research",
    },
    {
      id: "inventory",
      label: "Inventory Management",
      title: "Stock that supports growth instead of constraining it",
      body: [
        "Rolling demand forecasts, cover-days monitoring and reorder planning keep products available without funding a warehouse of dead stock.",
        "Slow movers are flagged early and cleared before storage and aged-inventory fees start compounding.",
      ],
      href: "/amazon/inventory-management",
      image: "/images/amazon/amazon-analytics-dashboard.webp",
      imageAlt: "Inventory and sales performance dashboard",
    },
    {
      id: "seo",
      label: "E-Commerce SEO",
      title: "Organic visibility on every channel you sell through",
      body: [
        "Amazon, Walmart, Etsy and eBay each rank differently, and Google ranks your own store differently again. We build the keyword architecture for each one separately.",
        "Complete structured data, honest titles and improving conversion are what actually move placement — in that order.",
      ],
      href: "/shopify/seo",
      image: "/images/shopify/shopify-store-development.webp",
      imageAlt: "Reviewing organic search performance for an online store",
    },
    {
      id: "ads",
      label: "Advertising & Paid Media",
      title: "Spend judged on contribution, not on a flattering metric",
      body: [
        "Sponsored campaigns on marketplaces, plus Meta, Google and TikTok for your own store — built with structure you can actually steer.",
        "Bids and placements are reviewed weekly, and performance is reported against total advertising cost of sale and margin.",
      ],
      href: "/amazon/ppc-advertising",
      image: "/images/home/hero-ecommerce-growth.png",
      imageAlt: "Advertising performance dashboards for an e-commerce business",
    },
    {
      id: "fulfilment",
      label: "Fulfilment & Logistics",
      title: "Orders that arrive on time, at a cost you modelled",
      body: [
        "FBA, merchant-fulfilled and third-party logistics options are modelled per SKU, then configured, integrated and monitored.",
        "On-time delivery, late shipment and cancellation metrics are tracked continuously because they decide your buy box.",
      ],
      href: "/amazon/order-fulfillment",
      image: "/images/walmart/marketplace-management-team.webp",
      imageAlt: "Logistics and fulfilment planning session",
    },
    {
      id: "lifecycle",
      label: "Email & SMS Marketing",
      title: "Automated flows that carry repeat revenue",
      body: [
        "Welcome, browse abandonment, cart, checkout, post-purchase and win-back flows are built, tested and maintained.",
        "Campaigns sit on top of that as a planned calendar, with deliverability and list health actively managed.",
      ],
      href: "/shopify/store-marketing",
      image: "/images/contact/business-consultation-workspace.webp",
      imageAlt: "Planning an email and SMS lifecycle programme",
    },
    {
      id: "cro",
      label: "Store Optimisation",
      title: "Continuous improvement, measured honestly",
      body: [
        "We instrument the funnel, find where it leaks and run a prioritised test backlog against conversion rate and average order value.",
        "Tests run to significance and get documented — including the ones that fail, which is most of the value.",
      ],
      href: "/shopify/cro",
      image: "/images/shopify/shopify-store-development.webp",
      imageAlt: "Reviewing conversion rate optimisation results",
    },
    {
      id: "reputation",
      label: "Customer & Reputation",
      title: "Ratings protected by fixing causes",
      body: [
        "Buyer messages, returns, feedback and claims are handled inside each platform's response window, every day.",
        "Recurring complaints are traced back to listings, packaging or carriers and fixed at source rather than answered repeatedly.",
      ],
      href: "/amazon/reputation-management",
      image: "/images/contact/business-consultation-workspace.webp",
      imageAlt: "Customer support and reputation management workflow",
    },
    {
      id: "reporting",
      label: "Analytics & Reporting",
      title: "One report, built around your decisions",
      body: [
        "Advertising, sales, inventory and settlement data are consolidated into contribution margin per product and per channel.",
        "You get a short weekly summary and a full monthly review — reporting that changes what you do next.",
      ],
      href: "/amazon/customized-report",
      image: "/images/amazon/amazon-analytics-dashboard.webp",
      imageAlt: "Consolidated e-commerce reporting dashboard",
    },
  ],
};

export const featureSplits = [
  {
    id: "passive",
    heading: "Build a Business That Does Not Depend on Your Hours",
    body: [
      "BifidMedia takes on the recurring work that keeps a store running: supplier communication, listing maintenance, advertising management, stock planning and customer operations.",
      "You stay in control of pricing, capital and product decisions. We handle everything that would otherwise fill your calendar.",
    ],
    ctaLabel: "Get started",
    ctaHref: "/get-started",
    image: "/images/business/ecommerce-consultation-team.webp",
    imageAlt: "BifidMedia specialists planning an e-commerce growth roadmap",
    overlay: {
      title: "Written plan first",
      text: "Before any execution begins, you receive the strategy, the priorities and the numbers we are steering toward.",
    },
    imageFirst: true,
  },
  {
    id: "scale",
    heading: "Automate the Operations, Keep the Ownership",
    body: [
      "Running a store across several marketplaces means dozens of small recurring decisions. We document them, systemise what can be systemised and staff the rest with people who do it every day.",
      "The result is a managed business across Amazon, Shopify, Walmart, TikTok Shop and more — with you making the decisions that actually need you.",
    ],
    ctaLabel: "Book a consultation",
    ctaHref: "/book-consultation",
    image: "/images/contact/business-consultation-workspace.webp",
    imageAlt: "Reviewing multi-channel e-commerce performance together",
    overlay: {
      title: "You own everything",
      text: "Account, brand, trademark, inventory, customer data and creative assets remain entirely yours.",
    },
    imageFirst: false,
  },
];

export const whyChoose = {
  heading: "Why BifidMedia Is the Sensible Choice for Your E-Commerce Business",
  points: [
    {
      title: "Done with you, not done to you",
      text: "We run the operation and report on it. You keep ownership, pricing control and every decision that changes your risk.",
    },
    {
      title: "No experience required",
      text: "You do not need to learn Seller Central, Ads Manager or Liquid. That is what the team is for.",
    },
    {
      title: "Specialists, not generalists",
      text: "The people on your account work on these platforms every day and nothing else.",
    },
  ],
  badges: [
    "Written strategy before execution",
    "Compliant methods only",
    "Transparent, traceable reporting",
  ],
};

export const comparison = {
  heading: "BifidMedia vs. Doing It Yourself",
  columns: [
    {
      title: "With BifidMedia",
      positive: true,
      rows: [
        ["Expertise", "A team that works on these platforms daily, so mistakes are avoided rather than learned from."],
        ["Strategy", "A written plan with priorities, budgets and targets before anything is executed."],
        ["Operations", "Listings, ads, inventory, compliance and customer operations handled on a fixed cadence."],
        ["Reporting", "Consolidated contribution margin per product and channel, monthly."],
        ["Speed", "Setup, launch and optimisation run in parallel instead of sequentially."],
      ],
    },
    {
      title: "Going it alone",
      positive: false,
      rows: [
        ["Expertise", "Every platform rule is learned through the mistake that taught it to you."],
        ["Strategy", "Months of trial and error building an approach with no guarantee it works."],
        ["Operations", "The work only happens when you have time, so it happens inconsistently."],
        ["Reporting", "Platform dashboards that show revenue but not what you actually kept."],
        ["Speed", "One task at a time, with the business paused whenever life intervenes."],
      ],
    },
  ],
};

export const revenueStreams = {
  heading: "Why a Second Revenue Stream Matters",
  text: "Depending on one income source limits both security and growth. A managed e-commerce business adds a second line that does not require your presence to keep operating.",
  cards: [
    {
      title: "Financial resilience",
      text: "More than one income source means a slow month in one channel does not put the whole business at risk.",
    },
    {
      title: "Business stability",
      text: "Multi-channel selling protects you from a single platform's policy change, fee increase or algorithm shift.",
    },
    {
      title: "Compounding growth",
      text: "Each channel you add makes the next one cheaper to launch, because the catalogue, brand and operations already exist.",
    },
  ],
};

export const newsletter = {
  heading: "Practical e-commerce guidance, once a month",
  text: "Marketplace policy changes, advertising benchmarks and operational playbooks — written for people running stores, not for a newsletter metric.",
  points: [
    "No more than one email a month",
    "Unsubscribe in one click",
    "We never sell or share your address",
  ],
  image: "/images/business/ecommerce-consultation-team.webp",
  imageAlt: "BifidMedia team preparing e-commerce guidance",
};

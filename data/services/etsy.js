import { buildServices, categoryIndex } from "./builder";

const categories = [
  {
    id: "visibility",
    title: "Search & Listings",
    description: "Be found by the buyers already searching for what you make.",
    problemsHeading: "Why Etsy listings get so few views",
    problems: [
      ["Tags chosen by intuition", "Titles, tags and attributes are built from measured Etsy search demand."],
      ["All thirteen tags not used", "Every tag slot is filled with a distinct, relevant multi-word phrase."],
      ["Listings never refreshed", "A refresh schedule keeps the catalogue aligned with seasonal demand."],
      ["Photography that undersells", "Image order and styling are directed because on Etsy they carry the conversion."],
    ],
  },
  {
    id: "growth",
    title: "Advertising & Marketing",
    description: "Spend where it converts and build demand off-platform too.",
    problemsHeading: "Where Etsy sellers waste money",
    problems: [
      ["Etsy Ads spread across everything", "Budget is concentrated on listings that already convert."],
      ["Budget set and forgotten", "Spend and listing selection are reviewed against return every week."],
      ["No off-platform demand", "Pinterest, email and social bring traffic Etsy does not have to allocate."],
      ["Offsite Ads misunderstood", "The mandatory fee structure is modelled into pricing rather than resented after the fact."],
    ],
  },
  {
    id: "operations",
    title: "Shop Operations",
    description: "Run the shop without it running you.",
    problemsHeading: "What consumes an Etsy seller's week",
    problems: [
      ["Manual listing admin", "Bulk editing, templates and variation structures cut the repetitive work."],
      ["Order and production chaos", "Order flow, production queue and dispatch are given a system."],
      ["Slow message response", "Message templates and a response routine protect your shop's standing."],
      ["Review issues left unanswered", "A structured response and resolution process protects your rating."],
    ],
  },
];

const specs = [
  {
    slug: "seo",
    category: "visibility",
    name: "Etsy SEO",
    nav: "Rank for the searches your buyers actually use",
    h1: "Etsy SEO Services",
    intro:
      "Etsy visibility begins and ends with the keyword architecture behind your listings. BifidMedia researches real Etsy search demand and rebuilds titles, tags, attributes and categories so your listings are eligible for the searches that matter.",
    value: "A keyword architecture built on measured Etsy demand, applied listing by listing.",
    badge: "Start here",
    offerings: [
      ["Etsy keyword research", "Search demand, competition and seasonality are researched on Etsy specifically."],
      ["Title optimisation", "Titles lead with the phrase buyers actually search, not a poetic product name."],
      ["Tag strategy", "All thirteen tags are used with distinct multi-word phrases rather than near-duplicates."],
      ["Attributes and categories", "Attributes are completed fully because Etsy uses them as ranking and filter signals."],
      ["Listing quality signals", "Photos, pricing, shipping and reviews are reviewed because they influence placement."],
      ["Refresh schedule", "Listings are updated ahead of seasonal peaks rather than during them."],
    ],
    faqs: [
      ["How long does Etsy SEO take?", "Views often move within two to four weeks; competitive phrases take longer."],
      ["Does renewing listings help ranking?", "Marginally and briefly. Getting the keyword architecture right matters far more."],
      ["How many listings should I have?", "Enough to cover genuine variation in search demand. Duplicating the same product with different titles does not help."],
      ["Do tags and titles need to match?", "They should reinforce each other. Exact-phrase alignment between title and tags helps."],
      ["Can you optimise a large catalogue?", "Yes, prioritised by current traffic and margin, working down the list."],
    ],
  },
  {
    slug: "advertising",
    category: "growth",
    name: "Etsy Advertising",
    nav: "Etsy Ads managed against return, not spread evenly",
    h1: "Etsy Ads Management Services",
    intro:
      "Etsy Ads work when budget is concentrated on listings that already convert, and waste money when it is spread across the catalogue. BifidMedia selects the listings, sets the budget and reviews performance weekly.",
    value: "Etsy Ads concentrated where they convert, reviewed weekly against return.",
    offerings: [
      ["Listing selection", "Only listings with proven conversion receive advertising budget."],
      ["Budget strategy", "Daily budget is set against realistic return expectations for your category."],
      ["Performance review", "Spend, views, orders and return are reviewed weekly and reallocated."],
      ["Offsite Ads modelling", "The mandatory offsite fee is modelled into pricing so it is not a surprise."],
      ["Seasonal scaling", "Budget increases ahead of demand peaks and pulls back afterwards."],
      ["Listing improvement loop", "Ad data feeds back into listing copy, imagery and pricing."],
    ],
    faqs: [
      ["What return should I expect from Etsy Ads?", "It varies enormously by category and price point. We establish a baseline before scaling spend."],
      ["Can I opt out of Offsite Ads?", "Only below Etsy's revenue threshold. Above it, participation is mandatory and must be priced in."],
      ["Should I advertise every listing?", "No. That is the most common and most expensive mistake."],
      ["How much budget do I need?", "Enough to gather meaningful data on your selected listings — usually modest to start."],
      ["Do ads improve organic ranking?", "Not directly, but the sales and conversion they generate can support organic placement."],
    ],
  },
  {
    slug: "marketing",
    category: "growth",
    name: "Etsy Marketing",
    nav: "Off-platform demand through Pinterest, email and social",
    h1: "Etsy Shop Marketing Services",
    intro:
      "Relying only on Etsy search caps your shop at whatever traffic Etsy chooses to send. BifidMedia builds demand you control — Pinterest, email, social and content — and routes it to listings that convert.",
    value: "Traffic you own, driven to listings that are ready to convert it.",
    offerings: [
      ["Pinterest programme", "Pin design, board structure and scheduling built around your product categories."],
      ["Email marketing", "List building and campaigns for launches, restocks and seasonal offers."],
      ["Social content", "A realistic content plan for the platforms where your buyers actually are."],
      ["Seasonal campaigns", "Gifting and seasonal peaks are planned months ahead."],
      ["Brand storytelling", "Shop About, policies and listing copy are written to build trust in the maker."],
      ["Attribution", "Off-platform traffic is tagged so you can see what is genuinely working."],
    ],
    faqs: [
      ["Does Pinterest still work for Etsy?", "For visual and gifting categories, it remains one of the best sources of durable, low-cost traffic."],
      ["Can I build an email list from Etsy?", "Etsy restricts direct marketing use of buyer data, so lists are built through inserts and your own channels."],
      ["Should I have my own website too?", "Eventually, yes — it gives you a channel that no marketplace policy can change."],
      ["How long does off-platform marketing take?", "Pinterest compounds over months; email works as soon as the list has size."],
      ["Do you create the content?", "Yes, including pin design, email copy and social assets."],
    ],
  },
  {
    slug: "automation",
    category: "operations",
    name: "Etsy Automation",
    nav: "Systemise listings, orders, production and messages",
    h1: "Etsy Shop Automation Services",
    intro:
      "The admin around an Etsy shop expands to fill whatever time you give it. BifidMedia puts systems around listing management, order flow, production queues and buyer messaging so the shop takes far less of your week.",
    value: "Systems around the repetitive work, so your time goes into product and growth.",
    offerings: [
      ["Listing templates", "Reusable templates and bulk editing cut the time to publish new products."],
      ["Order workflow", "Order intake, production queue and dispatch follow a documented process."],
      ["Print-on-demand integration", "POD suppliers are connected so orders route and fulfil automatically."],
      ["Message templates", "Common buyer questions are answered from templates within response windows."],
      ["Inventory and variation management", "Variations and stock are structured so they can be maintained in bulk."],
      ["Reporting", "Views, conversion, ad return and margin per listing reported monthly."],
    ],
    faqs: [
      ["Can Etsy orders be automated?", "The routing, fulfilment handoff and messaging can. Handmade production obviously cannot."],
      ["Does automation work with print on demand?", "Yes, POD is the most fully automatable Etsy model."],
      ["Will automated messages feel impersonal?", "Templates are a starting point, not a script. Personal responses still matter on Etsy."],
      ["What tools do you use?", "Etsy's own bulk tools plus integrations suited to your model; we avoid adding subscriptions that do not pay for themselves."],
      ["Can you run the shop for me?", "Yes, day-to-day management is available as an ongoing retainer."],
    ],
  },
];

export const etsyCategories = categories;
export const etsyServices = buildServices("etsy", "/etsy", categories, specs);
export const etsyServiceIndex = categoryIndex(categories, etsyServices);

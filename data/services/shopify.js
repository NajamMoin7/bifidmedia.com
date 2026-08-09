import { buildServices, categoryIndex } from "./builder";

const categories = [
  {
    id: "build",
    title: "Design & Development",
    description: "Build a storefront that is fast, on-brand and maintainable.",
    problemsHeading: "Why most Shopify builds disappoint",
    problems: [
      ["Theme bought, never adapted", "Templates are rebuilt around your range, your customers and your buying journey."],
      ["Apps stacked until the site crawls", "App usage is audited; anything that can be built into the theme is built into the theme."],
      ["Desktop-first design", "Every template is designed and tested mobile-first, where most of your traffic is."],
      ["Nobody can maintain it afterwards", "Clean, documented sections mean your team can edit without a developer."],
    ],
  },
  {
    id: "growth",
    title: "Traffic & Conversion",
    description: "Bring the right people in, and convert more of the ones already there.",
    problemsHeading: "Why traffic does not turn into revenue",
    problems: [
      ["Traffic bought before conversion is fixed", "Conversion work comes first so media spend is not funding a leaking funnel."],
      ["Analytics that cannot be trusted", "Events, attribution and reporting are rebuilt before any test is judged on them."],
      ["Opinion-led design changes", "Changes run as tracked tests against conversion rate and average order value."],
      ["Product pages that leave questions open", "PDP content is rebuilt around the objections that actually stop the purchase."],
    ],
  },
  {
    id: "lifecycle",
    title: "Lifecycle & Operations",
    description: "Keep customers coming back and take the manual work out of the store.",
    problemsHeading: "Where store revenue quietly leaks",
    problems: [
      ["Email limited to broadcasts", "Automated flows carry the revenue; campaigns become the supplement, not the strategy."],
      ["Abandoned journeys unrecovered", "Browse, cart and checkout abandonment flows are built and tested."],
      ["One-time buyers never return", "Post-purchase and win-back sequences are built around actual repeat cycles."],
      ["Manual fulfilment admin", "Order routing, inventory sync and supplier workflows are automated."],
    ],
  },
];

const specs = [
  {
    slug: "store-design",
    category: "build",
    name: "Shopify Store Design",
    nav: "Brand-led storefront design built to convert",
    h1: "Shopify Store Design Services",
    intro:
      "A Shopify store has seconds to establish credibility. BifidMedia designs storefronts that look considered, navigate cleanly and are built mobile-first around how your customers actually choose.",
    value: "A storefront that establishes credibility fast and guides the shopper to a decision.",
    offerings: [
      ["Brand and UX discovery", "Positioning, audience and competitive set inform the design direction before layouts start."],
      ["Wireframes and templates", "Home, collection, product, cart and checkout journeys are designed as a system."],
      ["Mobile-first visual design", "Every template is designed at mobile width first, then expanded."],
      ["Design system", "Components, typography and spacing are documented so the store stays consistent."],
      ["Accessibility", "Contrast, focus states, semantics and keyboard navigation are built in, not retrofitted."],
      ["Handover", "Editable sections and documentation so your team can update pages without a developer."],
    ],
    faqs: [
      ["Do you use a premium theme or build custom?", "Whichever serves you better. A well-chosen theme, properly adapted, is often faster and cheaper than custom."],
      ["How long does a design project take?", "Typically four to eight weeks from discovery to launch, depending on template count."],
      ["Will the site be fast?", "Speed is a design constraint from the start — image strategy, app discipline and section structure all feed into it."],
      ["Can you match our existing brand?", "Yes, and we will tell you where the existing brand is working against conversion."],
      ["Do you handle content?", "We write and structure the on-site copy; product descriptions can be included in scope."],
    ],
  },
  {
    slug: "store-development",
    category: "build",
    name: "Shopify Store Development",
    nav: "Theme development, integrations and custom functionality",
    h1: "Shopify Store Development Services",
    intro:
      "Behind every good storefront is code someone has to maintain. BifidMedia builds Shopify themes with clean, documented sections, integrates the systems you already run and keeps the app stack disciplined.",
    value: "A maintainable Shopify build with clean code, real integrations and a controlled app stack.",
    offerings: [
      ["Theme development", "Custom sections and blocks built on Online Store 2.0 so pages stay editable."],
      ["App audit and rationalisation", "Redundant and slow apps are removed or replaced with native functionality."],
      ["Systems integration", "ERP, 3PL, subscription, review and CRM systems are connected properly."],
      ["Migration", "Products, customers, orders, content and URLs are migrated with redirects mapped."],
      ["Performance work", "Image strategy, script loading and Core Web Vitals are addressed as part of the build."],
      ["QA and launch", "Cross-device and cross-browser testing, then a launch checklist that includes rollback."],
    ],
    faqs: [
      ["Can you migrate from WooCommerce or Magento?", "Yes, including catalogue, customers, order history and a full URL redirect map."],
      ["Do you build on Shopify Plus?", "Yes, including checkout extensibility, Functions and B2B where the plan supports it."],
      ["Will I be locked into your team?", "No. Code is documented and handed over; that is deliberate."],
      ["How do you handle app costs?", "We audit them. Removing three redundant subscriptions often pays for a chunk of the build."],
      ["Do you offer ongoing development?", "Yes, on a retained basis with a prioritised backlog."],
    ],
  },
  {
    slug: "cro",
    category: "growth",
    name: "Shopify CRO",
    nav: "Structured testing against conversion rate and order value",
    h1: "Shopify Conversion Rate Optimization Services",
    intro:
      "Conversion optimisation is a research and testing discipline, not a list of best practices. BifidMedia instruments the funnel, finds where it leaks and runs a prioritised test backlog against conversion rate and average order value.",
    value: "A continuous, prioritised test programme judged on conversion and order value.",
    offerings: [
      ["Analytics instrumentation", "Events, funnels and attribution are rebuilt so results can be trusted."],
      ["Qualitative research", "Session recordings, heatmaps and customer surveys show where intent breaks down."],
      ["Funnel analysis", "Drop-off is quantified at collection, product, cart and checkout."],
      ["Test backlog", "Hypotheses are prioritised by expected impact, confidence and effort."],
      ["A/B testing", "Tests are run to significance and documented, including the ones that fail."],
      ["Average order value work", "Bundles, thresholds and post-purchase offers are tested alongside conversion."],
    ],
    faqs: [
      ["How much traffic do I need to test?", "Enough for significance within a reasonable window. Below that we use sequential changes with careful before-and-after measurement."],
      ["How long does a test run?", "Usually two to four weeks, covering full weekly cycles."],
      ["What uplift should I expect?", "Compounding single-digit improvements are the realistic pattern. Anyone promising a doubling is guessing."],
      ["Do you test checkout?", "On Plus, yes. On standard plans the checkout is more constrained, so we focus upstream."],
      ["Do you report failed tests?", "Always. Knowing what does not work is most of the value."],
    ],
  },
  {
    slug: "seo",
    category: "growth",
    name: "Shopify SEO",
    nav: "Technical, content and commercial SEO for Shopify stores",
    h1: "Shopify SEO Services",
    intro:
      "Organic search is the cheapest durable traffic a store can own. BifidMedia handles Shopify's technical quirks, builds a collection and content architecture around commercial intent, and earns the authority to rank for it.",
    value: "Durable organic traffic built on clean technical foundations and commercial-intent content.",
    offerings: [
      ["Technical audit", "Crawl, index, duplicate collection URLs, pagination and Core Web Vitals are addressed."],
      ["Keyword and intent mapping", "Terms are mapped to collections, products and content by commercial intent."],
      ["Collection architecture", "Collections are structured to capture category-level search demand."],
      ["On-page optimisation", "Titles, headings, descriptions and internal linking are built out systematically."],
      ["Structured data", "Product, review, FAQ and breadcrumb schema are implemented correctly."],
      ["Content programme", "Buying guides and comparison content are produced against real search demand."],
    ],
    faqs: [
      ["How long does Shopify SEO take?", "Technical fixes can move things in weeks; competitive rankings usually take three to six months."],
      ["What are Shopify's common SEO problems?", "Duplicate product URLs across collections, thin collection pages, unmanaged pagination and bloated theme JavaScript."],
      ["Do I need a blog?", "You need content that matches commercial search intent. Sometimes that is a blog, often it is better collection and guide pages."],
      ["Will SEO replace my ads?", "It reduces dependence on them. Most healthy stores run both."],
      ["How is progress reported?", "Rankings, organic sessions and organic revenue, monthly."],
    ],
  },
  {
    slug: "store-advertising",
    category: "growth",
    name: "Shopify Store Advertising",
    nav: "Paid media across Meta, Google, TikTok and Pinterest",
    h1: "Shopify Advertising and Paid Media Services",
    intro:
      "Paid media on your own store is judged on blended contribution, not platform-reported return. BifidMedia builds the account structure, produces the creative and manages spend against numbers that survive contact with your P&L.",
    value: "Paid media managed against blended contribution, with creative treated as the main lever.",
    offerings: [
      ["Channel strategy", "Budget is allocated across Meta, Google, TikTok and Pinterest by role, not by habit."],
      ["Account build", "Campaign structure, audiences, feeds and exclusions are built from scratch where needed."],
      ["Creative production", "Static, video and UGC-style creative is produced in testable batches."],
      ["Feed management", "Product feeds are optimised for Shopping and catalogue campaigns."],
      ["Measurement", "Server-side events, blended reporting and incrementality checks are configured."],
      ["Scaling discipline", "Budget increases follow proven creative and audience combinations, not impatience."],
    ],
    faqs: [
      ["What budget do I need to start?", "Enough to generate statistically meaningful learning in your category — we size it before launch rather than guessing."],
      ["How do you measure success?", "Blended contribution margin and new-customer acquisition cost, cross-checked against platform reporting."],
      ["Do you produce creative?", "Yes, and it is usually the highest-leverage part of the work."],
      ["Which channel should I start with?", "Usually the one with existing demand capture, then prospecting. It depends on your category and margin."],
      ["Do you handle attribution?", "Yes, including server-side events and a blended view that does not double-count."],
    ],
  },
  {
    slug: "store-marketing",
    category: "lifecycle",
    name: "Shopify Store Marketing",
    nav: "Email, SMS and lifecycle flows that carry repeat revenue",
    h1: "Shopify Email, SMS and Lifecycle Marketing",
    intro:
      "For most stores, automated flows quietly out-earn campaigns. BifidMedia builds the lifecycle programme — welcome, abandonment, post-purchase, win-back — and runs the campaign calendar on top of it.",
    value: "A lifecycle programme where automated flows carry the revenue and campaigns add to it.",
    offerings: [
      ["Platform setup", "Klaviyo, Omnisend or your existing platform is configured with clean data and consent handling."],
      ["Core flow build", "Welcome, browse abandonment, cart, checkout, post-purchase and win-back flows are built."],
      ["Segmentation", "Segments are built on behaviour and value rather than a single list."],
      ["Campaign calendar", "Launches, seasons and offers are planned as a schedule, not decided each Friday."],
      ["Deliverability", "Authentication, list hygiene and sending reputation are actively managed."],
      ["SMS programme", "Compliant SMS is added where it earns its place alongside email."],
    ],
    faqs: [
      ["How much revenue should email drive?", "For most stores a meaningful double-digit share. If yours is far below that, the flows are usually the reason."],
      ["Which platform do you recommend?", "Klaviyo for most Shopify stores, but we will work with what you already run if it is doing the job."],
      ["How many flows do I need?", "Six core flows cover the majority of the opportunity. Beyond that, returns diminish quickly."],
      ["Is SMS worth adding?", "For time-sensitive offers and replenishment, often yes — provided consent and frequency are handled properly."],
      ["Do you write the content?", "Yes, copy and design for both flows and campaigns."],
    ],
  },
  {
    slug: "dropshipping",
    category: "lifecycle",
    name: "Shopify Dropshipping",
    nav: "Test demand with supplier-fulfilled products before buying stock",
    h1: "Shopify Dropshipping Services",
    intro:
      "Dropshipping is a way to test demand cheaply, not a shortcut to a business. BifidMedia builds dropshipping stores with vetted suppliers, honest delivery expectations and a route to holding your own stock once something proves out.",
    value: "A low-capital way to validate demand, with a written plan for what happens when it works.",
    offerings: [
      ["Niche and product validation", "Demand and competition are checked before a store is built around a category."],
      ["Supplier vetting", "Suppliers are assessed on fulfilment speed, quality consistency and communication."],
      ["Store build", "A credible, fast storefront is built with honest shipping and returns policies."],
      ["Fulfilment automation", "Order routing, tracking sync and inventory updates are automated."],
      ["Traffic testing", "Controlled paid tests establish whether demand exists at a viable acquisition cost."],
      ["Transition planning", "Winning products get a plan to move to held inventory or private label."],
    ],
    faqs: [
      ["Is dropshipping still viable?", "As a validation method, yes. As a long-term model with thin margins and long delivery times, it is difficult."],
      ["What margins are realistic?", "Lower than held inventory, and they must still cover acquisition cost. We model it before launch."],
      ["How do you handle long shipping times?", "By stating them honestly on-site and prioritising suppliers with domestic or regional fulfilment."],
      ["When should I hold inventory instead?", "As soon as a product shows repeatable demand — margin and delivery speed both improve immediately."],
      ["Do you guarantee results?", "No. We will tell you what the test showed, including when the answer is that the product does not work."],
    ],
  },
  {
    slug: "automation",
    category: "lifecycle",
    name: "Shopify Automation",
    nav: "Automate operations, reporting and repetitive store admin",
    h1: "Shopify Automation Services",
    intro:
      "Every hour spent on repetitive store admin is an hour not spent on growth. BifidMedia automates order routing, inventory sync, reporting and customer workflows so the store runs with far less manual intervention.",
    value: "Automated operations and reporting, so the store needs oversight rather than operation.",
    offerings: [
      ["Process mapping", "Current manual work is documented before anything is automated."],
      ["Order and fulfilment automation", "Routing, tagging, splitting and 3PL handoff are automated with exception handling."],
      ["Inventory synchronisation", "Stock is kept aligned across Shopify, marketplaces and your warehouse."],
      ["Customer service workflows", "Helpdesk macros, order lookups and returns workflows are configured."],
      ["Reporting automation", "Scheduled reports on revenue, margin, cohorts and channel performance."],
      ["Shopify Flow build", "Native Flow automations are built where they replace an app or a person."],
    ],
    faqs: [
      ["What can realistically be automated?", "Order routing, tagging, inventory sync, reporting, review requests, returns intake and most repetitive admin."],
      ["Do I need Shopify Plus?", "Flow is available beyond Plus now, but Plus unlocks deeper automation and checkout control."],
      ["Will automation break during peak?", "Not if exception handling is built in from the start, which is the part most implementations skip."],
      ["Can you connect to my ERP?", "Yes, either through native connectors or middleware, depending on the system."],
      ["Do you maintain the automations?", "Yes, on a retainer, including reviewing them when the store changes."],
    ],
  },
];

export const shopifyCategories = categories;
export const shopifyServices = buildServices("shopify", "/shopify", categories, specs);
export const shopifyServiceIndex = categoryIndex(categories, shopifyServices);

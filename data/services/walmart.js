import { buildServices, categoryIndex } from "./builder";

const categories = [
  {
    id: "visibility",
    title: "Search & Visibility",
    description: "Get found inside Walmart search before you spend on media.",
    problemsHeading: "Why Walmart listings stay invisible",
    problems: [
      ["Incomplete item data", "Every required and recommended attribute is completed so the item is eligible to rank."],
      ["Titles copied from Amazon", "Copy is rewritten to Walmart's own title conventions and character limits."],
      ["Low listing quality score", "Content, offer, ratings and post-purchase scores are worked on individually."],
      ["No keyword research", "Terms are researched against Walmart search demand, which differs from Amazon's."],
    ],
  },
  {
    id: "growth",
    title: "Advertising & Growth",
    description: "Paid media and marketing that turn visibility into orders.",
    problemsHeading: "Where Walmart ad budget gets wasted",
    problems: [
      ["Auto campaigns left running", "Automatic campaigns are used for discovery only, then harvested into controlled manual campaigns."],
      ["Bids not tied to margin", "Bid ceilings are set from contribution margin per item, not a flat account-wide target."],
      ["Ads pointing at weak listings", "Listing quality is fixed before spend is increased on an item."],
      ["Buy box lost mid-campaign", "Buy box share is monitored because ads do not serve when you lose it."],
    ],
  },
  {
    id: "operations",
    title: "Operations & Automation",
    description: "Keep the channel running without adding headcount.",
    problemsHeading: "What makes Walmart operationally heavy",
    problems: [
      ["Manual item maintenance", "Bulk feeds and templates replace item-by-item editing."],
      ["Order and shipping errors", "Shipping templates, carriers and cut-offs are configured to protect on-time delivery."],
      ["Unmonitored performance metrics", "Scorecard metrics are reviewed weekly so problems are caught before they cap growth."],
      ["No repricing discipline", "Rules-based repricing operates inside floors you approve."],
    ],
  },
];

const specs = [
  {
    slug: "seo",
    category: "visibility",
    name: "Walmart SEO",
    nav: "Rank inside Walmart search with complete, researched item data",
    h1: "Walmart Marketplace SEO Services",
    intro:
      "Walmart's search engine leans heavily on structured item data and listing quality, which makes it very fixable. BifidMedia rebuilds titles, attributes and content against researched Walmart demand so items become eligible to rank.",
    value: "Complete item data, researched keywords and a rising listing quality score.",
    offerings: [
      ["Walmart keyword research", "Search demand is researched on Walmart itself rather than transplanted from another marketplace."],
      ["Title and description rewrite", "Copy follows Walmart's own conventions for structure, length and attribute placement."],
      ["Attribute completion", "Required and recommended attributes are filled in, which is the single biggest ranking lever."],
      ["Listing quality score work", "Content, offer, ratings and post-purchase components are improved one at a time."],
      ["Category and taxonomy fixes", "Items are mapped to the correct category so they appear in the right refinements."],
      ["Rank tracking", "Keyword position is tracked so improvement is measured, not assumed."],
    ],
    faqs: [
      ["Is Walmart SEO the same as Amazon SEO?", "No. Walmart weights structured attribute completeness and listing quality score far more heavily."],
      ["How long does it take?", "Data fixes often move things within two to three weeks; competitive terms take longer."],
      ["What is a good listing quality score?", "Higher is better, but the useful work is in the individual components rather than the headline number."],
      ["Do reviews affect ranking?", "Yes, ratings feed the listing quality score and influence placement."],
      ["Can you work with a large catalogue?", "Yes, through bulk feed management rather than item-by-item editing."],
    ],
  },
  {
    slug: "ppc-advertising",
    category: "growth",
    name: "Walmart PPC Advertising",
    nav: "Sponsored Products campaigns built and bid against margin",
    h1: "Walmart PPC Advertising Services",
    intro:
      "Walmart Connect is less crowded than Amazon advertising, which makes disciplined campaign structure unusually rewarding. BifidMedia builds the campaign architecture, harvests search terms and manages bids against contribution margin.",
    value: "Controlled campaign structure, harvested keywords and bids tied to real margin.",
    offerings: [
      ["Account and campaign audit", "Existing campaigns, search terms and wasted spend are assessed before changes are made."],
      ["Campaign structure build", "Automatic discovery and manual conversion campaigns are separated cleanly."],
      ["Keyword harvesting", "Converting search terms are promoted into controlled manual campaigns with proper negatives."],
      ["Bid and placement management", "Bids and placement multipliers are reviewed weekly against margin targets."],
      ["Buy box monitoring", "Buy box share is tracked because ads stop serving when it is lost."],
      ["Performance reporting", "Return on ad spend is reported alongside total channel contribution."],
    ],
    faqs: [
      ["How does Walmart Connect differ from Amazon Ads?", "Less auction pressure, fewer ad formats and a heavier dependence on winning the buy box."],
      ["What budget should I start with?", "Enough to gather statistically useful search-term data in your category. We size it before launch."],
      ["Do I need the buy box to advertise?", "Effectively yes — ads do not serve on items where you have lost it."],
      ["How quickly do results appear?", "Structural improvements usually show within two to four weeks."],
      ["Do you manage Sponsored Brands?", "Yes, where your brand and catalogue qualify for the format."],
    ],
  },
  {
    slug: "marketing",
    category: "growth",
    name: "Walmart Marketing",
    nav: "Promotions, content and off-platform demand for your Walmart items",
    h1: "Walmart Marketplace Marketing Services",
    intro:
      "Advertising is only one part of moving volume on Walmart. BifidMedia plans promotions, rich media, reviews and off-platform traffic together so the channel builds momentum rather than depending entirely on paid placement.",
    value: "A coordinated Walmart marketing plan covering promotions, content, reviews and external demand.",
    offerings: [
      ["Promotional calendar", "Rollbacks, clearance and event participation are planned against margin and stock."],
      ["Rich media build", "Enhanced content modules, video and comparison content are produced for key items."],
      ["Review acceleration", "Walmart's review syndication and accelerator options are used to build early volume."],
      ["Brand portal and shops", "Where eligible, brand shop pages are built as proper landing destinations."],
      ["Off-platform traffic", "Social, email and creator traffic is directed at Walmart items with attribution in place."],
      ["Performance review", "Every promotion is judged on incremental units and contribution, not gross sales."],
    ],
    faqs: [
      ["Does Walmart have an equivalent of A+ Content?", "Yes, enhanced rich media modules, and they measurably help conversion on considered purchases."],
      ["How do I get reviews on Walmart?", "Review syndication from your own site and Walmart's accelerator programme are the two compliant routes."],
      ["Are rollbacks worth it?", "Sometimes. We model the incremental volume required before committing."],
      ["Can I drive external traffic?", "Yes, and it helps ranking when the listing converts what arrives."],
      ["Do you produce the creative?", "Yes, including imagery, modules and short-form video."],
    ],
  },
  {
    slug: "automation",
    category: "operations",
    name: "Walmart Automation",
    nav: "Systemise item setup, pricing, orders and reporting",
    h1: "Walmart Automation Services",
    intro:
      "Walmart becomes operationally heavy quickly once the catalogue grows. BifidMedia systemises item maintenance, repricing, order routing and reporting, and runs the judgement-based work with a named team.",
    value: "Documented systems and a managed team so the Walmart channel does not consume your week.",
    offerings: [
      ["Feed and bulk management", "Catalogue changes run through bulk feeds with error handling rather than manual edits."],
      ["Repricing rules", "Buy box competitiveness is automated within the margin floors you approve."],
      ["Order and shipping automation", "Order routing, label generation and tracking upload are automated."],
      ["Inventory synchronisation", "Stock levels stay aligned across Walmart, Amazon and your own store."],
      ["Scorecard monitoring", "Seller scorecard metrics are monitored with alerts before thresholds are breached."],
      ["Managed operation", "Cases, item issues and exceptions are handled by your BifidMedia team."],
    ],
    faqs: [
      ["Is Walmart automation passive income?", "No. It is a managed channel that reduces your operational load; it still needs capital and decisions from you."],
      ["Do you integrate with my existing systems?", "Yes, we work with the ERP, listing tool or 3PL integration you already run."],
      ["Who owns the seller account?", "You do, entirely."],
      ["Can you manage Walmart alongside Amazon?", "Yes, and that is usually more efficient than separate teams per channel."],
      ["What still needs my input?", "Pricing floors, capital allocation and new product approval."],
    ],
  },
];

export const walmartCategories = categories;
export const walmartServices = buildServices("walmart", "/walmart", categories, specs);
export const walmartServiceIndex = categoryIndex(categories, walmartServices);

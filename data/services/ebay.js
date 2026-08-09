import { buildServices, categoryIndex } from "./builder";

const categories = [
  {
    id: "listings",
    title: "Listings & Visibility",
    description: "Build listings Cassini can read and buyers will click.",
    problemsHeading: "Why eBay listings do not get seen",
    problems: [
      ["Item specifics left blank", "Every required and recommended item specific is completed, which is eBay's biggest ranking lever."],
      ["Keyword-stuffed titles", "Titles are written for readability and relevance rather than crammed with terms."],
      ["Wrong category placement", "Items are placed in the category buyers actually browse and filter within."],
      ["Photos that fail the thumbnail test", "Images are shot and cropped to work at gallery size, where the click is won."],
    ],
  },
  {
    id: "account",
    title: "Account & Compliance",
    description: "Protect the account, because volume without it is worthless.",
    problemsHeading: "How eBay accounts get restricted",
    problems: [
      ["Service metrics drifting", "Late dispatch, defect and case rates are monitored continuously, not quarterly."],
      ["Cases handled late", "Messages, returns and disputes are answered inside eBay's response windows."],
      ["Selling limits misunderstood", "Limit increases are requested with the performance evidence eBay looks for."],
      ["Policy breaches unnoticed", "Listing and category policy compliance is reviewed before enforcement arrives."],
    ],
  },
  {
    id: "operations",
    title: "Operations & Growth",
    description: "Scale volume without scaling the manual work.",
    problemsHeading: "What caps eBay sellers",
    problems: [
      ["Listing work done one at a time", "Bulk creation, revision and scheduling tools replace manual editing."],
      ["Pricing decided by feel", "Sold-price and sell-through research inform pricing and ad rates."],
      ["Promoted Listings set once", "Ad rates are tuned by category and margin against measured sell-through."],
      ["No stock or channel sync", "eBay inventory is synchronised with your other channels from one pool."],
    ],
  },
];

const specs = [
  {
    slug: "product-listing",
    category: "listings",
    name: "eBay Product Listing",
    nav: "Listings built with complete item specifics and clean data",
    h1: "eBay Product Listing Services",
    intro:
      "eBay's search engine relies on structured item specifics far more than most sellers realise. BifidMedia builds and rebuilds listings with complete data, readable titles and imagery that wins the click at gallery size.",
    value: "Complete, correctly categorised listings built for eBay search and the gallery click.",
    offerings: [
      ["Listing creation", "Fixed-price listings are built with accurate titles, descriptions and structured data."],
      ["Item specifics completion", "Required and recommended specifics are completed field by field."],
      ["Category and taxonomy", "Items are placed in the category and product identifiers that match buyer behaviour."],
      ["Photography direction", "Shot lists and cropping guidance for images that read clearly at thumbnail size."],
      ["Bulk listing operations", "Large catalogues are created and revised through bulk tools rather than manually."],
      ["Variation listings", "Multi-variation listings are structured so all options sit under one item."],
    ],
    faqs: [
      ["How important are item specifics?", "They are the single biggest controllable ranking factor on eBay, and most sellers leave value on the table there."],
      ["Should I use auctions or fixed price?", "Fixed price for most repeatable inventory; auctions for genuinely rare or hard-to-value items."],
      ["Do I need product identifiers?", "For branded products, yes — GTIN and MPN improve both eBay placement and external search visibility."],
      ["Can you migrate listings from another channel?", "Yes, with the data mapped to eBay's taxonomy rather than copied across."],
      ["How many photos should a listing have?", "Use the free allowance fully. Angles, condition detail and scale all reduce returns."],
    ],
  },
  {
    slug: "seo",
    category: "listings",
    name: "eBay SEO",
    nav: "Rank in Cassini through data completeness and sell-through",
    h1: "eBay SEO Services",
    intro:
      "Cassini ranks on relevance, listing quality and sell-through. BifidMedia improves all three — structured data, title relevance, pricing competitiveness and service metrics — so your listings surface for the searches that convert.",
    value: "Better Cassini placement through complete data, honest titles and improving sell-through.",
    offerings: [
      ["Keyword research", "Terms are researched from eBay search and sold-listing data rather than assumed."],
      ["Title optimisation", "Titles are rewritten for relevance and readability, using the full character allowance sensibly."],
      ["Item specifics audit", "Missing and inconsistent specifics are completed across the catalogue."],
      ["Sell-through improvement", "Pricing, shipping and promotions are adjusted because sell-through drives placement."],
      ["Service metric alignment", "Dispatch times, returns policy and tracking upload are configured to support ranking."],
      ["Rank monitoring", "Position on target searches is tracked so improvement is measurable."],
    ],
    faqs: [
      ["What is Cassini?", "eBay's search engine. It weights relevance, listing completeness, price competitiveness and seller performance."],
      ["Do returns policies affect ranking?", "Yes. Longer, free return windows generally improve placement."],
      ["Does listing duration matter?", "Good-till-cancelled listings accumulate sales history, which helps. Frequent relisting resets that."],
      ["How long does eBay SEO take?", "Data improvements show quickly; sell-through-driven gains build over one to three months."],
      ["Does eBay SEO help Google rankings?", "eBay listings do appear in Google, and complete structured data improves those chances."],
    ],
  },
  {
    slug: "account-management",
    category: "account",
    name: "eBay Account Management",
    nav: "Day-to-day management with metrics kept green",
    h1: "eBay Store Account Management Services",
    intro:
      "On eBay, service performance is not administrative overhead — it directly determines visibility and selling limits. BifidMedia manages the store day to day, keeping metrics green while growing listing volume.",
    value: "A managed store where service metrics stay green and volume grows on top of them.",
    badge: "Most requested",
    offerings: [
      ["Daily store management", "Listings, orders, offers and messages are handled every working day."],
      ["Performance monitoring", "Defect rate, late dispatch and case rates are tracked continuously."],
      ["Pricing and offers", "Best Offer handling, markdown campaigns and repricing operate inside your margin floors."],
      ["Selling limit growth", "Limit increases are requested with the performance evidence eBay expects."],
      ["Promoted Listings oversight", "Ad rates are managed by category against sell-through and margin."],
      ["Reporting", "Sell-through, ad take-rate, service metrics and margin reported monthly."],
    ],
    faqs: [
      ["What is Top Rated Seller status worth?", "Search boost, fee discounts and buyer confidence. It is worth structuring the operation around."],
      ["How are selling limits increased?", "Through consistent performance and a properly evidenced request, not by asking repeatedly."],
      ["Do you handle Best Offers?", "Yes, with automatic accept and decline thresholds you approve."],
      ["Can you manage international selling?", "Yes, including eBay International Shipping and market-specific requirements."],
      ["Who owns the account?", "You do. We work through granted permissions you can revoke at any time."],
    ],
  },
  {
    slug: "account-reinstatement",
    category: "account",
    name: "eBay Account Reinstatement",
    nav: "Appeal restrictions and suspensions with real evidence",
    h1: "eBay Account Reinstatement Services",
    intro:
      "eBay restrictions range from a selling limit reduction to a full suspension, and each needs a different response. BifidMedia diagnoses the actual cause, prepares an evidenced appeal and manages it through eBay's escalation path.",
    value: "A diagnosed cause, an evidenced appeal and a prevention plan afterwards.",
    badge: "Urgent support",
    offerings: [
      ["Cause diagnosis", "Notices, metrics and case history are reviewed to establish the real trigger."],
      ["Evidence preparation", "Invoices, authenticity documentation and operational records are assembled."],
      ["Appeal drafting", "The appeal addresses the specific policy breached and the corrective action taken."],
      ["Escalation management", "The case is pursued through eBay's escalation channels where needed."],
      ["Corrective action plan", "Operational changes are implemented so the issue cannot recur."],
      ["Post-reinstatement recovery", "Listings and ad rates are rebuilt to restore visibility."],
    ],
    faqs: [
      ["What causes eBay suspensions?", "Performance standard breaches, intellectual property complaints, counterfeit claims, policy violations and account linking."],
      ["How long does reinstatement take?", "Days to several weeks depending on the reason and the quality of evidence available."],
      ["Can all accounts be reinstated?", "No. Some breaches are treated as permanent, and we will tell you when that is the case."],
      ["What about linked account suspensions?", "These need the linked account's issue resolved first. We assess whether that is realistic."],
      ["Will my selling limits return?", "Usually reduced initially, then rebuilt through demonstrated performance."],
    ],
  },
  {
    slug: "negative-feedback-removal",
    category: "account",
    name: "eBay Negative Feedback Removal",
    nav: "Remove eligible feedback and defects, protect your standing",
    h1: "eBay Negative Feedback Removal Services",
    intro:
      "Not all negative feedback can be removed, but a meaningful proportion of it qualifies under eBay's own policies. BifidMedia identifies eligible feedback and defects, submits removal requests and reduces the causes behind them.",
    value: "Eligible feedback and defects removed, and the causes behind them addressed.",
    offerings: [
      ["Feedback review", "Every negative and neutral entry is assessed against eBay's removal criteria."],
      ["Removal requests", "Qualifying feedback is submitted for removal with the supporting evidence."],
      ["Defect appeals", "Transaction defects caused by buyer behaviour or carrier failure are appealed."],
      ["Buyer resolution", "Where appropriate, buyers are contacted to resolve the underlying issue."],
      ["Cause analysis", "Recurring themes are traced to listings, packaging, carriers or descriptions."],
      ["Standing monitoring", "Feedback percentage and defect rate are monitored against Top Rated thresholds."],
    ],
    faqs: [
      ["What feedback qualifies for removal?", "Feedback containing prohibited content, unrelated to the transaction, from buyers who breached policy, or caused by circumstances eBay recognises."],
      ["Can I ask a buyer to revise feedback?", "Yes, through eBay's feedback revision request, within its usage limits."],
      ["How long does removal take?", "Usually a few days once the request is properly evidenced."],
      ["Does negative feedback affect ranking?", "Indirectly and significantly — it feeds seller standing, which affects both placement and fees."],
      ["What if removal is refused?", "We assess whether a further appeal is justified, and focus on the underlying cause either way."],
    ],
  },
  {
    slug: "automation",
    category: "operations",
    name: "eBay Automation",
    nav: "Bulk listing, repricing, order routing and reporting",
    h1: "eBay Automation Services",
    intro:
      "Volume on eBay is limited by how much manual work you can absorb. BifidMedia automates listing creation, repricing, order routing and reporting so the catalogue can grow without adding hours to your week.",
    value: "Automated listing, pricing and order operations so volume is no longer capped by admin.",
    offerings: [
      ["Bulk listing operations", "Creation, revision and scheduling run through bulk tools and templates."],
      ["Repricing rules", "Competitive repricing operates inside floors you approve."],
      ["Inventory synchronisation", "Stock is kept aligned across eBay, Amazon and your own store from one pool."],
      ["Order routing", "Orders route to your warehouse or 3PL with tracking uploaded automatically."],
      ["Message workflows", "Common questions are answered from templates inside the response window."],
      ["Reporting automation", "Sell-through, ad take-rate and margin are reported without manual assembly."],
    ],
    faqs: [
      ["What can be automated on eBay?", "Listing creation and revision, repricing, inventory sync, order routing, tracking upload and most reporting."],
      ["Do you use third-party tools?", "Where they earn their subscription. Often eBay's own bulk tools plus one integration is enough."],
      ["Will automation risk my account?", "Not when it operates within eBay policy. We do not use anything that breaches terms."],
      ["Can you sync with Amazon?", "Yes, single-pool inventory across channels is a common and worthwhile setup."],
      ["Do you manage it ongoing?", "Yes, under a management retainer including exception handling."],
    ],
  },
];

export const ebayCategories = categories;
export const ebayServices = buildServices("ebay", "/ebay", categories, specs);
export const ebayServiceIndex = categoryIndex(categories, ebayServices);

/**
 * Shared scaffolding for the standalone business-service pages under
 * `/services/*`. Mirrors the marketplace object shape so the same inner-page
 * template can render both without special-casing.
 */
export const businessContext = {
  slug: "business",
  key: "business",
  name: "Business Services",
  shortName: "Business",
  href: "/services/business",
  color: "#165dff",
  tagline: "Business growth services",
  image: "/images/business/ecommerce-consultation-team.webp",
  imageAlt: "BifidMedia specialists working through a client growth plan",

  audiences: [
    {
      title: "First-time founders",
      text: "You have the idea and the motivation but need the structure, the paperwork and someone who has done it before.",
    },
    {
      title: "Operators adding a second line",
      text: "You already run something that works and want a second revenue stream that does not consume the first one's attention.",
    },
    {
      title: "Established businesses expanding",
      text: "You need capability you do not want to hire for permanently, delivered to a standard you can hand to your team afterwards.",
    },
  ],

  process: [
    { title: "Discovery", text: "We establish your goals, capital, available time and risk tolerance before proposing anything." },
    { title: "Written plan", text: "You receive the strategy, the sequence, the budget range and the numbers we are steering toward." },
    { title: "Build", text: "The work is delivered in defined stages, each with a checkpoint you sign off." },
    { title: "Launch", text: "Everything goes live together — brand, systems and the demand generation behind them." },
    { title: "Measure", text: "Performance is reported monthly against the targets agreed at the start." },
    { title: "Iterate", text: "Each quarter we agree what to double down on, what to change and what to stop." },
  ],

  tools: [
    { name: "Formation and compliance", text: "Entity filing, EIN, registered agent and the annual obligations that follow." },
    { name: "Brand and identity", text: "Naming, trademark screening, identity systems and packaging design." },
    { name: "Web and storefront", text: "Sites and storefronts built to convert, on platforms your team can maintain." },
    { name: "Content production", text: "Written, video and short-form content produced on a documented schedule." },
    { name: "Paid media", text: "Meta, Google, TikTok and marketplace advertising managed against contribution." },
    { name: "Reporting", text: "One consolidated view of what you spent, what you earned and what you kept." },
  ],

  trust: [
    { title: "Written before built", text: "You get the plan and the reasoning in writing before any execution begins." },
    { title: "Honest go / no-go", text: "If the numbers say a venture will not work, we tell you before you spend on it." },
    { title: "Full handover", text: "Documentation, accounts and assets are yours, and are handed over as standard." },
  ],

  stats: [
    { value: "6", label: "Marketplaces supported", text: "Amazon, Walmart, Shopify, TikTok Shop, Etsy and eBay." },
    { value: "80+", label: "Documented service tracks", text: "From entity formation to advertising, logistics and compliance." },
    { value: "Monthly", label: "Reporting cadence", text: "A written report and a review call, every month, without exception." },
  ],
};

export default businessContext;

/**
 * BifidMedia does not publish invented client reviews, fabricated names or
 * unverifiable performance claims. Until verified, attributable client
 * testimonials are supplied, the social-proof slots on the site render
 * BifidMedia's written service commitments instead.
 *
 * To publish real testimonials: add them to `clientTestimonials` below. Any
 * component that uses social proof falls back to `commitments` while that array
 * is empty, so nothing needs to change in the UI.
 */

/** @type {{quote: string, name: string, role: string, channel?: string}[]} */
export const clientTestimonials = [];

/** Written commitments — used wherever the layout calls for social proof. */
export const commitments = [
  {
    title: "A named account manager",
    text: "One person owns your account, knows your margins and answers the phone. Not a shared inbox.",
  },
  {
    title: "Numbers you can trace",
    text: "Every figure we report can be traced back to a platform export you have access to.",
  },
  {
    title: "No guaranteed rankings",
    text: "We commit to process and reporting. Anyone guaranteeing page-one placement is guessing.",
  },
  {
    title: "You own everything",
    text: "Account, brand, trademark, inventory, customer data and creative assets remain entirely yours.",
  },
  {
    title: "Compliant methods only",
    text: "No incentivised reviews, no fabricated invoices, no grey-hat shortcuts that risk your account.",
  },
  {
    title: "Weekly optimisation cadence",
    text: "Bids, listings, stock cover and account health are reviewed on a fixed schedule, not when something breaks.",
  },
  {
    title: "Written strategy first",
    text: "Before we change anything, you get the plan in writing with the reasoning attached.",
  },
  {
    title: "Honest go / no-go advice",
    text: "If the numbers say a product, channel or expansion will not work, we tell you before you spend.",
  },
  {
    title: "Transparent fees",
    text: "Scope and fees are defined up front. No percentage of revenue you did not agree to.",
  },
  {
    title: "Cross-channel by default",
    text: "Amazon, Walmart, Shopify, TikTok Shop, Etsy and eBay are handled by one team that talks to itself.",
  },
];

/** Longer-form statements used in the rotating quote slot. */
export const principles = [
  {
    quote:
      "We would rather tell a founder that a product will not work than take a retainer to launch it anyway. The advice you can act on is the advice that costs us something to give.",
    name: "How we advise",
    role: "BifidMedia operating principle",
  },
  {
    quote:
      "Marketplace growth is not a secret tactic. It is complete data, disciplined bidding, honest listings and doing the unglamorous work every single week without exception.",
    name: "How we work",
    role: "BifidMedia operating principle",
  },
  {
    quote:
      "Your account, your brand, your trademark, your inventory, your customer data. We are the team running it, never the party that owns it.",
    name: "What you own",
    role: "BifidMedia operating principle",
  },
  {
    quote:
      "Reporting should change a decision. If a number in your monthly report does not change what you do next, it should not be in the report.",
    name: "How we report",
    role: "BifidMedia operating principle",
  },
];

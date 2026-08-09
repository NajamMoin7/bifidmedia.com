import { buildServices, categoryIndex } from "./builder";

const categories = [
  {
    id: "operations",
    title: "Shop Operations",
    description: "Set the shop up correctly and keep it compliant as it scales.",
    problemsHeading: "Why TikTok Shops stall after setup",
    problems: [
      ["Products onboarded, then ignored", "Catalogue, imagery and pricing are maintained as an active channel, not a one-time import."],
      ["Violations nobody is watching", "Shop health, product violations and policy notices are monitored daily."],
      ["Fulfilment misses the promise", "Shipping templates and dispatch cut-offs are set to what you can genuinely hit."],
      ["No content behind the catalogue", "Products without a content plan do not sell on TikTok, so the plan comes first."],
    ],
  },
  {
    id: "creators",
    title: "Creators & Content",
    description: "The engine that actually generates demand on TikTok Shop.",
    problemsHeading: "Why creator programmes underperform",
    problems: [
      ["Open collaboration and hope", "Targeted outreach to matched creators replaces broadcast sampling."],
      ["Commissions that break margin", "Rates are modelled against landed cost before any offer goes live."],
      ["No brief, no repeatability", "Creators receive hooks, angles and constraints so good content can be reproduced."],
      ["Winners never amplified", "Content that converts organically is promoted with paid budget immediately."],
    ],
  },
  {
    id: "paid",
    title: "Paid & Live",
    description: "Amplify what works and sell in real time.",
    problemsHeading: "Where TikTok ad budget disappears",
    problems: [
      ["Ads run on untested creative", "Only creative with organic evidence is promoted."],
      ["Single-format campaigns", "Video Shopping Ads, LIVE ads and product cards are used for their distinct roles."],
      ["Creative fatigue ignored", "Refresh cadence is planned so performance does not decay unnoticed."],
      ["Lives run without a plan", "Every stream has a run-of-show, offer ladder and moderation cover."],
    ],
  },
];

const specs = [
  {
    slug: "management",
    category: "operations",
    name: "TikTok Shop Management",
    nav: "Day-to-day management of your TikTok Shop and catalogue",
    h1: "TikTok Shop Management Services",
    intro:
      "TikTok Shop rewards brands that treat it as an active channel rather than a second catalogue. BifidMedia manages shop setup, product onboarding, compliance, orders and the content calendar that makes the catalogue sell.",
    value: "An actively managed shop: compliant, well merchandised and backed by a content plan.",
    badge: "Most requested",
    offerings: [
      ["Shop setup and verification", "Seller verification, category approval, tax and payout configuration completed."],
      ["Product onboarding", "Products are listed with commerce-ready imagery, copy, variants and pricing."],
      ["Shop health monitoring", "Violations, product reviews and performance notices are checked daily."],
      ["Order and fulfilment oversight", "Shipping templates, dispatch times and returns handling are configured and monitored."],
      ["Content calendar", "A weekly publishing plan ties products to content rather than leaving them idle."],
      ["Reporting", "GMV, creator contribution and content performance are reported together."],
    ],
    faqs: [
      ["Can I sell on TikTok Shop outside the US?", "Yes, in the markets TikTok Shop currently operates. Requirements differ by market and we confirm eligibility first."],
      ["Do I need my own TikTok account?", "You need a verified seller account. A brand content account is strongly recommended alongside it."],
      ["What causes shop violations?", "Product claims, restricted categories, image issues and late dispatch are the most common."],
      ["How is TikTok Shop different from Amazon?", "Demand is created by content rather than captured from search, so content is the operating requirement."],
      ["Who owns the shop?", "You do, entirely — shop, catalogue, creator relationships and data."],
    ],
  },
  {
    slug: "influencer-marketing",
    category: "creators",
    name: "TikTok Shop Influencer Marketing",
    nav: "Recruit, brief and manage creators who actually convert",
    h1: "TikTok Shop Influencer and Affiliate Marketing",
    intro:
      "Creators are the demand engine on TikTok Shop, and running the programme well is an operational discipline. BifidMedia recruits matched creators, briefs them properly, manages samples and commissions, and reports revenue per creator.",
    value: "A managed creator programme with matched partners, clear briefs and margin-safe commissions.",
    offerings: [
      ["Creator sourcing", "Creators are shortlisted on audience fit, engagement quality and conversion history."],
      ["Commission modelling", "Rates are set against landed cost so the programme cannot run at a loss."],
      ["Targeted outreach", "Individual invitations and negotiated partnerships replace broadcast open collaboration."],
      ["Sample logistics", "Sample requests are screened, dispatched and tracked to output."],
      ["Creative briefing", "Hooks, angles, claims constraints and format guidance are supplied for every campaign."],
      ["Performance reporting", "Revenue, order volume and content output are reported per creator."],
    ],
    faqs: [
      ["Should I use open or targeted collaboration?", "Open collaboration for reach and discovery, targeted for the creators you actually want. Most programmes need both."],
      ["What commission rate is normal?", "It varies widely by category. The right number is the one your contribution margin can carry, which we model first."],
      ["How many creators do I need?", "A small number of consistent, well-matched creators typically outperforms a long list of one-off posts."],
      ["Do you handle sample fraud?", "Yes, sample requests are screened and creators are tracked against output."],
      ["Can you write the briefs?", "Yes, including compliant claim language for regulated categories."],
    ],
  },
  {
    slug: "marketing-and-advertising",
    category: "paid",
    name: "TikTok Shop Marketing & Advertising",
    nav: "Amplify proven content with Video Shopping Ads and LIVE",
    h1: "TikTok Shop Marketing and Advertising Services",
    intro:
      "Paid on TikTok works best as an amplifier for content that has already proven itself organically. BifidMedia manages Video Shopping Ads, LIVE ads and product campaigns, with a creative pipeline built to keep feeding them.",
    value: "Paid budget behind creative that has already earned attention organically.",
    offerings: [
      ["Campaign strategy", "Budget is split across discovery, conversion and retargeting with defined roles."],
      ["Video Shopping Ads", "Product-linked video campaigns are built, launched and optimised."],
      ["LIVE amplification", "Live streams are promoted to relevant audiences while on air."],
      ["Creative pipeline", "A steady batch of testable creative is produced so fatigue never stalls spend."],
      ["Audience and catalogue setup", "Product feeds, audiences and events are configured correctly."],
      ["Reporting", "Return is reported on orders and contribution, alongside the creative that produced them."],
    ],
    faqs: [
      ["What budget should I start with?", "Enough to test several creative concepts properly. We size it against your category before launch."],
      ["Do ads work without organic content?", "Rarely well. Creative with organic evidence performs far better than cold-produced ads."],
      ["What is GMV Max?", "TikTok's automated campaign type for shop sales. Useful, but it still depends entirely on creative quality."],
      ["How often does creative need refreshing?", "Weekly batches are a realistic baseline; fatigue on TikTok is fast."],
      ["Can you run ads to my website too?", "Yes, though in-app checkout usually converts better for shop-eligible products."],
    ],
  },
  {
    slug: "automation",
    category: "paid",
    name: "TikTok Shop Automation",
    nav: "Systemise content, creators, orders and reporting",
    h1: "TikTok Shop Automation Services",
    intro:
      "TikTok Shop is content-hungry, and that workload is what stops most brands. BifidMedia builds the production system — content batching, creator workflows, order routing and reporting — and runs it with a named team.",
    value: "A repeatable production and operations system, run by a team, not by you at 11pm.",
    offerings: [
      ["Content production system", "Concepts, scripting, filming and editing run as a weekly batch process."],
      ["Creator workflow", "Recruitment, briefing, sampling and payout follow a documented pipeline."],
      ["Order and fulfilment automation", "Order routing, tracking upload and inventory sync are automated."],
      ["Live selling calendar", "Streams are scheduled with run-of-show, offers and moderation planned in advance."],
      ["Reporting automation", "Creator, content and campaign performance are consolidated automatically."],
      ["Managed operation", "Judgement work — creative direction, negotiation, escalation — is handled by your team."],
    ],
    faqs: [
      ["Is TikTok Shop automation passive?", "No. It is managed operation. We reduce your workload substantially; we do not pretend it disappears."],
      ["Who produces the content?", "Our team plus your creator network. We can also work with your in-house creators."],
      ["Do you handle live selling?", "Yes, including planning, hosting arrangements, moderation and post-stream retargeting."],
      ["Who owns the shop and creators?", "You do. Creator relationships are established under your brand."],
      ["What do I still need to do?", "Approve creative direction, set pricing and commission floors, and hold stock."],
    ],
  },
];

export const tiktokCategories = categories;
export const tiktokServices = buildServices("tiktok-shop", "/tiktok-shop", categories, specs);
export const tiktokServiceIndex = categoryIndex(categories, tiktokServices);

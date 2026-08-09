import Image from "next/image";
import { ServiceHero } from "@/components/services/ServiceHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Section, SectionHeading } from "@/components/ui/Section";
import { StatsBand } from "@/components/ui/StatsBand";
import { IconCardGrid } from "@/components/ui/IconCardGrid";
import { CommitmentMarquee } from "@/components/ui/CommitmentMarquee";
import { QuoteSlider } from "@/components/ui/QuoteSlider";
import { TrustMarquee } from "@/components/home/TrustMarquee";
import { Newsletter } from "@/components/home/Newsletter";
import { AskStrategist } from "@/components/inner/AskStrategist";
import { FeatureSplit } from "@/components/inner/FeatureSplit";
import { stats } from "@/data/homepage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About BifidMedia",
  description:
    "BifidMedia is a multi-channel e-commerce agency in Austin, Texas. We build, manage and grow marketplace and direct-to-consumer stores for founders and established brands.",
  path: "/about",
});

const values = [
  {
    title: "Say the difficult thing early",
    text: "If a product, a channel or an expansion will not work, you hear it before you spend — not in a quarterly review afterwards.",
  },
  {
    title: "Numbers over narrative",
    text: "Every figure we report traces back to a platform export you can open yourself. No proprietary dashboards that cannot be checked.",
  },
  {
    title: "Own the boring work",
    text: "Marketplace growth is mostly unglamorous, repeated correctly. We do the weekly work that most teams skip.",
  },
  {
    title: "The client owns everything",
    text: "Account, brand, trademark, inventory, customer data, creative. We operate it; we never hold it hostage.",
  },
  {
    title: "Compliance is not optional",
    text: "No incentivised reviews, no fabricated documentation, no tactics that put an account at risk for a short-term gain.",
  },
  {
    title: "One team across channels",
    text: "Amazon, Walmart, Shopify, TikTok Shop, Etsy and eBay are handled by people who talk to each other daily.",
  },
];

const differences = [
  {
    title: "Specialists, not a general agency",
    text: "We do e-commerce operations and the business services around them. We do not also do brand films and event stands.",
  },
  {
    title: "Written strategy before execution",
    text: "You get the plan, the reasoning and the numbers first. If you never hire us, the plan is still yours.",
  },
  {
    title: "Transparent, defined fees",
    text: "Scope and price are agreed in writing before work starts. No percentage of revenue you did not sign up for.",
  },
];

export default function AboutPage() {
  return (
    <>
      <ServiceHero
        eyebrow="About BifidMedia"
        heading="Your E-Commerce Management and Growth Partner"
        intro="BifidMedia is a multi-channel e-commerce agency based in Austin, Texas. We build, run and grow stores across Amazon, Walmart, Shopify, TikTok Shop, Etsy and eBay — and handle the business formation and brand work around them."
        valueLine="One accountable team for the whole operation, with the ownership staying entirely with you."
        image="/images/business/ecommerce-consultation-team.webp"
        imageAlt="The BifidMedia team working through a client growth plan"
        badges={["Austin, Texas", "Multi-channel by design", "Founder-friendly engagements"]}
      />

      <Breadcrumbs items={[{ label: "About" }]} />

      <Section tone="canvas">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6" data-aos="fade-right">
            <h2 className="text-[clamp(1.5rem,2.8vw,2.2rem)]">
              What Makes Us Different From Other E-Commerce Agencies
            </h2>
            <p className="mt-4 text-[1rem] leading-relaxed text-muted">
              Most agencies sell either strategy or execution. Founders end up
              paying for a deck they cannot implement, or for execution against a
              plan nobody wrote down.
            </p>
            <p className="mt-4 text-[1rem] leading-relaxed text-muted">
              BifidMedia does both, in that order. We start with a written plan
              you own — and if you decide not to work with us afterwards, you
              still keep it.
            </p>
          </div>
          <div className="lg:col-span-6">
            <ul className="grid gap-4">
              {differences.map((item, index) => (
                <li
                  key={item.title}
                  className="card-surface p-6"
                  data-aos="fade-left"
                  data-aos-delay={index * 80}
                >
                  <h3 className="text-[1.05rem]">{item.title}</h3>
                  <p className="mt-2 text-[0.93rem] leading-relaxed text-muted">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <TrustMarquee />

      <StatsBand stats={stats} tone="white" heading="A few highlights" />

      <FeatureSplit
        tone="canvas"
        feature={{
          heading: "How BifidMedia Started",
          body: [
            "BifidMedia grew out of a simple observation: most e-commerce founders do not fail because their product is wrong. They fail because the operational work — listings, advertising, stock, compliance, customer service — never gets done consistently.",
            "We built the agency around that problem. Documented processes, a fixed weekly cadence, specialists per platform, and reporting that shows contribution rather than revenue.",
            "Today we run marketplace and direct-to-consumer operations for founders launching their first store and for established brands adding their third and fourth channel.",
          ],
          image: "/images/contact/business-consultation-workspace.webp",
          imageAlt: "BifidMedia specialists reviewing marketplace performance",
          imageFirst: false,
          overlay: {
            title: "Founded on process",
            text: "Every recurring task in a client account has a written procedure, an owner and a cadence.",
          },
        }}
      />

      <IconCardGrid
        tone="white"
        heading="The values that guide our work"
        text="These are the commitments we hold ourselves to, and the ones you can hold us to."
        cards={values}
      />

      <QuoteSlider tone="sky" />

      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6" data-aos="fade-right">
            <div className="overflow-hidden rounded-[var(--radius-card)] border border-line shadow-soft">
              <Image
                src="/images/amazon/amazon-analytics-dashboard.webp"
                alt="Consolidated e-commerce performance reporting"
                width={1400}
                height={933}
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-6" data-aos="fade-left">
            <SectionHeading
              align="left"
              title="Making the numbers legible"
              text="Marketplace reporting is deliberately fragmented. Advertising sits in one console, fees in a settlement report, stock in another, returns somewhere else."
            />
            <p className="mt-4 text-[0.98rem] leading-relaxed text-muted">
              We consolidate all of it into contribution margin per product and
              per channel — the number that actually tells you whether the
              business is working. You get a short weekly summary and a full
              monthly review, every month, without exception.
            </p>
          </div>
        </div>
      </Section>

      <CommitmentMarquee
        heading="What you can expect from us"
        text="Commitments we make in writing at the start of every engagement."
      />

      <AskStrategist />
      <Newsletter />
    </>
  );
}

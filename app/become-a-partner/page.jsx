import { ServiceHero } from "@/components/services/ServiceHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Section } from "@/components/ui/Section";
import { IconCardGrid } from "@/components/ui/IconCardGrid";
import { CommitmentMarquee } from "@/components/ui/CommitmentMarquee";
import { FaqSection } from "@/components/ui/FaqSection";
import { TrustMarquee } from "@/components/home/TrustMarquee";
import { Newsletter } from "@/components/home/Newsletter";
import { AskStrategist } from "@/components/inner/AskStrategist";
import { LeadForm } from "@/components/forms/LeadForm";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Become a BifidMedia Partner",
  description:
    "Refer clients, white-label our marketplace delivery, or build a joint offering. BifidMedia partners with agencies, consultants and service providers serving e-commerce businesses.",
  path: "/become-a-partner",
});

const tracks = [
  {
    title: "Referral partner",
    text: "Introduce a client, we handle the rest. You receive a defined commission on the engagements that close, paid on collected revenue.",
  },
  {
    title: "White-label delivery",
    text: "Our specialists deliver marketplace work under your brand. You own the client relationship, the reporting and the invoice.",
  },
  {
    title: "Strategic alliance",
    text: "For 3PLs, accountants, freight forwarders and platform vendors — a two-way referral relationship with a documented handover process.",
  },
];

const benefits = [
  {
    title: "Defined commercials",
    text: "Rates, payment timing and attribution windows are agreed in writing before the first introduction is made.",
  },
  {
    title: "A named delivery contact",
    text: "You get a single person accountable for the work, not a shared queue that swallows your escalations.",
  },
  {
    title: "Client-safe by design",
    text: "Under white-label we never approach your client directly, and that is contractual rather than a promise.",
  },
  {
    title: "Materials you can use",
    text: "Capability decks, scoping templates and pricing guidance so you can qualify opportunities without us on the call.",
  },
  {
    title: "Genuine capacity",
    text: "We tell you when we are full. Taking work we cannot deliver damages your relationship, not just ours.",
  },
  {
    title: "Transparent reporting",
    text: "Referral pipeline and white-label delivery status are visible to you, not reported when convenient.",
  },
];

const steps = [
  { title: "Introductory call", text: "We establish what you do, who your clients are and where the overlap actually is." },
  { title: "Agree the model", text: "Referral, white-label or alliance — with rates, attribution and escalation paths documented." },
  { title: "Onboarding", text: "You receive scoping templates, capability materials and a named delivery contact." },
  { title: "First engagement", text: "We run the first one closely together so the handover process is proven rather than assumed." },
  { title: "Review and scale", text: "Quarterly reviews on volume, quality and commercials, with either side free to adjust." },
];

const faqs = [
  {
    question: "What commission do referral partners receive?",
    answer:
      "It depends on engagement type and size, and is agreed in writing before your first introduction. We would rather set a rate we will honour than quote an attractive headline number.",
  },
  {
    question: "Will you contact my clients directly under white-label?",
    answer:
      "No. Under a white-label agreement all client communication runs through you unless you explicitly ask us to join a call. That is contractual.",
  },
  {
    question: "Which services can be white-labelled?",
    answer:
      "Marketplace services in particular — listing work, PPC management, account health, reinstatements and audits. Store development and business formation are also available.",
  },
  {
    question: "Is there a minimum volume commitment?",
    answer:
      "No. We would rather have a partner who sends two well-qualified opportunities a year than one who sends twenty that do not fit.",
  },
  {
    question: "How quickly can you take on new work?",
    answer:
      "It depends on current capacity, and we will tell you honestly. If we cannot start within a reasonable window, we say so rather than accepting and delaying.",
  },
  {
    question: "Do you partner with other agencies?",
    answer:
      "Frequently. Creative, web and general digital agencies often want marketplace capability without hiring a specialist team for it.",
  },
];

export default function PartnerPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Partnerships"
        heading="Become a BifidMedia Partner"
        intro="If you work with e-commerce businesses — as an agency, a consultant, a 3PL, an accountant or a platform vendor — there is a good chance your clients need marketplace capability you do not want to build in-house."
        valueLine="Three partnership models, with commercials agreed in writing before the first introduction."
        image="/images/contact/business-consultation-workspace.webp"
        imageAlt="Partnership discussion between agency teams"
        badges={["Referral", "White-label", "Strategic alliance"]}
        primaryCta={{ label: "Start a conversation", href: "#partner-form" }}
      />

      <Breadcrumbs items={[{ label: "Become a Partner" }]} />

      <TrustMarquee />

      <IconCardGrid
        tone="canvas"
        heading="Three ways to work with us"
        text="Pick the model that matches how close you want to stay to delivery."
        cards={tracks}
      />

      <IconCardGrid
        tone="white"
        heading="What partners actually get"
        text="Beyond a commission rate — the operational things that make a partnership workable."
        cards={benefits}
      />

      <IconCardGrid
        tone="canvas"
        numbered
        heading="How a partnership starts"
        text="Five steps from first call to a working relationship."
        cards={steps}
      />

      <CommitmentMarquee
        heading="How we behave as a partner"
        text="The same commitments we make to clients apply to the people who introduce them."
      />

      <Section tone="white" id="partner-form">
        <div className="mx-auto max-w-3xl">
          <LeadForm
            intent="partner"
            heading="Tell us about your business"
            text="Share what you do and who you work with. We will come back within one business day with whether there is a genuine overlap, and which model would suit."
            submitLabel="Start the conversation"
          />
        </div>
      </Section>

      <FaqSection
        heading="Partnership questions"
        items={faqs}
        tone="canvas"
      />

      <AskStrategist />
      <Newsletter />
    </>
  );
}

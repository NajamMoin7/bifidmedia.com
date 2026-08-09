import { FormPage } from "@/components/forms/FormPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Free E-Commerce Store Audit",
  description:
    "Request a free BifidMedia store audit. We review listings, advertising, inventory and account health, then send a prioritised list of what to fix first.",
  path: "/free-audit",
});

const faqs = [
  {
    question: "What does the free audit cover?",
    answer:
      "A high-level review of listing quality, advertising structure, inventory position and account health, with the three to five issues we would fix first.",
  },
  {
    question: "How is it different from your paid audit?",
    answer:
      "The free review is a directional assessment. The paid audit goes ASIN by ASIN, models contribution margin per product and produces a full prioritised roadmap.",
  },
  {
    question: "What access do you need?",
    answer:
      "For the free review, usually just your store URL or seller name. For anything deeper we would request read-only access, which you grant and can revoke.",
  },
  {
    question: "Do I have to hire you afterwards?",
    answer:
      "No. The findings are yours regardless, and you are free to fix them yourself or hand them to another team.",
  },
];

export default function FreeAuditPage() {
  return (
    <FormPage
      eyebrow="Free store audit"
      heading="Get a Free Review of Your Store"
      intro="Send us your store and we will tell you what we would fix first. No obligation, no lengthy discovery process, and you keep the findings whatever you decide to do next."
      points={[
        "Listing quality, advertising, inventory and account health reviewed",
        "Three to five prioritised issues, ranked by impact",
        "Delivered in writing within three business days",
        "Yours to keep, whether you hire us or not",
      ]}
      breadcrumb="Free Audit"
      formHeading="Request your free audit"
      formText="Include your store URL or seller name so we can look at the right account."
      submitLabel="Request my audit"
      intent="audit"
      faqs={faqs}
    />
  );
}

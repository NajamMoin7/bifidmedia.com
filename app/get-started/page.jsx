import { FormPage } from "@/components/forms/FormPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Get Started With BifidMedia",
  description:
    "Tell BifidMedia about your store and get a written recommendation on what to prioritise, what it would cost and whether it is worth doing.",
  path: "/get-started",
});

const faqs = [
  {
    question: "What happens after I send this?",
    answer:
      "A BifidMedia specialist reviews what you have sent and comes back within one business day — usually with two or three specific questions rather than a generic brochure.",
  },
  {
    question: "Is the first conversation free?",
    answer:
      "Yes, and there is no obligation. If we do not think we are the right fit, we will say so and point you somewhere more useful.",
  },
  {
    question: "Do I need to have a store already?",
    answer:
      "No. Roughly half the people who contact us have not sold anything yet. We will tell you what the realistic first step is.",
  },
  {
    question: "What if I do not know my budget yet?",
    answer:
      "Select 'not sure' and describe what you want to achieve. We will come back with what it typically costs to get there.",
  },
];

export default function GetStartedPage() {
  return (
    <FormPage
      eyebrow="Get started"
      heading="Tell Us Where Your Store Is Today"
      intro="Send us a few details and a BifidMedia specialist will come back with what we would prioritise first, roughly what it would cost, and whether it is worth doing at all."
      points={[
        "A written recommendation, not a sales deck",
        "Response within one business day",
        "No obligation and no long lock-in",
        "If we are not the right fit, we will tell you",
      ]}
      breadcrumb="Get Started"
      formHeading="Start your engagement"
      formText="The more you tell us, the more specific our first response can be."
      submitLabel="Send my details"
      intent="get-started"
      faqs={faqs}
    />
  );
}

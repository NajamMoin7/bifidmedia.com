import { FormPage } from "@/components/forms/FormPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Book a Free E-Commerce Consultation",
  description:
    "Book a free 30-minute consultation with a BifidMedia specialist. Get a straight assessment of your marketplace or storefront and what to do next.",
  path: "/book-consultation",
});

const faqs = [
  {
    question: "How long is the consultation?",
    answer:
      "Thirty minutes is usually enough to establish where you are and what the first three priorities would be. We will book longer if the situation needs it.",
  },
  {
    question: "Who will I speak to?",
    answer:
      "A specialist for the channel you sell on — not a salesperson relaying questions back to a delivery team.",
  },
  {
    question: "What should I have ready?",
    answer:
      "Whatever you have: the channels you sell on, roughly what you turn over, what you have already tried and what you want to be true in twelve months.",
  },
  {
    question: "Will you try to sell me something on the call?",
    answer:
      "We will tell you what we would do and what it would cost if you ask. If the honest answer is that you do not need an agency yet, that is what you will hear.",
  },
];

export default function BookConsultationPage() {
  return (
    <FormPage
      eyebrow="Free consultation"
      heading="Book a Free Call With a Specialist"
      intro="Thirty minutes with someone who works on your channel every day. You will leave with a clear view of what is holding the store back and what the first three priorities are."
      points={[
        "Speak to a specialist, not a salesperson",
        "A straight assessment of what is and is not working",
        "You keep the recommendations either way",
        "No obligation to proceed",
      ]}
      breadcrumb="Book a Consultation"
      formHeading="Request your consultation"
      formText="Send your details and we will come back with times that work — usually the same day."
      submitLabel="Request a call"
      intent="consultation"
      faqs={faqs}
    />
  );
}

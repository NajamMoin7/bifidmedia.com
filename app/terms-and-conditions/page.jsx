import { LegalPage } from "@/components/layout/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms & Conditions",
  description:
    "The terms governing your use of bifidmedia.com and the basis on which BifidMedia provides e-commerce services.",
  path: "/terms-and-conditions",
});

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      updated="1 August 2026"
      intro="These terms govern your use of this website and set out the general basis on which BifidMedia provides its services. Individual engagements are also governed by a separate written agreement."
      sections={[
        {
          heading: "Acceptance",
          paragraphs: [
            "By accessing or using bifidmedia.com you agree to these terms. If you do not agree with them, please do not use the site.",
          ],
        },
        {
          heading: "Services",
          paragraphs: [
            "BifidMedia provides e-commerce management, marketing, development and related business services. The specific scope, fees, timelines and deliverables of any engagement are set out in a written proposal or service agreement, which takes precedence over these terms where the two conflict.",
          ],
        },
        {
          heading: "No professional advice",
          paragraphs: [
            "BifidMedia is not a law firm, an accountancy practice, a tax adviser or a financial adviser. Nothing on this website or communicated in the course of an engagement constitutes legal, tax, accounting or investment advice. Where such advice is required, you should consult an appropriately licensed professional. We are happy to coordinate with yours.",
          ],
        },
        {
          heading: "No guarantee of results",
          paragraphs: [
            "E-commerce outcomes depend on many factors outside our control, including your product, pricing, capital, supply chain, competition and each platform's own policies and algorithms. BifidMedia does not guarantee sales, rankings, approval outcomes, reinstatement or any other specific result. Any figures, timelines or examples discussed are illustrative and are not a promise of performance.",
          ],
        },
        {
          heading: "Client responsibilities",
          list: [
            "Providing accurate information and timely access to the accounts in scope.",
            "Holding all licences, permissions and rights necessary for the products you sell.",
            "Funding inventory, advertising and platform fees, which are your costs and not included in our fees unless expressly stated.",
            "Complying with the terms of every platform on which you sell.",
            "Making the commercial decisions that materially affect your risk position.",
          ],
        },
        {
          heading: "Fees and payment",
          paragraphs: [
            "Fees, payment terms and any minimum term are set out in your engagement agreement. Unless stated otherwise, fees are payable in advance of the period to which they relate and are exclusive of applicable taxes. Late payment may result in work being suspended.",
          ],
        },
        {
          heading: "Intellectual property",
          paragraphs: [
            "You retain ownership of your brand, trademarks, product information and the accounts on which we work. On full payment, deliverables produced specifically for you under an engagement transfer to you.",
            "BifidMedia retains ownership of its own methodologies, templates, internal tooling and pre-existing materials. Content on this website is owned by BifidMedia and may not be reproduced without permission.",
          ],
        },
        {
          heading: "Confidentiality",
          paragraphs: [
            "Each party will keep the other's confidential information confidential and use it only for the purposes of the engagement. We do not publish client names, data or performance figures without written permission.",
          ],
        },
        {
          heading: "Termination",
          paragraphs: [
            "Either party may terminate an engagement in accordance with the notice provisions of the applicable agreement. On termination we will hand over accounts, documentation and assets produced for you, subject to payment of outstanding fees.",
          ],
        },
        {
          heading: "Limitation of liability",
          paragraphs: [
            "To the fullest extent permitted by law, BifidMedia is not liable for indirect, incidental, special or consequential loss, or for loss of profits, revenue, data or goodwill. Our total aggregate liability arising out of or in connection with an engagement is limited to the fees paid by you in the three months preceding the event giving rise to the claim. Nothing in these terms excludes liability that cannot lawfully be excluded.",
          ],
        },
        {
          heading: "Third-party platforms",
          paragraphs: [
            "Our services involve third-party platforms and tools that we do not control. Their availability, policies, fees and enforcement decisions may change at any time, and BifidMedia is not responsible for those changes or for actions those platforms take against your account.",
          ],
        },
        {
          heading: "Governing law",
          paragraphs: [
            "These terms are governed by the laws of the State of Texas, and the courts of Travis County, Texas have exclusive jurisdiction over any dispute, unless your engagement agreement provides otherwise.",
          ],
        },
        {
          heading: "Changes",
          paragraphs: [
            "We may update these terms from time to time. Continued use of the website after changes are published constitutes acceptance of the revised terms.",
          ],
        },
      ]}
    />
  );
}

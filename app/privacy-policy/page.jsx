import { LegalPage } from "@/components/layout/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How BifidMedia collects, uses, stores and protects personal information submitted through bifidmedia.com and in the course of providing services.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="1 August 2026"
      intro="This policy explains what personal information BifidMedia collects, why we collect it, how we use and protect it, and the choices available to you."
      sections={[
        {
          heading: "Who we are",
          paragraphs: [
            "BifidMedia is an e-commerce services company based at 9310 Metric Blvd, Austin, TX 78586. For the purposes of this policy, BifidMedia is the controller of the personal information described below.",
          ],
        },
        {
          heading: "Information we collect",
          paragraphs: ["We collect the following categories of information:"],
          list: [
            "Information you give us: name, email address, telephone number, company or store details and anything you include in a message or form submission.",
            "Client account information: where you engage our services, the operational and commercial information necessary to deliver them.",
            "Technical information: IP address, browser type, device type, referring page and pages viewed, collected through analytics where you have consented.",
            "Communication records: emails, call notes and meeting summaries relating to your enquiry or engagement.",
          ],
        },
        {
          heading: "How we use your information",
          list: [
            "To respond to enquiries and provide the services you have requested.",
            "To administer contracts, invoicing and account management.",
            "To improve our website and understand which content is useful.",
            "To send the newsletter, where you have subscribed. You can unsubscribe at any time.",
            "To meet legal, tax and regulatory obligations.",
          ],
        },
        {
          heading: "Lawful bases",
          paragraphs: [
            "Where required by law, we rely on: performance of a contract (delivering services you have engaged us for), legitimate interests (responding to enquiries, improving the website, protecting the service against misuse), consent (analytics and marketing cookies, and newsletter subscription), and legal obligation (tax and accounting records).",
          ],
        },
        {
          heading: "Sharing your information",
          paragraphs: [
            "We do not sell personal information. We share it only where necessary with service providers who process data on our behalf under contract — including hosting, email delivery, analytics and payment processing — and where required by law.",
            "Where we access a marketplace or platform account on your behalf, we act on your instructions and only within the permissions you grant.",
          ],
        },
        {
          heading: "Retention",
          paragraphs: [
            "Enquiry records are retained for up to twenty-four months. Client records are retained for the duration of the engagement and for the period afterwards required by tax and contractual obligations. Newsletter subscriptions are retained until you unsubscribe.",
          ],
        },
        {
          heading: "Your rights",
          paragraphs: [
            "Depending on where you live, you may have the right to request access to, correction of, or deletion of your personal information; to object to or restrict certain processing; to request data portability; and to withdraw consent at any time. To exercise any of these rights, contact us using the details below. We will not discriminate against you for exercising them.",
          ],
        },
        {
          heading: "Cookies",
          paragraphs: [
            "We use strictly necessary cookies to operate the site, and optional analytics and marketing cookies only where you consent. You can change your choices at any time using the cookie preferences link in the footer. See our Cookie Policy for the detail.",
          ],
        },
        {
          heading: "Security",
          paragraphs: [
            "We apply technical and organisational measures appropriate to the risk, including access controls, encryption in transit and limiting account access to the people working on your engagement. No system is perfectly secure, and we cannot guarantee absolute security.",
          ],
        },
        {
          heading: "Children",
          paragraphs: [
            "Our services are directed at businesses. We do not knowingly collect personal information from anyone under 16. If you believe we have, contact us and we will delete it.",
          ],
        },
        {
          heading: "Changes to this policy",
          paragraphs: [
            "We may update this policy from time to time. The date at the top of this page shows when it was last revised. Material changes will be highlighted on the website.",
          ],
        },
      ]}
    />
  );
}

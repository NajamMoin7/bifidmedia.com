import { LegalPage } from "@/components/layout/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Disclaimer",
  description:
    "Important information about the nature of BifidMedia's services, results, third-party platforms and the limits of the information published on this website.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <LegalPage
      title="Disclaimer"
      updated="1 August 2026"
      intro="Please read this alongside our Terms & Conditions. It sets out the limits of what this website and our services represent."
      sections={[
        {
          heading: "General information only",
          paragraphs: [
            "Content published on bifidmedia.com is general and educational. It is not tailored to your circumstances and should not be relied on as the sole basis for a business decision. Always seek advice appropriate to your own situation before acting.",
          ],
        },
        {
          heading: "Not legal, tax or financial advice",
          paragraphs: [
            "BifidMedia is not a law firm, an accountancy practice or a financial advisory firm. We prepare and file business formation documents and coordinate with your professional advisers, but we do not provide legal, tax, accounting or investment advice, and no attorney-client or similar relationship is created by using this site or engaging our services.",
          ],
        },
        {
          heading: "No guarantee of results",
          paragraphs: [
            "E-commerce results depend on your product, pricing, capital, supply chain, competition and platform decisions outside our control. BifidMedia does not guarantee sales figures, search rankings, category approvals, account reinstatement or any other outcome. Where figures, timelines or scenarios are discussed they are illustrative only.",
          ],
        },
        {
          heading: "Income and earnings",
          paragraphs: [
            "We do not describe any of our services as passive income. Operating an e-commerce business requires capital, decisions and risk. Any reference to income potential is an illustration of a model, not a projection of what you will earn.",
          ],
        },
        {
          heading: "Third-party platforms and trademarks",
          paragraphs: [
            "Amazon, Walmart, Shopify, TikTok, Etsy, eBay, YouTube, Google and Meta are trademarks of their respective owners. BifidMedia is an independent service provider and is not affiliated with, endorsed by or sponsored by any of these companies. Platform names are used only to describe the services we provide.",
            "Those platforms control their own policies, fees, algorithms and enforcement decisions, and may change them at any time without notice.",
          ],
        },
        {
          heading: "External links",
          paragraphs: [
            "This website may link to third-party sites. We are not responsible for their content, accuracy or privacy practices, and a link does not imply endorsement.",
          ],
        },
        {
          heading: "Accuracy",
          paragraphs: [
            "We take care to keep this website accurate and current, but platform requirements change frequently. If something here appears out of date, please tell us and we will correct it.",
          ],
        },
      ]}
    />
  );
}

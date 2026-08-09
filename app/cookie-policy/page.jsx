import { LegalPage } from "@/components/layout/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Cookie Policy",
  description:
    "What cookies bifidmedia.com uses, what each category does and how to change your preferences at any time.",
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      updated="1 August 2026"
      intro="This policy explains what cookies and similar technologies we use on bifidmedia.com, what each category does, and how you can change your choices at any time."
      sections={[
        {
          heading: "What cookies are",
          paragraphs: [
            "Cookies are small text files placed on your device by a website. They are used to make a site work, to remember preferences, and to understand how the site is used. Similar technologies such as local storage serve comparable purposes and are covered by this policy.",
          ],
        },
        {
          heading: "Strictly necessary",
          paragraphs: [
            "These are required for the site to function and cannot be switched off. They cover page routing, security protections and remembering the cookie choice you have made. Without them the site would not work correctly.",
          ],
        },
        {
          heading: "Analytics",
          paragraphs: [
            "These help us understand which pages are visited and where people leave, so we can improve the content that is not working. The information is aggregated and is not used to identify you individually. Analytics cookies are only set if you consent.",
          ],
        },
        {
          heading: "Marketing",
          paragraphs: [
            "These measure the performance of our campaigns and allow BifidMedia content to be shown on other platforms. They are only set if you consent, and you can withdraw that consent at any time.",
          ],
        },
        {
          heading: "Managing your preferences",
          paragraphs: [
            "You can change your choices at any time using the “Cookie preferences” link in the site footer. You can also block or delete cookies through your browser settings, though doing so may affect how parts of the site work.",
          ],
        },
        {
          heading: "Do Not Track and global privacy signals",
          paragraphs: [
            "Where your browser sends a recognised opt-out preference signal, we treat it as a request to disable optional cookies.",
          ],
        },
        {
          heading: "We do not sell personal information",
          paragraphs: [
            "BifidMedia does not sell personal information. Optional cookies are used only to measure and improve our own marketing, and never to trade your data.",
          ],
        },
        {
          heading: "Changes",
          paragraphs: [
            "If the cookies we use change, this page will be updated and the date at the top revised.",
          ],
        },
      ]}
    />
  );
}

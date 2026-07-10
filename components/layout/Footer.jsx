import Image from "next/image";
import Link from "next/link";
import { siteConfig, navGroups } from "@/data/siteConfig";
import { amazonServices } from "@/data/amazonServices";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

const legal = [
  ["Privacy Policy", "/privacy-policy"],
  ["Terms and Conditions", "/terms-and-conditions"],
  ["Cookie Policy", "/cookie-policy"],
  ["Disclaimer", "/disclaimer"],
  ["Sitemap", "/sitemap"],
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div data-aos="fade-up">
          <Image src="/logo/Logo.png" alt="BifidMedia logo" width={160} height={48} />
          <p>{siteConfig.tagline}. BifidMedia helps teams create cleaner e-commerce operations without unsupported guarantees.</p>
          <p>{siteConfig.email}<br />{siteConfig.phone}<br />{siteConfig.address}</p>
        </div>
        <div data-aos="fade-up" data-aos-delay="100">
          <h2>Services</h2>
          {navGroups[0].items.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <h2>Amazon</h2>
          {amazonServices.slice(0, 10).map((item) => <Link key={item.slug} href={item.path}>{item.title}</Link>)}
        </div>
        <div data-aos="fade-up" data-aos-delay="300">
          <h2>Company</h2>
          {navGroups[2].items.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          {legal.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          <button type="button" className="privacy-link" data-open-privacy>Privacy Choices</button>
        </div>
      </div>
      <div className="footer-newsletter" data-aos="fade-up">
        <h2>Get Marketplace Growth Insights in Your Inbox</h2>
        <NewsletterForm />
      </div>
      <p className="disclaimer">Template legal and business information must be reviewed by the client and qualified professionals before production. BifidMedia is not presented as a law, tax, or financial firm.</p>
      <p className="copyright">© {siteConfig.copyrightYear} {siteConfig.brandName}. All rights reserved.</p>
    </footer>
  );
}

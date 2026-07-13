import { Phone } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function AnnouncementBar() {
  return (
    <div className="announcement">
      <span>Need help choosing the right marketplace path?</span>
      <a href={siteConfig.phoneHref} aria-label={siteConfig.callAriaLabel}>
        <Phone size={15} aria-hidden="true" /> {siteConfig.phoneDisplay}
      </a>
      <a href="/book-consultation">Free consultation</a>
    </div>
  );
}

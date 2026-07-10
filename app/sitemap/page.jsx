import Link from "next/link";
import { services } from "@/data/services";
import { amazonServices } from "@/data/amazonServices";
import { landingPages } from "@/data/landingPages";

export const metadata = { title: "Sitemap", description: "HTML sitemap for BifidMedia." };

export default function Page() {
  const pages = ["/", "/about", "/contact", "/faq", "/book-consultation", "/become-a-partner", "/blog", "/privacy-policy", "/terms-and-conditions", "/cookie-policy", "/disclaimer", ...services.map((s) => s.path), ...amazonServices.map((s) => s.path), ...landingPages.map((p) => p.path)];
  return (
    <section className="simple-page">
      <p className="eyebrow">Sitemap</p>
      <h1>All BifidMedia pages</h1>
      <div className="sitemap-list">{pages.map((page) => <Link href={page} key={page}>{page}</Link>)}</div>
    </section>
  );
}

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

/**
 * Breadcrumb trail with matching JSON-LD.
 * @param {{items: {label: string, href?: string}[]}} props
 */
export function Breadcrumbs({ items }) {
  if (!items?.length) return null;

  const trail = [{ label: "Home", href: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${siteConfig.url}${item.href}` } : {}),
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="border-b border-line bg-canvas">
      <div className="shell">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 py-3.5 text-[0.82rem] text-muted">
          {trail.map((item, index) => {
            const last = index === trail.length - 1;
            return (
              <li key={item.label} className="flex items-center gap-2">
                {item.href && !last ? (
                  <Link
                    href={item.href}
                    className="transition-colors duration-200 hover:text-brand"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="font-medium text-ink" aria-current="page">
                    {item.label}
                  </span>
                )}
                {!last ? (
                  <ChevronRight size={13} aria-hidden="true" className="text-line" />
                ) : null}
              </li>
            );
          })}
        </ol>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </nav>
  );
}

export default Breadcrumbs;

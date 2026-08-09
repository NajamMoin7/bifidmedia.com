import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { marketplaces } from "@/data/marketplaces";
import { PlatformIcon } from "@/components/ui/PlatformIcon";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="section-pad bg-white">
      <div className="shell">
        <div className="mx-auto max-w-2xl text-center">
          <span className="gradient-text text-[clamp(3.5rem,10vw,6rem)] font-bold leading-none">
            404
          </span>
          <h1 className="mt-4 text-[clamp(1.6rem,3vw,2.3rem)]">
            We could not find that page
          </h1>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-muted">
            The link may be out of date, or the page may have moved. Here are the
            places most people are looking for.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/" size="lg" withArrow>
              Back to home
            </Button>
            <Button href="/services" variant="outline" size="lg">
              Browse all services
            </Button>
          </div>
        </div>

        <ul className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {marketplaces.map((marketplace) => (
            <li key={marketplace.slug}>
              <Link
                href={marketplace.href}
                className="group flex items-center gap-3 rounded-[var(--radius-card)] border border-line bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-soft"
              >
                <PlatformIcon platform={marketplace.key} size={34} />
                <span className="flex-1 text-[0.95rem] font-semibold text-ink transition-colors duration-200 group-hover:text-brand">
                  {marketplace.name}
                </span>
                <ArrowUpRight size={15} aria-hidden="true" className="text-line" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

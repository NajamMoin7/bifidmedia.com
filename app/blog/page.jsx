import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Calendar } from "lucide-react";
import { ServiceHero } from "@/components/services/ServiceHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Newsletter } from "@/components/home/Newsletter";
import { AskStrategist } from "@/components/inner/AskStrategist";
import { posts } from "@/data/blog";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "E-Commerce Insights & Guides",
  description:
    "Practical guides on Amazon, Walmart, Shopify, TikTok Shop, Etsy and eBay — written by the BifidMedia specialists who run these accounts every day.",
  path: "/blog",
});

function formatDate(value) {
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndexPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <ServiceHero
        eyebrow="Insights"
        heading="Practical E-Commerce Guides, Written by Operators"
        intro="No listicles and no recycled platform announcements. These are the checklists, comparisons and diagnostics our team uses on client accounts."
        valueLine="Written by the people who run these accounts, not by a content agency."
        badges={["Amazon", "Walmart", "Shopify", "TikTok Shop", "Etsy", "eBay"]}
        primaryCta={{ label: "Browse articles", href: "#articles" }}
      />

      <Breadcrumbs items={[{ label: "Blog" }]} />

      <Section tone="canvas">
        <Link
          href={`/blog/${featured.slug}`}
          className="group grid gap-8 overflow-hidden rounded-[var(--radius-card)] border border-line bg-white lg:grid-cols-2"
          data-aos="fade-up"
        >
          <div className="relative min-h-[240px] lg:min-h-[380px]">
            <Image
              src={featured.image}
              alt={featured.imageAlt}
              fill
              preload
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:scale-[1.03]"
            />
          </div>
          <div className="flex flex-col justify-center p-7 lg:pr-10">
            <span className="inline-flex w-fit items-center rounded-[var(--radius-pill)] bg-sky px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-brand">
              {featured.category}
            </span>
            <h2 className="mt-4 text-[clamp(1.35rem,2.6vw,2rem)] transition-colors duration-200 group-hover:text-brand">
              {featured.title}
            </h2>
            <p className="mt-3 text-[0.98rem] leading-relaxed text-muted">
              {featured.excerpt}
            </p>
            <p className="mt-5 flex items-center gap-4 text-[0.82rem] text-muted">
              <span className="flex items-center gap-1.5">
                <Calendar size={13} aria-hidden="true" />
                {formatDate(featured.date)}
              </span>
              <span>{featured.readingTime}</span>
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-[0.9rem] font-semibold text-brand">
              Read article
              <ArrowUpRight size={15} aria-hidden="true" />
            </span>
          </div>
        </Link>
      </Section>

      <Section tone="white" id="articles">
        <SectionHeading
          title="All articles"
          text="Marketplace-specific playbooks and cross-channel operating guides."
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post, index) => (
            <li key={post.slug} data-aos="fade-up" data-aos-delay={(index % 3) * 70}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-white transition-all duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-lift"
              >
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:scale-[1.05]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="inline-flex w-fit items-center rounded-[var(--radius-pill)] bg-sky px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-brand">
                    {post.category}
                  </span>
                  <h3 className="mt-3 text-[1.05rem] transition-colors duration-200 group-hover:text-brand">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-[0.88rem] leading-relaxed text-muted">
                    {post.excerpt}
                  </p>
                  <p className="mt-auto flex items-center gap-3 pt-5 text-[0.78rem] text-muted">
                    <span>{formatDate(post.date)}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.readingTime}</span>
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <AskStrategist />
      <Newsletter />
    </>
  );
}

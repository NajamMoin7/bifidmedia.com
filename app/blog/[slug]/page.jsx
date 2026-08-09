import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar, ArrowUpRight } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Newsletter } from "@/components/home/Newsletter";
import { AskStrategist } from "@/components/inner/AskStrategist";
import { posts, getPost } from "@/data/blog";
import { siteConfig } from "@/data/siteConfig";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    ...pageMetadata({
      title: post.title,
      description: post.excerpt,
      path: `/blog/${post.slug}`,
      type: "article",
    }),
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `${siteConfig.url}/blog/${post.slug}`,
      publishedTime: post.date,
      images: [{ url: post.image }],
    },
  };
}

function formatDate(value) {
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function Block({ block }) {
  if (block.type === "h2") return <h2>{block.text}</h2>;
  if (block.type === "h3") return <h3>{block.text}</h3>;
  if (block.type === "ul") {
    return (
      <ul>
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  return <p>{block.text}</p>;
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    image: `${siteConfig.url}${post.image}`,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@id": `${siteConfig.url}/#organization` },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
  };

  return (
    <>
      <article>
        <header className="bg-white">
          <div className="shell pt-12 lg:pt-16">
            <div className="mx-auto max-w-3xl">
              <span className="inline-flex items-center rounded-[var(--radius-pill)] bg-sky px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-brand">
                {post.category}
              </span>
              <h1 className="mt-5 text-[clamp(1.85rem,3.8vw,2.8rem)]">
                {post.title}
              </h1>
              <p className="mt-4 text-[1.05rem] leading-relaxed text-muted">
                {post.excerpt}
              </p>
              <p className="mt-5 flex flex-wrap items-center gap-4 text-[0.83rem] text-muted">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} aria-hidden="true" />
                  {formatDate(post.date)}
                </span>
                <span>{post.readingTime}</span>
                <span>By the BifidMedia team</span>
              </p>
            </div>
          </div>
        </header>

        <Breadcrumbs
          items={[{ label: "Blog", href: "/blog" }, { label: post.title }]}
        />

        <div className="shell py-12">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-[var(--radius-card)] border border-line shadow-soft">
            <Image
              src={post.image}
              alt={post.imageAlt}
              width={1600}
              height={900}
              preload
              sizes="(min-width: 1024px) 900px, 100vw"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="prose-bifid mx-auto mt-10 max-w-3xl">
            {post.body.map((block, index) => (
              <Block key={index} block={block} />
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-3xl rounded-[var(--radius-card)] border border-line bg-sky/60 p-7">
            <h2 className="text-[1.2rem]">Want this handled for you?</h2>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">
              BifidMedia runs marketplace and storefront operations end to end.
              Send us your store and we will tell you what we would fix first.
            </p>
            <Link
              href="/free-audit"
              className="gradient-brand mt-5 inline-flex items-center gap-2 rounded-[var(--radius-pill)] px-5 py-3 text-[0.9rem] font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              Request a free audit
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </article>

      <Section tone="canvas">
        <SectionHeading title="More from the BifidMedia blog" align="left" />
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/blog/${item.slug}`}
                className="group flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-lift"
              >
                <span className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-brand">
                  {item.category}
                </span>
                <h3 className="mt-2 text-[1.02rem] transition-colors duration-200 group-hover:text-brand">
                  {item.title}
                </h3>
                <p className="mt-2 text-[0.87rem] leading-relaxed text-muted">
                  {item.excerpt}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <AskStrategist />
      <Newsletter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}

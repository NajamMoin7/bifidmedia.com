import { notFound } from "next/navigation";
import Image from "next/image";
import { getPost, posts } from "@/data/blog";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt, alternates: { canonical: `/blog/${post.slug}` } };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  return (
    <article className="simple-page article-page">
      <p className="eyebrow">{post.category} · {post.date}</p>
      <h1>{post.title}</h1>
      <Image className="page-image" src="/images/blog/blog-marketplace-growth.svg" alt={`${post.title} marketplace growth illustration`} width={960} height={600} priority sizes="(max-width: 768px) 100vw, 70vw" />
      <p>{post.excerpt}</p>
      <h2>Why this matters</h2>
      <p>Marketplace growth depends on clear inputs: catalog quality, offer positioning, channel fit, advertising structure, customer experience, and reporting. This article is an original BifidMedia editorial template that can be expanded with client-approved examples.</p>
      <h2>Practical checklist</h2>
      <ul>
        <li>Confirm the audience and search intent.</li>
        <li>Review listing, storefront, or campaign readiness.</li>
        <li>Set a measurable reporting rhythm.</li>
        <li>Avoid unsupported claims and document decisions.</li>
      </ul>
    </article>
  );
}

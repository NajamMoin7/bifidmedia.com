import Link from "next/link";
import Image from "next/image";
import { posts } from "@/data/blog";

export const metadata = { title: "Blog", description: "BifidMedia insights on marketplace management, Shopify, Amazon PPC, branding, and e-commerce operations." };

export default function Page() {
  return (
    <section className="simple-page">
      <p className="eyebrow">Blog</p>
      <h1>Marketplace growth insights.</h1>
      <div className="card-grid">
        {posts.map((post) => (
          <Link className="service-card" href={`/blog/${post.slug}`} key={post.slug}>
            <Image src="/images/blog/blog-marketplace-growth.svg" alt={`${post.title} visual summary`} width={960} height={600} sizes="(max-width: 768px) 100vw, 30vw" />
            <span>{post.category}</span>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

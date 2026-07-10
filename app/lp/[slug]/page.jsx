import { notFound } from "next/navigation";
import { LandingPage } from "@/components/lp/LandingPage";
import { getLandingPage, landingPages } from "@/data/landingPages";

export function generateStaticParams() {
  return landingPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getLandingPage(slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: page.path },
    robots: { index: false, follow: false },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const page = getLandingPage(slug);
  if (!page) notFound();
  return <LandingPage page={page} />;
}

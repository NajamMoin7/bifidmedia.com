import { Manrope, Inter } from "next/font/google";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { FloatingContact } from "@/components/ui/FloatingContact";
import { ExitIntentPopup } from "@/components/ui/ExitIntentPopup";
import { AosInitializer } from "@/components/ui/AosInitializer";
import { RouteProgress } from "@/components/ui/RouteProgress";
import { siteConfig } from "@/data/siteConfig";
import "./globals.css";

const manrope = Manrope({ variable: "--font-heading", subsets: ["latin"], display: "swap" });
const inter = Inter({ variable: "--font-body", subsets: ["latin"], display: "swap" });

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "BifidMedia | E-commerce Agency for Marketplace Growth",
    template: "%s | BifidMedia",
  },
  description: "BifidMedia helps entrepreneurs and growing brands build, manage, advertise, and optimize e-commerce businesses across major marketplaces.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "BifidMedia | E-commerce Agency for Marketplace Growth",
    description: "Launch, manage, and scale marketplace businesses with strategy, automation, advertising, and operations support.",
    url: siteConfig.url,
    siteName: "BifidMedia",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BifidMedia | E-commerce Agency",
    description: "Marketplace growth systems for Amazon, Walmart, Shopify, TikTok Shop, Etsy, and eBay.",
  },
  icons: {
    icon: [{ url: "/logo/FAVICON.png", type: "image/png" }],
    shortcut: "/logo/FAVICON.png",
    apple: "/logo/FAVICON.png",
  },
};

export default function RootLayout({ children }) {
  const org = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.brandName,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phoneSchema,
    address: {
      "@type": "PostalAddress",
      ...siteConfig.schemaAddress,
    },
    description: siteConfig.tagline,
  };

  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <AnnouncementBar />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FloatingContact />
        <CookieConsent />
        <ExitIntentPopup />
        <AosInitializer />
        <RouteProgress />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}

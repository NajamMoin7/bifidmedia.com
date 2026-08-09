import { Suspense } from "react";
import { Outfit } from "next/font/google";
import { siteConfig } from "@/data/siteConfig";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/privacy/CookieConsent";
import { RouteProgress } from "@/components/ui/RouteProgress";
import { AosProvider } from "@/components/ui/AosProvider";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default:
      "BifidMedia | E-Commerce Agency for Amazon, Walmart, Shopify & More",
    template: "%s | BifidMedia",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    url: siteConfig.url,
    title: "BifidMedia | Start, Automate and Scale Your E-Commerce Store",
    description: siteConfig.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "BifidMedia | Multi-Channel E-Commerce Agency",
    description: siteConfig.description,
  },
  icons: {
    icon: [{ url: "/logo/FAVICON.png", type: "image/png" }],
    shortcut: "/logo/FAVICON.png",
    apple: "/logo/FAVICON.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#165dff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  const organisation = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo/Logo.png`,
    email: siteConfig.email,
    telephone: siteConfig.phoneSchema,
    description: siteConfig.description,
    address: { "@type": "PostalAddress", ...siteConfig.postalAddress },
    areaServed: "US",
    sameAs: siteConfig.socials.map((s) => s.href),
  };

  return (
    <html lang="en" className={outfit.variable}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Suspense fallback={null}>
          <RouteProgress />
        </Suspense>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <CookieConsent />
        <AosProvider />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organisation).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}

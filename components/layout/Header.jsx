"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, Phone, X } from "lucide-react";
import { amazonServices } from "@/data/amazonServices";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/ui/Button";

const platformTabs = [
  {
    label: "Amazon Store",
    href: "/services/amazon-store",
    services: [
      ["Amazon LLC Formation", "/amazon/llc-formation", "Prepare the entity workflow and documentation sellers often need before launch."],
      ["Amazon Account Setup", "/amazon/seller-account-setup", "Set up seller account foundations with cleaner access and documentation."],
      ["Amazon Product Sourcing", "/amazon/product-sourcing", "Coordinate sourcing research, supplier checks, and operational next steps."],
      ["Amazon Brand Approval", "/amazon/brand-approval", "Prepare brand approval inputs with policy-aware marketplace guidance."],
      ["Amazon Enhanced Brand Content", "/amazon/enhanced-brand-content", "Improve branded product pages with richer visuals and conversion-focused layout."],
      ["Amazon Account Reinstatement", "/amazon/account-reinstatement", "Organize appeal documentation and account-health response workflows."],
      ["Amazon Brand Research", "/amazon/competitor-research", "Review market position, competitor signals, and brand opportunity areas."],
      ["Amazon Marketing", "/amazon/marketing", "Plan marketplace marketing activity across content, ads, and reporting."],
      ["Amazon Product Listing Optimization", "/amazon/listing-optimization", "Improve titles, bullets, images, keywords, and conversion cues."],
      ["Amazon Product Research", "/amazon/product-research", "Identify high-potential products through data-driven marketplace research."],
      ["Amazon Trademark Registration", "/amazon/trademark-support", "Coordinate trademark support steps with proper professional review."],
      ["Amazon Account Management", "/amazon/account-management", "Build account routines for catalog, health, inventory, and reporting."],
      ["Amazon Listing Reinstatement", "/amazon/listing-reinstatement", "Prepare listing issue reviews and policy-aware action plans."],
      ["Amazon Consultation", "/amazon/consultation", "Get focused guidance for Amazon launch, operations, and scale decisions."],
      ["Amazon PPC Advertising", "/amazon/ppc-management", "Structure campaigns, keyword tests, bids, and reporting routines."],
      ["Amazon Automation", "/amazon/automation", "Create operating workflows for marketplace management and repeatable execution."],
      ["Amazon Competitor Research", "/amazon/competitor-research", "Study competing offers, positioning, pricing, and content patterns."],
      ["Amazon Brand Registry Consulting", "/amazon/brand-registry-consulting", "Prepare registry workflows and documentation with careful expectations."],
      ["Amazon Inventory Management", "/amazon/inventory-management", "Improve replenishment, stock monitoring, and inventory coordination."],
      ["Amazon Reputation Management", "/amazon/reputation-management", "Support review monitoring, customer experience, and reputation routines."],
      ["Amazon SEO", "/amazon/seo", "Improve marketplace search foundations with keyword and content strategy."],
      ["Amazon Product Launch", "/amazon/product-launch", "Plan launch tasks across listings, inventory, campaigns, and reporting."],
      ["Amazon Post Management", "/amazon/post-management", "Coordinate brand post planning and marketplace content routines."],
      ["Amazon DSP Advertising", "/amazon/dsp-advertising", "Plan upper-funnel Amazon advertising with practical measurement expectations."],
      ["Amazon Order Fulfillment", "/amazon/order-fulfillment", "Align fulfillment support, order workflows, and operational documentation."],
      ["Amazon Product Listing Creation", "/amazon/listing-creation", "Create listing foundations with structured content and marketplace SEO."],
    ],
  },
  {
    label: "Walmart Marketplace",
    href: "/services/walmart-marketplace",
    services: [
      ["Walmart account setup", "/services/walmart-marketplace", "Prepare marketplace onboarding and account readiness workflows."],
      ["Walmart marketplace management", "/services/walmart-marketplace", "Coordinate catalog, orders, operations, and reporting."],
      ["Walmart product listing", "/services/walmart-marketplace", "Create product content aligned to marketplace requirements."],
      ["Walmart listing optimization", "/services/walmart-marketplace", "Improve product data, search signals, and conversion clarity."],
      ["Walmart advertising", "/services/walmart-marketplace", "Plan campaign structure, testing, and performance reporting."],
      ["Walmart automation", "/services/walmart-marketplace", "Build repeatable workflows for operational support."],
      ["Walmart inventory management", "/services/walmart-marketplace", "Coordinate product availability and replenishment routines."],
      ["Walmart order management", "/services/walmart-marketplace", "Improve fulfillment handoffs and order visibility."],
      ["Walmart account support", "/services/walmart-marketplace", "Review marketplace issues and practical next actions."],
    ],
  },
  {
    label: "Shopify Store",
    href: "/services/shopify-store",
    services: [
      ["Shopify store design", "/services/shopify-store", "Create a clean storefront experience for your brand and products."],
      ["Shopify store development", "/services/shopify-store", "Build flexible commerce pages, integrations, and store foundations."],
      ["Shopify migration", "/services/shopify-store", "Plan content, product, and platform migration workflows."],
      ["Shopify product upload", "/services/shopify-store", "Organize products, collections, images, and content fields."],
      ["Shopify SEO", "/services/shopify-store", "Improve technical and on-page search foundations."],
      ["Shopify speed optimization", "/services/shopify-store", "Review performance blockers and improve store responsiveness."],
      ["Shopify conversion optimization", "/services/shopify-store", "Improve shopping paths, product pages, and checkout clarity."],
      ["Shopify marketing", "/services/shopify-store", "Connect campaigns, email, analytics, and lifecycle marketing."],
      ["Shopify management", "/services/shopify-store", "Support ongoing content, operations, reporting, and improvements."],
    ],
  },
  {
    label: "TikTok Shop",
    href: "/services/tiktok-shop",
    services: [
      ["TikTok Shop setup", "/services/tiktok-shop", "Prepare shop foundations, catalog, and operational settings."],
      ["TikTok Shop management", "/services/tiktok-shop", "Coordinate products, orders, creators, campaigns, and reporting."],
      ["Product listing", "/services/tiktok-shop", "Create product pages suited for social commerce discovery."],
      ["Creator outreach", "/services/tiktok-shop", "Plan creator workflows and campaign collaboration steps."],
      ["TikTok advertising", "/services/tiktok-shop", "Structure ad testing and measurement for social commerce."],
      ["TikTok Shop SEO", "/services/tiktok-shop", "Improve product discoverability with cleaner content signals."],
      ["Order management", "/services/tiktok-shop", "Align fulfillment, tracking, and customer handoff routines."],
      ["Shop automation", "/services/tiktok-shop", "Build practical workflows for repeatable TikTok Shop operations."],
    ],
  },
  {
    label: "Etsy Shop",
    href: "/services/etsy-shop",
    services: [
      ["Etsy shop setup", "/services/etsy-shop", "Set up shop foundations, policies, and product organization."],
      ["Etsy listing creation", "/services/etsy-shop", "Create clear product pages for niche and creative goods."],
      ["Etsy SEO", "/services/etsy-shop", "Improve search visibility foundations through titles, tags, and content."],
      ["Etsy product research", "/services/etsy-shop", "Review demand, competition, and product positioning signals."],
      ["Etsy branding", "/services/etsy-shop", "Improve shop identity, presentation, and trust cues."],
      ["Etsy shop management", "/services/etsy-shop", "Coordinate listings, operations, reporting, and improvements."],
      ["Etsy advertising", "/services/etsy-shop", "Plan ad testing and listing performance routines."],
    ],
  },
  {
    label: "eBay Store",
    href: "/services/ebay-store",
    services: [
      ["eBay store setup", "/services/ebay-store", "Prepare seller foundations and store structure."],
      ["eBay listing creation", "/services/ebay-store", "Create clear listings with product content and images."],
      ["eBay listing optimization", "/services/ebay-store", "Improve listing quality, search signals, and buyer clarity."],
      ["eBay product research", "/services/ebay-store", "Review product demand, pricing, and competitor patterns."],
      ["eBay inventory management", "/services/ebay-store", "Coordinate stock, catalog routines, and seller workflows."],
      ["eBay advertising", "/services/ebay-store", "Plan marketplace promotion and reporting routines."],
      ["eBay account management", "/services/ebay-store", "Support seller standards, operations, and account visibility."],
    ],
  },
];

const businessServices = [
  ["Amazon Automation", "/amazon/automation", "Create structured marketplace operations, reporting, and management workflows."],
  ["Amazon Private Label", "/services/ecommerce-brand-launch", "Plan private-label brand foundations, product direction, and launch steps."],
  ["Amazon Reinstatement", "/amazon/account-reinstatement", "Organize account issue reviews and policy-aware documentation."],
  ["Shopify Dropshipping Automation", "/services/shopify-store", "Build practical storefront and order workflows for Shopify operations."],
  ["Personal Branding", "/services/personal-branding", "Shape authority, content pillars, and brand presence for founders."],
  ["TikTok Shop Automation", "/services/tiktok-shop", "Build workflows for TikTok Shop products, orders, creators, and campaigns."],
  ["Walmart Automation", "/services/walmart-marketplace", "Structure Walmart Marketplace operations and reporting routines."],
  ["YouTube Automation", "/services/youtube-automation", "Create repeatable content workflows, publishing systems, and analytics review."],
  ["Start Marketing Agency", "/services/marketing-agency-setup", "Plan offers, delivery systems, onboarding, and reporting foundations."],
  ["Start E-commerce Brand", "/services/ecommerce-brand-launch", "Build positioning, store, marketplace, and launch campaign foundations."],
  ["Social Media Marketing", "/services/social-media-marketing", "Plan content, creative testing, campaign structure, and reporting."],
  ["Launch Mobile Application", "/services/mobile-app-development", "Scope mobile app experiences, MVP priorities, and integration plans."],
];

export function Header({ simple = false }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [activePlatform, setActivePlatform] = useState(0);
  const closeTimer = useRef(null);
  const tabRefs = useRef([]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    queueMicrotask(() => {
      setOpenMenu(null);
      setMobileOpen(false);
    });
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("nav-lock", mobileOpen);
    const onKey = (event) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("nav-lock");
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  function openWithDelay(menu) {
    clearTimeout(closeTimer.current);
    setOpenMenu(menu);
  }

  function scheduleClose() {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 160);
  }

  function onTabKey(event, index) {
    const max = platformTabs.length - 1;
    if (event.key === "ArrowRight") {
      event.preventDefault();
      const next = index === max ? 0 : index + 1;
      setActivePlatform(next);
      tabRefs.current[next]?.focus();
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      const next = index === 0 ? max : index - 1;
      setActivePlatform(next);
      tabRefs.current[next]?.focus();
    }
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setActivePlatform(index);
    }
    if (event.key === "Escape") setOpenMenu(null);
  }

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <Link href="/" className="logo-link" aria-label="BifidMedia home">
        <Image src="/logo/Logo.png" alt="BifidMedia logo" width={150} height={44} priority />
      </Link>

      {!simple && (
        <nav className="desktop-nav" aria-label="Primary navigation">
          <button
            className={openMenu === "services" ? "active" : ""}
            onMouseEnter={() => openWithDelay("services")}
            onMouseLeave={scheduleClose}
            onClick={() => setOpenMenu(openMenu === "services" ? null : "services")}
            aria-expanded={openMenu === "services"}
          >
            Services <ChevronDown size={15} />
          </button>
          <Link href="/services/amazon-store">Start Amazon Store</Link>
          <button
            className={openMenu === "business" ? "active" : ""}
            onMouseEnter={() => openWithDelay("business")}
            onMouseLeave={scheduleClose}
            onClick={() => setOpenMenu(openMenu === "business" ? null : "business")}
            aria-expanded={openMenu === "business"}
          >
            Business Formation <ChevronDown size={15} />
          </button>
        </nav>
      )}

      <div className="header-actions">
        {!simple && <Link className="partner-link" href="/become-a-partner">Become a Partner</Link>}
        <a className="phone-link" href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
        <a className="phone-icon" href={`tel:${siteConfig.phone}`} aria-label="Call BifidMedia"><Phone size={18} /></a>
        <Button href="/book-consultation">Get Started <ArrowRight size={16} /></Button>
        {!simple && <button className="menu-toggle" onClick={() => setMobileOpen(true)} aria-label="Open menu"><Menu /></button>}
      </div>

      <AnimatePresence>
        {openMenu === "services" && !simple && (
          <ServicesMega
            activePlatform={activePlatform}
            setActivePlatform={setActivePlatform}
            tabRefs={tabRefs}
            onTabKey={onTabKey}
            onMouseEnter={() => openWithDelay("services")}
            onMouseLeave={scheduleClose}
          />
        )}
        {openMenu === "business" && !simple && (
          <BusinessMega onMouseEnter={() => openWithDelay("business")} onMouseLeave={scheduleClose} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileOpen && !simple && <MobileMenu onClose={() => setMobileOpen(false)} />}
      </AnimatePresence>
    </header>
  );
}

function ServicesMega({ activePlatform, setActivePlatform, tabRefs, onTabKey, onMouseEnter, onMouseLeave }) {
  const selected = platformTabs[activePlatform];
  return (
    <motion.div
      className="mega-full services-mega"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      initial={{ opacity: 0, y: -10, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -8, filter: "blur(6px)" }}
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      <div className="mega-inner">
        <div className="mega-tabs" role="tablist" aria-label="Service platforms">
          {platformTabs.map((tab, index) => (
            <button
              key={tab.label}
              ref={(node) => { tabRefs.current[index] = node; }}
              role="tab"
              aria-selected={activePlatform === index}
              aria-controls={`platform-panel-${index}`}
              className={activePlatform === index ? "active" : ""}
              onMouseEnter={() => setActivePlatform(index)}
              onClick={() => setActivePlatform(index)}
              onKeyDown={(event) => onTabKey(event, index)}
            >
              {tab.label}
              {activePlatform === index && <ChevronDown size={14} />}
            </button>
          ))}
        </div>
        <div id={`platform-panel-${activePlatform}`} role="tabpanel" className={`mega-service-grid ${selected.label === "Amazon Store" ? "four" : ""}`}>
          {selected.services.map(([title, href, description]) => (
            <Link href={href} className="mega-service-item" key={`${selected.label}-${title}`}>
              <strong>{title}</strong>
              <span>{description}</span>
              <ArrowRight size={15} />
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function BusinessMega({ onMouseEnter, onMouseLeave }) {
  return (
    <motion.div
      className="mega-full business-mega"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      initial={{ opacity: 0, y: -10, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -8, filter: "blur(6px)" }}
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      <div className="mega-inner">
        <div className="mega-heading">
          <p className="eyebrow">Business Services</p>
          <h2>Business Services</h2>
        </div>
        <div className="mega-service-grid three">
          {businessServices.map(([title, href, description]) => (
            <Link href={href} className="mega-service-item" key={title}>
              <strong>{title}</strong>
              <span>{description}</span>
              <ArrowRight size={15} />
            </Link>
          ))}
        </div>
        <div className="mega-consult-strip">
          <div>
            <h3>Business strategists with you at every stage</h3>
            <p>Get practical guidance for launching, managing, and scaling your digital business.</p>
          </div>
          <Button href="/book-consultation">Get a Consultation</Button>
        </div>
      </div>
    </motion.div>
  );
}

function MobileMenu({ onClose }) {
  return (
    <motion.div
      className="mobile-menu"
      role="dialog"
      aria-modal="true"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.28, ease: "easeOut" }}
    >
      <div className="mobile-menu-head">
        <Image src="/logo/Logo.png" alt="BifidMedia logo" width={142} height={42} />
        <button className="close-menu" onClick={onClose} aria-label="Close menu"><X /></button>
      </div>
      <MobileAccordion title="Services">
        {platformTabs.map((platform) => (
          <details key={platform.label} className="nested-mobile">
            <summary>{platform.label}</summary>
            <Link href={platform.href} onClick={onClose}>Overview</Link>
            {platform.services.slice(0, platform.label === "Amazon Store" ? 10 : platform.services.length).map(([title, href]) => (
              <Link href={href} key={title} onClick={onClose}>{title}</Link>
            ))}
          </details>
        ))}
      </MobileAccordion>
      <MobileAccordion title="Start Amazon Store">
        <Link href="/services/amazon-store" onClick={onClose}>Amazon Store Services</Link>
        {amazonServices.slice(0, 12).map((item) => <Link href={item.path} key={item.slug} onClick={onClose}>{item.title}</Link>)}
      </MobileAccordion>
      <MobileAccordion title="Business Formation">
        {businessServices.map(([title, href]) => <Link href={href} key={title} onClick={onClose}>{title}</Link>)}
      </MobileAccordion>
      <Link className="mobile-direct" href="/become-a-partner" onClick={onClose}>Become a Partner</Link>
      <a className="mobile-direct" href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
      <Button href="/book-consultation">Get Started</Button>
    </motion.div>
  );
}

function MobileAccordion({ title, children }) {
  return (
    <details className="mobile-accordion">
      <summary>{title}</summary>
      <div>{children}</div>
    </details>
  );
}

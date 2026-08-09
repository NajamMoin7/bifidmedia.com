# BifidMedia

Marketing site for **BifidMedia** — a multi-channel e-commerce agency covering Amazon,
Walmart Marketplace, Shopify, TikTok Shop, Etsy and eBay, plus the business-formation and
brand services around them.

Built with Next.js (App Router), JavaScript, Tailwind CSS v4, Swiper and AOS.

---

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
```

## Project structure

```
app/
  page.jsx                    homepage
  services/
    page.jsx                  full service catalogue
    [category]/page.jsx       the 7 category pages
  amazon|walmart|shopify|tiktok-shop|etsy|ebay/
    page.jsx                  marketplace store-launch hub
    [slug]/page.jsx           individual service page
  business/[slug]/page.jsx    individual business-service page
  about, contact, faq, blog, become-a-partner
  get-started, book-consultation, free-audit     conversion forms
  privacy-policy, terms-and-conditions, cookie-policy, disclaimer
  api/leads, api/newsletter   form endpoints
  sitemap.js, robots.js, not-found.jsx, loading.jsx, error.jsx

components/
  layout/        Header, Footer, LegalPage
  navigation/    MegaMenu, MobileMenu
  home/          homepage sections
  services/      ServiceHero, ServicePage, MarketplaceHub, ServiceIndex, …
  inner/         FeatureSplit, ComparisonTable, AskStrategist
  forms/         LeadForm, NewsletterForm, FormPage
  privacy/       CookieConsent + consent helpers
  ui/            Button, Section, Accordion, Slider, Marquee, PlatformIcon, …

data/
  siteConfig.js       brand, contact details, socials
  marketplaces.js     the six marketplace hubs
  services/           per-marketplace + business service catalogues
  navigation.js       header, mega menu and footer navigation
  homepage.js, faqs.js, blog.js, testimonials.js

lib/           seo, image selection, marketplace route plumbing
public/        logo, images
docs/          reference analysis
reference/     HTTrack layout reference — development only, git-ignored
```

## Information architecture

All services sit under one top-level **Services** navigation item:

```
Services
  └─ Category            Amazon · Walmart · Shopify · TikTok Shop · Etsy · eBay · Business
       └─ /services/<category>          category page — every service in that category
            └─ /<category>/<service>    individual service page
```

Breadcrumbs mirror it: `Home / Services / Amazon / Amazon SEO`.

**The catalogue is deliberately not in the header.** "Services" is an ordinary link to
`/services`; there is no mega menu and no service lists in the desktop or mobile
navigation. `/services` presents the seven categories as cards, and each category page
is the complete catalogue for that channel.

`data/serviceCategories.js` is the single source of truth for the seven categories.
The `/services` landing page, the category pages, related-service blocks, the footer
and the sitemap all derive from it — nothing is duplicated in a component.

The marketplace hubs (`/amazon`, `/walmart`, …) remain as store-launch landing pages
and are reachable from the "Start Amazon Store" nav item and each mega-menu panel.

## Content model

Service pages are generated from compact specs in `data/services/*.js`.
Each spec supplies its own hero copy, offerings and FAQs; the shared scaffolding
(process, audiences, tools, trust points, statistics) comes from the category it
belongs to. Adding a service means adding one spec object — the mega menu, category
page, sitemap and related-services links all update automatically.

Each built service object exposes: `slug`, `href`, `categoryId`, `group`,
`groupTitle`, `title`, `shortDescription`, `description`, `keywords`, `featured`,
plus the page-level copy (`heading`, `intro`, `valueLine`, `offerings`, `problems`,
`faqs`, metadata).

## Design system

Tokens live in `app/globals.css` under `@theme`:

| Token | Value |
|---|---|
| `--color-brand` | `#165DFF` |
| `--color-royal` | `#3045F4` |
| `--color-deep` | `#123A9C` |
| `--color-accent` | `#4D8DFF` |
| `--color-violet` | `#6840FF` |
| `--color-canvas` | `#F7F9FC` |
| `--color-sky` | `#EEF4FF` |
| `--color-ink` | `#111827` |
| `--color-muted` | `#5F6B7A` |
| `--color-line` | `#DCE5F5` |

Primary gradient: `linear-gradient(120deg, #165DFF 0%, #3045F4 55%, #6840FF 100%)`.

Marketplace brand colours (`--color-amazon`, `--color-walmart`, …) are used **only** for
platform icons, badges, accent rules and hover states. Page surfaces stay blue and white.

> Base element styles must stay inside `@layer base`. Unlayered CSS beats every Tailwind
> utility regardless of specificity, which silently breaks `text-*` utilities on anchors.

## Environment variables

All optional; the site builds and runs without them.

```
NEXT_PUBLIC_SITE_URL      canonical origin, defaults to https://bifidmedia.com
NEXT_PUBLIC_GA4_ID        analytics (BifidMedia's own property)
NEXT_PUBLIC_GTM_ID        tag manager (BifidMedia's own container)
```

Form submissions are validated in `app/api/*` and logged server-side. Connect a CRM or
email provider there when one is chosen.

## Reference directory

`reference/httpsstarterx.co/` is an HTTrack mirror kept **only** as a layout and
information-architecture reference. It is git-ignored, excluded from output file tracing
in `next.config.ts`, ignored by ESLint, and never imported by application code. No text,
imagery, branding, testimonial, statistic or tracking identifier from it ships in this
site. See `docs/starterx-reference-analysis.md`.

## Social proof

`data/testimonials.js` intentionally ships with an empty `clientTestimonials` array.
Until verified, attributable client testimonials are supplied, every social-proof slot
renders BifidMedia's written service commitments instead. Populate that array and the UI
switches over with no component changes.

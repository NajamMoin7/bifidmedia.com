# StarterX Reference Analysis (local HTTrack copy)

**Source of truth for this analysis:** the local mirror at `reference/httpsstarterx.co/`
(originally dropped into the repo root as `httpsstarterx.co/`).

**Purpose:** document the *architecture, information architecture, layout rhythm and
interaction patterns* of the reference site so BifidMedia can be rebuilt with the same
overall UX in Next.js — with original BifidMedia branding, copy, colours and assets.

> **Legal note.** The mirror contains StarterX copy, logos, testimonials, statistics,
> partner badges, Trustpilot/DMCA widgets and tracking IDs. **None of it is reused.**
> Only structure/layout/behaviour is taken. See §16.

---

## 1. Complete page list

The mirror contains 621 HTML files under `starterx.co/`. Excluding HTTrack artefacts
(`e.html`, `n.html`, `o.html`, `t.html`, `t-2.html`, `n-2.html`, `schema.html`,
`signals/*`, `appointment3e6c.html`, `“data_image/*`) and the 107 hash-suffixed blog
pagination duplicates (`blog/indexXXXX.html`), the real public pages are:

### 1.1 Top level (site pages)
| Reference file | Purpose |
|---|---|
| `index.html` | Homepage |
| `about.html` | About |
| `contact.html` | Contact |
| `faq.html` | FAQ |
| `affiliates.html` | Become a Partner / affiliates |
| `application.html` | Get Started lead-capture form page |
| `appointment.html`, `appointment/index.html`, `at-appointment.html` | Book a consultation |
| `free-audit.html` | Free audit lead page |
| `service.html` | "Business Service" landing (all-services overview) |
| `privacy-policy.html` | Legal |
| `terms-of-service.html` | Legal |
| `blog/index.html` | Blog index (WordPress/Elementor-rendered, separate template) |

### 1.2 Marketplace hubs (6) + their service children
| Hub | Reference path | Children |
|---|---|---|
| Amazon | `amazon-agency/index.html` | **45** service pages |
| Walmart | `walmart-agency/index.html` | 4 (`walmart-automation`, `walmart-marketing`, `walmart-ppc-advertising`, `walmart-seo`) |
| Shopify | `shopify-agency/index.html` | 8 (`shopify-automation`, `shopify-cro`, `shopify-dropshipping`, `shopify-seo`, `shopify-store-advertising`, `shopify-store-design`, `shopify-store-development`, `shopify-store-marketing`) |
| TikTok Shop | `tiktok-shop-agency/index.html` | 4 (`tiktok-shop-automation`, `tiktok-shop-influencer-marketing`, `tiktok-shop-management`, `tiktok-shop-marketing-and-advertising`) |
| Etsy | `etsy-shop-agency/index.html` | 4 (`etsy-advertising`, `etsy-automation`, `etsy-marketing`, `etsy-seo`) |
| eBay | `ebay-store-agency/index.html` | 6 (`ebay-account-management`, `ebay-account-reinstatement`, `ebay-automation`, `ebay-negative-feedback-removal`, `ebay-product-listing`, `ebay-seo`) |

Amazon children (`amazon-agency/amazon-*.html`): 3pl-logistics, a-to-z-guarantee-claims,
account-health-management, account-management, account-reinstatement, account-setup,
automation, brand-approval, brand-design-guidelines, brand-expansion, brand-management,
brand-protection, brand-registry-consulting, brand-research, brand-storefront,
competitor-research, customized-report, dsp-advertising, enhanced-brand-content,
fba-wholesale, fbm-wholesale, feedback-management, inventory-management,
listing-reinstatement, llc-formation, marketing, order-fulfillment, photography-video,
post-management, ppc-advertising, prep-center, private-label, product-launch,
product-listing-creation, product-listing-optimization, product-packaging-labeling,
product-research, product-sourcing, reimbursement-refund, reputation-management,
review-management, seo, store-audit, store-design, strategy-consulting,
trademark-registration.

### 1.3 Business / growth pages (flat, top level)
`business-formation.html`, `personal-branding.html`, `youtube-automation.html`,
`start-marketing-agency.html`, `start-your-marketing-agency.html`,
`start-your-ecommerce-brand.html`, `ultimate-business-model.html`,
`social-media-marketing.html`, `kickstarter-campaign.html`,
`launch-mobile-application.html`, `amazon-private-label.html`,
`shopify-dropshipping-automation.html`, `tiktok-shop-automation.html`,
`walmart-automation.html`.

---

## 2. URL structure

```
/                                   homepage
/about  /contact  /faq              company pages
/affiliates                         become a partner
/application                        "Get Started" form
/appointment                        book a call
/privacy-policy  /terms-of-service  legal
/blog/                              blog index (separate CMS template)
/service                            all-services overview

/<marketplace>-agency/              hub               e.g. /amazon-agency/
/<marketplace>-agency/<service>     leaf service page e.g. /amazon-agency/amazon-ppc-advertising
/ebay-store-agency/, /etsy-shop-agency/, /tiktok-shop-agency/   (naming is inconsistent)

/<business-topic>                   flat business pages, e.g. /business-formation
```

**Observations / what BifidMedia should improve**
* Naming is inconsistent (`amazon-agency` vs `ebay-store-agency` vs `etsy-shop-agency`).
* Leaf slugs repeat the marketplace name (`/amazon-agency/amazon-ppc-advertising`).
* BifidMedia adopts a normalised, cleaner scheme while preserving the same 2-level
  hub → service hierarchy (see §17).

---

## 3. Header structure

Three duplicated `<header id="header-top header-main">` blocks exist
(`.small-screen-off`, `.smallscreen`, `.tab-header`) — the same markup rendered three
times and toggled with CSS. **In Next.js this becomes one responsive component.**

### 3.1 Primary bar (`.main-navigate`, full-bleed `.container-fluid`)
Left → right:
1. Logo (`assets/images/logo.svg`) — links home.
2. `ul#menu`:
   * **All Services** — `.menu-click`, chevron icon, opens `.menu-sub` mega panel.
   * **Start Amazon Store** — `a.bordr` (outlined pill), links to the Amazon hub.
   * **Business Formation** — plain text link.
3. Right cluster (`.d-flex`, text-end):
   * **Become a Partner** — `.header-btn2.audit-button` + arrow icon.
   * **Phone number** — `.header-btn2.head-phone` `tel:` link + phone icon.
   * **Get Started** — `.header-btn` (solid brand pill) + arrow icon.
   * **Hamburger** — `a.bars-btn > .menu-btns > span span` (2-bar burger) which opens
     the full-screen `.menu.active` overlay panel (not a classic mobile drawer — it is
     used on desktop too).

### 3.2 Secondary bar (`.header-bottom` → `.extra-nav` → `ul#menu`)
Six marketplace entries, each with its own mega panel (`.menu-sub1` … `.menu-sub6`):

`Amazon Store` · `Walmart Marketplace` · `Shopify Store` · `TikTok Shop` ·
`Etsy Shop` · `eBay Store`

Each label is itself a link to that marketplace hub; hovering opens the panel.

### 3.3 Sticky behaviour
`custom.js` adds/removes an `active` class on scroll; the primary bar stays fixed and
the secondary bar collapses. BifidMedia reproduces: **primary bar sticky, white,
shadow appears after ~8px of scroll; secondary marketplace bar hides on scroll down and
returns on scroll up.**

### 3.4 Overlay panel (`.menu.active`)
Opened by `.bars-btn`. Contains:
* `ul.links-container` — About · Contact · FAQ's · Privacy Policy · Terms of Service
* `.bottom-ul` — 5–6 promoted service links, each with a small arrow icon
* `.final-botm` — "Don't like the forms? Schedule a **free call**…" + *Book an
  appointment* CTA (desktop) / mail CTA (mobile variant `.res-only`)

---

## 4. Navigation structure (information architecture)

```
All Services  (mega, 3 columns + CTA strip)
├─ col 1 : Amazon Automation [Hot] · Amazon Private Label · Amazon Reinstatement · Shopify Dropshipping Automation
├─ col 2 : Personal Branding [Hot] · TikTok Shop Automation · Walmart Automation · YouTube Automation
├─ col 3 : Start Marketing Agency [Hot] · Start Ecommerce Brand
└─ CTA strip : portrait image + "Business Strategists with you, every step of the way"
               + rating sentence + "Get A Consultation" button

Start Amazon Store   → Amazon hub
Business Formation   → /business-formation

Marketplace bar
├─ Amazon Store        → 4-column mega (26 links shown), each: title + one-line description
├─ Walmart Marketplace → 3-column mega
├─ Shopify Store       → 3-column mega
├─ TikTok Shop         → 3-column mega
├─ Etsy Shop           → 3-column mega
└─ eBay Store          → 3-column mega
```

Every mega panel ends with the same **CTA strip** (image + headline + consultation button).

---

## 5. Mega-menu structure & behaviour

* Trigger: **hover** on the trigger *or* the panel (`$(".menu-click, .menu-sub").hover(...)`),
  toggling `.active`. Opening one panel removes `.active` from all sibling chevrons.
* Panel is full-width, positioned under the bar, white surface, soft shadow.
* Grid: Bootstrap `col-md-3` (Amazon) or `col-md-4` (others) columns of `<ul><li>`.
* Item = `<a>title</a>` + `<span>one-line description</span>`; some items carry a
  `<span class="drop-child">Hot</span>` badge.
* Panel footer = `.cutom-padd` CTA strip (2 / 7 / 3 column split).
* Animation is a CSS opacity/visibility transition — **no spinner, no data fetch.**

**BifidMedia implementation:** hover + keyboard/focus accessible, ~150 ms fade +
4 px `translateY`, closes on `Escape`/outside click/route change, `prefers-reduced-motion`
respected.

---

## 6. Homepage sections (exact order)

| # | Reference class | Content |
|---|---|---|
| 1 | `.banner-sec` | **Hero.** 6/5 split. Left: Trustpilot widget, `h1`, paragraph, four platform pill-buttons each with a marketplace icon (Amazon / Walmart / Shopify / TikTok Shop), then a "banner-second-txt" strip: badge image + `h2` "Not sure which business service fits your goals? …" + inline *Schedule a Free Call Now* link. Right: large hero image (`New-Main-Banner.png`). AOS `fade-up` with staggered 1000→2000 ms durations. |
| 2 | `.attorneys-sec` | Dark full-width band: accreditation badge (left, `col-lg-2`) + `h2` + paragraph + single CTA button. |
| 3 | `.partnerswrp` | "Our Trusted Partners" — `h4` + infinite logo marquee (`ul.port-slider`, slick, autoplay, 6→4→3 slides). |
| 4 | `.secndwrpr.scnd` | "Our Solutions for Your Business Growth" — 7 icon tiles in one row (`ul.boxwrap > li.nav-item > button`): Amazon Store, Walmart Marketplace, Shopify Store, TikTok Shop, Etsy Shop, YouTube Automation, eBay Store. |
| 5 | `.minlion-sec` | 3-up statistics: big number `h2`, label `h3`, supporting paragraph. AOS `fade-up`, anchor `center-bottom`. |
| 6 | `.online-store-wrp` | "Struggling to Start or Scale…" — centered intro, then 7/4 split: left = 3 stacked problem cards (icon + `h6` + paragraph); right = a single highlighted solution card (logo badge + `h6` + 2 paragraphs + CTA) with an image beneath. |
| 7 | `.new-testimonials` | "We Build and Manage Stores on These E-Commerce Platforms" — 6 **expanding accordion panels** (`.testimonial-inner.expand/.shrink`): collapsed = vertical title, hover/active = expands to reveal marketplace icon, `h4`, paragraph with inner link. Ends with 2 CTAs (primary + "Still Confused? Call Us Now" phone). |
| 8 | `.roadmap-to-2020` | "Here's How Your E-Commerce Journey Starts with Us" — 5 numbered arrow-shaped step cards + a 6th "CTA card". AOS `fade-right` staggered. |
| 9 | `.tabs-wrp.tabs-home` | "How Our E-Commerce Agency Builds and Grows Your Store" — horizontal **tab slider** (`ul.tabbing-links.tap-slider`, slick, 3 visible, arrows) of 13 icon+label tabs; below, the active tab shows a 5/6 split: text panel (`h4` + 2 paragraphs) and image. Ends with the same 2 CTAs. |
| 10 | `.legal-help-sec.bg-clr` | Image-left / text-right feature. Image has an overlaid stat card (`.legaal-inner`: icon + `h6` claim). Text: `h3` + 2 paragraphs + CTA. |
| 11 | `.legal-help-sec.style` | Mirrored: text-left / image-right, same anatomy. |
| 12 | `.main-review` | Centered quote-mark image (AOS `zoom-in-down`) + auto-playing testimonial slider (paragraph, `h5` name, `h6` role). |
| 13 | `.chosse-sec` | "Why … is the Smart Choice" — left column of 3 `h3`+paragraph benefits, full-width image below, then a 4-up `.round-cta` row of icon + `h6` trust points. |
| 14 | `.add-sec` | Comparison: two cards side by side ("Benefits with X" vs "DIY (Starting as Solo)"), each a `h3` + 5 `<li>` with bolded lead-ins. |
| 15 | `.important-sec` | "Why Launching Another Revenue Stream is Important?" — centered intro + 3 icon cards (icon, `h3`, paragraph). |
| 16 | `.service-review` | "See what people say about …" — heading, then **two opposite-direction marquees** (`.slick.marquee`, `.slick.marq-2`) of review cards (avatar, name, verified badge, quote, brand mark, "Date of Experience"). |
| 17 | `.boxeswrp` | Editorial mosaic: mixed review cards, stat cards (`699+`, `#1`, `05+ years`) and photos in an 8/4 masonry-ish grid, with a nested testimonial slider. |
| 18 | `.newzletterwrp` | Newsletter: left image with two floating stat labels; right `h2` + paragraph + inline **name/email/submit** form. |
| 19 | `.faq-sec` | "Frequently Asked Questions" — Bootstrap accordion, 11 items. |
| 20 | `footer.testiomal-sec` | See §9. |
| 21 | `#exampleModaltwo` | "Your Privacy Choices" modal (see §12). |

---

## 7. Inner-page sections

### 7.1 Marketplace hub template (`amazon-agency/index.html`)
1. `.banner-main-sec` — hero with full-bleed background image + left text column
2. `#combo-pack.partnerswrp` — partner/badge marquee
3. `.fitbox.new-iconswrp` — "business models we manage" (3 cards) + "Not sure what to choose?" CTA
4. `.mil-team-sec` — 3-up statistics band
5. `.register-sec` — capability index: **10 grouped service categories** (`h3` group → 3–5 `h4` links). This is the hub's link hub to all 45 leaf pages
6. `.tabs-wrp.responsive-seeting` — success stories tab slider
7. `.mobileslidewrp` — ROI calculator
8. `.help-support-sliders-sec.new-boxes` — "Become Our Partner in 3 Easy Steps"
9. `.two-col-sec.new-box-two` — "Requirements to Partner with us" (4 cards)
10. `.step-sec` — "What Makes … the Best Partner" (4 points + image)
11. `.step-prog` — step-by-step growth process
12. `.price-list` — comparison table (Us vs Other Agencies vs DIY)
13. `.get-started-sec.means-sec` — category coverage
14. `.leader-sec` — big CTA band
15. `.service-review` — double review marquee
16. `.boxeswrp` — editorial mosaic
17. `.faq-sec` — FAQ accordion (extensive, includes long-form `h2`+`h3` content blocks)
18. `.agent-sec` — "Questions? Ask a strategist" contact band
19. footer

### 7.2 Leaf service-page template (`amazon-agency/amazon-ppc-advertising.html`) — **the canonical inner page**
| # | Section | Anatomy |
|---|---|---|
| 1 | `.banner-main-sec` | Full-bleed background image; left column: rating widget, `h1`, intro paragraph, `span.highlighted` value sentence, primary CTA + outlined "Talk to an Expert" phone CTA, then a small badge slider (`ul.port-banner-slider`) |
| 2 | `.minlion-sec` | "Why most sellers struggle with X" — 4 problem cards, each `h3` problem + `h4` "Our Solution:" + paragraph |
| 3 | `.tabs-wrp.tabs-home` | "Our X Services" — tabbed/iconised list of 8 sub-services |
| 4 | `.step-sec` | "Tailored X for Every Type of Seller" — left: 3 `h3` (icon inline) + paragraph audience segments; right: image with floating label chip |
| 5 | `.chosse-sec` | "Why we're the trusted partner" — 3 guarantees + 3 `.round-cta` trust icons |
| 6 | `.main-review` | Quote testimonial slider |
| 7 | `.roadmap-to-2020` | "Our proven process" — 6 numbered steps |
| 8 | `.box-section` | "Tools we use" — 3-col icon cards (`.conta-inner-b`) |
| 9 | `.service-review` | Double review marquee |
| 10 | `.mil-team-sec` | Statistics band |
| 11 | `.leader-sec` | CTA band: 8/4 split, `h2` + 2 paragraphs + 2 CTAs + image |
| 12 | `.faq-sec` | 10-item FAQ accordion |
| 13 | `.leader-sec.other-service-section` | "Done for You … Management" — related-services grid |
| 14 | `.agent-sec` | "Questions? Ask a strategist" — phone, opening hours, *Schedule a call* |
| 15 | footer |

**There is no visible breadcrumb component** in the reference; BifidMedia adds one under
the inner hero for usability + SEO (a deliberate, documented improvement).

### 7.3 Other page templates
* **About** — `.about-banner` → `.about-sec` (what makes us different) → `.partnerswrp` → `.highlight-sec` (3 stats) → `.our-story-sec` → `.value-sec` (6 values) → `.official-sec` → `.leader-sec` (founder quote) → `.ready-sec` (contact CTA)
* **Contact** — `.contact-sec` (`h1` + 2 contact cards "Customer support" / "Sales" + "Ask a question" form) → `.faq-sec`
* **FAQ** — `.banner-main-sec` → `.faq-sec` with grouped accordions ("Top questions", "Third-Party Tools and Platforms", "Intellectual Property, Refunds, and Assessment")
* **Appointment / Application** — `.banner-main-sec.fast.service-review` (hero + trust marquee) → `.get-started-sec` (multi-field form)
* **Affiliates / Become a Partner** — hero → partners → `.fitwrap`/`.fitbox` benefits → video/list section → `.step-prog` → `.important-sec` → `.estate-sec` → `.main-cta` → FAQ
* **Blog** — completely separate WordPress/Elementor template (own header/footer markup), card grid + "recent blogs" feature block

---

## 8. Service-page template summary (what BifidMedia must reproduce)

```
Hero (bg image, h1, intro, value line, 2 CTAs, trust badges)
Breadcrumb                       [BifidMedia addition]
Problem / "why sellers struggle" (4 problem→solution cards)
Service explanation / what's included (8 sub-services)
Audience segments (3, image + floating label)
Benefits / why choose us (3 guarantees + 3 trust icons)
Testimonial quote slider
Process (6 numbered steps)
Tools / capabilities grid (icon cards)
Review marquee (2 rows, opposite directions)
Statistics band (3 stats)
CTA band (headline + 2 CTAs + image)
FAQ accordion (10)
Related services grid
"Ask a strategist" contact band
Newsletter
Footer
```

---

## 9. Footer

`footer.testiomal-sec`, dark, 5/7 split:
* **Left (5)** — white logo, positioning paragraph, "Find Us" list (city, `tel:` link,
  `mailto:` link with arrow icon), social icon row (Facebook, LinkedIn, Instagram).
* **Right (7)** — three link columns:
  * *Services*: the 6 marketplaces (Amazon carries a `New` badge)
  * (unlabelled 2nd column): Business Formation `Hot`, Personal Branding `Hot`,
    YouTube Automation, Start Marketing Agency `Hot`, Ultimate Business Model `Hot`
  * *Company*: About, Contact, Blogs, Privacy Policy, Terms of Service,
    Become a Partner, Get a Consultation
* **Notice row** — a collapsible "CLIENT'S PRIVACY NOTICE" accordion with a
  *Read More…* chevron.
* **Bottom row** — DMCA badge, copyright line, long disclaimer paragraph with inline
  Terms/Privacy links, and a **"Your privacy choices"** link that opens the privacy modal.
* **`.floating-image`** — fixed DMCA badge bottom-corner.

---

## 10. Forms

| Form | Location | Fields |
|---|---|---|
| Newsletter | homepage `.newzletterwrp`, footer of several pages | Name, Email, Submit (+ hidden `ctry`, `pc`, `cip`, `hiddencapcha`, `locationURL`) |
| Contact "Ask a question" | `contact.html` | Name, Email, Phone, Message |
| Application / Get Started | `application.html` | Multi-step lead form |
| Appointment | `appointment.html` | Booking form |
| Free audit | `free-audit.html` | Lead form |

All post to StarterX endpoints and carry hidden IP/country/captcha fields.
**BifidMedia keeps only the field *shape*** and posts to its own `/api/*` routes.

---

## 11. Sliders

Library: **slick-carousel** (jQuery). Instances:

| Selector | Config |
|---|---|
| `.port-slider` / `.b2b-slider` | logo marquee — autoplay, infinite, no arrows/dots, 6 → 4 → 3 slides |
| `.slick.marquee`, `.slick.marq-2` | continuous review marquees, opposite directions |
| `.tap-slider` (`ul.tabbing-links`) | tab strip — 3 visible, arrows, `infinite:false`, → 1 slide on mobile with centerMode |
| `.home-testi-slider`, `.authority-testi-slider`, `.implewrp-slider` | testimonial sliders, autoplay, fade |
| `.port-banner-slider` | small badge row in inner-page heroes |
| `.only-responsive-slide` | slider **only below 768 px** — un-slicked on desktop |
| `.video-review-slider` | video testimonial slider |

**BifidMedia** re-implements these with **Swiper** (autoplay, loop, pause-on-hover,
touch, responsive breakpoints, no visible scrollbar, no horizontal page overflow).

---

## 12. Popups / modals

* **`#exampleModaltwo` "Your Privacy Choices"** — Bootstrap modal opened from the footer
  link. Contains 5 explanatory paragraphs, an `h4` "Manage Ad Targeting Cookie
  Preferences", one toggle switch ("Targeting and Engagement Cookies") and a
  *Confirm My Choices* button. **This is the oversized modal BifidMedia deliberately
  replaces with a compact consent bar** (bottom bar on desktop, compact card on mobile).
* **Fancybox** is loaded for image/video lightboxes.
* No exit-intent popup in the reference.

---

## 13. Animations

* **AOS 2.3.1** (`AOS.init()`), used on headings, cards, images, stats, process steps:
  `fade-up` (most common), `fade-right` (roadmap steps), `zoom-in-down` (quote mark);
  `data-aos-duration` staggered 500 → 2000 ms; `data-aos-anchor-placement="center-bottom"`
  on stat bands.
* **WOW.js + animate.css** — `wow fadeInDown` on a few hero elements.
* **CSS transitions** — buttons lift on hover (`transform: translateY(-0.625rem)`,
  0.3–0.4 s ease-in-out); mega panels fade via opacity/visibility; the
  `.testimonial-inner` platform panels expand/shrink on hover.
* **lazyload.min.js** — `img.lazy` with a 1×1 gif placeholder + `data-src`.

BifidMedia: AOS with `once: true`, 600–800 ms durations, and a global
`prefers-reduced-motion` kill-switch; `next/image` replaces the lazyload shim.

---

## 14. Responsive behaviour

* Bootstrap 4 grid; containers `1140px` (lg) / `1320px` (xl).
* Breakpoints in use: `1400 / 1200 / 1080 / 991 / 800 / 767 / 575`.
* Three separate header markup copies swapped by CSS (`.small-screen-off`,
  `.smallscreen`, `.tab-header`) — **collapsed to a single responsive component.**
* `jquery.slicknav.js` builds the mobile drawer from the desktop `ul#menu`.
* Marketplace bar (`.header-bottom`) is hidden on small screens; its contents move into
  the overlay menu (`.menu.active.all-service`).
* Mobile-only sliders are initialised/destroyed on resize (`mobileOnlySlider()`).
* Section vertical rhythm: `.padd-tb` ≈ 90–100 px desktop, ~50 px mobile.

---

## 15. Images used (inventory by role)

Under `starterx.co/assets/images/` (+ per-service folders under
`assets/images/amazon-agencies/<service>/`, `.../shopify-agency/…`, etc.):

| Role | Examples |
|---|---|
| Logos / brand | `logo.svg`, `logo-white.svg`, `Favicon.svg`, `STX-image.png`, `StarterX-Badges-Logo.svg` |
| Marketplace icons | `amazon.svg`, `walmart.svg`, `shopify.svg`, `feature-Tiktok.svg`, `feature-eBay.svg`, `feature-Etsy.svg` |
| Partner/trust badges | `StarterX-Badges-wise/payoneer/mercury/bizee/relay/american-expres/5chase.svg`, `Amazon-Ads-Verified-Partner.svg`, `tw-verified.png`, `DMCA-StarterX.png` |
| Hero / banner | `New-Main-Banner.png`, per-service `Main-Banner.jpg` |
| Feature illustrations | `Feature-Amazon-Store.png`, `Feature-Walmart-Marketplace.png`, `Feature-Shopify-Store.png`, `Feature-TikTok-Shop.png`, `Feature-ebay-Store.png`, `Feature-Etsy-Shop.png` |
| Capability icons | `Icons_LLC Setup.svg`, `Icons_Store-Setup-and-Development.svg`, `Icons_eCommerce-SEO.svg`, `Icons_Ads-and-Paid-Media.svg`, … (13 for the homepage tab strip) |
| Section photos | `third-fold.jpg`, `second-fold.jpg`, `service-forth-fold.jpg`, `Amazon-First-Fold.jpg` |
| CTA art | `Amazon-CTA.png`, per-service `CTA.jpg` |
| Decorative | `quotes-img.svg`, `idea.svg`, `shield.svg`, `arrow-top-white.svg`, `half-attorney.png` |
| Avatars | `initial-profile.jpg` |

**Reuse verdict: none.** Every one of these is either StarterX branding, a
third-party trademark (Trustpilot/DMCA/partner badges), or an unlicensed stock photo.
BifidMedia supplies its own logo, its own photography, and **original** marketplace
glyphs drawn in each platform's brand colour (§12 of the brief).

---

## 16. Assets and content explicitly NOT carried over

* StarterX logo, wordmark, name, favicon, DMCA badge, Trustpilot widget
* All StarterX copy, testimonials, reviewer names/avatars, "Date of Experience" cards
* All StarterX statistics (`330 Million+`, `3X`, `$150 Million+`, `699+`, `5,710+`,
  `10,000+`, `85,000+`, `$2.6M`, "75% of our clients…")
* Partner/accreditation badges (Wise, Payoneer, Mercury, Bizee, Relay, Chase, Amex, BBB,
  Amazon Ads Verified Partner, etc.) and every associated claim
* Legal identity ("StarterX Technologies Inc.", "StarterX, Inc."), Springfield IL address,
  `+1 (217) 290-0821`, `hello@starterx.co`
* **All tracking**: GA4 `G-FEEC0RZC04`, GTM `GTM-TXNBJTRC`, Meta pixel
  (`connect.facebook.net`), Trustpilot widget script, `app.starterx.co` / `link.starterx.co`
  scripts, `signals/*` files, `cookies.txt`, `hts-cache/`, `hts-log.txt`
* jQuery, Bootstrap JS, slick, slicknav, fancybox, wow.js, lazyload, popper, the
  bundled `KarasumaGothic-Regular.otf`, FontAwesome webfonts

---

## 17. Reusable UI patterns → BifidMedia components

| Reference pattern | BifidMedia component |
|---|---|
| `.main-navigate` + `.header-bottom` | `components/layout/Header.jsx` |
| `ul#menu` triggers | `components/navigation/Navigation.jsx` |
| `.menu-sub` / `.menu-sub1..6` | `components/navigation/MegaMenu.jsx` |
| `.bars-btn` + `.menu.active` overlay | `components/navigation/MobileMenu.jsx` |
| `footer.testiomal-sec` | `components/layout/Footer.jsx` |
| `.banner-sec` | `components/home/Hero.jsx` |
| `.secndwrpr` tiles | `components/home/Platforms.jsx` |
| `.new-testimonials` expanding panels | `components/home/PlatformShowcase.jsx` |
| `.roadmap-to-2020` | `components/home/Process.jsx` |
| `.tabs-wrp` tab slider | `components/home/Capabilities.jsx` |
| `.minlion-sec` / `.mil-team-sec` | `components/ui/StatsBand.jsx` |
| `.legal-help-sec` split feature | `components/inner/FeatureSplit.jsx` |
| `.online-store-wrp` | `components/home/ProblemSolution.jsx` |
| `.add-sec` comparison | `components/inner/ComparisonTable.jsx` |
| `.important-sec` / `.box-section` icon cards | `components/ui/IconCardGrid.jsx` |
| `.service-review` marquees | `components/ui/ReviewMarquee.jsx` |
| `.main-review` quote slider | `components/ui/QuoteSlider.jsx` |
| `.partnerswrp` logo marquee | `components/ui/LogoMarquee.jsx` |
| `.faq-sec` accordion | `components/ui/Accordion.jsx` |
| `.newzletterwrp` | `components/home/Newsletter.jsx` |
| `.leader-sec` CTA band | `components/services/ServiceCTA.jsx` |
| `.agent-sec` | `components/inner/AskStrategist.jsx` |
| `.banner-main-sec` inner hero | `components/services/ServiceHero.jsx` |
| `.register-sec` capability index | `components/services/ServiceIndex.jsx` |
| `#exampleModaltwo` | replaced by `components/privacy/CookieConsentBar.jsx` (compact) |

### BifidMedia URL mapping (normalised)

| Reference | BifidMedia |
|---|---|
| `/amazon-agency/` | `/amazon` |
| `/amazon-agency/amazon-ppc-advertising` | `/amazon/ppc-advertising` |
| `/walmart-agency/` | `/walmart` |
| `/shopify-agency/` | `/shopify` |
| `/tiktok-shop-agency/` | `/tiktok-shop` |
| `/etsy-shop-agency/` | `/etsy` |
| `/ebay-store-agency/` | `/ebay` |
| `/business-formation`, `/personal-branding`, … | `/services/<slug>` |
| `/application` | `/get-started` |
| `/appointment` | `/book-consultation` |
| `/affiliates` | `/become-a-partner` |
| `/terms-of-service` | `/terms-and-conditions` |

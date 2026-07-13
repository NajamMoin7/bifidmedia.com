# BifidMedia Website

Premium Next.js agency website for BifidMedia, focused on e-commerce automation, marketplace management, branding, advertising, and digital business development.

## Install

```bash
npm install
```

## Development

```bash
npm run dev
```

## Production Build

```bash
npm run build
npm run start
```

## Environment Variables

- `NEXT_PUBLIC_SITE_URL`
- `CONTACT_RECIPIENT_EMAIL=info@bifidmedia.com`
- `CRM_WEBHOOK`
- `EMAIL_PROVIDER`
- `NEWSLETTER_WEBHOOK`
- `NEXT_PUBLIC_GA4_ID`
- `NEXT_PUBLIC_GTM_ID`
- `NEXT_PUBLIC_GOOGLE_ADS_ID`
- `NEXT_PUBLIC_META_PIXEL_ID`
- `NEXT_PUBLIC_LINKEDIN_PARTNER_ID`
- `NEXT_PUBLIC_CLARITY_ID`
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
- `RECAPTCHA_SECRET_KEY`

## Editing Content

- Business details: `data/siteConfig.js`
- Primary services: `data/services.js`
- Amazon services: `data/amazonServices.js`
- FAQs: `data/faqs.js`
- Testimonials and case studies: `data/testimonials.js`
- Blog posts: `data/blog.js`
- PPC landing pages: `data/landingPages.js`

Official business contact details are centralized in `data/siteConfig.js`:

- Phone: `+1 (512) 410-5874`
- Email: `info@bifidmedia.com`
- Address: `9310 Metric Blvd, Austin, TX 78586`

Replace every sample testimonial/case study before production launch.

## Adding Services

Add a service object in `data/services.js` or `data/amazonServices.js`. The route is generated automatically from the `slug`.

## Editing Menus

Primary menu groups live in `data/siteConfig.js`. Amazon menu items come from `data/amazonServices.js`.

## Forms

Forms post to:

- `/api/leads`
- `/api/newsletter`

Lead submissions include consent, source path, UTM values, `gclid`, and `fbclid`. Connect `CRM_WEBHOOK` and `NEWSLETTER_WEBHOOK` to send data to external systems.
Set `CONTACT_RECIPIENT_EMAIL=info@bifidmedia.com` in production for email notifications.

## Analytics

Analytics IDs are stored as environment variables. Marketing scripts should only be loaded after cookie consent where legally required.

## Vercel Deployment

Set environment variables in Vercel, run a production build, then deploy. The app uses App Router, static params for service routes, Metadata API, `sitemap.js`, and `robots.js`.

## SEO Checklist

- Confirm every placeholder is replaced.
- Review metadata and canonical URLs.
- Expand service copy with client-approved details.
- Verify FAQ schema only reflects visible FAQs if schema is extended.
- Confirm no unsupported claims are present.
- Submit `/sitemap.xml` after launch.

## Pre-launch Checklist

- Test desktop and mobile navigation.
- Test all forms and webhook integrations.
- Test cookie preferences.
- Verify PPC landing pages and conversion events.
- Replace sample testimonials and case studies.
- Review legal pages with a qualified professional.
- Check Lighthouse performance, accessibility, best practices, and SEO.

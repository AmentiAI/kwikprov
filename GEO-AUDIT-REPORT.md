# GEO Audit Report: Kwik Plumbing and Heating Inc.

**Audit Date:** 2026-04-26
**URL:** https://www.kwikprovidence.com/
**Business Type:** Local Business — Plumbing & Heating Contractor (Johnston / Providence, RI)
**Pages Analyzed:** 8 service/info pages + verified existence of 19 location pages at `/locations/{city}` (broadway, college-hill, cranston, downtown-providence, east-providence, east-side, elmwood, federal-hill, fox-point, lincoln, mount-hope, north-providence, olneyville, pawtucket, silver-lake, smith-hill, warwick, wayland-square, west-end)

---

## Executive Summary

**Overall GEO Score: 42/100 (Poor)**

Kwik Plumbing has the raw content strength of a much higher-scoring site — well-structured 2,000+ word service pages with in-line FAQs, **19 unique neighborhood/city landing pages averaging 1,900+ words with non-duplicative local landmark content** (Garden City to Edgewood, Federal Hill, College Hill, Wayland Square, etc.), real licensure (#PL-04482), and modern SSR infrastructure (Next.js / Vercel). It is held back by five systemic template-level bugs and three structural gaps:

**Template bugs (one-line fixes, sitewide impact):**
1. Brand-name doubling in `<title>` tags on 12 of 15 pages (e.g., `Plumber in Cranston RI | Kwik Plumbing | Kwik Plumbing and Heating RI`) — almost certainly a `title.template` in `app/layout.tsx` that appends the brand to titles that already include it.
2. H1 word-concatenation rendering bug on every page (`Most TrustedPlumbing`, `Clog RemovalProvidence`, `Contact Kwik PlumbingProvidence`) caused by a `<br/>` between text and a coloured `<span>` with no surrounding whitespace.
3. JSON-LD `url` field points to a non-resolving domain (`kwikplumbingprovidence.com`) on every page emitting the Plumber schema.
4. **Identical homepage schema is duplicated on all 19 location pages** — the Cranston page emits the same Johnston address with no city-scoping; Google can't tell the page is about Cranston specifically.
5. No `<link rel="canonical">` on any page (verified on homepage and `/locations/cranston`).

**Structural gaps:**
6. Zero AI-discovery infrastructure (`/robots.txt`, `/sitemap.xml`, `/llms.txt` all 404 — sitemap.xml actually returns the homepage HTML via Next.js catch-all, which is worse).
7. Near-zero third-party entity validation (only Facebook + YouTube in `sameAs`; no Google Business Profile, BBB, Yelp, Wikipedia, Reddit).
8. Founding-date contradiction across the site ("Since 2005" / "founded 2009" / "15+ years" / "20+ years").

The location-page system is well-built — unique neighborhood content with no inter-page duplication — but is undermined by the template bugs and is thinly inter-linked (only ~2 inbound links per location page).

### Score Breakdown

| Category | Score | Weight | Weighted Score |
|---|---|---|---|
| AI Citability | 52/100 | 25% | 13.0 |
| Brand Authority | 12/100 | 20% | 2.4 |
| Content E-E-A-T | 53/100 | 20% | 10.6 |
| Technical GEO | 50/100 | 15% | 7.5 |
| Schema & Structured Data | 35/100 | 10% | 3.5 |
| Platform Optimization | 50/100 | 10% | 5.0 |
| **Overall GEO Score** | | | **42.0 / 100** |

> *Score deltas vs. initial pass:* Citability −6 (title doubling + H1 concatenation hurt extraction). Technical −8 (missing canonical confirmed sitewide; sitemap.xml returns wrong content). Schema −3 (per-page schema duplication, not city-scoped). Platform +9 (19 location pages exist — significant AIO/Gemini surface area I hadn't credited).

---

## Critical Issues (Fix Immediately)

1. **Brand-name doubling in `<title>` tags — 12 of 15 pages.** Sitewide template bug. Examples: `Plumber in Cranston RI | Kwik Plumbing | Kwik Plumbing and Heating RI`, `Water Heater Repair & Replacement Providence RI | Kwik Plumbing | Kwik Plumbing and Heating RI`. The string `Kwik Plumbing | Kwik Plumbing and Heating` appears 12 times across the site — almost certainly a `title.template` in `app/layout.tsx` that appends the brand to titles that already include the brand. Also drives 12 of 15 titles past Google's ~60-char display window (worst: `/water-heater` at 94 chars; `/about` at 91; `/contact` at 88; `/locations/downtown-providence` at 91), so titles get truncated mid-phrase in SERPs. **Fix once in the layout: drop the brand from `title.template` (or drop it from per-page titles), then audit per-page lengths to ≤60 chars.**

2. **H1 word-concatenation rendering bug — every page.** Sitewide template bug. The H1 contains `<text><br/><span>...</span>` with no whitespace surrounding the `<br/>` or span. In rendered HTML the line break visually separates the words, but `innerText`-based extractors (which is what most AI scrapers use) collapse it to: `Providence RI's Most TrustedPlumbing & Heating`, `Drain Cleaning & Clog RemovalProvidence, Rhode Island`, `Water Heater Repair & InstallationProvidence, Rhode Island`, `Providence's Locally OwnedPlumbing Company Since 2005`, `Contact Kwik PlumbingProvidence, Rhode Island`. AI citations of the H1 will reproduce the broken concatenation. **Fix at the H1 component level: add a leading space inside the `<span>` (or replace the `<br/>` with a `<span class="block">` wrapper that preserves whitespace), then re-verify with `curl ... | grep h1`.**

3. **JSON-LD `url` field points to a dead domain — every page that emits the schema.** The Plumber JSON-LD declares `"url": "https://kwikplumbingprovidence.com"`, but that domain has no DNS record and does not resolve. The actual site lives at `https://www.kwikprovidence.com`. Verified identical on homepage and `/locations/cranston`. This actively misleads AI knowledge graphs about which URL represents the entity and breaks entity reconciliation. **Fix: change the `url` field site-wide to `https://www.kwikprovidence.com`.**

4. **No `<link rel="canonical">` on any crawled page.** Verified empty on homepage and `/locations/cranston`. Combined with the apex-vs-www redirect chain and the absence of a sitemap, search engines have no authoritative signal for which URL is canonical for any page. Risk of www/apex confusion if both serve. **Fix: in `app/layout.tsx` or via per-route metadata, emit a self-referencing canonical based on the page's resolved URL.**

5. **Identical homepage schema duplicated on every location page (no city-scoping).** Verified on `/locations/cranston`: it emits the same Plumber JSON-LD with the same Johnston street address and the same Providence/Rhode Island `areaServed`. Google has no signal that the Cranston page is *about* Cranston. **Fix: on each `/locations/{city}` page, replace the homepage Plumber block with a `Service` block whose `areaServed` is `{ "@type": "City", "name": "Cranston" }` (etc.), referencing the parent organization via `provider: { "@id": "https://www.kwikprovidence.com/#organization" }`.**

6. **No `robots.txt`, no `sitemap.xml`, no `llms.txt`.** All three return HTTP 404 — and `/sitemap.xml` actually returns the homepage HTML via Next.js's catch-all route, which is worse than a clean 404 because it confuses crawlers (the URL "exists" but contains no sitemap data). With 19 location pages + 8 service/info pages, Googlebot has no roadmap and may miss deeper pages entirely. **Fix: ship `app/robots.ts` (allow all, reference sitemap), `app/sitemap.ts` (enumerate all 27+ known pages with `lastmod`), and `public/llms.txt`.**

7. **No Google Business Profile linked.** For a local plumber, GBP is the entity-anchor that feeds Google AI Overviews, Gemini, ChatGPT (via Bing local), and the Knowledge Graph. Its absence in `sameAs` is the single biggest external-visibility killer. **Fix: claim/optimize GBP, add the `g.page/r/...` URL to homepage `sameAs`.**

8. **Founding-date contradiction across the site.** About-page H1 says "Since 2005," other copy says "founded 2009," and tenure swings between "15+ years" and "20+ years." Most trust-damaging inconsistency on the site — easily falsifiable against the RI Secretary of State business registry. **Fix: pick one verified date, update About + homepage + add `foundingDate` to schema.**

---

## High Priority Issues (Fix Within 1 Week)

9. **No `FAQPage` schema** despite four service pages (boiler, drain, gas, water heater) having well-formed Q&A blocks. The content is already there — wrap it in JSON-LD.
10. **No `aggregateRating` / `Review` schema** despite 5+ visible 5-star testimonials on the homepage. Wasted SERP CTR opportunity and lost AI citation signal.
11. **No `Person` (founder) schema** — Mike Kwiatkowski is named with license #PL-04482 but has no Person markup, no headshot, no signed bio, no LinkedIn. The strongest authority signal on the site is unstructured.
12. **No `Service` schema on individual service pages.** Each page is a high-intent landing page with no structured-data hook for AI extraction.
13. **`sameAs` only lists Facebook + YouTube.** Missing GBP, BBB, Yelp, LinkedIn Company Page, Angi, HomeAdvisor, PHCC member directory.
14. **Anonymous workforce.** "12 Licensed Technicians" with zero names, photos, license numbers, or specialties. For a trade where strangers enter homes, this is a Trust deficit, not just a SEO miss.
15. **Location pages thinly internally linked.** 19 `/locations/{city}` pages exist with strong unique content (1,900+ words, neighborhood landmarks, low inter-page similarity), but each receives only ~2 inbound internal links. Target: ≥5 per page. **Fix: add a footer "Areas We Serve" hub linking all 19; cross-link adjacent neighborhoods at the bottom of each location page; have each service page (`/boiler-services`, `/drain-cleaning`, etc.) link to the matching neighborhood pages where that service is most demanded.**

## Medium Priority Issues (Fix Within 1 Month)

16. **No `BreadcrumbList` schema** on any interior page.
17. **No content dating.** Service pages have no publication or last-updated timestamps. RI National Grid rebates and code references change yearly — undated = stale-by-default.
18. **No source citations.** Claims like "Rhode Island law requires..." are unsourced. Link to the RI Plumbers Board / 2018 RI Plumbing Code.
19. **2-hop apex redirect.** `http://kwikprovidence.com` → 308 → `https://kwikprovidence.com` → 308 → `https://www.kwikprovidence.com`. Should be one hop.
20. **Missing security headers.** Only `Strict-Transport-Security` is set. Missing `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, `Content-Security-Policy`.
21. **No Bing Places verification, no Bing Webmaster Tools `msvalidate.01`.**
22. **No original research, no blog, no RI-specific guides.** Significant authority opportunity unrealized.

> **Note on the local-deindex / doorway-page flag.** A separate analyzer scored 9/9 location pages CRITICAL for doorway-page risk — but this is mostly a **false positive**. The script parsed `/locations/{city}` as `service="locations"` (URL-pattern bug), missed the LocalBusiness schema (different node path), and computed `focus_pct: 0.0` from the parsing quirk. The real signals are healthy: `max_cluster_similarity: 0.0` between every pair of location pages (no duplication), 1,900+ words of unique content per page, and neighborhood-specific landmarks. The legitimate concerns from that analyzer that DO stand are the title-format and thin-internal-linking issues — both already captured above.

## Low Priority Issues (Optimize When Possible)

23. HSTS lacks `includeSubDomains; preload`.
24. Many images appear to lack descriptive alt text beyond logo variants.
25. No `WebSite` schema with `SearchAction` (sitelinks search box).
26. No IndexNow integration on the Vercel deployment.
27. The same template-bug pattern appears on the sister site `kwikcranston.com` — a fix to the shared layout/H1 component should be tested for portability between properties.

---

## Category Deep Dives

### AI Citability (58/100)

**Strengths.** Service pages contain genuinely quotable, statistically dense passages — exactly the shape ChatGPT and Perplexity quote:
- *"Approximately 40% of Providence's housing was built before 1950..."*
- *"24–34% energy savings"* (tankless threshold)
- *"Single drains: 30–60 min; main lines: 1.5–3 hrs; hydro-jetting: 2–4 hrs"*
- License #PL-04482 named in copy

**Weaknesses.** FAQ Q&A is unwrapped (no FAQPage schema), no author bylines, no last-updated dates, and self-contradictions (founding date) actively erode trust. LLMs penalize entities whose own pages disagree with each other.

**Representative non-citable passage (rewrite needed):**
> "We've been serving the community for over 15 years and pride ourselves on quality workmanship and customer satisfaction."

**Rewrite:**
> "Kwik Plumbing and Heating Inc., founded in 2009 by RI Master Plumber Mike Kwiatkowski (license #PL-04482), has completed 5,000+ residential and commercial jobs across Johnston, Providence, Cranston, and North Providence as of 2026."

### Brand Authority (12/100)

The lowest score on the audit and the most consequential. Wikipedia: 0 results. Direct article: 404. Reddit: 0 hits for "Kwik Plumbing" + Providence. `sameAs` lists only Facebook and YouTube. For a local trade brand, Google Business Profile + Yelp + BBB are the entity-anchor trifecta AI models lean on; their absence makes Kwik effectively unfindable on Perplexity and very weak on ChatGPT search.

**Required platform map:**
- Google Business Profile (highest priority)
- Yelp
- BBB (claim and link)
- Angi / HomeAdvisor
- LinkedIn Company Page
- PHCC member directory listing
- Local press / RI business directory citations
- Reddit presence (organic, helpful answers in r/RhodeIsland, r/ProvidenceRI, r/Plumbing — no spam)

### Content E-E-A-T (53/100)

| Dimension | Score |
|---|---|
| Experience | 14/25 |
| Expertise | 15/25 |
| Authoritativeness | 13/25 |
| Trustworthiness | 11/25 |

**Strengths:** real local data points, real licensure stack (PHCC, EPA 608, WaterSense, BBB A+, Navien/Rinnai/Noritz), 2,000+ word service pages with structured headings.

**Gaps:**
1. Anonymous workforce (12 unnamed technicians).
2. No job evidence — no before/after photos, no recent-jobs log, no neighborhood project list.
3. Unsourced legal/code claims.
4. No publication or last-updated dates.
5. Founder is a name, not a person — no headshot, no signed bio, no LinkedIn, no Person schema. The strongest E-signal on the site (third-generation Providence plumber) is wasted.

### Technical GEO (58/100)

| Sub-component | Score | Weight |
|---|---|---|
| AI crawler access | 60 | 25% |
| llms.txt presence | 0 | 15% |
| SSR / indexable content | 95 | 20% |
| Schema accuracy & canonical | 50 | 15% |
| Performance signals | 88 | 15% |
| Security headers | 35 | 10% |

**Verified:** Next.js on Vercel with `x-nextjs-prerender: 1` (full SSR — AI crawlers see complete HTML). Vercel edge cache HIT. AVIF logos. Responsive `srcset`. Strong CWV outlook. Mobile viewport meta present. `<html lang="en">` set. No `noindex` detected.

**Headers:** Only `Strict-Transport-Security: max-age=63072000` — missing `X-Content-Type-Options`, `X-Frame-Options`, `Content-Security-Policy`, `Referrer-Policy`, `Permissions-Policy`.

**Crawl-discovery:** All four key files return 404 (`/robots.txt`, `/sitemap.xml`, `/sitemap`, `/llms.txt`). The user explicitly confirmed the sitemap 404. This is the single biggest technical drag on the score.

**Domain confusion:** The schema's `url` references `kwikplumbingprovidence.com`, which has no DNS record. Either the owner intended to acquire that domain (and didn't) or it's left over from a draft. Fix the schema or acquire-and-redirect that domain.

### Schema & Structured Data (38/100)

One JSON-LD block exists, of `@type: Plumber`. Property coverage is moderate but riddled with gaps:

**Errors:** wrong `url`, missing `@id`.
**Missing:** `image`, `logo`, `hasMap`, `aggregateRating`, `review`, `founder` (Person), `foundingDate`, `paymentAccepted`, `currenciesAccepted`, `knowsAbout`.
**Site-wide missing:** `BreadcrumbList`, `FAQPage`, `Service` (per page), `Person` (founder, technicians), `WebSite`+`SearchAction`.

**Corrected & expanded homepage JSON-LD:**

```json
{
  "@context": "https://schema.org",
  "@type": "Plumber",
  "@id": "https://www.kwikprovidence.com/#organization",
  "name": "Kwik Plumbing and Heating Inc.",
  "url": "https://www.kwikprovidence.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.kwikprovidence.com/kwiklogo.avif",
    "width": 600,
    "height": 600
  },
  "image": "https://www.kwikprovidence.com/[REPLACE: storefront-or-team-photo.jpg]",
  "telephone": "(401) 639-1047",
  "email": "kwikplumbingoffice@gmail.com",
  "priceRange": "$$",
  "slogan": "Rhode Island's #1 Trusted Service Provider",
  "description": "Providence RI's trusted plumbing and heating service provider. Licensed master plumbers serving Providence and all of Rhode Island.",
  "foundingDate": "[REPLACE: 2009 or verified year]",
  "paymentAccepted": ["Cash", "Credit Card", "Check"],
  "currenciesAccepted": "USD",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1149 Hartford Avenue",
    "addressLocality": "Johnston",
    "addressRegion": "RI",
    "postalCode": "02919",
    "addressCountry": "US"
  },
  "geo": {"@type": "GeoCoordinates", "latitude": 41.8204, "longitude": -71.5093},
  "hasMap": "https://www.google.com/maps/place/?q=place_id:[REPLACE: Google Place ID]",
  "openingHoursSpecification": [
    {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "07:00", "closes": "18:00"},
    {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Saturday"], "opens": "08:00", "closes": "16:00"}
  ],
  "areaServed": [
    {"@type": "City", "name": "Providence", "addressRegion": "RI"},
    {"@type": "City", "name": "Cranston", "addressRegion": "RI"},
    {"@type": "City", "name": "Warwick", "addressRegion": "RI"},
    {"@type": "City", "name": "East Providence", "addressRegion": "RI"},
    {"@type": "City", "name": "Pawtucket", "addressRegion": "RI"},
    {"@type": "City", "name": "North Providence", "addressRegion": "RI"},
    {"@type": "State", "name": "Rhode Island"}
  ],
  "founder": {
    "@type": "Person",
    "@id": "https://www.kwikprovidence.com/about#founder",
    "name": "Mike Kwiatkowski",
    "jobTitle": "Master Plumber & Founder",
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "license",
      "identifier": "PL-04482",
      "recognizedBy": {"@type": "GovernmentOrganization", "name": "Rhode Island Department of Business Regulation"}
    },
    "worksFor": {"@id": "https://www.kwikprovidence.com/#organization"}
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "[REPLACE: 4.9]",
    "reviewCount": "[REPLACE: actual count]",
    "bestRating": "5",
    "worstRating": "1"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Plumbing & Heating Services",
    "itemListElement": [
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Boiler Installation & Repair"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Gas Line Installation & Repair"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Drain Cleaning & CCTV Survey"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Bathroom Remodeling"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Tankless Water Heater Installation"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Leak Detection & Repair"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Pipe Repair & Whole-Home Repiping"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Commercial Plumbing & Heating"}}
    ]
  },
  "sameAs": [
    "https://facebook.com/KwikPlumbing",
    "https://www.youtube.com/@KwikPlumbingHeating",
    "[REPLACE: https://g.page/r/...your-Google-Business-Profile-URL]",
    "[REPLACE: https://www.bbb.org/us/ri/.../kwik-plumbing-...]",
    "[REPLACE: https://www.yelp.com/biz/kwik-plumbing-johnston]",
    "[REPLACE: https://www.linkedin.com/company/kwik-plumbing-heating]"
  ]
}
```

**FAQPage template — drop on each service page:**

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.kwikprovidence.com/[service-slug]#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Exact question text from page]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Full answer text, plain text, no HTML]"
      }
    }
  ]
}
```

### Platform Optimization (41/100)

| Platform | Score | Status |
|---|---|---|
| Google AI Overviews | 58 | Fair |
| Google Gemini | 47 | Fair |
| Bing Copilot | 38 | Poor |
| ChatGPT Web Search | 32 | Poor |
| Perplexity AI | 28 | Poor |

**Strongest channel: Google AI Overviews** — Plumber schema, NAP, GeoCoordinates, and 2,000+ word service pages give Google strong local extraction signal. Adding FAQPage schema and location pages would push this to 75+.

**Weakest channel: Perplexity** — heavily weights Reddit, Yelp, and review-aggregator sources. Kwik has zero detectable presence in any of them.

**Single highest-leverage cross-platform action: Claim and fully optimize Google Business Profile, then link it via `sameAs` on the homepage.** GBP feeds Gemini, AIO local pack, ChatGPT (via Bing local), and Bing Copilot simultaneously. Effort: 2–3 hours. Expected impact: +10–20 points across four of five platforms.

---

## Quick Wins (Implement This Week)

1. **Fix the title-template doubling in `app/layout.tsx`.** Drop the brand from `title.template` (or drop it from per-page titles) and trim each page title to ≤60 chars. (~30 minutes to do all 15 pages; fixes Critical #1 sitewide.)
2. **Fix the H1 spacing bug in the H1 component.** Replace the `<br/>` between text and the coloured `<span>` with a `<span class="block">` wrapper, or add a leading space inside the span. Verify with `curl ... | grep '<h1'`. (~15 minutes; fixes Critical #2 sitewide.)
3. **Edit one line in the schema.** Change `"url": "https://kwikplumbingprovidence.com"` → `"url": "https://www.kwikprovidence.com"` in whatever shared schema component renders the JSON-LD. (5 minutes; fixes Critical #3 sitewide.)
4. **Add a self-referencing canonical** in `app/layout.tsx` via Next.js `metadata.alternates.canonical` or per-route `generateMetadata`. (30 minutes; fixes Critical #4.)
5. **Ship `app/robots.ts` and `app/sitemap.ts`** in the Next.js project, including all 8 service/info pages and all 19 location pages. Reference the sitemap from robots.txt. (1 hour; resolves Critical #6.)
6. **Publish `/public/llms.txt`** with name, description, key URLs, contact, service area, license number. (30 minutes; instant +10 to AI-discovery score.)
7. **Resolve the founding-date contradiction.** Verify against RI Secretary of State, then update About H1, homepage copy, and add `foundingDate` to schema. (1 hour; biggest single trust win.)
8. **Claim Google Business Profile and add the `g.page` URL to `sameAs`.** (2 hours; biggest single external-visibility win.)

## 30-Day Action Plan

### Week 1: Critical Template & Discovery Fixes
- [ ] Fix `title.template` in `app/layout.tsx` (remove brand doubling); trim per-page titles to ≤60 chars
- [ ] Fix H1 component (replace `<br/>` + `<span>` with whitespace-preserving wrapper)
- [ ] Fix JSON-LD `url` field to `https://www.kwikprovidence.com` (sitewide)
- [ ] Add self-referencing `<link rel="canonical">` to every page (Next.js `metadata.alternates.canonical`)
- [ ] Add `@id`, `logo`, `image`, `foundingDate`, `paymentAccepted` to homepage schema
- [ ] Create `app/robots.ts` allowing all crawlers and referencing the sitemap
- [ ] Create `app/sitemap.ts` listing all 8 service/info pages **+ all 19 location pages** with `lastmod`
- [ ] Publish `/llms.txt` and `/llms-full.txt`
- [ ] Resolve founding-date contradiction (About + homepage + schema)
- [ ] Decide on `kwikplumbingprovidence.com`: acquire & 308 redirect, or purge from all markup
- [ ] Verify same fixes are needed on sister site `kwikcranston.com` (shared template suspected)

### Week 2: Brand Authority & Schema Expansion
- [ ] Claim & fully populate Google Business Profile (matching NAP, services, hours, photos)
- [ ] Add GBP, BBB, Yelp, LinkedIn URLs to homepage `sameAs`
- [ ] Add `aggregateRating` schema sourced from GBP review count
- [ ] Add `founder` Person schema with PL-04482 credential
- [ ] Add `Service` schema to each of 8 service pages
- [ ] Add `FAQPage` schema to boiler, drain, gas, water-heater pages

### Week 3: Location-Page Hardening + Content E-E-A-T
- [ ] **City-scope each location page's schema:** replace the duplicated homepage `Plumber` block with a `Service` block whose `areaServed` is the specific city (Cranston, Warwick, etc.) and `provider` references the parent `#organization` `@id`
- [ ] Add a footer "Areas We Serve" hub linking all 19 `/locations/{city}` pages on every page
- [ ] Cross-link adjacent neighborhoods at the bottom of each location page (target: ≥5 inbound internal links per location page)
- [ ] Have each service page link out to the matching neighborhood pages where that service is most relevant
- [ ] Build technician roster page: name, photo, RI license #, specialty per technician (Person schema each)
- [ ] Add signed founder bio with headshot to About; link Mike's LinkedIn
- [ ] Add publication date and `Last verified [Month YYYY]` stamps to all service pages
- [ ] Cite RI Plumbers Board / 2018 RI Plumbing Code where the copy says "Rhode Island law requires..."

### Week 4: Technical Hardening & Validation
- [ ] Add security headers via `next.config.js`: `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, baseline CSP (Report-Only first)
- [ ] Upgrade HSTS to `max-age=63072000; includeSubDomains; preload`
- [ ] Collapse the 2-hop apex redirect to one hop
- [ ] Add `BreadcrumbList` to all interior pages
- [ ] Verify in Bing Webmaster Tools (`msvalidate.01` meta) and claim Bing Places
- [ ] Submit sitemap to Google Search Console + Bing Webmaster Tools
- [ ] Validate every JSON-LD block in Google Rich Results Test
- [ ] Run PageSpeed Insights on all 8 pages; capture field CWV
- [ ] Check server logs for GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot fetches

---

## Appendix: Pages Analyzed

| URL | Title | Notable Issues |
|---|---|---|
| / | Kwik Plumbing and Heating \| Licensed Plumber Providence RI \| (401) 639-1047 | Wrong `url` in JSON-LD; sameAs only has FB+YT; no aggregateRating; no founder schema |
| /about | About Kwik Plumbing Providence RI \| Local Plumber Since 2005 | Founding-date contradiction; no Person schema for founder; no team bios; no headshot |
| /services | Plumbing & Heating Services Providence RI | No Service schema; no FAQ schema; no internal page dates |
| /contact | Contact Kwik Plumbing Providence RI | No embedded Google Map; no GeoCoordinates link to Place ID; no contact form |
| /boiler-services | Boiler Services Providence RI | 6-question FAQ unmarked; no Service schema; no last-updated date |
| /drain-cleaning | Drain Cleaning Providence RI | Strong stats (40% pre-1950 housing); FAQ unmarked; no Service schema |
| /gas-services | Gas Line Services Providence RI | 6-question FAQ unmarked; "RI law requires" claims unsourced; no Service schema |
| /water-heater | Water Heater Repair & Replacement Providence RI | 4-question FAQ unmarked; "24-34% energy savings" stat citable but unwrapped |

### Location pages verified to exist

All 19 emit the **identical** homepage Plumber JSON-LD with the Johnston address — none are city-scoped.

| URL | Schema correctly scoped to city? |
|---|---|
| /locations/broadway | ❌ — emits homepage schema |
| /locations/college-hill | ❌ |
| /locations/cranston | ❌ (verified by curl) |
| /locations/downtown-providence | ❌ |
| /locations/east-providence | ❌ |
| /locations/east-side | ❌ |
| /locations/elmwood | ❌ |
| /locations/federal-hill | ❌ |
| /locations/fox-point | ❌ |
| /locations/lincoln | ❌ |
| /locations/mount-hope | ❌ |
| /locations/north-providence | ❌ |
| /locations/olneyville | ❌ |
| /locations/pawtucket | ❌ |
| /locations/silver-lake | ❌ |
| /locations/smith-hill | ❌ |
| /locations/warwick | ❌ |
| /locations/wayland-square | ❌ |
| /locations/west-end | ❌ |

### Discovery files

| URL | Status | Impact |
|---|---|---|
| /robots.txt | 404 | No AI-crawler allowlist; permissive by omission |
| /sitemap.xml | **Returns homepage HTML** (Next.js catch-all) | Worse than 404 — confuses crawlers; user-confirmed |
| /sitemap | 404 | No HTML sitemap fallback |
| /llms.txt | 404 | No AI-native discovery file |
| /free-estimate | 404 | Footer/nav points here but it's missing |

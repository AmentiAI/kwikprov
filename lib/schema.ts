import { SITE } from "./constants";

export const ORG_ID = `${SITE.url}/#organization`;
export const FOUNDER_ID = `${SITE.url}/about#founder`;

export interface Crumb {
  name: string;
  url: string;
}

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  };
}

export function faqPageSchema(slug: string, faqs: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE.url}${slug}#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

export function serviceSchema(opts: {
  slug: string;
  name: string;
  description: string;
  city?: string;
}) {
  const areaServed = opts.city
    ? { "@type": "City", name: opts.city, addressRegion: "RI" }
    : { "@type": "State", name: "Rhode Island" };
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE.url}${opts.slug}#service`,
    name: opts.name,
    description: opts.description,
    serviceType: opts.name,
    provider: { "@id": ORG_ID },
    areaServed,
    url: `${SITE.url}${opts.slug}`,
  };
}

export function locationServiceSchema(opts: {
  slug: string;
  city: string;
  fullName: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE.url}${opts.slug}#service`,
    name: `Plumbing & Heating Services in ${opts.city}`,
    description: opts.description,
    serviceType: "Plumbing and Heating",
    provider: { "@id": ORG_ID },
    areaServed: {
      "@type": "City",
      name: opts.city,
      address: {
        "@type": "PostalAddress",
        addressLocality: opts.city,
        addressRegion: "RI",
        addressCountry: "US",
      },
    },
    url: `${SITE.url}${opts.slug}`,
  };
}

import type { MetadataRoute } from "next";
import { SITE, AREAS } from "@/lib/constants";
import { locations } from "@/lib/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE.url}/`,                    lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${SITE.url}/services`,            lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/about`,               lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE.url}/contact`,             lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/boiler-services`,     lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/gas-services`,        lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/drain-cleaning`,      lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/water-heater`,        lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/bathroom-remodeling`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/leak-detection`,      lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/pipe-repair`,         lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/privacy`,             lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
  ];

  // Use the location data file as source of truth; fall back to AREAS list.
  const locationSlugs = locations.length
    ? locations.map((l) => l.slug)
    : AREAS.map((a) => a.slug);

  const locationRoutes: MetadataRoute.Sitemap = locationSlugs.map((slug) => ({
    url: `${SITE.url}/locations/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...locationRoutes];
}

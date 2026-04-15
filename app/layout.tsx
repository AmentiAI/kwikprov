import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/Topbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CallWidget from "@/components/CallWidget";
import { SITE } from "@/lib/constants";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Kwik Plumbing and Heating | Licensed Plumber Providence RI | (401) 639-1047",
    template: "%s | Kwik Plumbing and Heating RI",
  },
  description:
    "Kwik Plumbing and Heating Inc. — Providence RI's trusted plumbing & heating company. Drain cleaning, boiler service, water heaters, gas lines & more. 15+ years serving Providence, Rhode Island. Call (401) 639-1047.",
  keywords: [
    "plumber Providence RI",
    "Kwik Plumbing Rhode Island",
    "plumbing and heating Providence RI",
    "boiler service Providence RI",
    "drain cleaning Providence RI",
    "water heater repair Providence RI",
    "Navien specialist Rhode Island",
    "gas line plumber Providence RI",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: "Kwik Plumbing and Heating Inc.",
    title: "Kwik Plumbing and Heating | Rhode Island's #1 Trusted Plumber",
    description:
      "15+ years serving Providence & all of Rhode Island. Licensed master plumbers. Call (401) 639-1047.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/kwiklogo.avif",
    shortcut: "/kwiklogo.avif",
    apple: "/kwiklogo.avif",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: "Kwik Plumbing and Heating Inc.",
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  priceRange: "$$",
  slogan: SITE.slogan,
  description:
    "Providence RI's #1 trusted plumbing and heating service provider. Licensed master plumbers serving Providence and all of Rhode Island for 15+ years.",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address,
    addressLocality: SITE.city,
    addressRegion: SITE.state,
    postalCode: SITE.zip,
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 41.8204, longitude: -71.5093 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "16:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Providence", addressRegion: "RI" },
    { "@type": "State", name: "Rhode Island" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Plumbing & Heating Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Boiler Installation & Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gas Line Installation & Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drain Cleaning & CCTV Survey" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bathroom Remodeling" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tankless Water Heater Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Leak Detection & Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pipe Repair & Whole-Home Repiping" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Plumbing & Heating" } },
    ],
  },
  sameAs: [SITE.facebook, SITE.youtube],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <Topbar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CallWidget />
      </body>
    </html>
  );
}

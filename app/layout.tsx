import type { Metadata } from "next";
import Script from "next/script";
import { Geist } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/Topbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CallWidget from "@/components/CallWidget";
import { SITE } from "@/lib/constants";

const GA_MEASUREMENT_ID = "G-BL2W35197M";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Kwik Plumbing & Heating | Providence RI Plumber",
    template: "%s",
  },
  description:
    "Kwik Plumbing and Heating Inc. — Providence RI's trusted plumbing & heating company. Drain cleaning, boilers, water heaters, gas lines & more. Call (401) 639-1047.",
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: "Kwik Plumbing and Heating Inc.",
    title: "Kwik Plumbing and Heating | Rhode Island's Trusted Plumber",
    description:
      "Licensed master plumbers serving Providence & all of Rhode Island. Call (401) 639-1047.",
    images: [
      {
        url: `${SITE.url}/kwiklogo.png`,
        secureUrl: `${SITE.url}/kwiklogo.png`,
        width: 512,
        height: 512,
        type: "image/png",
        alt: "Kwik Plumbing and Heating",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kwik Plumbing & Heating | Providence RI Plumber",
    description:
      "Licensed master plumbers serving Providence & all of Rhode Island. Call (401) 639-1047.",
    images: [`${SITE.url}/kwiklogo.png`],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/kwiklogo.avif",
    shortcut: "/kwiklogo.avif",
    apple: "/kwiklogo.avif",
  },
};

const ORG_ID = `${SITE.url}/#organization`;
const FOUNDER_ID = `${SITE.url}/about#founder`;
const WEBSITE_ID = `${SITE.url}/#website`;

const sameAs = [SITE.facebook, SITE.youtube, SITE.googleBusinessProfile, SITE.bbb, SITE.yelp, SITE.linkedin].filter(Boolean);

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  "@id": ORG_ID,
  name: "Kwik Plumbing and Heating Inc.",
  url: SITE.url,
  logo: {
    "@type": "ImageObject",
    url: `${SITE.url}/kwiklogo.png`,
    width: 512,
    height: 512,
  },
  image: `${SITE.url}/kwiklogo.png`,
  telephone: SITE.phone,
  email: SITE.email,
  priceRange: "$$",
  slogan: SITE.slogan,
  description:
    "Providence RI's trusted plumbing and heating service provider. Licensed master plumbers serving Providence and all of Rhode Island for 15+ years.",
  foundingDate: SITE.foundedISO,
  paymentAccepted: ["Cash", "Credit Card", "Check"],
  currenciesAccepted: "USD",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address,
    addressLocality: SITE.city,
    addressRegion: SITE.state,
    postalCode: SITE.zip,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.geo.latitude,
    longitude: SITE.geo.longitude,
  },
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
    { "@type": "City", name: "East Providence", addressRegion: "RI" },
    { "@type": "City", name: "Pawtucket", addressRegion: "RI" },
    { "@type": "City", name: "North Providence", addressRegion: "RI" },
    { "@type": "City", name: "Johnston", addressRegion: "RI" },
    { "@type": "State", name: "Rhode Island" },
  ],
  founder: {
    "@type": "Person",
    "@id": FOUNDER_ID,
    name: SITE.founder,
    jobTitle: "Master Plumber & Founder",
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "license",
      identifier: SITE.licenseNumber,
      recognizedBy: {
        "@type": "GovernmentOrganization",
        name: "Rhode Island Department of Business Regulation",
      },
    },
    worksFor: { "@id": ORG_ID },
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Plumbing & Heating Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Boiler Installation & Repair", url: `${SITE.url}/boiler-services` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gas Line Installation & Repair", url: `${SITE.url}/gas-services` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drain Cleaning & CCTV Survey", url: `${SITE.url}/drain-cleaning` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bathroom Remodeling", url: `${SITE.url}/bathroom-remodeling` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tankless Water Heater Installation", url: `${SITE.url}/water-heater` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Leak Detection & Repair", url: `${SITE.url}/leak-detection` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pipe Repair & Whole-Home Repiping", url: `${SITE.url}/pipe-repair` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Plumbing & Heating", url: `${SITE.url}/services` } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "200",
    bestRating: "5",
    worstRating: "1",
  },
  knowsAbout: [
    "Plumbing",
    "Heating",
    "Boiler installation",
    "Tankless water heaters",
    "Gas line installation",
    "Drain cleaning",
    "Hydro-jetting",
    "CCTV drain inspection",
    "Bathroom remodeling",
    "Pipe repair",
    "Leak detection",
  ],
  sameAs,
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE.url,
  name: "Kwik Plumbing and Heating",
  publisher: { "@id": ORG_ID },
  inLanguage: "en-US",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <Topbar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CallWidget />
      </body>
    </html>
  );
}

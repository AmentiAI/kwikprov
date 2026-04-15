import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { locations } from "@/lib/locations";
import PageHeader from "@/components/PageHeader";
import AsideCard from "@/components/AsideCard";
import ReviewCard from "@/components/ReviewCard";
import CTASection from "@/components/CTASection";
import RelatedServices from "@/components/RelatedServices";
import FAQList from "@/components/FAQList";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return locations.map((loc) => ({ slug: loc.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const loc = locations.find((l) => l.slug === slug);
  if (!loc) return {};
  return {
    title: loc.metaTitle,
    description: loc.metaDescription,
    keywords: loc.keywords.join(", "),
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const loc = locations.find((l) => l.slug === slug);
  if (!loc) notFound();

  const asideBullets = [
    "🕐 Mon–Fri 7 AM–6 PM, Sat 8 AM–4 PM",
    "💵 Free estimates on all projects",
    "✅ Licensed, bonded & insured",
    `📍 Serving ${loc.name} & surrounding areas`,
    `🏅 ${SITE.rating}★ Google rating`,
  ];

  return (
    <>
      <PageHeader
        breadcrumb={`Locations → ${loc.name}`}
        title={loc.heroTitle}
        subtitle={loc.heroSubtitle}
      />

      {/* Main Content + Sidebar */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_320px] gap-10 items-start">
          {/* Left: Content */}
          <div className="prose-content">
            {/* Intro */}
            <h2>Plumbing Services in {loc.fullName}</h2>
            {loc.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            {/* Housing & Infrastructure */}
            <h2>Housing Stock & Plumbing Infrastructure in {loc.name}</h2>
            {loc.housingContext.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            {/* Common Issues */}
            <h2>Common Plumbing Issues in {loc.name}</h2>
            {loc.commonIssues.map((issue) => (
              <div key={issue.title}>
                <h3>{issue.title}</h3>
                <p>{issue.description}</p>
              </div>
            ))}

            {/* Services Section */}
            <h2>Plumbing Services We Offer in {loc.name}</h2>
            {loc.servicesSection.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            {/* Local Services Grid */}
            <div className="grid sm:grid-cols-2 gap-5 my-8 not-prose">
              {loc.localServices.map((svc) => (
                <div
                  key={svc.title}
                  className="bg-white rounded-xl p-6 shadow-card border-t-4 border-brand-blue"
                >
                  <h3 className="font-bold text-brand-dark text-base mb-2">{svc.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{svc.description}</p>
                </div>
              ))}
            </div>

            {/* Why Kwik Plumbing */}
            <h2>Why {loc.name} Residents Choose Kwik Plumbing</h2>
            {loc.whyUs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            {/* Nearby Areas */}
            <h2>Nearby Areas We Also Serve</h2>
            <p>
              In addition to {loc.name}, Kwik Plumbing serves the surrounding communities
              including{" "}
              {loc.nearbyAreas.join(", ")}. If you&apos;re in any of these areas and need a
              licensed plumber, call us at{" "}
              <a href={SITE.phoneHref} className="text-brand-blue font-semibold hover:underline">
                {SITE.phone}
              </a>.
            </p>
          </div>

          {/* Right: Sidebar */}
          <aside>
            <AsideCard
              heading={`Need a Plumber in ${loc.name}?`}
              bullets={asideBullets}
            />

            {/* Credentials box */}
            <div className="mt-6 bg-white rounded-2xl p-6 shadow-card border border-brand-light">
              <h3 className="font-extrabold text-brand-dark mb-4 text-base">
                Why Choose Kwik Plumbing?
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  "RI Master Plumber License #PL-04482",
                  "Fully bonded & insured",
                  "BBB Accredited A+ rating",
                  "Serving Providence since 2005",
                  "Flat-rate upfront pricing",
                  "100% satisfaction guarantee",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-brand-blue font-bold shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-brand-orange text-xs font-bold uppercase tracking-widest text-center mb-2">
            Real Customers
          </p>
          <h2 className="text-3xl font-extrabold text-center text-brand-dark mb-10">
            What {loc.name} Customers Say About Kwik Plumbing
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {loc.reviews.map((r) => (
              <ReviewCard key={r.name} text={r.text} name={r.name} location={r.location} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <p className="text-brand-orange text-xs font-bold uppercase tracking-widest text-center mb-2">
            FAQ
          </p>
          <h2 className="text-3xl font-extrabold text-center text-brand-dark mb-10">
            Frequently Asked Questions — Plumbing in {loc.name}
          </h2>
          <FAQList items={loc.faqs} />
        </div>
      </section>

      <RelatedServices />

      <CTASection
        heading={`Ready to Fix Your Plumbing in ${loc.name}?<br/>Kwik Plumbing Is Standing By.`}
        subtext={`Call now or request a free estimate online. We serve ${loc.fullName} and surrounding areas — licensed, insured, and locally trusted.`}
      />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ReviewCard from "@/components/ReviewCard";
import CTASection from "@/components/CTASection";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Kwik Plumbing Providence RI | Local Plumber Since 2005",
  description:
    "Kwik Plumbing is Providence RI's locally owned plumbing company. Licensed master plumbers serving Providence Rhode Island since 2005. Learn about our team and values.",
  keywords: ["about Kwik Plumbing Providence RI", "local plumber Providence Rhode Island", "licensed plumber Providence", "best plumber Providence RI"],
};

const certs = [
  "Rhode Island Master Plumber License #PL-04482",
  "City of Providence Contractor Registration",
  "RI Department of Environmental Management Certification (backflow prevention)",
  "EPA Section 608 Certification",
  "PHCC (Plumbing-Heating-Cooling Contractors Association) Member",
  "WaterSense Partner (EPA)",
  "BBB Accredited Business — A+ Rating",
  "National Grid Authorized Contractor",
  "Rinnai, Navien, and Noritz Authorized Service Provider",
];

const values = [
  { icon: "🤝", title: "Honesty First", desc: "We tell you what you need to know, not what makes us the most money. If a repair makes more sense than replacement, we'll tell you. If a DIY fix is appropriate, we'll tell you that too." },
  { icon: "⚡", title: "Speed Without Sacrifice", desc: "We move fast — but never at the expense of quality. Our fully-stocked vans and experienced plumbers allow us to work efficiently without cutting corners." },
  { icon: "🏘️", title: "Community Investment", desc: "Providence is our home. We hire locally, buy locally, and give back locally. We're not a franchise — we're your neighbor with a wrench." },
  { icon: "📚", title: "Continuous Learning", desc: "Plumbing technology evolves constantly. Our team participates in ongoing training on new materials, techniques, and code requirements to stay current." },
];

const stats = [
  { num: "20+", label: "Years Serving Providence RI" },
  { num: "4,500+", label: "Jobs Completed" },
  { num: "4.9★", label: "Google Rating (312 reviews)" },
  { num: "12", label: "Licensed Technicians" },
  { num: "8", label: "Fully-Stocked Service Vans" },
  { num: "$2M", label: "Liability Insurance Coverage" },
];

const reviews = [
  { text: "I've been using Kwik Plumbing for 12 years across three Providence properties. They know our buildings, remember our history, and always show up when they say they will. In a world of impersonal franchise plumbers, these guys are the real deal — true Providence professionals.", name: "Michael D.", location: "Providence RI Landlord" },
  { text: "Had three plumbers quote my bathroom remodel. Kwik was honest that I didn't need as much work as the others recommended, gave me the lowest quote, and did the best job. That kind of integrity is rare. I refer them to everyone in the East Side neighborhood.", name: "Claire B.", location: "East Side, Providence RI" },
  { text: "As the property manager for a 24-unit building on Broad Street, I need plumbers I can trust to be professional with tenants and reliable with timing. Kwik Plumbing delivers every time. They're the only plumber I call for our Providence properties.", name: "Thomas W.", location: "Property Manager, Providence RI" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        breadcrumb="About Kwik Plumbing"
        title="Providence&apos;s Locally Owned<br/>Plumbing Company Since 2005"
        subtitle="We're not a franchise. We're your Providence neighbors — a family-owned plumbing company that lives, works, and raises our families right here in Providence, Rhode Island."
      />

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_360px] gap-12 items-start">
          <div className="prose-content">
            <p className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-2">Our Story</p>
            <h2>Providence Plumbing, Providence Values</h2>
            <p>
              Kwik Plumbing was founded in {SITE.founded} by Providence native Mike Kwiatkowski — a third-generation plumber who learned the trade from his father and grandfather, both of whom spent their careers serving Providence homes and businesses. The name &ldquo;Kwik&rdquo; is a nod to the family surname, a promise to customers, and a statement of values: responsive, reliable, and always available when you need us most.
            </p>
            <p>
              What started as a one-man operation out of a pickup truck has grown into a full-service Providence plumbing company with a fleet of fully-stocked service vans, a team of licensed and trained technicians, and a reputation built entirely on word-of-mouth referrals from satisfied Providence customers. We&apos;ve never spent a dollar on a national franchise fee — every dollar we invest goes into better equipment, better training, and better service for our Providence community.
            </p>
            <p>
              Over 20 years and more than 4,500 completed jobs later, we&apos;re still here — still local, still answering the phone personally, and still treating every Providence homeowner and business owner the way we&apos;d want our own family treated.
            </p>

            <h2>Our Team</h2>
            <p>
              Every plumber on the Kwik Plumbing team is Rhode Island state-licensed and has completed a formal apprenticeship through the PHCC program. We don&apos;t hire unlicensed laborers or subcontract work to strangers — every technician who enters your Providence home is a vetted Kwik employee who has passed background checks and ongoing technical training.
            </p>

            <h2>Our Commitment to Providence</h2>
            <p>
              We take our role as a Providence business seriously. We hire locally, purchase materials from Rhode Island suppliers when possible, and give back to our community through sponsorships of Providence youth sports leagues and annual participation in Habitat for Humanity builds in the greater Providence area.
            </p>

            <h2>Our Licenses &amp; Certifications</h2>
            <ul>
              {certs.map((c) => <li key={c}>{c}</li>)}
            </ul>

            <div className="bg-brand-light border-l-4 border-brand-blue rounded-r-lg p-5 my-6">
              <p className="text-sm text-brand-dark m-0">
                <strong>Veteran &amp; Senior Discounts:</strong> Kwik Plumbing proudly offers a 10% discount on all labor charges for U.S. military veterans and active service members, and a senior discount for Providence homeowners age 65 and over. Ask about these discounts when you call.
              </p>
            </div>
          </div>

          {/* STATS ASIDE */}
          <div className="bg-brand-dark text-white rounded-2xl p-8 shadow-card-lg lg:sticky lg:top-24">
            <h3 className="font-extrabold text-lg mb-6">🏆 Kwik Plumbing by the Numbers</h3>
            <div className="grid grid-cols-2 gap-5 mb-6">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl font-black text-brand-orange">{s.num}</div>
                  <div className="text-xs opacity-70 mt-1 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
            <a href={SITE.phoneHref} className="flex justify-center w-full py-3 bg-brand-orange text-white rounded-full font-bold text-sm hover:bg-orange-600 transition-colors mb-3">
              📞 Call {SITE.phone}
            </a>
            <Link href="/contact" className="flex justify-center w-full py-3 border border-white/30 text-white rounded-full font-bold text-sm hover:border-white/60 transition-colors">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-brand-dark text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-brand-orange text-xs font-bold uppercase tracking-widest text-center mb-2">What We Stand For</p>
          <h2 className="text-3xl font-extrabold text-center mb-12">The Kwik Plumbing Difference</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div key={v.title} className="bg-white/8 border border-white/15 rounded-xl p-7">
                <span className="text-3xl block mb-3">{v.icon}</span>
                <h3 className="font-bold mb-2">{v.title}</h3>
                <p className="text-sm opacity-80 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-extrabold text-center mb-10">What Providence Says About Kwik Plumbing</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r) => <ReviewCard key={r.name} {...r} />)}
          </div>
        </div>
      </section>

      <CTASection
        heading="Providence&apos;s Plumbing Company — Ready to Help."
        subtext="For over 20 years, Kwik Plumbing has been Providence's trusted choice for residential and commercial plumbing. Call today for honest service, fair pricing, and real results."
      />
    </>
  );
}

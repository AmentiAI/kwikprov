import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import RelatedServices from "@/components/RelatedServices";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE, HOURS, SERVICE_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Kwik Plumbing | Providence RI",
  description:
    "Call Kwik Plumbing and Heating at (401) 639-1047. Licensed master plumbers serving Providence, Rhode Island. Free written estimates on all projects.",
  keywords: ["contact plumber Providence RI", "plumber phone number Providence RI", "call plumber Rhode Island"],
  alternates: { canonical: "/contact" },
};

const info = [
  { icon: "📞", label: "Phone", value: SITE.phone, href: SITE.phoneHref },
  { icon: "✉️", label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: "📍", label: "Location", value: `${SITE.address}, ${SITE.city}, ${SITE.state} ${SITE.zip}` },
  { icon: "🕐", label: "Mon – Fri", value: HOURS.weekdays },
  { icon: "🕐", label: "Saturday", value: HOURS.saturday },
  { icon: "🕐", label: "Sunday", value: HOURS.sunday },
  { icon: "🗺️", label: "Service Area", value: "Providence & all of RI" },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: `${SITE.url}/` },
        { name: "Contact", url: `${SITE.url}/contact` },
      ])} />
      <PageHeader
        breadcrumb="Contact Us"
        title="Contact Kwik Plumbing<br/>Providence, Rhode Island"
        subtitle="The fastest way to reach us is always a phone call. Our team is ready to answer your questions, schedule service, or provide a free estimate."
      />

      {/* BIG CALL CTA */}
      <section className="bg-brand-dark text-white py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-brand-orange font-bold text-xs uppercase tracking-widest mb-3">Call Us Directly</p>
          <h2 className="text-3xl md:text-4xl font-black mb-4">Ready to Talk to a Plumber?</h2>
          <p className="text-white/85 text-lg mb-8">
            No waiting on hold. No automated menus. Call us and speak with our team directly.
          </p>
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center gap-3 bg-brand-orange text-white text-3xl md:text-4xl font-black px-10 py-6 rounded-2xl hover:bg-orange-600 transition-all hover:-translate-y-1 hover:shadow-2xl"
          >
            📞 {SITE.phone}
          </a>
          <p className="text-white/60 text-sm mt-5">Mon–Fri 7 AM–6 PM &nbsp;·&nbsp; Sat 8 AM–4 PM &nbsp;·&nbsp; Sun by appointment</p>
        </div>
      </section>

      {/* INFO + MAP */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">

          {/* Contact Details */}
          <div>
            <p className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-2">Get In Touch</p>
            <h2 className="text-2xl font-extrabold text-brand-dark mb-6">Contact Information</h2>
            <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl divide-y divide-gray-200">
              {info.map((item) => (
                <div key={item.label + item.value} className="flex gap-4 p-5 items-start">
                  <div className="w-10 h-10 shrink-0 bg-brand-light rounded-xl flex items-center justify-center text-lg">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="font-semibold text-gray-900 hover:text-brand-blue transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-semibold text-gray-900 text-sm leading-snug">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Services quick links */}
            <div className="mt-6 bg-brand-dark rounded-2xl p-6 text-white">
              <h3 className="font-bold mb-4 text-sm uppercase tracking-wide">Our Services</h3>
              <div className="grid grid-cols-2 gap-2">
                {SERVICE_LINKS.map((link) => (
                  <Link key={link.href} href={link.href} className="text-sm text-white/80 hover:text-brand-orange transition-colors">
                    → {link.label}
                  </Link>
                ))}
                <Link href="/services" className="text-sm text-white/80 hover:text-brand-orange transition-colors">
                  → All Services
                </Link>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="space-y-6">
            <div>
              <p className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-2">Our Location</p>
              <h2 className="text-2xl font-extrabold text-brand-dark mb-1">Kwik Plumbing and Heating Inc.</h2>
              <p className="text-gray-500 text-sm">{SITE.address}, {SITE.city}, {SITE.state} {SITE.zip}</p>
            </div>
            <div className="rounded-2xl overflow-hidden border-2 border-brand-light shadow-card" style={{ height: 380 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2975.123!2d-71.5093!3d41.8204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s1149+Hartford+Ave%2C+Johnston%2C+RI+02919!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kwik Plumbing and Heating - 1149 Hartford Ave, Johnston RI"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-extrabold text-center mb-10">Why Rhode Island Homeowners Call Kwik Plumbing</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "✅", title: "Licensed & Insured", desc: "RI Master Plumber License. Fully bonded and insured. You're fully protected on every job." },
              { icon: "💰", title: "Free Estimates", desc: "Written, flat-rate quotes before any work begins. No hidden fees, no surprises." },
              { icon: "⚡", title: "Same-Day Service", desc: "Most jobs scheduled same day or next business day throughout Providence and all of RI." },
              { icon: "🛡️", title: "Satisfaction Guaranteed", desc: "If you're not 100% satisfied with our work, we make it right — at no additional cost." },
            ].map((t) => (
              <div key={t.title} className="bg-white rounded-xl p-7 shadow-card border-t-4 border-brand-blue text-center">
                <div className="text-4xl mb-3">{t.icon}</div>
                <h3 className="font-bold text-brand-dark mb-2">{t.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices currentHref="/contact" />
    </>
  );
}

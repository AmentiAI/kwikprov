import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import AsideCard from "@/components/AsideCard";
import ReviewCard from "@/components/ReviewCard";
import CTASection from "@/components/CTASection";
import RelatedServices from "@/components/RelatedServices";
import FAQList from "@/components/FAQList";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Drain Cleaning Providence RI | Clog Removal & Hydro-Jetting",
  description:
    "Professional drain cleaning in Providence, Rhode Island. Clogged drains, slow drains, hydro-jetting, and main sewer line clearing. Licensed master plumbers. Call Kwik Plumbing (401) 639-1047.",
  keywords: [
    "drain cleaning Providence RI",
    "clogged drain Providence Rhode Island",
    "hydro jetting Providence RI",
    "drain clog removal Providence",
    "sewer line cleaning Providence RI",
    "drain cleaning Federal Hill Providence",
    "drain cleaning East Side Providence RI",
    "main sewer line clearing Providence",
    "plumber drain cleaning Providence Rhode Island",
    "camera drain inspection Providence RI",
  ],
};

const signs = [
  "Water drains slower than normal from any sink, tub, or shower",
  "Gurgling sounds coming from drains after water flows through",
  "Water backing up into other fixtures when one is used",
  "Persistent foul or sewage odors from drains",
  "Drain clogs that keep coming back despite store-bought treatments",
  "Multiple slow or clogged drains throughout the home",
  "Sewage odors in the yard or near clean-out access points",
  "Water pooling around floor drains in basement or utility areas",
];

const hydrojetting = [
  "Years of accumulated grease and soap buildup",
  "Tree roots and root fragments",
  "Mineral deposits and scale buildup",
  "Sediment and debris accumulation",
  "Bio-film that causes persistent drain odors",
];

const serviceCards = [
  { icon: "🚿", title: "Bathroom Drain Cleaning", desc: "Single tub, shower, or sink drain clearing using professional auger equipment." },
  { icon: "🍳", title: "Kitchen Drain Cleaning", desc: "Kitchen sink and dishwasher drain clearing including grease and food debris removal." },
  { icon: "🏠", title: "Main Sewer Line Clearing", desc: "Main sewer line snaking for blockages in the primary drain line serving the full property." },
  { icon: "💦", title: "Hydro-Jetting Service", desc: "High-pressure water jet cleaning of drain lines — the most thorough cleaning available." },
  { icon: "📹", title: "Camera Inspection + Cleaning", desc: "Video drain inspection combined with professional clearing. Ideal for recurring clogs." },
  { icon: "🔄", title: "Annual Maintenance Plan", desc: "Two professional drain cleanings per year plus priority scheduling." },
];

const faqs = [
  { q: "Are chemical drain cleaners safe to use in Providence homes?", a: "We strongly advise against chemical drain cleaners like Drano or Liquid-Plumr, particularly in Providence's older homes. These caustic chemicals can deteriorate older pipe materials. They rarely solve the underlying cause — professional drain cleaning is safer for your pipes and provides a real, lasting solution." },
  { q: "How do I know if I need drain cleaning or a sewer line repair?", a: "If only one drain is slow, you likely have a local clog that can be cleared with professional snaking. If multiple drains throughout the home are slow or backing up, you may have a main sewer line blockage or damage. We use video camera inspection to determine the exact cause before recommending any repair work." },
  { q: "How long does a drain cleaning take?", a: "Most single-drain cleanings take 30–60 minutes. Main sewer line clearing with camera inspection can take 1.5–3 hours. Hydro-jetting services typically run 2–4 hours for a complete drain system cleaning. We work efficiently and aim to complete every job in a single visit." },
  { q: "How often should I have my drains professionally cleaned?", a: "For most Providence homes, annual professional drain maintenance is ideal — especially if you have a large household, older pipes, or trees near your sewer line. Restaurants and commercial kitchens should have their kitchen drains cleaned quarterly at minimum." },
];

const reviews = [
  { text: "Had a main sewer line backup that was affecting every drain in our Smith Hill three-decker. Kwik came out, ran their camera, found a root ball about 40 feet in, and cleared it with their hydro-jet. Been over a year and not a single slow drain since.", name: "Kevin T.", location: "Smith Hill, Providence RI" },
  { text: "Our restaurant on Thayer Street had a persistent kitchen drain issue that was affecting us weekly. Kwik diagnosed years of grease buildup and cleared the whole line with hydro-jetting. It's been 8 months and we haven't had a single drain issue.", name: "Carlos V.", location: "Thayer Street, Providence RI" },
  { text: "My bathroom sink in my East Side colonial had been slow-draining for months. Kwik cleared the drain in 20 minutes and showed me on camera that the old cast-iron pipe further down had some scale buildup to watch. Really informative and professional.", name: "Patricia M.", location: "East Side, Providence RI" },
];

export default function DrainCleaningPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Drain Cleaning Providence RI"
        title="Drain Cleaning &amp; Clog Removal<br/>Providence, Rhode Island"
        subtitle="Professional drain cleaning services for Providence homeowners and businesses. From kitchen sink clogs to main sewer line blockages — we clear it all fast and keep it clear."
      />

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_360px] gap-12 items-start">
          <div className="prose-content">
            <p className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-2">Providence RI Drain Cleaning</p>
            <h2>Providence&apos;s Drain Cleaning Specialists</h2>
            <p>
              Clogged and slow-draining pipes are among the most common plumbing complaints in Providence, Rhode Island. Whether it&apos;s a kitchen sink that won&apos;t drain after dishes, a bathtub that pools water, or a main sewer line backing up, Kwik Plumbing has the tools and expertise to clear your drains fast — and keep them clear.
            </p>

            <h2>Signs You Need Professional Drain Cleaning in Providence</h2>
            <ul>
              {signs.map((s) => <li key={s}>{s}</li>)}
            </ul>

            <div className="bg-yellow-50 border-l-4 border-brand-orange rounded-r-lg p-5 my-6">
              <p className="text-sm text-yellow-900 m-0">
                <strong>Avoid chemical drain cleaners:</strong> Products like Drano and Liquid-Plumr can damage older pipes — especially in Providence&apos;s historic homes — and rarely solve the root cause of a blockage. Call Kwik Plumbing for a permanent solution that won&apos;t harm your plumbing.
              </p>
            </div>

            <h2>Hydro-Jetting — The Gold Standard of Drain Cleaning</h2>
            <p>
              For stubborn or recurring clogs, grease buildup, root intrusion, and main sewer line blockages, hydro-jetting is the most effective solution available. We use high-pressure water — up to 4,000 PSI — to completely scour the interior walls of your pipes, removing:
            </p>
            <ul>
              {hydrojetting.map((h) => <li key={h}>{h}</li>)}
            </ul>

            <h2>Video Camera Drain Inspection</h2>
            <p>
              For persistent or mysterious drain problems, we insert a waterproof HD camera into your drain lines to see exactly what&apos;s causing the issue. This is especially valuable in Providence&apos;s older housing stock where pipe condition can be difficult to predict. Camera inspection allows us to precisely locate blockages, identify pipe damage, detect root intrusion early, and confirm drain clearing was complete.
            </p>

            <h2>Types of Drain Cleaning Services in Providence RI</h2>

            <h3>Kitchen Drain Cleaning</h3>
            <p>Kitchen drains in Providence homes and restaurants are among the most commonly clogged lines. Grease, food particles, soap, and mineral buildup accumulate over time. We clear kitchen drain clogs thoroughly and treat the entire line to prevent rapid re-clogging.</p>

            <h3>Bathroom Drain Cleaning</h3>
            <p>Hair, soap scum, and mineral deposits cause most bathroom drain clogs — in tubs, showers, and bathroom sink drains. We clear these quickly and can install professional drain screens to reduce future buildup.</p>

            <h3>Main Sewer Line Cleaning</h3>
            <p>A clogged main sewer line affects every drain in your Providence home. We clear main sewer lines with heavy-duty equipment and can identify root intrusion, pipe collapse, or other issues with camera inspection.</p>

            <h2>Drain Cleaning for Providence&apos;s Historic Homes</h2>
            <p>
              Approximately 40% of Providence&apos;s housing was built before 1950, meaning many homes have clay, cast-iron, or older PVC drain systems. These older materials require experienced handling during drain cleaning. Kwik Plumbing&apos;s technicians are trained in older pipe materials and adjust their methods accordingly.
            </p>
          </div>

          <AsideCard
            heading="🔩 Drain Cleaning — Providence RI"
            bullets={[
              "⚡ Same-day service available",
              "🚿 All drain types cleared",
              "💦 Hydro-jetting available",
              "📹 Video camera inspection",
              "✅ Results guaranteed",
              "💰 Free written estimates",
              "🏠 Historic home specialists",
            ]}
            ctaLabel="Book Drain Cleaning"
          />
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-brand-orange text-xs font-bold uppercase tracking-widest text-center mb-2">Services</p>
          <h2 className="text-2xl font-extrabold text-center mb-4">Drain Cleaning Services — Providence RI</h2>
          <p className="text-gray-500 text-center max-w-xl mx-auto mb-12">Call us for a free estimate — we provide upfront written quotes before any work begins.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCards.map((c) => (
              <div key={c.title} className="bg-white rounded-xl p-8 shadow-card border-t-4 border-brand-blue">
                <div className="text-4xl mb-3">{c.icon}</div>
                <h3 className="font-bold text-brand-dark text-base mb-2">{c.title}</h3>
                <p className="text-gray-500 text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-extrabold text-center mb-10">What Providence Customers Say About Our Drain Cleaning</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r) => <ReviewCard key={r.name} {...r} />)}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-extrabold text-center mb-10">Drain Cleaning FAQ — Providence RI</h2>
          <FAQList items={faqs} />
        </div>
      </section>

      <RelatedServices currentHref="/drain-cleaning" />

      <CTASection
        heading="Slow or Clogged Drains in Providence?<br/>We&apos;ll Clear Them Today."
        subtext="Same-day drain cleaning available for Providence, RI homeowners and businesses — from Federal Hill to the East Side. Licensed master plumbers. Free written estimates."
      />
    </>
  );
}

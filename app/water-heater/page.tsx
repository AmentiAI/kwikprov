import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import AsideCard from "@/components/AsideCard";
import ReviewCard from "@/components/ReviewCard";
import CTASection from "@/components/CTASection";
import RelatedServices from "@/components/RelatedServices";
import FAQList from "@/components/FAQList";

export const metadata: Metadata = {
  title: "Water Heater Repair & Replacement Providence RI | Kwik Plumbing",
  description:
    "Water heater repair and installation in Providence, Rhode Island. Tank and tankless water heaters — same-day service available. All brands serviced. Licensed master plumbers. Call Kwik Plumbing (401) 639-1047.",
  keywords: [
    "water heater repair Providence RI",
    "water heater replacement Providence Rhode Island",
    "tankless water heater Providence RI",
    "hot water heater installation Providence",
    "water heater repair Federal Hill Providence",
    "tankless water heater installation Providence Rhode Island",
    "Navien water heater Providence RI",
    "no hot water Providence RI",
    "water heater plumber Providence Rhode Island",
    "same day water heater repair Providence",
  ],
};

const problems = [
  "No hot water at all — pilot light, heating element, or thermostat failure",
  "Not enough hot water — undersized unit, sediment buildup, failing element",
  "Water takes too long to reheat",
  "Water is too hot or overheating (thermostat or T&P valve issues)",
  "Discolored or rusty-looking hot water — anode rod depletion, tank corrosion",
  "Rotten egg or sulfur smell from hot water — bacterial growth",
  "Water heater making popping, rumbling, or banging sounds — sediment buildup",
  "Leaking from the tank, pressure relief valve, or inlet/outlet connections",
  "Pilot light won't stay lit (gas water heaters)",
  "Tripped circuit breaker or blown element (electric water heaters)",
];

const tanklessBenefits = [
  { icon: "♾️", title: "Endless Hot Water", desc: "Water is heated on demand, so you never run out — even with four teenagers in the house." },
  { icon: "💡", title: "24–34% Energy Savings", desc: "For homes using less than 41 gallons of hot water daily, tankless can dramatically reduce energy bills." },
  { icon: "📐", title: "Space Savings", desc: "Wall-mount design frees up valuable basement space in Providence's often tight utility rooms." },
  { icon: "⏳", title: "20+ Year Lifespan", desc: "Tankless units last nearly twice as long as traditional tank models, reducing long-term cost." },
  { icon: "🛡️", title: "Reduced Flood Risk", desc: "No 40–80 gallon tank means no risk of a catastrophic tank failure flooding your home." },
  { icon: "💸", title: "RI Utility Rebates", desc: "High-efficiency tankless units often qualify for National Grid and RI Energy rebates." },
];

const faqs = [
  { q: "How long should a water heater last in a Providence home?", a: "Tank water heaters typically last 8–12 years. Tankless water heaters can last 20+ years with proper maintenance. Providence's moderately hard water affects lifespan — regular maintenance can extend tank water heater life by 3–5 years." },
  { q: "How much does water heater replacement cost in Providence RI?", a: "Cost depends on the type of unit, your home's existing setup, and whether gas line or venting upgrades are needed. We provide free, written estimates — call us at (401) 639-1047 and we'll give you an honest quote before any work begins." },
  { q: "Do I need a permit to replace my water heater in Providence?", a: "Yes. The City of Providence requires a permit for water heater replacement, and the installation must be inspected by a city plumbing inspector. This is important for insurance purposes and when selling your home. Kwik Plumbing handles all permit applications, inspection scheduling, and ensures all work passes RI code compliance." },
  { q: "What size water heater do I need for my Providence home?", a: "General guidelines: 1–2 people: 30–40 gallon tank; 2–4 people: 40–50 gallon; 4–6 people: 50–80 gallon. For tankless units, sizing is based on flow rate demand and incoming water temperature. Providence's cold New England winters mean incoming water temps are lower in winter, requiring higher BTU output. We'll assess your specific needs during our free estimate." },
];

const reviews = [
  { text: "Our 14-year-old tank water heater finally died Saturday morning. Kwik Plumbing had a new unit installed by early afternoon the same day. Fair price, clean work, and they took the old heater away. Couldn't ask for more from a Providence plumber.", name: "Frank N.", location: "Wayland Square, Providence RI" },
  { text: "Kwik installed a Navien tankless water heater in our East Side Victorian. They handled the gas line upgrade, new venting, and permits — all in one day. Our energy bill dropped noticeably and we've never run out of hot water. Highly recommend.", name: "Jennifer H.", location: "East Side, Providence RI" },
  { text: "Was getting intermittent hot water and Kwik came out, diagnosed a failing thermostat, and fixed it within an hour for a reasonable price. They also flushed the sediment and checked the anode rod. Very thorough Providence plumbers.", name: "Marcus B.", location: "Fox Point, Providence RI" },
];

export default function WaterHeaterPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Water Heater Services Providence RI"
        title="Water Heater Repair &amp; Installation<br/>Providence, Rhode Island"
        subtitle="No hot water? Kwik Plumbing provides same-day water heater repair and replacement for Providence RI homeowners. Tank and tankless systems — all brands serviced and installed."
        image="https://scvbk65ceiknasne.public.blob.vercel-storage.com/services/1760615105775-91q9bsdt1i.jpeg"
      />

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_360px] gap-12 items-start">
          <div className="prose-content">
            <p className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-2">Providence RI Water Heater Services</p>
            <h2>Providence&apos;s Water Heater Experts — Same Day Service</h2>
            <p>
              Losing hot water in your Providence, Rhode Island home is more than an inconvenience — it disrupts your family&apos;s daily routine and, in cold New England winters, can become a genuine hardship. Kwik Plumbing&apos;s water heater service team is specifically trained on all major brands and types, with same-day service available throughout Providence.
            </p>

            <div className="bg-brand-light border-l-4 border-brand-blue rounded-r-lg p-5 my-6">
              <p className="text-sm text-brand-dark m-0">
                <strong>Know when to repair vs. replace:</strong> If your Providence water heater is under 8 years old with a single component failure, repair is usually cost-effective. If it&apos;s over 10–12 years old, showing tank corrosion, or has had multiple repairs, replacement is typically the better investment. We&apos;ll give you an honest recommendation either way.
              </p>
            </div>

            <h2>Water Heater Problems We Solve in Providence</h2>
            <ul>
              {problems.map((p) => <li key={p}>{p}</li>)}
            </ul>

            <h2>Tank Water Heater Services — Providence RI</h2>
            <p>
              We service, repair, and install all major brands including Rheem, Bradford White, A.O. Smith, Kenmore, GE, Whirlpool, and American Water Heaters. Most standard tank replacements in Providence take 2–3 hours, and we haul away the old unit at no extra charge.
            </p>

            <h2>Tankless Water Heater Installation in Providence RI</h2>
            <p>
              Tankless (on-demand) water heaters are rapidly growing in popularity among Providence homeowners — and for good reason. We are trained and authorized to install all leading tankless brands including Rinnai, Navien, Noritz, Rheem, Takagi, and Bosch.
            </p>

            <h3>Benefits of Going Tankless in Providence</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose my-6">
              {tanklessBenefits.map((b) => (
                <div key={b.title} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <span className="text-2xl mb-2 block">{b.icon}</span>
                  <h4 className="font-bold text-brand-dark text-sm mb-1">{b.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>

            <h2>Rhode Island Water Heater Permit &amp; Code Compliance</h2>
            <p>
              All water heater installations in Providence, RI require a permit from the City of Providence&apos;s Building &amp; Inspection Department. Kwik Plumbing handles all permitting paperwork and scheduling. Unpermitted water heater installations can create issues when selling your home — always use a licensed Providence plumber.
            </p>

            {/* COMPARISON TABLE */}
            <h2>Tank vs. Tankless: What&apos;s Right for Your Providence Home?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 not-prose my-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border-t-4 border-brand-blue">
                <div className="text-3xl mb-3">🪣</div>
                <h4 className="font-bold text-brand-dark mb-3">Traditional Tank</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2"><span className="text-green-600 shrink-0">✅</span> Lower upfront cost — call for a free estimate</li>
                  <li className="flex gap-2"><span className="text-green-600 shrink-0">✅</span> Simpler installation — no gas line upgrade</li>
                  <li className="flex gap-2"><span className="text-red-500 shrink-0">❌</span> Runs out of hot water with heavy use</li>
                  <li className="flex gap-2"><span className="text-red-500 shrink-0">❌</span> Higher energy use — heats water continuously</li>
                  <li className="flex gap-2"><span className="text-red-500 shrink-0">❌</span> Shorter lifespan (8–12 years)</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border-t-4 border-brand-orange">
                <div className="text-3xl mb-3">⚡</div>
                <h4 className="font-bold text-brand-dark mb-3">Tankless (On-Demand)</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2"><span className="text-green-600 shrink-0">✅</span> Endless hot water — no recovery time</li>
                  <li className="flex gap-2"><span className="text-green-600 shrink-0">✅</span> 24–34% energy savings</li>
                  <li className="flex gap-2"><span className="text-green-600 shrink-0">✅</span> 20+ year lifespan</li>
                  <li className="flex gap-2"><span className="text-red-500 shrink-0">❌</span> Higher upfront cost — call for a free estimate</li>
                  <li className="flex gap-2"><span className="text-red-500 shrink-0">❌</span> May require gas line or electrical upgrade</li>
                </ul>
              </div>
            </div>
          </div>

          <AsideCard
            heading="🌡️ Water Heater Services — Providence RI"
            bullets={[
              "⚡ Same-day service available",
              "🔧 All brands repaired",
              "💧 Tank & tankless specialists",
              "📋 RI permit included",
              "💰 Upfront pricing — no surprises",
              "♻️ Old unit haul-away included",
              "🏅 Energy rebate assistance",
            ]}
            ctaLabel="Get a Free Estimate"
          />
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-extrabold text-center mb-10">Water Heater Service Reviews from Providence Customers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r) => <ReviewCard key={r.name} {...r} />)}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-extrabold text-center mb-10">Water Heater FAQ — Providence RI</h2>
          <FAQList items={faqs} />
        </div>
      </section>

      <RelatedServices currentHref="/water-heater" />

      <CTASection
        heading="No Hot Water in Providence?<br/>We&apos;ll Fix It Today."
        subtext="Same-day water heater repair and replacement available throughout Providence, RI. Licensed, insured, and experienced with all brands and types."
      />
    </>
  );
}

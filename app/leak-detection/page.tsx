import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import AsideCard from "@/components/AsideCard";
import ReviewCard from "@/components/ReviewCard";
import CTASection from "@/components/CTASection";
import FAQList from "@/components/FAQList";

export const metadata: Metadata = {
  title: "Leak Detection Providence RI | Hidden Leaks Found Fast",
  description:
    "Advanced leak detection in Providence, Rhode Island. Hidden leaks, slab leaks, pipe leaks, well pump service, and water filtration. Non-invasive electronic and thermal imaging technology. Licensed master plumbers. Call Kwik Plumbing (401) 639-1047.",
  keywords: [
    "leak detection Providence RI",
    "hidden leak detection Providence Rhode Island",
    "slab leak detection Providence RI",
    "water leak repair Providence Rhode Island",
    "pipe leak detection Providence RI",
    "plumber leak detection Providence Rhode Island",
    "water leak Federal Hill Providence",
    "thermal imaging leak detection Providence RI",
    "well pump service Providence Rhode Island",
    "water filtration system Providence RI",
    "non invasive leak detection Providence Rhode Island",
  ],
};

const detectionServices = [
  {
    icon: "🔍",
    title: "Hidden Leak Detection",
    desc: "Non-invasive detection of leaks inside walls, under floors, and underground using electronic listening devices, infrared thermal imaging, and moisture mapping — no exploratory demolition required.",
  },
  {
    icon: "🔧",
    title: "Pipe Leak Repair",
    desc: "Swift and reliable repair of all types of pipe leaks — pinhole leaks, joint failures, corroded sections, and supply line failures. Minimal demolition approach with professional patching.",
  },
  {
    icon: "🚰",
    title: "Tap & Valve Leak Repair",
    desc: "Dripping faucets, running toilets, leaking supply valves, and failing shutoff valves repaired or replaced. Even small drips waste thousands of gallons annually and increase utility costs.",
  },
  {
    icon: "🏠",
    title: "Roof & Gutter Leak Assessment",
    desc: "Assessment and repair of water intrusion points related to roof penetrations, gutter connections, and exterior plumbing. We identify whether the issue is plumbing or roofing in origin.",
  },
  {
    icon: "💧",
    title: "Whole-House Filtration Systems",
    desc: "Installation and maintenance of whole-home water filtration systems that improve water quality, reduce scale buildup on fixtures and pipes, and extend appliance lifespan.",
  },
  {
    icon: "🔬",
    title: "Reverse Osmosis Filters",
    desc: "Under-sink reverse osmosis system installation for high-quality drinking water. We install, connect to your cold water supply and drain, and test for proper operation.",
  },
  {
    icon: "⛽",
    title: "Submersible Well Pump Service",
    desc: "Installation, repair, and replacement of submersible well pumps for homes on private wells throughout Rhode Island. Pressure tank sizing, pump sizing, and well system assessment.",
  },
  {
    icon: "📊",
    title: "Extrol & Pressure Tank Service",
    desc: "Well pressure tank (Extrol and other brands) replacement and sizing. A failed pressure tank causes short-cycling that destroys well pumps — we catch it early and fix it right.",
  },
];

const leakSigns = [
  "Water stains on ceilings, walls, or floors with no obvious source",
  "Musty or mold smell in walls, floors, or cabinets — often before visible mold appears",
  "Sound of water running when all fixtures are off",
  "Water meter moving when all water uses in the home are off",
  "Unexplained spike in your water bill",
  "Soft or discolored spots on drywall or plaster",
  "Buckling hardwood or laminate flooring near plumbing walls",
  "Low water pressure at one or multiple fixtures",
];

const technology = [
  { icon: "👂", title: "Acoustic Leak Detection", desc: "Electronic listening devices amplify the sound of water escaping from pipes under pressure — locating leaks inside walls and under slabs without cutting." },
  { icon: "🌡️", title: "Infrared Thermal Imaging", desc: "Thermal cameras detect temperature differences caused by moisture in walls and floors, mapping wet areas invisibly from the surface." },
  { icon: "💧", title: "Moisture Mapping", desc: "Digital moisture meters identify elevated moisture levels in building materials, tracing the path of water intrusion from finish surface back to source." },
  { icon: "📊", title: "Pressure Testing", desc: "Isolating sections of plumbing and monitoring pressure drop confirms the presence of a leak and helps narrow its location before visual inspection." },
];

const faqs = [
  {
    q: "How does non-invasive leak detection work?",
    a: "We use a combination of acoustic listening devices (which amplify the sound of water escaping from pressurized pipes), infrared thermal cameras (which detect temperature differences caused by moisture behind surfaces), and moisture meters (which measure moisture content in building materials). Together, these tools let us locate the vast majority of hidden leaks without cutting into walls or floors first.",
  },
  {
    q: "How much does leak detection cost in Providence RI?",
    a: "Call us at (401) 639-1047 for a free estimate. Professional leak detection is almost always more cost-effective than exploratory demolition — opening walls and floors randomly trying to find a leak. We locate it precisely first, then provide a clear repair estimate before any work begins.",
  },
  {
    q: "My water meter shows usage when nothing is running — do I have a leak?",
    a: "Yes, almost certainly. A moving water meter with all fixtures off is a reliable indicator of a leak somewhere in your plumbing system. It could be a running toilet, a leaking supply line, an underground service line leak, or a pipe leak inside a wall. Call us for a leak detection assessment — catching it early saves significant water waste and prevents structural damage.",
  },
  {
    q: "Do you service well pumps and pressure tanks in Rhode Island?",
    a: "Yes. We install, repair, and replace submersible well pumps and well pressure tanks (Extrol and other brands) for homes on private wells throughout Rhode Island. Common issues include failed pressure tanks causing short-cycling, worn pump impellers reducing flow, and control box failures. We diagnose the system properly before recommending parts replacement.",
  },
  {
    q: "What water filtration systems do you install?",
    a: "We install whole-house filtration systems (typically at the main water entry, filtering all water in the home), under-sink reverse osmosis systems for drinking water, and water softeners for homes with hard water issues. We can assess your water supply and recommend the appropriate filtration based on your water quality and household needs.",
  },
  {
    q: "Can you detect a slab leak in my Providence home?",
    a: "Yes. Slab leaks — water supply or drain leaks occurring under a concrete slab foundation — are among the most damaging hidden leaks because they can go undetected for months. We use acoustic listening devices and thermal imaging to locate slab leaks before recommending access strategy. Repair options include slab access, re-routing the supply line above the slab, or pipe lining depending on the pipe material and layout.",
  },
];

const reviews = [
  {
    text: "I had a water stain on my first floor ceiling and no idea where it was coming from. Kwik came with their detection equipment, found a pinhole leak in a copper fitting inside the second floor wall, made a small access panel, fixed it, and patched everything. No ripping out the ceiling. Outstanding.",
    name: "Helen T.",
    location: "Cranston, RI",
  },
  {
    text: "My water bill doubled over two months. Kwik pressure-tested the lines, found an underground supply line leak between the meter and the house, dug down to it, and repaired it the same day. Professional, fast, and they backfilled and tamped the soil cleanly.",
    name: "Brian C.",
    location: "Warwick, RI",
  },
  {
    text: "Well pump had been short-cycling for months. Kwik diagnosed a waterlogged pressure tank, replaced it with a properly sized unit, and the pump has been running perfectly for over a year now. They saved the pump from burning out.",
    name: "Gary and Susan M.",
    location: "North Providence, RI",
  },
];

export default function LeakDetectionPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Leak Detection Providence RI"
        title="Leak Detection &amp; Repair<br/>Providence, Rhode Island"
        subtitle="Advanced non-invasive leak detection using electronic sensors, thermal imaging, and moisture mapping. We find hidden leaks fast — without unnecessary demolition — and repair them right."
      />

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_360px] gap-12 items-start">
          <div className="prose-content">
            <p className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-2">Advanced Leak Detection — Rhode Island</p>
            <h2>Find Hidden Leaks Without Tearing Up Your Providence Home</h2>
            <p>
              A hidden water leak is one of the most insidious problems a homeowner faces. It can silently damage your home&apos;s structure, grow mold inside walls, and run your water bill up for months before it becomes visible. Kwik Plumbing&apos;s leak detection team serves Providence, Cranston, Warwick, and all of Rhode Island with professional-grade detection technology that finds leaks before they become disasters — and without the destructive exploratory work that guesswork requires.
            </p>
            <p>
              We use electronic acoustic listening devices, infrared thermal imaging cameras, and digital moisture meters to locate leaks inside walls, under floors, and underground — then confirm location with targeted pressure testing before making a precise repair access. The result is a faster, cleaner fix with minimal disruption to your home.
            </p>

            <h2>Detection Technology We Use</h2>
            <div className="grid sm:grid-cols-2 gap-5 my-6 not-prose">
              {technology.map((t) => (
                <div key={t.title} className="bg-brand-light rounded-xl p-5 border border-brand-blue/20">
                  <div className="text-2xl mb-2">{t.icon}</div>
                  <h3 className="font-bold text-brand-dark text-sm mb-1">{t.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>

            <h2>Leak Detection &amp; Water Services We Offer</h2>
            <div className="grid sm:grid-cols-2 gap-5 my-6 not-prose">
              {detectionServices.map((s) => (
                <div key={s.title} className="bg-white rounded-xl p-6 shadow-card border-t-4 border-brand-blue">
                  <div className="text-3xl mb-2">{s.icon}</div>
                  <h3 className="font-bold text-brand-dark text-base mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>

            <h2>Warning Signs of a Hidden Leak</h2>
            <p>
              Hidden leaks rarely announce themselves dramatically — instead, they reveal themselves through subtle clues that are easy to dismiss. If you notice any of the following, call us for a leak assessment:
            </p>
            <ul>
              {leakSigns.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>

            <div className="bg-yellow-50 border-l-4 border-brand-orange rounded-r-lg p-5 my-6">
              <p className="text-sm text-yellow-900 m-0">
                <strong>Don&apos;t wait on a suspected leak.</strong> A slow leak inside a wall can cause mold growth in 24–48 hours and structural damage to framing within weeks. The cost of finding and fixing a leak early is always far less than the cost of mold remediation and structural repair.
              </p>
            </div>

            <h2>Well Pump &amp; Pressure Tank Service — Rhode Island</h2>
            <p>
              Many Rhode Island homes outside Providence&apos;s urban core rely on private wells and pressure tanks for their water supply. Kwik Plumbing services well systems throughout Rhode Island — diagnosing pump failures, replacing waterlogged pressure tanks, and restoring proper water pressure to well-served homes.
            </p>
            <p>
              A common and frequently overlooked issue is a failing pressure tank (Extrol or other brands). When the tank&apos;s air bladder fails, the well pump short-cycles — turning on and off rapidly — which dramatically shortens pump life. If your pump is cycling more than once per minute under normal use, your pressure tank likely needs replacement. We carry common tank sizes and can typically replace same-day.
            </p>

            <h2>Water Filtration &amp; Purification Systems</h2>
            <p>
              Rhode Island&apos;s water quality varies across the state. Providence municipal water is generally safe but can contain chlorine taste, low-level lead from aging service lines, and other trace minerals. Homes on private wells may face iron, hardness, bacteria, or other water quality issues.
            </p>
            <p>
              Kwik Plumbing installs whole-house filtration systems at the main water entry point (filtering every tap in the home), under-sink reverse osmosis systems for premium drinking water, and water softeners for homes with hard water. We assess your specific water quality situation and recommend the right filtration solution.
            </p>
          </div>

          <AsideCard
            heading="🔍 Leak Detection — RI"
            bullets={[
              "🌡️ Thermal imaging technology",
              "👂 Acoustic listening devices",
              "💧 No exploratory demolition",
              "⛽ Well pump specialists",
              "🔬 Water filtration systems",
              "📋 Full repair capability",
              "💰 Free written estimates",
            ]}
            ctaLabel="Schedule Leak Detection"
          />
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-extrabold text-center mb-10">Leak Detection Reviews from Rhode Island Customers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <ReviewCard key={r.name} {...r} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-extrabold text-center mb-10">Leak Detection FAQ — Rhode Island</h2>
          <FAQList items={faqs} />
        </div>
      </section>

      <CTASection
        heading="Suspect a Hidden Leak in Your Providence Home?<br/>Call Kwik Plumbing."
        subtext="Advanced non-invasive leak detection throughout Providence & all of Rhode Island. We find the leak — then fix it right the first time."
      />
    </>
  );
}

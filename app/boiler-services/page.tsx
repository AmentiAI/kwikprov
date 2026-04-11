import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import AsideCard from "@/components/AsideCard";
import ReviewCard from "@/components/ReviewCard";
import CTASection from "@/components/CTASection";
import FAQList from "@/components/FAQList";

export const metadata: Metadata = {
  title: "Boiler Services Providence RI | Install, Repair & Maintenance",
  description:
    "Expert boiler installation, repair, and maintenance in Providence, Rhode Island. Gas, oil, and steam boilers. Authorized Navien specialist. Licensed master plumbers. Call Kwik Plumbing (401) 639-1047.",
  keywords: [
    "boiler repair Providence RI",
    "boiler installation Providence Rhode Island",
    "steam boiler repair Providence",
    "oil boiler service Providence RI",
    "boiler maintenance Providence Rhode Island",
    "Navien boiler specialist Providence RI",
    "high efficiency boiler Providence Rhode Island",
    "boiler replacement Providence RI",
    "oil to gas boiler conversion Providence",
    "no heat Providence RI plumber",
    "boiler repair Federal Hill Providence",
    "boiler service East Side Providence RI",
  ],
};

const boilerTypes = [
  {
    icon: "🔥",
    title: "Gas Boilers",
    desc: "Installation, repair, and maintenance for all gas-fired hot water and steam boilers. We service all major brands including Navien, Burnham, Weil-McLain, Peerless, and more.",
  },
  {
    icon: "🛢️",
    title: "Oil Boilers",
    desc: "Full service for oil-fired boiler systems including annual tune-ups, nozzle and filter replacement, heat exchanger cleaning, and complete oil-to-gas conversions.",
  },
  {
    icon: "💨",
    title: "Steam Boilers",
    desc: "Specialized steam boiler installation, repair, and cleaning for Providence's older homes. Steam system balancing, vent repair, and near-boiler piping work.",
  },
  {
    icon: "⚡",
    title: "High-Efficiency Boilers",
    desc: "Upgrade to a 95%+ AFUE condensing boiler and dramatically reduce your heating bills. We install and service high-efficiency units from Navien, Buderus, Triangle Tube, and more.",
  },
];

const services = [
  {
    icon: "🔧",
    title: "Boiler Installation",
    desc: "Complete boiler replacement and new installation for Rhode Island homes. We pull all permits, handle gas line connections, and ensure your new boiler passes city inspection.",
  },
  {
    icon: "🛠️",
    title: "Boiler Repair",
    desc: "Fast diagnosis and repair of boiler failures — no heat, pilot outages, pressure problems, zone valve failures, circulator pump issues, and more.",
  },
  {
    icon: "📋",
    title: "Annual Boiler Maintenance",
    desc: "Complete boiler tune-up including heat exchanger inspection, burner cleaning, flue analysis, pressure and safety relief valve testing, and efficiency check.",
  },
  {
    icon: "🔁",
    title: "Oil-to-Gas Conversion",
    desc: "Convert your oil boiler to efficient natural gas. We handle the full project: new boiler, gas line, flue liner, and permits — turning one service call into long-term savings.",
  },
  {
    icon: "🌡️",
    title: "Boiler & Gas Valve Repair",
    desc: "Replacement and repair of gas valves, aquastats, pressure gauges, backflow preventers, and all boiler control components for safe, reliable operation.",
  },
  {
    icon: "🪣",
    title: "Expansion Tank Service",
    desc: "Expansion tank sizing, installation, and replacement to protect your boiler and distribution system from damaging pressure fluctuations.",
  },
  {
    icon: "♨️",
    title: "Steam Radiator Service",
    desc: "Steam radiator installation, repair, and balancing. Air vent replacement, trap repair, and radiator flushing to restore even heat throughout your home.",
  },
  {
    icon: "📏",
    title: "Baseboard & Zone Installation",
    desc: "Hydronic baseboard installation and zone valve addition for new rooms, additions, or system upgrades. Properly sized and balanced for efficiency.",
  },
  {
    icon: "🏷️",
    title: "Boiler Warranty Service",
    desc: "Authorized warranty service for major boiler brands. We document service visits properly to protect your manufacturer's warranty coverage.",
  },
];

const navienBenefits = [
  { icon: "✅", title: "Navien Certified", desc: "Kwik Plumbing is an authorized Navien specialist — properly trained on installation, startup, and service for the full Navien product line." },
  { icon: "💡", title: "Top Efficiency", desc: "Navien condensing boilers and combi-units reach up to 95% AFUE efficiency, delivering significant savings on Rhode Island's high heating costs." },
  { icon: "🔥", title: "Combi-Boiler Experts", desc: "Navien combi-boilers provide both space heating and unlimited domestic hot water from a single wall-hung unit — perfect for smaller Providence homes." },
  { icon: "🛡️", title: "Warranty Protected", desc: "Factory-authorized installation protects your full Navien warranty. We register your unit and provide the documentation you need for coverage." },
];

const faqs = [
  {
    q: "How much does a boiler replacement cost in Rhode Island?",
    a: "Cost depends on the boiler type, brand, efficiency level, and your home's existing setup. We provide free, written estimates for every project — call (401) 639-1047 and we'll quote you upfront before any work begins. High-efficiency units may also qualify for National Grid rebates.",
  },
  {
    q: "How do I know if my boiler needs replacement vs. repair?",
    a: "Boilers under 15 years old with a single component failure are usually worth repairing. If your boiler is 20+ years old, showing multiple failures, has a cracked heat exchanger, or is a low-efficiency unit (under 80% AFUE), replacement is typically the better long-term investment. We'll give you an honest assessment and never push replacement when a repair makes financial sense.",
  },
  {
    q: "Do you service oil boilers in Rhode Island?",
    a: "Yes. We service, repair, and replace oil-fired boilers throughout Rhode Island. We also perform oil-to-gas conversions for homeowners who want to switch to natural gas — often a cost-effective upgrade that pays for itself in fuel savings within a few years.",
  },
  {
    q: "My boiler is making a banging or kettling noise — what's wrong?",
    a: "Banging or kettling sounds are most often caused by limescale buildup on the heat exchanger restricting water flow, or by a failing circulator pump. In steam boilers, banging often indicates a water hammer issue from improper pipe pitch or failed steam traps. Our technicians can diagnose the cause and recommend the appropriate repair.",
  },
  {
    q: "Does boiler installation require a permit in Providence RI?",
    a: "Yes. Boiler installation and replacement requires a permit and inspection from the City of Providence (or the relevant municipality). Kwik Plumbing handles all permit applications, schedules inspections, and ensures all work is completed to Rhode Island state code. Never hire a contractor who skips the permit — it creates insurance and home sale complications.",
  },
  {
    q: "Do you install Navien boilers?",
    a: "Yes — Kwik Plumbing is an authorized Navien specialist. We install and service Navien condensing boilers and combi-units throughout Providence RI and all of Rhode Island. Factory-authorized installation is required to maintain full warranty coverage on Navien equipment.",
  },
];

const reviews = [
  {
    text: "Kwik replaced our 30-year-old steam boiler with a new high-efficiency unit. The difference in heating bills is remarkable — the old boiler was eating money. Professional crew, all permits pulled, passed inspection first try. Couldn't be happier.",
    name: "Paul D.",
    location: "Federal Hill, Providence RI",
  },
  {
    text: "Our oil boiler stopped firing in February. Kwik came out the same day, diagnosed a failed burner motor, and had us with heat by that evening. Fair price and no upselling. They've earned a customer for life.",
    name: "Linda M.",
    location: "Elmwood, Providence RI",
  },
  {
    text: "Had Kwik install a Navien combi-boiler in our East Side Victorian. They handled the gas line upgrade, new venting through the wall, and all the permits. The combi-unit handles both heat and hot water — we freed up a ton of space in the basement.",
    name: "Chris V.",
    location: "East Side, Providence RI",
  },
];

export default function BoilerServicesPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Boiler Services Providence RI"
        title="Boiler Services<br/>Providence, Rhode Island"
        subtitle="Providence RI's boiler specialists — installation, repair, and maintenance for gas, oil, and steam boilers. Authorized Navien specialists serving Providence, Cranston, Warwick, and all of Rhode Island."
      />

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_360px] gap-12 items-start">
          <div className="prose-content">
            <p className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-2">Providence RI Boiler Experts</p>
            <h2>Complete Boiler Services for Rhode Island Homes</h2>
            <p>
              Heating your Rhode Island home through a long New England winter demands a reliable boiler. Kwik Plumbing and Heating Inc. has been the boiler service specialist for Providence, Cranston, Warwick, and all of Rhode Island for over 15 years. Whether you need a tune-up on an aging steam boiler, a repair on a no-heat situation, or a complete high-efficiency replacement, our licensed master plumbers handle every boiler job with the expertise your system demands.
            </p>
            <p>
              As an authorized Navien specialist and experienced service technician for all major brands, we bring factory-level knowledge to every service call. We work on gas boilers, oil boilers, steam boilers, and high-efficiency condensing systems — and we pull every permit required by Rhode Island code.
            </p>

            <h2>Types of Boilers We Service</h2>
            <div className="grid sm:grid-cols-2 gap-5 my-6 not-prose">
              {boilerTypes.map((b) => (
                <div key={b.title} className="bg-white rounded-xl p-6 shadow-card border-t-4 border-brand-blue">
                  <div className="text-3xl mb-2">{b.icon}</div>
                  <h3 className="font-bold text-brand-dark text-base mb-2">{b.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>

            <h2>Boiler Services We Offer in Providence RI</h2>
            <div className="grid sm:grid-cols-2 gap-5 my-6 not-prose">
              {services.map((s) => (
                <div key={s.title} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="text-2xl mb-2">{s.icon}</div>
                  <h3 className="font-bold text-brand-dark text-sm mb-1">{s.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>

            <h2>Authorized Navien Specialist — Providence RI</h2>
            <p>
              Kwik Plumbing and Heating is an authorized Navien specialist — one of the most trusted brands in condensing boiler and combi-unit technology. Navien&apos;s condensing combi-boilers are particularly well-suited to Providence&apos;s older housing stock, where space is at a premium and separate water heaters consume valuable square footage.
            </p>
            <div className="grid sm:grid-cols-2 gap-5 my-6 not-prose">
              {navienBenefits.map((b) => (
                <div key={b.title} className="bg-brand-light rounded-xl p-5 border border-brand-blue/20">
                  <div className="text-2xl mb-2">{b.icon}</div>
                  <h4 className="font-bold text-brand-dark text-sm mb-1">{b.title}</h4>
                  <p className="text-gray-600 text-xs leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>

            <h2>Oil-to-Gas Boiler Conversions in Rhode Island</h2>
            <p>
              Many Rhode Island homes still rely on oil-fired boilers installed in the 1970s and 80s. If your home has access to natural gas service, converting from oil to gas is often the single best heating investment you can make. Modern gas boilers are dramatically more efficient than aging oil systems, and natural gas has historically been a more stable and lower-cost fuel than heating oil in New England.
            </p>
            <p>
              Kwik Plumbing handles oil-to-gas conversions from start to finish: new gas boiler, gas line installation to the equipment, flue liner if required, removal of the old oil boiler and tank (when applicable), and all permits and inspections. We can typically complete a straightforward conversion in one to two days.
            </p>

            <h2>Boiler Maintenance — Why It Matters in Rhode Island</h2>
            <p>
              An annual boiler tune-up is the single most cost-effective investment a Rhode Island homeowner can make in their heating system. A properly maintained boiler runs at peak efficiency, extends equipment lifespan, and catches small problems before they become costly failures. Our annual maintenance includes heat exchanger inspection, burner adjustment, flue gas analysis, safety control testing, and a full operational check — documented for your warranty records.
            </p>

            <div className="bg-yellow-50 border-l-4 border-brand-orange rounded-r-lg p-5 my-6">
              <p className="text-sm text-yellow-900 m-0">
                <strong>National Grid rebates available:</strong> High-efficiency natural gas boiler replacements in Rhode Island may qualify for National Grid rebates up to $600. Kwik Plumbing can help you navigate the rebate application process as part of your installation project.
              </p>
            </div>
          </div>

          <AsideCard
            heading="🔥 Boiler Services — RI"
            bullets={[
              "⚡ Same-day service available",
              "🏆 Authorized Navien specialist",
              "🛢️ Gas, oil & steam systems",
              "🔁 Oil-to-gas conversions",
              "📋 All RI permits handled",
              "💰 Free written estimates",
              "🛡️ 1-year labor warranty",
            ]}
            ctaLabel="Get a Free Boiler Estimate"
          />
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-extrabold text-center mb-10">Boiler Service Reviews from Rhode Island Customers</h2>
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
          <h2 className="text-2xl font-extrabold text-center mb-10">Boiler FAQ — Rhode Island</h2>
          <FAQList items={faqs} />
        </div>
      </section>

      <CTASection
        heading="Need Boiler Service in Providence RI?<br/>Call Kwik Plumbing Today."
        subtext="Authorized Navien specialist serving Providence, Cranston, Warwick & all of Rhode Island. Licensed master plumbers, all permits handled, free written estimates."
      />
    </>
  );
}

import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import AsideCard from "@/components/AsideCard";
import ReviewCard from "@/components/ReviewCard";
import CTASection from "@/components/CTASection";
import FAQList from "@/components/FAQList";

export const metadata: Metadata = {
  title: "Gas Line Services Providence RI | Install, Repair & Safety",
  description:
    "Licensed gas line installation, repair, and safety services in Providence, Rhode Island. New gas lines, appliance hookups, generator lines, fire pit lines, and gas leak detection. Licensed master plumbers. Call Kwik Plumbing (401) 639-1047.",
  keywords: [
    "gas line installation Providence RI",
    "gas pipe repair Providence Rhode Island",
    "gas leak detection Providence RI",
    "gas line for generator Providence RI",
    "gas line for fire pit Providence Rhode Island",
    "gas appliance hookup Providence RI",
    "licensed gas plumber Providence Rhode Island",
    "gas line repair Providence RI",
    "gas safety inspection Providence",
    "gas line contractor Providence Rhode Island",
    "outdoor gas line installation Providence RI",
  ],
};

const gasServices = [
  {
    icon: "🛡️",
    title: "Gas Safety Certificates",
    desc: "Gas safety inspections and certificates for landlords and homeowners. Comprehensive check of all gas appliances, connections, pressure, and ventilation for peace of mind and compliance.",
  },
  {
    icon: "🍳",
    title: "Gas Cooker & Appliance Installation",
    desc: "Professional gas range, cooktop, and appliance hookup by licensed master plumbers. Proper connection, pressure testing, and leak verification on every installation.",
  },
  {
    icon: "🔍",
    title: "Gas Leak Detection & Repair",
    desc: "Advanced gas leak detection using electronic sensors and pressure testing equipment. Fast, accurate identification and professional repair of all gas line leaks.",
  },
  {
    icon: "🔧",
    title: "Gas Pipe Installation & Repair",
    desc: "New gas pipe installation and repair throughout your home or business. All work to Rhode Island code, properly sized for appliance demand, pressure tested before use.",
  },
  {
    icon: "🏗️",
    title: "Gas Line Extension",
    desc: "Extend existing gas service to new appliances, additions, or outdoor kitchens. We handle the routing, sizing, trenching for underground runs, and all required permits.",
  },
  {
    icon: "⚡",
    title: "Gas Lines for Generators",
    desc: "Dedicated gas line installation for whole-home standby generators. Properly sized for generator BTU demand, with shutoffs and connections per code.",
  },
  {
    icon: "🔥",
    title: "Gas Lines for Fire Pits",
    desc: "Transform your outdoor space with a professionally installed gas fire pit line. Safe underground runs, proper shutoffs, and all materials to code.",
  },
  {
    icon: "🏡",
    title: "Gas Lines for Fireplaces",
    desc: "Gas line installation for gas inserts, direct-vent fireplaces, and decorative gas log sets. Indoor and outdoor fireplace connections by licensed master plumbers.",
  },
];

const safetyWarnings = [
  "Rotten egg or sulfur smell anywhere in or near your home",
  "Hissing sound near a gas appliance or gas line",
  "Dead or dying vegetation in a straight line in your yard (possible underground leak)",
  "Bubbling in standing water near a gas service line",
  "Unexplained increase in your gas bill without a change in usage",
  "Pilot lights on appliances that repeatedly go out",
  "Physical symptoms like dizziness, headaches, or nausea when appliances run",
];

const faqs = [
  {
    q: "Do I need a permit to run a new gas line in Rhode Island?",
    a: "Yes. All new gas line work in Rhode Island requires a permit from the applicable city or town, and the work must be inspected before the gas is turned on. Kwik Plumbing handles all permit applications and inspection scheduling as part of every gas line project. Never hire a contractor who skips the permit — unpermitted gas work creates insurance, safety, and home-sale complications.",
  },
  {
    q: "How much does gas line installation cost in Providence RI?",
    a: "Cost varies based on run length, pipe size, and site conditions. Call us at (401) 639-1047 — we'll assess your project and provide a free, detailed written estimate before any work begins. All gas work is permitted and pressure-tested.",
  },
  {
    q: "What should I do if I smell gas in my home?",
    a: "Leave the building immediately without using any electrical switches, phones, or open flames. Once outside, call your gas utility's emergency line (National Grid: 1-800-640-1595) and then call 911 if the smell is strong. Do not re-enter until cleared by the utility or fire department. After the utility confirms it is safe, call Kwik Plumbing to inspect and repair the leak.",
  },
  {
    q: "Can you run a gas line for my outdoor fire pit or kitchen?",
    a: "Yes — outdoor gas lines for fire pits, outdoor kitchens, built-in grills, and patio heaters are a regular part of our gas services work. We trench and install the underground line, install proper shutoffs, and connect to your outdoor appliance. All work is permitted and pressure tested before use.",
  },
  {
    q: "Are your plumbers licensed to do gas work in Rhode Island?",
    a: "Yes. All Kwik Plumbing technicians performing gas work are licensed master plumbers in Rhode Island and gas-safe certified. Rhode Island law requires that gas piping work be performed by a licensed plumber. Always verify licensing before allowing any contractor to work on your gas system.",
  },
  {
    q: "Can you install a gas line for a whole-home standby generator?",
    a: "Yes. Generator gas lines are one of our most common gas service requests. We size the line correctly for your generator's BTU demand, install an appropriately sized meter set if required, run the line to your generator pad, and install the proper connection and shutoff. We coordinate with National Grid on meter upgrades when needed.",
  },
];

const reviews = [
  {
    text: "Kwik ran a gas line from our basement to our new outdoor kitchen and connected the built-in grill. Professional crew, trenched and buried the line neatly, pulled the permit, and it passed inspection without a single issue. Great work.",
    name: "Michael R.",
    location: "West End, Providence RI",
  },
  {
    text: "Had a gas smell in my basement. Kwik came out the same morning, found a pinhole leak in an old black iron fitting behind the furnace, and replaced the section properly. They also pressure tested the entire system before leaving. Very thorough.",
    name: "Patricia L.",
    location: "Cranston, RI",
  },
  {
    text: "We wanted a gas fire pit on our patio. Kwik handled the entire project — permit, trenching, underground line, and connection to the fire pit. Perfectly done and it adds so much to our backyard. Worth every penny.",
    name: "Steve and Amy K.",
    location: "Warwick, RI",
  },
];

export default function GasServicesPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Gas Line Services Providence RI"
        title="Gas Line Services<br/>Providence, Rhode Island"
        subtitle="Licensed gas line installation, repair, and safety services throughout Rhode Island. New gas lines, appliance hookups, generator connections, fire pit lines, and gas leak detection — all work permitted and code-compliant."
      />

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_360px] gap-12 items-start">
          <div className="prose-content">
            <p className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-2">Licensed Gas Plumbers — Rhode Island</p>
            <h2>Professional Gas Services for Providence RI Homes &amp; Businesses</h2>
            <p>
              Gas line work is among the most safety-critical services a plumber performs. Rhode Island law requires that all gas piping work be completed by a licensed master plumber — and at Kwik Plumbing, every gas service we perform is done by our licensed, gas-safe certified team with all required permits and inspections. We serve Providence, Cranston, Warwick, East Providence, and all of Rhode Island.
            </p>
            <p>
              From connecting a new gas range to running underground lines for outdoor fire features to diagnosing gas leaks with electronic detection equipment, our team handles the full spectrum of residential and commercial gas work — safely, properly, and in compliance with Rhode Island code.
            </p>

            <h2>Gas Services We Offer</h2>
            <div className="grid sm:grid-cols-2 gap-5 my-6 not-prose">
              {gasServices.map((s) => (
                <div key={s.title} className="bg-white rounded-xl p-6 shadow-card border-t-4 border-brand-blue">
                  <div className="text-3xl mb-2">{s.icon}</div>
                  <h3 className="font-bold text-brand-dark text-base mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>

            <h2>Gas Leak Warning Signs</h2>
            <p>
              Natural gas is odorized with mercaptan — a sulfur compound that gives gas its distinctive rotten egg smell — specifically so leaks can be detected. If you notice any of the following, treat it seriously:
            </p>
            <ul>
              {safetyWarnings.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>

            <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-5 my-6">
              <p className="text-sm text-red-900 m-0">
                <strong>Gas leak? Leave immediately.</strong> Do not use light switches, phones, or open flames. Exit the building, then call National Grid at 1-800-640-1595 and 911 if the smell is strong. After the utility clears the building, call Kwik Plumbing at{" "}
                <strong>(401) 639-1047</strong> to locate and repair the leak.
              </p>
            </div>

            <h2>Gas Line Installation for Outdoor Features</h2>
            <p>
              Outdoor gas features — fire pits, built-in grills, outdoor kitchens, patio heaters — are increasingly popular with Rhode Island homeowners, and Kwik Plumbing installs more outdoor gas lines every year. All outdoor gas work requires underground pipe burial at proper depth, moisture-resistant fittings, and code-compliant shutoffs at the appliance. We handle the permit, the trenching, the pipe installation, pressure testing, and connection to your outdoor feature.
            </p>

            <h2>Generator Gas Lines — Providence RI</h2>
            <p>
              With New England&apos;s increasingly severe storm seasons, whole-home standby generators are a popular investment for Rhode Island homeowners. A Generac or Kohler whole-home generator requires a properly sized dedicated gas line — not a tee off an existing branch. Kwik Plumbing sizes the line to your generator&apos;s BTU demand, coordinates any necessary meter upgrades with National Grid, installs the line with all required shutoffs, and ensures a clean inspection.
            </p>

            <h2>All Gas Work Permitted &amp; Inspected</h2>
            <p>
              Every gas line project Kwik Plumbing performs is permitted through the appropriate Rhode Island municipality and inspected by a licensed inspector before gas is activated. This protects you legally, satisfies your homeowner&apos;s insurance requirements, and is required by Rhode Island law. If a contractor offers to do gas work without a permit — that is a serious red flag.
            </p>
          </div>

          <AsideCard
            heading="⛽ Gas Services — RI"
            bullets={[
              "🛡️ Licensed & gas-safe certified",
              "📋 All permits handled",
              "🔍 Electronic leak detection",
              "🏗️ New lines & extensions",
              "🔥 Outdoor fire features",
              "⚡ Generator connections",
              "💰 Free written estimates",
            ]}
            ctaLabel="Get a Free Gas Estimate"
          />
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-extrabold text-center mb-10">Gas Service Reviews from Rhode Island Customers</h2>
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
          <h2 className="text-2xl font-extrabold text-center mb-10">Gas Services FAQ — Rhode Island</h2>
          <FAQList items={faqs} />
        </div>
      </section>

      <CTASection
        heading="Need Gas Line Work in Providence RI?<br/>Call Kwik Plumbing."
        subtext="Licensed master plumbers handling all gas line installation, repair, and safety work throughout Providence & all of Rhode Island. All work permitted and inspected."
      />
    </>
  );
}

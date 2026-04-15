import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import RelatedServices from "@/components/RelatedServices";
import { AREAS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Plumbing & Heating Services Providence RI | Kwik Plumbing",
  description:
    "Complete plumbing and heating services in Providence RI. Boilers, gas lines, drain cleaning, bathroom remodeling, water heaters, leak detection, pipe repair, and more. Licensed master plumbers. Call (401) 639-1047.",
  keywords: [
    "plumbing services Providence RI",
    "heating services Rhode Island",
    "boiler service Providence",
    "gas line installation RI",
    "bathroom remodeling Providence",
    "leak detection Rhode Island",
    "drain cleaning Providence RI",
  ],
};

const serviceCategories = [
  {
    label: "Plumbing Services",
    title: "General Plumbing Services",
    href: null as string | null,
    cards: [
      { icon: "🚰", title: "Kitchen Faucet Repair & Install", desc: "Repair and replacement of kitchen faucets, pull-down sprayers, and pot fillers — all brands and styles." },
      { icon: "🪣", title: "Kitchen Sink Installation", desc: "Undermount, drop-in, and farmhouse sink installation with proper drain, garbage disposal, and supply connections." },
      { icon: "🚽", title: "Toilet Repair & Replacement", desc: "Running, clogged, rocking, or leaking toilets fixed fast. Handicap and pressure-assisted toilet installation also available." },
      { icon: "🗑️", title: "Garbage Disposal Service", desc: "Garbage disposal installation, repair, and replacement for all brands. Includes proper wiring and drain connection coordination." },
      { icon: "🌿", title: "Outdoor Faucet Installation", desc: "Frost-proof outdoor hose bib installation and repair to protect your home from freeze damage during Rhode Island winters." },
      { icon: "🍽️", title: "Dishwasher Installation", desc: "Dishwasher hookup and drain connection, including supply shut-off valve and air gap installation where required." },
      { icon: "🔩", title: "Water Valve Repair", desc: "Repair and replacement of main shutoffs, angle stops, ball valves, and gate valves throughout your plumbing system." },
      { icon: "🏗️", title: "Cast Iron Stack Replacement", desc: "Replacement of deteriorating cast iron drain stacks with modern PVC — common in Providence's older triple-deckers and row houses." },
    ],
  },
  {
    label: "Boiler Services",
    title: "Boiler Installation, Repair & Maintenance",
    href: "/boiler-services",
    cards: [
      { icon: "🔥", title: "Boiler Install & Repair", desc: "Expert installation and repair for gas, oil, and steam boilers. All major brands serviced, all RI permits handled.", href: "/boiler-services" },
      { icon: "⚡", title: "High-Efficiency Boilers", desc: "Upgrade to a 95%+ AFUE condensing boiler and reduce your heating bills significantly. Navien specialist on staff.", href: "/boiler-services" },
      { icon: "💨", title: "Steam Boiler Service", desc: "Specialized steam boiler installation, repair, balancing, and cleaning for Providence's older homes.", href: "/boiler-services" },
      { icon: "🛢️", title: "Oil Boiler Service", desc: "Maintenance, repair, and oil-to-gas conversions for oil-fired heating systems throughout Rhode Island.", href: "/boiler-services" },
      { icon: "🌡️", title: "Boiler Valve & Control Repair", desc: "Gas valve, aquastat, pressure gauge, and circulator pump replacement for safe, efficient operation.", href: "/boiler-services" },
      { icon: "♨️", title: "Radiator & Baseboard Service", desc: "Steam radiator repair, hydronic baseboard installation, and zone valve addition for new rooms or system upgrades.", href: "/boiler-services" },
    ],
  },
  {
    label: "Heating Services",
    title: "Central Heating & Water Heater Services",
    href: "/water-heater",
    cards: [
      { icon: "🌡️", title: "Tank Water Heater Service", desc: "Repair, maintenance, and same-day replacement of all gas and electric tank water heaters. All brands serviced.", href: "/water-heater" },
      { icon: "⚡", title: "Tankless Water Heater Install", desc: "Navien, Rinnai, Noritz, and all leading tankless brands installed with gas line, venting, and permits.", href: "/water-heater" },
      { icon: "🔁", title: "Water Heater Maintenance", desc: "Annual flush, anode rod inspection, T&P valve testing, and efficiency check to extend water heater life.", href: "/water-heater" },
      { icon: "🏠", title: "Radiator Installation", desc: "Hydronic and steam radiator installation for additions, new rooms, and system upgrades throughout Rhode Island." },
      { icon: "🌐", title: "Underfloor Heating", desc: "Hydronic underfloor (radiant) heating installation for new construction and renovation projects in Rhode Island." },
      { icon: "🔄", title: "Power Flushing", desc: "Boiler and heating system power flush to remove sludge and scale, restoring efficiency and heat output." },
      { icon: "🌡️", title: "Smart Thermostat Installation", desc: "Nest, Ecobee, and other smart thermostat installation for remote temperature control and energy savings." },
    ],
  },
  {
    label: "Bathroom Remodeling",
    title: "Bathroom Remodeling & Renovation Plumbing",
    href: "/bathroom-remodeling",
    cards: [
      { icon: "🛁", title: "Complete Bathroom Fitting", desc: "Full rough-in to finish plumbing for new and remodeled bathrooms. Coordinated with your contractor.", href: "/bathroom-remodeling" },
      { icon: "🚿", title: "Shower Installation & Repair", desc: "Custom shower rough-in, valve installation, and showerhead systems. Electric and power showers available.", href: "/bathroom-remodeling" },
      { icon: "💧", title: "Wet Room Installation", desc: "Professional waterproofing, linear drain, and plumbing for open wet room designs in Rhode Island homes.", href: "/bathroom-remodeling" },
      { icon: "🚽", title: "Toilet & Vanity Install", desc: "Toilet rough-in, ADA-compliant installations, vanity sink connections, and vessel sink hookups.", href: "/bathroom-remodeling" },
      { icon: "🧺", title: "Washing Machine Service", desc: "Washer installation, hookup, and relocation — including second-floor laundry room conversions.", href: "/bathroom-remodeling" },
    ],
  },
  {
    label: "Drainage Services",
    title: "Drain Cleaning & Sewer Services",
    href: "/drain-cleaning",
    cards: [
      { icon: "🔩", title: "Professional Drain Cleaning", desc: "Kitchen, bathroom, and floor drain cleaning with electric augers and hydro-jetting equipment.", href: "/drain-cleaning" },
      { icon: "💦", title: "Hydro-Jetting", desc: "High-pressure water jetting removes grease, scale, roots, and debris — the most thorough drain cleaning available.", href: "/drain-cleaning" },
      { icon: "📹", title: "CCTV Drain Survey", desc: "HD camera inspection of drain and sewer lines to diagnose blockages, cracks, root intrusion, and pipe condition.", href: "/drain-cleaning" },
      { icon: "🌿", title: "Root Intrusion Removal", desc: "Root cutting, clearing, and treatment for sewer lines with tree root intrusion throughout Providence RI.", href: "/drain-cleaning" },
      { icon: "🏚️", title: "Sewer Line Repair & Replacement", desc: "Cracked, collapsed, or root-damaged sewer lines repaired with traditional excavation or trenchless methods.", href: "/drain-cleaning" },
      { icon: "💧", title: "Sump & Ejector Pumps", desc: "Sump pump and sewage ejector pump installation, repair, and maintenance for basement water management.", href: "/drain-cleaning" },
    ],
  },
  {
    label: "Gas Services",
    title: "Gas Line Installation & Repair",
    href: "/gas-services",
    cards: [
      { icon: "🔧", title: "Gas Line Installation", desc: "New gas line runs for appliances, additions, and conversions — all work permitted and pressure tested.", href: "/gas-services" },
      { icon: "🛡️", title: "Gas Safety Certificates", desc: "Gas safety inspections and certificates for landlords and homeowners throughout Rhode Island.", href: "/gas-services" },
      { icon: "🔍", title: "Gas Leak Detection & Repair", desc: "Electronic gas leak detection and professional repair of all gas line leaks and fitting failures.", href: "/gas-services" },
      { icon: "⚡", title: "Generator Gas Lines", desc: "Dedicated gas line installation sized for whole-home standby generators, coordinated with National Grid.", href: "/gas-services" },
      { icon: "🔥", title: "Fire Pit & Fireplace Gas Lines", desc: "Outdoor and indoor gas line installation for fire pits, outdoor kitchens, gas inserts, and fireplaces.", href: "/gas-services" },
      { icon: "🍳", title: "Appliance Hookups", desc: "Gas range, dryer, and appliance connection by licensed master plumbers — with pressure test and leak check.", href: "/gas-services" },
    ],
  },
  {
    label: "Leak Detection",
    title: "Leak Detection & Water Quality Services",
    href: "/leak-detection",
    cards: [
      { icon: "🔍", title: "Hidden Leak Detection", desc: "Electronic acoustic detection and thermal imaging to locate leaks inside walls, floors, and underground.", href: "/leak-detection" },
      { icon: "🔧", title: "Pipe Leak Repair", desc: "Precise, minimal-demolition repair of all types of pipe leaks once accurately located.", href: "/leak-detection" },
      { icon: "💧", title: "Whole-House Water Filtration", desc: "Whole-home filtration system installation to improve water quality at every tap throughout your home.", href: "/leak-detection" },
      { icon: "🔬", title: "Reverse Osmosis Systems", desc: "Under-sink reverse osmosis filter installation for premium drinking water quality.", href: "/leak-detection" },
      { icon: "⛽", title: "Well Pump Service", desc: "Submersible well pump and pressure tank installation, repair, and replacement throughout Rhode Island.", href: "/leak-detection" },
    ],
  },
  {
    label: "Pipe Services",
    title: "Pipe Repair, Replacement & Repiping",
    href: "/pipe-repair",
    cards: [
      { icon: "🔧", title: "Pipe Leak Repair", desc: "Fast repair of leaking pipes with minimal demolition. Hidden leaks located before access is made.", href: "/pipe-repair" },
      { icon: "🏗️", title: "Whole-Home Repiping", desc: "Complete replacement of aging galvanized, lead, or polybutylene supply piping with modern PEX or copper.", href: "/pipe-repair" },
      { icon: "💧", title: "Water Line Service", desc: "Water service line repair and replacement from the meter to the house, including trenchless options.", href: "/pipe-repair" },
      { icon: "🌿", title: "Sewer Line Service", desc: "Sewer line repair and replacement using advanced trenchless technology to minimize property disruption.", href: "/pipe-repair" },
      { icon: "❄️", title: "Burst Pipe Repair", desc: "Fast response to burst pipes — water shut-off, damage assessment, and professional repair.", href: "/pipe-repair" },
      { icon: "🔄", title: "Copper to Flex Conversion", desc: "Conversion of copper systems to flexible PEX piping for improved durability and reduced leak risk.", href: "/pipe-repair" },
    ],
  },
  {
    label: "Commercial Services",
    title: "Commercial Plumbing & Heating",
    href: null,
    cards: [
      { icon: "🏢", title: "Commercial Drain & Sewer", desc: "High-capacity drain cleaning, hydro-jetting, grease trap service, and sewer work for Providence commercial properties." },
      { icon: "🍴", title: "Restaurant Plumbing", desc: "Grease trap installation and service, commercial kitchen drain systems, 3-bay sinks, and health code compliance plumbing." },
      { icon: "🏬", title: "Multi-Family & Condo Plumbing", desc: "Plumbing services for Providence's triple-deckers, apartment buildings, condos, and multi-family properties." },
      { icon: "🔨", title: "Commercial Boiler Service", desc: "Commercial boiler installation, repair, annual maintenance, and service contracts for businesses and buildings." },
      { icon: "📋", title: "Maintenance Contracts", desc: "Preventive maintenance agreements for commercial properties covering boilers, drains, water heaters, and full plumbing systems." },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Plumbing & Heating Services Providence RI"
        title="Complete Plumbing &amp; Heating Services<br/>Providence, Rhode Island"
        subtitle="Kwik Plumbing and Heating Inc. offers the full range of residential and commercial plumbing and heating services throughout Providence RI and all of Rhode Island — from drain cleaning and boiler service to gas lines, bathroom remodeling, and leak detection."
      />

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-20">
          {serviceCategories.map((g) => (
            <div key={g.label} id={g.label.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}>
              <div className="flex flex-wrap items-baseline gap-4 mb-1">
                <p className="text-brand-orange text-xs font-bold uppercase tracking-widest">{g.label}</p>
                {g.href && (
                  <Link href={g.href} className="text-xs text-brand-blue font-semibold hover:underline">
                    View full service page →
                  </Link>
                )}
              </div>
              <h2 className="text-2xl font-extrabold text-brand-dark mb-6">{g.title}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {g.cards.map((c) => (
                  <ServiceCard key={c.title} icon={c.icon} title={c.title} desc={c.desc} href={"href" in c ? c.href : undefined} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AREAS */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-brand-orange text-xs font-bold uppercase tracking-widest text-center mb-2">Service Area</p>
          <h2 className="text-2xl font-extrabold text-center mb-4">Serving Providence &amp; All of Rhode Island</h2>
          <p className="text-gray-500 text-center max-w-xl mx-auto mb-10">
            Providence RI's trusted plumbing and heating specialists — serving Providence and all of Rhode Island.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/locations/${area.slug}`}
                className="bg-white border-2 border-brand-light rounded-lg px-4 py-3 text-sm font-semibold text-brand-dark text-center hover:bg-brand-light hover:border-brand-blue transition-colors"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices currentHref="/services" />

      <CTASection
        heading="Need Any Plumbing or Heating Service in Rhode Island?<br/>Call Kwik Plumbing Today."
        subtext="Free estimates on all projects. Same-day appointments available for most services throughout Providence & all of Rhode Island. Licensed master plumbers."
      />
    </>
  );
}

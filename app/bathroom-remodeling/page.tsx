import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import AsideCard from "@/components/AsideCard";
import ReviewCard from "@/components/ReviewCard";
import CTASection from "@/components/CTASection";
import FAQList from "@/components/FAQList";

export const metadata: Metadata = {
  title: "Bathroom Remodeling Providence RI | Plumbing for Renovations",
  description:
    "Expert bathroom remodeling plumbing in Providence, Rhode Island. Shower installation, wet rooms, complete bathroom fitting, toilet installation, and vanity plumbing. Specialists in Providence's historic homes. Serving Federal Hill, East Side, College Hill, Fox Point & all of Providence RI. Licensed master plumbers. Call Kwik Plumbing (401) 639-1047.",
  keywords: [
    "bathroom remodeling Providence RI",
    "shower installation Providence Rhode Island",
    "bathroom renovation plumber Providence RI",
    "wet room installation Providence Rhode Island",
    "bathroom plumbing contractor Providence RI",
    "complete bathroom fitting Providence Rhode Island",
    "bathroom rough in plumber Providence RI",
    "vanity plumbing Providence Rhode Island",
    "bathroom remodel Federal Hill Providence",
    "shower installation East Side Providence RI",
    "licensed bathroom plumber Providence Rhode Island",
  ],
};

const remodelServices = [
  {
    icon: "🛁",
    title: "Complete Bathroom Fitting",
    desc: "Full bathroom plumbing from rough-in to finish — supply lines, drain connections, fixture installation, shower systems, and final trim. Coordinated with your contractor or general contractor.",
  },
  {
    icon: "🚿",
    title: "Shower Installation & Repair",
    desc: "Custom shower rough-in, shower pan installation, valve and trim installation, and showerhead systems. Electric and power shower installation also available.",
  },
  {
    icon: "🔨",
    title: "Bathroom Renovation Plumbing",
    desc: "Plumbing for existing bathroom renovations — moving fixtures, upgrading supply lines, replacing old galvanized or cast iron drain lines concealed during a renovation.",
  },
  {
    icon: "💧",
    title: "Wet Room Installation",
    desc: "Proper waterproofing, linear drain installation, and plumbing for open wet room designs. A properly installed wet room requires careful drain placement and waterproofing — we get it right.",
  },
  {
    icon: "🚽",
    title: "Toilet Installation & Repair",
    desc: "Toilet rough-in, replacement, and installation for standard, wall-hung, pressure-assisted, and ADA-compliant handicap toilets throughout Rhode Island.",
  },
  {
    icon: "🪠",
    title: "Vanity & Sink Plumbing",
    desc: "Single and double vanity plumbing, vessel sink installation, undermount sink connections, and faucet installation. All supply and drain connections properly fitted and leak-tested.",
  },
  {
    icon: "🧺",
    title: "Washing Machine Install & Relocation",
    desc: "Washer hookup, supply line installation, and standpipe drain connection. We also relocate washing machines to new spaces including second-floor laundry rooms.",
  },
  {
    icon: "🛿",
    title: "Soaking Tub & Freestanding Tub Plumbing",
    desc: "Floor-mounted filler connections, freestanding tub supply and drain rough-in, soaking tub installation. Proper support and access panel planning for a long-lasting installation.",
  },
];

const process = [
  { n: 1, title: "Design Consultation", desc: "We review your layout, discuss fixture placement, and identify any rough-in changes needed. Early plumber involvement prevents costly mid-renovation surprises." },
  { n: 2, title: "Rough-In Plumbing", desc: "Demo phase plumbing — moving drains, supply lines, and vent stacks to accommodate your new layout. Rough-in inspection with city inspector before walls close." },
  { n: 3, title: "Wall & Floor Work", desc: "Your contractor completes tile, walls, and flooring. We coordinate access for valve installation and any remaining rough-in connections." },
  { n: 4, title: "Finish Plumbing", desc: "Fixture setting, toilet installation, vanity connections, shower valve trim, and tub spout installation. All connections tested before your contractor installs final finishes." },
  { n: 5, title: "Final Inspection", desc: "All permitted work passes final inspection. We document completion for your contractor records and provide warranty on all plumbing labor." },
];

const faqs = [
  {
    q: "Do I need a plumbing permit for my bathroom remodel in Providence RI?",
    a: "Any work that moves or adds plumbing drain, supply, or vent lines requires a permit from the City of Providence (or applicable municipality) and a final inspection. Replacing fixtures in the same location generally does not require a permit. Kwik Plumbing handles all permit applications as part of renovation projects — we build it into the scope and timeline.",
  },
  {
    q: "How much does bathroom remodel plumbing cost in Rhode Island?",
    a: "Cost depends on the scope — how much the layout changes, fixture count, and what's discovered behind the walls. Call us at (401) 639-1047 for a free written estimate. We assess the project before quoting so there are no surprises mid-renovation.",
  },
  {
    q: "Can you move the toilet or shower drain to a completely different location?",
    a: "Yes, but it depends on your floor structure and the location of the main stack. Moving drains requires opening floors (or working from below in a basement or crawl space), cutting and rerouting drain lines with proper slope, and adding vent connections if required. We assess your existing plumbing layout and tell you exactly what's involved before any work starts.",
  },
  {
    q: "What is a wet room and how is it different from a regular shower?",
    a: "A wet room is an open, fully waterproofed bathroom space where the shower has no enclosure — the entire floor and walls are waterproofed and drain through a linear floor drain. Wet rooms require more careful waterproofing, a properly placed linear drain, and correct floor slope. Kwik Plumbing installs wet rooms with proper drain selection, waterproof membrane work, and correct slope — the most critical factors in a leak-free wet room.",
  },
  {
    q: "Do you work with general contractors and designers?",
    a: "Yes — we work alongside general contractors, kitchen and bath designers, and tile contractors on bathroom renovations throughout Rhode Island. We coordinate rough-in timelines with your contractor's schedule, attend site meetings when needed, and provide clear scope documentation. Good contractor coordination is what separates a smooth remodel from a stressful one.",
  },
];

const reviews = [
  {
    text: "Kwik handled all the plumbing on our master bath remodel — moved the shower, added a freestanding tub, and did a double vanity. They coordinated perfectly with our contractor, no delays, everything passed inspection. Beautiful result.",
    name: "Jennifer A.",
    location: "East Side, Providence RI",
  },
  {
    text: "We had Kwik install a wet room in our 1920s Federal Hill house. They figured out the drain placement, did the waterproofing properly, and it's been perfect for two years with not a single leak. Highly recommend.",
    name: "Marco D.",
    location: "Federal Hill, Providence RI",
  },
  {
    text: "Full bathroom gut and remodel on our Providence home. Kwik pulled the permits, moved the toilet and shower locations, and came back to set fixtures when we were ready. Very professional and great communication throughout.",
    name: "Donna P.",
    location: "Silver Lake, Providence RI",
  },
];

export default function BathroomRemodelingPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Bathroom Remodeling Providence RI"
        title="Bathroom Remodeling<br/>Providence, Rhode Island"
        subtitle="From complete bathroom fittings to wet room installations and fixture upgrades — Kwik Plumbing's licensed master plumbers handle all the plumbing for your Rhode Island bathroom renovation, from rough-in to finish."
      />

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_360px] gap-12 items-start">
          <div className="prose-content">
            <p className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-2">Bathroom Remodel Plumbing — RI</p>
            <h2>Complete Bathroom Plumbing for Providence Renovations</h2>
            <p>
              A bathroom remodel is one of the highest-return home improvements you can make — and the plumbing is the backbone that determines whether that investment holds up for decades. Kwik Plumbing and Heating provides complete bathroom plumbing for renovations throughout Providence, Cranston, Warwick, and all of Rhode Island, from initial rough-in planning through final fixture setting.
            </p>
            <p>
              We work with homeowners doing DIY renovations, alongside general contractors managing full project builds, and with kitchen and bath designers bringing higher-end projects to life. Our team is experienced with the specific challenges of Rhode Island&apos;s older housing stock — cast iron drain stacks, galvanized supply lines, and the tight spaces of historic Providence homes demand a plumber who has navigated these situations before.
            </p>

            <h2>Bathroom Remodeling Services We Offer</h2>
            <div className="grid sm:grid-cols-2 gap-5 my-6 not-prose">
              {remodelServices.map((s) => (
                <div key={s.title} className="bg-white rounded-xl p-6 shadow-card border-t-4 border-brand-blue">
                  <div className="text-3xl mb-2">{s.icon}</div>
                  <h3 className="font-bold text-brand-dark text-base mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>

            <h2>Our Bathroom Remodel Process</h2>
            <p>
              Proper sequencing of plumbing work within a bathroom renovation is critical. Rough-in plumbing must be inspected before walls close. Fixture connections must be leak-tested before tile goes down. Our team coordinates precisely with your renovation timeline to avoid costly rework.
            </p>
            <ol className="not-prose space-y-4 my-6">
              {process.map((step) => (
                <li key={step.n} className="flex gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center font-extrabold text-sm shrink-0">
                    {step.n}
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark text-sm mb-1">{step.title}</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            <h2>Bathroom Remodeling in Providence&apos;s Historic Homes</h2>
            <p>
              Providence&apos;s historic housing stock presents unique challenges for bathroom renovations. Original cast iron drain stacks require careful cutting and connection techniques. Galvanized supply pipes discovered during demo often need replacement rather than connection. Low floor joists in 1900s construction limit drain routing options.
            </p>
            <p>
              Kwik Plumbing has worked in hundreds of Providence&apos;s older homes and approaches every historic renovation with the investigative mindset it deserves. We assess what&apos;s behind the walls before finalizing your fixture layout, so surprises become scheduled decisions rather than mid-project crises.
            </p>

            <div className="bg-brand-light border-l-4 border-brand-blue rounded-r-lg p-5 my-6">
              <p className="text-sm text-brand-dark m-0">
                <strong>Planning a bathroom remodel?</strong> Involve your plumber early — ideally before finalizing fixture layouts. Moving a toilet 12 inches might seem simple on a drawing but require significant drain work in reality. Early plumber input can save significant money and design headaches.
              </p>
            </div>
          </div>

          <AsideCard
            heading="🛁 Bathroom Remodeling — RI"
            bullets={[
              "🔨 Rough-in to finish plumbing",
              "🏠 Historic home specialists",
              "🚿 Shower & wet room experts",
              "📋 Permits handled",
              "🤝 Works with your contractor",
              "💰 Free written estimates",
              "🛡️ 1-year labor warranty",
            ]}
            ctaLabel="Get a Free Remodel Estimate"
          />
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-extrabold text-center mb-10">Bathroom Remodel Reviews from Rhode Island Customers</h2>
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
          <h2 className="text-2xl font-extrabold text-center mb-10">Bathroom Remodel FAQ — Rhode Island</h2>
          <FAQList items={faqs} />
        </div>
      </section>

      <CTASection
        heading="Planning a Bathroom Remodel in Providence RI?<br/>Start with Kwik Plumbing."
        subtext="Licensed master plumbers for bathroom renovations throughout Providence, Cranston, Warwick & all of Rhode Island. All permits handled. Free written estimates."
      />
    </>
  );
}

import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import AsideCard from "@/components/AsideCard";
import ReviewCard from "@/components/ReviewCard";
import CTASection from "@/components/CTASection";
import RelatedServices from "@/components/RelatedServices";
import FAQList from "@/components/FAQList";

export const metadata: Metadata = {
  title: "Pipe Repair & Replacement Providence RI | Repiping Specialists",
  description:
    "Expert pipe repair and replacement in Providence, Rhode Island. Leaking pipes, burst pipes, whole-home repiping, lead pipe replacement, and frozen pipe repair. Licensed master plumbers. Call Kwik Plumbing (401) 639-1047.",
  keywords: [
    "pipe repair Providence RI",
    "pipe replacement Providence Rhode Island",
    "burst pipe repair Providence",
    "repiping Providence RI",
    "leaking pipe Providence",
    "whole home repiping Providence Rhode Island",
    "lead pipe replacement Providence RI",
    "frozen pipe repair Providence RI",
    "galvanized pipe replacement Providence",
    "licensed plumber pipe repair Providence Rhode Island",
  ],
};

const warnings = [
  "Visible water stains on ceilings, walls, or floors",
  "Unexplained increase in your Providence Water utility bill",
  "Reduced water pressure at fixtures throughout the home",
  "Discolored water — yellow, brown, or rust-colored coming from taps",
  "Wet spots in the yard with no rain — possible underground pipe leak",
  "Musty or mold smells in walls or under floors",
  "Sound of running water when all fixtures are off",
  "Water meter continuing to move when all fixtures are off",
];

const repipesSigns = [
  "Consistently low water pressure throughout the home despite no other issues",
  "Chronically discolored or rust-colored tap water",
  "Frequent leaks in multiple locations — \"playing whack-a-mole\" with repairs",
  "Home is more than 50 years old and still has original pipe systems",
  "Lead service lines (a public health concern — RI has active programs to address these)",
  "Polybutylene pipe (gray plastic) — prone to sudden catastrophic failure",
];

const repipeProcess = [
  "Initial assessment and written scope of work with detailed pricing",
  "Pull all necessary City of Providence permits",
  "Systematic replacement of all supply lines with modern copper or PEX",
  "Minimal wall openings — strategic access points to run new pipe",
  "Professional drywall patching and paint prep after pipe work",
  "Final inspection by Providence city inspector — all work to current code",
  "Full water pressure test and documentation before completion",
];

const faqs = [
  { q: "How much does pipe repair cost in Providence RI?", a: "Cost varies depending on location, access, and the extent of the repair needed. Call us at (401) 639-1047 — we'll assess the situation and provide a free, detailed written estimate before any work begins. No surprises." },
  { q: "How do I find a hidden pipe leak in my Providence home?", a: "Signs of a hidden leak include unexplained water stains, musty smells, reduced water pressure, and a water meter that continues to move when all fixtures are off. Our plumbers use professional acoustic leak detection equipment that can locate leaks within walls or under slabs without exploratory demolition." },
  { q: "What's the best pipe material for repiping a Providence home?", a: "For Providence homes, we typically recommend PEX-A piping for whole-home repiping. It's flexible, freeze-resistant (important in Rhode Island winters), durable, and requires fewer connections than rigid copper — meaning fewer potential leak points and less wall demolition during installation." },
  { q: "Does pipe repair in Providence require a permit?", a: "Minor repairs typically do not require a permit. Significant pipe work including whole-home repiping, new supply line runs, and service line replacement does require a City of Providence permit and inspection. Kwik Plumbing handles all permitting for projects that require it — included in our quoted price." },
];

const reviews = [
  { text: "Had a mysterious water stain appearing on our first floor ceiling. Kwik used their leak detection equipment, found a pinhole in a copper elbow inside the wall, made a small access, repaired it, and patched the wall. No ripping out an entire section of ceiling. Brilliant.", name: "Stephen A.", location: "College Hill, Providence RI" },
  { text: "Our 1920s Federal Hill house needed a full repipe — original galvanized that was basically closed shut with scale. Kwik gave us a fair written quote, completed the whole repipe in three days with minimal mess, and passed city inspection first try.", name: "Rosa G.", location: "Federal Hill, Providence RI" },
  { text: "Frozen pipe burst in our unfinished garage at 6 AM in January. Kwik was there in under an hour, stopped the water, repaired the burst section, and wrapped the exposed pipes in insulation before they left. Fast, professional, and reasonably priced.", name: "David C.", location: "North Providence RI" },
];

export default function PipeRepairPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Pipe Repair Providence RI"
        title="Pipe Repair &amp; Replacement<br/>Providence, Rhode Island"
        subtitle="Leaking pipes, burst pipes, corroded lines, and whole-home repiping — Kwik Plumbing's licensed plumbers in Providence RI handle every type of pipe repair, including the unique challenges of the city's historic housing stock."
      />

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_360px] gap-12 items-start">
          <div className="prose-content">
            <p className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-2">Providence RI Pipe Repair Services</p>
            <h2>Expert Pipe Repair for Providence Homes &amp; Businesses</h2>
            <p>
              In Providence, Rhode Island — a city with substantial older housing stock — pipe issues are particularly common. Many Providence properties still have original galvanized steel pipes from the 1940s and 50s, lead service lines, aging cast-iron drain lines, and copper pipes that have experienced decades of New England&apos;s hard winters.
            </p>

            <h2>Warning Signs of Pipe Problems in Your Providence Home</h2>
            <ul>
              {warnings.map((w) => <li key={w}>{w}</li>)}
            </ul>

            <div className="bg-yellow-50 border-l-4 border-brand-orange rounded-r-lg p-5 my-6">
              <p className="text-sm text-yellow-900 m-0">
                <strong>Don&apos;t delay on suspected pipe leaks.</strong> A slow leak inside a wall of your Providence home can cause mold growth within 24–48 hours and structural damage within weeks. Call Kwik Plumbing at the first sign of a problem.
              </p>
            </div>

            <h2>Pipe Repair Services in Providence, RI</h2>

            <h3>Burst Pipe Repair</h3>
            <p>Burst pipes are among the most damaging plumbing situations a Providence homeowner can face. During cold Rhode Island winters, pipes in uninsulated spaces — attics, crawl spaces, exterior walls, garages — are especially vulnerable. Our licensed plumbers respond quickly to burst pipe calls throughout Providence.</p>

            <h3>Leak Detection &amp; Repair</h3>
            <p>Not all pipe leaks are visible. Kwik Plumbing uses professional acoustic leak detection equipment to locate hidden leaks within walls, under slabs, and underground — without unnecessary demolition. Once located, we perform minimal-access repairs to fix the leak and patch the surface professionally.</p>

            <h3>Corroded Pipe Repair &amp; Replacement</h3>
            <p>Providence&apos;s older homes often have galvanized steel supply pipes that corrode from the inside over decades, reducing flow and water quality. We assess the extent of corrosion and can replace corroded sections or entire pipe runs with modern copper or PEX piping.</p>

            <h3>Frozen Pipe Thawing &amp; Repair</h3>
            <p>Rhode Island winters regularly bring temperatures cold enough to freeze pipes in unprotected areas. Kwik Plumbing safely thaws frozen pipes and repairs any that have split or burst. We can also assess and insulate vulnerable pipe runs to prevent future freezing.</p>

            <h2>Whole-Home Repiping in Providence RI</h2>
            <p>
              If your Providence home has extensive galvanized steel, lead, or polybutylene piping, a whole-home repipe may be the most cost-effective long-term solution. Repeated patching of an aging pipe system is expensive and doesn&apos;t address the underlying deterioration.
            </p>

            <h3>Signs Your Providence Home May Need Repiping</h3>
            <ul>
              {repipesSigns.map((s) => <li key={s}>{s}</li>)}
            </ul>

            <h3>Our Repiping Process</h3>
            <ul>
              {repipeProcess.map((s) => <li key={s}>{s}</li>)}
            </ul>

            <h2>Lead Pipe Replacement in Providence RI</h2>
            <p>
              Providence, like many older New England cities, has properties with lead service lines connecting to the municipal water supply. Kwik Plumbing works with Providence Water and homeowners to replace private-side lead service lines. Contact us to learn about available assistance for lead line replacement in Providence.
            </p>
          </div>

          <AsideCard
            heading="🔧 Pipe Repair — Providence RI"
            bullets={[
              "⚡ Fast response to burst pipes",
              "🔍 Leak detection equipment",
              "🏠 Historic home specialists",
              "💧 Copper, PEX & PVC work",
              "🏗️ Whole-home repiping",
              "📋 RI permits handled",
              "💰 Upfront written quotes",
            ]}
            ctaLabel="Get a Free Estimate"
          />
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-extrabold text-center mb-10">Pipe Repair Reviews from Providence Customers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r) => <ReviewCard key={r.name} {...r} />)}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-extrabold text-center mb-10">Pipe Repair FAQ — Providence RI</h2>
          <FAQList items={faqs} />
        </div>
      </section>

      <RelatedServices currentHref="/pipe-repair" />

      <CTASection
        heading="Leaking or Damaged Pipes in Providence?<br/>Get Expert Help Today."
        subtext="Don't let a pipe problem turn into major water damage. Kwik Plumbing's licensed Providence plumbers are ready to diagnose and fix your pipe issues right — the first time."
      />
    </>
  );
}

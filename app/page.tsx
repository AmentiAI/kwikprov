import Link from "next/link";
import Image from "next/image";
import ServiceCard from "@/components/ServiceCard";
import ReviewCard from "@/components/ReviewCard";
import CTASection from "@/components/CTASection";
import RelatedServices from "@/components/RelatedServices";
import FAQList from "@/components/FAQList";
import JsonLd from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/schema";
import { SITE, AREAS } from "@/lib/constants";

const stats = [
  { num: "15+",    label: "Years Serving Rhode Island" },
  { num: "5,000+", label: "Jobs Completed" },
  { num: "5.0★",   label: "Customer Rating" },
  { num: "100%",   label: "Satisfaction Promise" },
];

const trust = [
  { icon: "✅", label: "Licensed Master Plumbers" },
  { icon: "🔥", label: "Navien Certified Specialist" },
  { icon: "💰", label: "100% Satisfaction Promise" },
  { icon: "🛡️", label: "1-Year Warranty on Most Work" },
  { icon: "🤝", label: "Family-Owned — 3 Generations" },
];

const services = [
  { icon: "🔥", title: "Boiler Installation & Repair", desc: "Authorized Navien specialists. We install, repair, and maintain all boiler brands — including conversions from oil to gas — throughout Rhode Island.", href: "/services" },
  { icon: "🌡️", title: "Water Heater & Tankless Systems", desc: "No hot water? We repair and replace all brands including tankless on-demand systems. Navien certified with same-day availability across RI.", href: "/water-heater" },
  { icon: "🔩", title: "Drain Cleaning & CCTV Survey", desc: "Slow drains and stubborn clogs cleared with professional hydro-jetting. CCTV camera surveys for precise sewer line diagnostics.", href: "/drain-cleaning" },
  { icon: "🔧", title: "Pipe Repair & Replacement", desc: "Leaking, corroded, or frozen pipes repaired quickly. Full repiping services using copper, PVC, and PEX throughout Rhode Island.", href: "/pipe-repair" },
  { icon: "🚿", title: "Bathroom Remodeling", desc: "Complete bathroom renovations from rough-in to finish. Shower, tub, and vanity installations done right — with a 1-year workmanship warranty.", href: "/services" },
  { icon: "🔥", title: "Gas Line Services", desc: "Gas line installation, safety certificate inspections, and leak detection by our certified gas-safe plumbers throughout Providence and all of RI.", href: "/services" },
  { icon: "🏢", title: "Commercial Plumbing", desc: "Serving restaurants, offices, and multi-unit buildings across Rhode Island. Grease traps, commercial drain cleaning, and code compliance work.", href: "/services" },
];

const whys = [
  { icon: "🎓", title: "Licensed Master Plumbers", desc: "Every technician holds current Rhode Island master plumber credentials and undergoes continuous training on the latest techniques and code requirements." },
  { icon: "🔥", title: "Navien Certified Specialists", desc: "We are authorized Navien specialists — meaning we're factory-trained to install and service Navien tankless water heaters and boilers to the highest standard." },
  { icon: "🛡️", title: "1-Year Warranty on Most Work", desc: "We back our workmanship with a one-year warranty on most jobs. If something isn't right after we leave, we come back and fix it — at no additional cost." },
  { icon: "🌿", title: "Eco-Friendly Options", desc: "We specialize in energy-efficient solutions including Navien tankless systems, high-efficiency boilers, and water-saving fixtures that cut your utility bills." },
  { icon: "🤝", title: "Family-Owned, Three Generations", desc: "Kwik Plumbing is a family business with three generations of plumbing expertise behind every job. We treat your home the way we'd treat our own." },
];

const steps = [
  { n: 1, title: "Call or Book Online", desc: `Call us at ${SITE.phone} or submit a service request online. We schedule you at the earliest available time — often same day throughout Rhode Island.` },
  { n: 2, title: "We Arrive On Time — Guaranteed", desc: "Your plumber arrives in the promised window. Our vans are fully stocked to solve most issues in a single visit — no unnecessary return trips." },
  { n: 3, title: "Diagnosis & Upfront Quote", desc: "We thoroughly diagnose the issue and provide a clear, written quote before any work begins. No work starts until you approve the price." },
  { n: 4, title: "Expert Repair or Installation", desc: "Our RI-licensed master plumbers complete the work to code using quality parts. We protect your home throughout and clean up completely when done." },
  { n: 5, title: "1-Year Warranty & Follow-Up", desc: "All work comes with our written 1-year warranty on most jobs. We follow up to make sure you're 100% satisfied with the result." },
];

const reviews = [
  { text: "Had a burst pipe in our Federal Hill home. Kwik Plumbing answered immediately, arrived fast, and had it fixed the same day. Professional, calm, and fairly priced. Incredible service — my go-to plumber in Providence.", name: "Maria C.", location: "Federal Hill, Providence RI" },
  { text: "Kwik installed a Navien tankless water heater in our East Side Victorian. They knew exactly how to work with the older plumbing, handled all the venting and gas upgrades, and the whole job was done in a day. Couldn't be happier.", name: "James T.", location: "East Side, Providence RI" },
  { text: "Called Kwik for a boiler that stopped working mid-January. They came out same day, diagnosed the issue, and had us with heat again the same afternoon. Real professionals — licensed, clean, and honest. Worth every penny.", name: "Sandra L.", location: "Smith Hill, Providence RI" },
  { text: "Complete bathroom remodel plumbing done by Kwik — showed up every day on schedule, coordinated perfectly with my contractor, and passed inspection first try. The 1-year warranty gave me real peace of mind.", name: "Robert M.", location: "Mount Pleasant, Providence RI" },
  { text: "Our restaurant had a clogged drain on a Friday before dinner service. Kwik was there in under an hour, ran a CCTV survey, and cleared a grease blockage so we could open on time. They've been our commercial plumber ever since.", name: "Tony B.", location: "Downtown Providence RI" },
  { text: "Used Kwik three times now — a gas line inspection, a water heater replacement, and a bathroom rough-in. Always honest pricing, always clean work, always on time. The best plumber in Rhode Island, full stop.", name: "Diane H.", location: "East Providence, RI" },
];

const faqs = [
  {
    q: "How quickly can you respond to a plumbing call in Providence or Rhode Island?",
    a: "We serve Providence and all of Rhode Island Monday–Friday 7 AM–6 PM and Saturday 8 AM–4 PM. Call us at (401) 639-1047 and our team will schedule your service as quickly as possible.",
  },
  {
    q: "Do you handle both plumbing AND heating services?",
    a: "Yes — Kwik Plumbing and Heating Inc. is a full-service plumbing and heating company. We handle everything from burst pipes and drain cleaning to boiler installation, gas line services, and Navien tankless water heater installation. We are authorized Navien specialists and gas-safe certified.",
  },
  {
    q: "Are your plumbers licensed in Rhode Island?",
    a: "Absolutely. We are licensed master plumbers in Rhode Island, gas-safe certified, and authorized Navien specialists. Every technician on our team is fully credentialed and insured, protecting you and your property throughout every job.",
  },
  {
    q: "What warranty do you offer on your work?",
    a: "Kwik Plumbing and Heating offers a 1-year warranty on most workmanship. If something isn't right after we complete a job, we come back and make it right at no additional charge. We also use quality parts that carry their own manufacturer warranties.",
  },
  {
    q: "Do you work on older homes in Providence with aging plumbing?",
    a: "Yes — and we specialize in it. Providence has a large stock of older Victorian and Colonial-era homes with galvanized steel, cast iron, and clay pipe systems. Our team is experienced with all older pipe materials and the unique challenges of Rhode Island's historic housing stock.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqPageSchema("/", faqs)} />
      {/* HERO */}
      <section className="bg-gray-950 text-white py-20 px-4 text-center relative overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="/bathroom.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/70 via-gray-950/60 to-gray-950/80" />
        {/* Orange accent stripe at top */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-brand-orange z-10" />
        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Logo — prominent, centered */}
          <div className="flex flex-col items-center mb-8">
            <Image
              src="/kwiklogo.avif"
              alt="Kwik Plumbing and Heating"
              width={160}
              height={160}
              className="rounded-full shadow-2xl shadow-black/40 mb-5"
              priority
            />
            <span className="bg-brand-orange text-white text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
              ⭐ Rhode Island&apos;s #1 Rated Plumber
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-5 drop-shadow-lg">
            Providence RI&apos;s Most Trusted{" "}
            <span className="text-brand-orange block md:inline">Plumbing &amp; Heating</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10">
            Licensed master plumbers. Boilers, gas lines, drain cleaning, water heaters &amp; more — serving all of Rhode Island for {SITE.yearsServing} years.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={SITE.phoneHref}
              className="px-10 py-5 bg-brand-orange text-white rounded-full font-black text-xl hover:-translate-y-1 hover:shadow-2xl transition-all shadow-lg hover:bg-orange-600"
            >
              📞 {SITE.phone}
            </a>
            <Link
              href="/contact"
              className="px-10 py-5 bg-white/10 text-white border-2 border-white/40 rounded-full font-bold text-xl hover:-translate-y-1 hover:shadow-2xl transition-all hover:bg-white/20"
            >
              View Contact Info
            </Link>
          </div>
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-10 mt-16 pt-10 border-t border-white/10">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl font-black text-brand-orange">{s.num}</div>
                <div className="text-sm uppercase tracking-wider text-gray-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="bg-gray-900 text-white py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6">
          {trust.map((t) => (
            <div key={t.label} className="flex items-center gap-2 text-sm">
              <span>{t.icon}</span>
              <span>{t.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-brand-orange text-xs font-bold uppercase tracking-widest text-center mb-2">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-3">
            Complete Plumbing &amp; Heating Services{" "}
            <span className="block">Throughout Rhode Island</span>
          </h2>
          <p className="text-gray-500 text-center max-w-xl mx-auto mb-12">
            From routine repairs to full boiler installations and bathroom remodels — Kwik Plumbing and Heating handles every job for homeowners and businesses across Providence RI and all of Rhode Island.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-brand-dark text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-brand-orange text-xs font-bold uppercase tracking-widest text-center mb-2">Why Kwik Plumbing</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-3">Rhode Island Trusts Kwik Plumbing &amp; Heating — Here&apos;s Why</h2>
          <p className="text-white/80 text-center max-w-xl mx-auto mb-12">For {SITE.yearsServing} years, homeowners and businesses across Providence and surrounding areas have trusted Kwik Plumbing for fast response, master-level craftsmanship, and honest pricing.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whys.map((w) => (
              <div key={w.title} className="bg-white/8 border border-white/15 rounded-xl p-7">
                <span className="text-3xl block mb-3">{w.icon}</span>
                <h3 className="font-bold mb-2">{w.title}</h3>
                <p className="text-sm opacity-80 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_380px] gap-12 items-start">
          <div>
            <p className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-2">About Kwik Plumbing and Heating</p>
            <h2 className="text-3xl font-extrabold text-brand-dark mb-4">Rhode Island&apos;s #1 Trusted Plumbing &amp; Heating Company</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Kwik Plumbing and Heating Inc. is a family-owned plumbing and heating company with three generations of expertise behind every job. We&apos;ve been serving Providence, East Providence and surrounding areas for over {SITE.yearsServing} years — completing more than {SITE.jobsCount} jobs with a 100% satisfaction promise on every one.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We are authorized Navien specialists, licensed master plumbers, and gas-safe certified technicians. Whether it&apos;s a burst pipe at 2 AM in Federal Hill, a boiler conversion on the East Side, or a complete bathroom remodel in Pawtucket — our team brings the same professionalism, quality parts, and 1-year workmanship warranty to every single job.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {["Licensed Master Plumbers", "Navien Certified", "Gas Safe Certified", "1-Year Warranty", "Family Owned"].map((b) => (
                <span key={b} className="bg-brand-light text-brand-dark text-xs font-bold uppercase px-3 py-1 rounded-full tracking-wide">{b}</span>
              ))}
            </div>
          </div>
          <div className="bg-brand-dark text-white rounded-2xl p-8 shadow-card-lg lg:sticky lg:top-24">
            <h3 className="font-extrabold text-lg mb-4">Need a Plumber in Rhode Island?</h3>
            <a href={SITE.phoneHref} className="block text-2xl font-black text-brand-orange mb-6 hover:underline">{SITE.phone}</a>
            <ul className="space-y-3 text-sm mb-6">
              {[
                "🕐 Mon–Fri 7 AM–6 PM, Sat 8 AM–4 PM",
                "⚡ Same-day service available",
                "💵 Free estimates on all projects",
                "🔥 Navien certified specialist",
                "🛡️ 1-year warranty on most work",
                `📍 Proudly serving Providence, RI`,
                "✅ Licensed master plumbers & gas safe certified",
              ].map((b) => (
                <li key={b} className="border-b border-white/10 pb-3 last:border-0">{b}</li>
              ))}
            </ul>
            <Link href="/contact" className="flex justify-center w-full py-3 bg-white/10 text-white border border-white/30 rounded-full font-bold text-sm hover:bg-white/20 transition-colors">
              View Contact Info
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-brand-orange text-xs font-bold uppercase tracking-widest text-center mb-2">Our Process</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">How Kwik Plumbing Works</h2>
          <p className="text-gray-500 text-center max-w-xl mx-auto mb-12">
            Getting plumbing service in Providence has never been easier.
          </p>
          <div className="max-w-2xl mx-auto space-y-4">
            {steps.map((s) => (
              <div key={s.n} className="flex gap-5 items-start bg-white p-6 rounded-xl shadow-sm">
                <div className="w-11 h-11 shrink-0 bg-brand-blue text-white rounded-full flex items-center justify-center font-black text-lg">
                  {s.n}
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark mb-1">{s.title}</h3>
                  <p className="text-sm text-gray-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-brand-orange text-xs font-bold uppercase tracking-widest text-center mb-2">Real Providence Customers</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
            What Providence Homeowners Say About Kwik Plumbing
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <ReviewCard key={r.name} {...r} />
            ))}
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-brand-orange text-xs font-bold uppercase tracking-widest text-center mb-2">Service Area</p>
          <h2 className="text-3xl font-extrabold text-center mb-4">Providence Neighborhoods &amp; Communities We Serve</h2>
          <p className="text-gray-500 text-center max-w-xl mx-auto mb-10">
            Kwik Plumbing serves all of Providence RI and surrounding communities. No matter where you are, we can get a licensed plumber to you fast.
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

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-brand-orange text-xs font-bold uppercase tracking-widest text-center mb-2">FAQ</p>
          <h2 className="text-3xl font-extrabold text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-500 text-center max-w-xl mx-auto mb-12">
            Common questions from Providence RI homeowners about our plumbing services.
          </p>
          <FAQList items={faqs} />
        </div>
      </section>

      <RelatedServices currentHref="/" heading="Explore Kwik Plumbing Pages" />

      <CTASection
        heading="Rhode Island&apos;s #1 Trusted Plumbing &amp; Heating Company"
        subtext="Call Kwik Plumbing and Heating Inc. now for a free estimate. Serving Providence & all of Rhode Island."
      />
    </>
  );
}

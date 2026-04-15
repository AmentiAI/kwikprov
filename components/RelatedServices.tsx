import Link from "next/link";

const ALL_LINKS = [
  { href: "/boiler-services",      title: "Boiler Services",          icon: "🔥", desc: "Installation, repair & maintenance — Navien certified." },
  { href: "/water-heater",         title: "Water Heater Services",    icon: "🌡️", desc: "Tank & tankless repair and replacement — same-day service." },
  { href: "/drain-cleaning",       title: "Drain Cleaning",            icon: "🔩", desc: "Hydro-jetting, CCTV surveys & blocked drain clearing." },
  { href: "/pipe-repair",          title: "Pipe Repair & Repiping",   icon: "🔧", desc: "Leaking, burst & corroded pipes — full repipes too." },
  { href: "/gas-services",         title: "Gas Line Services",         icon: "🔥", desc: "Licensed gas-safe installation, repair & leak detection." },
  { href: "/leak-detection",       title: "Leak Detection",            icon: "💧", desc: "Non-invasive electronic & thermal leak detection." },
  { href: "/bathroom-remodeling",  title: "Bathroom Remodeling",       icon: "🚿", desc: "Rough-in to finish — showers, wet rooms, full remodels." },
  { href: "/services",             title: "All Services",              icon: "🛠️", desc: "See every plumbing & heating service we offer." },
  { href: "/about",                title: "About Kwik Plumbing",       icon: "🤝", desc: "Family-owned, 3 generations — meet the team." },
  { href: "/contact",              title: "Contact Us",                icon: "📞", desc: "Call, email or book a free written estimate." },
];

interface RelatedServicesProps {
  currentHref?: string;
  heading?: string;
}

export default function RelatedServices({ currentHref, heading = "Explore More Kwik Plumbing Services" }: RelatedServicesProps) {
  const links = ALL_LINKS.filter((l) => l.href !== currentHref);
  return (
    <section className="bg-gray-50 py-16 px-4 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <p className="text-brand-orange text-xs font-bold uppercase tracking-widest text-center mb-2">Related Pages</p>
        <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-10 text-brand-dark">{heading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-orange hover:-translate-y-0.5 transition-all shadow-sm hover:shadow-md"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl" aria-hidden>{l.icon}</span>
                <div>
                  <h3 className="font-bold text-brand-dark mb-1">{l.title}</h3>
                  <p className="text-sm text-gray-600 leading-snug">{l.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

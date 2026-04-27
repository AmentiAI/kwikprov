import Link from "next/link";
import Image from "next/image";
import { SITE, HOURS, AREAS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-slate-400 pt-14 pb-6 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/10">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-3 mb-4">
            <Image src="/kwiklogo.avif" alt="Kwik Plumbing Logo" width={52} height={52} className="rounded-full shrink-0 border-2 border-brand-red" />
            <div>
              <p className="text-white font-extrabold text-base leading-tight">Kwik Plumbing <br /> and Heating Inc.</p>
              <p className="text-slate-400 text-xs mt-0.5">{SITE.slogan}</p>
            </div>
          </Link>
          <p className="text-sm leading-relaxed">
            Providence RI&apos;s trusted plumbing &amp; heating company. Licensed master plumbers serving Providence and surrounding areas for {SITE.yearsServing} years.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Licensed Master Plumbers", "Navien Specialist", "Gas Safe Certified"].map((b) => (
              <span key={b} className="bg-white/10 text-slate-300 text-xs font-bold uppercase px-3 py-1 rounded-full tracking-wide">
                {b}
              </span>
            ))}
          </div>
          <div className="flex gap-4 mt-4">
            <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-orange transition-colors text-sm">
              📘 Facebook
            </a>
            <a href={SITE.youtube} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-orange transition-colors text-sm">
              ▶️ YouTube
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm">
            {[
              ["Boiler Services",        "/boiler-services"],
              ["Gas Line Services",      "/gas-services"],
              ["Drain Cleaning",         "/drain-cleaning"],
              ["Bathroom Remodeling",    "/bathroom-remodeling"],
              ["Water Heater Services",  "/water-heater"],
              ["Leak Detection",         "/leak-detection"],
              ["Pipe Repair & Repiping", "/pipe-repair"],
              ["All Services",           "/services"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="hover:text-brand-orange transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Areas */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-4">Service Areas</h4>
          <ul className="grid grid-cols-2 gap-x-3 gap-y-2 text-sm">
            {AREAS.map((area) => (
              <li key={area.slug}>
                <Link
                  href={`/locations/${area.slug}`}
                  className="hover:text-brand-orange transition-colors"
                >
                  {area.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-4">Contact Us</h4>
          <address className="not-italic text-sm leading-loose">
            <strong className="text-white">Kwik Plumbing and Heating Inc.</strong><br />
            {SITE.address}<br />
            {SITE.city}, {SITE.state} {SITE.zip}<br /><br />
            <strong className="text-white">Phone:</strong>{" "}
            <a href={SITE.phoneHref} className="hover:text-brand-orange transition-colors">{SITE.phone}</a><br />
            <strong className="text-white">Email:</strong>{" "}
            <a href={`mailto:${SITE.email}`} className="hover:text-brand-orange transition-colors text-xs">{SITE.email}</a><br /><br />
            <strong className="text-white">Hours:</strong><br />
            {HOURS.weekdays}<br />
            {HOURS.saturday}<br />
            {HOURS.sunday}
          </address>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-5 flex flex-wrap justify-between items-center gap-3 text-xs text-slate-500">
        <span>&copy; {new Date().getFullYear()} Kwik Plumbing and Heating Inc. All rights reserved. | Johnston, RI 02919</span>
        <span className="flex gap-4">
          <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
          <a href="/sitemap.xml" className="hover:text-slate-300 transition-colors">Sitemap</a>
        </span>
      </div>
    </footer>
  );
}

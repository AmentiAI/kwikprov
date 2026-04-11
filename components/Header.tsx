"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS, SERVICE_LINKS, SITE } from "@/lib/constants";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const topLinks = NAV_LINKS.filter((l) => !["Boiler Services","Gas Services","Drain Cleaning","Water Heaters","Pipe Repair"].includes(l.label));

  return (
    <header className="bg-white border-b-[3px] border-brand-blue sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 no-underline shrink-0">
          <div className="w-11 h-11 bg-brand-blue rounded-full flex items-center justify-center text-xl shrink-0">
            🔧
          </div>
          <div className="hidden sm:block">
            <p className="text-brand-dark font-extrabold text-base leading-tight">{SITE.name}</p>
            <p className="text-gray-500 text-xs uppercase tracking-wide">{SITE.tagline}</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          <Link
            href="/"
            className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${pathname === "/" ? "bg-brand-light text-brand-blue" : "text-gray-700 hover:bg-brand-light hover:text-brand-blue"}`}
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <Link
              href="/services"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1 ${pathname === "/services" ? "bg-brand-light text-brand-blue" : "text-gray-700 hover:bg-brand-light hover:text-brand-blue"}`}
            >
              Services <span className="text-xs opacity-60">▾</span>
            </Link>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                {SERVICE_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-brand-light hover:text-brand-blue transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {[
            { label: "Boiler Services", href: "/boiler-services" },
            { label: "Gas Services",    href: "/gas-services" },
            { label: "Drain Cleaning",  href: "/drain-cleaning" },
            { label: "About",           href: "/about" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${pathname === link.href ? "bg-brand-light text-brand-blue" : "text-gray-700 hover:bg-brand-light hover:text-brand-blue"}`}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="ml-2 px-5 py-2 bg-brand-orange text-white rounded-full text-sm font-bold hover:bg-orange-600 transition-colors"
          >
            Free Estimate
          </Link>
        </nav>

        {/* Mobile controls */}
        <div className="lg:hidden flex items-center gap-2">
          <a
            href={SITE.phoneHref}
            className="px-4 py-2 bg-brand-orange text-white rounded-full text-sm font-bold"
          >
            Call Now
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="p-2 rounded-lg text-gray-700 hover:bg-brand-light transition-colors"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-1 shadow-lg">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${pathname === link.href ? "bg-brand-light text-brand-blue" : "text-gray-700 hover:bg-brand-light hover:text-brand-blue"}`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-gray-100 mt-2 space-y-1">
            {SERVICE_LINKS.filter((l) => !NAV_LINKS.find((n) => n.href === l.href)).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-brand-light hover:text-brand-blue transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block text-center mt-3 px-5 py-3 bg-brand-orange text-white rounded-full text-sm font-bold hover:bg-orange-600 transition-colors"
          >
            Get a Free Estimate
          </Link>
        </div>
      )}
    </header>
  );
}

import Link from "next/link";
import { SITE } from "@/lib/constants";

interface AsideCardProps {
  heading: string;
  bullets: string[];
  ctaLabel?: string;
  ctaHref?: string;
}

export default function AsideCard({
  heading,
  bullets,
  ctaLabel = "View Contact Info",
  ctaHref = "/contact",
}: AsideCardProps) {
  return (
    <div className="bg-brand-dark text-white rounded-2xl p-8 sticky top-24 shadow-card-lg">
      <h3 className="font-extrabold text-lg mb-4">{heading}</h3>
      <a
        href={SITE.phoneHref}
        className="block text-2xl font-black text-brand-orange mb-6 hover:underline"
      >
        {SITE.phone}
      </a>
      <ul className="space-y-3 mb-6">
        {bullets.map((b) => (
          <li
            key={b}
            className="flex items-start gap-2 text-sm border-b border-white/10 pb-3 last:border-0"
          >
            {b}
          </li>
        ))}
      </ul>
      <a
        href={SITE.phoneHref}
        className="flex justify-center items-center w-full py-3 rounded-full font-bold text-sm bg-brand-orange text-white mb-3 hover:bg-orange-600 transition-colors"
      >
        📞 Call Now
      </a>
      <Link
        href={ctaHref}
        className="flex justify-center items-center w-full py-3 rounded-full font-bold text-sm text-white border border-white/30 hover:border-white/60 transition-all"
      >
        {ctaLabel}
      </Link>
    </div>
  );
}

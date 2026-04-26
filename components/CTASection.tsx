import Link from "next/link";
import { SITE } from "@/lib/constants";

interface CTASectionProps {
  heading: string;
  subtext: string;
}

function normalizeBreaks(html: string): string {
  return html.replace(/\s*<br\s*\/?>\s*/gi, " <br/> ");
}

export default function CTASection({ heading, subtext }: CTASectionProps) {
  return (
    <section className="bg-gradient-to-br from-brand-blue to-brand-dark text-white text-center py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-black mb-4 leading-tight"
          dangerouslySetInnerHTML={{ __html: normalizeBreaks(heading) }}
        />
        <p className="text-lg opacity-90 mb-6">{subtext}</p>
        <a
          href={SITE.phoneHref}
          className="block text-4xl font-black text-brand-orange mb-8 hover:underline"
        >
          {SITE.phone}
        </a>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href={SITE.phoneHref}
            className="px-8 py-4 rounded-full font-bold text-base bg-brand-orange text-white transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            📞 Call Now
          </a>
          <Link
            href="/contact"
            className="px-8 py-4 bg-white/15 text-white border-2 border-white/60 rounded-full font-bold text-base backdrop-blur-sm hover:-translate-y-0.5 hover:shadow-xl transition-all"
          >
            View Contact Info
          </Link>
        </div>
      </div>
    </section>
  );
}

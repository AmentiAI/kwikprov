import { SITE } from "@/lib/constants";

export default function CallWidget() {
  return (
    <a
      href={SITE.phoneHref}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-3 bg-brand-orange text-white font-black rounded-full shadow-2xl px-5 py-3 text-base hover:bg-orange-600 transition-all hover:-translate-y-0.5 hover:shadow-orange-300/50 md:hidden"
      aria-label="Call Kwik Plumbing"
    >
      <span className="text-xl">📞</span>
      <span>Call Now</span>
    </a>
  );
}

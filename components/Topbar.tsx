import { SITE } from "@/lib/constants";

export default function Topbar() {
  return (
    <div className="bg-brand-dark text-white text-sm py-2 px-4">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-2">
        <span>📍 1149 Hartford Ave, Johnston RI &nbsp;|&nbsp; Serving All of Rhode Island</span>
        <span>
          {SITE.license} &nbsp;|&nbsp; Navien Specialist &nbsp;|&nbsp;{" "}
          <strong className="text-brand-orange">
            Call Us:{" "}
            <a href={SITE.phoneHref} className="text-brand-orange hover:underline">
              {SITE.phone}
            </a>
          </strong>
        </span>
      </div>
    </div>
  );
}

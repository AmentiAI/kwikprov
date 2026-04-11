import Link from "next/link";

interface ServiceCardProps {
  icon: string;
  title: string;
  desc: string;
  href?: string;
  linkLabel?: string;
  accentColor?: string;
}

export default function ServiceCard({
  icon,
  title,
  desc,
  href,
  linkLabel = "Learn More →",
  accentColor = "border-brand-blue",
}: ServiceCardProps) {
  return (
    <div
      className={`bg-white rounded-xl p-8 shadow-card border-t-4 ${accentColor} hover:-translate-y-1 hover:shadow-card-lg transition-all duration-200`}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-brand-dark font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
      {href && (
        <Link
          href={href}
          className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-brand-blue hover:underline"
        >
          {linkLabel}
        </Link>
      )}
    </div>
  );
}

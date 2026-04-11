import Link from "next/link";

interface PageHeaderProps {
  breadcrumb?: string;
  title: string;
  subtitle?: string;
}

export default function PageHeader({ breadcrumb, title, subtitle }: PageHeaderProps) {
  return (
    <div className="relative bg-gradient-to-br from-brand-dark via-brand-blue to-[#1a7fd4] text-white py-20 px-4 text-center overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-brand-red" />
      {breadcrumb && (
        <p className="text-sm opacity-70 mb-4">
          <Link href="/" className="text-white hover:underline">Home</Link>
          {" → "}
          <span>{breadcrumb}</span>
        </p>
      )}
      <h1
        className="text-4xl md:text-6xl font-black leading-tight mb-5 tracking-tight"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {subtitle && (
        <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}

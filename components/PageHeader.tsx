import Link from "next/link";

interface PageHeaderProps {
  breadcrumb?: string;
  title: string;
  subtitle?: string;
}

export default function PageHeader({ breadcrumb, title, subtitle }: PageHeaderProps) {
  return (
    <div className="bg-gradient-to-br from-brand-dark via-brand-blue to-[#1a7fd4] text-white py-16 px-4 text-center">
      {breadcrumb && (
        <p className="text-sm opacity-70 mb-3">
          <Link href="/" className="text-white hover:underline">Home</Link>
          {" → "}
          <span>{breadcrumb}</span>
        </p>
      )}
      <h1
        className="text-3xl md:text-5xl font-black leading-tight mb-4"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {subtitle && (
        <p className="text-base md:text-lg opacity-90 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}

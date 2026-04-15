import Link from "next/link";

interface PageHeaderProps {
  breadcrumb?: string;
  title: string;
  subtitle?: string;
  image?: string;
}

const DEFAULT_IMAGE =
  "https://scvbk65ceiknasne.public.blob.vercel-storage.com/services/1760614729182-b0uhhhkxcrp.png";

export default function PageHeader({ breadcrumb, title, subtitle, image = DEFAULT_IMAGE }: PageHeaderProps) {
  return (
    <div
      className="relative bg-brand-dark text-white py-20 px-4 text-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `linear-gradient(rgba(15,23,42,0.72), rgba(15,23,42,0.82)), url(${image})` }}
    >
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-brand-orange" />
      {breadcrumb && (
        <p className="text-sm opacity-80 mb-4 relative z-10">
          <Link href="/" className="text-white hover:underline">Home</Link>
          {" → "}
          <span>{breadcrumb}</span>
        </p>
      )}
      <h1
        className="text-4xl md:text-6xl font-black leading-tight mb-5 tracking-tight relative z-10"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {subtitle && (
        <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed relative z-10">{subtitle}</p>
      )}
    </div>
  );
}

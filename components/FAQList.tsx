interface FAQItem {
  q: string;
  a: string;
}

export default function FAQList({ items }: { items: FAQItem[] }) {
  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {items.map((item) => (
        <details
          key={item.q}
          className="bg-white rounded-xl px-6 py-5 shadow-sm cursor-pointer group open:shadow-[0_4px_20px_rgba(0,87,168,.12)]"
        >
          <summary className="list-none flex justify-between items-center font-bold text-brand-dark select-none">
            {item.q}
            <span className="faq-icon ml-4 text-2xl font-light text-brand-blue transition-transform duration-200 shrink-0">
              +
            </span>
          </summary>
          <p
            className="mt-4 text-sm text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: item.a }}
          />
        </details>
      ))}
    </div>
  );
}

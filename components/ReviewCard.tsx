interface ReviewCardProps {
  text: string;
  name: string;
  location: string;
}

export default function ReviewCard({ text, name, location }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-xl p-7 shadow-card border-l-[5px] border-brand-blue">
      <div className="text-yellow-400 text-lg mb-3">★★★★★</div>
      <p className="text-gray-700 text-sm leading-relaxed italic mb-4">&ldquo;{text}&rdquo;</p>
      <p className="font-bold text-sm text-gray-900">
        {name}{" "}
        <span className="font-normal text-gray-500">— {location}</span>
      </p>
    </div>
  );
}

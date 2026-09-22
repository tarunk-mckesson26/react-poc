import type { LucideIcon } from "lucide-react";

type InsightRecommendationItem = {
  label: string;
  value: string;
  Icon: LucideIcon;
};

type InsightRecommendationSectionProps = {
  backgroundColor: string;
  iconColor: string;
  borderColor: string;
  items: InsightRecommendationItem[];
};

export default function InsightRecommendationSection({
  backgroundColor,
  iconColor,
  borderColor,
  items,
}: InsightRecommendationSectionProps) {
  return (
    <div className="mt-2 rounded-xl border px-3 py-2.5" style={{ backgroundColor, borderColor }}>
      {items.map(({ label, value, Icon }, index) => (
        <div
          key={`${label}-${index}`}
          className={index === 0 ? "flex items-start gap-2 text-sm leading-5 text-slate-700" : "mt-1.5 flex items-start gap-2 text-sm leading-5 text-slate-700"}
        >
          <div className="mt-1 shrink-0" style={{ color: iconColor }}>
            <Icon className="h-3.5 w-3.5" strokeWidth={2.4} />
          </div>
          <p>
            <span className="font-semibold text-slate-800">{label}:</span> {value}
          </p>
        </div>
      ))}
    </div>
  );
}
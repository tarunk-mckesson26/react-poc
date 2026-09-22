import type { ReactNode } from "react";

type KpiPillProps = {
  label: string;
  icon: ReactNode;
  backgroundColor: string;
  textColor: string;
  borderColor: string;
  className?: string;
};

export default function KpiPill({
  label,
  icon,
  backgroundColor,
  textColor,
  borderColor,
  className,
}: KpiPillProps) {
  return (
    <div
      className={className ?? "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-medium leading-none"}
      style={{
        backgroundColor,
        color: textColor,
        borderColor,
      }}
    >
      {icon}
      {label}
    </div>
  );
}
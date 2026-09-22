import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import {
  BadgeDollarSignIcon,
  CalendarDaysIcon,
  CircleAlertIcon,
  CircleHelpIcon,
  InfoIcon,
  LightbulbIcon,
  PackageIcon,
  PercentIcon,
  RefreshCcwIcon,
  TagIcon,
  TargetIcon,
  TicketPercentIcon,
  WalletIcon,
} from "lucide-react";

export const dashboardIconRegistry = {
  "badge-dollar": BadgeDollarSignIcon,
  calendar: CalendarDaysIcon,
  alert: CircleAlertIcon,
  help: CircleHelpIcon,
  lightbulb: LightbulbIcon,
  percent: PercentIcon,
  tag: TagIcon,
  target: TargetIcon,
  "ticket-percent": TicketPercentIcon,
  wallet: WalletIcon,
  box: PackageIcon,
  return: RefreshCcwIcon,
} as const;

export type DashboardIconKey = keyof typeof dashboardIconRegistry;

export const resolveDashboardIcon = (iconKey?: string): LucideIcon => {
  if (!iconKey) {
    return CircleHelpIcon;
  }

  return dashboardIconRegistry[iconKey as DashboardIconKey] ?? CircleHelpIcon;
};

type InfoHoverIconProps = {
  text?: string;
  color: string;
  icon?: ReactNode;
  backgroundColor?: string;
  borderColor?: string;
};

export function InfoHoverIcon({
  text,
  color,
  icon,
  backgroundColor,
  borderColor,
}: InfoHoverIconProps) {
  if (!text?.trim()) {
    return null;
  }

  return (
    <div className="group relative flex items-center">
      <span
        className="flex h-4 w-4 items-center justify-center text-[10px] font-semibold"
        style={{
          color,
          backgroundColor,
          borderColor,
        }}
        aria-label="More information"
      >
        {icon ?? <InfoIcon className="h-3 w-3" strokeWidth={2.4} />}
      </span>

      <div className="pointer-events-none absolute left-1/2 top-[calc(100%+6px)] z-20 hidden w-52 -translate-x-1/2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-[11px] font-medium leading-4 text-slate-600 shadow-lg group-hover:block">
        {text}
      </div>
    </div>
  );
}
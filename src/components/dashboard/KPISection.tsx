import type { KPI } from "../data/dashboardData.ts";

import DashboardTileCard from "./DashboardTileCard";

export default function KPISection({
kpis,
  title = "Compliance",
}: {
  kpis: KPI[];
  title?: string;
}) {
  if (!kpis.length) {
    return null;
  }
  return (
    <section className="space-y-4">
      <div className="mb-4 flex items-center gap-2 text-[15px] font-semibold text-slate-800">
        <span>{title}</span>
        <span className="text-sm font-medium text-slate-500">{kpis.length} tiles</span>
      </div>

      <div
        className="
        grid
        grid-cols-1
        gap-4
        sm:grid-cols-2
        xl:grid-cols-3
      "
      >
        {kpis.map((kpi) => (
          <DashboardTileCard key={kpi.id} kpi={kpi} />
        ))}
      </div>
    </section>
  );
}
 
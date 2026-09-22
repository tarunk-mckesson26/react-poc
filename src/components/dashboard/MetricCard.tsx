import type { Metric } from "../data/dashboardData.ts";
import { getMetricColor, getMetricIconKey } from "./dashboardTheme";

import { resolveDashboardIcon } from "./iconRegistry";

export default function MetricCard({
  metric,
  singleValueOnly = false,
  variant = "compact",
  layout = "stacked",
  grouped = false,
}: {
  metric: Metric;
  singleValueOnly?: boolean;
  variant?: "compact" | "detail";
  layout?: "stacked" | "inline";
  grouped?: boolean;
}) {
  const color = getMetricColor(metric);
  const metricIconKey = getMetricIconKey(metric);
  const MetricIcon = resolveDashboardIcon(metricIconKey);
  const hasIcon = Boolean(metricIconKey);
  const isDetail = variant === "detail";
  const isInline = layout === "inline";

  return (
    <div
      className={
        isDetail
          ? "flex min-w-44 items-center justify-between gap-3 rounded-2xl border bg-slate-50 p-4"
          : isInline
            ? "flex min-h-[54px] flex-col items-start justify-center rounded-lg border border-slate-200 bg-white px-3 py-2"
            : grouped
              ? "flex items-center justify-between gap-3 bg-transparent px-0 py-0"
              : "flex items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white px-2 py-2"
      }
    >
      <div className={isDetail ? "flex min-w-0 items-center gap-3" : isInline ? "min-w-0" : "flex min-w-0 items-center gap-2.5"}>
        {!isInline && hasIcon ? (
          <div
            className={
              isDetail
                ? "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border text-white"
                : "flex h-7 w-7 shrink-0 items-center justify-center rounded-md border text-[10px] font-bold text-white"
            }
            style={{
              backgroundColor: color,
              borderColor: color,
            }}
          >
            <MetricIcon className={isDetail ? "h-4 w-4" : "h-3.5 w-3.5"} strokeWidth={2.2} />
          </div>
        ) : null}

        <div className={isInline ? "min-w-0" : "min-w-0"}>
          {!singleValueOnly && (
            <>
              <p className={isDetail ? "text-xs font-semibold tracking-wide text-slate-500" : isInline ? "text-[9px] font-semibold uppercase tracking-[0.08em] text-slate-500" : "text-[9px] font-semibold uppercase tracking-[0.08em] text-slate-500"}>
                {metric.label}
              </p>
              {metric.subtitle && (
                <p className={isDetail ? "mt-1 text-sm text-slate-400" : "mt-0.5 text-[9px] text-slate-400"}>{metric.subtitle}</p>
              )}
            </>
          )}
          {singleValueOnly && (
            <p className={isDetail ? "text-xs font-semibold tracking-wide text-slate-500" : "text-[9px] font-semibold uppercase tracking-[0.08em] text-slate-500"}>{metric.label}</p>
          )}

          {isInline ? (
            <h3
              className="mt-1 text-[15px] font-bold leading-none"
              style={{
                color,
              }}
            >
              {metric.value}
            </h3>
          ) : null}
        </div>
      </div>

      {!isInline ? <div className="ml-auto flex items-center">
        <h3
          className={isDetail ? "text-2xl font-bold leading-none" : "text-[15px] font-bold leading-none"}
          style={{
            color,
          }}
        >
          {metric.value}
        </h3>
      </div> : null}
    </div>
  );
}

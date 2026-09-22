import type { Metric } from "../data/dashboardData.ts";

import { getHeadlineMetricValue, getMetricsLayout, getVisibleMetrics } from "./dashboardTheme";

import MetricCard from "./MetricCard";

type MetricsSectionProps = {
  metrics: Metric[];
  headlineColor: string;
  headlineValueOverride?: string;
};

export default function MetricsSection({
  metrics,
  headlineColor,
  headlineValueOverride,
}: MetricsSectionProps) {
  const visibleMetrics = getVisibleMetrics(metrics);
  const metricsLayout = getMetricsLayout(visibleMetrics);
  const isInlineLayout = metricsLayout === "inline";
  const metricsVisible = metricsLayout !== "hidden" && visibleMetrics.length > 0;
  const headlineValue =
    headlineValueOverride !== undefined
      ? headlineValueOverride.trim() || undefined
      : getHeadlineMetricValue(visibleMetrics);

  const metricsWrapperClassName = isInlineLayout
    ? "mt-2 grid grid-cols-2 gap-2"
    : "mt-2 overflow-hidden rounded-lg border border-slate-200 bg-white";

  const renderMetricItem = (metric: Metric, index: number) => {
    if (isInlineLayout) {
      return (
        <MetricCard
          key={`${metric.label}-${metric.value}-${index}`}
          metric={metric}
          singleValueOnly={visibleMetrics.length === 1}
          layout="inline"
        />
      );
    }

    return (
      <div
        key={`${metric.label}-${metric.value}-${index}`}
        className={index === 0 ? "px-2 py-2" : "border-t border-slate-200 px-2 py-2"}
      >
        <MetricCard
          metric={metric}
          singleValueOnly={visibleMetrics.length === 1}
          layout="stacked"
          grouped
        />
      </div>
    );
  };

  return (
    <>
      {headlineValue ? (
        <div className="mt-2 text-[28px] font-bold leading-none" style={{ color: headlineColor }}>
          {headlineValue}
        </div>
      ) : null}

      {metricsVisible ? (
        <div className={metricsWrapperClassName}>
          {visibleMetrics.map(renderMetricItem)}
        </div>
      ) : null}
    </>
  );
}
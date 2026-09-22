import type { KPI, KPIAccentPosition, Metric } from "../data/dashboardData.ts";

export type MetricLayout = "stacked" | "inline" | "hidden";

type KpiTheme = {
  accentColor: string;
  accentPosition: KPIAccentPosition;
  shadowColor: string;
  iconKey: string;
  iconBackground: string;
  iconColor: string;
  titleColor: string;
  valueColor: string;
  infoBg: string;
  periodBackground: string;
  periodBorderColor: string;
  periodTextColor: string;
  periodIconKey: string;
  periodIconBackground: string;
  periodIconBorderColor: string;
  periodIconColor: string;
  insightIconKey: string;
  recommendationIconKey: string;
};

type StatusTone = {
  bg: string;
  text: string;
  border: string;
};

type KpiConfig = {
  routeKey?: string;
  title?: string;
  theme: KpiTheme;
};

export const KPI_CONFIG: Record<string, KpiConfig> = {
  gcr: {
    routeKey: "gcr",
    title: "GCR",
    theme: {
      accentColor: "#F59E0B",
      accentPosition: "top",
      shadowColor: "#F59E0B",
      iconKey: "percent",
      iconBackground: "#FFF7ED",
      iconColor: "#F97316",
      titleColor: "#0F4C81",
      valueColor: "#7C3AED",
      infoBg: "#FEF3C7",
      periodBackground: "#E7F0FB",
      periodBorderColor: "#C7DCF7",
      periodTextColor: "#315A8A",
      periodIconKey: "calendar",
      periodIconBackground: "#F8FBFF",
      periodIconBorderColor: "#BFD3EE",
      periodIconColor: "#5073A0",
      insightIconKey: "lightbulb",
      recommendationIconKey: "target",
    },
  },
  cogs: {
    routeKey: "cogs",
    title: "Cost Of Goods Sold",
    theme: {
      accentColor: "#16A34A",
      accentPosition: "top",
      shadowColor: "#16A34A",
      iconKey: "tag",
      iconBackground: "#ECFDF5",
      iconColor: "#16A34A",
      titleColor: "#0F4C81",
      valueColor: "#16A34A",
      infoBg: "#DCFCE7",
      periodBackground: "#E7F0FB",
      periodBorderColor: "#C7DCF7",
      periodTextColor: "#315A8A",
      periodIconKey: "calendar",
      periodIconBackground: "#F8FBFF",
      periodIconBorderColor: "#BFD3EE",
      periodIconColor: "#5073A0",
      insightIconKey: "lightbulb",
      recommendationIconKey: "target",
    },
  },
  rebates: {
    routeKey: "rebates",
    title: "Rebates",
    theme: {
      accentColor: "#8B5CF6",
      accentPosition: "top",
      shadowColor: "#8B5CF6",
      iconKey: "badge-dollar",
      iconBackground: "#F3E8FF",
      iconColor: "#8B5CF6",
      titleColor: "#0F4C81",
      valueColor: "#9333EA",
      infoBg: "#F3E8FF",
      periodBackground: "#E7F0FB",
      periodBorderColor: "#C7DCF7",
      periodTextColor: "#315A8A",
      periodIconKey: "calendar",
      periodIconBackground: "#F8FBFF",
      periodIconBorderColor: "#BFD3EE",
      periodIconColor: "#5073A0",
      insightIconKey: "lightbulb",
      recommendationIconKey: "target",
    },
  },
  netPurchases: {
    routeKey: "netPurchases",
    title: "Net Purchases",
    theme: {
      accentColor: "#2563EB",
      accentPosition: "left",
      shadowColor: "#2563EB",
      iconKey: "badge-dollar",
      iconBackground: "#DBEAFE",
      iconColor: "#1D4ED8",
      titleColor: "#0F4C81",
      valueColor: "#2563EB",
      infoBg: "#DBEAFE",
      periodBackground: "#E7F0FB",
      periodBorderColor: "#C7DCF7",
      periodTextColor: "#315A8A",
      periodIconKey: "calendar",
      periodIconBackground: "#F8FBFF",
      periodIconBorderColor: "#BFD3EE",
      periodIconColor: "#5073A0",
      insightIconKey: "lightbulb",
      recommendationIconKey: "target",
    },
  },
  serviceLevel: {
    routeKey: "serviceLevel",
    title: "Service Level",
    theme: {
      accentColor: "#14B8A6",
      accentPosition: "left",
      shadowColor: "#14B8A6",
      iconKey: "box",
      iconBackground: "#CCFBF1",
      iconColor: "#0F766E",
      titleColor: "#0F4C81",
      valueColor: "#0F766E",
      infoBg: "#CCFBF1",
      periodBackground: "#E7F0FB",
      periodBorderColor: "#C7DCF7",
      periodTextColor: "#315A8A",
      periodIconKey: "calendar",
      periodIconBackground: "#F8FBFF",
      periodIconBorderColor: "#BFD3EE",
      periodIconColor: "#5073A0",
      insightIconKey: "lightbulb",
      recommendationIconKey: "target",
    },
  },
  returnCreditRate: {
    routeKey: "returnCreditRate",
    title: "Return & Credit %",
    theme: {
      accentColor: "#A855F7",
      accentPosition: "left",
      shadowColor: "#A855F7",
      iconKey: "return",
      iconBackground: "#F3E8FF",
      iconColor: "#7E22CE",
      titleColor: "#0F4C81",
      valueColor: "#7E22CE",
      infoBg: "#F3E8FF",
      periodBackground: "#E7F0FB",
      periodBorderColor: "#C7DCF7",
      periodTextColor: "#315A8A",
      periodIconKey: "calendar",
      periodIconBackground: "#F8FBFF",
      periodIconBorderColor: "#BFD3EE",
      periodIconColor: "#5073A0",
      insightIconKey: "lightbulb",
      recommendationIconKey: "target",
    },
  },
};

const DEFAULT_KPI_THEME: KpiTheme = {
  accentColor: "#94A3B8",
  accentPosition: "top",
  shadowColor: "#94A3B8",
  iconKey: "help",
  iconBackground: "#F8FAFC",
  iconColor: "#475569",
  titleColor: "#0F172A",
  valueColor: "#334155",
  infoBg: "#F8FAFC",
  periodBackground: "#F8FAFC",
  periodBorderColor: "#E2E8F0",
  periodTextColor: "#475569",
  periodIconKey: "calendar",
  periodIconBackground: "#FFFFFF",
  periodIconBorderColor: "#CBD5E1",
  periodIconColor: "#64748B",
  insightIconKey: "lightbulb",
  recommendationIconKey: "target",
};

export const getKpiConfig = (kpi: Pick<KPI, "id" | "title"> | string) => {
  const kpiId = typeof kpi === "string" ? kpi : kpi.id;
  return KPI_CONFIG[kpiId];
};

export const getKPITheme = (kpi: KPI) => ({
  ...DEFAULT_KPI_THEME,
  ...(getKpiConfig(kpi)?.theme ?? {}),
});

export const getKpiDisplayTitle = (kpi: KPI) => {
  return getKpiConfig(kpi)?.title ?? kpi.title;
};

export const getKpiRouteKey = (kpi: Pick<KPI, "id"> | string) => {
  const kpiId = typeof kpi === "string" ? kpi : kpi.id;
  return KPI_CONFIG[kpiId]?.routeKey ?? kpiId;
};

const STATUS_TONES: Record<string, StatusTone> = {
  success: {
    bg: "#ECFDF5",
    text: "#047857",
    border: "#86EFAC",
  },
  warning: {
    bg: "#FFF7ED",
    text: "#C2410C",
    border: "#FDBA74",
  },
  default: {
    bg: "#F8FAFC",
    text: "#475569",
    border: "#CBD5E1",
  },
};

export const getKpiStatusTone = (status?: string) => {
  if (!status) {
    return STATUS_TONES.default;
  }

  const normalizedStatus = status.toLowerCase();

  if (normalizedStatus.includes("track") || normalizedStatus.includes("success")) {
    return STATUS_TONES.success;
  }

  if (normalizedStatus.includes("risk") || normalizedStatus.includes("warning")) {
    return STATUS_TONES.warning;
  }

  return STATUS_TONES.default;
};

const METRIC_COLORS = {
  default: "#475569",
  rebate: "#7C3AED",
  cogs: "#16A34A",
  service: "#14B8A6",
  returnRate: "#A855F7",
} as const;

export const getMetricColor = (metric: Metric) => {
  const label = metric.label.toLowerCase();

  if (label.includes("rebate") || label.includes("agreement") || label.includes("amount")) {
    return METRIC_COLORS.rebate;
  }

  if (label.includes("cogs") || label.includes("discount")) {
    return METRIC_COLORS.cogs;
  }
  if (label.includes("service")) {
    return METRIC_COLORS.service;
  }

  if (label.includes("return") || label.includes("credit")) {
    return METRIC_COLORS.returnRate;
  }

  return METRIC_COLORS.default;
};

export const getMetricIconKey = (metric: Metric) => {
  if (metric.iconKey !== undefined) {
    return metric.iconKey.trim() || undefined;
  }

  const label = metric.label.toLowerCase();

  if (label.includes("rebate") || label.includes("amount")) {
    return "badge-dollar";
  }

  if (label.includes("agreement")) {
    return "tag";
  }

  if (label.includes("service")) {
    return "box";
  }

  if (label.includes("return") || label.includes("credit")) {
    return "return";
  }

  if (label.includes("cogs") || label.includes("discount")) {
    return "ticket-percent";
  }

  return "wallet";
};

export const getVisibleMetrics = (metrics: Metric[]) => {
  return metrics.filter((metric) => metric.value.trim() !== "");
};

export const getMetricsLayout = (metrics: Metric[]): MetricLayout => {
  const visibleMetrics = getVisibleMetrics(metrics);

  if (visibleMetrics.length <= 1) {
    return "hidden";
  }

  if (visibleMetrics.some((metric) => (metric.subtitle ?? "").trim() !== "")) {
    return "stacked";
  }

  return "inline";
};

export const getHeadlineMetricValue = (metrics: Metric[]) => {
  const visibleMetrics = getVisibleMetrics(metrics);

  if (visibleMetrics.length === 0) {
    return undefined;
  }

  const metricPriority = (metric: Metric) => {
    const label = metric.label.toLowerCase();

    if (label.includes("rebate amount") || label.includes("rebate")) {
      return 3;
    }

    if (label.includes("discount")) {
      return 2;
    }

    return 1;
  };

  return [...visibleMetrics].sort((left, right) => metricPriority(right) - metricPriority(left))[0]?.value;
};
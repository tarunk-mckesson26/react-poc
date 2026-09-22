import { generatePath } from "react-router-dom";
import { getKpiRouteKey } from "../dashboard/dashboardTheme";

type KpiRouteSource = {
  id: string;
};

const DASHBOARD_ROOT = "/dashboard";
const KPI_DETAIL_PATTERN = "/dashboard/:kpiId";

export const dashboardRoutes = {
  root: DASHBOARD_ROOT,
  kpiDetailPattern: KPI_DETAIL_PATTERN,
};

export const getKpiRouteParam = (kpi: string | KpiRouteSource) => {
  return getKpiRouteKey(kpi);
};

export const getKpiDetailRoute = (kpi: string | KpiRouteSource) => {
  return generatePath(KPI_DETAIL_PATTERN, { kpiId: getKpiRouteParam(kpi) });
};

export const matchesKpiRoute = (kpi: KpiRouteSource, routeParam?: string) => {
  if (!routeParam) {
    return false;
  }

  return routeParam === kpi.id || routeParam === getKpiRouteKey(kpi);
};

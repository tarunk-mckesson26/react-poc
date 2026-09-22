import type { KPI, KPIAccentPosition } from "../data/dashboardData.ts";
import { getKPITheme, getKpiDisplayTitle, getKpiStatusTone } from "./dashboardTheme";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import InsightRecommendationSection from "./InsightRecommendationSection";
import KpiPill from "./KpiPill";
import MetricsSection from "./MetricsSection";
import { InfoHoverIcon, resolveDashboardIcon } from "./iconRegistry";
import { getKpiDetailRoute } from "../routes/dashboardRoutes";

export default function DashboardTileCard({
  kpi,
  accentPosition,
}: {
  kpi: KPI;
  accentPosition?: KPIAccentPosition;
}) {
  const navigate = useNavigate();
  const theme = getKPITheme(kpi);
  const HeaderIcon = resolveDashboardIcon(theme.iconKey);
  const PeriodIcon = resolveDashboardIcon(theme.periodIconKey);
  const InsightIcon = resolveDashboardIcon(theme.insightIconKey);
  const RecommendationIcon = resolveDashboardIcon(theme.recommendationIconKey);
  const statusTone = getKpiStatusTone(kpi.status);
  // const resolvedAccentPosition = accentPosition ?? theme.accentPosition;
  const isPurchaseKpi = ["netPurchases", "serviceLevel", "returnCreditRate"].includes(kpi.id);
  const resolvedAccentPosition = accentPosition ?? (isPurchaseKpi ? "left" : theme.accentPosition);
  const detailButtonLabel = isPurchaseKpi ? "See Details" : "View Details";


  const accentStyle =
    resolvedAccentPosition === "left"
      ? { borderLeft: `4px solid ${theme.accentColor}` }
      : { borderTop: `4px solid ${theme.accentColor}` };

  return (
    <Card
      className="flex h-full flex-col overflow-hidden rounded-[18px] border border-slate-200 bg-white"
      style={{
        ...accentStyle,
        boxShadow: `0 0 0 1px ${theme.shadowColor}1A, 0 10px 24px -20px ${theme.shadowColor}8C, 0 4px 10px -8px rgba(15, 23, 42, 0.12)`,
      }}
    >
      <div className="flex flex-1 flex-col px-3.5 pb-3 pt-1">
        <div className="mb-2 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div
              className="flex h-6 w-6 items-center justify-center rounded-md border text-[10px] font-bold"
              style={{
                backgroundColor: theme.iconBackground,
                borderColor: theme.iconBackground,
                color: theme.iconColor,
              }}
            >
              <HeaderIcon className="h-3.5 w-3.5" strokeWidth={2.2} />
            </div>
            <h2 className="text-[15px] font-semibold leading-none tracking-[-0.02em]" style={{ color: theme.titleColor }}>
              {getKpiDisplayTitle(kpi)}
            </h2>
            <InfoHoverIcon
              text={kpi.titleInfo}
              color={theme.accentColor}
              backgroundColor={theme.iconBackground}
              borderColor="transparent"
            />
          </div>

          <KpiPill
            label={kpi.status}
            backgroundColor={statusTone.bg}
            textColor={statusTone.text}
            borderColor={statusTone.border}
            icon={
              <span
                className="flex h-2.5 w-2.5 rounded-full bg-current opacity-90"
                style={{ boxShadow: "0 0 0 2px rgba(255,255,255,0.7)" }}
              />
            }
          />
        </div>

        <div className="mb-2.5 flex justify-end">
          <KpiPill
            label={kpi.period}
            backgroundColor={theme.periodBackground}
            textColor={theme.periodTextColor}
            borderColor={theme.periodBorderColor}
            className="inline-flex items-center gap-1.5 rounded-full border px-2 py-1 text-[9px] font-medium uppercase tracking-[0.06em]"
            icon={
              <span
                className="flex h-3 w-3 items-center justify-center rounded-sm border text-[7px]"
                style={{
                  backgroundColor: theme.periodIconBackground,
                  borderColor: theme.periodIconBorderColor,
                  color: theme.periodIconColor,
                }}
              >
                <PeriodIcon className="h-2 w-2" strokeWidth={2.4} />
              </span>
            }
          />
        </div>

        <MetricsSection
          metrics={kpi.metrics}
          headlineColor={theme.valueColor}
          headlineValueOverride={kpi.headlineValue}
        />

        <InsightRecommendationSection
          backgroundColor={theme.infoBg}
          iconColor={theme.accentColor}
          borderColor={theme.accentColor}
          items={[
            {
              label: "Insight",
              value: kpi.insight,
              Icon: InsightIcon,
            },
            {
              label: "Recommendation",
              value: kpi.recommendation,
              Icon: RecommendationIcon,
            },
          ]}
        />
      </div>

      <div className="mt-auto border-t border-slate-200 bg-slate-50/80 px-3 py-1.5">
        <Button
          variant="ghost"
          className="flex h-auto w-full items-center justify-start gap-1 rounded-md p-0.5 text-left text-[14px] font-medium text-slate-700 transition-colors hover:text-blue-800"
          onClick={() => navigate(getKpiDetailRoute(kpi))}
          style={{ justifyContent: "flex-start" }}
        >
          <span>{detailButtonLabel}</span>
          <span aria-hidden="true">→</span>
        </Button>
      </div>
    </Card>
  );
}
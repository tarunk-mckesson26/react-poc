import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Button } from "@/components/ui/button";

import { dashboardData } from "../data/dashboardData.ts";
import MetricCard from "../dashboard/MetricCard";
import { getKPITheme, getKpiDisplayTitle, getVisibleMetrics } from "../dashboard/dashboardTheme";
import { dashboardRoutes, matchesKpiRoute } from "../routes/dashboardRoutes";

export default function KPIDetails() {
	const navigate = useNavigate();
	const { kpiId } = useParams();

	const kpi = useMemo(
		() =>
			dashboardData.accounts
				.flatMap((account) => [...account.kpis, ...(account.purchasingKpis ?? [])])
				.find((item) => matchesKpiRoute(item, kpiId)),
		[kpiId]
	);

	if (!kpi) {
		return (
			<div className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center gap-4 p-6">
				<h1 className="text-3xl font-bold">KPI not found</h1>
				<p className="text-slate-600">The requested KPI detail page does not exist.</p>
				<div>
					<Button variant="outline" onClick={() => navigate(dashboardRoutes.root)}>
						Back to dashboard
					</Button>
				</div>
			</div>
		);
	}

	const theme = getKPITheme(kpi);
	const visibleMetrics = getVisibleMetrics(kpi.metrics);

	return (
		<div className="mx-auto min-h-screen max-w-5xl p-6">
			<Button variant="ghost" className="mb-6" onClick={() => navigate(dashboardRoutes.root)}>
				Back to dashboard
			</Button>

			<div className="rounded-3xl border bg-white p-6 shadow-sm">
				<p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
					KPI details
				</p>
				<h1 className="mb-2 text-4xl font-bold">{getKpiDisplayTitle(kpi)}</h1>
				<p className="mb-6 text-slate-500">{kpi.period}</p>

				<div className="mb-6 flex flex-wrap gap-3">
					{visibleMetrics.map((metric, index) => (
						<MetricCard
							key={`${metric.label}-${metric.value}-${index}`}
							metric={metric}
							variant="detail"
							singleValueOnly={visibleMetrics.length === 1}
						/>
					))}
				</div>

				<div className="space-y-4 rounded-2xl p-5" style={{ backgroundColor: theme.infoBg }}>
					<p className="text-sm leading-6 text-slate-700">
						<span className="font-semibold text-slate-900">Insight:</span>{" "}
						{kpi.insight}
					</p>
					<p className="text-sm leading-6 text-slate-700">
						<span className="font-semibold text-slate-900">Recommendation:</span>{" "}
						{kpi.recommendation}
					</p>
				</div>
			</div>
		</div>
	);
}

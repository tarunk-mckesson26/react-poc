import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import KPISection from "@/components/dashboard/KPISection";
import { dashboardData } from "../data/dashboardData.ts";

export default function Dashboard() {
  const navigate = useNavigate();

  const defaultAccountId =
    dashboardData.accounts.find((item) => (item.purchasingKpis?.length ?? 0) > 0)?.accountId ??
    dashboardData.accounts[0]?.accountId ??
    "";

  const [selectedAccount, setSelectedAccount] = useState(defaultAccountId);

  const account =
    dashboardData.accounts.find((item) => item.accountId === selectedAccount) ??
    dashboardData.accounts.find((item) => (item.purchasingKpis?.length ?? 0) > 0) ??
    dashboardData.accounts[0];

  const totalKpiCount = dashboardData.accounts.reduce(
    (count, item) => count + item.kpis.length + (item.purchasingKpis?.length ?? 0),
    0,
  );

  return (
    <div className="mx-auto max-w-6xl p-6">
      <div className="mb-4 flex md:flex-row md:items-center md:justify-between">
        <Button variant="ghost" onClick={() => navigate("/")}>
          <span aria-hidden="true">←</span>
          Back to Chart
        </Button>
      </div>
      <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2 text-[15px] font-semibold text-blue-700">
          <span className="flex h-5 w-5 items-center justify-center rounded-full border border-blue-500 bg-white text-[10px]">
            ◌
          </span>
          <span>
            Your KPI Tiles <span className="text-slate-700">{totalKpiCount} selected</span>
          </span>
        </div>

        <div className="w-full max-w-[260px]">
          <label className="sr-only" htmlFor="account-select">
            Select account
          </label>
          <select
            id="account-select"
            value={selectedAccount}
            onChange={(event) => setSelectedAccount(event.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm outline-none transition focus:border-blue-500"
          >
            {dashboardData.accounts.map((accountItem) => (
              <option key={accountItem.accountId} value={accountItem.accountId}>
                {accountItem.accountName}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-8">
        <KPISection title="Compliance" kpis={account.kpis} />
        <KPISection title="Purchasing" kpis={account.purchasingKpis ?? []} />
      </div>
    </div>
  );
}
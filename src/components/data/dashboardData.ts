export type Role = {
  id: string;
  label: string;
};

export type Metric = {
  label: string;
  value: string;
  subtitle?: string;
  iconKey?: string;
};

export type KPIAccentPosition = "top" | "left";

export type KPI = {
  id: string;
  title: string;
  titleInfo?: string;
  status: string;
  period: string;
  headlineValue?: string;
  metrics: Metric[];
  insight: string;
  recommendation: string;
};

export type Account = {
  accountId: string;
  accountName: string;
  role: string;
  kpis: KPI[];
  purchasingKpis?: KPI[];

};

export type DashboardData = {
  customerId: string;
  customerName: string;
  roles: Role[];
  accounts: Account[];
};

export const dashboardData: DashboardData = {
  customerId: "cust-001",
  customerName: "Sree Pharmacy",
  roles: [
    {
      id: "basic-lite",
      label: "Basic-Lite",
    },
    {
      id: "basic",
      label: "Basic",
    },
    {
      id: "advanced",
      label: "Advanced",
    },
  ],
  accounts: [
    {
      accountId: "acc-001",
      accountName: "Main Pharmacy",
      role: "Basic-Lite",
      kpis: [
        {
          id: "gcr",
          title: "GCR",
          titleInfo: "Generic Compliance Ratio details for this KPI tile.",
          status: "On Track",
          period: "MONTHLY + QTD",
          headlineValue: "",
          metrics: [
            {
              label: "CONTRIBUTES TO REBATES",
              subtitle: "Monthly (Rebate)",
              value: "11.11%",
              iconKey: "badge-dollar",
            },
            {
              label: "CONTRIBUTES TO COGS",
              subtitle: "QTD (COGS)",
              value: "6.76%",
              iconKey: "ticket-percent",
            },
          ],
          insight:
            "Your higher generic use is helping in two ways. Increased rebate accrual and lower quarterly drug costs by 1.24%.",
          recommendation:
            "Shift eligible purchases to preferred contract compliant generics.",
        },
        {
          id: "cogs",
          title: "Cost Of Goods Sold",
          titleInfo: "Cost of goods sold performance compared with current target discount behavior.",
          status: "At Risk",
          period: "QTD (Q2 2026)",
          headlineValue: "-7.0%",
          metrics: [
            {
              label: "DISCOUNT",
              value: "-7.0%",
              iconKey: "ticket-percent",
            },
          ],
          insight:
            "Your weighted discount is 7%. Brand products and Brand Rx are lowering purchasing value.",
          recommendation:
            "Consolidate purchasing toward primary wholesaler top discount tier.",
        },
        {
          id: "rebates",
          title: "Rebates",
          titleInfo: "Earned and projected rebate information for the current period.",
          status: "On Track",
          period: "JUNE 2026",
          headlineValue: "$5.80K",
          metrics: [
            {
              label: "AGREEMENTS",
              value: "5",
              iconKey: "",
            },
            {
              label: "REBATE AMOUNT",
              value: "$5.80K",
              iconKey: "",
            },
          ],
          insight:
            "$5.8K accrued this period reflects what has been earned to date.",
          recommendation:
            "Track GCR, COGS and eligible purchase volume together.",
        },
      ],
    },
    {
      accountId: "acc-002",
      accountName: "Satellite Pharmacy",
      role: "Advanced",
      kpis: [
        {
          id: "gcr",
          title: "GCR",
          titleInfo: "Generic Compliance Ratio details for this KPI tile.",
          status: "On Track",
          period: "MONTHLY + QTD",
          headlineValue: "",
          metrics: [
            {
              label: "CONTRIBUTES TO REBATES",
              subtitle: "Monthly (Rebate)",
              value: "10.15%",
              iconKey: "badge-dollar",
            },
            {
              label: "CONTRIBUTES TO COGS",
              subtitle: "QTD (COGS)",
              value: "5.91%",
              iconKey: "ticket-percent",
            },
          ],
          insight: "Pacing 4% ahead of monthly plan and improving tier performance.",
          recommendation: "Keep purchasing aligned to preferred generics and contract-compliant volume.",
        },
        {
          id: "cogs",
          title: "Cost Of Goods Sold",
          titleInfo: "Cost of goods sold performance compared with current target discount behavior.",
          status: "On Track",
          period: "QTD (Q2 2026)",
          headlineValue: "-6.5%",
          metrics: [
            {
              label: "DISCOUNT",
              value: "-6.5%",
              iconKey: "ticket-percent",
            },
          ],
          insight: "Your current purchasing mix is stable and within the expected range.",
          recommendation: "Maintain the current supplier mix to protect margin performance.",
        },
        {
          id: "rebates",
          title: "Rebates",
          titleInfo: "Earned and projected rebate information for the current period.",
          status: "On Track",
          period: "JUNE 2026",
          headlineValue: "$4.20K",
          metrics: [
            {
              label: "AGREEMENTS",
              value: "4",
              iconKey: "",
            },
            {
              label: "REBATE AMOUNT",
              value: "$4.20K",
              iconKey: "",
            },
          ],
          insight: "Current accrual supports a strong pace toward the next rebate tier.",
          recommendation: "Increase eligible contract volume to lift next-tier earnings potential.",
        },
      ],
      purchasingKpis: [
        {
          id: "netPurchases",
          title: "Net Purchases",
          titleInfo: "Net purchase volume for the current purchasing period.",
          status: "On Track",
          period: "MTD (14 DAYS LEFT)",
          headlineValue: "$298,940.10",
          metrics: [
            {
              label: "NET PURCHASES",
              value: "$298,940.10",
              iconKey: "badge-dollar",
            },
          ],
          insight:
            "Monthly purchasing is tracking above target and remains well aligned to the preferred supplier mix.",
          recommendation:
            "Protect the current vendor mix to maintain margin improvement through the remainder of the cycle.",
        },
        {
          id: "serviceLevel",
          title: "Service Level",
          titleInfo: "Current service level performance across the ordered purchasing volume.",
          status: "On Track",
          period: "ROLLING 30 DAYS",
          headlineValue: "94.80%",
          metrics: [
            {
              label: "SERVICE LEVEL",
              value: "94.80%",
              iconKey: "box",
            },
          ],
          insight:
            "Service level is steady at 94.80%, with minimal disruption from fulfillment changes across the last month.",
          recommendation:
            "Maintain vendor performance reviews to keep service-level gains consistent.",
        },
        {
          id: "returnCreditRate",
          title: "Return & Credit %",
          titleInfo: "Return and credit rate for the purchasing cycle.",
          status: "On Track",
          period: "MTD",
          headlineValue: "0.31%",
          metrics: [
            {
              label: "RETURN & CREDIT",
              value: "0.31%",
              iconKey: "return",
            },
          ],
          insight:
            "Return & credit activity remains low and supports a healthy purchasing environment.",
          recommendation:
            "Continue the current process for supplier exception handling and return review.",
        },
      ],
    },
  ],
};
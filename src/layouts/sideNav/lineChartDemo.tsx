import { LineChart } from "@/components/ui/LineChart";
import type { ChartConfig } from "@/components/ui/chart";

const data = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const browsers = [
  { browser: "Chrome", visitors: 275, fill: "#2563eb" },
  { browser: "Safari", visitors: 200, fill: "#e07600" },
  { browser: "Firefox", visitors: 187, fill: "#0d9488" },
  { browser: "Edge", visitors: 173, fill: "#9333ea" },
  { browser: "Other", visitors: 90, fill: "#1e3a8a" },
];

const config = {
  desktop: { label: "Desktop", color: "#2563eb" },
  mobile: { label: "Mobile", color: "#e07600" },
} satisfies ChartConfig;

const browserConfig = {
  visitors: { label: "Visitors", color: "#e07600" },
} satisfies ChartConfig;

const shortMonth = (value: string) => value.slice(0, 3);

const LineChartDemo = () => (
  <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
    <LineChart
      title="Default"
      data={data}
      config={config}
      dataKey="desktop"
      xAxisKey="month"
      xAxisTickFormatter={shortMonth}
    />

    <LineChart
      title="Linear"
      data={data}
      config={config}
      dataKey="desktop"
      xAxisKey="month"
      curve="linear"
      xAxisTickFormatter={shortMonth}
    />

    <LineChart
      title="Step"
      data={data}
      config={config}
      dataKey="desktop"
      xAxisKey="month"
      curve="step"
      xAxisTickFormatter={shortMonth}
    />

    <LineChart
      title="Multiple"
      data={data}
      config={config}
      dataKey={["desktop", "mobile"]}
      xAxisKey="month"
      showLegend
      xAxisTickFormatter={shortMonth}
    />

    <LineChart
      title="Dots"
      data={data}
      config={config}
      dataKey="desktop"
      xAxisKey="month"
      dots="default"
      xAxisTickFormatter={shortMonth}
    />

    <LineChart
      title="Custom dots"
      data={data}
      config={config}
      dataKey="desktop"
      xAxisKey="month"
      dots="custom"
      xAxisTickFormatter={shortMonth}
    />

    <LineChart
      title="Dots colors"
      data={browsers}
      config={browserConfig}
      dataKey="visitors"
      xAxisKey="browser"
      curve="monotone"
      dots="colored"
    />

    <LineChart
      title="Label"
      data={data}
      config={config}
      dataKey="desktop"
      xAxisKey="month"
      dots="default"
      label
      xAxisTickFormatter={shortMonth}
    />

    <LineChart
      title="Custom label"
      data={browsers}
      config={browserConfig}
      dataKey="visitors"
      xAxisKey="browser"
      curve="monotone"
      dots="colored"
      label="browser"
    />
  </div>
);

export default LineChartDemo;

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";
import type { ChartConfig } from ".//ui/chart";
import { Button } from "./ui/Button";


export default function BarChartDemo() {

    const chartConfig = {
        value: {
            label: "Rebate",
            color: "#16a34a"
        }
    } satisfies ChartConfig;

    // Comprehensive 18-month timeline data from Jan-2026 to Jun-2027
    const data = [
        { name: 'Jan-2026', value: 1200 },
        { name: 'Feb-2026', value: 1900 },
        { name: 'Mar-2026', value: 3000 },
        { name: 'Apr-2026', value: 4000 },
        { name: 'May-2026', value: 4500 },
        { name: 'Jun-2026', value: 5500 },
    ];

    return (
        <div className="w-full">
            <Button variant="outline" onClick={() => alert('Button clicked!')}>Click Me</Button>
            <div>
                <h2 className="py-2 mb-5 text-center">Rebate Performance Trend</h2>
            </div>
            <ChartContainer config={chartConfig} className="h-[400px] w-full">
                <BarChart accessibilityLayer data={data}>
                    <CartesianGrid vertical={false} />

                    <XAxis
                        dataKey="name"
                        tickLine={false}
                        axisLine={false}
                    />

                    <YAxis
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `${value / 1000}k`}
                    />

                    <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

                    <Bar dataKey="value" fill="#16a34a" radius={[4, 4, 0, 0]} barSize={70} />

                </BarChart>
            </ChartContainer>
        </div>
    )
}
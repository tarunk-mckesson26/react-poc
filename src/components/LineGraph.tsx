import { Area, AreaChart, CartesianGrid, XAxis, } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";
import type { ChartConfig } from "./ui/chart";


const LineGraphDemo = () => {

    const chartConfig = {
        value: {
            label: "Savings",
            color: "#16a34a"
        }
    } satisfies ChartConfig;

    const data = [
        { quarter: "Q4-2026", value: 31100 },
        { quarter: "Q1-2027", value: 33500 },
        { quarter: "Q2-2027", value: 38750 },
        { quarter: "Q3-2027", value: 42850 },
    ];

    return (
        <div className="w-full">

            <ChartContainer config={chartConfig} className="h-[400px] w-full">
                <AreaChart accessibilityLayer data={data}>

                    <defs>
                        <linearGradient id="savingsGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#16a34a" stopOpacity={0.25} />
                            <stop offset="45%" stopColor="#16a34a" stopOpacity={0.10} />
                            <stop offset="100%" stopColor="#16a34a" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid vertical={false} />

                    <XAxis
                        dataKey="quarter"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={10}
                        padding={{left: 20, right: 20}}
                    />

                    <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

                    <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#16a34a"
                        strokeWidth={3}
                        fill="url(#savingsGradient)"
                        dot={{ r: 5, fill: "#22C55E" }}
                        activeDot={{ r: 6 }}
                    />

                </AreaChart>
            </ChartContainer>
        </div>
    )
}

export default LineGraphDemo;
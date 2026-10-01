import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";
import type { ChartConfig } from ".//ui/chart";
import { Button } from "./ui/Button";
import { TooltipComponent } from "./ui/Tooltip";
import { PaginationComponent } from "./ui/Pagination";
import { AccordionComponent } from "./ui/Accordion";
import { LineGraph } from "./ui/LineGraph";
import { useState } from "react";
import CircleArrowLeft from "@/assets/CircleArrowLeft.svg";
import type { AccordionItemData } from "./ui/Accordion";

const BarChartDemo = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [accordionValue, setAccordionValue] = useState<string | string[]>("faq-1");
    const [selectedDot, setSelectedDot] = useState<string | null>(null);

    const chartConfig = {
        value: {
            label: "Rebate",
            color: "#16a34a"
        }
    } satisfies ChartConfig;

    // Example accordion items for FAQ section
    const faqItems: AccordionItemData[] = [
        {
            value: "faq-1",
            title: "How is rebate calculated?",
            content: "Rebates are calculated based on the total monthly purchases and the applicable rebate tier for your account.",
        },
        {
            value: "faq-2",
            title: "When are rebates processed?",
            content: "Rebates are processed at the end of each month and credited to your account within 5 business days.",
        },
        {
            value: "faq-3",
            title: "Can rebates be transferred?",
            content: "No, rebates are account-specific and cannot be transferred to other accounts.",
            disabled: true,
        },
        {
            value: "faq-4",
            title: "What is the rebate rate?",
            content: "The rebate rate varies from 2% to 8% depending on your tier and purchase volume.",
        },
    ];

    // Comprehensive 18-month timeline data from Jan-2026 to Jun-2027
    const data = [
        { name: 'Jan-2026', value: 1200 },
        { name: 'Feb-2026', value: 1900 },
        { name: 'Mar-2026', value: 3000 },
        { name: 'Apr-2026', value: 4000 },
        { name: 'May-2026', value: 4500 },
        { name: 'Jun-2026', value: 5500 },
    ];

    // LineGraph example data - quarterly savings trend
    const lineGraphData = [
        { quarter: "Q4-2026", savings: 31100 },
        { quarter: "Q1-2027", savings: 33500 },
        { quarter: "Q2-2027", savings: 38750 },
        { quarter: "Q3-2027", savings: 42850 },
    ];

    const lineGraphConfig = {
        savings: {
            label: "Savings",
            color: "#16a34a"
        }
    } satisfies ChartConfig;

    return (
        <div className="w-full">

            {/* <div className="flex gap-x-5">
                <Button size="xs">Click Me</Button>
                <Button size="xs" disabled>Disabled</Button>
                <Button size="xs" data-loading="true">Loading</Button>
            </div>
            <div className="flex gap-x-5">
                <Button>Click Me</Button>
                <Button disabled>Disabled</Button>
                <Button data-loading="true">Loading</Button>
            </div>
            <div className="flex gap-x-5">
                <Button size="sm">Click Me</Button>
                <Button size="sm" disabled>Disabled</Button>
                <Button size="sm" data-loading="true">Loading</Button>
            </div>
            <div className="flex gap-x-5">
                <Button size="lg">Click Me</Button>
                <Button size="lg" disabled>Disabled</Button>
                <Button size="lg" data-loading="true">Loading</Button>
            </div>

            <div className="flex gap-x-5">
                <Button size="icon"><img src={CircleArrowLeft} alt="icon" /></Button>
                <Button size="icon-xs" data-loading="true"><img src={CircleArrowLeft} alt="icon" /></Button>
                <Button size="icon-sm"><img src={CircleArrowLeft} alt="icon" /></Button>
                <Button size="icon-lg" data-loading="true"><img src={CircleArrowLeft} alt="icon" /></Button>
            </div>

            <div className="flex gap-x-5">
                <Button variant="secondary">Click Me</Button>
                <Button variant="secondary" disabled>Disabled</Button>
                <Button variant="secondary" data-loading="true">Loading</Button>
            </div>

            <div className="flex gap-x-5">
                <Button variant="destructive">Click Me</Button>
                <Button variant="destructive" disabled>Disabled</Button>
                <Button variant="destructive" data-loading="true">Loading</Button>
            </div>

            <div className="flex gap-x-5">
                <Button variant="tertiary">Click Me</Button>
                <Button variant="tertiary" disabled>Disabled</Button>
                <Button variant="tertiary" data-loading="true">Loading</Button>
            </div>

            <div className="flex gap-x-5">
                <Button variant="ghost">Click Me</Button>
                <Button variant="ghost" disabled>Disabled</Button>
                <Button variant="ghost" data-loading="true">Loading</Button>
            </div>

            <div className="flex gap-x-5">
                <Button variant="link">Click Me</Button>
                <Button variant="link" disabled>Disabled</Button>
                <Button variant="link" data-loading="true">Loading</Button>
            </div> */}




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
            <div className="flex gap-x-4">
                <TooltipComponent
                    trigger="Help"
                    content="Information here"
                />
                <TooltipComponent
                    side="right"
                    trigger="right tooltip"
                    content="Information here"
                />
                <TooltipComponent
                    size="lg"
                    side="right"
                    trigger="big tooltip"
                    content="Information here"
                />
            </div>

            {/* Pagination Example - Controlled Component */}
            <div className="mt-8 mb-8">
                <h3 className="text-sm font-semibold mb-4">Pagination Example (Page {currentPage}/10)</h3>
                <PaginationComponent
                    totalItems={100}
                    itemsPerPage={10}
                    currentPage={currentPage}
                    onPageChange={(page) => {
                        setCurrentPage(page);
                        console.log(`Navigated to page ${page}`);
                    }}
                    onNext={(page) => console.log(`Next clicked -> page ${page}`)}
                    onPrevious={(page) => console.log(`Previous clicked -> page ${page}`)}
                    siblingCount={1}
                    hideOnSinglePage={false}
                />
            </div>

            {/* Accordion Example - Single Collapsible */}
            <div className="mt-8 mb-8">
                <h3 className="text-sm font-semibold mb-4">FAQ Section (Single Open)</h3>
                <AccordionComponent
                    type="single"
                    collapsible
                    value={accordionValue as string}
                    onValueChange={(value) => {
                        setAccordionValue(value);
                        console.log(`Accordion opened: ${value}`);
                    }}
                    items={faqItems}
                />
            </div>

            {/* Accordion Example - Multiple Open */}
            <div className="mt-8 mb-8">
                <h3 className="text-sm font-semibold mb-4">Settings Section (Multiple Open)</h3>
                <AccordionComponent
                    type="multiple"
                    items={[
                        {
                            value: "settings-general",
                            title: "General Settings",
                            content: (
                                <div className="space-y-2">
                                    <p>Account name: Acme Corp</p>
                                    <p>Email: contact@acme.com</p>
                                    <p>Region: North America</p>
                                </div>
                            ),
                        },
                        {
                            value: "settings-billing",
                            title: "Billing Settings",
                            content: (
                                <div className="space-y-2">
                                    <p>Billing cycle: Monthly</p>
                                    <p>Payment method: Credit Card</p>
                                    <p>Next billing date: Oct 1, 2026</p>
                                </div>
                            ),
                        },
                        {
                            value: "settings-notifications",
                            title: "Notification Preferences",
                            content: (
                                <div className="space-y-2">
                                    <p>Email alerts: Enabled</p>
                                    <p>SMS notifications: Disabled</p>
                                    <p>Weekly digest: Enabled</p>
                                </div>
                            ),
                        },
                    ]}
                    defaultValue={["settings-general"]}
                />
            </div>

            {/* LineGraph Example - Area Chart */}
            <div className="mt-8">
                <LineGraph
                    title="Quarterly Savings Trend"
                    data={lineGraphData}
                    config={lineGraphConfig}
                    dataKey="savings"
                    xAxisKey="quarter"
                    color="#16a34a"
                    showDots
                    onDotClick={(data) => {
                        setSelectedDot(`${data.quarter}: $${data.savings}`);
                        console.log("Dot clicked:", data);
                    }}
                />
                {selectedDot && (
                    <p className="text-xs text-muted-foreground mt-2">Selected: {selectedDot}</p>
                )}
            </div>
        </div>
    )
}

export default BarChartDemo;
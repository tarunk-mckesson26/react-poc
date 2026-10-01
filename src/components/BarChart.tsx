import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";
import type { ChartConfig } from ".//ui/chart";
import { Button } from "./ui/Button";
import { TooltipComponent } from "./ui/Tooltip";
import { PaginationComponent } from "./ui/Pagination";
import { AccordionComponent } from "./ui/Accordion";
import { useState } from "react";
import type { AccordionItemData } from "./ui/Accordion";

const BarChartDemo = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [accordionValue, setAccordionValue] = useState<string | string[]>("faq-1");

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
            <div className="mt-8">
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
        </div>
    )
}

export default BarChartDemo;
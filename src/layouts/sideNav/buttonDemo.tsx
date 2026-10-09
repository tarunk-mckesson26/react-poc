import { Button } from "@/components/ui/Button";
import { FileChartPie } from "lucide-react";

const ButtonDemo = () => {
    return (
        <div className="flex flex-col gap-y-2">
            <div className="flex gap-x-5">
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
                <Button size="icon"><FileChartPie /></Button>
                <Button size="icon-xs" data-loading="true"><FileChartPie /></Button>
                <Button size="icon-sm"><FileChartPie /></Button>
                <Button size="icon-lg" data-loading="true"><FileChartPie /></Button>
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
            </div>

        </div>
    )
}

export default ButtonDemo
import { TooltipComponent } from "@/components/ui/Tooltip";

const TooltipDemo = () => (
  <div className="flex gap-x-4">
    <TooltipComponent trigger="Top tooltip" content="Lorem Ipsum" />
    <TooltipComponent side="right" trigger="Right tooltip" content="Lorem Ipsum" />
    <TooltipComponent side="left" trigger="Left tooltip" content="Lorem Ipsum" />
    <TooltipComponent
      side="bottom"
      trigger="Bottom tooltip"
      content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived many decades and remains essentially unchanged."
    />
  </div>
);

export default TooltipDemo;
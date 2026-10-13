import { Info } from "lucide-react";
import { TooltipComponent } from "@/components/ui/Tooltip";

const longContent =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived many decades and remains essentially unchanged.";

const TooltipDemo = () => (
  <div className="flex flex-col gap-y-6">
    <div className="flex gap-x-4">
      <TooltipComponent trigger="Top tooltip" content="Lorem Ipsum" />
      <TooltipComponent side="right" trigger="Right tooltip" content="Lorem Ipsum" />
      <TooltipComponent side="bottom" trigger="Bottom tooltip" content="Lorem Ipsum" />
      <TooltipComponent side="left" trigger="Left tooltip" content="Lorem Ipsum" />
    </div>

    <div className="flex gap-x-4">
      <TooltipComponent trigger="Large content" content={longContent} />
      <TooltipComponent
        trigger="Rich content"
        content={
          <span className="flex items-center gap-1.5">
            <Info className="size-3.5" />
            With an icon
          </span>
        }
      />
    </div>
  </div>
);

export default TooltipDemo;
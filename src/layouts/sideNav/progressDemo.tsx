import { Progress } from "@/components/ui/Progress";
import DemoRow from "./demoRow";

const ProgressDemo = () => (
  <DemoRow>
    <Progress percent="100%" valueLabel="100%" aria-label="Progress, 100 percent" />
    <Progress percent="75%" valueLabel="75%" aria-label="Progress, 75 percent" />
    <Progress percent="50%" valueLabel="50%" aria-label="Progress, 50 percent" />
    <Progress percent="25%" valueLabel="25%" aria-label="Progress, 25 percent" />
    <Progress percent="0%" valueLabel="0%" aria-label="Progress, 0 percent" />
    <Progress value={62.5} valueLabel="62.5%" aria-label="Dynamic progress" />
  </DemoRow>
);

export default ProgressDemo;
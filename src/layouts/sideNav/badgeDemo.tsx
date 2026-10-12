import { Badge } from "@/components/ui/Badge";
import DemoRow from "./demoRow";

const BadgeDemo = () => (
  <DemoRow>
    <section className="flex flex-col items-start gap-4">
      <h2 className="text-sm font-medium">Large</h2>
      <Badge variant="default" size="lg">Default</Badge>
      <Badge variant="secondary" size="lg">Secondary</Badge>
      <Badge variant="outline" size="lg">Outline</Badge>
      <Badge variant="destructive" size="lg">Destructive</Badge>
      <Badge variant="ghost" size="lg">Ghost</Badge>
    </section>
    <section className="flex flex-col items-start gap-4">
      <h2 className="text-sm font-medium">Default</h2>
      <Badge variant="default" size="default">Default</Badge>
      <Badge variant="secondary" size="default">Secondary</Badge>
      <Badge variant="outline" size="default">Outline</Badge>
      <Badge variant="destructive" size="default">Destructive</Badge>
      <Badge variant="ghost" size="default">Ghost</Badge>
    </section>
    <section className="flex flex-col items-start gap-4">
      <h2 className="text-sm font-medium">Badge Number</h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col items-start gap-4">
          <Badge number variant="default" size="default">1</Badge>
          <Badge number variant="secondary" size="default">2</Badge>
          <Badge number variant="outline" size="default">3</Badge>
          <Badge number variant="destructive" size="default">4</Badge>
          <Badge number variant="ghost" size="default">5</Badge>
        </div>
      </div>
    </section>
  </DemoRow>
);

export default BadgeDemo;
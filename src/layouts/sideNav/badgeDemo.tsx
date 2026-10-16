import { Badge } from "@/components/ui/Badge";
import { BadgeCheck } from "lucide-react";

const variants = [
  { name: "Default", variant: "default" },
  { name: "Secondary", variant: "secondary" },
  { name: "Outline", variant: "outline" },
  { name: "Destructive", variant: "destructive" },
  { name: "Ghost", variant: "ghost" },
] as const;

const cellClassName = "border-[1px] border-border px-4 py-3";
const headerClassName = `${cellClassName} text-left font-medium`;

const BadgeDemo = () => (
  <div className="w-full overflow-x-auto">
    <table className="w-full min-w-[560px] border-collapse border-[1px] border-border text-sm">
      <thead>
        <tr>
          <th scope="col" className={headerClassName}>
            Variant
          </th>
          <th scope="col" className={headerClassName}>
            Large
          </th>
          <th scope="col" className={headerClassName}>
            Default
          </th>
          <th scope="col" className={headerClassName}>
            Badge Icon
          </th>
          <th scope="col" className={headerClassName}>
            Badge Number
          </th>
        </tr>
      </thead>
      <tbody>
        {variants.map(({ name, variant }, index) => (
          <tr key={variant}>
            <th scope="row" className={headerClassName}>
              {name}
            </th>
            <td className={cellClassName}>
              <Badge variant={variant} size="lg">
                Badge
              </Badge>
            </td>
            <td className={cellClassName}>
              <Badge variant={variant}>Badge</Badge>
            </td>
            <td className={cellClassName}>
              <Badge variant={variant} className="gap-0.5">
                Badge <BadgeCheck size={10} />
              </Badge>
            </td>
            <td className={cellClassName}>
              <Badge number variant={variant}>
                {index + 1}
              </Badge>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default BadgeDemo;

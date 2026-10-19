import { Alert } from "@/components/ui/Alert";
import {
  BellRingIcon,
  CircleCheck,
  InfoIcon,
  TriangleAlert,
} from "lucide-react";

const alerts = [
  { name: "Info", variant: "info", icon: BellRingIcon, close: true },
  { name: "Alert", variant: "alert", icon: TriangleAlert, close: false },
  { name: "Error", variant: "error", icon: InfoIcon, close: true },
  { name: "Success", variant: "success", icon: CircleCheck, close: false },
  {
    name: "Success Strong",
    variant: "success-strong",
    icon: CircleCheck,
    close: true,
  },
] as const;

const cellClassName = "border-[1px] border-border px-4 py-3";
const headerClassName = `${cellClassName} text-left font-medium`;

const AlertDemo = () => (
  <div className="w-full overflow-x-auto">
    <table className="w-full min-w-[560px] border-collapse border-[1px] border-border text-sm">
      <thead>
        <tr>
          <th scope="col" className={headerClassName}>
            Variant
          </th>
          <th scope="col" className={headerClassName}>
            Alert
          </th>
        </tr>
      </thead>
      <tbody>
        {alerts.map(({ name, variant, icon: Icon, close }) => (
          <tr key={variant}>
            <th scope="row" className={headerClassName}>
              {name}
            </th>
            <td className={cellClassName}>
              <Alert variant={variant} Close={close}>
                <Icon />
                <Alert name="title">Alert Title</Alert>
                <Alert name="description">This is an alert description.</Alert>
              </Alert>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default AlertDemo;

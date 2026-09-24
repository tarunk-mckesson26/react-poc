import type { FC } from "react";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { InfoIcon } from "lucide-react";

type AlertBarProps = {
  title: string;
  heading: string;
  description: string;
  className?: string;
};

const AlertBar: FC<AlertBarProps> = ({
  title,
  heading,
  description,
  className = "",
}) => {
  return (
    <div className="w-full">
      <Alert className={`flex gap-2.5 bg-sky-600 ${className}`.trim()}>
        <div className="flex items-center text-white">
          <InfoIcon />
        </div>
        <div>
          <AlertTitle className="text-white">{title}</AlertTitle>
          <AlertDescription className="text-lg font-bold text-white">
            {heading}
          </AlertDescription>
          <div className="text-xs text-white">{description}</div>
        </div>
      </Alert>
    </div>
  );
};

export default AlertBar;

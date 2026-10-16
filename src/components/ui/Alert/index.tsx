import { useState } from "react";
import { XIcon } from "lucide-react";
import { clsx } from "@/lib/clsx";
import {
  alertCloseButtonStyles,
  alertPartStyles,
  alertVariants,
} from "./style";
import { type AlertProps } from "./type";

const Alert = ({
  name = "root",
  className,
  variant = "default",
  Close = false,
  children,
  ...props
}: AlertProps) => {
  const [isDismissed, setIsDismissed] = useState(false);
  const isRoot = name === "root";

  if (isRoot && isDismissed) return null;

  return (
    <div
      data-slot={isRoot ? "alert" : `alert-${name}`}
      data-variant={isRoot ? variant : undefined}
      role={isRoot ? "alert" : undefined}
      className={clsx(
        isRoot ? alertVariants({ variant }) : alertPartStyles[name],
        className,
      )}
      {...props}
    >
      {children}
      {isRoot && Close && (
        <button
          type="button"
          data-slot="alert-action"
          aria-label="Close alert"
          className={alertCloseButtonStyles}
          onClick={() => setIsDismissed(true)}
        >
          <XIcon size={16} aria-hidden="true" />
        </button>
      )}
    </div>
  );
};

export { Alert, alertVariants };
export type { AlertName, AlertProps } from "./type";

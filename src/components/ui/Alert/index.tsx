import { clsx } from "@/lib/clsx";
import {
  alertActionStyles,
  alertDescriptionStyles,
  alertTitleStyles,
  alertVariants,
} from "./style";
import { type AlertProps } from "./type";

const alertPartStyles = {
  title: alertTitleStyles,
  description: alertDescriptionStyles,
  action: alertActionStyles,
};

const Alert = ({
  name = "root",
  className,
  variant = "default",
  ...props
}: AlertProps) => {
  const isRoot = name === "root";
  const styles =
    name === "root"
      ? alertVariants({ variant, className })
      : clsx(alertPartStyles[name], className);

  return (
    <div
      data-slot={isRoot ? "alert" : `alert-${name}`}
      data-variant={isRoot ? variant : undefined}
      role={isRoot ? "alert" : undefined}
      className={clsx(styles)}
      {...props}
    />
  );
};

export { Alert, alertVariants };
export type { AlertName, AlertProps } from "./type";

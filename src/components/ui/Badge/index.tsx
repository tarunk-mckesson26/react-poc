import { clsx } from "@/lib/clsx";
import { Slot } from "radix-ui";
import { badgeNumberStyles, badgeVariants } from "./style";
import { type BadgeProps } from "./type";

const Badge = ({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  number = false,
  tabIndex = 0,
  children,
  ...props
}: BadgeProps) => {
  const Comp = asChild ? Slot.Root : "span";

  return (
    <Comp
      data-slot={number ? "badge-number" : "badge"}
      data-variant={variant}
      data-size={size}
      tabIndex={tabIndex}
      className={clsx(
        badgeVariants({ variant, size }),
        number && badgeNumberStyles,
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
};

export { Badge, badgeVariants };
export type { BadgeProps };

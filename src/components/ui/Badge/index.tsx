import { Slot } from "radix-ui";
import { clsx } from "@/lib/clsx";
import { badgeVariants } from "./style";
import type { BadgeProps } from "./type";

function Badge({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  tabIndex = 0,
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot.Root : "span";

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      data-size={size}
      tabIndex={tabIndex}
      className={clsx(badgeVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
export type { BadgeProps };

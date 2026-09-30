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

function BadgeNumber({
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
      data-slot="badge-number"
      data-variant={variant}
      data-size={size}
      tabIndex={tabIndex}
      className={clsx(
        badgeVariants({ variant, size }),
        "h-5 min-w-5 rounded-full px-1 font-sans font-medium not-italic text-xs leading-4 tracking-normal text-center",
        className,
      )}
      {...props}
    />
  );
}

export { Badge, BadgeNumber, badgeVariants };
export type { BadgeProps };

import { Slot } from "radix-ui";
import { clsx } from "@/lib/clsx";
import { badgeVariants } from "./style";
import type { BadgeProps } from "./type";

function Badge({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  number = false,
  tabIndex = 0,
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot.Root : "span";

  return (
    <Comp
      data-slot={number ? "badge-number" : "badge"}
      data-variant={variant}
      data-size={size}
      tabIndex={tabIndex}
      className={clsx(
        badgeVariants({ variant, size }),
        number &&
          "h-5 min-w-5 rounded-full px-1 font-sans font-medium not-italic text-xs leading-4 tracking-normal text-center",
        className,
      )}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
export type { BadgeProps };

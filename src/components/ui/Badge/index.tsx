import { Slot } from "radix-ui"
import { clsx } from "@/lib/clsx"
import { badgeVariants } from "./style"
import type { BadgeProps } from "./type"

function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={clsx(badgeVariants({ variant, className }))}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
export type { BadgeProps }
import { clsx } from "@/lib/clsx"
import { Slot } from "radix-ui"
import { buttonVariants } from "./style"
import { type ButtonProps } from "./type"

/**
 * Button component - inspired by shadcn/ui but customized for our design system
 * 
 * Key features:
 * - Uses Radix UI's Slot component to support polymorphism (render as different elements)
 * - Combines native button props with CVA-based style variants
 * - asChild prop allows rendering button styles on any element (link, span, etc.)
 */
const Button = ({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: ButtonProps
) => {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={clsx(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )

}

export { Button, buttonVariants }

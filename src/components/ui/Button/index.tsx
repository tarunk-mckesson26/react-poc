import { clsx } from "@/lib/clsx"
import { Slot } from "radix-ui"
import { buttonVariants } from "./style"
import { type ButtonProps } from "./type"
import { Spinner } from "../spinner"

/**
 * Button component - inspired by shadcn/ui but customized for our design system
 *
 * Key features:
 * - Uses Radix UI's Slot component to support polymorphism (render as different elements)
 * - Combines native button props with CVA-based style variants
 * - asChild prop allows rendering button styles on any element (link, span, etc.)
 * - When `data-loading="true"`, a Spinner is rendered before the label and any
 *   other svg/img children are hidden via style.ts.
 */
const Button = ({
  className,
  variant = "primary",
  size = "default",
  asChild = false,
  children,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot.Root : "button"
  const isLoading = props["data-loading"] === true || props["data-loading"] === "true"
  const isIconSize = typeof size === "string" && size.startsWith("icon")
  const spinnerSize = size === "icon-xs" ? "size-3" : "size-4"
  const gapClass = size === "xs" || size === "sm" ? "gap-1" : "gap-1.5"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={clsx(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {isLoading && !asChild ? (
        isIconSize ? (
          <Spinner className={spinnerSize} />
        ) : (
          <span className={clsx("inline-flex items-center", gapClass)}>
            <Spinner data-icon="inline-start" className={spinnerSize} />
            {children}
          </span>
        )
      ) : (
        children
      )}
    </Comp>
  )
}

export { Button, buttonVariants }

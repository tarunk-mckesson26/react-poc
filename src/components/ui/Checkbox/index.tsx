import { Checkbox as CheckboxPrimitive } from "radix-ui"
import { Check } from "lucide-react"
import { clsx } from "@/lib/clsx"
import {
    checkboxContainerVariants,
    checkboxDescriptionVariants,
    checkboxIndicatorVariants,
    checkboxLabelVariants,
} from "./style"
import type { CheckboxProps } from "./type"

/**
 * Checkbox component - shadcn/ui style, built on Radix's Checkbox primitive.
 *
 * Key features:
 * - Radix handles ARIA, keyboard toggling, and data-state automatically
 * - Checked/invalid visuals are pure CSS (data-state / aria-invalid selectors)
 * - variant="card" switches to the bordered, selectable card layout
 */
const Checkbox = ({
  className,
  variant = "default",
  size = "default",
  label,
  description,
  error,
  invalid,
  icon = <Check className="h-3 w-3" />,
  containerClassName,
  labelClassName,
  descriptionClassName,
  ...props
}: CheckboxProps) => {
  const hasError = Boolean(error) || invalid

  return (
    <label
      data-slot="checkbox"
      data-variant={variant}
      className={clsx(checkboxContainerVariants({ variant }), containerClassName)}
    >
      <CheckboxPrimitive.Root
        data-slot="checkbox-indicator"
        aria-invalid={hasError}
        className={clsx("peer", checkboxIndicatorVariants({ size }), className)}
        {...props}
      >
        <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current">
          {icon}
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>

      {(label || description) && (
        <span className="flex min-w-0 flex-1 flex-col gap-1">
          {label ? (
            <span className={clsx(checkboxLabelVariants, labelClassName)}>{label}</span>
          ) : null}

          {description ? (
            <span className={clsx(checkboxDescriptionVariants, descriptionClassName)}>
              {description}
            </span>
          ) : null}

          {hasError && typeof error === "string" ? (
            <span className="text-xs text-red-600">{error}</span>
          ) : null}
        </span>
      )}
    </label>
  )
}

export { Checkbox, checkboxContainerVariants, checkboxIndicatorVariants }


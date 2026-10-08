import { Switch as SwitchPrimitive } from "radix-ui"
import { clsx } from "@/lib/clsx"
import {
  switchContainerVariants,
  switchDescriptionVariants,
  switchLabelVariants,
  switchThumbVariants,
  switchTrackVariants,
} from "./style"
import type { SwitchProps } from "./type"

/**
 * Switch component - shadcn/ui style, built on Radix's Switch primitive.
 *
 * Key features:
 * - Radix handles ARIA (role="switch", keyboard toggling, data-state) automatically
 * - Checked/invalid visuals are pure CSS (data-state / aria-invalid selectors)
 * - variant="card" switches to the bordered, selectable card layout
 * - align="end" places the switch after the label/description (settings-row style)
 */
const Switch = ({
  className,
  variant = "default",
  size = "default",
  align = "start",
  label,
  description,
  error,
  invalid,
  containerClassName,
  labelClassName,
  descriptionClassName,
  ...props
}: SwitchProps) => {
  const hasError = Boolean(error) || invalid

  return (
    <label
      data-slot="switch"
      data-variant={variant}
      className={clsx(switchContainerVariants({ variant, align }), containerClassName)}
    >
      <SwitchPrimitive.Root
        data-slot="switch-control"
        aria-invalid={hasError}
        className={clsx(align === "end" ? "order-2" : "order-1", switchTrackVariants({ size }), className)}
        {...props}
      >
        <SwitchPrimitive.Thumb data-slot="switch-thumb" className={switchThumbVariants({ size })} />
      </SwitchPrimitive.Root>

      {(label || description) && (
        <span
          className={clsx(
            "flex min-w-0 flex-1 flex-col gap-1",
            align === "end" ? "order-1" : "order-2"
          )}
        >
          {label ? (
            <span className={clsx(switchLabelVariants, labelClassName)}>{label}</span>
          ) : null}

          {description ? (
            <span className={clsx(switchDescriptionVariants, descriptionClassName)}>
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

export { Switch, switchContainerVariants, switchTrackVariants }

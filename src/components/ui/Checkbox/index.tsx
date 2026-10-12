import { Check } from "lucide-react"
import { clsx } from "@/lib/clsx"
import {
    checkboxContainerVariants,
    checkboxDescriptionVariants,
    checkboxIndicatorVariants,
    checkboxLabelVariants,
} from "./style"
import type { CheckboxProps } from "./type"

const Checkbox = ({
  className,
  variant = "default",
  size = "default",
  align = "start",
  label,
  description,
  error,
  invalid,
  icon = <Check className="h-3 w-3" />,
  containerClassName,
  labelClassName,
  descriptionClassName,
  onCheckedChange,
  onChange,
  ...props
}: CheckboxProps) => {
  const hasError = Boolean(error) || invalid

  return (
    <label
      data-slot="checkbox"
      data-variant={variant}
      aria-invalid={hasError}
      className={clsx("group", checkboxContainerVariants({ variant, align }), containerClassName)}
    >
      <span className={clsx("relative mt-0.5 flex shrink-0", align === "end" ? "order-2" : "order-1")}>
        <input
          {...props}
          type="checkbox"
          data-slot="checkbox-indicator"
          aria-invalid={hasError}
          className={clsx(
            "peer",
            align === "end" ? "order-2" : "order-1",
            checkboxIndicatorVariants({ size }),
            className
          )}
          onChange={(event) => {
            onChange?.(event)
            onCheckedChange?.(event.currentTarget.checked)
          }}
        />
        <span aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 hidden items-center justify-center text-white peer-checked:flex">
          {icon}
        </span>
      </span>

      {(label || description) && (
        <span
          className={clsx(
            "flex min-w-0 flex-1 flex-col gap-1.5",
            align === "end" ? "order-1" : "order-2"
          )}
        >
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

export { Checkbox }


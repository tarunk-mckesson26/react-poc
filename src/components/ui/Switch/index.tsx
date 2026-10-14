import { useId } from "react"
import { clsx } from "@/lib/clsx"
import {
  switchContainerVariants,
  switchControlVariants,
  switchDescriptionVariants,
  switchErrorStyles,
  switchLabelVariants,
  switchTextVariants,
  switchThumbVariants,
  switchTrackVariants,
} from "./style"
import { type SwitchProps } from "./type"

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
  state = "default",
  showLabel = true,
  showDescription = true,
  disabled,
  onChange,
  onCheckedChange,
  "aria-describedby": describedBy,
  "aria-labelledby": labelledBy,
  ...props
}: SwitchProps) => {
  const hasError = Boolean(error) || invalid || state === "invalid"
  const id = useId()
  const visibleLabel = showLabel && label
  const visibleDescription = showDescription && description
  const accessibleDescription = [describedBy, visibleDescription ? `${id}-description` : null, error ? `${id}-error` : null]
    .filter(Boolean).join(" ") || undefined

  return (
    <label
      data-slot="switch"
      data-variant={variant}
      data-size={size}
      data-state={state}
      aria-invalid={hasError}
      className={clsx(switchContainerVariants({ variant, size, align, className: containerClassName }))}
    >
      <span className={clsx(switchControlVariants({ align }))}>
        <input
          {...props}
          type="checkbox"
          role="switch"
          data-slot="switch-control"
          disabled={disabled || state === "disabled"}
          aria-invalid={hasError}
          aria-labelledby={labelledBy ?? (visibleLabel && !props["aria-label"] ? `${id}-label` : undefined)}
          aria-describedby={accessibleDescription}
          className={clsx(switchTrackVariants({ size, state, className }))}
          onChange={(event) => {
            onChange?.(event)
            onCheckedChange?.(event.currentTarget.checked)
          }}
        />
        <span aria-hidden="true" data-slot="switch-thumb" className={switchThumbVariants({ size })} />
      </span>

      {(visibleLabel || visibleDescription || error) && (
        <span className={clsx(switchTextVariants({ align }))}>
          {visibleLabel ? (
            <span id={`${id}-label`} className={clsx(switchLabelVariants, labelClassName)}>{label}</span>
          ) : null}

          {visibleDescription ? (
            <span id={`${id}-description`} className={clsx(switchDescriptionVariants, descriptionClassName)}>
              {description}
            </span>
          ) : null}

          {error ? (
            <span id={`${id}-error`} className={switchErrorStyles}>{error}</span>
          ) : null}
        </span>
      )}
    </label>
  )
}

export { Switch }

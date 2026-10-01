import { Progress as ProgressPrimitive } from "radix-ui"
import { clsx } from "@/lib/clsx"
import {
  progressCaptionVariants,
  progressIndicatorVariants,
  progressLabelVariants,
  progressTrackVariants,
  progressValueVariants,
} from "./style"
import type { ProgressProps } from "./type"

/**
 * Progress component - shadcn/ui style, built on Radix's Progress primitive.
 *
 * Key features:
 * - Radix handles ARIA (role="progressbar", aria-valuenow/max) automatically
 * - Pass value/max + optional label/valueLabel/caption from the caller
 * - variant switches the fill color, size switches the bar thickness
 */
const Progress = ({
  className,
  value = 0,
  max = 100,
  variant = "default",
  size = "default",
  label,
  valueLabel,
  headerLayout = "row",
  caption,
  getValueLabel = (v, m) => `${Math.round((v / m) * 100)}%`,
  trackClassName,
  indicatorClassName,
  labelClassName,
  valueLabelClassName,
  captionClassName,
  ...props
}: ProgressProps) => {
  const clamped = Math.min(Math.max(value, 0), max)
  const percentage = max > 0 ? (clamped / max) * 100 : 0

  return (
    <div data-slot="progress" className={clsx("flex w-full flex-col gap-2", className)}>
      {(label || valueLabel) && (
        <div
          className={clsx(
            "flex gap-x-3 gap-y-1",
            headerLayout === "stack" ? "flex-col" : "flex-wrap items-center justify-between"
          )}
        >
          {label ? (
            <span className={clsx(progressLabelVariants, labelClassName)}>{label}</span>
          ) : null}
          {valueLabel ? (
            <span className={clsx(progressValueVariants, valueLabelClassName)}>{valueLabel}</span>
          ) : null}
        </div>
      )}

      <ProgressPrimitive.Root
        data-slot="progress-track"
        value={clamped}
        max={max}
        getValueLabel={getValueLabel}
        className={clsx(progressTrackVariants({ size }), trackClassName)}
        {...props}
      >
        <ProgressPrimitive.Indicator
          data-slot="progress-indicator"
          className={clsx(progressIndicatorVariants({ variant }), indicatorClassName)}
          style={{ transform: `translateX(-${100 - percentage}%)` }}
        />
      </ProgressPrimitive.Root>

      {caption ? (
        <span className={clsx(progressCaptionVariants, captionClassName)}>{caption}</span>
      ) : null}
    </div>
  )
}

export { Progress, progressIndicatorVariants, progressTrackVariants }

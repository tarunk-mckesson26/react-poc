import { clsx } from "@/lib/clsx"
import {
  progressContainerStyles,
  progressIndicatorVariants,
  progressTrackVariants,
  progressValueStyles,
} from "./style"
import { type ProgressProps } from "./type"

const Progress = ({
  className,
  percent = "100%",
  size = "default",
  value,
  max = 100,
  valueLabel,
  ...props
}: ProgressProps) => {
  const validMax = Number.isFinite(max) && max > 0 ? max : 100
  const currentValue = value ?? (Number.parseFloat(percent ?? "100%") / 100) * validMax
  const clamped = max > 0 && Number.isFinite(currentValue)
    ? Math.min(Math.max(currentValue, 0), validMax)
    : 0
  const percentage = (clamped / validMax) * 100

  return (
    <div className={progressContainerStyles}>
      {valueLabel != null && (
        <span className={progressValueStyles}>{valueLabel}</span>
      )}
      <div
        data-slot="progress"
        data-size={size}
        role="progressbar"
        aria-valuemin={0}
        aria-valuenow={clamped}
        aria-valuemax={validMax}
        aria-valuetext={`${Math.round(percentage)}%`}
        className={clsx(progressTrackVariants({ size, className }))}
        {...props}
      >
        <div
          data-slot="progress-indicator"
          data-percent={percent}
          className={clsx(progressIndicatorVariants({ percent }))}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}

export { Progress }
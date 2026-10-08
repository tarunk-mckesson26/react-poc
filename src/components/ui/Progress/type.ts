import type * as React from "react"
import type { VariantProps } from "class-variance-authority"
import type { progressIndicatorVariants, progressTrackVariants } from "./style"

export interface ProgressProps
  extends React.ComponentProps<"div">,
  VariantProps<typeof progressTrackVariants>,
  VariantProps<typeof progressIndicatorVariants> {
  /** Overrides the percent preset for dynamic progress, clamped to 0-max. */
  value?: number
  max?: number
  valueLabel?: React.ReactNode
}

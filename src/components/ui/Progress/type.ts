import type * as React from "react"
import type { VariantProps } from "class-variance-authority"
import type { Progress as ProgressPrimitive } from "radix-ui"
import type { progressIndicatorVariants, progressTrackVariants } from "./style"

/**
 * Extends Radix's Progress.Root props (value/max/aria come for free).
 * variant/size are pulled from the CVA variants in style.ts, so they stay in sync automatically.
 */
export interface ProgressProps
  extends Omit<React.ComponentProps<typeof ProgressPrimitive.Root>, "value">,
    Pick<VariantProps<typeof progressIndicatorVariants>, "variant">,
    Pick<VariantProps<typeof progressTrackVariants>, "size"> {
  /** Current progress value, 0-max. @default 0 */
  value?: number
  /** Heading text on the left, e.g. "Tier 2 → Tier 3" or "PROGRESS". */
  label?: React.ReactNode
  /** Value text next to or under the label, e.g. "+$2,500 opportunity" or "84%". */
  valueLabel?: React.ReactNode
  /** "row" places valueLabel beside label, "stack" places it underneath. @default "row" */
  headerLayout?: "row" | "stack"
  /** Helper text rendered below the bar, e.g. "84% of the way to next tier". */
  caption?: React.ReactNode
  trackClassName?: string
  indicatorClassName?: string
  labelClassName?: string
  valueLabelClassName?: string
  captionClassName?: string
}

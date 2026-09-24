import type * as React from "react"
import type { VariantProps } from "class-variance-authority"
import type { Switch as SwitchPrimitive } from "radix-ui"
import type { switchContainerVariants, switchTrackVariants } from "./style"

export interface SwitchOption {
  value: string
  label: string
  description?: string
  checked?: boolean
  disabled?: boolean
  error?: string
}

/**
 * Extends Radix's Switch.Root props (checked/onCheckedChange/disabled come for free).
 * variant/size/align are pulled from the CVA variants in style.ts, so they stay in sync automatically.
 */
export interface SwitchProps
  extends Omit<React.ComponentProps<typeof SwitchPrimitive.Root>, "size">,
    Pick<VariantProps<typeof switchContainerVariants>, "variant" | "align">,
    Pick<VariantProps<typeof switchTrackVariants>, "size"> {
  label?: React.ReactNode
  description?: React.ReactNode
  error?: React.ReactNode
  containerClassName?: string
  labelClassName?: string
  descriptionClassName?: string
  invalid?: boolean
}

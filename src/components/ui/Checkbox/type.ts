import type * as React from "react"
import type { VariantProps } from "class-variance-authority"
import type { Checkbox as CheckboxPrimitive } from "radix-ui"
import type { checkboxContainerVariants, checkboxIndicatorVariants } from "./style"

export interface CheckboxOption {
  value: string
  label: string
  description?: string
  checked?: boolean
  disabled?: boolean
  error?: string
}

/**
 * Extends Radix's Checkbox.Root props (checked/onCheckedChange/disabled come for free).
 * variant/size are pulled from the CVA variants in style.ts, so they stay in sync automatically.
 */
export interface CheckboxProps
  extends Omit<React.ComponentProps<typeof CheckboxPrimitive.Root>, "size">,
    Pick<VariantProps<typeof checkboxContainerVariants>, "variant">,
    Pick<VariantProps<typeof checkboxIndicatorVariants>, "size"> {
  label?: React.ReactNode
  description?: React.ReactNode
  error?: React.ReactNode
  containerClassName?: string
  labelClassName?: string
  descriptionClassName?: string
  invalid?: boolean
  /** Custom icon rendered inside the indicator when checked. @default <Check /> */
  icon?: React.ReactNode
}


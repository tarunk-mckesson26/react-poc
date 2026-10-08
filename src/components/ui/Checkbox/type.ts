import type * as React from "react"
import type { VariantProps } from "class-variance-authority"
import type { checkboxContainerVariants, checkboxIndicatorVariants } from "./style"

export interface CheckboxOption {
  value: string
  label: string
  description?: string
  checked?: boolean
  disabled?: boolean
  error?: string
}

export interface CheckboxProps
  extends Omit<React.ComponentProps<"input">, "size" | "type" | "children">,
    Pick<VariantProps<typeof checkboxContainerVariants>, "variant" | "align">,
    Pick<VariantProps<typeof checkboxIndicatorVariants>, "size"> {
  onCheckedChange?: (checked: boolean) => void
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


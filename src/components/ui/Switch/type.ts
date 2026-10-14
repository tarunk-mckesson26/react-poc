import type * as React from "react"
import type { VariantProps } from "class-variance-authority"
import type { switchContainerVariants, switchTrackVariants } from "./style"

export interface SwitchOption {
  value: string
  label: string
  description?: string
  checked?: boolean
  disabled?: boolean
  error?: string
}

export interface SwitchProps
  extends Omit<React.ComponentProps<"input">, "size" | "type" | "children">,
  VariantProps<typeof switchContainerVariants>,
  VariantProps<typeof switchTrackVariants> {
  onCheckedChange?: (checked: boolean) => void
  showLabel?: boolean
  showDescription?: boolean
  label?: React.ReactNode
  description?: React.ReactNode
  error?: React.ReactNode
  containerClassName?: string
  labelClassName?: string
  descriptionClassName?: string
  invalid?: boolean
}

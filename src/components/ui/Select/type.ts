import type React from "react"
import type { Select as SelectPrimitive } from "radix-ui"
import type { VariantProps } from "class-variance-authority"
import type { selectTriggerVariants } from "./style"

export type SelectRootProps = React.ComponentProps<typeof SelectPrimitive.Root>
export type SelectGroupProps = React.ComponentProps<typeof SelectPrimitive.Group>
export type SelectValueProps = React.ComponentProps<typeof SelectPrimitive.Value>
export type SelectLabelProps = React.ComponentProps<typeof SelectPrimitive.Label>
export type SelectSeparatorProps = React.ComponentProps<
  typeof SelectPrimitive.Separator
>

export type SelectSize = "sm" | "default" | "lg"

export interface SelectTriggerProps
  extends React.ComponentProps<typeof SelectPrimitive.Trigger> {
  size?: SelectSize
  invalid?: boolean
  showFocusRing?: boolean
  iconClassName?: string
}

export interface SelectContentProps
  extends React.ComponentProps<typeof SelectPrimitive.Content> {
  viewportClassName?: string
}

export interface SelectItemProps
  extends React.ComponentProps<typeof SelectPrimitive.Item> {
  indicatorClassName?: string
}

export interface SelectOption {
  value: string
  label: React.ReactNode
  disabled?: boolean
}

/** Class overrides for each rendered section of the Select */
export interface SelectClassNames {
  trigger?: string
  value?: string
  icon?: string
  content?: string
  viewport?: string
  item?: string
  itemIndicator?: string
}

export interface SelectComponentProps
  extends Omit<SelectRootProps, "children">,
    Omit<VariantProps<typeof selectTriggerVariants>, "size"> {
  options: SelectOption[]
  placeholder?: string
  size?: SelectSize
  invalid?: boolean
  /** Toggles the focus-visible ring on the trigger */
  showFocusRing?: boolean
  id?: string
  "aria-label"?: string
  "aria-describedby"?: string
  /** Shorthand for classNames.trigger */
  className?: string
  classNames?: SelectClassNames
  position?: SelectContentProps["position"]
}

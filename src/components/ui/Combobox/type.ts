import type React from "react"
import type { Popover as PopoverPrimitive } from "radix-ui"
import type { Command as CommandPrimitive } from "cmdk"

export type ComboboxSize = "sm" | "default" | "lg"

export type CommandProps = React.ComponentProps<typeof CommandPrimitive>
export type CommandInputProps = React.ComponentProps<typeof CommandPrimitive.Input>
export type CommandListProps = React.ComponentProps<typeof CommandPrimitive.List>
export type CommandEmptyProps = React.ComponentProps<typeof CommandPrimitive.Empty>
export type CommandGroupProps = React.ComponentProps<typeof CommandPrimitive.Group>
export type CommandItemProps = React.ComponentProps<typeof CommandPrimitive.Item>
export type CommandSeparatorProps = React.ComponentProps<
  typeof CommandPrimitive.Separator
>
export type PopoverContentProps = React.ComponentProps<
  typeof PopoverPrimitive.Content
>

export interface CommandInputFieldProps extends CommandInputProps {
  wrapperClassName?: string
  iconClassName?: string
}

export interface ComboboxOption {
  value: string
  label: string
  disabled?: boolean
  /** Rendered before the option label */
  icon?: React.ReactNode
  /** Extra terms matched while searching, in addition to `label` */
  keywords?: string[]
}

/** Class overrides for each rendered section of the Combobox */
export interface ComboboxClassNames {
  trigger?: string
  value?: string
  placeholder?: string
  /** Wrapper around the selected chips */
  chipList?: string
  chip?: string
  chipRemove?: string
  /** Badge shown when selections exceed `maxDisplay` */
  chipOverflow?: string
  /** Leading icon shown in the trigger */
  leadingIcon?: string
  /** Chevron rendered at the end of the trigger */
  icon?: string
  content?: string
  command?: string
  inputWrapper?: string
  input?: string
  list?: string
  empty?: string
  group?: string
  item?: string
  itemIndicator?: string
}

interface ComboboxBaseProps {
  options: ComboboxOption[]
  placeholder?: string
  /** Icon rendered in front of the placeholder / selected value */
  icon?: React.ReactNode
  size?: ComboboxSize
  invalid?: boolean
  /** Disables the whole control */
  disabled?: boolean
  /** Toggles the focus-visible ring on the trigger */
  showFocusRing?: boolean
  /** Renders the search input inside the popover */
  searchable?: boolean
  searchPlaceholder?: string
  emptyMessage?: React.ReactNode
  /** Label shown when more than `maxDisplay` options are selected (multiple only) */
  selectedLabel?: (count: number) => string
  /** Number of selected labels listed before falling back to `selectedLabel` */
  maxDisplay?: number
  /** Renders selections as chips with a remove button. Defaults to `multiple` */
  showChips?: boolean
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  /** Closes the popover after a selection. Defaults to `true` for single select */
  closeOnSelect?: boolean
  id?: string
  name?: string
  "aria-label"?: string
  "aria-describedby"?: string
  /** Shorthand for classNames.trigger */
  className?: string
  classNames?: ComboboxClassNames
  align?: PopoverContentProps["align"]
  side?: PopoverContentProps["side"]
  sideOffset?: PopoverContentProps["sideOffset"]
}

export interface ComboboxSingleProps extends ComboboxBaseProps {
  multiple?: false
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
}

export interface ComboboxMultipleProps extends ComboboxBaseProps {
  multiple: true
  value?: string[]
  defaultValue?: string[]
  onValueChange?: (value: string[]) => void
}

export type ComboboxProps = ComboboxSingleProps | ComboboxMultipleProps

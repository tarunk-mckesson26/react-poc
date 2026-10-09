import { Select as SelectPrimitive } from "radix-ui"
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react"
import { clsx } from "@/lib/clsx"
import {
  selectContentClass,
  selectIconClass,
  selectItemClass,
  selectItemIndicatorClass,
  selectLabelClass,
  selectPopperClass,
  selectScrollButtonClass,
  selectSeparatorClass,
  selectTriggerVariants,
  selectViewportClass,
  selectViewportPopperClass,
} from "./style"
import type {
  SelectContentProps,
  SelectGroupProps,
  SelectItemProps,
  SelectLabelProps,
  SelectRootProps,
  SelectSeparatorProps,
  SelectTriggerProps,
  SelectValueProps,
} from "./type"

/** Root that holds the open state and selected value. */
const Select = (props: SelectRootProps) => (
  <SelectPrimitive.Root data-slot="select" {...props} />
)

/** Groups related items so they can share a `SelectLabel`. */
const SelectGroup = (props: SelectGroupProps) => (
  <SelectPrimitive.Group data-slot="select-group" {...props} />
)

/** Shows the selected item's text, or the placeholder when nothing is selected. */
const SelectValue = (props: SelectValueProps) => (
  <SelectPrimitive.Value data-slot="select-value" {...props} />
)

/** Button that opens the list; handles size, invalid and focus-ring styles. */
const SelectTrigger = ({
  className,
  iconClassName,
  size = "default",
  invalid = false,
  showFocusRing = true,
  children,
  ...props
}: SelectTriggerProps) => (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      aria-invalid={invalid || undefined}
      className={clsx(
        selectTriggerVariants({ size, invalid, focusRing: showFocusRing }),
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className={clsx(selectIconClass, iconClassName)} />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
)

/** Dropdown panel rendered in a portal, with scroll buttons around the viewport. */
const SelectContent = ({
  className,
  viewportClassName,
  children,
  position = "popper",
  ...props
}: SelectContentProps) => {
  const isPopper = position === "popper"
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        position={position}
        className={clsx(selectContentClass, isPopper && selectPopperClass, className)}
        {...props}
      >
        <SelectPrimitive.ScrollUpButton className={selectScrollButtonClass}>
          <ChevronUpIcon className="size-4" />
        </SelectPrimitive.ScrollUpButton>
        <SelectPrimitive.Viewport
          className={clsx(
            selectViewportClass,
            isPopper && selectViewportPopperClass,
            viewportClassName
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectPrimitive.ScrollDownButton className={selectScrollButtonClass}>
          <ChevronDownIcon className="size-4" />
        </SelectPrimitive.ScrollDownButton>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

/** Non-selectable heading for a `SelectGroup`. */
const SelectLabel = ({ className, ...props }: SelectLabelProps) => (
  <SelectPrimitive.Label
    data-slot="select-label"
    className={clsx(selectLabelClass, className)}
    {...props}
  />
)

/** Selectable option that shows a check icon when selected. */
const SelectItem = ({
  className,
  indicatorClassName,
  children,
  ...props
}: SelectItemProps) => (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={clsx(selectItemClass, className)}
      {...props}
    >
      <span className={clsx(selectItemIndicatorClass, indicatorClassName)}>
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
)

/** Horizontal divider between items or groups. */
const SelectSeparator = ({ className, ...props }: SelectSeparatorProps) => (
  <SelectPrimitive.Separator
    data-slot="select-separator"
    className={clsx(selectSeparatorClass, className)}
    {...props}
  />
)

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}

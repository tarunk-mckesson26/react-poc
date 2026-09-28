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

function Select(props: SelectRootProps) {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}

function SelectGroup(props: SelectGroupProps) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />
}

function SelectValue(props: SelectValueProps) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}

function SelectTrigger({
  className,
  iconClassName,
  size = "default",
  invalid = false,
  showFocusRing = true,
  children,
  ...props
}: SelectTriggerProps) {
  return (
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
}

function SelectContent({
  className,
  viewportClassName,
  children,
  position = "popper",
  ...props
}: SelectContentProps) {
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

function SelectLabel({ className, ...props }: SelectLabelProps) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={clsx(selectLabelClass, className)}
      {...props}
    />
  )
}

function SelectItem({
  className,
  indicatorClassName,
  children,
  ...props
}: SelectItemProps) {
  return (
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
}

function SelectSeparator({ className, ...props }: SelectSeparatorProps) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={clsx(selectSeparatorClass, className)}
      {...props}
    />
  )
}

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

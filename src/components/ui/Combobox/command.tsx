import { Command as CommandPrimitive } from "cmdk"
import { SearchIcon } from "lucide-react"
import { clsx } from "@/lib/clsx"
import {
  commandClass,
  commandEmptyClass,
  commandGroupClass,
  commandInputClass,
  commandInputWrapperClass,
  commandItemClass,
  commandListClass,
} from "./style"
import type {
  CommandEmptyProps,
  CommandGroupProps,
  CommandInputFieldProps,
  CommandItemProps,
  CommandListProps,
  CommandProps,
  CommandSeparatorProps,
} from "./type"

/** Filterable command menu used as the popover body of the Combobox. */
const Command = ({ className, ...props }: CommandProps) => (
  <CommandPrimitive
    data-slot="command"
    className={clsx(commandClass, className)}
    {...props}
  />
)

/** Search box that filters the items below it. */
const CommandInput = ({
  className,
  wrapperClassName,
  iconClassName,
  ...props
}: CommandInputFieldProps) => (
  <div
    data-slot="command-input-wrapper"
    className={clsx(commandInputWrapperClass, wrapperClassName)}
  >
    <SearchIcon
      className={clsx("size-4 shrink-0 opacity-50", iconClassName)}
      aria-hidden="true"
    />
    <CommandPrimitive.Input
      data-slot="command-input"
      className={clsx(commandInputClass, className)}
      {...props}
    />
  </div>
)

/** Scrollable container for groups and items. */
const CommandList = ({ className, ...props }: CommandListProps) => (
  <CommandPrimitive.List
    data-slot="command-list"
    className={clsx(commandListClass, className)}
    {...props}
  />
)

/** Rendered only when the search matches nothing. */
const CommandEmpty = ({ className, ...props }: CommandEmptyProps) => (
  <CommandPrimitive.Empty
    data-slot="command-empty"
    className={clsx(commandEmptyClass, className)}
    {...props}
  />
)

/** Groups related items under an optional heading. */
const CommandGroup = ({ className, ...props }: CommandGroupProps) => (
  <CommandPrimitive.Group
    data-slot="command-group"
    className={clsx(commandGroupClass, className)}
    {...props}
  />
)

/** Selectable row; supports the `disabled` state. */
const CommandItem = ({ className, ...props }: CommandItemProps) => (
  <CommandPrimitive.Item
    data-slot="command-item"
    className={clsx(commandItemClass, className)}
    {...props}
  />
)

const CommandSeparator = ({ className, ...props }: CommandSeparatorProps) => (
  <CommandPrimitive.Separator
    data-slot="command-separator"
    className={clsx("-mx-1 h-px bg-border", className)}
    {...props}
  />
)

export {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
}

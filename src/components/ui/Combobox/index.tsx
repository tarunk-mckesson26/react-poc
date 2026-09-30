import { useCallback, useMemo, useState } from "react"
import { Popover as PopoverPrimitive } from "radix-ui"
import { CheckIcon, ChevronsUpDownIcon, XIcon } from "lucide-react"
import { clsx } from "@/lib/clsx"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./command"
import {
  comboboxChipClass,
  comboboxChipListClass,
  comboboxChipOverflowClass,
  comboboxChipRemoveClass,
  comboboxContentClass,
  comboboxIconClass,
  comboboxLeadingIconClass,
  comboboxPlaceholderClass,
  comboboxTriggerChipsClass,
  comboboxTriggerInnerClass,
  comboboxTriggerVariants,
  comboboxValueClass,
  commandItemIndicatorClass,
} from "./style"
import type { ComboboxProps } from "./type"

const toArray = (value: string | string[] | undefined) => {
  if (value === undefined) return undefined
  if (Array.isArray(value)) return value
  return value === "" ? [] : [value]
}

/** Searchable select built on Popover + Command, with single and multiple select modes. */
export const Combobox = ({
  options,
  placeholder = "Select an option",
  icon,
  size = "default",
  invalid = false,
  disabled = false,
  showFocusRing = true,
  searchable = true,
  searchPlaceholder = "Search...",
  emptyMessage = "No results found.",
  selectedLabel = (count) => `${count} selected`,
  maxDisplay = 2,
  showChips,
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  closeOnSelect,
  multiple = false,
  value: valueProp,
  defaultValue,
  onValueChange,
  id,
  name,
  "aria-label": ariaLabel,
  "aria-describedby": ariaDescribedBy,
  className,
  classNames = {},
  align = "start",
  side,
  sideOffset = 4,
}: ComboboxProps) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen)
  const [uncontrolledValue, setUncontrolledValue] = useState<string[]>(
    () => toArray(defaultValue) ?? []
  )

  const open = openProp ?? uncontrolledOpen
  const selected = toArray(valueProp) ?? uncontrolledValue
  const shouldCloseOnSelect = closeOnSelect ?? !multiple

  const setOpen = useCallback(
    (next: boolean) => {
      if (openProp === undefined) setUncontrolledOpen(next)
      onOpenChange?.(next)
    },
    [onOpenChange, openProp]
  )

  const handleSelect = useCallback(
    (optionValue: string) => {
      const next = multiple
        ? selected.includes(optionValue)
          ? selected.filter((item) => item !== optionValue)
          : [...selected, optionValue]
        : selected[0] === optionValue
          ? []
          : [optionValue]

      if (valueProp === undefined) setUncontrolledValue(next)
      if (multiple) {
        ;(onValueChange as ((value: string[]) => void) | undefined)?.(next)
      } else {
        ;(onValueChange as ((value: string) => void) | undefined)?.(next[0] ?? "")
      }
      if (shouldCloseOnSelect) setOpen(false)
    },
    [multiple, onValueChange, selected, setOpen, shouldCloseOnSelect, valueProp]
  )

  const handleRemove = useCallback(
    (optionValue: string) => {
      const next = selected.filter((item) => item !== optionValue)

      if (valueProp === undefined) setUncontrolledValue(next)
      if (multiple) {
        ;(onValueChange as ((value: string[]) => void) | undefined)?.(next)
      } else {
        ;(onValueChange as ((value: string) => void) | undefined)?.(next[0] ?? "")
      }
    },
    [multiple, onValueChange, selected, valueProp]
  )

  const selectedOptions = useMemo(
    () =>
      selected
        .map((value) => options.find((option) => option.value === value))
        .filter((option): option is NonNullable<typeof option> => Boolean(option)),
    [options, selected]
  )

  const hasSelection = selectedOptions.length > 0
  const chips = showChips ?? multiple
  const visibleOptions = chips
    ? selectedOptions.slice(0, maxDisplay)
    : selectedOptions
  const overflowCount = selectedOptions.length - visibleOptions.length
  const textLabel = !hasSelection
    ? placeholder
    : selectedOptions.length > maxDisplay
      ? selectedLabel(selectedOptions.length)
      : selectedOptions.map((option) => option.label).join(", ")

  return (
    <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
      <PopoverPrimitive.Trigger asChild>
        <button
          type="button"
          role="combobox"
          id={id}
          name={name}
          disabled={disabled}
          aria-expanded={open}
          aria-invalid={invalid || undefined}
          aria-label={ariaLabel}
          aria-describedby={ariaDescribedBy}
          data-slot="combobox-trigger"
          data-size={size}
          data-placeholder={hasSelection ? undefined : ""}
          className={clsx(
            comboboxTriggerVariants({ size, invalid, focusRing: showFocusRing }),
            chips && hasSelection && comboboxTriggerChipsClass,
            className,
            classNames.trigger
          )}
        >
          <span className={comboboxTriggerInnerClass}>
            {icon ? (
              <span
                aria-hidden="true"
                className={clsx(comboboxLeadingIconClass, classNames.leadingIcon)}
              >
                {icon}
              </span>
            ) : null}
            {chips && hasSelection ? (
              <span className={clsx(comboboxChipListClass, classNames.chipList)}>
                {visibleOptions.map((option) => (
                  <span
                    key={option.value}
                    className={clsx(comboboxChipClass, classNames.chip)}
                  >
                    <span className="line-clamp-1">{option.label}</span>
                    {disabled ? null : (
                      <span
                        role="button"
                        tabIndex={-1}
                        aria-label={`Remove ${option.label}`}
                        className={clsx(
                          comboboxChipRemoveClass,
                          classNames.chipRemove
                        )}
                        // Keeps the chip's remove action from toggling the popover
                        onPointerDown={(event) => event.stopPropagation()}
                        onClick={(event) => {
                          event.preventDefault()
                          event.stopPropagation()
                          handleRemove(option.value)
                        }}
                        onKeyDown={(event) => {
                          if (event.key !== "Enter" && event.key !== " ") return
                          event.preventDefault()
                          event.stopPropagation()
                          handleRemove(option.value)
                        }}
                      >
                        <XIcon className="size-3" aria-hidden="true" />
                      </span>
                    )}
                  </span>
                ))}
                {overflowCount > 0 ? (
                  <span
                    className={clsx(
                      comboboxChipOverflowClass,
                      classNames.chipOverflow
                    )}
                  >
                    +{overflowCount}
                  </span>
                ) : null}
              </span>
            ) : (
              <span
                className={
                  hasSelection
                    ? clsx(comboboxValueClass, classNames.value)
                    : clsx(comboboxPlaceholderClass, classNames.placeholder)
                }
              >
                {textLabel}
              </span>
            )}
          </span>
          <ChevronsUpDownIcon
            aria-hidden="true"
            className={clsx(comboboxIconClass, classNames.icon)}
          />
        </button>
      </PopoverPrimitive.Trigger>

      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          align={align}
          side={side}
          sideOffset={sideOffset}
          data-slot="combobox-content"
          className={clsx(comboboxContentClass, classNames.content)}
        >
          <Command className={classNames.command}>
            {searchable ? (
              <CommandInput
                placeholder={searchPlaceholder}
                className={classNames.input}
                wrapperClassName={classNames.inputWrapper}
              />
            ) : null}
            <CommandList className={classNames.list}>
              <CommandEmpty className={classNames.empty}>
                {emptyMessage}
              </CommandEmpty>
              <CommandGroup className={classNames.group}>
                {options.map((option) => {
                  const isSelected = selected.includes(option.value)
                  return (
                    <CommandItem
                      key={option.value}
                      value={option.value}
                      keywords={[option.label, ...(option.keywords ?? [])]}
                      disabled={option.disabled}
                      onSelect={() => handleSelect(option.value)}
                      data-checked={isSelected}
                      className={classNames.item}
                    >
                      {option.icon}
                      <span className="line-clamp-1">{option.label}</span>
                      {isSelected ? (
                        <span
                          className={clsx(
                            commandItemIndicatorClass,
                            classNames.itemIndicator
                          )}
                        >
                          <CheckIcon className="size-4" aria-hidden="true" />
                        </span>
                      ) : null}
                    </CommandItem>
                  )
                })}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  )
}

export * from "./command"
export { comboboxTriggerVariants } from "./style"
export type * from "./type"

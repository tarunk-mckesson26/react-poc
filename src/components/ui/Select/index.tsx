import { clsx } from "@/lib/clsx"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select"
import type { SelectComponentProps } from "./type"

export function SelectComponent({
  options,
  placeholder = "Select an option",
  size = "default",
  invalid = false,
  disabled = false,
  showFocusRing = true,
  id,
  "aria-label": ariaLabel,
  "aria-describedby": ariaDescribedBy,
  className,
  classNames = {},
  position = "popper",
  ...rootProps
}: SelectComponentProps) {
  return (
    <Select disabled={disabled} {...rootProps}>
      <SelectTrigger
        id={id}
        size={size}
        invalid={invalid}
        showFocusRing={showFocusRing}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedBy}
        className={clsx(className, classNames.trigger)}
        iconClassName={classNames.icon}
      >
        <SelectValue placeholder={placeholder} className={classNames.value} />
      </SelectTrigger>
      <SelectContent
        position={position}
        className={classNames.content}
        viewportClassName={classNames.viewport}
      >
        {options.map((option) => (
          <SelectItem
            key={option.value}
            value={option.value}
            disabled={option.disabled}
            className={classNames.item}
            indicatorClassName={classNames.itemIndicator}
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export * from "./select"
export { selectTriggerVariants } from "./style"
export type * from "./type"

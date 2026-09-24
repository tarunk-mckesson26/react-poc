import { clsx } from "@/lib/clsx"
import { useState } from "react"
import type { DatePickerProps } from "./type"

const DatePicker = ({
  className,
  placeholder = "Select date",
  icon,
  iconPosition = "right",
  value,
  defaultValue,
  onChange,
  ...props
}: DatePickerProps) => {
  const [internalValue, setInternalValue] = useState<string>(
    typeof defaultValue === "string" ? defaultValue : ""
  )

  const currentValue = value ?? internalValue
  const hasValue = Boolean(currentValue && String(currentValue).trim())

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInternalValue(event.target.value)
    onChange?.(event)
  }

  const inputClassName = clsx(
    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
    icon && (iconPosition === "left" ? "pl-10" : "pr-10"),
    !hasValue && "text-transparent",
    className
  )

  return (
    <div className="relative w-full">
      {icon ? (
        <span
          className={clsx(
            "pointer-events-none absolute inset-y-0 flex items-center text-muted-foreground",
            iconPosition === "left" ? "left-3" : "right-3"
          )}
          aria-hidden="true"
        >
          {icon}
        </span>
      ) : null}

      {!hasValue ? (
        <span
          className={clsx(
            "pointer-events-none absolute inset-y-0 flex items-center text-sm text-muted-foreground",
            iconPosition === "left" ? "left-10" : "right-10"
          )}
          aria-hidden="true"
        >
          {placeholder}
        </span>
      ) : null}

      <input
        type="date"
        data-slot="datepicker"
        value={currentValue as string | number | readonly string[] | undefined}
        onChange={handleChange}
        className={clsx(
          inputClassName,
          "appearance-none",
          "[&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0"
        )}
        {...props}
      />
    </div>
  )
}

export { DatePicker }

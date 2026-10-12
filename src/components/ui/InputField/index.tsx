import * as React from "react"
import { clsx } from "@/lib/clsx"

import { inputVariants } from "./style"
import type { InputProps, InputType } from "./type"

const nativeTypes: Record<InputType, React.HTMLInputTypeAttribute> = {
  default: "text",
  password: "password",
  file: "file",
}

/**
 * Text, password, and file input with `default` (bordered) and `bare` styles.
 * The filled state is tracked here because CSS alone can't detect a selected
 * file, and `:placeholder-shown` only works when a placeholder is provided.
 */
function Input({
  className,
  type = "default",
  variant = "default",
  invalid,
  value,
  defaultValue,
  onChange,
  "aria-invalid": ariaInvalid,
  ...props
}: InputProps) {
  const [hasValue, setHasValue] = React.useState(
    () => Boolean(defaultValue) || Boolean(value)
  )

  // File inputs can't be controlled via `value`, so they always rely on local state
  const isControlled = value !== undefined && type !== "file"
  const filled = isControlled ? String(value).length > 0 : hasValue

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setHasValue(
      type === "file"
        ? Boolean(event.target.files?.length)
        : event.target.value.length > 0
    )
    onChange?.(event)
  }

  return (
    <input
      type={nativeTypes[type]}
      data-slot="input"
      data-variant={variant}
      data-filled={filled || undefined}
      aria-invalid={invalid ?? ariaInvalid}
      value={value}
      defaultValue={defaultValue}
      onChange={handleChange}
      className={clsx(inputVariants({ variant, type }), className)}
      {...props}
    />
  )
}

export { Input }
export type { InputProps, InputType, InputVariant } from "./type"

import { clsx } from "@/lib/clsx"
import { inputVariants } from "./style"
import type { InputProps } from "./type"

const Input = ({
  className,
  type = "text",
  variant = "default",
  size = "sm",
  invalid = false,
  disabled,
  ...props
}: InputProps) => {
  return (
    <input
      type={type}
      data-slot="input"
      data-variant={variant}
      data-size={size}
      disabled={disabled}
      aria-invalid={invalid || undefined}
      className={clsx(
        inputVariants({ variant, size, className }),
        invalid && "border-destructive ring-3 ring-destructive/20",
        disabled && "cursor-not-allowed opacity-50"
      )}
      {...props}
    />
  )
}

export { Input }

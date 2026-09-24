import type React from "react"

export type DatePickerIconPosition = "left" | "right"

export interface DatePickerProps extends Omit<React.ComponentProps<"input">, "type"> {
  className?: string
  placeholder?: string
  icon?: React.ReactNode
  iconPosition?: DatePickerIconPosition
}

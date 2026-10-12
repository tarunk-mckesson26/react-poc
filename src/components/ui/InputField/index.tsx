import * as React from "react"
import { cn } from "cn"

import { inputStyles } from "./style"
import type { InputProps } from "./type"

function Input({ className, type, ...props }: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(inputStyles, className)}
      {...props}
    />
  )
}

export { Input }
export type { InputProps }
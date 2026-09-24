import type React from "react"
import { type VariantProps } from "class-variance-authority"
import { type inputVariants } from "./style"

export type InputVariant = "default" | "outline" | "ghost"
export type InputSize = "sm" | "default" | "lg"

export interface InputProps
  extends Omit<React.ComponentProps<"input">, "size">,
    VariantProps<typeof inputVariants> {
  variant?: InputVariant
  size?: InputSize
  invalid?: boolean
}
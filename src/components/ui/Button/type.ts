import type React from "react"
import { type VariantProps } from "class-variance-authority"
import { type buttonVariants } from "./style"

export interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  /**
   * If true, renders the button as a Slot component
   * @default false
   */
  asChild?: boolean
}

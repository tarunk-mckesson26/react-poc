import type React from "react"
import { type VariantProps } from "class-variance-authority"
import { type buttonVariants } from "./style"

/**
 * Centralized type definitions for Button props
 * Keeps types separate from implementation for better organization and reusability
 * VariantProps will make sure that the button props correctly reflect the available style variants defined in buttonVariants, and you don't have to manually define it.
 *
 */
export interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  /**
   * If true, renders the button as a Slot component
   * @default false
   */
  asChild?: boolean
}

import type React from "react"
import { type VariantProps } from "class-variance-authority"
import { type buttonVariants } from "./style"

/** Visual style of the button, mirrors the variants defined in `buttonVariants`. */
export type ButtonVariant = NonNullable<VariantProps<typeof buttonVariants>["variant"]>
/** Size of the button, mirrors the sizes defined in `buttonVariants`. */
export type ButtonSize = NonNullable<VariantProps<typeof buttonVariants>["size"]>

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
  /**
   * When "true", shows a spinner before the label and hides other icons.
   */
  "data-loading"?: boolean | "true" | "false"
}


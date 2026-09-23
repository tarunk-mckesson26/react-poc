import type React from "react"
import type { Tooltip as TooltipPrimitive } from "radix-ui"
import type { VariantProps } from "class-variance-authority"
import type { tooltipVariants } from "./style"

/**
 * Centralized type definitions for Tooltip components
 * Keeps all prop types organized in one place for better maintainability
 */

export type TooltipProviderProps = React.ComponentProps<
  typeof TooltipPrimitive.Provider
>

export type TooltipRootProps = React.ComponentProps<typeof TooltipPrimitive.Root>

export type TooltipTriggerProps = React.ComponentProps<
  typeof TooltipPrimitive.Trigger
>

export type TooltipContentProps = React.ComponentProps<
  typeof TooltipPrimitive.Content
>

/**
 * Props for the composed TooltipComponent wrapper
 * Simplifies usage by accepting trigger and content as props
 */
export interface TooltipComponentProps
  extends VariantProps<typeof tooltipVariants> {
  /** The trigger element - can be text, button, icon, or any React element */
  trigger: React.ReactNode
  /** The content displayed in the tooltip */
  content: React.ReactNode
  /** Position of the tooltip relative to trigger */
  side?: "top" | "right" | "bottom" | "left"
  /** Delay before tooltip appears in milliseconds */
  delayDuration?: number
  /** Disable the tooltip */
  disabled?: boolean
  /** Custom className for additional styling */
  className?: string
}

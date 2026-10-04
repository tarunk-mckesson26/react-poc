import { cva } from "class-variance-authority"

/**
 * Sonner toast styling.
 * `fill` presets map to theme tokens; any other color string is applied inline
 * by the component, in which case `fill` falls back to the `custom` variant.
 */
export const sonnerVariants = cva(
  "pointer-events-auto flex w-full items-center gap-3 rounded-md border shadow-lg",
  {
    variants: {
      fill: {
        success: "border-transparent bg-success text-success-foreground",
        error: "border-transparent bg-destructive text-destructive-foreground",
        custom: "border-transparent",
      },
      size: {
        sm: "px-3 py-2 text-xs",
        default: "px-4 py-3 text-sm",
        lg: "px-5 py-4 text-base",
      },
    },
    defaultVariants: {
      fill: "success",
      size: "default",
    },
  }
)

export const sonnerIconVariants = cva(
  "flex shrink-0 items-center justify-center [&>svg]:size-5 [&>img]:size-5"
)

export const sonnerCloseVariants = cva(
  "ml-auto shrink-0 cursor-pointer rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-current/40 [&>svg]:size-4"
)

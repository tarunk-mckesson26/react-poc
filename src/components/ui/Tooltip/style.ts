import { cva } from "class-variance-authority"

/**
 * Tooltip styling and variants using CVA
 * Centralizes all styling logic for consistent appearance across tooltips
 */

export const tooltipVariants = cva(
  "z-50 inline-flex w-fit origin-(--radix-tooltip-content-transform-origin) items-center gap-1.5 rounded-md bg-foreground px-3 py-1.5 text-white !bg-black has-data-[slot=kbd]:pr-1.5 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 **:data-[slot=kbd]:relative **:data-[slot=kbd]:isolate **:data-[slot=kbd]:z-50 **:data-[slot=kbd]:rounded-sm data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
  {
    variants: {
      size: {
        sm: "min-w-[150px] text-xs text-center justify-center",
        lg: "min-w-[300px] text-base",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  }
)

export const tooltipArrowClass =
  "fill-background"


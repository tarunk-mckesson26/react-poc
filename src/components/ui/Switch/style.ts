import { cva } from "class-variance-authority"

/** Switch track style variants using CVA - checked/invalid react to Radix's data-state/aria-invalid attrs. */
export const switchTrackVariants = cva(
  "peer inline-flex shrink-0 items-center rounded-full border border-transparent shadow-xs outline-none transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 data-[state=unchecked]:bg-slate-200 data-[state=checked]:bg-blue-600 aria-invalid:ring-2 aria-invalid:ring-red-500 aria-invalid:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        default: "h-[1.15rem] w-8",
        sm: "h-4 w-7",
        lg: "h-6 w-11",
      },
    },
    defaultVariants: { size: "default" },
  }
)

/** Switch thumb (the moving knob) style variants using CVA. */
export const switchThumbVariants = cva(
  "pointer-events-none block translate-x-0.5 rounded-full bg-white shadow ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)]",
  {
    variants: {
      size: {
        default: "size-4",
        sm: "size-3",
        lg: "size-5",
      },
    },
    defaultVariants: { size: "default" },
  }
)

/**
 * Switch container (label wrapper) style variants using CVA.
 * `align="end"` visually moves the switch after the text via flex `order`
 * while the switch stays first in the DOM, so `peer-*` selectors keep working.
 */
export const switchContainerVariants = cva(
  "flex w-full select-none items-center gap-3 rounded-xl transition-all duration-200",
  {
    variants: {
      variant: {
        default: "border-0 bg-transparent",
        card: "border border-slate-200 bg-white p-3 has-[[data-state=checked]]:bg-slate-100 has-[[aria-invalid=true]]:border-red-500 has-[[aria-invalid=true]]:bg-red-50 has-[[aria-invalid=true]]:shadow-sm sm:p-4",
      },
      align: {
        start: "",
        end: "justify-between",
      },
    },
    defaultVariants: { variant: "default", align: "start" },
  }
)

/** Label/description text styles - no variants needed, so plain strings instead of cva. */
export const switchLabelVariants =
  "text-sm font-medium leading-5 text-slate-900 break-words peer-aria-invalid:text-red-600"
export const switchDescriptionVariants =
  "text-sm leading-5 text-slate-500 break-words peer-aria-invalid:text-red-500"

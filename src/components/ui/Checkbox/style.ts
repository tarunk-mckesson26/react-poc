import { cva } from "class-variance-authority"

/** Checkbox indicator variants - checked/invalid react to Radix's data-state/aria-invalid attrs. */
export const checkboxIndicatorVariants = cva(
  "shrink-0 items-center justify-center rounded-[5px] border border-slate-300 bg-white text-transparent shadow-xs outline-none transition-all duration-200 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white aria-invalid:border-red-500 aria-invalid:shadow-[0_0_0_2px_rgba(239,68,68,0.12)] disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        default: "h-4 w-4",
        sm: "h-3.5 w-3.5",
        lg: "h-5 w-5",
      },
    },
    defaultVariants: { size: "default" },
  }
)

/** Checkbox container variants - card backgrounds react to the nested indicator via `has-*`. */
export const checkboxContainerVariants = cva(
  "flex select-none items-center gap-3 rounded-xl transition-all duration-200",
  {
    variants: {
      variant: {
        default: "border-0 bg-transparent",
        card: "w-full border border-slate-200 bg-white p-3 has-[[data-state=checked]]:bg-slate-100 has-[[aria-invalid=true]]:border-red-500 has-[[aria-invalid=true]]:bg-red-50 has-[[aria-invalid=true]]:shadow-sm sm:p-4",
      },
    },
    defaultVariants: { variant: "default" },
  }
)

/** Label/description text styles - no variants needed, so plain strings instead of cva. */
export const checkboxLabelVariants =
  "text-sm font-medium leading-5 text-slate-900 break-words peer-aria-invalid:text-red-600"
export const checkboxDescriptionVariants =
  "text-sm leading-5 text-slate-500 break-words peer-aria-invalid:text-red-500"

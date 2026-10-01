import { cva } from "class-variance-authority"

/** Progress track (background rail) style variants using CVA. */
export const progressTrackVariants = cva(
  "relative w-full overflow-hidden rounded-full bg-slate-100",
  {
    variants: {
      size: {
        default: "h-2",
        sm: "h-1.5",
        lg: "h-3",
      },
    },
    defaultVariants: { size: "default" },
  }
)

/** Progress indicator (filled bar) style variants using CVA. */
export const progressIndicatorVariants = cva(
  "h-full w-full flex-1 rounded-full transition-transform duration-500 ease-out",
  {
    variants: {
      variant: {
        default: "bg-blue-600",
        violet: "bg-violet-500",
        gradient: "bg-gradient-to-r from-sky-400 to-blue-600",
      },
    },
    defaultVariants: { variant: "default" },
  }
)

/** Header/caption text styles - no variants needed, so plain strings instead of cva. */
export const progressLabelVariants = "text-sm font-medium text-slate-900"
export const progressValueVariants = "text-sm font-semibold text-slate-900"
export const progressCaptionVariants = "text-xs text-slate-500"

import { cva } from "class-variance-authority"

export const progressContainerStyles = "flex w-full max-w-[400px] flex-col gap-2"
export const progressValueStyles = "text-sm font-semibold text-slate-900"

export const progressTrackVariants = cva(
  "relative w-full max-w-[400px] overflow-hidden rounded-full bg-[var(--progress-track-bgColor,#E7EFF8)]",
  {
    variants: {
      size: {
        default: "h-1",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

export const progressIndicatorVariants = cva(
  "h-full rounded-full bg-[var(--progress-indicator-bgColor,#0A5FBC)] transition-[width] duration-500 ease-out",
  {
    variants: {
      percent: {
        "100%": "w-full",
        "75%": "w-3/4",
        "50%": "w-1/2",
        "25%": "w-1/4",
        "0%": "w-0",
      },
    },
    defaultVariants: {
      percent: "100%",
    },
  }
)


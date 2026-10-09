import { cva } from "class-variance-authority"

export const barChartCardVariants = cva(
  "rounded-xl border border-border bg-card text-card-foreground shadow-sm",
  {
    variants: {
      variant: {
        default: "border-border bg-card",
        outline: "border-border bg-transparent",
        muted: "border-transparent bg-muted/30",
      },
      size: {
        sm: "p-3",
        default: "p-4",
        lg: "p-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export const barChartHeaderVariants = cva(
  "flex items-center justify-between border-b border-border pb-3"
)

export const barChartBodyVariants = cva("space-y-2 pt-4")

export const barChartFooterVariants = cva(
  "border-t border-border pt-3 text-sm text-muted-foreground"
)

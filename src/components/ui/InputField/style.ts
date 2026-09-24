import { cva } from "class-variance-authority"

export const inputVariants = cva(
  "flex w-full min-w-0 border border-input bg-transparent text-foreground shadow-xs transition-colors outline-none placeholder:text-muted-foreground file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground selection:bg-primary selection:text-primary-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
  {
    variants: {
      variant: {
        default: "border-input bg-background",
        outline: "border-border bg-transparent",
        ghost: "border-transparent bg-transparent",
      },
      size: {
        sm: "h-8 rounded-md px-2.5 text-xs",
        default: "h-9 rounded-lg px-3 text-sm",
        lg: "h-11 rounded-xl px-4 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

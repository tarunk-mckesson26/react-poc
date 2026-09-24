import { cva } from "class-variance-authority"

export const avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden rounded-full border border-border bg-background",
  {
    variants: {
      variant: {
        default: "bg-muted text-foreground",
        primary: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        outline: "bg-background text-foreground",
        ghost: "bg-transparent text-foreground",
      },
      size: {
        xs: "h-6 w-6 text-[10px]",
        sm: "h-8 w-8 text-xs",
        default: "h-10 w-10 text-sm",
        lg: "h-14 w-14 text-base",
        xl: "h-16 w-16 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export const avatarImageVariants = cva("aspect-square size-full object-cover")

export const avatarFallbackVariants = cva(
  "flex size-full items-center justify-center rounded-full text-center font-medium"
)

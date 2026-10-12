import { cva } from "class-variance-authority"

export const avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden rounded-full bg-background",
  {
    variants: {
      variant: {
        default: "bg-muted text-avatar-fallback-textColor",
      },
      size: {
        xs: "h-6 w-6 text-[10px]",
        sm: "h-8 w-8 text-xs",
        default: "h-10 w-10 text-sm",
        lg: "h-12 w-12 text-base",
        xl: "h-16 w-16 text-lg",
      },
    }
  }
)

export const avatarImageVariants = cva("aspect-square size-full object-cover")

export const avatarFallbackVariants = cva(
  "flex size-full items-center justify-center rounded-full text-center font-medium"
)

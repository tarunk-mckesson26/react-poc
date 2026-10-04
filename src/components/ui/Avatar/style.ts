import { cva } from "class-variance-authority"

export const avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden rounded-full bg-background",
  {
    variants: {
      variant: {
        default: "bg-avatar-bgColor text-avatar-fallback-textColor",
      },
      size: {
        xs: "h-6 w-6 text-[10px]",
        sm: "h-8 w-8 text-xs",
        default: "size-avatar text-sm",
        lg: "size-avatar text-base",
        xl: "size-avatar text-lg",
      },
    }
  }
)

export const avatarImageVariants = cva("aspect-square size-full object-cover")

export const avatarFallbackVariants = cva(
  "flex size-full items-center justify-center rounded-full text-center font-medium"
)

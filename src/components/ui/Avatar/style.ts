import { cva } from "class-variance-authority"

export const avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden rounded-full bg-background",
  {
    variants: {
      variant: {
        default: "bg-muted text-avatar-fallback-textColor",
      },
      size: {
        xs: "h-[20px] w-[20px] text-[12px]",
        sm: "h-[24px] w-[24px] text-[12px]",
        default: "h-[32px] w-[32px] text-[14px]",
        lg: "h-[40px] w-[40px] text-[14px]",
        xl: "h-[48px] w-[48px] text-[14px]",
      },
    }
  }
)

export const avatarImageVariants = cva("aspect-square size-full object-cover")

export const avatarFallbackVariants = cva(
  "flex size-full items-center justify-center rounded-full text-center"
)

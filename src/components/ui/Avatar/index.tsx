import { cloneElement, isValidElement } from "react"
import * as AvatarPrimitive from "radix-ui"
import { clsx } from "@/lib/clsx"
import { avatarFallbackVariants, avatarImageVariants, avatarVariants } from "./style"
import type { AvatarProps } from "./type"

const iconSizes = {
  xs: 12,
  sm: 12,
  default: 16,
  lg: 20,
  xl: 20,
} as const

const getInitials = (firstName?: string, lastName?: string) => {
  const first = firstName?.trim().charAt(0)?.toUpperCase() ?? ""
  const last = lastName?.trim().charAt(0)?.toUpperCase() ?? ""

  if (!first && !last) return "?"

  return `${first}${last}`
}

const Avatar = ({
  className,
  firstName,
  lastName,
  src,
  alt,
  icon,
  variant = "default",
  size = "default",
  fallbackClassName,
  ...props
}: AvatarProps) => {
  const hasImage = Boolean(src)
  const initials = getInitials(firstName, lastName)
  const iconSize = iconSizes[size ?? "default"]
  const sizedIcon = isValidElement<{ width?: number; height?: number }>(icon)
    ? cloneElement(icon, { width: iconSize, height: iconSize })
    : icon

  return (
    <AvatarPrimitive.Avatar.Root
      data-slot="avatar"
      data-variant={variant}
      data-size={size}
      className={clsx(avatarVariants({ variant, size, className }))}
      {...props}
    >
      {hasImage ? (
        <AvatarPrimitive.Avatar.Image
          src={src}
          alt={alt ?? (`${firstName ?? ""} ${lastName ?? ""}`.trim() || "User avatar")}
          className={clsx(avatarImageVariants())}
        />
      ) : null}

      {!hasImage ? (
        <AvatarPrimitive.Avatar.Fallback
          data-slot="avatar-fallback"
          className={clsx(avatarFallbackVariants(), fallbackClassName)}
        >
          {icon ? sizedIcon : initials}
        </AvatarPrimitive.Avatar.Fallback>
      ) : null}
    </AvatarPrimitive.Avatar.Root>
  )
}

export { Avatar }

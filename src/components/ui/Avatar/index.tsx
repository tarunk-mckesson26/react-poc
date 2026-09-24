import * as AvatarPrimitive from "radix-ui"
import { clsx } from "@/lib/clsx"
import { avatarFallbackVariants, avatarImageVariants, avatarVariants } from "./style"
import type { AvatarProps } from "./type"

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
          {icon ?? initials}
        </AvatarPrimitive.Avatar.Fallback>
      ) : null}
    </AvatarPrimitive.Avatar.Root>
  )
}

export { Avatar }

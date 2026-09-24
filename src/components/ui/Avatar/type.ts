import type React from "react"
import { type VariantProps } from "class-variance-authority"
import { type avatarVariants } from "./style"

export interface AvatarProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof avatarVariants> {
  src?: string
  alt?: string
  firstName?: string
  lastName?: string
  icon?: React.ReactNode
  fallbackClassName?: string
}

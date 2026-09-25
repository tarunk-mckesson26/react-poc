import type React from "react"
import type { VariantProps } from "class-variance-authority"
import type { badgeVariants } from "./style"

export interface BadgeProps
  extends React.ComponentProps<"span">,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean
}
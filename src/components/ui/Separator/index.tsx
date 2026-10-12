import * as React from "react"
import { cn } from "cn"
import { Separator as SeparatorPrimitive } from "radix-ui"

import { separatorStyles } from "./style"
import type { SeparatorProps } from "./type"

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: SeparatorProps) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(separatorStyles, className)}
      {...props}
    />
  )
}

export { Separator }
export type { SeparatorProps }
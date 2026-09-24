import type * as React from "react"
import type { VariantProps } from "class-variance-authority"
import type { LoaderCircle } from "lucide-react"
import type { spinnerVariants } from "./style"

/**
 * Extends lucide-react's LoaderCircle icon props (className/aria/etc. come for free).
 * size is pulled from the CVA variants in style.ts, so it stays in sync automatically.
 */
export interface SpinnerProps
  extends Omit<React.ComponentProps<typeof LoaderCircle>, "size">,
    VariantProps<typeof spinnerVariants> {
  /** Screen-reader-only text describing what is loading. @default "Loading" */
  label?: string
}

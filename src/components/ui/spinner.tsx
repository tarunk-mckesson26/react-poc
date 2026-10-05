import type React from "react"
import { Loader2Icon } from "lucide-react"
import { clsx } from "@/lib/clsx"

/**
 * Spinner - shadcn-style loading indicator built on lucide's Loader2 icon.
 * Use `data-icon="inline-start"` (or `inline-end`) when placing inside a Button.
 */
function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <Loader2Icon
      role="status"
      aria-label="Loading"
      data-slot="spinner"
      className={clsx("size-4 animate-spin", className)}
      {...props}
    />
  )
}

export { Spinner }

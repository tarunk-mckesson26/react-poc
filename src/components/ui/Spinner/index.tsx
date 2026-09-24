import { LoaderCircle } from "lucide-react"
import { clsx } from "@/lib/clsx"
import { spinnerVariants } from "./style"
import type { SpinnerProps } from "./type"

/**
 * Spinner component - shadcn/ui style, built on lucide-react's LoaderCircle icon.
 *
 * Key features:
 * - Continuously rotates via Tailwind's `animate-spin` utility (fully CSS-driven)
 * - size switches the icon dimensions (3/4/5/6/8, matching Tailwind's size-* scale)
 * - Carries role="status" plus an sr-only label so loading state is announced
 */
const Spinner = ({ className, size = 5, label = "Loading", ...props }: SpinnerProps) => (
  <span role="status" data-slot="spinner" className="inline-flex items-center justify-center">
    <LoaderCircle
      data-slot="spinner-icon"
      aria-hidden="true"
      className={clsx(spinnerVariants({ size }), className)}
      {...props}
    />
    <span className="sr-only">{label}</span>
  </span>
)

export { Spinner, spinnerVariants }

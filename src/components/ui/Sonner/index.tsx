import { X } from "lucide-react"
import { Toaster as SonnerToaster, toast } from "sonner"
import { clsx } from "@/lib/clsx"
import { sonnerCloseVariants, sonnerIconVariants, sonnerVariants } from "./style"
import type { SonnerFill, SonnerProps, SonnerToastOptions, SonnerToasterProps } from "./type"

const FILL_PRESETS = ["success", "error", "custom"] as const

const isPreset = (fill: string): fill is SonnerFill =>
  (FILL_PRESETS as readonly string[]).includes(fill)

/**
 * Toast body. Rendered by the `sonner()` helper via `toast.custom`, but can also
 * be used standalone (e.g. inline banners or tests).
 */
const Sonner = ({
  text,
  icon,
  fill = "success",
  color,
  size = "default",
  description,
  closable = false,
  onClose,
  className,
  iconClassName,
  textClassName,
}: SonnerProps) => {
  const preset = isPreset(fill) ? fill : "custom"

  return (
    <div
      data-slot="sonner"
      role="status"
      aria-live="polite"
      className={clsx(sonnerVariants({ fill: preset, size }), className)}
      style={{
        backgroundColor: preset === "custom" ? fill : undefined,
        color,
      }}
    >
      {icon ? <span className={clsx(sonnerIconVariants(), iconClassName)}>{icon}</span> : null}

      <div className={clsx("flex min-w-0 flex-col gap-0.5", textClassName)}>
        <span className="font-medium">{text}</span>
        {description ? <span className="opacity-80">{description}</span> : null}
      </div>

      {closable ? (
        <button type="button" aria-label="Dismiss notification" onClick={onClose} className={sonnerCloseVariants()}>
          <X />
        </button>
      ) : null}
    </div>
  )
}

/** Imperatively show a toast. Returns the toast id so it can be dismissed. */
const sonner = ({ id, duration, position, onAutoClose, onDismiss, ...props }: SonnerToastOptions) =>
  toast.custom(
    (toastId) => <Sonner {...props} closable={props.closable ?? true} onClose={() => toast.dismiss(toastId)} />,
    { id, duration, position, onAutoClose, onDismiss }
  )

sonner.dismiss = toast.dismiss

/** Mount once near the app root for `sonner()` calls to render. */
const Toaster = ({ position = "bottom-right", ...props }: SonnerToasterProps) => (
  <SonnerToaster
    position={position}
    toastOptions={{ unstyled: true, classNames: { toast: "w-full" } }}
    {...props}
  />
)

export { Sonner, Toaster, sonner, sonnerVariants }
export type { SonnerProps, SonnerToastOptions, SonnerToasterProps, SonnerFill } from "./type"

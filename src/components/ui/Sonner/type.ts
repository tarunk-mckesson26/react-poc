import type React from "react"
import type { ToasterProps, ExternalToast } from "sonner"
import type { VariantProps } from "class-variance-authority"
import type { sonnerVariants } from "./style"

export type SonnerFill = NonNullable<VariantProps<typeof sonnerVariants>["fill"]>

export type SonnerSize = NonNullable<VariantProps<typeof sonnerVariants>["size"]>

export interface SonnerProps {
  /** Message rendered inside the toast */
  text: React.ReactNode
  /** Leading element — icon, image, or any node */
  icon?: React.ReactNode
  /** Preset fill, or any CSS color string (e.g. "#7C3AED", "rgb(0 0 0 / 50%)") */
  fill?: SonnerFill | (string & {})
  /** Text/icon color, defaults to the preset's foreground */
  color?: string
  size?: SonnerSize
  /** Secondary line below the text */
  description?: React.ReactNode
  /** Renders a dismiss button */
  closable?: boolean
  onClose?: () => void
  className?: string
  iconClassName?: string
  textClassName?: string
}

/** Options accepted by the imperative `sonner()` helper */
export type SonnerToastOptions = SonnerProps &
  Pick<ExternalToast, "id" | "duration" | "position" | "onAutoClose" | "onDismiss">

export type SonnerToasterProps = ToasterProps

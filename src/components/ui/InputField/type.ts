import type React from "react"

/**
 * `default` — bordered box input.
 * `bare` — borderless field that blends into the surrounding layout.
 */
export type InputVariant = "default" | "bare"

/** Supported field types; `default` renders a plain text input. */
export type InputType = "default" | "password" | "file"

export type InputProps = Omit<React.ComponentProps<"input">, "type"> & {
  /** Visual style of the field — defaults to `default` */
  variant?: InputVariant
  /** Field type — defaults to `default` (text) */
  type?: InputType
  /** Marks the field as invalid; mirrors to `aria-invalid` */
  invalid?: boolean
}
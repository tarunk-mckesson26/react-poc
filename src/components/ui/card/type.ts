import type React from "react"
import type { VariantProps } from "class-variance-authority"
import type { cardRootVariants } from "./style"

/**
 * Centralized type definitions for the Card component family.
 * Primitive prop types mirror shadcn/ui so consumers can build custom layouts,
 * while `CardComponentProps` powers the composed wrapper in `./index`.
 */

export type CardProps = React.ComponentProps<"div"> &
  VariantProps<typeof cardRootVariants>

export type CardHeaderProps = React.ComponentProps<"div">
export type CardTitleProps = React.ComponentProps<"div">
export type CardDescriptionProps = React.ComponentProps<"div">
export type CardActionProps = React.ComponentProps<"div">
export type CardContentProps = React.ComponentProps<"div">
export type CardFooterProps = React.ComponentProps<"div">

/**
 * Props for the composed `CardComponent` wrapper.
 * Lets consumers pass plain content instead of hand-composing
 * `CardHeader` / `CardTitle` / `CardDescription` / `CardAction` /
 * `CardContent` / `CardFooter` for the common case.
 */
export interface CardComponentProps
  extends Omit<CardProps, "title">,
    VariantProps<typeof cardRootVariants> {
  /** Media rendered as the first child, e.g. an `<img>` */
  image?: React.ReactNode
  /** Heading rendered inside `CardHeader` via `CardTitle` */
  title?: React.ReactNode
  /** Supporting text rendered inside `CardHeader` via `CardDescription` */
  description?: React.ReactNode
  /** Content rendered inside `CardHeader` via `CardAction` (e.g. a button) */
  action?: React.ReactNode
  /** Main body rendered inside `CardContent` */
  children?: React.ReactNode
  /** Content rendered inside `CardFooter` */
  footer?: React.ReactNode
  /** className applied to `CardHeader` */
  headerClassName?: string
  /** className applied to `CardTitle` */
  titleClassName?: string
  /** className applied to `CardDescription` */
  descriptionClassName?: string
  /** className applied to `CardAction` */
  actionClassName?: string
  /** className applied to `CardContent` */
  contentClassName?: string
  /** className applied to `CardFooter` */
  footerClassName?: string
}

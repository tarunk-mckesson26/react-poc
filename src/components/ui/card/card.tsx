import { clsx } from "@/lib/clsx"

import {
  cardActionClass,
  cardContentClass,
  cardDescriptionClass,
  cardFooterClass,
  cardHeaderClass,
  cardRootVariants,
  cardTitleClass,
} from "./style"
import type {
  CardActionProps,
  CardContentProps,
  CardDescriptionProps,
  CardFooterProps,
  CardHeaderProps,
  CardProps,
  CardTitleProps,
} from "./type"

/**
 * Card primitives — thin wrappers that apply the shared design tokens.
 * Composition mirrors shadcn/ui so consumers can build custom layouts;
 * the default `CardComponent` in `./index` covers the common use case.
 */

function Card({ className, size = "default", ...props }: CardProps) {
  return (
    <div
      data-slot="card"
      data-size={size}
      className={clsx(cardRootVariants({ size }), className)}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: CardHeaderProps) {
  return (
    <div
      data-slot="card-header"
      className={clsx(cardHeaderClass, className)}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: CardTitleProps) {
  return (
    <div
      data-slot="card-title"
      className={clsx(cardTitleClass, className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: CardDescriptionProps) {
  return (
    <div
      data-slot="card-description"
      className={clsx(cardDescriptionClass, className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: CardActionProps) {
  return (
    <div
      data-slot="card-action"
      className={clsx(cardActionClass, className)}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: CardContentProps) {
  return (
    <div
      data-slot="card-content"
      className={clsx(cardContentClass, className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: CardFooterProps) {
  return (
    <div
      data-slot="card-footer"
      className={clsx(cardFooterClass, className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card"
import type { CardComponentProps } from "./type"

/**
 * Dynamic Card wrapper.
 *
 * Composes `CardHeader` / `CardTitle` / `CardDescription` / `CardAction` /
 * `CardContent` / `CardFooter` from plain props so consumers don't need to
 * hand-assemble the primitives for the common case. The header is only
 * rendered when `title`, `description` or `action` is provided, and the
 * footer only when `footer` is provided.
 */
function CardComponent({
  size = "default",
  className,
  image,
  title,
  description,
  action,
  children,
  footer,
  headerClassName,
  titleClassName,
  descriptionClassName,
  actionClassName,
  contentClassName,
  footerClassName,
  ...props
}: CardComponentProps) {
  const hasHeader = Boolean(title || description || action)

  return (
    <Card size={size} className={className} {...props}>
      {image}
      {hasHeader && (
        <CardHeader className={headerClassName}>
          {title && <CardTitle className={titleClassName}>{title}</CardTitle>}
          {description && (
            <CardDescription className={descriptionClassName}>
              {description}
            </CardDescription>
          )}
          {action && (
            <CardAction className={actionClassName}>{action}</CardAction>
          )}
        </CardHeader>
      )}
      {children && (
        <CardContent className={contentClassName}>{children}</CardContent>
      )}
      {footer && <CardFooter className={footerClassName}>{footer}</CardFooter>}
    </Card>
  )
}

export {
  CardComponent,
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
export type { CardComponentProps } from "./type"

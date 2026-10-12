import { cva } from "class-variance-authority"

/**
 * Card styling tokens and CVA variants.
 * Class strings are extracted from the primitives so the component files stay
 * focused on composition and stay consistent with the rest of the design system.
 */

export const cardRootVariants = cva(
  "group/card flex flex-col gap-(--card-spacing) overflow-hidden rounded-xl bg-card text-sm text-card-foreground ring-1 ring-foreground/10 py-(--card-spacing) has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl",
  {
    variants: {
      size: {
        default: "[--card-spacing:--spacing(4)]",
        sm: "[--card-spacing:--spacing(3)] has-data-[slot=card-footer]:pb-0",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

export const cardHeaderClass =
  "group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-(--card-spacing) has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-(--card-spacing)"

export const cardTitleClass =
  "text-base leading-snug font-medium group-data-[size=sm]/card:text-sm"

export const cardDescriptionClass = "text-sm text-muted-foreground"

export const cardActionClass =
  "col-start-2 row-span-2 row-start-1 self-start justify-self-end"

export const cardContentClass = "px-(--card-spacing)"

export const cardFooterClass =
  "flex items-center rounded-b-xl border-t bg-muted/50 p-(--card-spacing)"

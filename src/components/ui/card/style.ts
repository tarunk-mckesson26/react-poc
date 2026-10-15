import { cva } from "class-variance-authority"

/**
 * Card styling tokens and CVA variants.
 * Class strings are extracted from the primitives so the component files stay
 * focused on composition and stay consistent with the rest of the design system.
 */

export const cardRootVariants = cva(
  "group/card flex flex-col gap-(--card-spacing) overflow-hidden rounded-xl bg-card text-sm text-card-foreground border border-[#0A0A0A1A] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] py-(--card-spacing) has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl",
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
  "text-base leading-6 font-medium text-[#333333] group-data-[size=sm]/card:text-sm group-data-[size=sm]/card:leading-5"

export const cardDescriptionClass = "text-sm leading-5 text-[#6e6e6e]"

export const cardActionClass =
  "col-start-2 row-span-2 row-start-1 self-start justify-self-end"

export const cardContentClass = "px-(--card-spacing)"

export const cardFooterClass =
  "flex items-center rounded-b-xl border-t bg-muted/50 p-(--card-spacing)"

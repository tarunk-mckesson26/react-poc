import { cva } from "class-variance-authority"

/**
 * Accordion styling tokens and CVA variants.
 * Class strings are extracted from the primitives so the component files stay
 * focused on composition and stay consistent with the rest of the design system.
 */

/**
 * `basic` keeps the accordion flush with the page and separates every item
 * (including the last) with a bottom rule. `border` wraps the whole component
 * in a rounded outline and only draws rules between items.
 */
export const accordionRootVariants = cva("flex w-full flex-col", {
  variants: {
    variant: {
      basic: "",
      border: "rounded-lg border border-border",
    },
  },
  defaultVariants: {
    variant: "basic",
  },
})

export const accordionItemVariants = cva("", {
  variants: {
    variant: {
      basic: "border-b border-border",
      border: "px-4 not-last:border-b not-last:border-border",
    },
  },
  defaultVariants: {
    variant: "basic",
  },
})

export const accordionHeaderClass = "flex"

export const accordionTriggerClass =
  "group/accordion-trigger relative flex flex-1 items-start justify-between rounded-lg border border-transparent py-[9px] text-[14px] leading-5 text-text font-medium font-semibold transition-all outline-none hover:underline cursor-pointer focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:after:border-ring disabled:pointer-events-none disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-4 **:data-[slot=accordion-trigger-icon]:text-muted-foreground"

export const accordionTriggerIconOpenClass =
  "pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden"

export const accordionTriggerIconCloseClass =
  "pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline"

export const accordionContentAnimationClass =
  "overflow-hidden text-sm data-open:animate-accordion-down data-closed:animate-accordion-up"

export const accordionContentInnerClass =
  "text-[14px] leading-5 text-text h-(--radix-accordion-content-height) pt-0 pb-2.5 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4"

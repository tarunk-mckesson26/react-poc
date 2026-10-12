import { cva } from "class-variance-authority"

/**
 * Accordion styling tokens and CVA variants.
 * Class strings are extracted from the primitives so the component files stay
 * focused on composition and stay consistent with the rest of the design system.
 */

export const accordionRootClass = "flex w-full flex-col"

export const accordionItemVariants = cva("", {
  variants: {
    bordered: {
      true: "not-last:border-b",
      false: "",
    },
  },
  defaultVariants: {
    bordered: true,
  },
})

export const accordionHeaderClass = "flex"

export const accordionTriggerClass =
  "group/accordion-trigger relative flex flex-1 items-start justify-between rounded-lg border border-transparent py-2.5 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:after:border-ring disabled:pointer-events-none disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-4 **:data-[slot=accordion-trigger-icon]:text-muted-foreground"

export const accordionTriggerIconOpenClass =
  "pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden"

export const accordionTriggerIconCloseClass =
  "pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline"

export const accordionContentAnimationClass =
  "overflow-hidden text-sm data-open:animate-accordion-down data-closed:animate-accordion-up"

export const accordionContentInnerClass =
  "h-(--radix-accordion-content-height) pt-0 pb-2.5 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4"

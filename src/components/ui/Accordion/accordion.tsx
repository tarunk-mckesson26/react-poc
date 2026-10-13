import { clsx } from "@/lib/clsx"
import { Accordion as AccordionPrimitive } from "radix-ui"
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react"
import { createContext, useContext } from "react"

import {
  accordionContentAnimationClass,
  accordionContentInnerClass,
  accordionHeaderClass,
  accordionItemVariants,
  accordionRootVariants,
  accordionTriggerClass,
  accordionTriggerIconCloseClass,
  accordionTriggerIconOpenClass,
} from "./style"
import type {
  AccordionContentProps,
  AccordionItemProps,
  AccordionRootProps,
  AccordionTriggerProps,
  AccordionVariant,
} from "./type"

/**
 * Accordion primitives — thin wrappers around Radix UI primitives that apply
 * the shared design tokens. Composition mirrors shadcn/ui so consumers can
 * build custom layouts; the default `AccordionComponent` in `./index` covers
 * the common data-driven use case.
 */

// Lets hand-composed `AccordionItem`s inherit the root's variant
const AccordionVariantContext = createContext<AccordionVariant>("basic")

function Accordion({
  className,
  variant = "basic",
  ...props
}: AccordionRootProps) {
  return (
    <AccordionVariantContext.Provider value={variant}>
      <AccordionPrimitive.Root
        data-slot="accordion"
        data-variant={variant}
        className={clsx(accordionRootVariants({ variant }), className)}
        {...props}
      />
    </AccordionVariantContext.Provider>
  )
}

function AccordionItem({ className, variant, ...props }: AccordionItemProps) {
  const inheritedVariant = useContext(AccordionVariantContext)

  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={clsx(
        accordionItemVariants({ variant: variant ?? inheritedVariant }),
        className
      )}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionTriggerProps) {
  return (
    <AccordionPrimitive.Header className={accordionHeaderClass}>
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={clsx(accordionTriggerClass, className)}
        {...props}
      >
        {children}
        <ChevronDownIcon
          data-slot="accordion-trigger-icon"
          className={accordionTriggerIconOpenClass}
        />
        <ChevronUpIcon
          data-slot="accordion-trigger-icon"
          className={accordionTriggerIconCloseClass}
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: AccordionContentProps) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className={accordionContentAnimationClass}
      {...props}
    >
      <div className={clsx(accordionContentInnerClass, className)}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

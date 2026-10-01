import { clsx } from "@/lib/clsx"
import { Accordion as AccordionPrimitive } from "radix-ui"
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react"

import {
  accordionContentAnimationClass,
  accordionContentInnerClass,
  accordionHeaderClass,
  accordionItemVariants,
  accordionRootClass,
  accordionTriggerClass,
  accordionTriggerIconCloseClass,
  accordionTriggerIconOpenClass,
} from "./style"
import type {
  AccordionContentProps,
  AccordionItemProps,
  AccordionRootProps,
  AccordionTriggerProps,
} from "./type"

/**
 * Accordion primitives — thin wrappers around Radix UI primitives that apply
 * the shared design tokens. Composition mirrors shadcn/ui so consumers can
 * build custom layouts; the default `AccordionComponent` in `./index` covers
 * the common data-driven use case.
 */

function Accordion({ className, ...props }: AccordionRootProps) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={clsx(accordionRootClass, className)}
      {...props}
    />
  )
}

function AccordionItem({ className, ...props }: AccordionItemProps) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={clsx(accordionItemVariants({ bordered: true }), className)}
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

import type React from "react"
import type { Accordion as AccordionPrimitive } from "radix-ui"

/**
 * Centralized type definitions for the Accordion component family.
 * Primitive prop types mirror Radix so consumers can build custom layouts,
 * while `AccordionComponentProps` powers the dynamic wrapper in `./index`.
 */

export type AccordionRootProps = React.ComponentProps<
  typeof AccordionPrimitive.Root
>

export type AccordionItemProps = React.ComponentProps<
  typeof AccordionPrimitive.Item
>

export type AccordionTriggerProps = React.ComponentProps<
  typeof AccordionPrimitive.Trigger
>

export type AccordionContentProps = React.ComponentProps<
  typeof AccordionPrimitive.Content
>

/**
 * Shape of a single item passed to `AccordionComponent`.
 */
export interface AccordionItemData {
  /** Unique identifier used as the Radix item `value` */
  value: string
  /** Header content — text, icon, or any React node */
  title: React.ReactNode
  /** Body content revealed when the item is expanded */
  content: React.ReactNode
  /** Disable interaction with this item */
  disabled?: boolean
}

/**
 * Props for the composed `AccordionComponent` wrapper.
 * Extends Radix's Root props (so `type`, `value`, `onValueChange`,
 * `collapsible`, etc. keep their discriminated typing) and adds the dynamic
 * `items` array plus per-slot className overrides.
 */
export type AccordionComponentProps = AccordionRootProps & {
  /** Items rendered inside the accordion */
  items: AccordionItemData[]
  /** className applied to each `AccordionItem` */
  itemClassName?: string
  /** className applied to each `AccordionTrigger` */
  triggerClassName?: string
  /** className applied to each `AccordionContent` */
  contentClassName?: string
}

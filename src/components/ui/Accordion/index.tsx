import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion"
import type { AccordionComponentProps } from "./type"

/**
 * Dynamic Accordion wrapper.
 *
 * Renders a collapsible list from a plain `items` array so consumers don't
 * need to hand-compose `AccordionItem` / `AccordionTrigger` / `AccordionContent`
 * for the common case. All Radix Root props (`type`, `value`, `defaultValue`,
 * `onValueChange`, `collapsible`, etc.) pass straight through, keeping the
 * discriminated typing for controlled/uncontrolled and single/multiple modes.
 */
function AccordionComponent({
  items,
  className,
  itemClassName,
  triggerClassName,
  contentClassName,
  ...rootProps
}: AccordionComponentProps) {
  return (
    <Accordion className={className} {...rootProps}>
      {items.map(({ value, title, content, disabled }) => (
        <AccordionItem key={value} value={value} className={itemClassName}>
          <AccordionTrigger disabled={disabled} className={triggerClassName}>
            {title}
          </AccordionTrigger>
          <AccordionContent className={contentClassName}>
            {content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export {
  AccordionComponent,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
}
export type { AccordionComponentProps, AccordionItemData } from "./type"

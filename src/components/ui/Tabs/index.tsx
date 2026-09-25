import { Tabs as TabsPrimitive } from "radix-ui"
import { clsx } from "@/lib/clsx"
import { tabsContentVariants, tabsListVariants, tabsTriggerVariants } from "./style"
import type {
  TabsComponentItem,
  TabsComponentProps,
  TabsContentProps,
  TabsListProps,
  TabsProps,
  TabsTriggerProps,
} from "./type"

/**
 * Tabs components - shadcn/ui style, built on Radix's Tabs primitive.
 *
 * Key features:
 * - Radix handles ARIA (tablist/tab/tabpanel roles), keyboard nav, and data-state
 * - Active tab styling (color + underline) is pure CSS via data-[state=active]:
 * - Fully data-driven at the call site - map your own array into TabsTrigger/TabsContent
 */
const Tabs = ({ className, ...props }: TabsProps) => (
  <TabsPrimitive.Root data-slot="tabs" className={clsx("w-full", className)} {...props} />
)

const TabsList = ({ className, ...props }: TabsListProps) => (
  <TabsPrimitive.List data-slot="tabs-list" className={clsx(tabsListVariants(), className)} {...props} />
)

const TabsTrigger = ({ className, ...props }: TabsTriggerProps) => (
  <TabsPrimitive.Trigger
    data-slot="tabs-trigger"
    className={clsx(tabsTriggerVariants(), className)}
    {...props}
  />
)

const TabsContent = ({ className, ...props }: TabsContentProps) => (
  <TabsPrimitive.Content
    data-slot="tabs-content"
    className={clsx(tabsContentVariants(), className)}
    {...props}
  />
)

function TabsComponent({
  items,
  defaultValue,
  listClassName,
  triggerClassName,
  contentClassName,
  ...props
}: TabsComponentProps) {
  const fallbackValue = items.find((item) => !item.disabled)?.value

  return (
    <Tabs defaultValue={defaultValue ?? fallbackValue} {...props}>
      <TabsList className={listClassName}>
        {items.map((item) => (
          <TabsTrigger
            key={item.value}
            value={item.value}
            disabled={item.disabled}
            className={clsx(triggerClassName, item.triggerClassName)}
          >
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {items.map((item) => (
        <TabsContent
          key={item.value}
          value={item.value}
          className={clsx(contentClassName, item.contentClassName)}
        >
          {item.content}
        </TabsContent>
      ))}
    </Tabs>
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent, TabsComponent, tabsListVariants, tabsTriggerVariants }
export type { TabsComponentItem, TabsComponentProps }

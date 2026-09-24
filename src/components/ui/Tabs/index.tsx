import { Tabs as TabsPrimitive } from "radix-ui"
import { clsx } from "@/lib/clsx"
import { tabsContentVariants, tabsListVariants, tabsTriggerVariants } from "./style"
import type { TabsContentProps, TabsListProps, TabsProps, TabsTriggerProps } from "./type"

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

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants, tabsTriggerVariants }

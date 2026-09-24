import type * as React from "react"
import type { Tabs as TabsPrimitive } from "radix-ui"

/** Convenience shape for data-driven tab lists - use to `.map()` at the call site. */
export interface TabItem {
  value: string
  label: React.ReactNode
  disabled?: boolean
}

export type TabsProps = React.ComponentProps<typeof TabsPrimitive.Root>
export type TabsListProps = React.ComponentProps<typeof TabsPrimitive.List>
export type TabsTriggerProps = React.ComponentProps<typeof TabsPrimitive.Trigger>
export type TabsContentProps = React.ComponentProps<typeof TabsPrimitive.Content>

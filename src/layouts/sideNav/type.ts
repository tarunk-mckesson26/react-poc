import type React from "react"

export interface SideNavItem {
  /** Unique key used for selection */
  id: string
  label: React.ReactNode
  icon?: React.ReactNode
  disabled?: boolean
}

export interface SideNavSection {
  id: string
  title?: React.ReactNode
  items: SideNavItem[]
}

export interface SideNavProps extends Omit<React.ComponentProps<"nav">, "onSelect" | "title"> {
  /** Grouped navigation entries */
  sections: SideNavSection[]
  /** Currently selected item id */
  activeId?: string
  onSelect?: (id: string) => void
  title?: React.ReactNode
  subtitle?: React.ReactNode
  /** Renders the rail in icon-only mode */
  collapsed?: boolean
  onCollapsedChange?: (collapsed: boolean) => void
  className?: string
}

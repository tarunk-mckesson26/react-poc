import type { ComponentPropsWithoutRef, ReactNode } from "react"

export type HeaderLoginType = "cph" | "non-cph"

export interface HeaderNavigationItem {
  label: string
  href: string
  children?: { label: string; href: string; target?: "_self" | "_blank"; isNew?: boolean }[]
}

export interface HeaderProps extends Omit<ComponentPropsWithoutRef<"header">, "onSearch"> {
  logo?: ReactNode
  homeHref?: string
  navigation?: HeaderNavigationItem[]
  reportingOnly?: boolean
  alertCount?: number
  alertsHref?: string
  contactHref?: string
  helpHref?: string
  appsHref?: string
  accountLabel?: string
  accountOptions?: { label: string; href: string }[]
  locationOptions?: string[]
  profileInitials?: string
  userType?: HeaderLoginType | null
  newEraHref?: string
  loginHref?: string
  onSearch?: (query: string, catalog: string) => void
  catalogOptions?: string[]
}
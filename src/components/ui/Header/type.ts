import type { ComponentPropsWithoutRef, ReactNode } from "react"

export type HeaderLoginType = "cph" | "non-cph"

export interface HeaderNavigationItem {
  label: string
  href: string
  children?: { label: string; href: string; target?: "_self" | "_blank" }[]
}

export interface HeaderProps extends Omit<ComponentPropsWithoutRef<"header">, "onSearch"> {
  logo?: ReactNode
  homeHref?: string
  navigation?: HeaderNavigationItem[]
  alertCount?: number
  alertsHref?: string
  contactHref?: string
  helpHref?: string
  appsHref?: string
  accountLabel?: string
  accountOptions?: { label: string; href: string }[]
  profileInitials?: string
  userType?: HeaderLoginType | null
  newEraHref?: string
  cphLoginHref?: string
  nonCphLoginHref?: string
  onLogin?: (userType: HeaderLoginType) => void
  onSearch?: (query: string, catalog: string) => void
  catalogOptions?: string[]
}
import { useId, useState } from "react"
import { Bell, ChevronDown, CircleHelp, Grid3X3, Menu, Phone, Search, UserRound, X } from "lucide-react"
import { DropdownMenu } from "radix-ui"
import { clsx } from "@/lib/clsx"
import { headerStyles } from "./style"
import type { HeaderNavigationItem, HeaderProps } from "./type"
import "./header.css"

const defaultNavigation: HeaderNavigationItem[] = [
  { label: "Ordering", href: "/ordering" },
  { label: "Reporting", href: "/reporting" },
  { label: "DSCSA Traceability", href: "/traceability" },
  { label: "Billing and Payments", href: "/billing" },
  { label: "340B Architect", href: "/340b" },
  { label: "Admin", href: "/administration" },
]

function Header({
  logo = "MCKESSON",
  homeHref = "/",
  navigation = defaultNavigation,
  alertCount = 0,
  alertsHref = "/alerts",
  contactHref = "/contact",
  helpHref = "/help",
  appsHref = "/apps",
  accountLabel = "VUMC IP VUH WAC A34",
  accountOptions = [],
  profileInitials = "EV",
  userType,
  newEraHref = "/new-era",
  loginHref = "/login",
  onSearch,
  catalogOptions = ["Catalog"],
  className,
  ...props
}: HeaderProps) {
  const [query, setQuery] = useState("")
  const [catalog, setCatalog] = useState(catalogOptions[0] ?? "Catalog")
  const [navigationOpen, setNavigationOpen] = useState(false)
  const activeUserType = userType
  const visibleNavigation = navigation.map((item) => {
    if (item.label !== "Reporting") return item
    return {
      ...item,
      children: [
        { label: "Enterprise Reporting & Analytics", href: "https://dev-era.mckesson.com", target: "_blank" as const },
        { label: "My Reports", href: "/reporting/my-reports" },
        { label: "Team Reports", href: "/reporting/team-reports" },
        ...(item.children ?? []),
        ...(activeUserType === "cph" ? [{
          label: "KPI Dashboard",
          href: newEraHref,
          target: "_blank" as const,
          isNew: true,
        }] : []),
      ],
    }
  })
  const navigationId = useId()

  return (
    <header className={clsx(headerStyles.root, className)} {...props}>
      <div className="cph-header-top">
        <a className="cph-header-brand" href={homeHref} aria-label="McKesson home">{logo}</a>
        <nav id={navigationId} className="cph-header-navigation" data-open={navigationOpen} aria-label="Main navigation">
          {visibleNavigation.map((item) => item.children?.length ? (
            <DropdownMenu.Root key={item.label}>
              <DropdownMenu.Trigger className="cph-header-nav-trigger">{item.label}<ChevronDown size={11} /></DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content className={headerStyles.menu} align="start" sideOffset={0} collisionPadding={12}>
                  {item.children.map((child) => <DropdownMenu.Item key={child.href} className={headerStyles.menuItem} asChild><a href={child.href} target={child.target} rel={child.target === "_blank" ? "noopener noreferrer" : undefined}>{child.label}{child.isNew && <span className="cph-header-menu-new">New</span>}</a></DropdownMenu.Item>)}
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          ) : <a key={item.label} href={item.href}>{item.label}</a>)}
        </nav>
        <nav className="cph-header-utilities" aria-label="Utility navigation">
          <a href={contactHref} className="cph-header-contact" aria-label="Contact Us" title="Contact Us"><Phone size={13} /><span>Contact Us</span></a>
          <a href={alertsHref} aria-label={alertCount ? `Notifications (${alertCount})` : "Notifications"} title="Notifications"><Bell size={14} /><span>Notifications{alertCount > 0 ? ` (${alertCount})` : ""}</span></a>
          <a href={helpHref} aria-label="Help" title="Help"><CircleHelp size={14} /><span>Help</span></a>
          <a href={appsHref} aria-label="Apps" title="Apps"><Grid3X3 size={14} /><span>Apps</span></a>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger className="cph-header-profile" aria-label="Profile" title="Profile">
              <span className="cph-header-profile-avatar" aria-hidden="true">{activeUserType === "cph" ? "CPH" : activeUserType === "non-cph" ? "N-CPH" : profileInitials}</span><span className="cph-header-profile-label">Profile</span>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content className={headerStyles.menu} align="end" sideOffset={10} collisionPadding={12}>
                <DropdownMenu.Item className={headerStyles.menuItem} asChild>
                  <a href={loginHref}>Sign In</a>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </nav>
        <button type="button" className="cph-header-mobile-toggle" aria-label={navigationOpen ? "Close navigation" : "Open navigation"} aria-expanded={navigationOpen} aria-controls={navigationId} onClick={() => setNavigationOpen(!navigationOpen)} title="Toggle navigation">
          {navigationOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <div className="cph-header-bottom">
        {accountOptions.length ? (
          <DropdownMenu.Root>
            <DropdownMenu.Trigger className="cph-header-account" aria-label={`Account: ${accountLabel}`}>
              <UserRound size={16} /><span>{accountLabel}</span><ChevronDown size={14} />
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content className={headerStyles.menu} align="start" sideOffset={6} collisionPadding={12}>
                {accountOptions.map((account) => <DropdownMenu.Item key={account.href} className={headerStyles.menuItem} asChild><a href={account.href}>{account.label}</a></DropdownMenu.Item>)}
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        ) : <div className="cph-header-account"><UserRound size={16} /><span>{accountLabel}</span></div>}
        <form className="cph-header-search" role="search" onSubmit={(event) => {
          event.preventDefault()
          if (query.trim()) onSearch?.(query.trim(), catalog)
        }}>
          <select aria-label="Search catalog" value={catalog} onChange={(event) => setCatalog(event.target.value)}>
            {catalogOptions.map((option) => <option key={option}>{option}</option>)}
          </select>
          <input aria-label="Look up item details" placeholder="Look up item details" value={query} onChange={(event) => setQuery(event.target.value)} />
          <button type="submit" aria-label="Search" title="Search"><Search size={18} /></button>
        </form>
      </div>
    </header>
  )
}

export { Header }
export type { HeaderProps, HeaderNavigationItem, HeaderLoginType } from "./type"
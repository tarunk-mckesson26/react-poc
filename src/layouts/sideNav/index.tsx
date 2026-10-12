import { PanelLeftClose, PanelLeftOpen } from "lucide-react"
import { clsx } from "@/lib/clsx"
import { Button } from "@/components/ui/Button"
import { TooltipComponent } from "@/components/ui/Tooltip"
import { sideNavItemVariants, sideNavSectionTitleVariants, sideNavVariants } from "./style"
import type { SideNavItem, SideNavProps } from "./type"

const SideNav = ({
  sections,
  activeId,
  onSelect,
  title = "Components",
  subtitle,
  collapsed = false,
  onCollapsedChange,
  className,
  ...props
}: SideNavProps) => {
  const renderItem = (item: SideNavItem) => {
    const button = (
      <button
        type="button"
        key={item.id}
        disabled={item.disabled}
        aria-current={activeId === item.id ? "page" : undefined}
        onClick={() => onSelect?.(item.id)}
        className={clsx(sideNavItemVariants({ active: activeId === item.id, collapsed }))}
      >
        {item.icon ? <span className="[&>svg]:size-4">{item.icon}</span> : null}
        {!collapsed && <span className="truncate">{item.label}</span>}
      </button>
    )

    return collapsed ? (
      <TooltipComponent key={item.id} side="right" trigger={button} content={item.label} />
    ) : (
      button
    )
  }

  return (
    <nav
      data-slot="side-nav"
      aria-label="Component navigation"
      className={clsx(sideNavVariants({ collapsed }), className)}
      {...props}
    >
      <div className={clsx("flex items-center gap-2", collapsed ? "justify-center" : "justify-between px-1")}>
        {!collapsed && (
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-foreground">{title}</span>
            {subtitle ? <span className="text-xs text-muted-foreground">{subtitle}</span> : null}
          </div>
        )}
        {onCollapsedChange ? (
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label={collapsed ? "Expand navigation" : "Collapse navigation"}
            onClick={() => onCollapsedChange(!collapsed)}
          >
            {collapsed ? <PanelLeftOpen /> : <PanelLeftClose />}
          </Button>
        ) : null}
      </div>

      <div className="flex w-full flex-1 flex-col gap-3 overflow-y-auto">
        {sections.map((section) => (
          <div key={section.id} className="flex w-full flex-col gap-1">
            {!collapsed && section.title ? (
              <span className={sideNavSectionTitleVariants()}>{section.title}</span>
            ) : null}
            {section.items.map(renderItem)}
          </div>
        ))}
      </div>
    </nav>
  )
}

export { SideNav }
export type { SideNavItem, SideNavProps, SideNavSection } from "./type"

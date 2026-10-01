import { cva } from "class-variance-authority"

export const sideNavVariants = cva(
  "flex h-full shrink-0 flex-col gap-4 border-r border-border bg-background py-4 transition-[width] duration-200",
  {
    variants: {
      collapsed: {
        true: "w-16 px-2 items-center",
        false: "w-64 px-3",
      },
    },
    defaultVariants: {
      collapsed: false,
    },
  }
)

export const sideNavItemVariants = cva(
  "flex w-full cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      active: {
        true: "bg-primary/10 text-primary",
        false: "text-foreground hover:bg-accent",
      },
      collapsed: {
        true: "justify-center px-0",
        false: "",
      },
    },
    defaultVariants: {
      active: false,
      collapsed: false,
    },
  }
)

export const sideNavSectionTitleVariants = cva(
  "px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
)

import { cva } from "class-variance-authority"

export const selectTriggerVariants = cva(
  "flex w-full items-center justify-between gap-2 border border-input bg-background text-foreground shadow-xs whitespace-nowrap transition-colors outline-none data-[placeholder]:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-muted *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 dark:bg-input/30",
  {
    variants: {
      size: {
        sm: "h-8 rounded-md px-2.5 text-xs",
        default: "h-9 rounded-lg px-3 text-sm",
        lg: "h-11 rounded-xl px-4 text-base",
      },
      focusRing: {
        true: "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 data-[state=open]:border-ring data-[state=open]:ring-3 data-[state=open]:ring-ring/50",
        false: "focus-visible:ring-0",
      },
      invalid: {
        true: "border-destructive ring-3 ring-destructive/20 focus-visible:border-destructive focus-visible:ring-destructive/30 data-[state=open]:border-destructive data-[state=open]:ring-destructive/30 dark:border-destructive/50 dark:ring-destructive/40",
        false: "",
      },
    },
    defaultVariants: {
      size: "default",
      focusRing: true,
      invalid: false,
    },
  }
)

export const selectIconClass = "size-4 shrink-0 opacity-50 pointer-events-none"

export const selectContentClass =
  "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"

export const selectPopperClass =
  "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1"

export const selectViewportClass = "p-1"

export const selectViewportPopperClass =
  "h-(--radix-select-trigger-height) w-full min-w-(--radix-select-trigger-width) scroll-my-1"

export const selectItemClass =
  "relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-none select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"

export const selectItemIndicatorClass =
  "absolute right-2 flex size-3.5 items-center justify-center"

export const selectLabelClass = "px-2 py-1.5 text-xs text-muted-foreground"

export const selectSeparatorClass = "pointer-events-none -mx-1 my-1 h-px bg-border"

export const selectScrollButtonClass =
  "flex cursor-default items-center justify-center py-1"

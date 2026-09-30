import { cva } from "class-variance-authority"

export const comboboxTriggerVariants = cva(
  "flex w-full items-center justify-between gap-2 border border-input bg-background text-foreground shadow-xs whitespace-nowrap transition-colors outline-none disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-muted dark:bg-input/30",
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

export const comboboxTriggerInnerClass = "flex min-w-0 items-center gap-2"

/** Applied to the trigger when selections render as removable chips */
export const comboboxTriggerChipsClass = "h-auto min-h-9 flex-wrap py-1"

export const comboboxChipListClass = "flex min-w-0 flex-wrap items-center gap-1"

export const comboboxChipClass =
  "flex max-w-full items-center gap-1 rounded-md border border-input bg-muted py-0.5 pr-1 pl-2 text-xs text-foreground"

export const comboboxChipRemoveClass =
  "flex size-4 shrink-0 cursor-pointer items-center justify-center rounded-sm opacity-60 transition-opacity hover:opacity-100"

export const comboboxChipOverflowClass =
  "rounded-md border border-input bg-muted px-2 py-0.5 text-xs text-muted-foreground"

export const comboboxLeadingIconClass =
  "shrink-0 [&_svg]:size-4 [&_svg]:shrink-0 text-muted-foreground"

export const comboboxValueClass = "line-clamp-1 text-left"

export const comboboxPlaceholderClass = "line-clamp-1 text-left text-muted-foreground"

export const comboboxIconClass = "size-4 shrink-0 opacity-50 pointer-events-none"

export const comboboxContentClass =
  "z-50 w-(--radix-popover-trigger-width) min-w-[8rem] origin-(--radix-popover-content-transform-origin) overflow-hidden rounded-md border bg-popover p-0 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"

export const commandClass =
  "flex w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground"

export const commandInputWrapperClass =
  "flex h-9 items-center gap-2 border-b px-3"

export const commandInputClass =
  "flex h-9 w-full bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"

export const commandListClass =
  "max-h-60 scroll-py-1 overflow-x-hidden overflow-y-auto p-1"

export const commandEmptyClass = "py-6 text-center text-sm text-muted-foreground"

export const commandGroupClass =
  "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:text-muted-foreground"

export const commandItemClass =
  "relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-none select-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0"

export const commandItemIndicatorClass =
  "absolute right-2 flex size-3.5 items-center justify-center"

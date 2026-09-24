import { cva } from "class-variance-authority"

/** Tabs list (row container) style variants using CVA. */
export const tabsListVariants = cva(
  "inline-flex w-full items-center gap-4 overflow-x-auto sm:gap-6"
)

/**
 * Tab trigger style variants using CVA.
 * Active/inactive + the underline bar react to Radix's data-state attribute -
 * no manual active-tracking needed in the component.
 */
export const tabsTriggerVariants = cva(
  "relative shrink-0 px-1 pb-3 text-sm font-medium whitespace-nowrap text-blue-900/70 outline-none transition-colors after:absolute after:inset-x-0 after:-bottom-px after:h-1 after:rounded-full after:bg-transparent after:transition-colors hover:text-blue-900 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=active]:text-orange-600 data-[state=active]:after:bg-orange-600"
)

/** Tab panel style variants using CVA. */
export const tabsContentVariants = cva("pt-4 text-sm text-slate-600 outline-none")

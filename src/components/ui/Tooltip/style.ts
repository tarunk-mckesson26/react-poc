/**
 * Tooltip styling
 * Centralizes all styling logic for consistent appearance across tooltips
 */

// animate-in/out + slide-in track Radix's data-state (delayed-open | instant-open | closed) and data-side
export const tooltipContentClass = "text-[12px] leading-4 z-50 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg origin-(--radix-tooltip-content-transform-origin) bg-primary text-primary-foreground max-w-[384px] animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2";

export const tooltipArrowClass =
  "fill-primary"


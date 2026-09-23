import { cn } from "cn"
import { Tooltip as TooltipPrimitive } from "radix-ui"
import { tooltipVariants, tooltipArrowClass } from "./style"
import type {
  TooltipProviderProps,
  TooltipRootProps,
  TooltipTriggerProps,
  TooltipContentProps,
} from "./type"

/**
 * Tooltip primitives wrapper components built on top of Radix UI
 * These provide the base building blocks for creating tooltips
 */

function TooltipProvider({
  delayDuration = 0,
  ...props
}: TooltipProviderProps) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  )
}

function Tooltip({ ...props }: TooltipRootProps) {
  return <TooltipPrimitive.Root data-slot="tooltip" {...props} />
}

function TooltipTrigger({ ...props }: TooltipTriggerProps) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}: TooltipContentProps) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(tooltipVariants(), className)}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className={tooltipArrowClass} />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger }
export type {
  TooltipProviderProps,
  TooltipRootProps,
  TooltipTriggerProps,
  TooltipContentProps,
} from "./type"


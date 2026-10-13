import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "./tooltip"
import type { TooltipComponentProps } from "./type"

/**
 * Tooltip wrapper component - built on top of Radix UI primitives
 *
 * Simplifies the common use case where you just need to pass a trigger element
 * and content, abstracting away the composition of trigger + content.
 *
 * Supports customizable positioning, sizing, delay, and disabled state.
 * Trigger can be text, an icon, or any React element.
 */
function TooltipComponent({
  trigger,
  content,
  side = "top",
  delayDuration = 200,
  disabled = false,
  className,
}: TooltipComponentProps) {
  if (disabled) {
    return <>{trigger}</>
  }

  // Radix needs a real element to attach the trigger ref to, so bare text is wrapped
  const triggerElement =
    typeof trigger === "string" ? (
      <span className="inline-flex">{trigger}</span>
    ) : (
      trigger
    )

  return (
    <TooltipProvider>
      <Tooltip delayDuration={delayDuration}>
        <TooltipTrigger asChild>{triggerElement}</TooltipTrigger>
        <TooltipContent side={side} className={className}>
          {content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export {
  TooltipComponent,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
}
export type {
  TooltipComponentProps,
  TooltipContentProps,
  TooltipProviderProps,
  TooltipRootProps,
  TooltipTriggerProps,
} from "./type"

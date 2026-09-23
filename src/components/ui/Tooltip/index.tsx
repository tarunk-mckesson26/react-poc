import { clsx } from "@/lib/clsx"
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "./tooltip"
import { tooltipVariants } from "./style"
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
export function TooltipComponent({
    trigger,
    content,
    side = "top",
    size = "sm",
    delayDuration = 200,
    disabled = false,
    className,
}: TooltipComponentProps) {
    // Don't render tooltip if disabled
    if (disabled) {
        return <>{trigger}</>
    }

    // Auto-wrap string triggers in a span for proper Radix UI handling
    // This allows users to pass text, icons, or elements
    const triggerElement = typeof trigger === "string"
        ? <span className="inline-flex">{trigger}</span>
        : trigger

    return (
        <TooltipProvider>
            <Tooltip delayDuration={delayDuration}>
                <TooltipTrigger asChild>
                    {triggerElement}
                </TooltipTrigger>
                <TooltipContent
                    side={side}
                    className={clsx(tooltipVariants({ size }), className)}
                >
                    {content}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>

    )
}

export { tooltipVariants }
export type { TooltipComponentProps }

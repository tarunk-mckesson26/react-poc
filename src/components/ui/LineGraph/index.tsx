import { Area, AreaChart, CartesianGrid, XAxis, Dot } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  defaultActiveDotConfig,
  defaultAreaConfig,
  defaultAxisConfig,
  defaultCartesianGridConfig,
  defaultDotConfig,
  defaultGradientId,
  lineGraphContainerClass,
} from "./style"
import type { LineGraphProps } from "./type"

/**
 * Custom Dot component wrapper to properly handle onClick events from Recharts
 */
function CustomDot(props: any) {
  const { cx, cy, fill, payload, onDotClick } = props
  
  return (
    <circle
      cx={cx}
      cy={cy}
      r={5}
      fill={fill}
      style={{ cursor: "pointer" }}
      onClick={() => onDotClick?.(payload)}
    />
  )
}

/**
 * LineGraph (Area Chart) Component
 *
 * Renders an interactive area chart with customizable data, colors, gradients,
 * and callbacks. Built on Recharts + our ChartContainer for consistency.
 *
 * Data points should have consistent keys; specify which key represents the
 * value and which represents the X-axis label via `dataKey` and `xAxisKey`.
 */
export function LineGraph({
  data,
  config,
  dataKey,
  xAxisKey,
  color = "#16a34a",
  title,
  className,
  onDotClick,
  showDots = true,
  gradientColor,
  gradientOpacity = [0.25, 0.1, 0],
  strokeWidth = 3,
}: LineGraphProps) {
  const gradColor = gradientColor || color
  const gradientId = defaultGradientId

  return (
    <div className="w-full">
      {title && <h3 className="text-sm font-semibold mb-4">{title}</h3>}

      <ChartContainer
        config={config}
        className={className || lineGraphContainerClass}
      >
        <AreaChart accessibilityLayer data={data}>
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="0%"
                stopColor={gradColor}
                stopOpacity={gradientOpacity[0]}
              />
              <stop
                offset="45%"
                stopColor={gradColor}
                stopOpacity={gradientOpacity[1]}
              />
              <stop
                offset="100%"
                stopColor={gradColor}
                stopOpacity={gradientOpacity[2]}
              />
            </linearGradient>
          </defs>

          <CartesianGrid {...defaultCartesianGridConfig} />

          <XAxis dataKey={xAxisKey} {...defaultAxisConfig} />

          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

          <Area
            {...defaultAreaConfig}
            dataKey={dataKey}
            stroke={color}
            strokeWidth={strokeWidth}
            fill={`url(#${gradientId})`}
            dot={
              showDots
                ? (
                    <CustomDot
                      {...defaultDotConfig}
                      onDotClick={onDotClick}
                    />
                  )
                : false
            }
            activeDot={showDots ? defaultActiveDotConfig : false}
          />
        </AreaChart>
      </ChartContainer>
    </div>
  )
}

export type { LineGraphProps } from "./type"

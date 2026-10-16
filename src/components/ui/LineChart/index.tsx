import {
  CartesianGrid,
  LabelList,
  Line,
  LineChart as RechartsLineChart,
  XAxis,
} from "recharts"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  chartLabelClass,
  defaultActiveDotConfig,
  defaultAxisConfig,
  defaultCartesianGridConfig,
  defaultChartMargin,
  defaultDotRadius,
  lineChartContainerClass,
  lineChartTitleClass,
} from "./style"
import type {
  LineChartDataPoint,
  LineChartDots,
  LineChartProps,
} from "./type"

interface LineChartDotProps {
  cx?: number
  cy?: number
  stroke?: string
  payload?: LineChartDataPoint
  variant?: LineChartDots
  onDotClick?: (data: LineChartDataPoint) => void
}

/** Recharts clones this element per point, injecting `cx`, `cy`, `stroke` and `payload`. */
function LineChartDot({
  cx,
  cy,
  stroke,
  payload,
  variant = "default",
  onDotClick,
}: LineChartDotProps) {
  if (cx == null || cy == null) {
    return <g />
  }

  const color =
    variant === "colored" ? ((payload?.fill as string) ?? stroke) : stroke
  const interactive = Boolean(onDotClick)
  const handleClick = () => payload && onDotClick?.(payload)

  if (variant === "custom") {
    return (
      <g
        transform={`translate(${cx}, ${cy})`}
        style={interactive ? { cursor: "pointer" } : undefined}
        onClick={handleClick}
      >
        <line x1={0} y1={-5} x2={0} y2={5} stroke={color} strokeWidth={2} />
      </g>
    )
  }

  return (
    <circle
      cx={cx}
      cy={cy}
      r={defaultDotRadius}
      fill={color}
      style={interactive ? { cursor: "pointer" } : undefined}
      onClick={handleClick}
    />
  )
}

/**
 * LineChart Component
 *
 * Renders a single- or multi-series line chart. The `curve`, `dots` and `label`
 * props cover the variants in the design system (natural, linear, step,
 * multiple, dots, custom dots, colored dots and point labels).
 * Built on Recharts + our ChartContainer for consistency.
 */
export function LineChart({
  data,
  config,
  dataKey,
  xAxisKey,
  curve = "natural",
  dots = "none",
  label = false,
  strokeWidth = 2,
  title,
  className,
  showTooltip = true,
  showLegend = false,
  showGrid = true,
  xAxisTickFormatter,
  onDotClick,
}: LineChartProps) {
  const keys = Array.isArray(dataKey) ? dataKey : [dataKey]
  const labelKey = typeof label === "string" ? label : undefined

  return (
    <div className="w-full">
      {title && <h3 className={lineChartTitleClass}>{title}</h3>}

      <ChartContainer
        config={config}
        className={className || lineChartContainerClass}
      >
        <RechartsLineChart accessibilityLayer data={data} margin={defaultChartMargin}>
          {showGrid && <CartesianGrid {...defaultCartesianGridConfig} />}

          <XAxis
            dataKey={xAxisKey}
            tickFormatter={xAxisTickFormatter}
            {...defaultAxisConfig}
          />

          {showTooltip && (
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel={keys.length === 1} />}
            />
          )}

          {showLegend && <ChartLegend content={<ChartLegendContent />} />}

          {keys.map((key) => (
            <Line
              key={key}
              dataKey={key}
              type={curve}
              stroke={`var(--color-${key})`}
              strokeWidth={strokeWidth}
              // Recharts measures the path for its draw animation before layout settles,
              // which truncates the line when the chart mounts off-screen.
              isAnimationActive={false}
              dot={
                dots === "none" ? (
                  false
                ) : (
                  <LineChartDot variant={dots} onDotClick={onDotClick} />
                )
              }
              activeDot={dots === "none" ? false : defaultActiveDotConfig}
            >
              {label && (
                <LabelList
                  dataKey={labelKey ?? key}
                  position="top"
                  offset={10}
                  className={chartLabelClass}
                />
              )}
            </Line>
          ))}
        </RechartsLineChart>
      </ChartContainer>
    </div>
  )
}

export type {
  LineChartCurve,
  LineChartDataPoint,
  LineChartDots,
  LineChartProps,
} from "./type"

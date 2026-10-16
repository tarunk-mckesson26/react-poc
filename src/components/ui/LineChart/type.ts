import type { ChartConfig } from "@/components/ui/chart"

/**
 * Centralized type definitions for the LineChart component
 */

export interface LineChartDataPoint {
  /** X-axis label plus one entry per plotted series; `fill` sets a per-point dot color */
  [key: string]: string | number
}

/** Interpolation used to draw the line between points */
export type LineChartCurve = "natural" | "monotone" | "linear" | "step"

/**
 * `none` hides dots, `default` draws filled circles, `custom` draws tick marks,
 * `colored` reads each point's `fill` value so every dot can differ.
 */
export type LineChartDots = "none" | "default" | "custom" | "colored"

export interface LineChartProps {
  /** Array of data points to render */
  data: LineChartDataPoint[]
  /** Chart configuration defining the data keys and their labels/colors */
  config: ChartConfig
  /** Key(s) in data objects to plot — pass an array for a multi-series chart */
  dataKey: string | string[]
  /** Key in data objects to use for X-axis labels */
  xAxisKey: string
  /** Interpolation between points */
  curve?: LineChartCurve
  /** Dot rendering style */
  dots?: LineChartDots
  /** `true` labels each point with its value, or pass a data key to label with that field */
  label?: boolean | string
  /** Stroke width of the line */
  strokeWidth?: number
  /** Title rendered above the chart */
  title?: string
  /** Custom className for the chart container */
  className?: string
  /** Show the hover tooltip */
  showTooltip?: boolean
  /** Show a legend below the chart */
  showLegend?: boolean
  /** Show horizontal grid lines */
  showGrid?: boolean
  /** Formats X-axis tick labels, e.g. `(v) => v.slice(0, 3)` */
  xAxisTickFormatter?: (value: string) => string
  /** Callback when a dot is clicked */
  onDotClick?: (data: LineChartDataPoint) => void
}

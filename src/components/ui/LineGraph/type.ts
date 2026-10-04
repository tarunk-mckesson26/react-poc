import type { ChartConfig } from "@/components/ui/chart"

/**
 * Centralized type definitions for LineGraph component
 */

export interface LineGraphDataPoint {
  /** X-axis label or key */
  [key: string]: string | number
}

export interface LineGraphProps {
  /** Array of data points to render */
  data: LineGraphDataPoint[]
  /** Chart configuration defining the data keys and their labels/colors */
  config: ChartConfig
  /** Key in data objects to use for the area/line value */
  dataKey: string
  /** Key in data objects to use for X-axis labels */
  xAxisKey: string
  /** Color for the stroke and fill gradient */
  color?: string
  /** Title or label for the chart */
  title?: string
  /** Custom className for the container */
  className?: string
  /** Callback when a dot is clicked */
  onDotClick?: (data: LineGraphDataPoint) => void
  /** Show/hide dots on the line */
  showDots?: boolean
  /** Custom gradient color (hex or rgb) - defaults to color prop */
  gradientColor?: string
  /** Gradient opacity range: [start, middle, end] */
  gradientOpacity?: [number, number, number]
  /** Stroke width of the area line */
  strokeWidth?: number
}

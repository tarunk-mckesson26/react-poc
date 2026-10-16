/**
 * LineChart styling constants and default configurations
 * Centralizes visual tokens for consistent line chart styling
 */

export const lineChartContainerClass = "aspect-auto h-[260px] w-full"

export const lineChartTitleClass = "mb-4 text-sm font-semibold"

export const defaultDotRadius = 4

export const defaultActiveDotConfig = {
  r: 6,
}

export const defaultAxisConfig = {
  tickLine: false,
  axisLine: false,
  tickMargin: 10,
  padding: { left: 20, right: 20 },
}

export const defaultCartesianGridConfig = {
  vertical: false,
}

/** Leaves room so point labels aren't clipped by the plot area */
export const defaultChartMargin = { top: 24, right: 12, bottom: 0, left: 12 }

export const chartLabelClass = "fill-muted-foreground text-[11px]"

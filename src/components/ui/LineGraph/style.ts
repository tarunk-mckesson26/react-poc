/**
 * LineGraph styling constants and default configurations
 * Centralizes visual tokens for consistent area chart styling
 */

export const lineGraphContainerClass = "h-[400px] w-full"

export const defaultGradientId = "lineGraphGradient"

export const defaultDotConfig = {
  r: 5,
  fill: "#22C55E",
}

export const defaultActiveDotConfig = {
  r: 6,
}

export const defaultAreaConfig = {
  type: "monotone" as const,
  strokeWidth: 3,
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

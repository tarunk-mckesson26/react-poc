import type React from "react"
import { type VariantProps } from "class-variance-authority"
import { type barChartCardVariants } from "./style"

export type BarChartVariant = "default" | "outline" | "muted"
export type BarChartSize = "sm" | "default" | "lg"

export interface BarChartProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title">,
    VariantProps<typeof barChartCardVariants> {
  title?: React.ReactNode
  chartTitle?: React.ReactNode
  description?: React.ReactNode
  linkText?: React.ReactNode
  onLinkClick?: () => void
  children: React.ReactNode
  variant?: BarChartVariant
  size?: BarChartSize
}

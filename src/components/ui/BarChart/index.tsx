import { clsx } from "@/lib/clsx"
import { barChartBodyVariants, barChartCardVariants, barChartFooterVariants, barChartHeaderVariants } from "./style"
import type { BarChartProps } from "./type"

const BarChart = ({
  className,
  title,
  chartTitle,
  description,
  linkText,
  onLinkClick,
  children,
  variant = "default",
  size = "default",
  ...props
}: BarChartProps) => {
  return (
    <section
      data-slot="bar-chart"
      data-variant={variant}
      data-size={size}
      className={clsx(barChartCardVariants({ variant, size, className }))}
      {...props}
    >
      {(title || linkText) && (
        <header className={barChartHeaderVariants()}>
          <div className="text-sm font-medium text-foreground">{title}</div>
          {linkText ? (
            <button
              type="button"
              onClick={onLinkClick}
              className="text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              {linkText}
            </button>
          ) : null}
        </header>
      )}

      <div className={barChartBodyVariants()}>
        {chartTitle ? <h3 className="text-lg font-semibold text-foreground">{chartTitle}</h3> : null}
        {children}
      </div>

      {description ? (
        <footer className={barChartFooterVariants()}>{description}</footer>
      ) : null}
    </section>
  )
}

export { BarChart }

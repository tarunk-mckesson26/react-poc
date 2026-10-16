import { render, screen, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import type { ChartConfig } from "@/components/ui/chart"
import { LineChart } from "./index"

// jsdom reports a 0x0 container, so ResponsiveContainer would render an empty
// chart. Give the chart a fixed size instead so the SVG is actually drawn.
jest.mock("recharts", () => {
  const actual = jest.requireActual("recharts")
  const react = jest.requireActual("react")
  return {
    __esModule: true,
    ...actual,
    ResponsiveContainer: ({ children }: { children: React.ReactElement }) =>
      react.cloneElement(children, { width: 800, height: 400 }),
  }
})

const config = {
  desktop: { label: "Desktop", color: "#2563eb" },
  mobile: { label: "Mobile", color: "#60a5fa" },
} satisfies ChartConfig

const data = [
  { month: "January", desktop: 186, mobile: 80, fill: "#ef4444" },
  { month: "February", desktop: 305, mobile: 200, fill: "#22c55e" },
  { month: "March", desktop: 237, mobile: 120, fill: "#3b82f6" },
]

const renderChart = (props: Partial<React.ComponentProps<typeof LineChart>> = {}) =>
  render(
    <LineChart
      data={data}
      config={config}
      dataKey="desktop"
      xAxisKey="month"
      {...props}
    />
  )

describe("LineChart", () => {
  it("renders the chart container with the recharts surface", () => {
    const { container } = renderChart()
    expect(container.querySelector('[data-slot="chart"]')).toBeInTheDocument()
    expect(container.querySelector(".recharts-surface")).toBeInTheDocument()
  })

  it("renders the title only when provided", () => {
    const { rerender } = renderChart({ title: "Visitors" })
    expect(
      screen.getByRole("heading", { name: "Visitors" })
    ).toBeInTheDocument()

    rerender(
      <LineChart data={data} config={config} dataKey="desktop" xAxisKey="month" />
    )
    expect(screen.queryByRole("heading")).not.toBeInTheDocument()
  })

  it("renders one line per data key", () => {
    const { container, rerender } = renderChart()
    expect(container.querySelectorAll(".recharts-line")).toHaveLength(1)

    rerender(
      <LineChart
        data={data}
        config={config}
        dataKey={["desktop", "mobile"]}
        xAxisKey="month"
      />
    )
    expect(container.querySelectorAll(".recharts-line")).toHaveLength(2)
  })

  it("renders x-axis ticks from the x-axis key", () => {
    const { container } = renderChart()
    expect(within(container).getByText("January")).toBeInTheDocument()
    expect(within(container).getByText("February")).toBeInTheDocument()
    expect(within(container).getByText("March")).toBeInTheDocument()
  })

  it("formats x-axis ticks with xAxisTickFormatter", () => {
    const { container } = renderChart({
      xAxisTickFormatter: (value) => value.slice(0, 3),
    })
    expect(within(container).getByText("Jan")).toBeInTheDocument()
    expect(within(container).queryByText("January")).not.toBeInTheDocument()
  })

  it("hides dots by default", () => {
    const { container } = renderChart()
    expect(container.querySelectorAll(".recharts-line-dots")).toHaveLength(0)
  })

  it("renders one circle per point for the default dot variant", () => {
    const { container } = renderChart({ dots: "default" })
    expect(
      container.querySelectorAll(".recharts-line-dots circle")
    ).toHaveLength(data.length)
  })

  it("renders tick marks instead of circles for custom dots", () => {
    const { container } = renderChart({ dots: "custom" })
    expect(
      container.querySelectorAll(".recharts-line-dots circle")
    ).toHaveLength(0)
    expect(container.querySelectorAll(".recharts-line-dots line")).toHaveLength(
      data.length
    )
  })

  it("uses each point's fill for colored dots", () => {
    const { container } = renderChart({ dots: "colored" })
    const fills = Array.from(
      container.querySelectorAll(".recharts-line-dots circle")
    ).map((dot) => dot.getAttribute("fill"))
    expect(fills).toEqual(["#ef4444", "#22c55e", "#3b82f6"])
  })

  it("calls onDotClick with the clicked data point", async () => {
    const user = userEvent.setup()
    const onDotClick = jest.fn()
    const { container } = renderChart({ dots: "default", onDotClick })

    const firstDot = container.querySelectorAll(".recharts-line-dots circle")[0]
    await user.click(firstDot)

    expect(onDotClick).toHaveBeenCalledTimes(1)
    expect(onDotClick).toHaveBeenCalledWith(
      expect.objectContaining({ month: "January", desktop: 186 })
    )
  })

  it("does not mark dots as interactive without an onDotClick handler", () => {
    const { container } = renderChart({ dots: "default" })
    const firstDot = container.querySelector(
      ".recharts-line-dots circle"
    ) as SVGCircleElement
    expect(firstDot.style.cursor).toBe("")
  })

  it("renders point labels when label is true", () => {
    const { container } = renderChart({ label: true })
    const labels = container.querySelectorAll(".recharts-label-list text")
    expect(labels).toHaveLength(data.length)
    expect(Array.from(labels).map((node) => node.textContent)).toEqual([
      "186",
      "305",
      "237",
    ])
  })

  it("labels with the given data key when label is a string", () => {
    const { container } = renderChart({ label: "mobile" })
    const labels = Array.from(
      container.querySelectorAll(".recharts-label-list text")
    ).map((node) => node.textContent)
    expect(labels).toEqual(["80", "200", "120"])
  })

  it("toggles the cartesian grid with showGrid", () => {
    const { container, rerender } = renderChart()
    expect(container.querySelector(".recharts-cartesian-grid")).toBeInTheDocument()

    rerender(
      <LineChart
        data={data}
        config={config}
        dataKey="desktop"
        xAxisKey="month"
        showGrid={false}
      />
    )
    expect(container.querySelector(".recharts-cartesian-grid")).toBeNull()
  })

  it("renders the legend only when showLegend is true", () => {
    const { container, rerender } = renderChart({
      dataKey: ["desktop", "mobile"],
    })
    expect(container.querySelector(".recharts-legend-wrapper")).toBeNull()

    rerender(
      <LineChart
        data={data}
        config={config}
        dataKey={["desktop", "mobile"]}
        xAxisKey="month"
        showLegend
      />
    )
    expect(screen.getByText("Desktop")).toBeInTheDocument()
    expect(screen.getByText("Mobile")).toBeInTheDocument()
  })

  it("applies a custom className to the chart container", () => {
    const { container } = renderChart({ className: "h-96" })
    expect(container.querySelector('[data-slot="chart"]')).toHaveClass("h-96")
  })

  it("applies the configured stroke width to the line path", () => {
    const { container } = renderChart({ strokeWidth: 5 })
    const path = container.querySelector(".recharts-line-curve")
    expect(path).toHaveAttribute("stroke-width", "5")
  })
})

import { render, screen } from "@testing-library/react"
import { BarChart } from "./index"

describe("BarChart", () => {
  it("renders header, body and footer sections", () => {
    render(
      <BarChart
        title="Revenue"
        chartTitle="Monthly revenue"
        linkText="View report"
        description="Up 18% compared to last month"
      >
        <div>Chart</div>
      </BarChart>
    )

    expect(screen.getByText("Revenue")).toBeInTheDocument()
    expect(screen.getByText("Monthly revenue")).toBeInTheDocument()
    expect(screen.getByText("View report")).toBeInTheDocument()
    expect(screen.getByText("Up 18% compared to last month")).toBeInTheDocument()
  })
})

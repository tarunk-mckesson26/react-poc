import { render, screen } from "@testing-library/react"
import { DatePicker } from "./index"

describe("DatePicker", () => {
  it("renders with a placeholder and icon", () => {
    render(
      <DatePicker
        placeholder="Pick a date"
        icon={<span data-testid="calendar-icon">📅</span>}
        iconPosition="left"
      />
    )

    expect(screen.getByPlaceholderText("Pick a date")).toBeInTheDocument()
    expect(screen.getByTestId("calendar-icon")).toBeInTheDocument()
  })

  it("applies the configured icon position", () => {
    render(
      <DatePicker
        placeholder="Select date"
        icon={<span data-testid="calendar-icon-right">📅</span>}
        iconPosition="right"
      />
    )

    expect(screen.getByTestId("calendar-icon-right").parentElement).toHaveClass("right-3")
  })
})

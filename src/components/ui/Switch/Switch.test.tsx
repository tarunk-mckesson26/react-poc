import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Switch } from "./index"

describe("Switch", () => {
  it("toggles when clicked", async () => {
    const user = userEvent.setup()
    render(<Switch label="Airplane Mode" />)

    const toggle = screen.getByRole("switch", { name: /airplane mode/i })
    expect(toggle).not.toBeChecked()

    await user.click(toggle)
    expect(toggle).toBeChecked()
  })

  it("marks invalid via error or the invalid prop, and shows the error text", () => {
    const { rerender } = render(<Switch label="Accept terms" error="Required" />)
    const toggle = screen.getByRole("switch", { name: /accept terms/i })
    expect(toggle).toHaveAttribute("aria-invalid", "true")
    expect(screen.getByText("Required")).toBeInTheDocument()

    rerender(<Switch label="Accept terms" invalid />)
    expect(toggle).toHaveAttribute("aria-invalid", "true")
  })

  it.each([true, false])("renders the card variant checked=%s", (checked) => {
    render(<Switch variant="card" label="Card option" checked={checked} />)
    const toggle = screen.getByRole("switch", { name: /card option/i })
    checked ? expect(toggle).toBeChecked() : expect(toggle).not.toBeChecked()
  })

  it("renders label, description, or neither", () => {
    const { rerender, container } = render(<Switch description="Just a description" />)
    expect(screen.getByText("Just a description")).toBeInTheDocument()

    rerender(<Switch />)
    expect(container.querySelector("span.flex-col")).not.toBeInTheDocument()
  })

  it("forwards disabled, size, and className props", () => {
    render(<Switch label="Box" disabled checked size="lg" className="custom-class" />)
    const toggle = screen.getByRole("switch", { name: /box/i })
    expect(toggle).toBeDisabled()
    expect(toggle).toBeChecked()
  })

  it("places the switch after the label when align is end", () => {
    const { container } = render(<Switch label="Share across devices" align="end" />)
    expect(container.querySelector(".justify-between")).toBeInTheDocument()
  })
})

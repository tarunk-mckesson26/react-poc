import { render, screen } from "@testing-library/react"
import { Input } from "./index"

describe("Input", () => {
  it("renders with placeholder", () => {
    render(<Input placeholder="Email" />)
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument()
  })

  it("applies size and variant attributes", () => {
    render(<Input variant="outline" size="lg" />)
    const input = screen.getByRole("textbox")
    expect(input).toHaveAttribute("data-slot", "input")
    expect(input).toHaveAttribute("data-variant", "outline")
    expect(input).toHaveAttribute("data-size", "lg")
  })

  it("marks invalid state", () => {
    render(<Input invalid />)
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true")
  })

  it("disables input", () => {
    render(<Input disabled />)
    expect(screen.getByRole("textbox")).toBeDisabled()
  })
})

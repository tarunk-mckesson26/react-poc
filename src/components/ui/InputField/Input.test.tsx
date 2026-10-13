import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Input } from "./index"

describe("Input", () => {
  it("renders as a text input by default", () => {
    render(<Input aria-label="Name" />)
    const input = screen.getByRole("textbox", { name: "Name" })
    expect(input).toHaveAttribute("type", "text")
    expect(input).toHaveAttribute("data-variant", "default")
    expect(input).not.toHaveAttribute("data-filled")
  })

  it("maps the password type to a native password input", () => {
    render(<Input type="password" aria-label="Password" />)
    expect(screen.getByLabelText("Password")).toHaveAttribute("type", "password")
  })

  it("maps the file type to a native file input", () => {
    render(<Input type="file" aria-label="Upload" />)
    expect(screen.getByLabelText("Upload")).toHaveAttribute("type", "file")
  })

  it("applies the bare variant without the bordered input classes", () => {
    render(<Input variant="bare" aria-label="Bare" />)
    const input = screen.getByRole("textbox", { name: "Bare" })
    expect(input).toHaveAttribute("data-variant", "bare")
    expect(input).toHaveClass("border-0")
    expect(input).not.toHaveClass("border-input")
  })

  it("marks an uncontrolled text input as filled once text is typed", async () => {
    const user = userEvent.setup()
    render(<Input aria-label="Name" />)
    const input = screen.getByRole("textbox", { name: "Name" })
    expect(input).not.toHaveAttribute("data-filled")

    await user.type(input, "Ada")
    expect(input).toHaveAttribute("data-filled", "true")

    await user.clear(input)
    expect(input).not.toHaveAttribute("data-filled")
  })

  it("derives the filled state from a controlled value", () => {
    const { rerender } = render(<Input aria-label="Name" value="" onChange={() => {}} />)
    expect(screen.getByRole("textbox", { name: "Name" })).not.toHaveAttribute("data-filled")

    rerender(<Input aria-label="Name" value="Ada" onChange={() => {}} />)
    expect(screen.getByRole("textbox", { name: "Name" })).toHaveAttribute("data-filled", "true")
  })

  it("marks a file input as filled once a file is selected", async () => {
    const user = userEvent.setup()
    render(<Input type="file" aria-label="Upload" />)
    const input = screen.getByLabelText("Upload")
    const file = new File(["hello"], "hello.png", { type: "image/png" })

    await user.upload(input, file)
    expect(input).toHaveAttribute("data-filled", "true")
    expect((input as HTMLInputElement).files?.[0]).toBe(file)
  })

  it("marks the field invalid via the invalid prop, mirroring aria-invalid", () => {
    const { rerender } = render(<Input aria-label="Name" />)
    expect(screen.getByRole("textbox", { name: "Name" })).not.toHaveAttribute("aria-invalid")

    rerender(<Input aria-label="Name" invalid />)
    expect(screen.getByRole("textbox", { name: "Name" })).toHaveAttribute("aria-invalid", "true")
  })

  it("falls back to an explicit aria-invalid when invalid is not set", () => {
    render(<Input aria-label="Name" aria-invalid="true" />)
    expect(screen.getByRole("textbox", { name: "Name" })).toHaveAttribute("aria-invalid", "true")
  })

  it("disables the field and blocks typing", async () => {
    const user = userEvent.setup()
    render(<Input aria-label="Name" disabled />)
    const input = screen.getByRole("textbox", { name: "Name" })
    expect(input).toBeDisabled()

    await user.type(input, "Ada")
    expect(input).toHaveValue("")
  })

  it("merges a custom className with the variant classes", () => {
    render(<Input aria-label="Name" className="custom-class" />)
    expect(screen.getByRole("textbox", { name: "Name" })).toHaveClass("custom-class", "w-full")
  })
})

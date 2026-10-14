import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Switch } from "./index"

describe("Switch", () => {
  it("matches default and small track sizes", () => {
    const { rerender, container } = render(<Switch label="Updates" />)
    const toggle = screen.getByRole("switch")
    expect(toggle.tagName).toBe("INPUT")
    expect(toggle).toHaveClass("w-8", "h-[18.4px]")
    expect(container.querySelector('[data-slot="switch"]')).toHaveClass("max-w-[312px]", "min-h-[42px]")
    expect(container.querySelector('[data-slot="switch-thumb"]')).toHaveClass("size-4", "peer-checked:translate-x-[14px]")
    rerender(<Switch label="Updates" size="sm" />)
    expect(toggle).toHaveClass("w-6", "h-[14px]")
    expect(container.querySelector('[data-slot="switch"]')).toHaveClass("max-w-[304px]", "min-h-[36px]")
    expect(container.querySelector('[data-slot="switch-thumb"]')).toHaveClass("size-3", "peer-checked:translate-x-[10px]")
  })

  it("supports keyboard toggling and checked callbacks", async () => {
    const user = userEvent.setup()
    const onCheckedChange = jest.fn()
    render(<Switch label="Updates" onCheckedChange={onCheckedChange} />)
    await user.tab()
    await user.keyboard(" ")
    expect(screen.getByRole("switch")).toBeChecked()
    expect(onCheckedChange).toHaveBeenCalledWith(true)
  })

  it("supports focus, invalid, disabled, and hidden text", () => {
    const { rerender } = render(<Switch label="Updates" description="Help" state="focus" />)
    const toggle = screen.getByRole("switch", { name: "Updates" })
    expect(toggle.className).toContain("shadow-[0_0_0_4px")
    expect(toggle).toHaveAccessibleDescription("Help")
    rerender(<Switch label="Updates" state="invalid" />)
    expect(toggle).toHaveAttribute("aria-invalid", "true")
    rerender(<Switch label="Updates" state="disabled" />)
    expect(toggle).toBeDisabled()
    rerender(<Switch label="Updates" description="Help" showLabel={false} showDescription={false} aria-label="Updates" />)
    expect(screen.getByRole("switch", { name: "Updates" })).toBeInTheDocument()
    expect(screen.queryByText("Updates")).not.toBeInTheDocument()
    expect(screen.queryByText("Help")).not.toBeInTheDocument()
  })

  it("supports native form submission and reset", async () => {
    const user = userEvent.setup()
    const { container } = render(
      <form>
        <Switch label="Updates" name="updates" value="enabled" defaultChecked />
        <button type="reset">Reset</button>
      </form>
    )
    const form = container.querySelector("form")!
    expect(new FormData(form).get("updates")).toBe("enabled")
    await user.click(screen.getByRole("switch"))
    expect(new FormData(form).has("updates")).toBe(false)
    await user.click(screen.getByRole("button", { name: "Reset" }))
    expect(screen.getByRole("switch")).toBeChecked()
  })

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
    expect(toggle).toHaveProperty("checked", checked)
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

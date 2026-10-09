import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { SelectComponent } from "./index"
import type { SelectOption } from "./type"

// Radix Select relies on DOM APIs that jsdom doesn't implement
beforeAll(() => {
  Element.prototype.hasPointerCapture = jest.fn(() => false)
  Element.prototype.setPointerCapture = jest.fn()
  Element.prototype.releasePointerCapture = jest.fn()
  Element.prototype.scrollIntoView = jest.fn()
})

const options: SelectOption[] = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry", disabled: true },
]

describe("SelectComponent", () => {
  it("renders placeholder when no value is selected", () => {
    render(<SelectComponent options={options} placeholder="Pick a fruit" />)
    expect(screen.getByRole("combobox")).toHaveTextContent("Pick a fruit")
  })

  it("renders the selected value", () => {
    render(<SelectComponent options={options} defaultValue="banana" />)
    expect(screen.getByRole("combobox")).toHaveTextContent("Banana")
  })

  it("opens options and calls onValueChange on selection", async () => {
    const user = userEvent.setup()
    const onValueChange = jest.fn()
    render(<SelectComponent options={options} onValueChange={onValueChange} />)

    await user.click(screen.getByRole("combobox"))
    expect(await screen.findByRole("listbox")).toBeInTheDocument()

    await user.click(screen.getByRole("option", { name: "Apple" }))
    expect(onValueChange).toHaveBeenCalledWith("apple")
    expect(screen.getByRole("combobox")).toHaveTextContent("Apple")
  })

  it("marks disabled options", async () => {
    const user = userEvent.setup()
    render(<SelectComponent options={options} />)
    await user.click(screen.getByRole("combobox"))
    expect(await screen.findByRole("option", { name: "Cherry" })).toHaveAttribute(
      "data-disabled"
    )
  })

  it("sets aria-invalid and destructive styles when invalid", () => {
    render(<SelectComponent options={options} invalid />)
    const trigger = screen.getByRole("combobox")
    expect(trigger).toHaveAttribute("aria-invalid", "true")
    expect(trigger).toHaveClass("border-destructive")
  })

  it("does not set aria-invalid by default", () => {
    render(<SelectComponent options={options} />)
    expect(screen.getByRole("combobox")).not.toHaveAttribute("aria-invalid")
  })

  it("disables the trigger and prevents opening", async () => {
    const user = userEvent.setup()
    render(<SelectComponent options={options} disabled />)
    const trigger = screen.getByRole("combobox")
    expect(trigger).toBeDisabled()
    await user.click(trigger)
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument()
  })

  it("applies focus ring classes by default and receives focus", async () => {
    const user = userEvent.setup()
    render(<SelectComponent options={options} />)
    const trigger = screen.getByRole("combobox")
    expect(trigger).toHaveClass("focus-visible:ring-3")
    await user.tab()
    expect(trigger).toHaveFocus()
  })

  it("removes focus ring when showFocusRing is false", () => {
    render(<SelectComponent options={options} showFocusRing={false} />)
    const trigger = screen.getByRole("combobox")
    expect(trigger).not.toHaveClass("focus-visible:ring-3")
    expect(trigger).toHaveClass("focus-visible:ring-0")
  })

  it("applies size data attribute", () => {
    render(<SelectComponent options={options} size="lg" />)
    expect(screen.getByRole("combobox")).toHaveAttribute("data-size", "lg")
  })

  it("applies custom classNames to each section", async () => {
    const user = userEvent.setup()
    render(
      <SelectComponent
        options={options}
        className="root-class"
        classNames={{
          trigger: "trigger-class",
          value: "value-class",
          icon: "icon-class",
          content: "content-class",
          viewport: "viewport-class",
          item: "item-class",
          itemIndicator: "indicator-class",
        }}
      />
    )
    const trigger = screen.getByRole("combobox")
    expect(trigger).toHaveClass("root-class", "trigger-class")
    expect(trigger.querySelector("[data-slot=select-value]")).toHaveClass("value-class")
    expect(trigger.querySelector("svg")).toHaveClass("icon-class")

    await user.click(trigger)
    const listbox = await screen.findByRole("listbox")
    expect(document.querySelector("[data-slot=select-content]")).toHaveClass(
      "content-class"
    )
    expect(listbox.querySelector("[data-radix-select-viewport]")).toHaveClass(
      "viewport-class"
    )
    const item = screen.getByRole("option", { name: "Apple" })
    expect(item).toHaveClass("item-class")
    expect(item.querySelector("span")).toHaveClass("indicator-class")
  })
})

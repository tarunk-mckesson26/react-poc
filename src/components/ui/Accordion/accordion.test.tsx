import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion"
import { AccordionComponent } from "./index"
import type { AccordionItemData } from "./type"

const items: AccordionItemData[] = [
  { value: "one", title: "First", content: "First body" },
  { value: "two", title: "Second", content: "Second body" },
  { value: "three", title: "Third", content: "Third body", disabled: true },
]

describe("Accordion primitives", () => {
  it("renders the root with slot and variant data attributes", () => {
    const { container } = render(
      <Accordion type="single" collapsible>
        <AccordionItem value="one">
          <AccordionTrigger>First</AccordionTrigger>
          <AccordionContent>First body</AccordionContent>
        </AccordionItem>
      </Accordion>
    )
    const root = container.querySelector("[data-slot='accordion']")
    expect(root).toHaveAttribute("data-variant", "basic")
  })

  it("applies the border variant classes to the root", () => {
    const { container } = render(
      <Accordion type="single" collapsible variant="border">
        <AccordionItem value="one">
          <AccordionTrigger>First</AccordionTrigger>
          <AccordionContent>First body</AccordionContent>
        </AccordionItem>
      </Accordion>
    )
    const root = container.querySelector("[data-slot='accordion']")
    expect(root).toHaveAttribute("data-variant", "border")
    expect(root).toHaveClass("rounded-lg", "border")
  })

  it("lets an item inherit the root variant", () => {
    const { container } = render(
      <Accordion type="single" collapsible variant="border">
        <AccordionItem value="one">
          <AccordionTrigger>First</AccordionTrigger>
          <AccordionContent>First body</AccordionContent>
        </AccordionItem>
      </Accordion>
    )
    expect(container.querySelector("[data-slot='accordion-item']")).toHaveClass(
      "px-4"
    )
  })

  it("lets an item override the inherited variant", () => {
    const { container } = render(
      <Accordion type="single" collapsible variant="border">
        <AccordionItem value="one" variant="basic">
          <AccordionTrigger>First</AccordionTrigger>
          <AccordionContent>First body</AccordionContent>
        </AccordionItem>
      </Accordion>
    )
    const item = container.querySelector("[data-slot='accordion-item']")
    expect(item).toHaveClass("border-b")
    expect(item).not.toHaveClass("px-4")
  })

  it("expands and collapses an item on trigger click", async () => {
    const user = userEvent.setup()
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="one">
          <AccordionTrigger>First</AccordionTrigger>
          <AccordionContent>First body</AccordionContent>
        </AccordionItem>
      </Accordion>
    )
    const trigger = screen.getByRole("button", { name: /first/i })
    expect(trigger).toHaveAttribute("aria-expanded", "false")
    expect(screen.queryByText("First body")).not.toBeInTheDocument()

    await user.click(trigger)
    expect(trigger).toHaveAttribute("aria-expanded", "true")
    expect(screen.getByText("First body")).toBeInTheDocument()

    await user.click(trigger)
    expect(trigger).toHaveAttribute("aria-expanded", "false")
  })
})

describe("AccordionComponent", () => {
  it("renders a trigger for every item", () => {
    render(<AccordionComponent type="single" collapsible items={items} />)
    expect(screen.getByRole("button", { name: /first/i })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /second/i })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /third/i })).toBeInTheDocument()
  })

  it("keeps every item collapsed by default", () => {
    render(<AccordionComponent type="single" collapsible items={items} />)
    expect(screen.queryByText("First body")).not.toBeInTheDocument()
    expect(screen.queryByText("Second body")).not.toBeInTheDocument()
  })

  it("expands the item named by defaultValue", () => {
    render(
      <AccordionComponent
        type="single"
        collapsible
        defaultValue="two"
        items={items}
      />
    )
    expect(screen.getByText("Second body")).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /second/i })).toHaveAttribute(
      "aria-expanded",
      "true"
    )
  })

  it("allows only one open item in single mode", async () => {
    const user = userEvent.setup()
    render(<AccordionComponent type="single" collapsible items={items} />)

    await user.click(screen.getByRole("button", { name: /first/i }))
    expect(screen.getByText("First body")).toBeInTheDocument()

    await user.click(screen.getByRole("button", { name: /second/i }))
    expect(screen.getByText("Second body")).toBeInTheDocument()
    await waitFor(() =>
      expect(screen.queryByText("First body")).not.toBeInTheDocument()
    )
  })

  it("allows several open items in multiple mode", async () => {
    const user = userEvent.setup()
    render(<AccordionComponent type="multiple" items={items} />)

    await user.click(screen.getByRole("button", { name: /first/i }))
    await user.click(screen.getByRole("button", { name: /second/i }))

    expect(screen.getByText("First body")).toBeInTheDocument()
    expect(screen.getByText("Second body")).toBeInTheDocument()
  })

  it("does not open a disabled item", async () => {
    const user = userEvent.setup()
    render(<AccordionComponent type="single" collapsible items={items} />)
    const trigger = screen.getByRole("button", { name: /third/i })
    expect(trigger).toBeDisabled()

    await user.click(trigger)
    expect(screen.queryByText("Third body")).not.toBeInTheDocument()
  })

  it("reports the open item through onValueChange", async () => {
    const user = userEvent.setup()
    const onValueChange = jest.fn()
    render(
      <AccordionComponent
        type="single"
        collapsible
        items={items}
        onValueChange={onValueChange}
      />
    )
    await user.click(screen.getByRole("button", { name: /first/i }))
    expect(onValueChange).toHaveBeenCalledWith("one")
  })

  it("respects a controlled value", () => {
    const { rerender } = render(
      <AccordionComponent
        type="single"
        collapsible
        value="one"
        onValueChange={jest.fn()}
        items={items}
      />
    )
    expect(screen.getByText("First body")).toBeInTheDocument()

    rerender(
      <AccordionComponent
        type="single"
        collapsible
        value="two"
        onValueChange={jest.fn()}
        items={items}
      />
    )
    expect(screen.getByText("Second body")).toBeInTheDocument()
  })

  it("ignores clicks on a controlled accordion without a state update", async () => {
    const user = userEvent.setup()
    render(
      <AccordionComponent
        type="single"
        collapsible
        value="one"
        onValueChange={jest.fn()}
        items={items}
      />
    )
    await user.click(screen.getByRole("button", { name: /second/i }))
    expect(screen.queryByText("Second body")).not.toBeInTheDocument()
  })

  it("forwards per-slot className overrides", () => {
    const { container } = render(
      <AccordionComponent
        type="single"
        collapsible
        defaultValue="one"
        items={items}
        className="root-class"
        itemClassName="item-class"
        triggerClassName="trigger-class"
        contentClassName="content-class"
      />
    )
    expect(container.querySelector("[data-slot='accordion']")).toHaveClass(
      "root-class"
    )
    expect(container.querySelector("[data-slot='accordion-item']")).toHaveClass(
      "item-class"
    )
    expect(
      container.querySelector("[data-slot='accordion-trigger']")
    ).toHaveClass("trigger-class")
    expect(screen.getByText("First body")).toHaveClass("content-class")
  })

  it("supports keyboard activation of a trigger", async () => {
    render(<AccordionComponent type="single" collapsible items={items} />)
    const trigger = screen.getByRole("button", { name: /first/i })

    fireEvent.focus(trigger)
    fireEvent.keyDown(trigger, { key: "Enter", code: "Enter" })
    fireEvent.click(trigger)

    expect(screen.getByText("First body")).toBeInTheDocument()
  })
})

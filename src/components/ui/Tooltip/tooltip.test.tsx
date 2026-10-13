import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip"
import { TooltipComponent } from "./index"

describe("Tooltip primitives", () => {
  it("marks the trigger with its slot attribute", () => {
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Trigger</TooltipTrigger>
          <TooltipContent>Tooltip text</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
    expect(screen.getByRole("button", { name: "Trigger" })).toHaveAttribute(
      "data-slot",
      "tooltip-trigger"
    )
  })

  it("shows the content once the trigger is focused", async () => {
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Trigger</TooltipTrigger>
          <TooltipContent>Tooltip text</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument()

    fireEvent.focus(screen.getByRole("button", { name: "Trigger" }))

    expect(await screen.findByRole("tooltip")).toHaveTextContent("Tooltip text")
  })

  it("hides the content once the trigger is blurred", async () => {
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Trigger</TooltipTrigger>
          <TooltipContent>Tooltip text</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
    const trigger = screen.getByRole("button", { name: "Trigger" })
    fireEvent.focus(trigger)
    await screen.findByRole("tooltip")

    fireEvent.blur(trigger)
    await waitFor(() =>
      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument()
    )
  })

  it("renders the content open when the root is controlled open", () => {
    render(
      <TooltipProvider>
        <Tooltip open>
          <TooltipTrigger>Trigger</TooltipTrigger>
          <TooltipContent>Tooltip text</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
    const tooltip = screen.getByRole("tooltip")
    expect(tooltip).toHaveAttribute("data-slot", "tooltip-content")
    expect(tooltip).toHaveTextContent("Tooltip text")
  })

  it("links the trigger to the content via aria-describedby when open", () => {
    render(
      <TooltipProvider>
        <Tooltip open>
          <TooltipTrigger>Trigger</TooltipTrigger>
          <TooltipContent>Tooltip text</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
    const describedBy = screen
      .getByRole("button", { name: "Trigger" })
      .getAttribute("aria-describedby")
    expect(describedBy).toBeTruthy()
    expect(screen.getByRole("tooltip")).toHaveAttribute("id", describedBy)
  })

  it("renders an arrow alongside the content", () => {
    render(
      <TooltipProvider>
        <Tooltip open>
          <TooltipTrigger>Trigger</TooltipTrigger>
          <TooltipContent>Tooltip text</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
    expect(screen.getByRole("tooltip").querySelector("svg")).toBeInTheDocument()
  })

  it("reports open state changes through onOpenChange", async () => {
    const onOpenChange = jest.fn()
    render(
      <TooltipProvider>
        <Tooltip onOpenChange={onOpenChange}>
          <TooltipTrigger>Trigger</TooltipTrigger>
          <TooltipContent>Tooltip text</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
    fireEvent.focus(screen.getByRole("button", { name: "Trigger" }))
    await waitFor(() => expect(onOpenChange).toHaveBeenCalledWith(true))
  })
})

describe("TooltipComponent", () => {
  it("renders the trigger element", () => {
    render(<TooltipComponent trigger={<button>Open</button>} content="Hello" />)
    expect(screen.getByRole("button", { name: "Open" })).toBeInTheDocument()
  })

  it("wraps a string trigger in a span", () => {
    render(<TooltipComponent trigger="Hover me" content="Hello" />)
    expect(screen.getByText("Hover me").tagName).toBe("SPAN")
  })

  it("uses a non-string trigger element as-is", () => {
    render(
      <TooltipComponent trigger={<a href="/docs">Docs</a>} content="Hello" />
    )
    const trigger = screen.getByRole("link", { name: "Docs" })
    expect(trigger).toHaveAttribute("href", "/docs")
    expect(trigger).toHaveAttribute("data-slot", "tooltip-trigger")
  })

  it("shows the content on focus and hides it on blur", async () => {
    render(
      <TooltipComponent trigger={<button>Open</button>} content="Helpful info" />
    )
    const trigger = screen.getByRole("button", { name: "Open" })

    fireEvent.focus(trigger)
    expect(await screen.findByRole("tooltip")).toHaveTextContent("Helpful info")

    fireEvent.blur(trigger)
    await waitFor(() =>
      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument()
    )
  })

  it("does not render a tooltip when disabled", () => {
    render(
      <TooltipComponent
        trigger={<button>Open</button>}
        content="Helpful info"
        disabled
      />
    )
    fireEvent.focus(screen.getByRole("button", { name: "Open" }))
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument()
  })

  it("renders arbitrary content, including elements", async () => {
    render(
      <TooltipComponent
        trigger={<button>Open</button>}
        content={<strong>Bold info</strong>}
      />
    )
    fireEvent.focus(screen.getByRole("button", { name: "Open" }))
    const tooltip = await screen.findByRole("tooltip")
    expect(tooltip.querySelector("strong")).toHaveTextContent("Bold info")
  })

  it("applies a custom className to the tooltip content", async () => {
    render(
      <TooltipComponent
        trigger={<button>Open</button>}
        content="Helpful info"
        className="custom-tooltip"
      />
    )
    fireEvent.focus(screen.getByRole("button", { name: "Open" }))
    expect(await screen.findByRole("tooltip")).toHaveClass("custom-tooltip")
  })

  it("keeps the design-system classes when a custom className is passed", async () => {
    render(
      <TooltipComponent
        trigger={<button>Open</button>}
        content="Helpful info"
        className="custom-tooltip"
      />
    )
    fireEvent.focus(screen.getByRole("button", { name: "Open" }))
    expect(await screen.findByRole("tooltip")).toHaveClass(
      "custom-tooltip",
      "rounded-lg"
    )
  })

  it("exposes the open state on the content element", async () => {
    render(
      <TooltipComponent trigger={<button>Open</button>} content="Helpful info" />
    )
    fireEvent.focus(screen.getByRole("button", { name: "Open" }))
    expect(await screen.findByRole("tooltip")).toHaveAttribute(
      "data-state",
      "instant-open"
    )
  })
})

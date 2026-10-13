import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Button } from "./index"
import type { ButtonProps } from "./type"

const variants: NonNullable<ButtonProps["variant"]>[] = [
  "primary",
  "secondary",
  "destructive",
  "tertiary",
  "ghost",
  "link",
]

const sizes: NonNullable<ButtonProps["size"]>[] = [
  "xs",
  "default",
  "sm",
  "lg",
  "icon",
  "icon-xs",
  "icon-sm",
  "icon-lg",
]

describe("Button", () => {
  it("renders children", () => {
    render(<Button>Click me</Button>)
    expect(
      screen.getByRole("button", { name: /click me/i })
    ).toBeInTheDocument()
  })

  it("applies default variant and size data attributes", () => {
    render(<Button>Default</Button>)
    const btn = screen.getByRole("button", { name: /default/i })
    expect(btn).toHaveAttribute("data-slot", "button")
    expect(btn).toHaveAttribute("data-variant", "primary")
    expect(btn).toHaveAttribute("data-size", "default")
  })

  it.each(variants)("forwards the %s variant", (variant) => {
    render(<Button variant={variant}>{variant}</Button>)
    expect(screen.getByRole("button", { name: variant })).toHaveAttribute(
      "data-variant",
      variant
    )
  })

  it.each(sizes)("forwards the %s size", (size) => {
    render(<Button size={size}>{size}</Button>)
    expect(screen.getByRole("button", { name: size })).toHaveAttribute(
      "data-size",
      size
    )
  })

  it("fires onClick when clicked", async () => {
    const user = userEvent.setup()
    const onClick = jest.fn()
    render(<Button onClick={onClick}>Press</Button>)
    await user.click(screen.getByRole("button", { name: /press/i }))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it("renders as a child element when asChild is true", () => {
    render(
      <Button asChild>
        <a href="/home">Home</a>
      </Button>
    )
    const link = screen.getByRole("link", { name: /home/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute("href", "/home")
  })

  it("is disabled when disabled prop is passed", () => {
    render(<Button disabled>Disabled</Button>)
    const btn = screen.getByRole("button", { name: /disabled/i })
    expect(btn).toBeDisabled()
    expect(btn).not.toHaveAttribute("aria-pressed")
  })

  it("blocks clicks while disabled", async () => {
    const user = userEvent.setup()
    const onClick = jest.fn()
    render(
      <Button disabled onClick={onClick}>
        Disabled
      </Button>
    )
    await user.click(screen.getByRole("button", { name: /disabled/i }))
    expect(onClick).not.toHaveBeenCalled()
  })

  it("shows a spinner and keeps the label visible when loading", () => {
    render(<Button data-loading="true">Loading</Button>)
    const btn = screen.getByRole("button", { name: /loading/i })
    expect(btn).toHaveAttribute("data-loading", "true")
    expect(screen.getByRole("status")).toBeInTheDocument()
  })

  it("renders only the spinner for icon-sized loading buttons", () => {
    render(
      <Button size="icon" data-loading="true" aria-label="Refresh">
        <svg />
      </Button>
    )
    const btn = screen.getByRole("button", { name: /refresh/i })
    expect(btn).toHaveAttribute("data-loading", "true")
    expect(screen.getByRole("status")).toBeInTheDocument()
  })

  it("does not render a spinner when not loading", () => {
    render(<Button>Click me</Button>)
    expect(screen.queryByRole("status")).not.toBeInTheDocument()
  })

  it("merges a custom className with the variant classes", () => {
    render(<Button className="custom-class">Click me</Button>)
    expect(screen.getByRole("button", { name: /click me/i })).toHaveClass(
      "custom-class",
      "rounded-full"
    )
  })
})

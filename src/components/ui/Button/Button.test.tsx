import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Button } from "./index"

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
    expect(btn).toHaveAttribute("data-variant", "default")
    expect(btn).toHaveAttribute("data-size", "default")
  })

  it("forwards variant and size props", () => {
    render(
      <Button variant="destructive" size="lg">
        Delete
      </Button>
    )
    const btn = screen.getByRole("button", { name: /delete/i })
    expect(btn).toHaveAttribute("data-variant", "destructive")
    expect(btn).toHaveAttribute("data-size", "lg")
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
    expect(screen.getByRole("button", { name: /disabled/i })).toBeDisabled()
  })
})

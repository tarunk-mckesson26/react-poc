import { render, screen } from "@testing-library/react"
import { Avatar } from "./index"

describe("Avatar", () => {
  it("renders initials when no image is provided", () => {
    render(<Avatar firstName="Jane" lastName="Doe" />)

    expect(screen.getByText("JD")).toBeInTheDocument()
    expect(screen.getByText("JD")).toHaveAttribute("data-slot", "avatar-fallback")
  })

  it("renders an image when src is provided", () => {
    render(<Avatar src="/avatar.png" alt="Jane Doe" />)

    expect(screen.getByRole("img", { name: /jane doe/i })).toHaveAttribute("src", "/avatar.png")
  })

  it("renders a custom icon when provided", () => {
    render(<Avatar icon={<span data-testid="avatar-icon">★</span>} />)

    expect(screen.getByTestId("avatar-icon")).toBeInTheDocument()
  })
})

import { render, screen } from "@testing-library/react"
import { Spinner } from "./index"

describe("Spinner", () => {
  it("renders with an accessible loading label by default", () => {
    render(<Spinner />)
    expect(screen.getByRole("status")).toBeInTheDocument()
    expect(screen.getByText("Loading")).toBeInTheDocument()
  })

  it("uses a custom label", () => {
    render(<Spinner label="Saving changes" />)
    expect(screen.getByText("Saving changes")).toBeInTheDocument()
  })

  it.each([3, 4, 5, 6, 8] as const)("renders at size=%s", (size) => {
    const { container } = render(<Spinner size={size} />)
    expect(container.querySelector(`.size-${size}`)).toBeInTheDocument()
  })

  it("forwards a custom className", () => {
    const { container } = render(<Spinner className="text-blue-600" />)
    expect(container.querySelector(".text-blue-600")).toBeInTheDocument()
  })
})

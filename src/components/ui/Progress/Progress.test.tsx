import { render, screen } from "@testing-library/react"
import { Progress } from "./index"

describe("Progress", () => {
  it("defaults to 100%", () => {
    render(<Progress />)
    const bar = screen.getByRole("progressbar")
    expect(bar).toHaveAttribute("aria-valuenow", "100")
    expect(bar).toHaveAttribute("aria-valuemax", "100")
    expect(bar).toHaveClass("h-1", "w-full", "max-w-[400px]")
  })

  it("renders a percent preset", () => {
    render(<Progress percent="75%" />)
    const bar = screen.getByRole("progressbar")
    expect(bar).toHaveAttribute("aria-valuenow", "75")
    expect(bar.firstElementChild).toHaveStyle({ width: "75%" })
  })

  it("updates dynamic progress", () => {
    const { rerender } = render(<Progress value={25} max={50} />)
    const bar = screen.getByRole("progressbar")
    expect(bar).toHaveAttribute("aria-valuetext", "50%")
    expect(bar.firstElementChild).toHaveStyle({ width: "50%" })
    rerender(<Progress value={10} max={50} />)
    expect(bar.firstElementChild).toHaveStyle({ width: "20%" })
  })

  it("keeps progress within its limits", () => {
    const { rerender } = render(<Progress value={150} />)
    const bar = screen.getByRole("progressbar")
    expect(bar).toHaveAttribute("aria-valuenow", "100")
    rerender(<Progress value={-10} />)
    expect(bar).toHaveAttribute("aria-valuenow", "0")
    rerender(<Progress value={10} max={0} />)
    expect(bar.firstElementChild).toHaveStyle({ width: "0%" })
  })

  it("shows the value label", () => {
    render(<Progress value={75} valueLabel="75%" aria-label="Upload" />)
    expect(screen.getByText("75%")).toBeInTheDocument()
    expect(screen.getByRole("progressbar", { name: "Upload" })).toHaveAttribute("aria-valuenow", "75")
  })
})

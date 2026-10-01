import { render, screen } from "@testing-library/react"
import { Progress } from "./index"

describe("Progress", () => {
  it("uses defaults, reflects value/max, and clamps out-of-range values", () => {
    const { rerender } = render(<Progress />)
    const bar = screen.getByRole("progressbar")
    expect(bar).toHaveAttribute("aria-valuenow", "0")
    expect(bar).toHaveAttribute("aria-valuemax", "100")

    rerender(<Progress value={150} />)
    expect(bar).toHaveAttribute("aria-valuenow", "100")

    rerender(<Progress value={-10} />)
    expect(bar).toHaveAttribute("aria-valuenow", "0")
  })

  it("provides a default aria-valuetext, and stays safe when max is 0", () => {
    const { rerender } = render(<Progress value={25} max={50} />)
    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuetext", "50%")

    rerender(<Progress value={10} max={0} />)
    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "0")
  })

  it("renders label, valueLabel, and caption, in row or stacked layout", () => {
    const { rerender, container } = render(
      <Progress value={84} label="PROGRESS" valueLabel="84%" caption="84% of the way to next tier" />
    )
    expect(screen.getByText("PROGRESS")).toBeInTheDocument()
    expect(screen.getByText("84%")).toBeInTheDocument()
    expect(screen.getByText("84% of the way to next tier")).toBeInTheDocument()

    rerender(<Progress value={62.5} label="Tier 2 → Tier 3" valueLabel="+$2,500" headerLayout="stack" />)
    expect(container.querySelector(".flex-col")).toBeInTheDocument()
  })

  it.each([
    ["Progress", undefined],
    [undefined, "10%"],
  ])("renders the header row with only one of label=%s / valueLabel=%s", (label, valueLabel) => {
    render(<Progress value={10} label={label} valueLabel={valueLabel} />)
    expect(screen.getByText(label ?? valueLabel!)).toBeInTheDocument()
  })

  it("omits the header row when there is no label/valueLabel", () => {
    const { container } = render(<Progress value={50} />)
    expect(container.querySelector(".justify-between")).not.toBeInTheDocument()
  })
})

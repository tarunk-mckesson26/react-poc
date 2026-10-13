import { render, screen, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./pagination"
import { PaginationComponent } from "./index"

describe("Pagination primitives", () => {
  it("renders the nav with accessible landmark attributes", () => {
    render(<Pagination data-testid="nav" />)
    const nav = screen.getByRole("navigation", { name: /pagination/i })
    expect(nav).toHaveAttribute("data-slot", "pagination")
  })

  it("renders content as a list", () => {
    render(
      <PaginationContent>
        <PaginationItem>Item</PaginationItem>
      </PaginationContent>
    )
    expect(screen.getByRole("list")).toHaveAttribute(
      "data-slot",
      "pagination-content"
    )
  })

  it("marks an active link with aria-current and data-active", () => {
    render(
      <PaginationLink href="#" isActive>
        1
      </PaginationLink>
    )
    const link = screen.getByRole("link", { name: "1" })
    expect(link).toHaveAttribute("aria-current", "page")
    expect(link).toHaveAttribute("data-active", "true")
  })

  it("leaves an inactive link without aria-current", () => {
    render(<PaginationLink href="#">2</PaginationLink>)
    const link = screen.getByRole("link", { name: "2" })
    expect(link).not.toHaveAttribute("aria-current")
    expect(link).not.toHaveAttribute("data-active")
  })

  it("renders previous/next controls with labels and icons", () => {
    render(
      <>
        <PaginationPrevious href="#" />
        <PaginationNext href="#" />
      </>
    )
    expect(
      screen.getByRole("link", { name: /go to previous page/i })
    ).toHaveTextContent("Previous")
    expect(
      screen.getByRole("link", { name: /go to next page/i })
    ).toHaveTextContent("Next")
  })

  it("renders the ellipsis with a screen-reader label", () => {
    render(<PaginationEllipsis />)
    expect(screen.getByText("More pages")).toBeInTheDocument()
  })
})

describe("PaginationComponent", () => {
  it("renders every page number when they all fit without ellipsis", () => {
    render(
      <PaginationComponent
        totalItems={50}
        itemsPerPage={10}
        currentPage={1}
        onPageChange={jest.fn()}
      />
    )
    ;["1", "2", "3", "4", "5"].forEach((page) => {
      expect(screen.getByRole("link", { name: page })).toBeInTheDocument()
    })
    expect(screen.queryByText("More pages")).not.toBeInTheDocument()
  })

  it("marks the current page as active", () => {
    render(
      <PaginationComponent
        totalItems={50}
        itemsPerPage={10}
        currentPage={3}
        onPageChange={jest.fn()}
      />
    )
    expect(screen.getByRole("link", { name: "3" })).toHaveAttribute(
      "aria-current",
      "page"
    )
  })

  it("collapses a large page range with ellipses on both sides", () => {
    render(
      <PaginationComponent
        totalItems={1000}
        itemsPerPage={10}
        currentPage={50}
        onPageChange={jest.fn()}
      />
    )
    ;["1", "49", "50", "51", "100"].forEach((page) => {
      expect(screen.getByRole("link", { name: page })).toBeInTheDocument()
    })
    expect(screen.getAllByText("More pages")).toHaveLength(2)
  })

  it("calls onPageChange when a page number is clicked", async () => {
    const user = userEvent.setup()
    const onPageChange = jest.fn()
    render(
      <PaginationComponent
        totalItems={50}
        itemsPerPage={10}
        currentPage={1}
        onPageChange={onPageChange}
      />
    )
    await user.click(screen.getByRole("link", { name: "3" }))
    expect(onPageChange).toHaveBeenCalledWith(3)
  })

  it("disables the previous control on the first page", async () => {
    const user = userEvent.setup()
    const onPageChange = jest.fn()
    const onPrevious = jest.fn()
    render(
      <PaginationComponent
        totalItems={50}
        itemsPerPage={10}
        currentPage={1}
        onPageChange={onPageChange}
        onPrevious={onPrevious}
      />
    )
    const previous = screen.getByRole("link", { name: /go to previous page/i })
    expect(previous).toHaveAttribute("aria-disabled", "true")
    expect(previous).toHaveAttribute("tabindex", "-1")

    await user.click(previous)
    expect(onPageChange).not.toHaveBeenCalled()
    expect(onPrevious).not.toHaveBeenCalled()
  })

  it("disables the next control on the last page", async () => {
    const user = userEvent.setup()
    const onPageChange = jest.fn()
    const onNext = jest.fn()
    render(
      <PaginationComponent
        totalItems={50}
        itemsPerPage={10}
        currentPage={5}
        onPageChange={onPageChange}
        onNext={onNext}
      />
    )
    const next = screen.getByRole("link", { name: /go to next page/i })
    expect(next).toHaveAttribute("aria-disabled", "true")
    expect(next).toHaveAttribute("tabindex", "-1")

    await user.click(next)
    expect(onPageChange).not.toHaveBeenCalled()
    expect(onNext).not.toHaveBeenCalled()
  })

  it("steps to the next page via the next control", async () => {
    const user = userEvent.setup()
    const onPageChange = jest.fn()
    const onNext = jest.fn()
    render(
      <PaginationComponent
        totalItems={50}
        itemsPerPage={10}
        currentPage={2}
        onPageChange={onPageChange}
        onNext={onNext}
      />
    )
    await user.click(screen.getByRole("link", { name: /go to next page/i }))
    expect(onPageChange).toHaveBeenCalledWith(3)
    expect(onNext).toHaveBeenCalledWith(3)
  })

  it("steps to the previous page via the previous control", async () => {
    const user = userEvent.setup()
    const onPageChange = jest.fn()
    const onPrevious = jest.fn()
    render(
      <PaginationComponent
        totalItems={50}
        itemsPerPage={10}
        currentPage={2}
        onPageChange={onPageChange}
        onPrevious={onPrevious}
      />
    )
    await user.click(
      screen.getByRole("link", { name: /go to previous page/i })
    )
    expect(onPageChange).toHaveBeenCalledWith(1)
    expect(onPrevious).toHaveBeenCalledWith(1)
  })

  it("renders custom previous/next labels", () => {
    render(
      <PaginationComponent
        totalItems={50}
        itemsPerPage={10}
        currentPage={2}
        onPageChange={jest.fn()}
        previousLabel="Back"
        nextLabel="Forward"
      />
    )
    expect(
      within(
        screen.getByRole("link", { name: /go to previous page/i })
      ).getByText("Back")
    ).toBeInTheDocument()
    expect(
      within(screen.getByRole("link", { name: /go to next page/i })).getByText(
        "Forward"
      )
    ).toBeInTheDocument()
  })

  it("hides itself when there is a single page and hideOnSinglePage is set", () => {
    const { container } = render(
      <PaginationComponent
        totalItems={5}
        itemsPerPage={10}
        currentPage={1}
        onPageChange={jest.fn()}
        hideOnSinglePage
      />
    )
    expect(container).toBeEmptyDOMElement()
  })

  it("still renders a single page of results when hideOnSinglePage is not set", () => {
    render(
      <PaginationComponent
        totalItems={5}
        itemsPerPage={10}
        currentPage={1}
        onPageChange={jest.fn()}
      />
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "1" })).toBeInTheDocument()
  })
})

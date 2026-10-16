import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import {
  Card,
  CardAction,
  CardComponent,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./index"

describe("Card primitives", () => {
  it("renders children and default size data attribute", () => {
    render(<Card data-testid="card">Content</Card>)
    const card = screen.getByTestId("card")
    expect(card).toHaveAttribute("data-slot", "card")
    expect(card).toHaveAttribute("data-size", "default")
    expect(card).toHaveTextContent("Content")
  })

  it("forwards the size prop", () => {
    render(
      <Card data-testid="card" size="sm">
        Small
      </Card>
    )
    expect(screen.getByTestId("card")).toHaveAttribute("data-size", "sm")
  })

  it("composes header, title, description, action, content and footer", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>My Title</CardTitle>
          <CardDescription>My Description</CardDescription>
          <CardAction>
            <button>Action</button>
          </CardAction>
        </CardHeader>
        <CardContent>Body</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>
    )
    expect(screen.getByText("My Title")).toBeInTheDocument()
    expect(screen.getByText("My Description")).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /action/i })).toBeInTheDocument()
    expect(screen.getByText("Body")).toBeInTheDocument()
    expect(screen.getByText("Footer")).toBeInTheDocument()
  })
})

describe("CardComponent", () => {
  it("renders title, description, action, children and footer from props", () => {
    render(
      <CardComponent
        title="Rebate Summary"
        description="Overview of savings"
        action={<button>Edit</button>}
        footer={<button>View Details</button>}
      >
        <p>$5,500</p>
      </CardComponent>
    )
    expect(screen.getByText("Rebate Summary")).toBeInTheDocument()
    expect(screen.getByText("Overview of savings")).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /edit/i })).toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: /view details/i })
    ).toBeInTheDocument()
    expect(screen.getByText("$5,500")).toBeInTheDocument()
  })

  it("omits the header when no title, description or action is given", () => {
    const { container } = render(<CardComponent>Just content</CardComponent>)
    expect(container.querySelector('[data-slot="card-header"]')).toBeNull()
    expect(screen.getByText("Just content")).toBeInTheDocument()
  })

  it("omits the footer when no footer prop is given", () => {
    const { container } = render(<CardComponent>Content</CardComponent>)
    expect(container.querySelector('[data-slot="card-footer"]')).toBeNull()
  })

  it("fires onClick handlers passed through to action and footer buttons", async () => {
    const user = userEvent.setup()
    const onEdit = jest.fn()
    render(
      <CardComponent
        title="Title"
        action={<button onClick={onEdit}>Edit</button>}
      >
        Content
      </CardComponent>
    )
    await user.click(screen.getByRole("button", { name: /edit/i }))
    expect(onEdit).toHaveBeenCalledTimes(1)
  })

  it("applies size and custom className to the root card", () => {
    const { container } = render(
      <CardComponent size="sm" className="custom-class">
        Content
      </CardComponent>
    )
    const card = container.querySelector('[data-slot="card"]')
    expect(card).toHaveAttribute("data-size", "sm")
    expect(card).toHaveClass("custom-class")
  })

  it("renders the image as the first child of the card", () => {
    const { container } = render(
      <CardComponent
        image={<img src="/rebate.png" alt="Rebate chart" />}
        title="Title"
      >
        Content
      </CardComponent>
    )
    const card = container.querySelector('[data-slot="card"]')
    expect(card?.firstElementChild?.tagName).toBe("IMG")
    expect(screen.getByAltText("Rebate chart")).toBeInTheDocument()
  })

  it("applies the per-slot classNames", () => {
    const { container } = render(
      <CardComponent
        title="Title"
        description="Description"
        action={<button>Edit</button>}
        footer={<span>Footer</span>}
        headerClassName="header-cls"
        titleClassName="title-cls"
        descriptionClassName="description-cls"
        actionClassName="action-cls"
        contentClassName="content-cls"
        footerClassName="footer-cls"
      >
        Content
      </CardComponent>
    )
    expect(container.querySelector('[data-slot="card-header"]')).toHaveClass(
      "header-cls"
    )
    expect(container.querySelector('[data-slot="card-title"]')).toHaveClass(
      "title-cls"
    )
    expect(
      container.querySelector('[data-slot="card-description"]')
    ).toHaveClass("description-cls")
    expect(container.querySelector('[data-slot="card-action"]')).toHaveClass(
      "action-cls"
    )
    expect(container.querySelector('[data-slot="card-content"]')).toHaveClass(
      "content-cls"
    )
    expect(container.querySelector('[data-slot="card-footer"]')).toHaveClass(
      "footer-cls"
    )
  })

  it("renders the header when only a description is given", () => {
    const { container } = render(<CardComponent description="Only text" />)
    expect(
      container.querySelector('[data-slot="card-header"]')
    ).toBeInTheDocument()
    expect(container.querySelector('[data-slot="card-title"]')).toBeNull()
  })

  it("omits the content wrapper when there are no children", () => {
    const { container } = render(<CardComponent title="Title" />)
    expect(container.querySelector('[data-slot="card-content"]')).toBeNull()
  })

  it("forwards extra div props to the root card", () => {
    render(
      <CardComponent data-testid="card" aria-label="Summary card">
        Content
      </CardComponent>
    )
    expect(screen.getByTestId("card")).toHaveAttribute(
      "aria-label",
      "Summary card"
    )
  })
})

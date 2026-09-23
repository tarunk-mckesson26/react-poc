import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Checkbox } from "./index"

describe("Checkbox", () => {
    it("toggles when clicked", async () => {
        const user = userEvent.setup()
        render(<Checkbox value="accept" label="Accept terms and conditions" />)

        const checkbox = screen.getByRole("checkbox", { name: /accept terms and conditions/i })
        expect(checkbox).not.toBeChecked()

        await user.click(checkbox)
        expect(checkbox).toBeChecked()
    })

    it("marks invalid via error or the invalid prop, and shows the error text", () => {
        const { rerender } = render(
            <Checkbox value="newsletter" label="Enable notifications" error="Required" />
        )
        const checkbox = screen.getByRole("checkbox", { name: /enable notifications/i })
        expect(checkbox).toHaveAttribute("aria-invalid", "true")
        expect(screen.getByText("Required")).toBeInTheDocument()

        rerender(<Checkbox value="newsletter" label="Enable notifications" invalid />)
        expect(checkbox).toHaveAttribute("aria-invalid", "true")
    })

    it.each([true, false])("renders the card variant checked=%s", (checked) => {
        render(<Checkbox variant="card" value="card" label="Card option" checked={checked} />)
        const checkbox = screen.getByRole("checkbox", { name: /card option/i })
        checked ? expect(checkbox).toBeChecked() : expect(checkbox).not.toBeChecked()
    })

    it("renders label, description, or neither", () => {
        const { rerender, container } = render(<Checkbox value="a" description="Just a description" />)
        expect(screen.getByText("Just a description")).toBeInTheDocument()

        rerender(<Checkbox value="a" />)
        expect(container.querySelector("span.flex.min-w-0")).not.toBeInTheDocument()
    })

    it("forwards disabled, size, and className props", () => {
        render(<Checkbox value="box" label="Box" disabled checked size="lg" className="custom-class" />)
        const checkbox = screen.getByRole("checkbox", { name: /box/i })
        expect(checkbox).toBeDisabled()
        expect(checkbox).toBeChecked()
    })
})

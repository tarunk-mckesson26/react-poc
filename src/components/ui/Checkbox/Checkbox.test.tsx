import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Checkbox } from "./index"

describe("Checkbox", () => {
    it("supports a named checkbox group", () => {
        render(<fieldset><legend>Preferences</legend><Checkbox label="Email updates" /></fieldset>)
        expect(screen.getByRole("group", { name: "Preferences" })).toContainElement(
            screen.getByRole("checkbox", { name: "Email updates" })
        )
    })
    it("renders the default checkbox and description", () => {
        render(<Checkbox label="Option" description="Help text" />)
        const checkbox = screen.getByRole("checkbox", { name: /option/i })
        expect(checkbox).not.toBeChecked()
        expect(checkbox).toHaveClass("h-4", "w-4")
        expect(checkbox.closest("label")).toHaveAttribute("data-variant", "default")
        expect(screen.getByText("Help text")).toBeInTheDocument()
    })

    it("does not toggle a disabled checkbox", async () => {
        const user = userEvent.setup()
        const onCheckedChange = jest.fn()
        render(<Checkbox label="Disabled" disabled onCheckedChange={onCheckedChange} />)
        await user.click(screen.getByRole("checkbox"))
        expect(screen.getByRole("checkbox")).not.toBeChecked()
        expect(onCheckedChange).not.toHaveBeenCalled()
        expect(screen.getByRole("checkbox")).toBeDisabled()
    })

    it("toggles by click and keyboard", async () => {
        const user = userEvent.setup()
        const onCheckedChange = jest.fn()
        render(<Checkbox label="Accept terms" onCheckedChange={onCheckedChange} />)
        const checkbox = screen.getByRole("checkbox")
        await user.click(checkbox)
        expect(checkbox).toBeChecked()
        expect(onCheckedChange).toHaveBeenLastCalledWith(true)

        await user.keyboard(" ")
        expect(checkbox).not.toBeChecked()
        expect(onCheckedChange).toHaveBeenLastCalledWith(false)
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

    it("supports the checked card variant with end placement", () => {
        render(<Checkbox variant="card" align="end" defaultChecked size="lg" className="custom" aria-label="Card option" />)
        const checkbox = screen.getByRole("checkbox", { name: "Card option" })
        expect(checkbox).toBeChecked()
        expect(checkbox).toHaveClass("h-5", "w-5", "custom")
        expect(checkbox.closest("label")).toHaveAttribute("data-variant", "card")
        expect(checkbox.parentElement).toHaveClass("order-2")
    })

    it("submits checked values and resets to the default", async () => {
        const user = userEvent.setup()
        const { container } = render(
            <form>
                <Checkbox name="terms" value="accepted" label="Terms" defaultChecked />
                <button type="reset">Reset</button>
            </form>
        )
        const form = container.querySelector("form")!
        expect(new FormData(form).get("terms")).toBe("accepted")
        await user.click(screen.getByRole("checkbox"))
        expect(new FormData(form).has("terms")).toBe(false)
        await user.click(screen.getByRole("button", { name: "Reset" }))
        expect(screen.getByRole("checkbox")).toBeChecked()
    })
})

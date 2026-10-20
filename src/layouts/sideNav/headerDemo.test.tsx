import { fireEvent, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import HeaderDemo from "./headerDemo"

describe("Header demo session and New Era page", () => {
  beforeEach(() => localStorage.clear())

  it("shows the Connect Portal welcome heading in the header preview", () => {
    render(<HeaderDemo />)
    expect(screen.getByRole("heading", { name: "Welcome to Connect Portal" })).toBeInTheDocument()
    expect(screen.queryByRole("heading", { name: "Welcome to New Era landing page" })).not.toBeInTheDocument()
    expect(screen.queryByRole("img", { name: /Purchasing Insights dashboard/ })).not.toBeInTheDocument()
  })

  it("persists CPH selection and restores it on the New Era page", async () => {
    const user = userEvent.setup()
    const originalPage = render(<HeaderDemo />)
    await user.click(screen.getByRole("button", { name: "Profile" }))
    await user.click(await screen.findByRole("menuitem", { name: "Login as CPH user", exact: true }))
    expect(localStorage.getItem("header-demo-user-type")).toBe("cph")
    originalPage.unmount()

    render(<HeaderDemo page="new-era" />)
    expect(screen.getByRole("heading", { name: "Welcome to New Era landing page" })).toBeInTheDocument()
    expect(screen.getByRole("img", { name: /Purchasing Insights dashboard/ })).toHaveAttribute("src", expect.any(String))
    expect(screen.getByRole("button", { name: "Profile" })).toHaveTextContent("CPH")
    await user.click(screen.getByRole("button", { name: "Reporting" }))
    expect(await screen.findByRole("menuitem", { name: "New Era Page" })).toHaveAttribute("target", "_blank")
  })

  it("updates the header when another tab switches user type", async () => {
    const user = userEvent.setup()
    localStorage.setItem("header-demo-user-type", "cph")
    render(<HeaderDemo page="new-era" />)
    expect(screen.getByRole("button", { name: "Reporting" })).toBeInTheDocument()
    localStorage.setItem("header-demo-user-type", "non-cph")
    fireEvent(window, new StorageEvent("storage", { key: "header-demo-user-type", newValue: "non-cph" }))
    expect(screen.getByRole("button", { name: "Profile" })).toHaveTextContent("N-CPH")
    await user.click(screen.getByRole("button", { name: "Reporting" }))
    expect(await screen.findByRole("menuitem", { name: "ERA Classic" })).toHaveAttribute("href", "https://dev-era.mckesson.com")
    expect(screen.queryByRole("menuitem", { name: "New Era Page" })).not.toBeInTheDocument()
  })
})
import { fireEvent, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import HeaderDemo from "./headerDemo"

describe("Header demo session and New Era page", () => {
  beforeEach(() => {
    localStorage.clear()
    sessionStorage.clear()
  })

  it("shows the Connect Portal dashboard instead of the welcome heading in the header preview", () => {
    sessionStorage.setItem("header-demo-user-type", "non-cph")
    render(<HeaderDemo />)
    expect(screen.getByRole("img", { name: "Connect Portal dashboard" })).toHaveAttribute("src", expect.any(String))
    expect(screen.queryByRole("heading", { name: "Welcome to Connect Portal" })).not.toBeInTheDocument()
    expect(screen.queryByRole("heading", { name: "Welcome to New Era landing page" })).not.toBeInTheDocument()
    expect(screen.queryByRole("img", { name: /Purchasing Insights dashboard/ })).not.toBeInTheDocument()
  })

  it("persists CPH selection and restores it on the New Era page", async () => {
    const user = userEvent.setup()
    const originalPage = render(<HeaderDemo />)
    await user.type(screen.getByRole("textbox", { name: "Username" }), "cphUser")
    await user.click(screen.getByRole("checkbox", { name: "Keep me signed in" }))
    await user.click(screen.getByRole("button", { name: "Next" }))
    expect(localStorage.getItem("header-demo-user-type")).toBe("cph")
    originalPage.unmount()

    render(<HeaderDemo page="new-era" />)
    expect(screen.getByRole("heading", { name: "Welcome to New Era landing page" })).toBeInTheDocument()
    expect(screen.getByRole("img", { name: /Purchasing Insights dashboard/ })).toHaveAttribute("src", expect.any(String))
    expect(screen.queryByRole("img", { name: "Connect Portal dashboard" })).not.toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Profile" })).toHaveTextContent("CPH")
    await user.click(screen.getByRole("button", { name: "Reporting" }))
    expect(await screen.findByRole("menuitem", { name: "KPI Dashboard New" })).toHaveAttribute("target", "_blank")
  })

  it("signs in other usernames as N-CPH for the current session", async () => {
    const user = userEvent.setup()
    render(<HeaderDemo />)
    expect(screen.getByRole("heading", { name: "Sign In" })).toBeInTheDocument()
    await user.type(screen.getByRole("textbox", { name: "Username" }), "otherUser")
    await user.click(screen.getByRole("button", { name: "Next" }))
    expect(screen.getByRole("button", { name: "Profile" })).toHaveTextContent("N-CPH")
    expect(sessionStorage.getItem("header-demo-user-type")).toBe("non-cph")
    expect(localStorage.getItem("header-demo-user-type")).toBeNull()
    await user.click(screen.getByRole("button", { name: "Reporting" }))
    expect(screen.queryByRole("menuitem", { name: /KPI Dashboard/ })).not.toBeInTheDocument()
  })

  it("shows the login page even with an existing session on the login route", () => {
    localStorage.setItem("header-demo-user-type", "cph")
    render(<HeaderDemo page="login" />)
    expect(screen.getByRole("heading", { name: "Sign In" })).toBeInTheDocument()
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
    expect(await screen.findByRole("menuitem", { name: "Enterprise Reporting & Analytics" })).toHaveAttribute("href", "https://dev-era.mckesson.com")
    expect(screen.queryByRole("menuitem", { name: /KPI Dashboard/ })).not.toBeInTheDocument()
  })
})
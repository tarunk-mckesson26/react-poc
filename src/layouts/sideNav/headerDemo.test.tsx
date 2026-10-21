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
    expect(screen.queryByRole("heading", { name: "Welcome to New Era landing page" })).not.toBeInTheDocument()
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

  it("disables every main menu except Reporting only on the New Era page", async () => {
    const user = userEvent.setup()
    sessionStorage.setItem("header-demo-user-type", "cph")
    const { rerender } = render(<HeaderDemo page="new-era" />)
    const disabledMenus = ["Ordering", "DSCSA Traceability", "Billing and Payments", "340B Architect", "Admin"]
    for (const name of disabledMenus) {
      const menu = screen.getByRole("button", { name })
      expect(menu).toBeDisabled()
      expect(menu).not.toHaveAttribute("href")
      await user.click(menu)
      expect(screen.queryByRole("menu")).not.toBeInTheDocument()
    }
    const reporting = screen.getByRole("button", { name: "Reporting" })
    expect(reporting).toBeEnabled()
    await user.click(reporting)
    expect(await screen.findByRole("menuitem", { name: "My Reports" })).toBeInTheDocument()
    await user.keyboard("{Escape}")

    rerender(<HeaderDemo />)
    for (const name of disabledMenus) {
      expect(screen.getByRole("link", { name })).toHaveAttribute("href")
    }
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

  it("replaces catalog search with a location dropdown only on New Era", async () => {
    const user = userEvent.setup()
    sessionStorage.setItem("header-demo-user-type", "cph")
    const { rerender } = render(<HeaderDemo page="new-era" />)
    expect(screen.queryByRole("search")).not.toBeInTheDocument()
    expect(screen.queryByRole("combobox", { name: "Search catalog" })).not.toBeInTheDocument()
    await user.click(screen.getByRole("button", { name: "Location / Street: Select location" }))
    expect(await screen.findByRole("menuitemradio", { name: "Street 1" })).toBeInTheDocument()
    expect(screen.queryByRole("menuitemradio", { name: "VUMC" })).not.toBeInTheDocument()
    await user.click(screen.getByRole("menuitemradio", { name: "Street 2" }))
    expect(screen.getByRole("button", { name: "Location / Street: Street 2" })).toHaveTextContent("Street 2")
    await user.click(screen.getByRole("button", { name: "Location / Street: Street 2" }))
    expect(await screen.findByRole("menuitemradio", { name: "Street 2" })).toHaveAttribute("aria-checked", "true")
    await user.keyboard("{Escape}")

    rerender(<HeaderDemo />)
    expect(screen.getByRole("search")).toBeInTheDocument()
    expect(screen.getByRole("combobox", { name: "Search catalog" })).toBeInTheDocument()
    expect(screen.queryByRole("button", { name: /Location \/ Street/ })).not.toBeInTheDocument()
  })
})
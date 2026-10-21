import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Header } from "./index"

describe("Header", () => {
  it("renders the reference branding and navigation", () => {
    render(<Header />)
    expect(screen.getByRole("link", { name: "McKesson home" })).toHaveTextContent("MCKESSON")
    expect(screen.getByRole("navigation", { name: "Main navigation" })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "Notifications" })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "DSCSA Traceability" })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "Apps" })).toBeInTheDocument()
    expect(screen.getByText("VUMC IP VUH WAC A34")).toBeInTheDocument()
  })

  it("links to the login page instead of selecting a user type", async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole("button", { name: "Profile" }))
    expect(await screen.findByRole("menuitem", { name: "Sign In" })).toHaveAttribute("href", "/login")
    expect(screen.queryByText("Login as CPH user")).not.toBeInTheDocument()
    expect(screen.queryByText("Login as non-CPH user")).not.toBeInTheDocument()
  })

  it("supports login URLs and keyboard dismissal", async () => {
    const user = userEvent.setup()
    render(<Header loginHref="/auth/login" />)
    const profile = screen.getByRole("button", { name: "Profile" })
    profile.focus()
    await user.keyboard("{ArrowDown}")
    expect(await screen.findByRole("menuitem", { name: "Sign In" })).toHaveAttribute("href", "/auth/login")
    await user.keyboard("{Escape}")
    expect(profile).toHaveFocus()
  })

  it("submits a trimmed search and selected catalog", async () => {
    const user = userEvent.setup()
    const onSearch = jest.fn()
    render(<Header onSearch={onSearch} catalogOptions={["Catalog", "Supplies"]} />)
    await user.selectOptions(screen.getByRole("combobox"), "Supplies")
    await user.type(screen.getByRole("textbox"), "  aspirin  ")
    await user.click(screen.getByRole("button", { name: "Search" }))
    expect(onSearch).toHaveBeenCalledWith("aspirin", "Supplies")
  })

  it("toggles mobile navigation", async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole("button", { name: "Open navigation" }))
    expect(screen.getByRole("button", { name: "Close navigation" })).toHaveAttribute("aria-expanded", "true")
    await user.click(screen.getByRole("button", { name: "Close navigation" }))
    expect(screen.getByRole("button", { name: "Open navigation" })).toHaveAttribute("aria-expanded", "false")
  })

  it("opens configured accounts from the account selector", async () => {
    const user = userEvent.setup()
    render(<Header accountOptions={[{ label: "Another account", href: "/accounts/other" }]} />)
    await user.click(screen.getByRole("button", { name: "Account: VUMC IP VUH WAC A34" }))
    expect(await screen.findByRole("menuitem", { name: "Another account" })).toHaveAttribute("href", "/accounts/other")
  })

  it("shows the standard reporting items before login", async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole("button", { name: "Reporting" }))
    expect(await screen.findByRole("menuitem", { name: "Enterprise Reporting & Analytics" })).toHaveAttribute("href", "https://dev-era.mckesson.com")
    expect(screen.getByRole("menuitem", { name: "My Reports" })).toHaveAttribute("href", "/reporting/my-reports")
    expect(screen.getByRole("menuitem", { name: "Team Reports" })).toHaveAttribute("href", "/reporting/team-reports")
    expect(screen.getAllByRole("menuitem")).toHaveLength(3)
    expect(screen.queryByText("New")).not.toBeInTheDocument()
  })

  it("enables the highlighted KPI Dashboard new-tab link only for CPH", async () => {
    const user = userEvent.setup()
    const { rerender } = render(<Header userType="cph" />)
    expect(screen.getByRole("button", { name: "Profile" })).toHaveTextContent("CPH")
    await user.click(screen.getByRole("button", { name: "Reporting" }))
    const newEra = await screen.findByRole("menuitem", { name: "KPI Dashboard New" })
    expect(screen.getByText("New")).toHaveClass("cph-header-menu-new")
    expect(screen.getAllByRole("menuitem")).toHaveLength(4)
    expect(newEra).toHaveAttribute("href", "/new-era")
    expect(newEra).toHaveAttribute("target", "_blank")
    expect(newEra).toHaveAttribute("rel", "noopener noreferrer")
    await user.keyboard("{Escape}")
    rerender(<Header userType="non-cph" />)
    expect(screen.getByRole("button", { name: "Profile" })).toHaveTextContent("N-CPH")
    await user.click(screen.getByRole("button", { name: "Reporting" }))
    expect(screen.queryByRole("menuitem", { name: /KPI Dashboard/ })).not.toBeInTheDocument()
    expect(screen.queryByText("New")).not.toBeInTheDocument()
    const classic = await screen.findByRole("menuitem", { name: "Enterprise Reporting & Analytics" })
    expect(classic).toHaveAttribute("href", "https://dev-era.mckesson.com")
    expect(classic).toHaveAttribute("target", "_blank")
    expect(classic).toHaveAttribute("rel", "noopener noreferrer")
  })

  it("supports a CPH session provided by the parent and a custom New Era URL", async () => {
    const user = userEvent.setup()
    render(<Header userType="cph" newEraHref="https://example.com/new-era" />)
    expect(screen.getByRole("button", { name: "Profile" })).toHaveTextContent("CPH")
    await user.click(screen.getByRole("button", { name: "Reporting" }))
    expect(await screen.findByRole("menuitem", { name: "KPI Dashboard New" })).toHaveAttribute("href", "https://example.com/new-era")
  })

  it("restores non-CPH profile and reporting from parent state", async () => {
    const user = userEvent.setup()
    render(<Header userType="non-cph" />)
    expect(screen.getByRole("button", { name: "Profile" })).toHaveTextContent("N-CPH")
    await user.click(screen.getByRole("button", { name: "Reporting" }))
    expect(await screen.findByRole("menuitem", { name: "Enterprise Reporting & Analytics" })).toHaveAttribute("href", "https://dev-era.mckesson.com")
    expect(screen.queryByRole("menuitem", { name: /KPI Dashboard/ })).not.toBeInTheDocument()
  })
})
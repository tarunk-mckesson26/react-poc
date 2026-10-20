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

  it.each([
    ["Login as CPH user", "cph"],
    ["Login as non-CPH user", "non-cph"],
  ])("selects %s from the profile menu", async (label, userType) => {
    const onLogin = jest.fn()
    const user = userEvent.setup()
    render(<Header onLogin={onLogin} />)
    await user.click(screen.getByRole("button", { name: "Profile" }))
    await user.click(await screen.findByRole("menuitem", { name: label }))
    expect(onLogin).toHaveBeenCalledWith(userType)
    expect(screen.queryByRole("menu")).not.toBeInTheDocument()
  })

  it("supports login URLs and keyboard dismissal", async () => {
    const user = userEvent.setup()
    render(<Header cphLoginHref="/auth/cph" nonCphLoginHref="/auth/non-cph" />)
    const profile = screen.getByRole("button", { name: "Profile" })
    profile.focus()
    await user.keyboard("{ArrowDown}")
    expect(await screen.findByRole("menuitem", { name: "Login as CPH user" })).toHaveAttribute("href", "/auth/cph")
    expect(screen.getByRole("menuitem", { name: "Login as non-CPH user" })).toHaveAttribute("href", "/auth/non-cph")
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

  it("enables the New Era new-tab link only after selecting CPH", async () => {
    const user = userEvent.setup()
    render(<Header />)
    expect(screen.queryByRole("button", { name: "Reporting" })).not.toBeInTheDocument()
    await user.click(screen.getByRole("button", { name: "Profile" }))
    await user.click(await screen.findByRole("menuitem", { name: "Login as CPH user", exact: true }))
    expect(screen.getByRole("button", { name: "Profile" })).toHaveTextContent("CPH")
    await user.click(screen.getByRole("button", { name: "Reporting" }))
    const newEra = await screen.findByRole("menuitem", { name: "New Era Page" })
    expect(newEra).toHaveAttribute("href", "/new-era")
    expect(newEra).toHaveAttribute("target", "_blank")
    expect(newEra).toHaveAttribute("rel", "noopener noreferrer")
    await user.keyboard("{Escape}")
    await user.click(screen.getByRole("button", { name: "Profile" }))
    await user.click(await screen.findByRole("menuitem", { name: "Login as non-CPH user", exact: true }))
    expect(screen.getByRole("button", { name: "Profile" })).toHaveTextContent("N-CPH")
    await user.click(screen.getByRole("button", { name: "Reporting" }))
    expect(screen.queryByRole("menuitem", { name: "New Era Page" })).not.toBeInTheDocument()
    const classic = await screen.findByRole("menuitem", { name: "ERA Classic" })
    expect(classic).toHaveAttribute("href", "https://dev-era.mckesson.com")
    expect(classic).toHaveAttribute("target", "_blank")
    expect(classic).toHaveAttribute("rel", "noopener noreferrer")
  })

  it("supports a CPH session provided by the parent and a custom New Era URL", async () => {
    const user = userEvent.setup()
    render(<Header userType="cph" newEraHref="https://example.com/new-era" />)
    expect(screen.getByRole("button", { name: "Profile" })).toHaveTextContent("CPH")
    await user.click(screen.getByRole("button", { name: "Reporting" }))
    expect(await screen.findByRole("menuitem", { name: "New Era Page" })).toHaveAttribute("href", "https://example.com/new-era")
  })

  it("restores non-CPH profile and reporting from parent state", async () => {
    const user = userEvent.setup()
    render(<Header userType="non-cph" />)
    expect(screen.getByRole("button", { name: "Profile" })).toHaveTextContent("N-CPH")
    await user.click(screen.getByRole("button", { name: "Reporting" }))
    expect(await screen.findByRole("menuitem", { name: "ERA Classic" })).toHaveAttribute("href", "https://dev-era.mckesson.com")
    expect(screen.queryByRole("menuitem", { name: "New Era Page" })).not.toBeInTheDocument()
  })
})
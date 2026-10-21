import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import LoginPage from "./loginPage"

describe("Login page", () => {
  it.each([
    ["cphUser", "cph"],
    ["anotherUser", "non-cph"],
    ["CPHUser", "non-cph"],
  ])("signs in %s as %s", async (username, expectedType) => {
    const user = userEvent.setup()
    const onLogin = jest.fn()
    render(<LoginPage onLogin={onLogin} />)
    await user.type(screen.getByRole("textbox", { name: "Username" }), username)
    await user.click(screen.getByRole("button", { name: "Next" }))
    expect(onLogin).toHaveBeenCalledWith(expectedType, false)
  })

  it("supports keeping the user signed in", async () => {
    const user = userEvent.setup()
    const onLogin = jest.fn()
    render(<LoginPage onLogin={onLogin} />)
    await user.type(screen.getByRole("textbox", { name: "Username" }), "cphUser")
    await user.click(screen.getByRole("checkbox", { name: "Keep me signed in" }))
    await user.keyboard("{Shift>}{Tab}{/Shift}{Enter}")
    expect(onLogin).toHaveBeenCalledWith("cph", true)
  })

  it("does not submit an empty username", async () => {
    const user = userEvent.setup()
    const onLogin = jest.fn()
    render(<LoginPage onLogin={onLogin} />)
    await user.click(screen.getByRole("button", { name: "Next" }))
    expect(onLogin).not.toHaveBeenCalled()
  })
})
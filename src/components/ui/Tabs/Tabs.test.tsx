import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Tabs, TabsComponent, TabsContent, TabsList, TabsTrigger } from "./index"

function renderTabs(onValueChange?: (value: string) => void) {
  return render(
    <Tabs defaultValue="tab-1" onValueChange={onValueChange}>
      <TabsList>
        <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab-2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab-3" disabled>
          Tab 3
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab-1">Content 1</TabsContent>
      <TabsContent value="tab-2">Content 2</TabsContent>
    </Tabs>
  )
}

describe("Tabs", () => {
  it("shows the default tab's content and marks it active", () => {
    renderTabs()
    expect(screen.getByText("Content 1")).toBeInTheDocument()
    expect(screen.getByRole("tab", { name: "Tab 1" })).toHaveAttribute("data-state", "active")
  })

  it("switches tabs on click and fires onValueChange", async () => {
    const user = userEvent.setup()
    const onValueChange = jest.fn()
    renderTabs(onValueChange)

    await user.click(screen.getByRole("tab", { name: "Tab 2" }))
    expect(onValueChange).toHaveBeenCalledWith("tab-2")
    expect(screen.getByText("Content 2")).toBeInTheDocument()
    expect(screen.getByRole("tab", { name: "Tab 1" })).toHaveAttribute("data-state", "inactive")
  })

  it("does not switch when a disabled tab is clicked", async () => {
    const user = userEvent.setup()
    renderTabs()
    const tab3 = screen.getByRole("tab", { name: "Tab 3" })
    expect(tab3).toBeDisabled()

    await user.click(tab3)
    expect(screen.getByText("Content 1")).toBeInTheDocument()
  })

  it("renders dynamic tab data with React elements", async () => {
    const user = userEvent.setup()
    render(
      <TabsComponent
        items={[
          {
            value: "overview",
            label: <span>Overview</span>,
            content: <div>Overview panel</div>,
          },
          {
            value: "settings",
            label: <span>Settings</span>,
            content: <section>Settings panel</section>,
          },
        ]}
      />
    )
    expect(screen.getByText("Overview panel")).toBeInTheDocument()
    await user.click(screen.getByRole("tab", { name: "Settings" }))
    expect(screen.getByText("Settings panel")).toBeInTheDocument()
  })
})

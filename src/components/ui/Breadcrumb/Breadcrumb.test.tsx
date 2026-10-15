import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Breadcrumb } from "./index";

describe("Breadcrumb", () => {
  it.each([undefined, "root"] as const)("renders the %s root", (name) => {
    render(<Breadcrumb name={name}>Navigation</Breadcrumb>);

    expect(
      screen.getByRole("navigation", { name: "breadcrumb" }),
    ).toHaveAttribute("data-slot", "breadcrumb");
    expect(screen.getByRole("navigation")).not.toHaveAttribute("name");
  });

  it("renders the named breadcrumb parts with their original semantics", () => {
    const { container } = render(
      <Breadcrumb>
        <Breadcrumb name="List" className="gap-4">
          <Breadcrumb name="Item">
            <Breadcrumb name="Link" href="/home">
              Home
            </Breadcrumb>
          </Breadcrumb>
          <Breadcrumb name="Separator" />
          <Breadcrumb name="Item">
            <Breadcrumb name="Page">Current</Breadcrumb>
            <Breadcrumb name="Ellipsis" />
          </Breadcrumb>
        </Breadcrumb>
      </Breadcrumb>,
    );

    expect(screen.getByRole("list").tagName).toBe("OL");
    expect(screen.getByRole("list")).toHaveClass("gap-4");
    expect(screen.getByRole("list")).not.toHaveClass("gap-1.5");
    expect(screen.getAllByRole("listitem")).toHaveLength(2);
    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute(
      "href",
      "/home",
    );
    expect(screen.getByRole("link", { name: "Current" })).toHaveAttribute(
      "aria-current",
      "page",
    );
    expect(screen.getByRole("link", { name: "Current" })).toHaveAttribute(
      "aria-disabled",
      "true",
    );
    expect(
      container.querySelector('[data-slot="breadcrumb-separator"] svg'),
    ).toBeInTheDocument();
    expect(
      container.querySelector('[data-slot="breadcrumb-ellipsis"]'),
    ).toHaveAttribute("aria-hidden", "true");
    expect(container.querySelector("[name]")).toBeNull();
  });

  it("supports asChild links and custom separators", () => {
    render(
      <Breadcrumb>
        <Breadcrumb name="List">
          <Breadcrumb name="Item">
            <Breadcrumb name="Link" asChild>
              <a href="/docs">Documentation</a>
            </Breadcrumb>
          </Breadcrumb>
          <Breadcrumb name="Separator">/</Breadcrumb>
        </Breadcrumb>
      </Breadcrumb>,
    );

    expect(screen.getByRole("link")).toHaveAttribute(
      "data-slot",
      "breadcrumb-link",
    );
    expect(screen.getByRole("link")).toHaveAttribute("href", "/docs");
    expect(screen.getByText("/")).toHaveAttribute(
      "data-slot",
      "breadcrumb-separator",
    );
  });

  it("provides a styled native trigger without consumer classes", async () => {
    const user = userEvent.setup();
    render(
      <Breadcrumb name="DropdownMenu">
        <Breadcrumb name="DropdownMenuTrigger" aria-label="Toggle menu">
          <Breadcrumb name="Ellipsis" />
        </Breadcrumb>
        <Breadcrumb name="DropdownMenuContent">
          <Breadcrumb name="DropdownMenuItem">Documentation</Breadcrumb>
        </Breadcrumb>
      </Breadcrumb>,
    );

    const trigger = screen.getByRole("button", { name: "Toggle menu" });
    expect(trigger.tagName).toBe("BUTTON");
    expect(trigger).toHaveClass("group/button", "[&>svg]:size-3.5");
    expect(trigger.querySelector("button")).toBeNull();

    await user.tab();
    expect(trigger).toHaveFocus();
    await user.keyboard("{Enter}");

    expect(screen.getByRole("menu")).toHaveAttribute("data-align", "start");
    expect(
      screen.getByRole("menuitem", { name: "Documentation" }),
    ).toBeInTheDocument();
  });

  it("opens the dropdown by keyboard and forwards item selection", async () => {
    const user = userEvent.setup();
    const onSelect = jest.fn();
    render(
      <Breadcrumb name="DropdownMenu">
        <Breadcrumb name="DropdownMenuTrigger" asChild>
          <button>More pages</button>
        </Breadcrumb>
        <Breadcrumb name="DropdownMenuContent" align="end">
          <Breadcrumb name="DropdownMenuGroup">
            <Breadcrumb
              name="DropdownMenuItem"
              inset
              variant="destructive"
              onSelect={onSelect}
            >
              Remove
            </Breadcrumb>
            <Breadcrumb name="DropdownMenuItem" disabled>
              Unavailable
            </Breadcrumb>
          </Breadcrumb>
        </Breadcrumb>
      </Breadcrumb>,
    );

    await user.tab();
    await user.keyboard("{Enter}");

    expect(screen.getByRole("menu")).toHaveAttribute(
      "data-slot",
      "dropdown-menu-content",
    );
    expect(screen.getByRole("menu")).toHaveAttribute("data-align", "end");
    expect(screen.getByRole("group")).toHaveAttribute(
      "data-slot",
      "dropdown-menu-group",
    );
    expect(screen.getByRole("menuitem", { name: "Remove" })).toHaveAttribute(
      "data-inset",
      "true",
    );
    expect(screen.getByRole("menuitem", { name: "Remove" })).toHaveAttribute(
      "data-variant",
      "destructive",
    );
    expect(
      screen.getByRole("menuitem", { name: "Unavailable" }),
    ).toHaveAttribute("aria-disabled", "true");

    await user.click(screen.getByRole("menuitem", { name: "Remove" }));

    expect(onSelect).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../../App";

describe("Dialog", () => {
  it("opens and closes with composed buttons without nesting buttons", async () => {
    const user = userEvent.setup();
    render(<App />);

    expect(document.querySelector("button button")).toBeNull();
    await user.click(screen.getByRole("button", { name: "Sticky Footer" }));
    expect(screen.getByRole("dialog", { name: "Dialog title" })).toBeVisible();
    expect(document.querySelector("button button")).toBeNull();

    const closeIcon = screen.getByRole("button", { name: "Close dialog" }).querySelector("svg");
    expect(closeIcon).toHaveAttribute("width", "16");
    expect(closeIcon).toHaveAttribute("height", "16");

    await user.click(screen.getByRole("button", { name: "Close" }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Sticky Footer" }));
    await user.click(screen.getByRole("button", { name: "Close dialog" }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
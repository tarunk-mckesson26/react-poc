import { render, screen } from "@testing-library/react";
import { Badge } from "./index";

describe("Badge", () => {
  it("renders a standard badge by default", () => {
    render(<Badge>New</Badge>);
    const badge = screen.getByText("New");
    expect(badge).toHaveAttribute("data-slot", "badge");
    expect(badge).toHaveAttribute("data-variant", "default");
    expect(badge).not.toHaveClass("rounded-full");
  });

  it("renders a numeric badge with the same variant options", () => {
    render(
      <Badge number variant="secondary" className="custom">
        3
      </Badge>,
    );
    const badge = screen.getByText("3");
    expect(badge).toHaveAttribute("data-slot", "badge-number");
    expect(badge).toHaveAttribute("data-variant", "secondary");
    expect(badge).toHaveClass("rounded-full", "min-w-5", "custom");
  });

  it("supports asChild in numeric mode", () => {
    render(
      <Badge number asChild>
        <a href="/messages">5</a>
      </Badge>,
    );
    const link = screen.getByRole("link", { name: "5" });
    expect(link).toHaveAttribute("data-slot", "badge-number");
    expect(link).toHaveClass("rounded-full");
  });
});

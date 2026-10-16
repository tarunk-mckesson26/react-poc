import { fireEvent, render, screen } from "@testing-library/react";
import { Alert } from "./index";

describe("Alert", () => {
  it("renders the root alert by default", () => {
    render(<Alert>Notice</Alert>);

    expect(screen.getByRole("alert")).toHaveAttribute("data-slot", "alert");
    expect(screen.getByRole("alert")).toHaveAttribute(
      "data-variant",
      "default",
    );
  });

  it("only renders a dismiss button when Close is true", () => {
    const { rerender } = render(<Alert>Notice</Alert>);

    expect(screen.queryByRole("button", { name: "Close alert" })).toBeNull();

    rerender(<Alert Close>Notice</Alert>);

    expect(
      screen.getByRole("button", { name: "Close alert" }),
    ).toBeInTheDocument();
  });

  it("dismisses the alert when the close button is clicked", () => {
    render(<Alert Close>Notice</Alert>);

    fireEvent.click(screen.getByRole("button", { name: "Close alert" }));

    expect(screen.queryByRole("alert")).toBeNull();
  });

  it.each(["root", "title", "description", "action"] as const)(
    "merges custom class overrides for the %s part",
    (name) => {
      render(
        <Alert name={name} className="text-lg">
          Notice
        </Alert>,
      );

      expect(screen.getByText("Notice")).toHaveClass("text-lg");
      expect(screen.getByText("Notice")).not.toHaveClass("text-sm");
    },
  );

  it("allows the alert to grow for longer descriptions", () => {
    render(
      <Alert>
        <Alert name="title">Notice</Alert>
        <Alert name="description">
          {"This description wraps across multiple lines. ".repeat(20)}
        </Alert>
      </Alert>,
    );

    expect(screen.getByRole("alert")).toHaveClass("min-h-14.5", "max-w-158.5");
    expect(screen.getByRole("alert")).not.toHaveClass("h-14.5");
  });

  it.each([
    ["title", "alert-title"],
    ["description", "alert-description"],
    ["action", "alert-action"],
  ] as const)("renders the %s part", (name, slot) => {
    render(<Alert name={name}>Notice</Alert>);

    expect(screen.getByText("Notice")).toHaveAttribute("data-slot", slot);
  });

  it.each([
    ["info", "--error-bg", "--error-border", "--error-foreground", "--text"],
    [
      "alert",
      "--warning-bg",
      "--warning-border",
      "--warning-foreground",
      "--text",
    ],
    ["error", "--info-bg", "--info-border", "--info-foreground", "--text"],
    [
      "success",
      "--Semantic-Success50",
      "--Green-100",
      "--Semantic-Success900",
      "--Semantic-Success900",
    ],
    [
      "success-strong",
      "--base-success",
      "--base-success",
      "--base-success-foreground",
      "--base-success-foreground",
    ],
  ] as const)(
    "applies the %s palette to all alert parts",
    (variant, background, border, title, description) => {
      render(
        <Alert variant={variant}>
          <svg data-testid="alert-icon" />
          <Alert name="title">Title</Alert>
          <Alert name="description">Description</Alert>
        </Alert>,
      );

      expect(screen.getByRole("alert")).toHaveClass(
        `bg-[color:var(${background})]`,
        `border-[color:var(${border})]`,
        `text-[color:var(${title})]`,
        `[--alert-description-color:var(${description})]`,
        "*:[svg]:text-current",
      );
      expect(screen.getByRole("alert")).toHaveAttribute(
        "data-variant",
        variant,
      );
      expect(screen.getByText("Title")).toHaveClass("text-inherit");
      expect(screen.getByText("Description")).toHaveClass(
        "text-[color:var(--alert-description-color,var(--text))]",
      );
      expect(screen.getByTestId("alert-icon")).not.toHaveAttribute("style");
    },
  );
});

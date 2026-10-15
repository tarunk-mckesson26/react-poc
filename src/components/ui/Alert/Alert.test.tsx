import { render, screen } from "@testing-library/react";
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
    [
      "info",
      "--alert-alert-bgColor,--theme(--color-warning)",
      "--alert-alert-borderColor,--theme(--color-warning-border)",
      "--alert-alert-title-textColor,--theme(--color-warning-foreground)",
      "--alert-description-textColor,--theme(--color-text)",
    ],
    [
      "alert",
      "--alert-error-bgColor,--theme(--color-error)",
      "--alert-error-borderColor,--theme(--color-error-border)",
      "--alert-error-title-textColor,--theme(--color-error-foreground)",
      "--alert-description-textColor,--theme(--color-text)",
    ],
    [
      "error",
      "--alert-info-bgColor,--theme(--color-info)",
      "--alert-info-borderColor,--theme(--color-info-border)",
      "--alert-info-title-textColor,--theme(--color-info-foreground)",
      "--alert-description-textColor,--theme(--color-text)",
    ],
    [
      "success",
      "--Semantic-Success50,--theme(--color-success)",
      "--Green-100,--theme(--color-success-border)",
      "--Semantic-Success900,--theme(--color-success-foreground)",
      "--Semantic-Success900,--theme(--color-success-foreground)",
    ],
    [
      "success-strong",
      "--base-success,--theme(--color-success-strong)",
      "--base-success,--theme(--color-success-strong)",
      "--base-success-foreground,--theme(--color-success-strong-foreground)",
      "--base-success-foreground,--theme(--color-success-strong-foreground)",
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
        "text-[color:var(--alert-description-color,var(--alert-description-textColor,--theme(--color-text)))]",
      );
      expect(screen.getByTestId("alert-icon")).not.toHaveAttribute("style");
    },
  );
});

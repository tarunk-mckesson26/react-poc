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

    expect(screen.getByRole("alert")).toHaveClass("min-h-[58px]");
    expect(screen.getByRole("alert")).not.toHaveClass("h-[58px]");
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
      "--alert-alert-bgColor,#FFFBEB",
      "--alert-alert-borderColor,#FDE68A",
      "--alert-alert-title-textColor,#92400E",
      "--alert-description-textColor,#333333",
    ],
    [
      "alert",
      "--alert-error-bgColor,#FEF2F2",
      "--alert-error-borderColor,#FECACA",
      "--alert-error-title-textColor,#991B1B",
      "--alert-description-textColor,#333333",
    ],
    [
      "error",
      "--alert-info-bgColor,#E7EFF8",
      "--alert-info-borderColor,#B3CDEA",
      "--alert-info-title-textColor,#063467",
      "--alert-description-textColor,#333333",
    ],
    [
      "success",
      "--Semantic-Success50,#E6F3ED",
      "--Green-100,#B0D9C8",
      "--Semantic-Success900,#00492B",
      "--Semantic-Success900,#00492B",
    ],
    [
      "success-strong",
      "--base-success,#007948",
      "--base-success,#007948",
      "--base-success-foreground,#FFFFFF",
      "--base-success-foreground,#FFFFFF",
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
        "text-[color:var(--alert-description-color,var(--alert-description-textColor,#333333))]",
      );
      expect(screen.getByTestId("alert-icon")).not.toHaveAttribute("style");
    },
  );
});

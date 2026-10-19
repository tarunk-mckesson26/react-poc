import { fireEvent, render, screen } from "@testing-library/react";
import { Sonner } from "./index";

describe("Sonner", () => {
  it("renders a status with its text and description", () => {
    render(<Sonner text="Changes saved" description="Your workspace is up to date." />);

    expect(screen.getByRole("status")).toHaveAttribute("aria-live", "polite");
    expect(screen.getByText("Changes saved")).toBeInTheDocument();
    expect(screen.getByText("Your workspace is up to date.")).toBeInTheDocument();
  });

  it("renders a supplied icon", () => {
    render(<Sonner text="Upload complete" icon={<span data-testid="toast-icon">OK</span>} />);

    expect(screen.getByTestId("toast-icon")).toBeInTheDocument();
  });

  it("applies custom fill and text colors", () => {
    render(<Sonner text="Custom notice" fill="#123456" color="#ffffff" />);

    expect(screen.getByRole("status")).toHaveStyle({
      backgroundColor: "#123456",
      color: "#ffffff",
    });
  });

  it("calls onClose when the dismiss button is clicked", () => {
    const onClose = jest.fn();
    render(<Sonner text="Dismissible notice" isbutton onClose={onClose} />);

    const button = screen.getByRole("button", { name: "Close" });
    expect(button).toHaveAttribute("data-size", "sm");
    expect(button).toHaveAttribute("data-slot", "button");
    fireEvent.click(button);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("renders custom button text and calls onClose when clicked", () => {
    const onClose = jest.fn();
    render(<Sonner text="Changes saved" isbutton buttonText="Dismiss" onClose={onClose} />);

    fireEvent.click(screen.getByRole("button", { name: "Dismiss" }));

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("does not render a dismiss button by default", () => {
    render(<Sonner text="Persistent notice" />);

    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("does not render a dismiss button when isbutton is false", () => {
    render(<Sonner text="Persistent notice" isbutton={false} />);

    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
});
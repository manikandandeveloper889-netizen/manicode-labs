import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import App from "./App";

afterEach(() => {
  cleanup();
});

describe("ManiCodeLabsWebsite", () => {
  it("renders the premium hero messaging", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        name: "Websites, Automation & Business Systems That Grow Your Business.",
      }),
    ).toBeInTheDocument();

    expect(screen.getAllByRole("link", { name: "Book Free Consultation" }).length).toBeGreaterThan(0);
  });

  it("toggles between dark and light mode", () => {
    render(<App />);

    const modeButton = screen.getByRole("button", { name: "Switch to light mode" });
    expect(modeButton).toHaveTextContent("Light");
    expect(document.documentElement.classList.contains("dark")).toBe(true);

    fireEvent.click(modeButton);

    expect(modeButton).toHaveTextContent("Dark");
    expect(modeButton).toHaveAccessibleName("Switch to dark mode");
    expect(document.documentElement.classList.contains("dark")).toBe(false);
  });

  it("updates live project calculator output", () => {
    render(<App />);

    fireEvent.change(screen.getByRole("combobox"), { target: { value: "erp" } });

    const sliders = screen.getAllByRole("slider");
    fireEvent.change(sliders[0], { target: { value: "80" } });
    fireEvent.change(sliders[1], { target: { value: "1200" } });

    expect(screen.getByText("₹7,54,000")).toBeInTheDocument();
  });
});

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import App from "./App";

beforeEach(() => {
  window.localStorage.clear();
});

afterEach(() => {
  cleanup();
});

describe("ManiCodeLabsWebsite", () => {
  it("renders English content by default", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        name: "Build a website that makes your business look premium.",
      }),
    ).toBeInTheDocument();
    expect(document.documentElement.lang).toBe("en");
    expect(document.documentElement.dir).toBe("ltr");
  });

  it("switches the full website to Arabic and RTL mode", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: "Switch to Arabic" }));

    expect(
      screen.getByRole("heading", {
        name: "أنشئ موقعًا يجعل نشاطك التجاري يبدو احترافيًا.",
      }),
    ).toBeInTheDocument();
    expect(document.documentElement.lang).toBe("ar");
    expect(document.documentElement.dir).toBe("rtl");
    expect(screen.getByRole("button", { name: "التبديل إلى الإنجليزية" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
  });

  it("restores the saved language from localStorage", () => {
    window.localStorage.setItem("manicode-labs-language", "ar");

    render(<App />);

    expect(
      screen.getByRole("heading", {
        name: "أنشئ موقعًا يجعل نشاطك التجاري يبدو احترافيًا.",
      }),
    ).toBeInTheDocument();
    expect(document.documentElement.dir).toBe("rtl");
  });
});

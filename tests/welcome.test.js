import { describe, it, expect } from "vitest";
import { getWelcomeMessage } from "@/lib/welcome";

describe("getWelcomeMessage", () => {
  it("returns the text from WELCOME_MESSAGE", () => {
    expect(getWelcomeMessage({ WELCOME_MESSAGE: "Welcome to production" })).toBe("Welcome to production");
  });

  it("trims whitespace from the variable", () => {
    expect(getWelcomeMessage({ WELCOME_MESSAGE: "  Welcome to development \n" })).toBe("Welcome to development");
  });

  it("falls back to a default when the variable is missing", () => {
    expect(getWelcomeMessage({})).toBe("Welcome to the guestbook");
  });

  it("falls back to a default when the variable is empty", () => {
    expect(getWelcomeMessage({ WELCOME_MESSAGE: "   " })).toBe("Welcome to the guestbook");
  });
});

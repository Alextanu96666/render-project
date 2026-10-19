import { describe, it, expect } from "vitest";
import Message from "@/models/Message";

// These tests only check the schema rules - no database connection needed.
describe("Message model", () => {
  it("accepts a valid message", async () => {
    const msg = new Message({ author: "Alex", text: "Hello class!" });
    await expect(msg.validate()).resolves.toBeUndefined();
  });

  it("requires an author", async () => {
    const msg = new Message({ text: "No name" });
    await expect(msg.validate()).rejects.toThrow(/author/);
  });

  it("requires text", async () => {
    const msg = new Message({ author: "Alex" });
    await expect(msg.validate()).rejects.toThrow(/text/);
  });

  it("rejects text longer than 280 characters", async () => {
    const msg = new Message({ author: "Alex", text: "a".repeat(281) });
    await expect(msg.validate()).rejects.toThrow(/maximum allowed length/);
  });

  it("trims whitespace from the author name", () => {
    const msg = new Message({ author: "   Alex   ", text: "Hi" });
    expect(msg.author).toBe("Alex");
  });
  
});

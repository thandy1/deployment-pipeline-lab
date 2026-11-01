import { greet } from "./greeter";
import { test, expect } from "vitest";

// Purposely changed expected to be "Hello, Ben!".
test("greet with name", () => {
  expect(greet("Ada")).toBe("Hello, Ben!");
});

// Purposely changed the greet arg to be 5 for failed assertion.
test("greet with empty string", () => {
  expect(greet(5)).toBe("Hello, stranger!");
});

test("greet with null", () => {
  expect(greet(null)).toBe("Hello, stranger!");
});

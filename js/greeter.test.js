import { greet } from "./greeter";
import { test, expect } from "vitest";

test("greet with name", () => {
  expect(greet("Ada")).toBe("Hello, Ada!");
});

test("greet with empty string", () => {
  expect(greet("")).toBe("Hello, stranger!");
});

test("greet with null", () => {
  expect(greet(null)).toBe("Hello, stranger!");
});


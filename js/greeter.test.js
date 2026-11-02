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
// Temporary runtime compatibility test, Node 24 recognizes RegExp.escape() and should pass, Node 22 doesn't recognize it and show fail with TypeError.
test("escapes special characters in regular expressions", () => {
  const escaped = RegExp.escape("a.b");
  expect(new RegExp(escaped).test("a.b")).toBe(true);
  expect(new RegExp(escaped).test("axb")).toBe(false);
});

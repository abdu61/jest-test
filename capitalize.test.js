import capitalize from "./capitalize.js";

test("capitalizes the first character", () => {
  expect(capitalize("hello")).toBe("Hello");
});

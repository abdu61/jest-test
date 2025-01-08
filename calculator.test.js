import calculator from "./calculator.js";

test("adds numbers", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("subtracts numbers", () => {
  expect(calculator.subtract(5, 3)).toBe(2);
});

test("multiplies numbers", () => {
  expect(calculator.multiply(3, 2)).toBe(6);
});

test("divides numbers", () => {
  expect(calculator.divide(6, 2)).toBe(3);
});

const { multiply } = require("../calculator");

test("multiply 2 numbers", () => {
  expect(multiply(2, 2)).toBe(4);
});

test("multiply by 0", () => {
  expect(multiply(2, 0)).toBe(0);
});

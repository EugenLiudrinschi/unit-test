const { multiply } = require("../calculator");

test("multiply 2 numbers", () => {
  expect(multiply(2, 2)).toBe(4);
});

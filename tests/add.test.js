const { add } = require("../calculator");

test("Add numbers with the add function", () => {
  expect(add(10, 3)).toBe(13);
});

test("Add two zeros", () => {
  expect(add(0, 0)).toBe(0);
});

test("Adding negative numbers", () => {
  expect(add(-1, -3)).toBe(-4);
});

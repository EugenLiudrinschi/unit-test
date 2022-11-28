const { substract } = require("../calculator");

test("should be a function", function () {
  expect(typeof substract).toStrictEqual("function");
});

test("substracting 2 numbers", () => {
  expect(substract(5, 3)).toBe(2);
});

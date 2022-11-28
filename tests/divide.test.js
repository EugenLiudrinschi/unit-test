const { divide } = require("../calculator");

test("should be a function", function () {
  expect(typeof divide).toStrictEqual("function");
});

test("substracting 2 numbers", () => {
  expect(divide(10, 2)).toBe(5);
});

test("check dividing by 0", () => {
  expect(divide(10, 0)).toBe("error");
});

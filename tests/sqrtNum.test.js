const { sqrtNum } = require("../calculator");

test("should be a function", function () {
  expect(typeof sqrtNum).toStrictEqual("function");
});

test("getting square", () => {
  expect(sqrtNum(16)).toBe(4);
});

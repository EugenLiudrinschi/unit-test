const { powerNum } = require("../calculator");

test("should be a function", function () {
  expect(typeof powerNum).toStrictEqual("function");
});

test("x in power of y", () => {
  expect(powerNum(2, 3)).toStrictEqual(8);
});

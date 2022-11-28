let numInput1 = document.querySelector(".input1");
let numInput2 = document.querySelector(".input2");
let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let multiplication = document.querySelector(".multiplication");
let division = document.querySelector(".division");
let power = document.querySelector(".power");
let square = document.querySelector(".square");
let result = document.querySelector(".result");
let clear = document.querySelector(".clear");

const add = (x, y) => x + y;

const substract = (x, y) => x - y;

const multiply = (x, y) => x * y;

const divide = (x, y) => {
  if (y === 0) {
    return "error";
  }
  return x / y;
};

const powerNum = (x, y) => Math.pow(x, y);

const sqrtNum = (x) => Math.sqrt(x);
plus?.addEventListener("click", () => {
  let res = add(+numInput1.value, +numInput2.value);
  result.textContent = res;
});

minus?.addEventListener("click", () => {
  let res = substract(+numInput1.value, +numInput2.value);
  result.textContent = res;
});

multiplication?.addEventListener("click", () => {
  let res = multiply(+numInput1.value, +numInput2.value);
  result.textContent = res;
});

division?.addEventListener("click", () => {
  let res = divide(+numInput1.value, +numInput2.value);
  result.textContent = res;
});

power?.addEventListener("click", () => {
  let res = powerNum(+numInput1.value, +numInput2.value);
  result.textContent = res;
});

square?.addEventListener("click", () => {
  let res = sqrtNum(+numInput1.value);
  result.textContent = res;
});

clear?.addEventListener("click", () => {
  numInput1.value = "";
  numInput2.value = "";
  result.textContent = "";
});

module.exports = { add, substract, multiply, divide, powerNum, sqrtNum };

let numInput1 = document.querySelector(".input1");
let numInput2 = document.querySelector(".input2");
let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let multiplication = document.querySelector(".multiplication");
let division = document.querySelector(".division");
let power = document.querySelector(".power");
let square = document.querySelector(".square");
let reult = document.querySelector(".result");
let clear = document.querySelector(".clear");

// plus.addEventListener("click", () => {});

// minus.addEventListener("click", () => {});

// multiplication.addEventListener("click", () => {});

// division.addEventListener("click", () => {});

// power.addEventListener("click", () => {});

// square.addEventListener("click", () => {});

clear?.addEventListener("click", () => {
  numInput1.value = "";
  numInput2.value = "";
  res.textContent = "";
});

module.exports = { add };

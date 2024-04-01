let screen = document.querySelector("#inputScreen");
let num = document.querySelectorAll(".num");
let operation = document.querySelectorAll(".op-btn");
let equalBtn = document.querySelector(".equal");
let reset = document.querySelector(".reset");

num.forEach((btn) => {
  btn.addEventListener("click", function () {
    console.log(btn.value);
    screen.value += btn.value;
  });
});
equalBtn.addEventListener("click", function () {
  console.log(eval(screen.value));
  screen.value = eval(screen.value);
});
reset.addEventListener("click", function () {
  screen.value = "";
});

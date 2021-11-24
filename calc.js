let a = document.querySelector("#a");
let b = document.querySelector("#b");
let get = document.querySelector("#get");
let result = document.querySelector("#result");
let reset = document.querySelector("#reset");
let peremen = "go";
let mathematicalOperator = document.querySelector("#mathematicalOperator");

reset.addEventListener("click", resetNum);

let numberCalc = {
  one: 1,
  two: 2,
  free: 3,
  for: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  zero: 0,
  symb: ".",
 };

let enterNum = function func() {
  if(peremen == "go") {
  a.value += this.innerHTML;
  } else {
  b.value += this.innerHTML;
  }
 };

let form2 = document.querySelector(".form2");
for(key in numberCalc) {
  buttonNum = document.createElement("button");
  buttonNum.innerHTML = numberCalc[key];
  buttonNum.style.width = 66 + "px";
  buttonNum.style.height = 58 + "px";
  buttonNum.style.display = "flex";
  buttonNum.style.flexDirection = "column";
  buttonNum.style.justifyContent = "space-around";
  buttonNum.style.alignItems = "center";
  form2.appendChild(buttonNum).addEventListener("click", enterNum);
 };

function operand(elem){
  peremen = undefined;
  res = elem.innerHTML;
  get.addEventListener("click", resultNum);
  mathematicalOperator.value = res; 
 };

function resetNum() {
a.value = "";
b.value = "";
result.value = "";
peremen = "go";
};

function resultNum() {
  (res == "+") ? (result.value = +a.value + +b.value) : 
  (res == "-") ? (result.value = a.value - b.value) : 
  (res == "*") ? (result.value = a.value * b.value) : 
  (res == "/") ? (result.value = a.value / b.value) : 
  result.value = "false";
 };

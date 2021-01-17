console.clear();

console.log("Hola !!!!");
// this is a comment
let x = 0;

if (x > 2) {
  console.log("it was greater!");
} else {
  console.log("it was not greater!");
}

function sum(x, y) {
  let answer = x + y;
  return answer;
}

let result = sum(3, 33);
console.log(result);

let mybutton = document.getElementById("pressmebutton");
mybutton.addEventListener("click", sayhi);

function sayhi() {
  let greeter = document.getElementById("greeting");
  greeter.innerText = "hello!!";
}

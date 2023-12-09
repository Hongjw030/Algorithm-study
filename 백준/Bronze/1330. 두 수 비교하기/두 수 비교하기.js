// fs로 입력받는 경우

const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

let num1 = Number(input[0]);
let num2 = Number(input[1]);

console.log(num1 > num2 ? ">" : num1 == num2 ? "==" : "<");

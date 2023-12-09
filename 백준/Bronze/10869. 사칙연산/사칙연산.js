function solution(num1, num2) {
  console.log(num1 + num2);
  console.log(num1 - num2);
  console.log(num1 * num2);
  console.log(Math.floor(num1 / num2));
  console.log(num1 % num2);
}

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
readline
  .on("line", function (line) {
    input.push(line.split(" "));
  })
  .on("close", function () {
    solution(Number(input[0][0]), Number(input[0][1]));
    process.exit();
  });

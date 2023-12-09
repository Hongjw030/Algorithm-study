// fs로 입력받는 경우

function solution(num, input) {
  let yCharge = 0;
  let mCharge = 0;

  input.forEach((el) => {
    yCharge += (Math.floor(el / 30) + 1) * 10;
    mCharge += (Math.floor(el / 60) + 1) * 15;
  });

  if (yCharge === mCharge) return `Y M ${yCharge}`;
  else if (yCharge < mCharge) return `Y ${yCharge}`;
  else return `M ${mCharge}`;
}

const fs = require("fs");
const [num, inputStr] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const input = inputStr.split(" ").map(Number);
console.log(solution(num, input));

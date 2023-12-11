// fs로 입력받는 경우

function solution(arr) {
  //472 x 5
  const third = Number(arr[0]) * Number(arr[1][2]);
  // 472 x 8
  const fourth = Number(arr[0]) * Number(arr[1][1]);
  // 472 x 3
  const fivth = Number(arr[0]) * Number(arr[1][0]);
  // total
  const total = third + fourth * 10 + fivth * 100;

  console.log(third);
  console.log(fourth);
  console.log(fivth);
  console.log(total);
}

const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

solution(input);


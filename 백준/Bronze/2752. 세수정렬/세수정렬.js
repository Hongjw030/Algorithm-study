// fs로 입력받는 경우

function solution(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  console.log(`${sortedArr[0]} ${sortedArr[1]} ${sortedArr[2]}`);
}

const fs = require("fs");
const input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

solution(input);

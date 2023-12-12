// fs로 입력받는 경우

function solution(start, end) {
  const arr = [0];
  let count = 0;
  let num = 1;
  for (let i = 1; i <= end; i++) {
    arr.push(arr[i - 1] + num);
    count++;
    if (count >= num) {
      num++;
      count = 0;
    }
  }
  return arr[end] - arr[start - 1];
}

const fs = require("fs");
const [start, end] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(solution(start, end));

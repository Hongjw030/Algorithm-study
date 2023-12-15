// fs로 입력받는 경우

function solution(numArr, N, K) {
  if (K === 0) {
    return numArr.join(",");
  }
  for (let i = 0; i < K; i++) {
    let answer = [];
    if (numArr.length <= 1) break;
    for (let i = 0; i < numArr.length - 1; i++) {
      answer.push(numArr[i + 1] - numArr[i]);
    }
    numArr = [...answer];
  }
  return numArr.join(",");
}

const fs = require("fs");
const [nArr, sArr] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, K] = nArr.split(" ").map(Number);
const arr = sArr.split(",").map(Number);

console.log(solution(arr, N, K));

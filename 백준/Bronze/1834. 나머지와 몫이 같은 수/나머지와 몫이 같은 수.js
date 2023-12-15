// fs로 입력받는 경우

function solution(num) {
  let answer = BigInt(0);
  for (let i = 1; i < num; i++) {
    answer += (BigInt(num) + BigInt(1)) * BigInt(i);
  }
  return answer.toString();
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

console.log(solution(Number(input)));

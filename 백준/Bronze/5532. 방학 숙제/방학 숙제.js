// fs로 입력받는 경우

function solution(arr) {
  let L = arr[0]; // 총 방학 일수
  let A = arr[1]; // 국어 페이지 수
  let B = arr[2]; // 수학 페이지 수
  let C = arr[3]; // 하루에 푸는 최대 국어 수
  let D = arr[4]; // 하루에 푸는 최대 수학 수

  // 공부해야 하는 날짜 수
  let study =
    Math.ceil(A / C) > Math.ceil(B / D) ? Math.ceil(A / C) : Math.ceil(B / D);

  // 놀 수 있는 날짜 수
  console.log(L - study);
}

const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

solution(input);

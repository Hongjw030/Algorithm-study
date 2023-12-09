// fs로 입력받는 경우

function solution(arr) {
  let x = arr[0];
  let y = arr[1]; // 한수는 (x, y) 좌표에 위치.
  let w = arr[2]; // 직사각형 가로 길이
  let h = arr[3]; // 직사각형 세로 길이

  // y와 h-y와 x와 w-x 중 가장 작은 것을 구하라.
  let answer = Math.min(x, y, h - y, w - x);
  console.log(answer);
}

const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

solution(input);

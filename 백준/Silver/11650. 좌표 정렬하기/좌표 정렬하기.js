// 백준 11650번
// fs로 입력받는 경우

const fs = require("fs");
const [N_TXT, ...XY_TXT] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 점의 개수
const N = Number(N_TXT);
// xy 좌표
const xyArr = XY_TXT.map((line) => {
  return line.split(" ").map(Number);
});

// xyArr 배열을 sort 하는 코드
xyArr.sort((a, b) => {
  if (a[0] < b[0]) return -1;
  else if (a[0] === b[0]) {
    if (a[1] < b[1]) return -1;
  } else {
    return 1;
  }
});

const answer = xyArr.map((arr) => {
  return arr.join(" ");
});

console.log(answer.join("\n"));

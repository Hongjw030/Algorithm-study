// fs로 입력받는 경우

function solution(N, M, location) {
  const ARR = [];
  let answer = 0;
  for (let i = 0; i < 100; i++) {
    const line = [];
    for (let j = 0; j < 100; j++) {
      line.push(0);
    }
    ARR.push(line);
  }

  for (let i = 0; i < N; i++) {
    for (let x = location[i][0]; x <= location[i][2]; x++) {
      for (let y = location[i][1]; y <= location[i][3]; y++) {
        ARR[x - 1][y - 1]++;
      }
    }
  }

  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      if (ARR[i][j] > M) {
        answer++;
      }
    }
  }
  return answer;
}

const fs = require("fs");
const [NM, ...XY] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = NM.split(" ").map(Number);
const location = XY.map((el) => {
  return el.split(" ").map(Number);
});

console.log(solution(N, M, location));

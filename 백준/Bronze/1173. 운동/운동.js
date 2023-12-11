// fs로 입력받는 경우

function solution(N, m, M, T, R) {
  // 운동을 못 할 경우.
  if (m + T > M) return -1;

  let answer = 0;
  let i = 0;
  let myHeart = m;
  while (i < N) {
    if (myHeart + T <= M) {
      // 운동을 한다.
      myHeart += T;
      i++;
      answer++;
    } else {
      // 쉰다.
      myHeart = myHeart - R < m ? m : myHeart - R;
      answer++;
    }
  }
  return answer;
}

const fs = require("fs");
const [N, m, M, T, R] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(solution(N, m, M, T, R));

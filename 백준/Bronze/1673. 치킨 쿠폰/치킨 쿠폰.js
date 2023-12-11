// fs로 입력받는 경우

function solution(n, k) {
  // 먹은 치킨 수
  let answer = n;
  // 현재 남은 도장 개수. 도장 k개는 1개의 쿠폰이 된다.
  let dojang = n;
  while (dojang >= k) {
    // 1. 도장을 쿠폰으로 바꾼다.
    let coupon = Math.floor(dojang / k);
    // 2. 쿠폰으로 바꾸지 못하고 남은 도장 수
    dojang = dojang % k;
    // 3. 가진 쿠폰 수만큼 치킨을 먹음.
    answer += coupon;
    // 4. 쿠폰 쓴 만큼 도장을 또 찍음.
    dojang += coupon;
  }
  return answer;
}

const fs = require("fs");
const inputs = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let line of inputs) {
  const [n, k] = line.split(" ").map(Number);
  console.log(solution(n, k));
}

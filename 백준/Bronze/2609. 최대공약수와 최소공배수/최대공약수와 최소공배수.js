// fs로 입력받는 경우

function solution(num1, num2) {
  // num1, num2의 최대공약수와 최소공배수를 출력하는 코드
  // 최소공배수는 num1 * num2 / 최대공약수 이다.
  // 최대 공약수는 num1 num2 중 작은 수의 1/2보다 작거나 같다.
  let gcd = 0;
  let small = num1 > num2 ? num2 : num1;
  for (let i = small; i >= 1; i--) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
      break;
    }
  }
  console.log(gcd);
  console.log(Math.floor(num1 / gcd) * num2);
}

const fs = require("fs");
const [num1, num2] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

solution(Number(num1), Number(num2));

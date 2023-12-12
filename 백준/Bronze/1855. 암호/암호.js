// fs로 입력받는 경우

function solution(col, encodedStr) {
  let len = encodedStr.length;
  let row = Math.floor(len / col);
  const arr = [];
  for (let i = 0; i < row; i++) {
    const line = [];
    // 짝수번째 행에서는 왼 > 오 방향으로 글자를 채움
    if (i % 2 === 0) {
      for (let j = i * col; j < col * (i + 1); j++) {
        line.push(encodedStr[j]);
      }
    }
    // 홀수번째 행에서는 오 > 왼 방향으로 글자를 채움
    else {
      for (let j = col * (i + 1) - 1; j >= col * i; j--) {
        line.push(encodedStr[j]);
      }
    }
    arr.push(line);
  }
  let answer = "";
  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      answer += arr[j][i];
    }
  }
  return answer;
}

const fs = require("fs");
// n: 몇 개의 열로 암호화하였는지.
// encodedStr: 암호화된 상태의 문자열.
const [col, encodedStr] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 즉, n개 열의 배열에 encodedStr 문자열을 왼 > 오 > 왼 > 오 ... 방향으로 한칸씩 채워넣은 다음,
// 해당 열을 위 > 아래  위 > 아래 로 읽으면 decode 된다.

console.log(solution(col, encodedStr));

// fs로 입력받는 경우

function solution(num) {
  if (num === 1) {
    console.log("*");
    return;
  }
  for (let line = 1; line <= num; line++) {
    let str = "";
    for (let space = num - line; space > 0; space--) {
      str += " ";
    }
    for (let star = 1; star <= line * 2 - 1; star++) {
      str += "*";
    }
    console.log(str);
  }
}

const fs = require("fs");
const num = fs.readFileSync("/dev/stdin").toString().trim();

solution(Number(num));

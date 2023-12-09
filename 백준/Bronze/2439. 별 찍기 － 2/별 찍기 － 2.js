// fs로 입력받는 경우

function solution(num) {
  if (num === 1) {
    console.log("*");
    return;
  }
  for (let i = 1; i <= num; i++) {
    let str = "";
    for (let j = num - i; j > 0; j--) {
      str += " ";
    }
    for (let k = 1; k <= i; k++) {
      str += "*";
    }
    console.log(str);
  }
}

const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim();

let num = Number(input);

solution(num);

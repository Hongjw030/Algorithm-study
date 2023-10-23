const enToNum = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

function solution(s) {
  while (isNaN(s)) {
    s = s.replace(enToNum[0], String(0));
    s = s.replace(enToNum[1], String(1));
    s = s.replace(enToNum[2], String(2));
    s = s.replace(enToNum[3], String(3));
    s = s.replace(enToNum[4], String(4));
    s = s.replace(enToNum[5], String(5));
    s = s.replace(enToNum[6], String(6));
    s = s.replace(enToNum[7], String(7));
    s = s.replace(enToNum[8], String(8));
    s = s.replace(enToNum[9], String(9));
  }
  return Number(s);
}

console.log(solution("one4seveneight"));

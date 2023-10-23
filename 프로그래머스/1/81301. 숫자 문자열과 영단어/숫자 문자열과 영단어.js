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
  for (let i = 0; i < 10; i++) {
    s = s.replaceAll(enToNum[i], String(i));
  }
  return Number(s);
}


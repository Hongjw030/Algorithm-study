function solution(s) {
  const answer = [];
  let count = 0;
  let zeroCount = 0;

  while (true) {
    if (s.includes("0") || s.length > 1) {
      // s에 0이 들어있으니 count +
      count += 1;
      // s에 0이 들어있는 만큼 zeroCount +
      let temp = s.split("").filter((el) => el === "0");
      zeroCount += temp.length;
      temp = s.split("").filter((el) => el === "1");
      let tempS = temp.length;
      s = tempS.toString(2);
    } else {
      break;
    }
  }

  answer.push(count);
  answer.push(zeroCount);
  return answer;
}

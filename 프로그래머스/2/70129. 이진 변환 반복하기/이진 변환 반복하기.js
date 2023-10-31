function solution(s) {
  const answer = [];
  let count = 0;
  let zeroCount = 0;

  while (true) {
    if (s.includes("0") || s.length > 1) {
      // s에 0이 들어있으니 count +
      count += 1;
      // s에 1이 들어있는 만큼의 길이를 구하기
      let temp = s.split("").filter((el) => el === "1");
      zeroCount += s.length - temp.length;
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


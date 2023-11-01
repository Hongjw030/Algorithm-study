function solution(s) {
  const sArr = s.split("");
  const stack = [];
  for (let i = 0; i < sArr.length; i++) {
    if (!stack) {
      stack.push(sArr[i]);
    } else {
      if (stack[stack.length - 1] === sArr[i]) {
        stack.pop();
        continue;
      } else {
        stack.push(sArr[i]);
      }
    }
  }

  if (stack.length !== 0) return 0;
  else return 1;
}

function solution(s) {
  const arr = s.split(" ");
  let minInd = 0;
  let maxInd = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Number(arr[minInd]) > Number(arr[i])) {
      minInd = i;
    }
    if (Number(arr[maxInd]) < Number(arr[i])) {
      maxInd = i;
    }
  }
  let answer = `${arr[minInd]} ${arr[maxInd]}`;
  return answer;
}
function solution(s) {
  var answer = "";
  const nums = s.split(" ");
  let minInd = 0;
  let maxInd = 0;
  for (let i = 0; i < nums.length; i++) {
    if (Number(nums[i]) >= Number(nums[maxInd])) {
      maxInd = i;
    }
    if (Number(nums[i]) <= Number(nums[minInd])) {
      minInd = i;
    }
  }

  answer += nums[minInd] + " " + nums[maxInd];
  return answer;
}

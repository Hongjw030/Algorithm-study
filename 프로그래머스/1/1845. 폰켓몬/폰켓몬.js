function solution(nums) {
  // 포켓몬들.
  const obj = {};
  nums.forEach((el) => {
    if (el in obj) {
      obj[el]++;
    } else {
      obj[el] = 1;
    }
  });

  const total = Math.floor(nums.length / 2);
  // console.log(Object.keys(obj).length);
  // console.log(obj);
  if (total < Object.keys(obj).length) {
    return total;
  } else {
    return Object.keys(obj).length;
  }
}
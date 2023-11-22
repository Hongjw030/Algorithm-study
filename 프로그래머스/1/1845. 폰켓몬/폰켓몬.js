function solution(nums) {
  const pokes = new Set(nums);
  const total = Math.floor(nums.length / 2);
  return pokes.size > total ? total : pokes.size;
}
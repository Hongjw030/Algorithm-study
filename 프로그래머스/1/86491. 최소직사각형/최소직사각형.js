function solution(sizes) {
  let maxW = 0;
  let maxH = 0;
  for (let i of sizes) {
    let width = Math.max(i[0], i[1]);
    let height = Math.min(i[0], i[1]);
    if (maxW < width) {
      maxW = width;
    }
    if (maxH < height) {
      maxH = height;
    }
  }
  return maxH * maxW;
}

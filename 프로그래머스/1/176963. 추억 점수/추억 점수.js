function solution(name, yearning, photo) {
  const score = {};
  name.forEach((el, i) => {
    score[el] = yearning[i];
  });

  const answer = photo.map((els) => {
    let sum = 0;
    for (let el of els) {
      sum += score[el] ?? 0;
    }
    return sum;
  });
  return answer;
}

function solution(name, yearning, photo) {
  const score = {};
  name.forEach((el, i) => {
    score[el] = yearning[i];
  });

  return photo.map((els) => els.reduce((acc, el)=> (acc + (score[el] ?? 0)), 0));
}
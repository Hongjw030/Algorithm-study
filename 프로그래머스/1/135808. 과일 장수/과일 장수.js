function solution(k, m, score) {
  const APPLE = score.length;
  // 사과 개수가 m보다 작으면 수익은 없다.
  if (APPLE < m) return 0;

  // 최대 팔 수 있는 상자 수
  let totalBox = Math.floor(APPLE / m);

  // 팔 수 있는 사과의 수
  let totalApple = m * totalBox;

  // 최대의 이익을 남기려면 박스안에 들어가지 않을 최하품의 사과는 버려야 한다.
  score = score.sort().slice(APPLE - totalApple);

  // 최대 이익을 남기려면 낮은 점수의 사과는 한 박스로 몰아주어야 함.
  let totalScore = 0;
  for (let i = 0; i < score.length; i += m) {
    totalScore += score[i] * m;
  }

  return totalScore;
}

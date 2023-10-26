function solution(a, b) {
  let totalDays = 0;
  const DAY = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  const MONTH = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  for (let i = 0; i < a; i++) {
    totalDays += MONTH[i];
  }
  totalDays += b - 1;

  totalDays %= 7;

  //totalDays가 1이라면 SAT 가리킴...
  return DAY[totalDays];
}

console.log(solution(9, 1));

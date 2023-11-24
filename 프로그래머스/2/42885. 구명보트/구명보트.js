function solution(people, limit) {
  var answer = 0;
  people.sort((a, b) => a - b);
  let start = 0;
  let end = people.length - 1;

  while (true) {
    if (people[start] + people[end] <= limit) {
      start++;
    }
    end--;
    answer += 1;

    if (start === end) {
      answer++;
      break;
    } else if (start > end) {
      break;
    }
  }
  return answer;
}

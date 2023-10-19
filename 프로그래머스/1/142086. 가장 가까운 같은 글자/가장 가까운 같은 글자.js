
function solution(s) {
  const my_str = [...s];
  const answer = [];

  for (let i = 0; i < my_str.length; i++) {
    if (my_str.slice(0, i).lastIndexOf(my_str[i]) !== -1) {
      answer.push(i - my_str.slice(0, i).lastIndexOf(my_str[i]));
    } else {
      answer.push(-1);
    }
  }

  return answer;
}

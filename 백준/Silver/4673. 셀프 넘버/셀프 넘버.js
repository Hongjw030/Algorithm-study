// 백준 4673번
// fs로 입력받는 경우

// 숫자를 받으면 숫자와 각 자릿수의 합을 리턴하는 함수.
function calcD(str) {
  let answer = Number(str);
  let loc = str.length;
  for (let i = 0; i < loc; i++) {
    answer += Number(str[i]);
  }
  return answer;
}

// 1~10000 숫자가 들어있는 배열을 생성.
const arr = [];
for (let i = 0; i <= 10000; i++) {
  arr.push(i);
}

// 생성자 있는 숫자들은 0으로 체크
for (let i = 1; i <= 10000; i++) {
  let ind = calcD(String(i));
  if (ind > 10000) continue;
  arr[ind] = 0;
}

// 생성자 없는 고유 숫자만 출력.
for (let i = 1; i <= 10000; i++) {
  if (arr[i] !== 0) console.log(i);
}

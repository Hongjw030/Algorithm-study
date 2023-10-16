function solution(str1, str2) {
  let len1 = str1.length;
  let len2 = str2.length;
  for (let i = 0; i < len1 - len2 + 1; i++) {
    console.log(str1.slice(i, i + len2));
    if (str1.slice(i, i + len2) === str2) {
      return 1;
    }
  }
  return 2;
}

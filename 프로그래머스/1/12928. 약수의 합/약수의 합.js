function solution(n) {
    if (n=== 0) return n;
    if (n=== 1) return n;
    var answer = n + 1;
    let maxI = Math.floor(n/2);
    for(let i=2;i<=Math.floor(n/2);i++){
        if(n%i === 0) answer += i;
    }
    return answer;
}
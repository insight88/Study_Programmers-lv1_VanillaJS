function solution(s) {
    const x = Math.ceil(s.length / 2) - 1
    // s.length의 가운데(혹은 그 전) 인덱스 구하기
    const n = s.length % 2 === 0 ? 2 : 1
    // s.length가 짝수면 2개의 글자, 홀수면 1개의 글자를 가져온다

    return s.substr(x,n);
}

console.log(solution("abcde"))
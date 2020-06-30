function solution(s) {
    const answer = s.split('').sort((prev, cur) => cur.charCodeAt() - prev.charCodeAt()).join('');
    // charCodeAt : 숫자, 문자의 UTF-16 코드를 나타내는 정수로 표현
    return answer
}
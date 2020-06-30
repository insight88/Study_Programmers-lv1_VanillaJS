function solution(s) {
    var answer = '';
    return s.split('').sort().reverse().join('');
    return answer;
}

const s = "Zbcdefg"
console.log(solution(s))
function solution(s) {
    return s.split(' ').map(w => (
        w.split('').map((v, i) => (i % 2 ? v.toLowerCase() : v.toUpperCase())).join('')
    )).join(' ');
}

const s = "try hello world"
console.log(solution(s))
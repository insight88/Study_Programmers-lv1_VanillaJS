function solution(strings, n) {
    return strings.sort((p, c) => p[n] === c[n] ? p.localeCompare(c) : p[n].localeCompare(c[n]))
}

const strings = ["abce", "abcd", "cdx"]
console.log(solution(strings, 2))
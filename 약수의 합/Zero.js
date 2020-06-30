function solution(n) {
    const arr = Array(n).fill().map((v, i) => i + 1)
    // [1,2,3 ... n]을 생성
    return arr.reduce((a, c) => n % c ? a : a + c, 0)
    // n%c === 0(false)이면 a=a+c(currentValue)를 return, n%c !== 0 (true)이면 a=a를 return
}

const n = 12
console.log(solution(n))
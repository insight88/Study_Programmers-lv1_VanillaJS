function solution(s) {
    let answer = true
    if ((s.length === 4 || s.length === 6) && isNaN(s) === false) {
    // s의 길이가 4 or 6이거나, Number(s)가 NaN이 아닐 경우(s가 숫자일 경우)
        answer = true
    } else {
        answer = false
    }
    return answer
}

const s = "a234"
console.log(solution(s))
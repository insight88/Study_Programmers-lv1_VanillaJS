function solution(a, b) {
    var answer = 0;
    var c = Math.abs(a-b)
    var d = 0

    if (a < b){
        d = a
    } else if (b <= a) {
        d = b
    }
    for (var i = 0; i <= c; i++){
        answer = answer + d
        d++
    }
    
    return answer;
}

console.log(solution(5,3))
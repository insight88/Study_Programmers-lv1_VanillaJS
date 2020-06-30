function solution(s) {
    var answer = '';
    const length = s.length
    const half = Math.floor(length/2)
    
    if (length % 2 === 0){
        answer = s.charAt(half-1) + s.charAt(half)
    } else {
        answer = s.charAt(half)
    }    
    return answer;
}
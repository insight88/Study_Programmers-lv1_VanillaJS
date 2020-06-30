function solution(s){
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}

const s = "pPoooYy"
console.log(s.toUpperCase().split("P"))
console.log(s.toUpperCase().split("Y"))
console.log(solution(s))
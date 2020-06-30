function solution(s){
    var answer = true;
    const ss = s.toLowerCase()
    var pNumber = 0
    var yNumber = 0
    
    for(var i=0; i<s.length; i++){
        if (ss.charAt(i) === "p"){
            pNumber++
        }
    }
    for(var i=0; i<s.length; i++){
        if (ss.charAt(i) === "y"){
            yNumber++
        }
    }
    // i번째 문자에 p,y가 있는지 확인하고, pNumber와 yNumber를 ++
    
    if (pNumber === yNumber){
        answer = true
    } else {
        answer = false
    }

    return answer;
}

const s = "pPoooYy"
console.log(solution(s))
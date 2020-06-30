function solution(strings, n) {
    strings.sort(function(a,b) {
        var first = a[n];
        var second = b[n];
        if (first === second) {
            return (a > b) - (a < b);
        } else {
            return (first > second) - (first < second); 
        }
    })
    return strings;
}

const strings = ["abce", "abcd", "cdx"]
console.log(solution(strings, 2))
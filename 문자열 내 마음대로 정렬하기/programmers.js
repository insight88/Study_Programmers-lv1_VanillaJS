function solution(arr, n) {
    return arr.sort((a, b) => {
        var an = a.substring(n,n+1), bn = b.substring(n,n+1);
        if (an == bn) return a < b ? -1:1;
        else return an < bn ? -1:1
    });
}
function solution(arr) {
    return arr.filter((value, index) => value !== arr[index + 1]);
}

const arr = [1,1,3,3,0,1,1]
console.log(solution(arr))
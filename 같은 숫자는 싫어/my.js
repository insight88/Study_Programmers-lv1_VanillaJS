function solution(arr)
{
    var answer = [];

    for (var i=0; i < arr.length - 1; i++) {
        if (arr[i] !== arr[i+1]) {
            answer.push(arr[i])
        }
    }
    answer.push(arr[arr.length-1])
    //arr의 마지막 인자를 answer에 push
    return answer;
}

const arr = [1,1,3,3,0,1,1]
console.log(solution(arr))
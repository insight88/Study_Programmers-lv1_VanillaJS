function solution(arr, divisor) {
    const answer = arr.filter(element => element % divisor === 0);
    // arr 각 element 중 divisor로 나누어지는 것만 answer array로 저장
    return answer.length ? answer.sort((p, c) => p - c) : [-1];
    // answer.length가 true이면 sort하여 리턴, false이면 -1을 리턴
}
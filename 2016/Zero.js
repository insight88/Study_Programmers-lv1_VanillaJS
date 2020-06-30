function solution(a, b) {
    const arr = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    const dayNumber = new Date(2016, a - 1, b).getDay()
    // month는 1월이 0, 12월이 11
    return arr[dayNumber];
}

console.log(solution(5,24))
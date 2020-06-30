function solution(a, b) {
    var answer = '';

    const dayName = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
    var c = 0
    // 날짜 계산 시 추가되는 날 수
    var d = 0

    if (a == 1){
        c = 0
    } else if (a == 2){
        c = 1
    } else if (a >= 3 && a <= 7){
        c = Math.floor((a - 2)/2)
    } else if (a > 7 && a <= 12){
        c = Math.floor((a - 1)/2)
    }

    d = (a - 1) * 30 + b + c
    // 1월 1일부터 세어지는 날짜의 총 수
    answer = dayName[(d + 4) % 7]
    // 1월 1일이 수요일이므로 d+4를 7로 나눈 나머지값을 계산

    return answer;
}
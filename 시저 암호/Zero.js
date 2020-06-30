function solution(s, n) {
    return s.split('').map((l) => {
        return l === ' '
        ? l
        : l.charCodeAt() + n > 122 || (l.charCodeAt() <= 90 && l.charCodeAt() + n > 90)
            ? String.fromCharCode((l.charCodeAt() + n) - 26)
            : String.fromCharCode(l.charCodeAt() + n);
    }).join('');
}
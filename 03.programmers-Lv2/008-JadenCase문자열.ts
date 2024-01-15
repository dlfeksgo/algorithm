//https://school.programmers.co.kr/learn/courses/30/lessons/12951

export function solution(s: string) {
    return s
        .split(' ')
        .map((v) => v.charAt(0).toUpperCase() + v.slice(1).toLowerCase())
        .join(' ');
}

console.log(solution('3people unFollowed me'));

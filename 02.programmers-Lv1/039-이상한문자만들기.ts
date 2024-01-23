//https://school.programmers.co.kr/learn/courses/30/lessons/12930

export function solution(s: string) {
    return s
        .split(' ')
        .map((v) =>
            v
                .split('')
                .map((char, i) => {
                    if (i % 2 === 0) return char.toUpperCase();
                    return char.toLowerCase();
                })
                .join(''),
        )
        .join(' ');
}

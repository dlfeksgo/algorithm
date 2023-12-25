//https://school.programmers.co.kr/learn/courses/30/lessons/181903

export function solution(q: number, r: number, code: string) {
    return Array.from(code)
        .map((v, i) => {
            if (i % q === r) return v;
        })
        .join('');
}

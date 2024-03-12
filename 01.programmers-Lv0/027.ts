//https://school.programmers.co.kr/learn/courses/30/lessons/181926

const cases: Record<string, number> = {
    w: 1,
    s: -1,
    d: 10,
    a: -10,
};

export function solution(n: number, control: string) {
    for (const str of control) {
        const num = Number(cases[str]);
        n += num;
    }
    return n;
}

console.log(solution(0, 'wsdawsdassw'));

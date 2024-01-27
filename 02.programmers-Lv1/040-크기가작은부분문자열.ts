//https://school.programmers.co.kr/learn/courses/30/lessons/147355

export function solution(t: string, p: string) {
    let count = 0;
    const circuitCnt = t.length - p.length + 1;
    for (let i = 0; i < circuitCnt; i++) {
        const x = Number(t.slice(i, p.length + i));
        if (x <= Number(p)) count++;
    }
    return count;
}

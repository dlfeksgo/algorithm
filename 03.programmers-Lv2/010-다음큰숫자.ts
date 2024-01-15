//https://school.programmers.co.kr/learn/courses/30/lessons/12911

export function solution(n: number) {
    const n_leng = Array.from(n.toString(2)).filter((v) => v === '1').length;
    let x = n + 1;
    while (x > n) {
        const x_leng = Array.from(x.toString(2)).filter(
            (v) => v === '1',
        ).length;
        if (n_leng === x_leng) return x;
        x++;
    }
}

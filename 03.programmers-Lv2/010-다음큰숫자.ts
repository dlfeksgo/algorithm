//https://school.programmers.co.kr/learn/courses/30/lessons/12911
const getLength = (n: number) => {
    return Array.from(n.toString(2)).filter((v) => v === '1').length;
};

export function solution(n: number) {
    const n_leng = getLength(n);
    let x = n + 1;
    while (x > n) {
        const x_leng = getLength(x);
        if (n_leng === x_leng) return x;
        x++;
    }
}

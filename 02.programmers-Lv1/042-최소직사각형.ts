//https://school.programmers.co.kr/learn/courses/30/lessons/86491

export function solution(sizes: number[][]) {
    const width: number[] = [];
    const heigh: number[] = [];
    for (const [w, h] of sizes) {
        width.push(w < h ? h : w);
        heigh.push(w < h ? w : h);
    }
    return Math.max(...width) * Math.max(...heigh);
}

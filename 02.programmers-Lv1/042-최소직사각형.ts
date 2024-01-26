//https://school.programmers.co.kr/learn/courses/30/lessons/86491

export function solution(sizes: number[][]) {
    const width: number[] = [];
    const height: number[] = [];
    for (let [w, h] of sizes) {
        [w, h] = w < h ? [w, h] : [h, w];
        width.push(w);
        height.push(h);
    }
    return Math.max(...width) * Math.max(...height);
}

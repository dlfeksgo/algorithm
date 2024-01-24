//https://school.programmers.co.kr/learn/courses/30/lessons/86491

export function solution(sizes: number[][]) {
    const width: number[] = [];
    const heigh: number[] = [];
    for (const [w, h] of sizes) {
        if (w < h) {
            width.push(h);
            heigh.push(w);
        } else {
            width.push(w);
            heigh.push(h);
        }
    }
    return Math.max(...width) * Math.max(...heigh);
}

//순회하면서 세로 사이즈가 가로 사이즈보다 크면 위치 바꾸기
//순회 종료 후 세로 사이즈의 최댓값을 찾아서 곱하기

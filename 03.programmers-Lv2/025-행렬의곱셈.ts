//https://school.programmers.co.kr/learn/courses/30/lessons/12949

export function solution(arr1: number[][], arr2: number[][]) {
    return arr1.map((arr1Row) => {
        const sumArr: number[] = [];
        for (const arr2Idx of arr2[0].keys()) {
            let sum = 0;
            for (const [i, v] of arr1Row.entries()) {
                sum += v * arr2[i][arr2Idx];
            }
            sumArr.push(sum);
        }
        return sumArr;
    });
}

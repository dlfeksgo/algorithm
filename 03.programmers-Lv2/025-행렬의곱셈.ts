//https://school.programmers.co.kr/learn/courses/30/lessons/12949

export function solution(arr1: number[][], arr2: number[][]) {
    return arr1.map((arr1Row) => {
        const sumArr: number[] = [];
        const arr2Col = arr2[0];
        for (let i = 0; i < arr2Col.length; i++) {
            let sum = 0;
            for (let j = 0; j < arr1Row.length; j++) {
                sum += arr1Row[j] * arr2[j][i];
            }
            sumArr.push(sum);
        }
        return sumArr;
    });
}

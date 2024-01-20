//https://school.programmers.co.kr/learn/courses/30/lessons/12950

export function solution(arr1: number[][], arr2: number[][]) {
    return arr1.map((rows, rowIdx) =>
        rows.map((col, colIdx) => col + arr2[rowIdx][colIdx]),
    );
}

//  [[1,2], [2,3]]
//  [[3,4], [5,6]]

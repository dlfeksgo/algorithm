//https://school.programmers.co.kr/learn/courses/30/lessons/12950

import _ from 'lodash';

export function solution(arr1: number[][], arr2: number[][]) {
    const arr = _.zip(arr1.flat(1), arr2.flat(1)).map(([a, b]) => a! + b!);
    return _.chunk(arr, 2);
}

//  [[1,2], [2,3]]
//  [[3,4], [5,6]]

//ladash 사용 X
// return arr1.map((rows, rowIdx) =>
//     rows.map((col, colIdx) => col + arr2[rowIdx][colIdx]),
// );

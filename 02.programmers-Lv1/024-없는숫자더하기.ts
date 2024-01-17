//https://school.programmers.co.kr/learn/courses/30/lessons/86051

import _ from 'lodash';

export function solution(numbers: number[]) {
    return _.sum(_.range(0, 10).filter((v) => !numbers.includes(v)));
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));

//lodash 사용 하지 않는 풀이
// let sum = 0;
// for (let i = 0; i <= 9; i++) {
//     if (!numbers.includes(i)) sum += i;
// }
// return sum;

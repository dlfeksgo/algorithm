//https://school.programmers.co.kr/learn/courses/30/lessons/12912

import _ from 'lodash';

export function solution(a: number, b: number) {
    const min = _.min([a, b])!;
    const max = min + Math.abs(a - b);
    return _.sum(_.range(min, max + 1));
}

// lodash 사용하지 않는 풀이
// const min = a < b ? a : b;
// return Array(Math.abs(a - b) + 1)
//     .fill(min)
//     .map((v, i) => v + i)
//     .reduce((a, b) => a + b);

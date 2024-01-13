//https://school.programmers.co.kr/learn/courses/30/lessons/12954

import _ from 'lodash';

export function solution(x: number, n: number) {
    return _.range(x, x * (n + 1), x);
}

// return Array(n)
// .fill(x)
// .map((x, i) => x * (i + 1));

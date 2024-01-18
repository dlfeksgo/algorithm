//https://school.programmers.co.kr/learn/courses/30/lessons/70128

import _ from 'lodash';

export function solution(a: number[], b: number[]) {
    return _.sum(_.zip(a, b).map(([x, y]) => x! * y!));
}

//lodash 사용 X
// return a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);

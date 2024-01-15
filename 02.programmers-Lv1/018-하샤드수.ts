//https://school.programmers.co.kr/learn/courses/30/lessons/12947

import _ from 'lodash';

export function solution(x: number) {
    return x % _.sum(Array.from(String(x)).map(Number)) === 0;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/12935

import _ from 'lodash';

export function solution(arr: number[]) {
    const minVal = _.min(arr);
    const filteredArr = arr.filter((v) => v !== minVal);
    return filteredArr.length ? filteredArr : [-1];
}

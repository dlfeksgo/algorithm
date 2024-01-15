//https://school.programmers.co.kr/learn/courses/30/lessons/76501

import _ from 'lodash';

export function solution(absolutes: number[], signs: boolean[]) {
    return _.sum(
        _.zip(signs, absolutes).map(([sign, absolute]) =>
            sign ? +absolute! : -absolute!,
        ),
    );
}

//lodash 사용 하지 않는 풀이
// return signs
//     .map((v, i) => (v ? +absolutes[i] : -absolutes[i]))
//     .reduce((a, b) => a + b);

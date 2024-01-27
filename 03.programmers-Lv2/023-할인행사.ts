//https://school.programmers.co.kr/learn/courses/30/lessons/131127

import _ from 'lodash';

export function solution(want: string[], number: number[], discount: string[]) {
    let day = 0;

    const wantMap: Map<string, number> = new Map();
    for (const [i, v] of want.entries()) {
        wantMap.set(v, number[i]);
    }

    for (const i of discount.keys()) {
        const copyMap = new Map(wantMap);
        for (let j = i; j < i + 10; j++) {
            const name = discount[j];
            const val = copyMap.get(name);
            if (val) copyMap.set(name, val - 1);
        }
        if (!_.sum([...copyMap.values()])) day++;
    }
    return day;
}

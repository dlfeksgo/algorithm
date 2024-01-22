import _ from 'lodash';

//https://school.programmers.co.kr/learn/courses/30/lessons/131701
export function solution(elements: number[]) {
    const set = new Set();
    //원순열 만들기
    for (let i = 0; i < elements.length; i++) {
        const arr = elements.concat(elements.slice(0, i));
        for (let j = 0; j < arr.length; j++) {
            set.add(_.sum(arr.slice(j, j + i)));
        }
    }
    return set.size;
}

//lodash 사용 X
//set.add(arr.slice(j, j + i).reduce((a, b) => a + b, 0));

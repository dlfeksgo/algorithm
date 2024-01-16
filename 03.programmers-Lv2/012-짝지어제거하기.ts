//https://school.programmers.co.kr/learn/courses/30/lessons/12973

export function solution(s: string) {
    const strArr = [];
    for (const v of s) {
        strArr.push(v);
        if (strArr.length > 1) {
            let l1 = strArr.pop();
            let l2 = strArr.pop();
            if (l1 === l2) continue;
            else strArr.push(l2, l1);
        }
    }
    return strArr.length ? 0 : 1;
}

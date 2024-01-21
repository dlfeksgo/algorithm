//https://school.programmers.co.kr/learn/courses/30/lessons/76502

const bracket: {
    [key: string]: string;
} = {
    '[': ']',
    '(': ')',
    '{': '}',
};

const getCorrectStrCount = (arr: string[]): number => {
    const stack: string[] = [];
    for (const v of arr) {
        const isOpen = Object.prototype.hasOwnProperty.call(bracket, v);
        if (isOpen) stack.push(v);
        else {
            if (bracket[stack.at(-1)!] === v) stack.pop();
            else return 0;
        }
    }
    return stack.length === 0 ? 1 : 0;
};

export function solution(s: string) {
    let answer = 0;
    for (let i = 0; i < s.length; i++) {
        const rotateStr = [...s.slice(i, s.length), ...s.slice(0, i)];
        const correctCount = getCorrectStrCount(rotateStr);
        answer += correctCount;
    }
    return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/76502

const bracket: {
    [key: string]: string;
} = {
    '[': ']',
    '(': ')',
    '{': '}',
};

const getIsCorrect = (arr: string[]) => {
    const stack: string[] = [];
    for (const v of arr) {
        const isOpen = Object.prototype.hasOwnProperty.call(bracket, v);
        if (isOpen) stack.push(v);
        else {
            if (bracket[stack.at(-1)!] === v) stack.pop();
            else return false;
        }
    }
    return stack.length === 0;
};

export function solution(s: string) {
    let answer = 0;
    for (let i = 0; i < s.length; i++) {
        const rotateStr = [...s.slice(i, s.length), ...s.slice(0, i)];
        const isCorrect = getIsCorrect(rotateStr);
        if (isCorrect) answer++;
    }
    return answer;
}

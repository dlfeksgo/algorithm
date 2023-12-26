//https://school.programmers.co.kr/learn/courses/30/lessons/181917

type func = (x1: boolean, x2: boolean, x3: boolean, x4: boolean) => boolean;

const solution: func = (x1, x2, x3, x4) => {
    return (x1 || x2) && (x3 || x4);
};

console.log(solution(false, true, true, true));

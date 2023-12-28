//https://school.programmers.co.kr/learn/courses/30/lessons/42578

type Closet = {
    [key: string]: number;
};

export function solution(clothes: string[][]) {
    const closet: Closet = {};
    for (const [, category] of clothes) {
        if (!closet[category]) closet[category] = 1;
        else closet[category] += 1;
    }

    let sum = 1;
    for (const category in closet) {
        sum *= closet[category] + 1; //입거나 안입거나
    }
    sum -= 1; //전부 안입는 경우
    return sum;
}

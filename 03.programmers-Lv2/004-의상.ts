//https://school.programmers.co.kr/learn/courses/30/lessons/42578

type Closet = {
    [key: string]: string[];
};

export function solution(clothes: string[][]) {
    const closet: Closet = {};
    for (const [name, category] of clothes) {
        if (closet[category]) {
            closet[category] = [...closet[category], name];
        } else closet[category] = [name];
    }

    let sum = 1;
    for (const [, name] of Object.entries(closet)) {
        sum *= name.length + 1; //입거나 안입거나
    }

    sum -= 1; //전부 안입는 경우
    return sum;
}

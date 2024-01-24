//https://school.programmers.co.kr/learn/courses/30/lessons/131127

export function solution(want: string[], number: number[], discount: string[]) {
    let day = 0;

    const wantMap: Map<string, number> = new Map();
    for (const [i, v] of want.entries()) {
        wantMap.set(v, number[i]);
    }

    for (let i = 0; i <= discount.length; i++) {
        const copyMap = new Map(wantMap);
        for (let j = i; j < i + 10; j++) {
            const name = discount[j];
            const val = copyMap.get(name);
            if (val) copyMap.set(name, val - 1);
        }
        if (![...copyMap.values()].reduce((a, b) => a + b)) day++;
    }
    return day;
}

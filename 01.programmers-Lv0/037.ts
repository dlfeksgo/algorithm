function solution(a: number, b: number, c: number, d: number) {
    let answer = 0;
    let diceNumber = [a, b, c, d].sort((a, b) => a - b);

    let dupleArr: number[] = [];

    for (const [i, v] of diceNumber.entries()) {
        if (v !== diceNumber[i - 1] && v !== diceNumber[i + 1]) continue;
        else dupleArr.push(v);
    }

    const dupleLength = dupleArr.length;
    if (dupleLength === 2) {
        const [q, r] = diceNumber.filter((v) => v !== dupleArr[0]);
        answer = q * r;
    } else if (dupleLength === 3) {
        const [q] = diceNumber.filter((v) => v !== dupleArr[0]);
        answer = (10 * dupleArr[0] + q) ** 2;
    } else if (dupleLength === 4) {
        const set = [...new Set(dupleArr)];
        if (set.length === 2) {
            answer = (set[0] + set[1]) * Math.abs(set[0] - set[1]);
        } else answer = 1111 * set[0];
    } else {
        answer = diceNumber[0];
    }

    return answer;
}

console.log(solution(2, 5, 2, 6));

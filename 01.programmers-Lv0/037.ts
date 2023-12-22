function solution(a: number, b: number, c: number, d: number) {
    let diceNumber = [a, b, c, d].sort((a, b) => a - b);
    let dupleArr: number[] = [];

    for (const [i, v] of diceNumber.entries()) {
        if (v !== diceNumber[i - 1] && v !== diceNumber[i + 1]) continue;
        else dupleArr.push(v);
    }

    const dupleLength = dupleArr.length;
    if (dupleLength === 2) {
        const [q, r] = diceNumber.filter((v) => v !== dupleArr[0]);
        return q * r;
    } else if (dupleLength === 3) {
        const [q] = diceNumber.filter((v) => v !== dupleArr[0]);
        return (10 * dupleArr[0] + q) ** 2;
    } else if (dupleLength === 4) {
        const set = [...new Set(dupleArr)];
        if (set.length === 2)
            return (set[0] + set[1]) * Math.abs(set[0] - set[1]);
        else return 1111 * set[0];
    } else return diceNumber[0];
}

console.log(solution(2, 2, 2, 2));

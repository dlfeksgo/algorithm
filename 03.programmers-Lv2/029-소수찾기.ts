//https://school.programmers.co.kr/learn/courses/30/lessons/42839

function solution(numbers: string) {
    const set = new Set();
    let count = 0;

    for (const permVal of permutation([...numbers], numbers.length)) {
        const val = parseInt(permVal.join(''));
        if (!set.has(val) && isPrime(val)) {
            set.add(val);
            count++;
        }
    }

    return count;
}

console.log(solution('17'));

function* permutation(xs: string[], length: number, newXs: string[] = []): Iterable<string[]> {
    if (length === 1) yield newXs;

    for (const [i, v] of xs.entries()) {
        const rest = [...xs.slice(0, i), ...xs.slice(i + 1)];
        const newPermutation = [...newXs, v];
        yield* permutation(rest, length - 1, newPermutation);
    }

    return yield newXs;
}

function isPrime(value: number): boolean {
    for (let i = 2; i <= Math.sqrt(value); i++) {
        if (value % i < 1) return false;
    }
    return value > 1;
}

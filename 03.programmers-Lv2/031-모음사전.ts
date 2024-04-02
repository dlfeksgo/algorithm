//https://school.programmers.co.kr/learn/courses/30/lessons/84512

function* generateWords(): Iterable<[string, number]> {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    let count = 0;
    function* combination(str: string = ''): Iterable<[string, number]> {
        if (str.length > 5) return;
        yield [str, count++];
        for (const v of vowels) {
            yield* combination(str + v);
        }
    }
    yield* combination();
}

function findWordIdx(word: string): number | undefined {
    for (const [v, count] of generateWords()) {
        if (v === word) return count;
    }
}

console.log(findWordIdx('AAAE'));

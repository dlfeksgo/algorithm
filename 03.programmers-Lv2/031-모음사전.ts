//https://school.programmers.co.kr/learn/courses/30/lessons/84512

function* generateWords<T>(xs: T[], str: string = ''): Iterable<string> {
    if (str.length > 5) return;
    yield str;
    for (const v of xs) {
        yield* generateWords(xs, str + v);
    }
}

function findWordIdx(word: string) {
    let count = 0;
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    for (const v of generateWords(vowels)) {
        if (v === word) return count;
        count++;
    }
}

console.log(findWordIdx('AAAAE'));

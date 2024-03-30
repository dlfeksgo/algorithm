//https://school.programmers.co.kr/learn/courses/30/lessons/84512

export function findWordIdx(word: string) {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    const dictionary = [];
    for (let i = 1; i <= 5; i++) {
        for (const curWord of permutation(vowels, i)) {
            dictionary.push(curWord.join(''));
        }
    }
    dictionary.sort();
    return dictionary.indexOf(word) + 1;
}

console.log(findWordIdx('AAAE'));

function* permutation<T>(xs: T[], repeat: number): Iterable<T[]> {
    if (repeat === 0) return yield [];
    for (const x of xs) {
        for (const perm of permutation(xs, repeat - 1)) {
            yield [x, ...perm];
        }
    }
}

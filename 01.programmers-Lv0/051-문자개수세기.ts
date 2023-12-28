//https://school.programmers.co.kr/learn/courses/30/lessons/181902

export function solution(my_string: string) {
    const map = new Map();

    const upper = Array.from({ length: 26 }, (_, i) =>
        String.fromCharCode(i + 65),
    );
    const lower = Array.from({ length: 26 }, (_, i) =>
        String.fromCharCode(i + 97),
    );
    const alphabet = upper.concat(lower);

    for (const char of alphabet) {
        map.set(char, 0);
    }

    for (const char of my_string) {
        const data = (map.get(char) ?? 0) + 1;
        map.set(char, data);
    }

    return alphabet.map((v) => map.get(v));
}

//https://school.programmers.co.kr/learn/courses/30/lessons/42860

function solution(name: string) {
    let answer = 0;
    const min = 65;
    const max = 90 + 1;

    const findChar = (find: string) => {
        const findCode = find.charCodeAt(0);
        return Math.min(findCode - min, max - findCode);
    };

    const chars = name.split('').map(findChar);
    let minMove = chars.length - 1;

    for (const [i, char] of chars.entries()) {
        answer += char;
        let cursor = i + 1;

        while (cursor < chars.length && chars[cursor] === 0) cursor++;

        minMove = Math.min(
            minMove, //정방향으로 전진
            i * 2 + chars.length - cursor, //뒤로 돌아가기
            i + 2 * (chars.length - cursor), //역방향
        );
    }

    return answer + minMove;
}

console.log(solution('BAABAA'));

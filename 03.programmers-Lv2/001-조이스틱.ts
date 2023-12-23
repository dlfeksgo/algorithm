//https://school.programmers.co.kr/learn/courses/30/lessons/42860

function findChar(str: string) {
    const min = 'A'.charCodeAt(0);
    const max = 'Z'.charCodeAt(0) + 1;
    const code = str.charCodeAt(0);
    return Math.min(code - min, max - code);
}

export function solution(name: string) {
    const chars = name.split('').map(findChar);

    let chageCount = 0;
    let minCursorCount = chars.length - 1;

    for (const [i, char] of chars.entries()) {
        chageCount += char;
        let cursorCount = i + 1;

        while (cursorCount < chars.length && chars[cursorCount] === 0)
            cursorCount++;

        minCursorCount = Math.min(
            minCursorCount, //마지막 문자열까지 정방향 이동
            i * 2 + chars.length - cursorCount, //현재 문자열까지 이동(i) + 그만큼 돌아가기(i) + 역방향으로 A를 만나기까지 움직임
            i + 2 * (chars.length - cursorCount), //왼쪽으로 A를 만날 때까지 움직임 + 그만큼 뒤로 + 현재 문자열까지 이동(i)
        );
    }

    return chageCount + minCursorCount;
}

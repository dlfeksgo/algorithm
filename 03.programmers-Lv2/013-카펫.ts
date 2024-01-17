//https://school.programmers.co.kr/learn/courses/30/lessons/42842

export function solution(brown: number, yellow: number) {
    //x = ((brown-4)/2 + 루트 (brown-4)/2의 제곱 - 4*yellow) /2
    const x =
        ((brown - 4) / 2 +
            Math.sqrt(Math.pow((brown - 4) / 2, 2) - 4 * yellow)) /
        2;
    const y = yellow / x;
    return [Math.max(x + 2, y + 2), Math.min(x + 2, y + 2)];
}

// 0 0 0 0 0 0 0 0
// 0 1 1 1 1 1 1 0
// 0 1 1 1 1 1 1 0
// 0 1 1 1 1 1 1 0
// 0 1 1 1 1 1 1 0
// 0 0 0 0 0 0 0 0

//노란색 기준 계산
//x * y = yellow
//(x+2) * (y+2) = brown + yellow
// -> xy + 2x + 2y + 4 = brown + yellow

//2(x + y) + 4 = brown
//x * y = yellow
//x제곱 - ((brown - 4) / 2)x + yellow = 0

//a = 1
//b = -(brown-4)/2
//c = yellow

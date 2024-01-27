//https://school.programmers.co.kr/learn/courses/30/lessons/87390

export function solution(n: number, left: number, right: number) {
    const arr: number[] = [];
    for (let i = left; i <= right; i++) {
        const row = Math.floor(i / n);
        const col = i % n;
        arr.push(Math.max(row, col) + 1);
    }
    return arr;
}

//실패
// const arr: number[][] = [];
// for (let i = 0; i < n; i++) {
//     const tempArr = [];
//     for (let j = 0; j < n; j++) {
//         if (j < i) {
//             tempArr.push(i + 1);
//         } else tempArr.push(j + 1);
//     }
//     arr.push(tempArr);
// }
// const flatArr = arr.flat(1);
// return flatArr.slice(left, right + 1);

//n = 4 - 1234, 2234, 3334, 4444

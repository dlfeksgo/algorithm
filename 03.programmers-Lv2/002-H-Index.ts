//https://school.programmers.co.kr/learn/courses/30/lessons/42747

export function solution(citations: number[]) {
    let hIdx = 0;
    citations.sort((a, b) => b - a);
    for (const [i, citation] of citations.entries()) {
        if (citation > i) hIdx += 1;
    }
    return hIdx;
}
console.log(solution([3, 0, 6, 1, 5]));

//첫 번째 풀이
// export function solution(citations: number[]) {
//     let hIdx = 0;
//     for (let h = 0; h <= 10000; h++) {
//         let count = 0;
//         for (const citation of citations) {
//             if (citation >= h) count += 1;
//         }
//         if (count >= h) hIdx = h;
//     }
//     return hIdx;
// }

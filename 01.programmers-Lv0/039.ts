//https://school.programmers.co.kr/learn/courses/30/lessons/181914

export function solution(number: string) {
    let answer = 0;
    if (number.length > 19) {
        let sum = 0;
        for (const str of number) {
            sum += Number(str);
        }
        answer = sum % 9;
    } else answer = Number(number) % 9;
    return answer;
}

//01
// function solution(number: string) {
//     let answer = 0;
//     if (number.length > 19) {
//         const sum = number
//             .split('')
//             .map(Number)
//             .reduce((a, b) => a + b);
//         answer = sum % 9;
//     } else answer = Number(number) % 9;
//     return answer;
// }

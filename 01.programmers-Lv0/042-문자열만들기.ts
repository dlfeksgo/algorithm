//https://school.programmers.co.kr/learn/courses/30/lessons/181911

export function solution(my_strings: string[], parts: number[][]) {
    return parts.map(([s, e], i) => my_strings[i].slice(s, e + 1)).join('');
}

//01
// function solution(my_strings: string[], parts: number[][]) {
//     let answer = '';
//     for (const [i, str] of my_strings.entries()) {
//         answer += str.slice(parts[i][0], parts[i][1] + 1);
//     }
//     return answer;
// }

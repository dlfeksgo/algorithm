//https://school.programmers.co.kr/learn/courses/30/lessons/181909

function solution(my_string: string) {
    return Array.from(my_string)
        .map((v, i) => my_string.slice(i))
        .sort();
}

//01
// function solution(my_string: string) {
//     let answer: string[] = [];
//     for (let i = 0; i < my_string.length; i++) {
//         answer.push(my_string.slice(i));
//     }
//     return answer.sort();
// }

console.log(solution('banana'));

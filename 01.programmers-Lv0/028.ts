//https://school.programmers.co.kr/learn/courses/30/lessons/181925

export function solution(numLog: number[]) {
    let answer = '';
    for (const [i, v] of numLog.entries()) {
        const differ: number | string =
            i === numLog.length - 1 ? '' : numLog[i + 1] - v;
        switch (differ) {
            case 1:
                answer += 'w';
                break;
            case -1:
                answer += 's';
                break;
            case 10:
                answer += 'd';
                break;
            case -10:
                answer += 'a';
                break;
            default:
                return answer;
        }
    }
    return answer;
}

const result = solution([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]);
console.log(result);
// let arr = [];
// for (let i = 0; i < numLog.length - 1; i++) {
// 	if (i === numLog.length - 1) {
// 		arr.push(0 - numLog[i]);
// 	} else {
// 		arr.push(numLog[i + 1] - numLog[i]);
// 	}
// }
// arr = arr.map((v) => {
// 	switch (v) {
// 		case 1:
// 			answer += "w";
// 		case -1:
// 			answer += "s";
// 		case 10:
// 			answer += "d";
// 		case -10:
// 			answer += "a";
// 		default:
// 	}
// });
// answer += arr.join("");

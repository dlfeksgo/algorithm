//https://school.programmers.co.kr/learn/courses/30/lessons/42748

export function solution(array: number[], commands: number[][]) {
    return commands.map(([i, j, k]) => {
        const valueK = array.slice(i - 1, j).sort((a, b) => a - b);
        return valueK[k - 1];
    });
}

//멘토링 이전 풀이
// export function solution(array, commands) {
// 	const result = [];
// 	for (let i = 0; i < commands.length; i++) {
// 		const [start, end, k] = commands[i];
// 		const arr = array.slice(start - 1, end);
// 		arr.sort((a, b) => a - b);
// 		result.push(arr[k - 1]);
// 	}
// 	return result;
// }

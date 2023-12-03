//https://school.programmers.co.kr/learn/courses/30/lessons/181922

export function solution(arr, queries) {
	for (const query of queries) {
		for (let i = query[0]; i <= query[1]; i++) {
			i % query[2] === 0 ? (arr[i] += 1) : "";
		}
	}
	return arr;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/181923

function solution(arr, queries) {
	const result = [];
	for (const query of queries) {
		const data = [];
		for (let i = query[0]; i <= query[1]; i++) {
			if (i > query[2]) data.push(arr[i]);
		}
		result.push(data.length === 0 ? -1 : Math.min(...data));
	}
	return result;
}

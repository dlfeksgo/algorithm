//https://school.programmers.co.kr/learn/courses/30/lessons/181924

function solution(arr, queries) {
	for (const query of queries) {
		let data = arr[query[0]];
		arr[query[0]] = arr[query[1]];
		arr[query[1]] = data;
	}
	return arr;
}

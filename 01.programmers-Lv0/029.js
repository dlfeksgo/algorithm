//https://school.programmers.co.kr/learn/courses/30/lessons/181924

function solution(arr, queries) {
	queries.forEach((query) => {
		let origin = arr[query[1]];
		arr[query[1]] = arr[query[0]];
		arr[query[0]] = origin;
	});
	return arr;
}

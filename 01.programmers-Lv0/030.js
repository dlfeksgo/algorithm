//https://school.programmers.co.kr/learn/courses/30/lessons/181923

function solution(arr, queries) {
	let answer = [];
	queries.forEach((query) => {
		let newArr = [];
		for (let i = query[0]; i <= query[1]; i++) {
			if (query[2] < arr[i]) {
				newArr.push(arr[i]);
			}
		}
		newArr.length === 0
			? answer.push(-1)
			: answer.push(Math.min.apply(null, newArr));
	});
	return answer;
}

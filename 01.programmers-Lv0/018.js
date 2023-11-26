//https://school.programmers.co.kr/learn/courses/30/lessons/181935

function solution(n) {
	let answer = [];
	if (n % 2 === 0) {
		let arr = Array(n)
			.fill()
			.map((v, i) => i + 1);
		answer = arr.filter((v) => v % 2 === 0).map((v) => v * v);
	} else {
		let arr = Array(n)
			.fill()
			.map((v, i) => i + 1);
		answer = arr.filter((v) => v % 2 !== 0);
	}
	return answer.reduce((a, b) => a + b);
}

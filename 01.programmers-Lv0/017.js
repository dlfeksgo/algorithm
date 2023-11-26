//https://school.programmers.co.kr/learn/courses/30/lessons/181936

function solution(number, n, m) {
	const a = number % n === 0;
	const b = number % m === 0;
	return a && b ? 1 : 0;
}

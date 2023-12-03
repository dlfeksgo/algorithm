//https://school.programmers.co.kr/learn/courses/30/lessons/181930

export function solution(a, b, c) {
	if (a !== b && b !== c && a !== c) {
		return a + b + c;
	} else if (a === b && b === c) {
		return (
			(a + b + c) *
			(a * a + b * b + c * c) *
			(a * a * a + b * b * b + c * c * c)
		);
	} else {
		return (a + b + c) * (a * a + b * b + c * c);
	}
}

//https://school.programmers.co.kr/learn/courses/30/lessons/181921

export function solution(l, r) {
	const answer = [];
	for (let i = l; i <= r; i++) {
		const str = String(i).split("");
		str.filter((v) => v !== "5" && v !== "0").length >= 1 ? "" : answer.push(i);
	}
	if (answer.length === 0) {
		answer.push(-1);
	}
	return answer;
}

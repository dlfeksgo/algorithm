//https://school.programmers.co.kr/learn/courses/30/lessons/181921

function solution(l, r) {
	let answer = [];
	for (let i = l; i <= r; i++) {
		let str = String(i).split('');
		str.filter((v) => v !== '5' && v !== '0').length >= 1 ? '' : answer.push(i);
	}
	if (answer.length === 0) {
		answer.push(-1);
	}
	return answer;
}

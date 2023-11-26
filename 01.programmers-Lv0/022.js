//https://school.programmers.co.kr/learn/courses/30/lessons/181931

function solution(a, d, included) {
	let value = [];
	let arr = [];
	included.map((v, i) => {
		i === 0 ? value.push(a) : value.push(value[i - 1] + d);
		v === true ? (i === 0 ? arr.push(a) : arr.push(value[i - 1] + d)) : '';
	});

	return arr.reduce((a, b) => a + b);
}

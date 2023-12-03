//https://school.programmers.co.kr/learn/courses/30/lessons/181931

export function solution(a, d, included) {
	const value = [];
	const result = [];
	included.forEach((v, i) => {
		i === 0 ? value.push(a) : value.push(value[i - 1] + d);
		v === true && result.push(value[i]);
	});
	return result.reduce((a, b) => a + b);
}

//for문 방식
// function solution(a, d, included) {
// 	const value = [];
// 	const arr = [];
// 	for (let i = 0; i < included.length; i++) {
// 		i === 0 ? value.push(a) : value.push(value[i - 1] + d);
// 		included[i] === true ? arr.push(value[i]) : '';
// 	}
// 	return arr.reduce((a, b) => a + b)
// }

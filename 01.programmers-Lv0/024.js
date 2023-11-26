//https://school.programmers.co.kr/learn/courses/30/lessons/181929

function solution(num_list) {
	let answer1 = num_list.reduce((a, b) => a + b);
	let answer2 = num_list.reduce((a, b) => a * b);

	return answer1 ** 2 > answer2 ? 1 : 0;
}

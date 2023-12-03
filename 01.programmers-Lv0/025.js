//https://school.programmers.co.kr/learn/courses/30/lessons/181928

export function solution(num_list) {
	let odd = "";
	let even = "";
	num_list.map((num) => (num % 2 === 0 ? (even += num) : (odd += num)));
	return Number(odd) + Number(even);
}

//https://school.programmers.co.kr/learn/courses/30/lessons/181942

function solution(str1, str2) {
	var answer = '';
	let arr = [];
	let str1Arr = str1.split('');
	let str2Arr = str2.split('');
	for (let i = 0; i < str1.length; i++) {
		arr.push(str1Arr[i], str2Arr[i]);
	}
	answer = arr.join('');
	return answer;
}

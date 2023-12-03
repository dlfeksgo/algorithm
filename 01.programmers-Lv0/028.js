//https://school.programmers.co.kr/learn/courses/30/lessons/181925

export function solution(numLog) {
	let arr = [];
	for (let i = 0; i < numLog.length - 1; i++) {
		if (i === numLog.length - 1) {
			arr.push(0 - numLog[i]);
		} else {
			arr.push(numLog[i + 1] - numLog[i]);
		}
	}
	arr = arr.map((v) => {
		switch (v) {
			case 1:
				return "w";
			case -1:
				return "s";
			case 10:
				return "d";
			case -10:
				return "a";
			default:
		}
	});
	return arr.join("");
}

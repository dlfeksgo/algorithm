//https://school.programmers.co.kr/learn/courses/30/lessons/181932

export function solution(code) {
	let ret = "";
	let mode = 0;

	if (!code || code.split("").filter((v) => v !== "1").length === 0) {
		return "EMPTY";
	}

	for (let i = 0; i < code.length; i++) {
		if (mode === 0) {
			if (code[i] === "1") {
				mode = 1;
			} else {
				return i % 2 === 0 ? (ret += code[i]) : "";
			}
		} else {
			if (code[i] === "1") {
				mode = 0;
			} else {
				return i % 2 !== 0 ? (ret += code[i]) : "";
			}
		}
	}
	return ret;
}

//slice 대체 방법
const [, ...words] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

//다른 풀이: Array.from(words)
const arr = [...new Set(words)];
arr.sort((a, b) => {
	if (a.length !== b.length) return a.length - b.length;
	else {
		if (a < b) return -1;
		else if (a > b) return 1;
		else return 0;
	}
});

console.log(arr.join("\n"));

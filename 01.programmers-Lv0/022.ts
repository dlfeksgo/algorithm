//https://school.programmers.co.kr/learn/courses/30/lessons/181931

export function solution(a: number, d: number, included: boolean[]) {
    let value = a;
    let sum = 0;
    for (let i = 0; i < included.length; i++) {
        if (included[i] === true) {
            sum += value;
        }
        value += d;
    }
    return sum;
}

//for문
// function solution(a, d, included) {
// 	const value = [];
// 	const arr = [];
// 	for (let i = 0; i < included.length; i++) {
// 		i === 0 ? value.push(a) : value.push(value[i - 1] + d);
// 		included[i] === true ? arr.push(value[i]) : '';
// 	}
// 	return arr.reduce((a, b) => a + b)
// }

//forEach
// const value = [];
// const result = [];
// included.forEach((v, i) => {
// 	i === 0 ? value.push(a) : value.push(value[i - 1] + d);
// 	v === true && result.push(value[i]);
// });
// return result.reduce((a, b) => a + b);

//https://school.programmers.co.kr/learn/courses/30/lessons/181934

function solution(ineq, eq, n, m) {
	if (ineq === '>' && eq === '=') {
		return n >= m ? 1 : 0;
	} else if (ineq === '<' && eq === '=') {
		return n <= m ? 1 : 0;
	} else if (ineq === '>' && eq === '!') {
		return n > m ? 1 : 0;
	} else if (ineq === '<' && eq === '!') {
		return n < m ? 1 : 0;
	}
}

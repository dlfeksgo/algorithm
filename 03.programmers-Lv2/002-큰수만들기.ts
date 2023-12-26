//https://school.programmers.co.kr/learn/courses/30/lessons/42883

function solution(number: string, k: number) {
    const stack: string[] = [];

    for (const num of number) {
        while (k > 0 && stack[stack.length - 1] < num) {
            stack.pop();
            k--;
        }
        stack.push(num);
    }
    stack.splice(stack.length - k, k); //number.length - k
    return stack.join('');
}
console.log(solution('9999', 1));

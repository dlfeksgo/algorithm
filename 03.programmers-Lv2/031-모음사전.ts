//https://school.programmers.co.kr/learn/courses/30/lessons/84512

export function findWordIdx(word: string) {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    const answerMap = new Map();
    let count = 0;

    const dfs = (str: string = '') => {
        if (str.length > 5) return;
        answerMap.set(str, count);
        count++;
        for (const v of vowels) {
            dfs(str + v);
        }
    };
    dfs();
    return answerMap.get(word);
}

console.log(findWordIdx('AAAE'));

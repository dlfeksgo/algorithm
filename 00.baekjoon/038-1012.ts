//https://www.acmicpc.net/problem/1012

const [$n, ...lines] = require('fs').readFileSync('input.txt').toString().trim().split('\n');

const testCase = Number($n);
let M: number, N: number, K: number;

const colorWormsMap = (graph: number[][], y: number, x: number) => {
    const stack = [[x, y]];
    //좌,우,상,하
    const distances = [
        [-1, 0],
        [1, 0],
        [0, 1],
        [0, -1],
    ];

    while (stack.length) {
        const [x, y] = stack.pop()!; //y행 x열

        //인접한 곳 확인
        for (let i = 0; i < 4; i++) {
            const xPos = x + distances[i][0];
            const yPos = y + distances[i][1];

            if (xPos < 0 || xPos >= M || yPos < 0 || yPos >= N) continue;
            if (graph[yPos][xPos]) {
                stack.push([xPos, yPos]);
                graph[yPos][xPos] = 0; //방문처리
            }
        }
    }
};

const getWorms = (graph: number[][]) => {
    let answer = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (graph[i][j]) {
                answer++;
                colorWormsMap(graph, i, j);
            }
        }
    }
    return answer;
};

for (let i = 0; i < testCase; i++) {
    [M, N, K] = lines[i].split(' ').map(Number);
    const graph: number[][] = [];
    const cabbages: string[] = lines.splice(i + 1, K);
    //배추밭 배열 생성
    for (let i = 0; i < N; i++) {
        graph[i] = new Array(M);
    }
    //배추 심기
    for (const v of cabbages) {
        const [y, x] = v.split(' ').map(Number);
        graph[x][y] = 1;
    }
    console.log(getWorms(graph));
}

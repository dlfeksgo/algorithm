//https://school.programmers.co.kr/learn/courses/30/lessons/43162

function getNetworkCnt(n: number, computers: number[][]) {
    let network = 0;
    const visited: number[] = Array(n).fill(0);

    const isNetworkConnected = (comIdx: number) => {
        if (visited[comIdx]) return 0;
        visited[comIdx] = 1;

        for (const linkIdx of computers.keys()) {
            if (computers[comIdx][linkIdx]) isNetworkConnected(linkIdx);
        }
        return 1;
    };

    for (const i of computers.keys()) {
        network += isNetworkConnected(i);
    }
    return network;
}

console.log(
    getNetworkCnt(3, [
        [1, 1, 0],
        [1, 1, 1],
        [0, 1, 1],
    ]),
);

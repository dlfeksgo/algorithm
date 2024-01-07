//https://school.programmers.co.kr/learn/courses/30/lessons/178871

export function solution(players: string[], callings: string[]) {
    const rankedList: { [key: string]: number } = {};

    for (const [rank, player] of players.entries()) {
        rankedList[player] = rank;
    }

    const replacePlayer = (backRank: number, frontRank: number) => {
        const calledPlayer = players[backRank];
        const frontPlayer = players[frontRank];

        if (backRank > frontRank) {
            //첫 호출에서 players를 변경하면 두번째 호출에서 player의 이름 변동 없이 순위만 달라진다.
            //첫 호출에서 rankedList를 변경하면 calledPlayer와 frontPlayer의 순서가 바뀌어서 해석이 헷갈린다.
            players[frontRank] = calledPlayer;
            players[backRank] = frontPlayer;
        } else {
            rankedList[calledPlayer] -= 1;
            rankedList[frontPlayer] += 1;
        }
    };

    for (const callName of callings) {
        let backRank = rankedList[callName];
        replacePlayer(backRank, backRank - 1);
        replacePlayer(backRank - 1, backRank);
    }

    return players;
}

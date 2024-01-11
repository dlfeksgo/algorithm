//https://school.programmers.co.kr/learn/courses/30/lessons/42583

export function solution(
    bridge_length: number,
    weight: number,
    truck_weights: number[],
) {
    let sec = 0;
    let sum = 0;
    const trucks = [];

    while (truck_weights.length || trucks.length) {
        if (
            weight >= sum + truck_weights[0] &&
            bridge_length >= trucks.length
        ) {
            const truckWeight = truck_weights.shift()!;
            sum += truckWeight;

            //sec + bridge_length: 누적 시간 + 다리 길이 | 올라온 트럭이 다리를 지나는데 걸리는 최소 시간
            trucks.push([truckWeight, sec + bridge_length]);
            sec++;
        } else {
            const [passedTruckWeight, passedSec] = trucks.shift()!;
            if (sec < passedSec) sec = passedSec;
            sum -= passedTruckWeight;
        }
    }
    return sec + 1; //마지막 트럭이 빠져나가는 시간 +1 추가
}

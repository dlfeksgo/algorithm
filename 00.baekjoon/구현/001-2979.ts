//https://www.acmicpc.net/problem/2979

const [input, ...lines]: string[] = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const [A, B, C] = input.split(' ').map(Number);
const recordMap: [number, number][] = lines.map((line) => line.split(' ').map(Number) as [number, number]);
const price: Record<string, number> = {
    '1': A,
    '2': B,
    '3': C,
};

const setTimeSlot = (maxTime: number, map: [number, number][]) => {
    const timeSlot = Array(maxTime + 1).fill(0);
    for (const [entry, exit] of map) {
        for (let i = entry; i < exit; i++) {
            timeSlot[i]++;
        }
    }
    return timeSlot;
};

const getParkingPrice = (timeSlot: number[]) => {
    let totalCost = 0;
    for (const truck of timeSlot) {
        if (!truck || truck > 3) continue;
        totalCost += price[truck] * truck;
    }
    return totalCost;
};

const trucksByTimeSlot = setTimeSlot(100, recordMap);
const totalCost = getParkingPrice(trucksByTimeSlot);
console.log(totalCost);
